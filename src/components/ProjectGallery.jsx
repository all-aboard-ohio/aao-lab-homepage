import { ExternalLink, TrendingUp, Map, Newspaper, LayoutDashboard } from 'lucide-react';
import { projects, statusColors } from '../data/projects';

const iconMap = {
  TrendingUp,
  Map,
  Newspaper,
  LayoutDashboard,
};

function StatusBadge({ status }) {
  const colorClass = statusColors[status] || 'bg-gray-200 text-gray-700';
  const dot = {
    Planned: 'bg-gray-400',
    Development: 'bg-yellow-500',
    Live: 'bg-green-500',
  }[status] || 'bg-gray-400';

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`}></span>
      {status}
    </span>
  );
}

function ProjectCard({ project }) {
  const Icon = iconMap[project.icon] || TrendingUp;

  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 group">
      {/* Card Header */}
      <div className="bg-aao-dark-blue p-6 flex items-start justify-between gap-4">
        <div className="w-12 h-12 bg-aao-light-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon size={24} className="text-aao-light-blue" />
        </div>
        <StatusBadge status={project.status} />
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-aao-dark-blue text-lg font-bold mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="font-body text-gray-600 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
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

        {/* Link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-aao-light-blue hover:text-aao-dark-blue font-body font-semibold text-sm transition-colors duration-200 group-hover:gap-3"
        >
          View Project
          <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-aao-beige">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
            The Toolbox
          </p>
          <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
            Project Gallery
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-2xl leading-relaxed">
            A suite of open-source tools designed to make the case for passenger rail
            through data, journalism, and accessible public interfaces.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-4 items-center text-sm font-body text-gray-500">
          <span className="font-semibold text-gray-700">Status:</span>
          {Object.entries(statusColors).map(([status]) => (
            <StatusBadge key={status} status={status} />
          ))}
        </div>
      </div>
    </section>
  );
}
