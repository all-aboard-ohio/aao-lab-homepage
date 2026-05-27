import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, Bell, MessageSquare, GitBranch } from 'lucide-react';
import { SLACK_INVITE_URL, GITHUB_ORG_URL } from '../config';
import ProjectGallery from '../components/ProjectGallery';
import Problem from '../components/Problem';
import WhyItMatters from '../components/WhyItMatters';
import Seo from '../components/Seo';

function HomeHero() {
  return (
    <section className="bg-aao-dark-blue py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 font-body text-aao-light-blue text-xs font-semibold uppercase tracking-widest mb-6">
            Open source · Volunteer-powered · Passenger Rail
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            The Case for Rail<br />
            <span className="text-aao-light-blue">Starts With Data.</span>
          </h1>
          <p className="font-body text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            A volunteer-powered civic tech lab building open-source tools that make the case for
            passenger rail — for advocates, policymakers, and the public.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contribute"
              className="inline-flex items-center justify-center gap-2 bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Contribute Your Skills
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/commission"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Commission a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


function GetInvolvedCTAs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
            Get Involved
          </p>
          <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
            Two Ways to Join the Work
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            Whether you're an organization with a research need or an individual with skills to offer, there's a place for you in the lab.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Commission Card */}
          <div className="bg-aao-dark-blue rounded-2xl p-8 flex flex-col">
            <div className="w-12 h-12 bg-aao-dark-red/30 rounded-xl flex items-center justify-center mb-5">
              <BookOpen size={24} className="text-white" />
            </div>
            <h3 className="font-heading text-white text-2xl font-bold mb-3">
              Commission a Project
            </h3>
            <p className="font-body text-gray-300 text-sm leading-relaxed mb-4 flex-1">
              Partner with the AAO Data Lab to create a tool or analysis tailored to your advocacy campaign, policy brief, or research goals. For transit agencies, government offices, advocacy organizations, and foundations — anywhere.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Custom economic models and impact analyses',
                'Interactive dashboards and maps for public outreach',
                'Data pipelines built on open, reproducible methods',
                'All outputs open-source and freely redistributable',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-body text-gray-300">
                  <span className="text-aao-light-blue mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/commission"
              className="inline-flex items-center justify-center gap-2 bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Commission a Project
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Contribute Card */}
          <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-aao-dark-blue/10 rounded-xl flex items-center justify-center mb-5">
              <GraduationCap size={24} className="text-aao-dark-blue" />
            </div>
            <h3 className="font-heading text-aao-dark-blue text-2xl font-bold mb-3">
              Contribute Your Skills
            </h3>
            <p className="font-body text-gray-600 text-sm leading-relaxed mb-4 flex-1">
              You don't have to be a developer to contribute. The lab needs software engineers, data analysts, designers, policy researchers, project managers, and technical writers — at every skill level, from anywhere.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Volunteer on real, deployed civic tech projects',
                'Students: use projects as capstone or portfolio work',
                'Professors: co-design a semester course rubric',
                'All contributions documented and credited',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-body text-gray-600">
                  <span className="text-aao-dark-blue mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contribute"
              className="inline-flex items-center justify-center gap-2 bg-aao-dark-blue hover:bg-aao-light-blue text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Contribute Your Skills
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const followOptions = [
  {
    icon: Bell,
    headline: 'Watch on GitHub',
    body: 'Star or watch any repository to get notified when new work lands — no account setup required beyond a free GitHub login.',
    cta: { text: 'View repositories', href: GITHUB_ORG_URL },
    bg: 'bg-aao-dark-blue/5 border-blue-100',
    iconColor: 'bg-aao-dark-blue/10 text-aao-dark-blue',
  },
  {
    icon: MessageSquare,
    headline: 'GitHub Discussions',
    body: 'Read architectural decisions, ask questions, or follow the reasoning behind our tools — without joining a Slack workspace. No commitment needed.',
    cta: { text: 'Browse discussions', href: `${GITHUB_ORG_URL}/aao-lab-planning/discussions` },
    bg: 'bg-aao-dark-red/5 border-red-100',
    iconColor: 'bg-aao-dark-red/10 text-aao-dark-red',
  },
  {
    icon: GitBranch,
    headline: 'Join Slack When Ready',
    body: "When you're ready to contribute or introduce yourself, our Slack workspace is where the team coordinates. All skill levels welcome.",
    cta: { text: 'Join Slack workspace', href: SLACK_INVITE_URL },
    bg: 'bg-aao-light-blue/5 border-blue-100',
    iconColor: 'bg-aao-light-blue/20 text-aao-light-blue',
  },
];

function StayUpdated() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
            Stay in the Loop
          </p>
          <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
            Follow at Your Own Pace
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            Not ready to contribute yet? There are low-friction ways to follow the work and
            engage when the time is right.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {followOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.headline}
                className={`rounded-2xl border p-6 flex flex-col ${opt.bg}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${opt.iconColor}`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-heading text-aao-dark-blue text-lg font-bold mb-2">
                  {opt.headline}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                  {opt.body}
                </p>
                <a
                  href={opt.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-aao-dark-blue hover:text-aao-light-blue font-body font-semibold text-sm transition-colors duration-200"
                >
                  {opt.cta.text}
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="AAO Data Lab | Open-Source Rail Advocacy Tools"
        description="AAO Data Lab builds open-source tools and research resources that help advocates, policymakers, and the public make the case for passenger rail and connected transit."
        path="/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'AAO Data Lab Home',
          url: 'https://lab.allaboardohio.org/',
          description:
            'Open-source rail advocacy tools and resources built by the AAO Data Lab community.',
          isPartOf: {
            '@type': 'WebSite',
            name: 'AAO Data Lab',
            url: 'https://lab.allaboardohio.org/',
          },
        }}
      />
      <HomeHero />
      <Problem />
      <WhyItMatters />
      <ProjectGallery />
      <GetInvolvedCTAs />
      <StayUpdated />
    </>
  );
}
