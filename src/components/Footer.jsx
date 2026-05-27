import { SLACK_INVITE_URL } from '../config';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import aaoLogo from '../assets/AAOLAB_White_Logo.svg';

const navGroups = [
  {
    label: 'Platform',
    links: [
      { text: 'Projects', to: '/' },
      { text: 'Commission a Project', to: '/commission' },
      { text: 'Contribute Your Skills', to: '/contribute' },
      { text: 'About AAO', to: '/about' },
    ],
  },
  {
    label: 'Community',
    links: [
      { text: 'Join Slack', href: SLACK_INVITE_URL, external: true },
      { text: 'GitHub', href: 'https://github.com/all-aboard-ohio', external: true },
      { text: 'Project Board', href: 'https://github.com/orgs/all-aboard-ohio/projects', external: true },
      { text: 'Propose a Project', href: 'https://github.com/all-aboard-ohio/aao-lab-planning/issues/new/choose', external: true },
    ],
  },
  {
    label: 'Documentation',
    links: [
      { text: 'Mission & Ethos', href: 'https://github.com/all-aboard-ohio/aao-lab-docs/blob/main/mission-ethos.md', external: true },
      { text: 'Contributing Guide', href: 'https://github.com/all-aboard-ohio/aao-lab-docs/blob/main/contributing.md', external: true },
      { text: 'Style Guide', href: 'https://github.com/all-aboard-ohio/aao-lab-docs/blob/main/style-guide.md', external: true },
      { text: 'Onboarding', href: 'https://github.com/all-aboard-ohio/aao-lab-docs/blob/main/onboarding.md', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-aao-dark-blue text-gray-300 py-14 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top: brand + nav */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={aaoLogo} alt="AAO Data Lab logo" className="h-9 w-auto mb-4" />
            <p className="font-body text-gray-400 text-sm leading-relaxed max-w-xs">
              Open-source data tools for passenger rail and connected mobility advocacy.
            </p>
            <a
              href="https://allaboardohio.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-aao-light-blue hover:text-white text-xs font-body mt-3 transition-colors duration-200"
            >
              allaboardohio.org
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.label}>
              <h4 className="font-heading text-white text-xs font-bold uppercase tracking-widest mb-4">
                {group.label}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.text}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="font-body text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.text}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                      >
                        {link.text}
                        <ExternalLink size={10} className="opacity-50" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + legal */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-gray-500 leading-relaxed">
            &copy; {new Date().getFullYear()} All Aboard Ohio Data Lab. Volunteer-contributed,
            open source.
          </p>
          <p className="font-body text-xs text-gray-600 leading-relaxed text-center md:text-right max-w-md">
            Projects do not necessarily represent the official viewpoints or policy positions of
            All Aboard Ohio.
          </p>
        </div>
      </div>
    </footer>
  );
}
