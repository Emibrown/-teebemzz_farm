import Link from 'next/link';
import { SITE_NAME, FOOTER_SECTIONS, SOCIAL_LINKS } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-green-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="material-icons-outlined text-white text-3xl">eco</span>
              <span className="text-white text-2xl font-bold">{SITE_NAME}</span>
            </div>
            <p className="text-gray-400">
              Sustainable poultry and fish farming for a healthier planet and a healthier you.
            </p>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="bg-green-dark p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Subscribe to our Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest updates on products and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-white/20 border-0 rounded-l-md text-white placeholder-gray-400 focus:ring-0"
              />
              <button className="bg-primary p-3 rounded-r-md hover:bg-orange-700 transition-colors">
                <span className="material-icons-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Social */}
        <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 Teebemzz Farms. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

