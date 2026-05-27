import { useState, useEffect } from 'react';
import { ExternalLink, Loader2, AlertCircle, Users, ArrowRight } from 'lucide-react';
import { GITHUB_ORG, GITHUB_ORG_URL, SLACK_INVITE_URL } from '../config';

// Below this number of real contributors, show placeholder circles + "just getting started" overlay
const PLACEHOLDER_THRESHOLD = 10;
// Total slots always shown (real + placeholders)
const TOTAL_SLOTS = 16;

// Repos to aggregate contributors from.
// Falls back to public repos fetched from the org if REPOS is empty.
const REPOS = []; // populated dynamically from org repos

async function fetchOrgContributors() {
  // Fetch public repos
  const reposRes = await fetch(
    `https://api.github.com/orgs/${GITHUB_ORG}/repos?type=public&per_page=30&sort=pushed`
  );
  if (!reposRes.ok) throw new Error(reposRes.status);
  const repos = await reposRes.json();

  // Fetch contributors for each repo in parallel, cap at first 8 repos
  const topRepos = repos.slice(0, 8);
  const contributorLists = await Promise.all(
    topRepos.map((repo) =>
      fetch(`https://api.github.com/repos/${GITHUB_ORG}/${repo.name}/contributors?per_page=20&anon=false`)
        .then((r) => (r.ok ? r.json() : []))
        .catch(() => [])
    )
  );

  // Merge + deduplicate by login, sum contributions
  const map = new Map();
  for (const list of contributorLists) {
    if (!Array.isArray(list)) continue;
    for (const c of list) {
      if (c.type === 'Bot') continue;
      if (map.has(c.login)) {
        map.get(c.login).contributions += c.contributions;
      } else {
        map.set(c.login, { ...c });
      }
    }
  }

  return Array.from(map.values())
    .sort((a, b) => b.contributions - a.contributions)
    .slice(0, 24);
}

function Avatar({ contributor }) {
  return (
    <a
      href={contributor.html_url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${contributor.login} — ${contributor.contributions} contribution${contributor.contributions !== 1 ? 's' : ''}`}
      className="group relative flex-shrink-0"
    >
      <img
        src={`${contributor.avatar_url}&s=80`}
        alt={contributor.login}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full border-2 border-white group-hover:border-aao-light-blue transition-colors duration-200 shadow-sm"
        loading="lazy"
      />
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-body text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none bg-white px-1.5 py-0.5 rounded shadow-sm border border-gray-100">
        {contributor.login}
      </span>
    </a>
  );
}

function PlaceholderAvatar({ index }) {
  return (
    <div
      aria-hidden="true"
      className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 bg-gray-100 flex-shrink-0"
      style={{ opacity: Math.max(0.25, 1 - index * 0.07) }}
    />
  );
}

export default function ContributorWall() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchOrgContributors()
      .then((data) => {
        setContributors(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const showEarlyOverlay =
    !loading && !error && contributors.length < PLACEHOLDER_THRESHOLD;
  const placeholderCount = showEarlyOverlay
    ? Math.max(0, TOTAL_SLOTS - contributors.length)
    : 0;

  return (
    <section className="py-16 md:py-20 bg-aao-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
              Open Source
            </p>
            <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-2">
              Meet the Contributors
            </h2>
            <p className="font-body text-gray-600 text-base leading-relaxed max-w-lg">
              Every tool we build is a collaboration. These are the people who have contributed
              code, data, docs, or analysis to the AAO Data Lab.
            </p>
          </div>
          {!loading && !error && contributors.length >= PLACEHOLDER_THRESHOLD && (
            <div className="flex items-center gap-2 flex-shrink-0">
              <Users size={16} className="text-aao-dark-blue" />
              <span className="font-heading text-aao-dark-blue font-bold text-sm">
                {contributors.length}+ contributors
              </span>
            </div>
          )}
        </div>

        {loading && (
          <div className="flex items-center gap-3 text-gray-400 py-8">
            <Loader2 size={18} className="animate-spin" />
            <span className="font-body text-sm">Loading contributors…</span>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5 text-amber-800">
            <AlertCircle size={20} className="flex-shrink-0" />
            <p className="font-body text-sm">
              Couldn't load contributors right now.{' '}
              <a
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-amber-900"
              >
                View the org on GitHub.
              </a>
            </p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Avatar row — real contributors + faded placeholders */}
            <div className="relative">
              <div className="flex flex-wrap gap-5 mb-8">
                {contributors.map((c) => (
                  <Avatar key={c.login} contributor={c} />
                ))}
                {Array.from({ length: placeholderCount }).map((_, i) => (
                  <PlaceholderAvatar key={`ph-${i}`} index={i} />
                ))}
              </div>

              {/* "Just getting started" overlay — shown when below threshold */}
              {showEarlyOverlay && (
                <div className="rounded-2xl border border-aao-light-blue/20 bg-white/70 backdrop-blur-sm px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-aao-dark-blue/5 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-aao-dark-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading text-aao-dark-blue text-base font-bold mb-1">
                      The lab is just getting started — and that means there's room for you.
                    </p>
                    <p className="font-body text-gray-600 text-sm leading-relaxed">
                      Every open-source project begins with a small founding group.
                      Early contributors shape the culture, the architecture, and the direction.
                      Your name could be among the first here.
                    </p>
                  </div>
                  <a
                    href={SLACK_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-aao-dark-blue hover:bg-aao-light-blue text-white font-body font-semibold text-sm px-4 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap flex-shrink-0"
                  >
                    Be an early contributor
                    <ArrowRight size={14} />
                  </a>
                </div>
              )}
            </div>

            {contributors.length >= PLACEHOLDER_THRESHOLD && (
              <a
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-aao-dark-blue hover:text-aao-light-blue font-body font-semibold text-sm transition-colors duration-200"
              >
                View all contributors on GitHub
                <ExternalLink size={14} />
              </a>
            )}
          </>
        )}
      </div>
    </section>
  );
}
