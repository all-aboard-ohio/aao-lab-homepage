import { SLACK_INVITE_URL } from '../config';
import { ArrowRight, ExternalLink, Code2, BarChart3, Palette, FileSearch, GitBranch, PenLine, Users2, GraduationCap, BookOpen } from 'lucide-react';
import DevDocs from '../components/DevDocs';
import GoodFirstIssues from '../components/GoodFirstIssues';
import Seo from '../components/Seo';

const disciplines = [
  {
    icon: Code2,
    title: 'Software Developers',
    description: 'React, Python, Node, GIS, data pipelines. Build the tools that make the case.',
    color: 'bg-aao-light-blue/10 text-aao-light-blue border-aao-light-blue/20',
  },
  {
    icon: BarChart3,
    title: 'Data Analysts &amp; Engineers',
    description: 'Reproducible notebooks, cleaned public datasets, economic models.',
    color: 'bg-aao-dark-red/10 text-aao-dark-red border-aao-dark-red/20',
  },
  {
    icon: Palette,
    title: 'UI/UX Designers',
    description: 'Component specs, accessibility audits, the AAO design system.',
    color: 'bg-aao-beige text-aao-dark-blue border-amber-200',
  },
  {
    icon: FileSearch,
    title: 'Policy Analysts',
    description: 'Legislative context, source review, framing guides for advocacy campaigns.',
    color: 'bg-aao-dark-blue/5 text-aao-dark-blue border-blue-200',
  },
  {
    icon: BookOpen,
    title: 'Researchers',
    description: 'Literature reviews, comparable state programs, economic citations.',
    color: 'bg-aao-light-blue/10 text-aao-light-blue border-aao-light-blue/20',
  },
  {
    icon: Users2,
    title: 'Project Managers',
    description: 'Issue scoping, milestone tracking, cross-discipline coordination.',
    color: 'bg-aao-dark-red/10 text-aao-dark-red border-aao-dark-red/20',
  },
  {
    icon: PenLine,
    title: 'Technical Writers',
    description: 'Docs, READMEs, onboarding guides, and contributor documentation.',
    color: 'bg-aao-beige text-aao-dark-blue border-amber-200',
  },
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Use AAO projects for capstones, senior design, or independent study.',
    color: 'bg-aao-dark-blue/5 text-aao-dark-blue border-blue-200',
  },
];

const gettingStartedSteps = [
  {
    step: '01',
    title: 'Join the Slack workspace',
    body: 'Introduce yourself in #welcome — say who you are, where you\'re from, and what you do or want to learn.',
    cta: { text: 'Join Slack', href: SLACK_INVITE_URL, external: true },
  },
  {
    step: '02',
    title: 'Read the onboarding guide',
    body: 'The onboarding guide walks you through the lab\'s tools, conventions, and how to find your first contribution.',
    cta: { text: 'Read onboarding.md', href: 'https://github.com/all-aboard-ohio/aao-lab-docs/blob/main/onboarding.md', external: true },
  },
  {
    step: '03',
    title: 'Browse the project board',
    body: 'Find an Approved or In Progress item, comment on the issue, and claim it. Look for "good first issue" if you\'re new.',
    cta: { text: 'View project board', href: 'https://github.com/orgs/all-aboard-ohio/projects', external: true },
  },
  {
    step: '04',
    title: 'Propose something new',
    body: 'Have an idea for a tool or analysis? Open an issue in aao-lab-planning using the appropriate template.',
    cta: { text: 'Open a proposal', href: 'https://github.com/all-aboard-ohio/aao-lab-planning/issues/new/choose', external: true },
  },
];

export default function Contribute() {
  return (
    <>
      <Seo
        title="Contribute | AAO Data Lab"
        description="Contribute to AAO Data Lab projects in software, data, design, policy, and documentation. Browse onboarding steps and open issues to get started."
        path="/contribute"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Contribute to AAO Data Lab',
          url: 'https://lab.allaboardohio.org/contribute',
          description:
            'Join AAO Data Lab contributors and work on open-source rail advocacy tools.',
        }}
      />
      {/* Hero */}
      <section className="bg-aao-dark-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 font-body text-aao-light-blue text-xs font-semibold uppercase tracking-widest mb-6">
              For Individuals &amp; Teams
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              Contribute<br />
              <span className="text-aao-light-blue">Your Skills.</span>
            </h1>
            <p className="font-body text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              You don't have to be a developer. The lab needs people across every discipline —
              from software and data to policy, design, writing, and project coordination.
              All skill levels are welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SLACK_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                Join the Slack
                <ArrowRight size={18} />
              </a>
              <a
                href="https://github.com/all-aboard-ohio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                View on GitHub
                <GitBranch size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Good First Issues — live GitHub feed */}
      <GoodFirstIssues />

      {/* Getting Started Steps */}
      <section className="py-16 md:py-24 bg-aao-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
              Getting Started
            </p>
            <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
              Your First Week
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              Here's exactly what to do to go from interested to contributing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {gettingStartedSteps.map((s) => (
              <div key={s.step} className="flex flex-col">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-sm font-heading font-extrabold mb-4 bg-aao-dark-blue text-white flex-shrink-0">
                  {s.step}
                </span>
                <h3 className="font-heading text-aao-dark-blue text-base font-bold mb-2">{s.title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-4 flex-1">{s.body}</p>
                <a
                  href={s.cta.href}
                  target={s.cta.external ? '_blank' : undefined}
                  rel={s.cta.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-aao-dark-blue hover:text-aao-light-blue font-body font-semibold text-sm transition-colors duration-200"
                >
                  {s.cta.text}
                  <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
              Who We Need
            </p>
            <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
              Every Skill Has a Role
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              Building tools for civic advocacy requires a full range of disciplines.
              If you're passionate about transit and have a skill to offer, there's work for you here.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {disciplines.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className={`rounded-2xl border p-5 ${d.color.split(' ').slice(-1)[0]} bg-white shadow-sm`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${d.color}`}>
                    <Icon size={18} />
                  </div>
                  <h3
                    className="font-heading text-aao-dark-blue text-sm font-bold mb-1"
                    dangerouslySetInnerHTML={{ __html: d.title }}
                  />
                  <p className="font-body text-gray-600 text-xs leading-relaxed">{d.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Section */}
      <section className="py-16 md:py-24 bg-aao-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
              For Educators &amp; Students
            </p>
            <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
              Real Projects. Real Impact.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Students */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
              <div className="w-12 h-12 bg-aao-dark-red/10 rounded-xl flex items-center justify-center mb-5">
                <GraduationCap size={24} className="text-aao-dark-red" />
              </div>
              <h3 className="font-heading text-aao-dark-blue text-xl font-bold mb-1">For Students</h3>
              <p className="font-body text-gray-500 text-xs mb-4">Capstone · Internship · Portfolio</p>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">
                Use AAO Data Lab as your capstone project, senior design course assignment, or independent
                study. You'll work on real production software with real civic impact — the kind of project
                that stands out in interviews and graduate school applications.
              </p>
              <ul className="space-y-2 text-sm font-body text-gray-600 mb-6 flex-1">
                {[
                  'Real production codebases with meaningful outcomes',
                  'Mentorship from volunteer professional engineers and analysts',
                  'Letters of recommendation for top contributors',
                  'Optional demo day presentation to AAO stakeholders',
                  'All contributions credited publicly on GitHub',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-aao-dark-red mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={SLACK_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-aao-dark-blue hover:bg-aao-light-blue text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200 w-fit"
              >
                Join Slack — #education
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Professors */}
            <div className="bg-aao-dark-blue rounded-2xl p-8 flex flex-col">
              <div className="w-12 h-12 bg-aao-light-blue/20 rounded-xl flex items-center justify-center mb-5">
                <BookOpen size={24} className="text-aao-light-blue" />
              </div>
              <h3 className="font-heading text-white text-xl font-bold mb-1">For Professors &amp; Instructors</h3>
              <p className="font-body text-gray-400 text-xs mb-4">Courses · Research · Partnerships</p>
              <p className="font-body text-gray-300 text-sm leading-relaxed mb-5">
                AAO Data Lab sits at the intersection of software engineering, data science, economics,
                and public policy — making our projects ideal material for interdisciplinary courses,
                capstone sequences, and civic tech research programs.
              </p>
              <ul className="space-y-2 text-sm font-body text-gray-300 mb-6 flex-1">
                {[
                  'Co-design a semester rubric with the lab maintainer team',
                  'Students contribute to live, public projects — not toy assignments',
                  'Projects span CS, data science, urban planning, and policy',
                  'Exposure to real open-source workflows, code review, and GitHub',
                  'AAO stakeholders available for guest presentations and feedback sessions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-aao-light-blue mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={SLACK_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-aao-light-blue hover:bg-blue-500 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200 w-fit"
              >
                Contact us on Slack
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dev Docs */}
      <DevDocs />
    </>
  );
}
