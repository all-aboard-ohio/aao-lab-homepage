import { SLACK_INVITE_URL } from '../config';
import { ArrowRight, Train, Code2, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-aao-dark-blue py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 font-body text-aao-light-blue text-xs font-semibold uppercase tracking-widest mb-6">
            <Train size={14} />
            All Aboard Ohio Data Lab
          </p>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Develop the Future of<br />
            <span className="text-aao-light-blue">Passenger Rail.</span>
          </h1>

          {/* Pitch */}
          <p className="font-body text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Policymakers respond to data. The public responds to compelling stories.
            Build the software tools that make the case for passenger rail — and
            help passenger rail win, in Ohio, and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={SLACK_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Join the Dev Community
              <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              See the Projects
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-aao-light-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code2 size={20} className="text-aao-light-blue" />
              </div>
              <div>
                <div className="font-heading text-white text-2xl font-bold">4</div>
                <div className="font-body text-gray-400 text-sm">Active Projects</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-aao-dark-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users size={20} className="text-aao-light-red" />
              </div>
              <div>
                <div className="font-heading text-white text-2xl font-bold">Open</div>
                <div className="font-body text-gray-400 text-sm">Contributor Roles</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Train size={20} className="text-gray-300" />
              </div>
              <div>
                <div className="font-heading text-white text-2xl font-bold">100%</div>
                <div className="font-body text-gray-400 text-sm">Volunteer-Driven</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
