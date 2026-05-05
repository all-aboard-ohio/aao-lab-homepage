import { ExternalLink } from 'lucide-react';
import aaoLogo from '../assets/AAO_Logo_WhiteAAOLogo.svg';

export default function Footer() {
  return (
    <footer className="bg-aao-dark-blue text-gray-300 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center">
            <img src={aaoLogo} alt="All Aboard Ohio logo" className="h-10 w-auto" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-body">
            <a
              href="https://allaboardohio.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200"
            >
              allaboardohio.org
              <ExternalLink size={12} />
            </a>
            <a
              href="https://github.com/all-aboard-ohio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200"
            >
              GitHub
              <ExternalLink size={12} />
            </a>
            <a
              href="https://join.slack.com/t/all-aboard-ohio/shared_invite/zt-3wgj180pu-eWAJoGn4_6~y9YHR9Lq3qA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200"
            >
              Slack
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <p className="font-body text-xs text-gray-500 text-center leading-relaxed max-w-2xl mx-auto">
            Part of the All Aboard Ohio Developer Program. Developer projects are
            volunteer-contributed and do not necessarily represent the official
            viewpoints or policy positions of All Aboard Ohio.
          </p>
        </div>
      </div>
    </footer>
  );
}
