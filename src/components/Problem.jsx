import { AlertCircle, TrendingDown, MessageSquare } from 'lucide-react';

const barriers = [
  {
    icon: TrendingDown,
    title: 'Data Gap',
    description:
      'Advocates lack accessible ridership forecasts, economic impact models, and real-time operational data to make evidence-based arguments.',
  },
  {
    icon: MessageSquare,
    title: 'Communication Gap',
    description:
      'The case for rail gets buried in PDFs and spreadsheets. Policymakers and the public never see interactive, shareable, mobile-friendly tools.',
  },
  {
    icon: AlertCircle,
    title: 'Infrastructure Gap',
    description:
      'Organizations waste resources rebuilding the same reports. Open-source, reusable tools could amplify every advocate\'s reach.',
  },
];

export default function Problem() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="font-body text-aao-dark-red font-semibold text-sm uppercase tracking-widest mb-2">
            The Real Barrier
          </p>
          <h2 className="font-heading text-aao-dark-blue text-3xl md:text-4xl font-extrabold mb-6">
            Passenger Rail Isn't Failing.
            <br />
            <span className="text-aao-dark-red">The Case Isn't Being Made.</span>
          </h2>
          <p className="font-body text-gray-700 text-lg leading-relaxed">
            Rail projects are economically sound. The public supports them. But advocates, planners, and agencies 
            lack the data, dashboards, and compelling narratives needed to move decision-makers. Without tools to 
            translate complex research into shareable, digestible insights, even the strongest case stays invisible.
          </p>
        </div>

        {/* Three Barriers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {barriers.map((barrier) => {
            const Icon = barrier.icon;
            return (
              <div key={barrier.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-aao-dark-red/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-aao-dark-red" />
                </div>
                <h3 className="font-heading text-aao-dark-blue text-lg font-bold mb-3">
                  {barrier.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {barrier.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-aao-dark-blue rounded-xl p-8 md:p-10 text-center">
          <p className="font-body text-gray-300 text-base mb-4">
            AAO Data Lab Contributors bridge these gaps.
          </p>
          <h3 className="font-heading text-white text-2xl md:text-3xl font-bold mb-4">
            We build the tools. Transit happens.
          </h3>
          <p className="font-body text-gray-300 text-lg max-w-2xl mx-auto">
            Interactive maps, economic models, crowdsourced insights, and data pipelines that empower 
            everyone from grassroots organizers to state agencies to make the case for passenger rail.
          </p>
        </div>
      </div>
    </section>
  );
}
