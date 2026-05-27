import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="py-20 md:py-28 bg-aao-beige min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm">
          <p className="font-body text-aao-dark-red font-semibold text-xs uppercase tracking-widest mb-3">
            Error 404
          </p>
          <h1 className="font-heading text-aao-dark-blue text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Wrong Track. You probably were not supposed to end up here.
          </h1>
          <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
            This page does not exist yet, which is very on-brand for a fast-moving open-source volunteer project.
            If you like fixing weird edge cases, we have excellent material waiting for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-aao-dark-blue hover:bg-aao-light-blue text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <a
              href="https://github.com/all-aboard-ohio/aao-lab-homepage/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-aao-dark-red hover:bg-red-700 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Help us fix it on GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
