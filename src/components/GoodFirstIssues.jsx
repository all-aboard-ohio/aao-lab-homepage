import { useState, useEffect } from 'react';
import { ExternalLink, GitPullRequest, Loader2, AlertCircle, Tag } from 'lucide-react';
import { GITHUB_ORG } from '../config';

const ISSUES_API = `https://api.github.com/search/issues?q=org:${GITHUB_ORG}+label:"good+first+issue"+state:open&per_page=6&sort=created&order=desc`;

function IssueCard({ issue }) {
  const repo = issue.repository_url.split('/').slice(-1)[0];
  const labels = issue.labels.filter((l) => l.name !== 'good first issue');

  return (
    <a
      href={issue.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 bg-white rounded-2xl border border-gray-100 p-5 hover:border-aao-light-blue/40 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center gap-1 text-xs font-body font-semibold bg-aao-dark-blue/5 text-aao-dark-blue px-2 py-0.5 rounded-full whitespace-nowrap border border-blue-100 flex-shrink-0">
            <GitPullRequest size={11} />
            {repo}
          </span>
        </div>
        <ExternalLink
          size={14}
          className="text-gray-300 group-hover:text-aao-light-blue transition-colors flex-shrink-0 mt-0.5"
        />
      </div>

      <p className="font-heading text-aao-dark-blue text-sm font-bold leading-snug group-hover:text-aao-light-blue transition-colors">
        {issue.title}
      </p>

      {labels.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {labels.slice(0, 3).map((label) => (
            <span
              key={label.id}
              className="inline-flex items-center gap-1 text-xs font-body px-2 py-0.5 rounded-full border"
              style={{
                backgroundColor: `#${label.color}22`,
                borderColor: `#${label.color}55`,
                color: `#${label.color}`,
              }}
            >
              <Tag size={9} />
              {label.name}
            </span>
          ))}
        </div>
      )}

      <p className="font-body text-gray-400 text-xs mt-auto">
        #{issue.number} · opened by {issue.user.login}
      </p>
    </a>
  );
}

export default function GoodFirstIssues() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(ISSUES_API)
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then((data) => {
        setIssues(data.items || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
              Start Here
            </p>
            <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-3">
              Open Issues for New Contributors
            </h2>
            <p className="font-body text-gray-600 text-base leading-relaxed">
              These issues are tagged <span className="font-semibold text-aao-dark-blue">good first issue</span> — scoped,
              well-described, and ready for someone to claim. Pick one, comment on it, and get started.
            </p>
          </div>
          <a
            href={`https://github.com/search?q=org%3A${GITHUB_ORG}+label%3A%22good+first+issue%22+state%3Aopen&type=issues`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-aao-dark-blue hover:text-aao-light-blue font-body font-semibold text-sm transition-colors duration-200 whitespace-nowrap flex-shrink-0"
          >
            See all open issues
            <ExternalLink size={14} />
          </a>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-16 gap-3 text-gray-400">
            <Loader2 size={20} className="animate-spin" />
            <span className="font-body text-sm">Loading open issues from GitHub…</span>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5 text-amber-800">
            <AlertCircle size={20} className="flex-shrink-0" />
            <div>
              <p className="font-body text-sm font-semibold">Couldn't load issues right now.</p>
              <p className="font-body text-xs mt-0.5">
                View them directly on{' '}
                <a
                  href={`https://github.com/search?q=org%3A${GITHUB_ORG}+label%3A%22good+first+issue%22+state%3Aopen&type=issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-amber-900"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>
        )}

        {!loading && !error && issues.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body text-gray-500 text-sm mb-4">No open "good first issue" tickets right now.</p>
            <a
              href={`https://github.com/orgs/${GITHUB_ORG}/projects`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-aao-dark-blue hover:text-aao-light-blue font-body font-semibold text-sm transition-colors duration-200"
            >
              Browse the project board for other open work
              <ExternalLink size={14} />
            </a>
          </div>
        )}

        {!loading && !error && issues.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
