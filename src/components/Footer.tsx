import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Info */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-xl">{COMPANY_DETAILS.name}</h3>
            <p className="text-sm leading-relaxed">
              Leading the way in British IT excellence. We provide managed services, 
              cyber security, and cloud solutions tailored for the UK market.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-emerald transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-emerald transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-emerald shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-emerald shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-emerald shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left space-y-1">
            <p>&copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p>Registered in England & Wales | CRN: {COMPANY_DETAILS.crn}</p>
          </div>
          <p>VAT registered where applicable. All prices subject to VAT at standard UK rates.</p>
        </div>
      </div>
    </footer>
  );
}
