import { ArrowRight, ExternalLink, Train, Heart, MapPin, Users2, FlaskConical } from 'lucide-react';

const transitImpacts = [
  {
    title: 'Economic Access',
    body: 'Transit connects workers to jobs, students to schools, and patients to healthcare. Communities with strong transit networks see higher employment rates, lower household transportation costs, and broader tax bases.',
  },
  {
    title: 'Regional Competitiveness',
    body: 'Regions with intercity rail attract investment, talent, and business relocations. A connected Ohio competes with connected states — for employers, for residents, and for federal infrastructure dollars.',
  },
];

const timeline = [
  { year: 'est. 1972', label: 'All Aboard Ohio founded as a 501(c)(3) nonprofit' },
  { year: '50+ years', label: 'Advocating for passenger rail across Ohio' },
  { year: 'Today', label: 'Active board, member network, and the AAO Data Lab' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-aao-dark-blue py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 font-body text-aao-light-blue text-xs font-semibold uppercase tracking-widest mb-6">
              <Train size={14} />
              About Us
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              All Aboard Ohio.<br />
              <span className="text-aao-light-blue">50 Years Strong.</span>
            </h1>
            <p className="font-body text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              All Aboard Ohio is a 501(c)(3) nonprofit that has championed passenger rail and
              connected transit in Ohio for over fifty years. The AAO Data Lab is its open-source
              technology arm — building the tools that help advocates, officials, and the public
              make the case for a connected Ohio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://allaboardohio.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                Visit allaboardohio.org
                <ExternalLink size={16} />
              </a>
              <a
                href="https://join.slack.com/t/lab-allaboardohio/shared_invite/zt-3x7cyvl53-0IQMjvljmA64iNCZvhaP1w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                Join the community
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="md:grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
                Who We Are
              </p>
              <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-6">
                Ohio's Passenger Rail Advocates
              </h2>
              <div className="space-y-4 font-body text-gray-600 text-base leading-relaxed">
                <p>
                  All Aboard Ohio was founded in 1972 to advocate for passenger rail service
                  across the state. Over five decades, we've built a coalition of riders,
                  transit supporters, planners, and policy advocates united by the belief that
                  Ohio deserves a connected, modern passenger rail network.
                </p>
                <p>
                  We are a registered 501(c)(3) nonprofit organization with a board of directors,
                  an active member network, and a volunteer staff. We are funded by member dues,
                  individual donations, and organizational supporters — we are not a government
                  agency and receive no public operating funds.
                </p>
                <p>
                  Our work spans advocacy, public education, coalition building, and policy
                  engagement at the state and federal levels. We work with legislators, transit
                  agencies, regional planning organizations, and allied nonprofits across Ohio
                  and the Midwest.
                </p>
              </div>
            </div>
            <div>
              {/* Timeline */}
              <div className="bg-aao-beige rounded-2xl p-8 mb-6">
                <h3 className="font-heading text-aao-dark-blue text-lg font-bold mb-6">Our History</h3>
                <div className="space-y-5">
                  {timeline.map((t) => (
                    <div key={t.year} className="flex items-start gap-4">
                      <span className="inline-flex items-center justify-center bg-aao-dark-blue text-white font-heading text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0 whitespace-nowrap">
                        {t.year}
                      </span>
                      <p className="font-body text-gray-700 text-sm leading-relaxed">{t.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* 501c3 badge */}
              <div className="rounded-2xl border border-gray-200 p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-aao-dark-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-heading text-aao-dark-blue text-sm font-bold">501(c)(3) Nonprofit</p>
                  <p className="font-body text-gray-500 text-xs leading-snug mt-0.5">
                    Donations to All Aboard Ohio are tax-deductible. We are a member-supported
                    organization governed by a volunteer board of directors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 px-4 bg-aao-dark-blue">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="font-body text-aao-light-blue font-semibold text-sm uppercase tracking-widest mb-2">
              Our Mission
            </p>
            <h2 className="font-heading text-white text-3xl md:text-4xl font-extrabold mb-4">
              Rail is the Spine. Transit is the System.
            </h2>
            <div className="space-y-4 font-body text-gray-300 text-lg leading-relaxed">
              <p>
                Our core focus is passenger rail — the intercity and regional trains that connect
                Ohio's cities to each other and to national networks. But we know that a train
                that drops you at a station with no way forward is half a trip.
              </p>
              <p>
                We advocate for the full connected mobility picture: intercity rail, local transit,
                bike infrastructure, and station-area walkability. Because what matters to people
                isn't the mode — it's the trip.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="w-10 h-10 bg-aao-dark-red/30 rounded-lg flex items-center justify-center mb-4">
                <Train size={20} className="text-white" />
              </div>
              <h3 className="font-heading text-white text-base font-bold mb-2">Intercity Passenger Rail</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                Restoring and expanding rail service between Ohio's major cities and connecting to
                national Amtrak corridors — Columbus, Cleveland, Cincinnati, Toledo, and beyond.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="w-10 h-10 bg-aao-light-blue/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin size={20} className="text-aao-light-blue" />
              </div>
              <h3 className="font-heading text-white text-base font-bold mb-2">Local &amp; Regional Transit</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                Supporting bus rapid transit, light rail, and regional transit networks that
                connect station areas to neighborhoods, employers, and destinations.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Users2 size={20} className="text-gray-300" />
              </div>
              <h3 className="font-heading text-white text-base font-bold mb-2">Coalition &amp; Policy</h3>
              <p className="font-body text-gray-400 text-sm leading-relaxed">
                Building the political will for transit investment through public education,
                research, coalition building, and direct engagement with legislators and agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Transit Makes the Difference */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
              Why It Matters
            </p>
            <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
              Transit Makes the Difference
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed">
              Passenger rail and public transit aren't just transportation — they're the
              infrastructure that determines whether communities can grow, whether people can
              find work, and whether Ohio stays competitive for the next century.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {transitImpacts.map((impact) => (
              <div key={impact.title} className="rounded-2xl border border-gray-200 bg-aao-beige p-6">
                <h3
                  className="font-heading text-aao-dark-blue text-lg font-bold mb-3"
                  dangerouslySetInnerHTML={{ __html: impact.title }}
                />
                <p className="font-body text-gray-600 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: impact.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Data Lab */}
      <section className="py-16 md:py-20 px-4 bg-aao-beige">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex items-center gap-10">
            <div className="w-14 h-14 bg-aao-dark-blue rounded-2xl flex items-center justify-center flex-shrink-0 mb-6 md:mb-0">
              <FlaskConical size={28} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-body text-aao-dark-red font-semibold text-xs uppercase tracking-widest mb-2">
                The AAO Data Lab
              </p>
              <h2 className="font-heading text-aao-dark-blue text-2xl md:text-3xl font-extrabold mb-3">
                Our Open-Source Technology Arm
              </h2>
              <p className="font-body text-gray-600 text-base leading-relaxed max-w-3xl">
                The AAO Data Lab was created to translate rigorous research into tools that anyone
                can use and share. We believe the gap between good transit policy and actual
                implementation is often a data gap — and that well-designed software, built in the
                open, can close it. Every tool we build is published open-source, freely
                redistributable, and designed to work for any corridor or state.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex-shrink-0">
              <a
                href="https://allaboardohio.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-aao-dark-blue hover:bg-aao-light-blue text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                allaboardohio.org
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
