import { useState } from 'react';
import { Menu, X, GitBranch } from 'lucide-react';
import aaoLogo from '../assets/AAOLAB_White_Logo.svg';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Why It Matters', href: '#why-matters' },
  { label: 'Community', href: '#community' },
  { label: 'Dev Docs', href: '#dev-docs' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-aao-dark-blue shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="AAO Data Lab home">
            <img src={aaoLogo} alt="AAO Data Lab logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-gray-300 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-aao-light-blue after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/all-aboard-ohio"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="AAO Data Lab on GitHub"
            >
              <GitBranch size={20} />
            </a>
            <a
              href="https://join.slack.com/t/lab-allaboardohio/shared_invite/zt-3x7cyvl53-0IQMjvljmA64iNCZvhaP1w"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold text-sm px-4 py-2 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              Join Slack
            </a>
            <button
              className="md:hidden text-gray-300 hover:text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-aao-dark-blue border-t border-blue-900 px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-gray-300 hover:text-white py-1 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/all-aboard-ohio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-gray-300 hover:text-white py-1 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <GitBranch size={16} />
              GitHub Organization
            </a>
            <a
              href="https://join.slack.com/t/lab-allaboardohio/shared_invite/zt-3x7cyvl53-0IQMjvljmA64iNCZvhaP1w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold text-sm px-4 py-2 rounded-full transition-colors duration-200 mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Join Slack
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
