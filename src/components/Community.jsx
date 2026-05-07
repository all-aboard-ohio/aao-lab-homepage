import { MessageSquare, GraduationCap, GitBranch, ArrowRight } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-16 md:py-24 px-4 bg-aao-beige">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
            Get Involved
          </p>
          <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
            Community &amp; Academic Outreach
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-2xl leading-relaxed">
            Whether you're a professional developer, a college student, or a professor
            looking for real-world project material — there's a place for you here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Slack Card */}
          <div className="bg-aao-dark-blue rounded-2xl p-8 flex flex-col">
            <div className="w-12 h-12 bg-aao-light-blue/20 rounded-xl flex items-center justify-center mb-5">
              <MessageSquare size={24} className="text-aao-light-blue" />
            </div>
            <h3 className="font-heading text-white text-2xl font-bold mb-3">
              Join the Dev Slack
            </h3>
            <p className="font-body text-gray-300 text-sm leading-relaxed mb-6">
              Our Slack workspace is where all the action happens — project
              coordination, code reviews, mentorship from experienced engineers,
              and casual conversation about transit advocacy and tech. All skill
              levels are welcome.
            </p>
            <div className="space-y-3 mb-6">
              {[
                '#general — Introductions and announcements',
                '#dev-resources — API keys, datasets, and tooling',
                '#projects — Per-project coordination channels',
                '#education — Students, professors, and capstone teams',
              ].map((channel) => (
                <div key={channel} className="flex items-start gap-2 text-sm font-body text-gray-300">
                  <span className="text-aao-light-blue mt-0.5 flex-shrink-0">•</span>
                  <span>{channel}</span>
                </div>
              ))}
            </div>
            <a
              href="https://join.slack.com/t/lab-allaboardohio/shared_invite/zt-3x7cyvl53-0IQMjvljmA64iNCZvhaP1w"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 bg-aao-light-blue hover:bg-blue-500 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Join Slack Workspace
              <ArrowRight size={18} />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-aao-dark-blue/10 rounded-xl flex items-center justify-center mb-5">
              <GitBranch size={24} className="text-aao-dark-blue" />
            </div>
            <h3 className="font-heading text-aao-dark-blue text-2xl font-bold mb-1">
              GitHub Organization
            </h3>
            <p className="font-body text-gray-500 text-xs mb-4">Open Source • Pull Requests • Issues</p>
            <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">
              All of our projects are open source. Browse repositories, review open
              pull requests, pick up a good-first-issue, or follow along as new
              tools take shape.
            </p>
            <ul className="space-y-2 text-sm font-body text-gray-600 mb-6">
              {[
                'Browse active projects and open issues',
                'Submit pull requests and get code reviewed',
                'Fork templates to start your own build',
                'Watch repositories to stay up to date',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-aao-dark-blue mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://github.com/all-aboard-ohio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-aao-dark-blue hover:text-aao-light-blue font-body font-semibold text-sm py-3 transition-colors duration-200"
            >
              View all-aboard-ohio on GitHub
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Students Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="w-12 h-12 bg-aao-dark-red/10 rounded-xl flex items-center justify-center mb-5">
              <GraduationCap size={24} className="text-aao-dark-red" />
            </div>
            <h3 className="font-heading text-aao-dark-blue text-2xl font-bold mb-1">
              For Students
            </h3>
            <p className="font-body text-gray-500 text-xs mb-4">Capstone • Internship • Portfolio</p>
            <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">
              Use AAO developer challenges as your capstone project, senior design
              course assignment, or independent study. You'll work on real software
              with real civic impact — the kind of project that stands out in interviews.
            </p>
            <ul className="space-y-2 text-sm font-body text-gray-600 mb-6">
              {[
                'Real production codebases with meaningful outcomes',
                'Mentorship from volunteer professional engineers',
                'Letters of recommendation for top contributors',
                'Optional demo day presentation to AAO stakeholders',
                'Professors: contact us on Slack (#education) to co-design a semester rubric for your course',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-aao-dark-red mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://join.slack.com/t/lab-allaboardohio/shared_invite/zt-3x7cyvl53-0IQMjvljmA64iNCZvhaP1w"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-aao-dark-red hover:text-aao-dark-blue font-body font-semibold text-sm py-3 transition-colors duration-200"
            >
              Get involved on Slack
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
