import { ArrowRight, ExternalLink, Building2, Landmark, Megaphone, FlaskConical, CheckCircle2 } from 'lucide-react';

const audiences = [
  {
    icon: Landmark,
    title: 'Government Offices',
    description:
      'State agencies, MPOs, and municipal planning departments commissioning data tools for legislative briefings, grant applications, and public-facing dashboards.',
  },
  {
    icon: Building2,
    title: 'Transit Organizations',
    description:
      'Rail authorities, transit agencies, and regional mobility coalitions needing economic modeling, ridership analysis, or interactive public-facing tools.',
  },
  {
    icon: Megaphone,
    title: 'Advocacy Groups',
    description:
      'Nonprofits, coalitions, and civic organizations that need compelling, data-driven content to move public opinion and legislative decision-makers.',
  },
  {
    icon: FlaskConical,
    title: 'Foundations &amp; Research Partners',
    description:
      'Philanthropic organizations and research institutions looking to fund open-source civic tools with lasting public value.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Submit Your Request',
    body: "Reach out via our Slack workspace (#projects channel) or open an issue in our planning repository. Describe the problem you're trying to solve — not the solution you have in mind.",
  },
  {
    number: '02',
    title: 'Scoping Conversation',
    body: 'A lab maintainer will work with you to define the scope: what data will be used, what the output looks like, what skills are needed, and what the timeline looks like.',
  },
  {
    number: '03',
    title: 'Lab Picks It Up',
    body: 'Approved projects are posted to our public project board. Volunteer contributors claim the project and begin work — with maintainer oversight and regular check-ins.',
  },
  {
    number: '04',
    title: 'Open Delivery',
    body: 'All outputs — code, data, and documentation — are published open-source. You receive a fully deployed tool or analysis you can use, share, and build on freely.',
  },
];

const deliverables = [
  'Interactive web tools — maps, calculators, dashboards, comparison tools',
  'Economic impact analyses and fiscal modeling',
  'Data pipelines and cleaned public datasets',
  'Research reports and policy briefs (with data visualization)',
  'Embeddable components for existing websites',
];

export default function Commission() {
  return (
    <>
      {/* Hero */}
      <section className="bg-aao-dark-blue py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 font-body text-aao-light-blue text-xs font-semibold uppercase tracking-widest mb-6">
              For Partners &amp; Organizations
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              Commission a<br />
              <span className="text-aao-light-blue">Research Tool.</span>
            </h1>
            <p className="font-body text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Partner with the AAO Data Lab to build a custom analysis, interactive tool, or
              data visualization — tailored to your campaign, policy brief, or research goals.
              All outputs are open-source and freely redistributable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://join.slack.com/t/lab-allaboardohio/shared_invite/zt-3x7cyvl53-0IQMjvljmA64iNCZvhaP1w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                Get started on Slack
                <ArrowRight size={18} />
              </a>
              <a
                href="https://github.com/all-aboard-ohio/aao-lab-planning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                Open a planning issue
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
              Who It's For
            </p>
            <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
              Partners We Work With
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              We work with organizations across the public, nonprofit, and research sectors
              who share our belief that better data leads to better transit policy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="rounded-2xl border border-gray-200 bg-aao-beige p-6 flex gap-4">
                  <div className="w-11 h-11 bg-aao-dark-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={22} className="text-aao-dark-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading text-aao-dark-blue text-base font-bold mb-1"
                      dangerouslySetInnerHTML={{ __html: a.title }}
                    />
                    <p className="font-body text-gray-600 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: a.description }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Can Commission */}
      <section className="py-16 md:py-20 px-4 bg-aao-beige">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex gap-12 items-start">
            <div className="flex-1 mb-10 md:mb-0">
              <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
                Deliverables
              </p>
              <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
                What We Build
              </h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                Projects range from single analysis reports to fully deployed web applications.
                All work is published open-source under a permissive license.
              </p>
              <ul className="space-y-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 font-body text-gray-700 text-sm">
                    <CheckCircle2 size={18} className="text-aao-dark-blue flex-shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-aao-dark-blue rounded-2xl p-8 text-white">
              <h3 className="font-heading text-white text-xl font-bold mb-4">
                What makes AAO Data Lab different
              </h3>
              <div className="space-y-4 font-body text-gray-300 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">Volunteer expertise, professional quality.</strong> Our contributors
                  include professional software engineers, data scientists, and policy analysts who choose
                  to apply their skills to civic work.
                </p>
                <p>
                  <strong className="text-white">Open by default.</strong> Every tool we build is published open-source.
                  Your commissioned project becomes a public resource — other advocates, agencies, or researchers
                  can adapt it for their own corridors.
                </p>
                <p>
                  <strong className="text-white">Mission-aligned only.</strong> We only take on projects that fit
                  the lab's mission of advancing passenger rail and connected mobility. We don't build tools
                  that work against transit investment.
                </p>
                <p>
                  <strong className="text-white">No proprietary data lock-in.</strong> We use open datasets and
                  document all sources. Your analysis can be independently reproduced and verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
              How It Works
            </p>
            <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
              From Request to Delivery
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-sm font-heading font-extrabold mb-4 bg-aao-dark-blue text-white">
                  {step.number}
                </span>
                <h3 className="font-heading text-aao-dark-blue text-base font-bold mb-2">{step.title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 bg-aao-dark-blue">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-white text-3xl md:text-4xl font-extrabold mb-4">
            Ready to get started?
          </h2>
          <p className="font-body text-gray-300 text-lg leading-relaxed mb-8">
            The best first step is a conversation. Join our Slack and introduce yourself in
            <strong className="text-white"> #projects</strong>, or open an issue in our planning
            repository to describe what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://join.slack.com/t/lab-allaboardohio/shared_invite/zt-3x7cyvl53-0IQMjvljmA64iNCZvhaP1w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Join Slack — #projects
              <ArrowRight size={18} />
            </a>
            <a
              href="https://github.com/all-aboard-ohio/aao-lab-planning/issues/new/choose"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Open a planning issue
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
