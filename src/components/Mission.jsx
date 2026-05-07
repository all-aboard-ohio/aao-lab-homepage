import { ArrowRight } from 'lucide-react';

const pillars = [
  {
    number: '01',
    title: 'Rail is the Spine — Transit is the System',
    body: 'Passenger rail connects cities. But a train that drops you at a station with no way forward is half a trip. We build tools that map the whole network — intercity rail, local transit, bike infrastructure, and station-area walkability — because advocates need to make the case for all of it.',
    accent: 'bg-aao-dark-blue text-white',
  },
  {
    number: '02',
    title: 'Ohio is Where We Start. Anywhere is Where We Go.',
    body: 'The data pipelines, economic models, and visualization components we build are designed to be reusable. Swap the inputs, get a new analysis. Advocates in Michigan, Indiana, Pennsylvania, or any underfunded corridor can fork our tools and make their own case.',
    accent: 'bg-aao-dark-red text-white',
  },
  {
    number: '03',
    title: 'Economics and Quality of Life Are the Argument',
    body: "We focus on what rail investment means for people's daily lives — commute times, housing costs, access to jobs, regional GDP, and the fiscal health of the communities a network connects. Rigorous economic analysis, built into tools anyone can use.",
    accent: 'bg-aao-light-blue text-white',
  },
  {
    number: '04',
    title: 'Visualization Is Not Optional',
    body: 'The most careful analysis fails if it cannot be understood. We invest in making data legible and shareable — interactive maps, comparative charts, and dashboards that translate complex research into conversations that move decisions.',
    accent: 'bg-aao-dark-blue text-white',
  },
];

const stats = [
  { value: 'Ohio → Anywhere', label: 'Tools designed for any corridor' },
  { value: 'Full Stack', label: 'Developers, analysts, designers, policy' },
  { value: 'Open Source', label: 'Every tool, every dataset, every model' },
  { value: 'Zero Trackers', label: 'No personal data, ever' },
];

export default function Mission() {
  return (
    <section id="mission" className="py-16 md:py-24 px-4 bg-aao-dark-blue">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="font-body text-aao-light-blue font-semibold text-sm uppercase tracking-widest mb-2">
            Our Vision
          </p>
          <h2 className="font-heading text-white text-3xl md:text-4xl font-extrabold mb-4">
            What We Believe
          </h2>
          <p className="font-body text-gray-300 text-lg leading-relaxed">
            Connected mobility is not a nice-to-have. It is the infrastructure that determines
            whether communities grow, whether people can find work, and whether regions stay
            competitive. We build the tools that make that case with precision.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-2xl p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <span
                className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-xs font-heading font-extrabold mb-4 ${pillar.accent}`}
              >
                {pillar.number}
              </span>
              <h3 className="font-heading text-white text-lg font-bold mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-aao-dark-blue p-6 text-center">
              <p className="font-heading text-white text-lg font-extrabold mb-1">{stat.value}</p>
              <p className="font-body text-gray-400 text-xs leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="https://join.slack.com/t/all-aboard-ohio/shared_invite/zt-3wgj180pu-eWAJoGn4_6~y9YHR9Lq3qA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            Join the team
            <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com/all-aboard-ohio/aao-lab-docs/blob/main/mission-ethos.md"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-aao-light-blue hover:text-white text-sm font-semibold transition-colors duration-200"
          >
            Read our full mission →
          </a>
        </div>
      </div>
    </section>
  );
}
