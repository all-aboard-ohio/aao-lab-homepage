import { ExternalLink, TrendingUp, Map, Newspaper, LayoutDashboard, ArrowRight, FileText } from 'lucide-react';
import { projects, comingSoon } from '../data/projects';

const iconMap = {
  TrendingUp,
  Map,
  Newspaper,
  LayoutDashboard,
  FileText,
};

const SCIOTO_STUDY = {
  id: 'scioto-study',
  icon: 'FileText',
  title: 'Economic Impact & Fiscal Analysis',
  description:
    'Independent study by Scioto Analysis covering jobs, GDP, tax revenue, and long-term fiscal outcomes that inform AAO Data Lab tools.',
  tags: ['Research', 'Economic Analysis', 'PDF'],
  url: 'https://www.allaboardohio.org/_files/ugd/903aba_baf6e83ae6cf40cface66843e66c5616.pdf',
  ctaLabel: 'Read study',
};

function ToolCard({ project }) {
  const Icon = iconMap[project.icon] || LayoutDashboard;

  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 group">
      <div className="bg-aao-dark-blue p-6">
        <div className="w-12 h-12 bg-aao-light-blue/20 rounded-xl flex items-center justify-center">
          <Icon size={24} className="text-aao-light-blue" />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-800 border border-green-300">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Available now
          </span>
        </div>
        <h3 className="font-heading text-aao-dark-blue text-lg font-bold mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="font-body text-gray-600 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-body font-medium bg-aao-beige text-aao-dark-blue px-2.5 py-1 rounded-full border border-amber-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-aao-dark-blue hover:bg-aao-light-blue text-white font-body font-semibold text-sm px-4 py-2 rounded-full transition-colors duration-200 w-fit"
        >
          {project.ctaLabel || 'Open tool'}
          <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-aao-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
            Tools &amp; Resources
          </p>
          <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
            Built for Advocates
          </h2>
          <div className="rounded-xl bg-white/60 border border-aao-light-blue/20 px-5 py-3 mb-4">
            <span className="font-heading text-aao-dark-blue font-bold">AAO Data Lab</span> is a project of <a href="https://allaboardohio.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-aao-dark-red">All Aboard Ohio</a>, a nonprofit working to advance passenger rail and connected transit for all communities.
          </div>
          <p className="font-body text-gray-600 text-lg max-w-2xl leading-relaxed">
            Free, open-source tools to help you make the case for passenger rail — no technical background required. Anyone can contribute.
          </p>
        </div>

        {/* Live Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {[SCIOTO_STUDY, ...projects].map((project) => (
            <ToolCard key={project.id} project={project} />
          ))}
        </div>

        {/* Coming Soon */}
        <div className="bg-white/60 border border-gray-200 rounded-2xl p-8">
          <h3 className="font-heading text-aao-dark-blue text-xl font-bold mb-1">More on the way</h3>
          <p className="font-body text-gray-500 text-sm mb-6">Our volunteer developers are actively building these tools.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {comingSoon.map((item) => {
              const Icon = iconMap[item.icon] || TrendingUp;
              return (
                <li key={item.id} className="flex gap-3">
                  <div className="w-9 h-9 bg-aao-dark-blue/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-aao-dark-blue" />
                  </div>
                  <div>
                    <p className="font-heading text-aao-dark-blue text-sm font-bold leading-tight mb-0.5">{item.title}</p>
                    <p className="font-body text-gray-500 text-xs leading-snug">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <a
            href="https://github.com/all-aboard-ohio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-aao-dark-blue hover:text-aao-light-blue font-body font-semibold text-sm transition-colors duration-200"
          >
            See what's in the works on GitHub
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
