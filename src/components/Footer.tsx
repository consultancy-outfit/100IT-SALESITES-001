import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../types';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <Monitor className="w-6 h-6 text-emerald-500" />
              <span className="font-bold text-xl tracking-tight">Community Recovery</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading UK IT services provider delivering managed support, cybersecurity, and cloud solutions tailored for British businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-500 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-emerald-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link></li>
              <li><span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> GDPR Compliant</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest">
          <div className="space-y-2 text-center md:text-left">
            <p>© {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
          </div>
          <div className="flex gap-8">
            <span>UK Based</span>
            <span>VAT Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
