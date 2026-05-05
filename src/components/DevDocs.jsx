import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Search, ChevronDown, ChevronUp, FileText, X } from 'lucide-react';
import { docs } from '../data/docs';

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
          <div className="prose prose-sm max-w-none prose-headings:font-heading prose-headings:text-aao-dark-blue prose-a:text-aao-light-blue prose-code:bg-gray-100 prose-code:text-aao-dark-blue prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-table:text-sm mt-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.content}</ReactMarkdown>
          </div>
        </div>
      )}
    </article>
  );
}

export default function DevDocs() {
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return docs;
    return docs.filter(
      (doc) =>
        doc.title.toLowerCase().includes(q) ||
        doc.excerpt.toLowerCase().includes(q) ||
        doc.content.toLowerCase().includes(q)
    );
  }, [query]);

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
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            Everything you need to get started contributing to AAO projects —
            from GitHub templates to architecture patterns.
          </p>
        </div>

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
        {filtered.length > 0 ? (
          <div className="space-y-4">
            {filtered.map((doc) => (
              <DocCard
                key={doc.id}
                doc={doc}
                isOpen={openId === doc.id}
                onToggle={() => handleToggle(doc.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <Search size={40} className="mx-auto mb-3 opacity-30" />
            <p className="font-body text-lg font-medium">No documentation found</p>
            <p className="font-body text-sm mt-1">Try a different search term</p>
          </div>
        )}
      </div>
    </section>
  );
}
