import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS, NAV_LINKS } from '../constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                {COMPANY_DETAILS.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Leading IT services provider in the UK, specializing in healthcare technology solutions and managed IT support for local businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/terms" className="hover:text-brand-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-brand-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-brand-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Details Bar */}
        <div className="border-t border-slate-800 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-500">
            <div className="space-y-1">
              <p>Company Name: {COMPANY_DETAILS.name}</p>
              <p>Registered Office: {COMPANY_DETAILS.address}</p>
            </div>
            <div className="space-y-1 md:text-right">
              <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
              <p>Official Business Email: {COMPANY_DETAILS.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
          <p>Built with precision in the UK.</p>
        </div>
      </div>
    </footer>
  );
};
