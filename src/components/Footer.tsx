import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center text-white">
              <Cpu size={18} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Bruntsfield<span className="text-brand-400">House</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Premium IT services and strategic consultancy for UK businesses. 
            Empowering growth through reliable, secure, and innovative technology.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand-400 transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
            <li><Link to="/pricing" className="hover:text-brand-400 transition-colors">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/terms" className="hover:text-brand-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-brand-400 transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company Details</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-brand-400 shrink-0" />
              <span>{COMPANY_DETAILS.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-brand-400 shrink-0" />
              <span>{COMPANY_DETAILS.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-brand-400 shrink-0" />
              <span>{COMPANY_DETAILS.email}</span>
            </li>
            <li className="pt-4 border-t border-slate-800 text-xs text-slate-500">
              <p>CRN: {COMPANY_DETAILS.crn}</p>
              <p>Registered in Scotland</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
        <p>VAT Registration: GB 987 6543 21</p>
      </div>
    </footer>
  );
};
