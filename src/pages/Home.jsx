import { Link } from 'react-router-dom';
import { ArrowRight, Train, FileText, ExternalLink, GraduationCap, BookOpen } from 'lucide-react';
import ProjectGallery from '../components/ProjectGallery';
import WhyItMatters from '../components/WhyItMatters';

function HomeHero() {
  return (
    <section className="bg-aao-dark-blue py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 font-body text-aao-light-blue text-xs font-semibold uppercase tracking-widest mb-6">
            <Train size={14} />
            All Aboard Ohio Data Lab
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            The Case for Rail<br />
            <span className="text-aao-light-blue">Starts With Data.</span>
          </h1>
          <p className="font-body text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            We build open-source tools that help advocates, officials, and the public understand
            the economic and quality-of-life benefits of investing in passenger rail and connected
            transit across Ohio and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/commission"
              className="inline-flex items-center justify-center gap-2 bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Commission a Project
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contribute"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Contribute Your Skills
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchStudies() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
            Built on Rigorous Research
          </p>
          <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
            Grounded in Economic Evidence
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            Our tools are built on a foundation of independent economic analysis and decades of
            transit advocacy in Ohio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AAO Card */}
          <div className="rounded-2xl border border-gray-200 bg-aao-beige p-8 flex flex-col">
            <div className="w-11 h-11 bg-aao-dark-blue/10 rounded-xl flex items-center justify-center mb-5">
              <Train size={22} className="text-aao-dark-blue" />
            </div>
            <h3 className="font-heading text-aao-dark-blue text-xl font-bold mb-2">
              All Aboard Ohio
            </h3>
            <p className="font-body text-gray-500 text-xs mb-4">allaboardohio.org</p>
            <p className="font-body text-gray-600 text-sm leading-relaxed flex-1 mb-6">
              The advocacy home for passenger rail in Ohio — news, policy analysis, stories
              from riders and communities, and the case for a connected network that works
              for every Ohioan.
            </p>
            <a
              href="https://allaboardohio.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-aao-dark-blue hover:text-aao-light-blue font-body font-semibold text-sm transition-colors duration-200"
            >
              Visit allaboardohio.org
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Scioto Analysis Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col shadow-sm">
            <div className="w-11 h-11 bg-aao-dark-red/10 rounded-xl flex items-center justify-center mb-5">
              <FileText size={22} className="text-aao-dark-red" />
            </div>
            <h3 className="font-heading text-aao-dark-blue text-xl font-bold mb-2">
              Economic Impact &amp; Fiscal Analysis
            </h3>
            <p className="font-body text-gray-500 text-xs mb-4">Conducted by Scioto Analysis</p>
            <p className="font-body text-gray-600 text-sm leading-relaxed flex-1 mb-6">
              An independent economic analysis of the Ohio Hub passenger rail network — examining
              job creation, GDP impact, tax revenue, and long-term fiscal health for Ohio communities.
              The foundational research behind our economic modeling tools.
            </p>
            <a
              href="https://www.allaboardohio.org/_files/ugd/903aba_baf6e83ae6cf40cface66843e66c5616.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-aao-dark-red hover:text-red-700 font-body font-semibold text-sm transition-colors duration-200"
            >
              Read the study (PDF)
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AcademicCallout() {
  return (
    <section className="py-16 md:py-20 px-4 bg-aao-dark-blue">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-12 md:flex items-center gap-10">
          <div className="w-16 h-16 bg-aao-light-blue/20 rounded-2xl flex items-center justify-center flex-shrink-0 mb-6 md:mb-0">
            <GraduationCap size={32} className="text-aao-light-blue" />
          </div>
          <div className="flex-1">
            <p className="font-body text-aao-light-blue font-semibold text-xs uppercase tracking-widest mb-2">
              For Educators &amp; Researchers
            </p>
            <h2 className="font-heading text-white text-2xl md:text-3xl font-extrabold mb-3">
              Use AAO Data Lab as Your Capstone or Course Project
            </h2>
            <p className="font-body text-gray-300 text-base leading-relaxed mb-0 max-w-2xl">
              Our open-source projects operate at the intersection of software engineering, data science,
              economics, and public policy — making them ideal for senior capstones, graduate research,
              and independent study. Students work on real production software with measurable civic impact.
              Professors can co-design a semester rubric with the lab team.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex-shrink-0">
            <Link
              to="/contribute"
              className="inline-flex items-center gap-2 bg-aao-light-blue hover:bg-blue-500 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              Learn more
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetInvolvedCTAs() {
  return (
    <section className="py-16 md:py-24 px-4 bg-aao-beige">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
            Get Involved
          </p>
          <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
            Two Ways to Join the Work
          </h2>
          <p className="font-body text-gray-600 text-lg leading-relaxed">
            Whether you're an organization with a research need or an individual with skills to offer,
            there's a place for you in the lab.
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
              Partner with the AAO Data Lab to create a tool or analysis tailored to your advocacy
              campaign, policy brief, or research goals. For transit agencies, government offices,
              advocacy organizations, and foundations.
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
              You don't have to be a developer to contribute. The lab needs software engineers,
              data analysts, designers, policy researchers, project managers, and technical writers —
              at every skill level.
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

export default function Home() {
  return (
    <>
      <HomeHero />
      <ResearchStudies />
      <ProjectGallery />
      <WhyItMatters />
      <AcademicCallout />
      <GetInvolvedCTAs />
    </>
  );
}
