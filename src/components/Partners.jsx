import { SLACK_INVITE_URL } from '../config';
import { ArrowRight, ExternalLink } from 'lucide-react';

const academicPartners = [
  { name: 'The Ohio State University', dept: 'City & Regional Planning' },
  { name: 'University of Cincinnati', dept: 'Urban Planning & Design' },
  { name: 'Cleveland State University', dept: 'Urban Affairs & Planning' },
  { name: 'University of Toledo', dept: 'Geography & Planning' },
  { name: 'Miami University', dept: 'Geography' },
  { name: 'Kent State University', dept: 'Urban Design' },
];

const advocacyPartners = [
  { name: 'All Aboard Ohio', role: 'Founding Organization', url: 'https://allaboardohio.org' },
  {
    name: 'Midwest High Speed Rail Alliance',
    role: 'Regional Advocacy',
    url: 'https://midwesthsr.org',
  },
  { name: 'Ohio Hub Coalition', role: 'Corridor Planning', url: null },
  { name: 'Greater Ohio Policy Center', role: 'Policy Research', url: null },
  { name: 'Transit Matters Ohio', role: 'Multimodal Advocacy', url: null },
  { name: 'Columbus Region LINK', role: 'Last Mile Connectivity', url: null },
];

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
            Collaboration
          </p>
          <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-4">
            Partners & Supporters
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-2xl leading-relaxed">
            AAO Data Lab works alongside academic institutions, advocacy organizations, and civic
            technology communities to build tools that reflect the best available research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          {/* Academic Partners */}
          <div>
            <h3 className="font-heading text-aao-dark-blue text-xl font-bold mb-6 pb-3 border-b border-gray-100">
              Academic Institutions
            </h3>
            <div className="space-y-4">
              {academicPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-aao-light-blue/30 hover:bg-aao-beige/40 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-aao-dark-blue/5 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-aao-dark-blue font-extrabold text-sm">
                      {partner.name
                        .split(' ')
                        .filter((w) => w.length > 2)
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading text-aao-dark-blue text-sm font-bold leading-tight">
                      {partner.name}
                    </p>
                    <p className="font-body text-gray-500 text-xs mt-0.5">{partner.dept}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advocacy Partners */}
          <div>
            <h3 className="font-heading text-aao-dark-blue text-xl font-bold mb-6 pb-3 border-b border-gray-100">
              Advocacy & Policy Organizations
            </h3>
            <div className="space-y-4">
              {advocacyPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-aao-light-blue/30 hover:bg-aao-beige/40 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-aao-dark-red/5 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-aao-dark-red font-extrabold text-sm">
                      {partner.name
                        .split(' ')
                        .filter((w) => w.length > 2)
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-heading text-aao-dark-blue text-sm font-bold leading-tight">
                        {partner.name}
                      </p>
                      {partner.url && (
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${partner.name}`}
                          className="text-gray-400 hover:text-aao-light-blue transition-colors duration-200 flex-shrink-0"
                        >
                          <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                    <p className="font-body text-gray-500 text-xs mt-0.5">{partner.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="bg-aao-beige border border-amber-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-heading text-aao-dark-blue text-xl font-bold mb-2">
              Become a Partner
            </h3>
            <p className="font-body text-gray-600 text-sm leading-relaxed">
              We partner with universities, transit agencies, policy organizations, and civic tech
              communities across Ohio and beyond. If your work intersects with connected mobility,
              economic development, or open data — let's build something together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={SLACK_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-aao-dark-blue hover:bg-aao-light-blue text-white font-body font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 text-sm"
            >
              Start a conversation
              <ArrowRight size={15} />
            </a>
            <a
              href="https://allaboardohio.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-aao-dark-blue hover:text-aao-light-blue font-body font-semibold text-sm transition-colors duration-200"
            >
              allaboardohio.org
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
