import { MessageSquare, GraduationCap, BookOpen, ArrowRight } from 'lucide-react';

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Slack Card */}
          <div className="bg-aao-dark-blue rounded-2xl p-8 flex flex-col">
            <div className="w-12 h-12 bg-aao-light-blue/20 rounded-xl flex items-center justify-center mb-5">
              <MessageSquare size={24} className="text-aao-light-blue" />
            </div>
            <h3 className="font-heading text-white text-2xl font-bold mb-3">
              Join the Dev Slack
            </h3>
            <p className="font-body text-gray-300 text-sm leading-relaxed mb-6 flex-1">
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
              href="https://join.slack.com/t/all-aboard-ohio/shared_invite/zt-3wgj180pu-eWAJoGn4_6~y9YHR9Lq3qA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-aao-light-blue hover:bg-blue-500 text-white font-body font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Join Slack Workspace
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Academic Card */}
          <div className="flex flex-col gap-6">
            {/* Students */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 bg-aao-dark-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} className="text-aao-dark-red" />
                </div>
                <div>
                  <h3 className="font-heading text-aao-dark-blue text-lg font-bold leading-tight">
                    For Students
                  </h3>
                  <p className="font-body text-gray-500 text-xs">Capstone • Internship • Portfolio</p>
                </div>
              </div>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">
                Use AAO developer challenges as your capstone project, senior design
                course assignment, or independent study. You'll work on real software
                with real civic impact — the kind of project that stands out in interviews.
              </p>
              <ul className="space-y-2 text-sm font-body text-gray-600">
                {[
                  'Real production codebases with meaningful outcomes',
                  'Mentorship from volunteer professional engineers',
                  'Letters of recommendation for top contributors',
                  'Optional demo day presentation to AAO stakeholders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-aao-dark-red mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Professors */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 bg-aao-light-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={22} className="text-aao-light-blue" />
                </div>
                <div>
                  <h3 className="font-heading text-aao-dark-blue text-lg font-bold leading-tight">
                    For Professors
                  </h3>
                  <p className="font-body text-gray-500 text-xs">Course Curricula • Semester Projects</p>
                </div>
              </div>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">
                Integrate AAO challenges into your course as a semester-long project
                or hackathon prompt. We'll co-design a rubric with you, provide
                mentorship for your students, and showcase standout work.
              </p>
              <a
                href="https://join.slack.com/t/all-aboard-ohio/shared_invite/zt-3wgj180pu-eWAJoGn4_6~y9YHR9Lq3qA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-aao-light-blue hover:text-aao-dark-blue font-body font-semibold text-sm transition-colors duration-200"
              >
                Contact us on Slack (#education)
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
