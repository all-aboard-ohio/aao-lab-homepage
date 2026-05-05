import { FileCode2, Users2, BarChart3, Globe } from 'lucide-react';

const pillars = [
  {
    icon: BarChart3,
    title: 'For Program Managers',
    color: 'bg-aao-light-blue/10 text-aao-light-blue',
    border: 'border-aao-light-blue/20',
    description:
      'Real-time dashboards and automated reporting tools cut hours of manual work, freeing advocates to focus on relationship-building and coalition strategy.',
  },
  {
    icon: Globe,
    title: 'For Government Officials',
    color: 'bg-aao-dark-red/10 text-aao-dark-red',
    border: 'border-aao-dark-red/20',
    description:
      'Economic models and interactive maps translate complex ridership and fiscal data into digestible, share-ready briefs for legislative hearings and agency reviews.',
  },
  {
    icon: Users2,
    title: 'For the Public',
    color: 'bg-aao-beige text-aao-dark-blue',
    border: 'border-amber-200',
    description:
      'Simple, mobile-friendly tools let everyday Ohioans see how rail investment would affect their community — fueling grassroots engagement and political will.',
  },
  {
    icon: FileCode2,
    title: 'For Developers',
    color: 'bg-aao-dark-blue/5 text-aao-dark-blue',
    border: 'border-blue-200',
    description:
      'Contribute to meaningful open-source projects with real civic impact. Build portfolio pieces that demonstrate full-stack, data engineering, and GIS skills.',
  },
];

export default function WhyItMatters() {
  return (
    <section id="why-matters" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
            Code is Advocacy
          </p>
          <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
            Why This Matters
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            The gap between great policy ideas and actual implementation is often a
            data gap. Well-designed software closes that gap — turning complex research
            into persuasive, accessible tools that move people and decisions.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`rounded-2xl p-6 border ${pillar.border} bg-white shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${pillar.color} border ${pillar.border}`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-heading text-aao-dark-blue text-lg font-bold mb-2">
                  {pillar.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pull Quote */}
        <div className="bg-aao-dark-blue rounded-2xl p-8 md:p-12">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-heading text-white text-xl md:text-2xl font-bold leading-relaxed mb-6">
              "Every line of code you write is an argument for better transit.
              Every visualization is a conversation starter. Every dashboard is
              a door that lets advocates into rooms they couldn't otherwise enter."
            </p>
            <cite className="font-body text-aao-light-blue text-sm not-italic">
              — All Aboard Ohio Developer Program
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
