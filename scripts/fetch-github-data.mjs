#!/usr/bin/env node
/**
 * fetch-github-data.mjs
 *
 * Fetches live data from the GitHub API and writes it to
 * src/data/github-data.json.  Vite bundles this file at build time so the
 * front-end gets fresh data without any runtime API calls (no rate-limiting).
 *
 * Usage:
 *   node scripts/fetch-github-data.mjs
 *
 * The GITHUB_TOKEN environment variable is optional but strongly recommended
 * to avoid the 60 req/hr unauthenticated rate limit.  In GitHub Actions the
 * built-in secrets.GITHUB_TOKEN is automatically available.
 *
 * If the fetch fails (e.g. no network in a local build) the existing
 * src/data/github-data.json is left untouched.
 */

import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, '..', 'src', 'data', 'github-data.json');
const ORG = 'all-aboard-ohio';

const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'aao-lab-homepage-build',
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

async function ghFetch(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const remaining = res.headers.get('x-ratelimit-remaining');
    throw new Error(`GitHub API ${res.status} for ${url}. Rate limit remaining: ${remaining}`);
  }
  return res.json();
}

async function fetchRepos() {
  return ghFetch(
    `https://api.github.com/orgs/${ORG}/repos?type=public&per_page=30&sort=pushed`
  );
}

async function fetchContributors(repoName) {
  try {
    return await ghFetch(
      `https://api.github.com/repos/${ORG}/${repoName}/contributors?per_page=20&anon=false`
    );
  } catch {
    return [];
  }
}

async function fetchGoodFirstIssues() {
  try {
    const data = await ghFetch(
      `https://api.github.com/search/issues?q=org:${ORG}+label:%22good+first+issue%22+state:open&per_page=6&sort=created&order=desc`
    );
    return data.items || [];
  } catch {
    return [];
  }
}

async function main() {
  console.log(`[github-data] Fetching data for org: ${ORG}`);
  console.log(`[github-data] Authenticated: ${!!process.env.GITHUB_TOKEN}`);

  const repos = await fetchRepos();
  console.log(`[github-data] Found ${repos.length} public repos`);

  // Gather contributors across the top 8 most-recently-pushed repos
  const topRepos = repos.slice(0, 8);
  const contributorLists = await Promise.all(
    topRepos.map((r) => fetchContributors(r.name))
  );

  // Deduplicate contributors
  const contributorMap = new Map();
  for (const list of contributorLists) {
    if (!Array.isArray(list)) continue;
    for (const c of list) {
      if (c.type === 'Bot') continue;
      if (contributorMap.has(c.login)) {
        contributorMap.get(c.login).contributions += c.contributions;
      } else {
        contributorMap.set(c.login, { ...c });
      }
    }
  }
  const contributors = Array.from(contributorMap.values())
    .sort((a, b) => b.contributions - a.contributions)
    .slice(0, 24);

  const goodFirstIssues = await fetchGoodFirstIssues();
  console.log(`[github-data] Found ${goodFirstIssues.length} good-first-issues`);

  const output = {
    generatedAt: new Date().toISOString(),
    repos: repos.map((r) => ({
      id: r.id,
      name: r.name,
      description: r.description,
      html_url: r.html_url,
      stargazers_count: r.stargazers_count,
      open_issues_count: r.open_issues_count,
      pushed_at: r.pushed_at,
      topics: r.topics || [],
    })),
    contributors,
    goodFirstIssues,
  };

  writeFileSync(OUTPUT, JSON.stringify(output, null, 2));
  console.log(`[github-data] Written to ${OUTPUT}`);
}

main().catch((err) => {
  console.error('[github-data] Fetch failed:', err.message);
  if (existsSync(OUTPUT)) {
    console.warn('[github-data] Keeping existing cached data.');
  } else {
    // Write an empty shell so the import in the app doesn't crash
    writeFileSync(
      OUTPUT,
      JSON.stringify(
        { generatedAt: null, repos: [], contributors: [], goodFirstIssues: [] },
        null,
        2
      )
    );
    console.warn('[github-data] Wrote empty fallback data.');
  }
  // Exit 0 so the build isn't blocked by a network failure
  process.exit(0);
});
