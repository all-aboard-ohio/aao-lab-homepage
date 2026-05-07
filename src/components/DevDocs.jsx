import { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Search, ChevronDown, ChevronUp, FileText, X, Loader2 } from 'lucide-react';

const DOCS_API = 'https://api.github.com/repos/all-aboard-ohio/aao-lab-docs/contents/';

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (match) {
    const fm = match[1];
    const content = match[2].trim();
    const title = (fm.match(/^title:\s*(.+)$/m) || [])[1]?.trim() ?? 'Untitled';
    const excerpt = (fm.match(/^excerpt:\s*(.+)$/m) || [])[1]?.trim() ?? '';
    return { title, excerpt, content };
  }
  // No frontmatter — derive title from first # heading
  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : 'Untitled';
  const excerpt = raw.replace(/^#+\s.+$/gm, '').split('\n').map(l => l.trim()).find(l => l) ?? '';
  return { title, excerpt, content: raw.trim() };
}

function DocCard({ doc, isOpen, onToggle }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header / Toggle */}
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors duration-150"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-9 h-9 bg-aao-dark-blue/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <FileText size={16} className="text-aao-dark-blue" />
          </div>
          <div className="min-w-0">
            <h3 className="font-heading text-aao-dark-blue text-base font-bold leading-tight mb-1">
              {doc.title}
            </h3>
            <p className="font-body text-gray-500 text-sm leading-snug line-clamp-2">
              {doc.excerpt}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 text-gray-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {/* Content */}
      {isOpen && (
        <div className="px-5 pb-6 border-t border-gray-100">
          <div className="prose prose-sm max-w-none prose-headings:font-heading prose-headings:text-aao-dark-blue prose-a:text-aao-light-blue prose-code:bg-aao-dark-blue prose-code:text-white prose-code:rounded prose-pre:bg-aao-dark-blue [&_pre]:!bg-aao-dark-blue [&_pre_code]:!bg-transparent [&_pre_code]:!text-white prose-table:text-sm mt-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.content}</ReactMarkdown>
          </div>
        </div>
      )}
    </article>
  );
}

const DOC_LIMIT = 6;

export default function DevDocs() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(DOCS_API)
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then((files) => {
        const PRIORITY = [
          'getting-started.md',
          'code-of-conduct.md',
          'roles.md',
          'contributing.md',
        ];
        const mdFiles = files
          .filter((f) => f.type === 'file' && f.name.endsWith('.md') && f.name.toLowerCase() !== 'readme.md')
          .sort((a, b) => {
            const ai = PRIORITY.indexOf(a.name.toLowerCase());
            const bi = PRIORITY.indexOf(b.name.toLowerCase());
            if (ai !== -1 && bi !== -1) return ai - bi;
            if (ai !== -1) return -1;
            if (bi !== -1) return 1;
            return a.name.localeCompare(b.name);
          });
        return Promise.all(
          mdFiles.map((f) =>
            fetch(f.download_url)
              .then((r) => r.text())
              .then((raw) => ({ id: f.sha, ...parseFrontmatter(raw) }))
          )
        );
      })
      .then((loaded) => {
        setDocs(loaded);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = (!showAll && !q) ? docs.slice(0, DOC_LIMIT) : docs;
    if (!q) return base;
    return docs.filter(
      (doc) =>
        doc.title.toLowerCase().includes(q) ||
        doc.excerpt.toLowerCase().includes(q) ||
        doc.content.toLowerCase().includes(q)
    );
  }, [query, docs, showAll]);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="dev-docs" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
            Developer Resources
          </p>
          <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
            Dev Docs
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">
            Everything you need to get started contributing to AAO projects —
            from GitHub templates to architecture patterns.
          </p>
          <a
            href="https://github.com/all-aboard-ohio/aao-lab-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-aao-light-blue hover:text-aao-dark-blue transition-colors duration-200"
          >
            View the lab-docs repo on GitHub →
          </a>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20 text-gray-400">
            <Loader2 size={28} className="animate-spin mr-3" />
            <span className="font-body text-sm">Loading documentation…</span>
          </div>
        )}

        {/* Error / fallback */}
        {error && (
          <div className="text-center py-16">
            <div className="w-14 h-14 bg-aao-dark-blue/5 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <FileText size={28} className="text-aao-dark-blue" />
            </div>
            <h3 className="font-heading text-aao-dark-blue text-xl font-bold mb-2">
              Read the Docs on GitHub
            </h3>
            <p className="font-body text-gray-500 text-sm max-w-sm mx-auto mb-6">
              Our developer documentation lives in the <strong>aao-lab-docs</strong> repository — browse it directly on GitHub for the full experience.
            </p>
            <a
              href="https://github.com/all-aboard-ohio/aao-lab-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-aao-dark-blue hover:bg-aao-light-blue text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              View aao-lab-docs on GitHub
            </a>
          </div>
        )}

        {/* Search & Results */}
        {!loading && !error && (
          <>
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation…"
                className="w-full font-body text-sm bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-aao-light-blue focus:border-transparent placeholder-gray-400 transition"
                aria-label="Search documentation"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Results Count */}
            {query && (
              <p className="font-body text-gray-500 text-sm mb-4">
                {filtered.length === 0
                  ? 'No results found.'
                  : `Showing ${filtered.length} of ${docs.length} topics`}
              </p>
            )}

            {/* Doc Cards */}
            {!query && docs.length > DOC_LIMIT && (
              <p className="font-body text-gray-400 text-xs mb-3">
                Showing {showAll ? docs.length : Math.min(DOC_LIMIT, docs.length)} of {docs.length} topics
              </p>
            )}
            {docs.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <FileText size={40} className="mx-auto mb-3 opacity-30" />
                <p className="font-body text-lg font-medium">No documentation yet</p>
                <p className="font-body text-sm mt-1">
                  Add <code>.md</code> files to the{' '}
                  <a
                    href="https://github.com/all-aboard-ohio/aao-lab-docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-aao-light-blue underline hover:text-aao-dark-blue"
                  >
                    aao-lab-docs repository
                  </a>{' '}
                  to populate this section.
                </p>
              </div>
            ) : filtered.length > 0 ? (
              <div className="space-y-4">
                {filtered.map((doc) => (
                  <DocCard
                    key={doc.id}
                    doc={doc}
                    isOpen={openId === doc.id}
                    onToggle={() => handleToggle(doc.id)}
                  />
                ))}
                {!query && docs.length > DOC_LIMIT && (
                  <button
                    onClick={() => setShowAll((v) => !v)}
                    className="w-full mt-2 font-body text-sm text-aao-light-blue hover:text-aao-dark-blue font-semibold transition-colors duration-200 py-2"
                  >
                    {showAll ? 'Show less' : `Show ${docs.length - DOC_LIMIT} more topics`}
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-400">
                <Search size={40} className="mx-auto mb-3 opacity-30" />
                <p className="font-body text-lg font-medium">No documentation found</p>
                <p className="font-body text-sm mt-1">Try a different search term</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
