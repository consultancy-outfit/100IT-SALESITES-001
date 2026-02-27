import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, Linkedin, Twitter, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-secondary rounded-lg flex items-center justify-center text-white">
                <Monitor size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white leading-tight">Swanton IT</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Buckinghamshire</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering UK businesses with world-class IT infrastructure, cybersecurity, and strategic technology solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-secondary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-secondary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-secondary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-secondary transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-brand-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-secondary transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-brand-secondary transition-colors">Cyber Security</Link></li>
              <li><Link to="/services" className="hover:text-brand-secondary transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="hover:text-brand-secondary transition-colors">IT Strategy</Link></li>
              <li><Link to="/services" className="hover:text-brand-secondary transition-colors">Network Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-white mb-6">Contact Us</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={18} className="text-brand-secondary shrink-0" />
              <span>{COMPANY_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={18} className="text-brand-secondary shrink-0" />
              <span>{COMPANY_DETAILS.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={18} className="text-brand-secondary shrink-0" />
              <span>{COMPANY_DETAILS.email}</span>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck size={16} />
              <span>GDPR Compliant Data Handling</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-slate-500 space-y-2 text-center md:text-left">
              <p>&copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p>Company Registration Number: {COMPANY_DETAILS.crn} | Registered in England & Wales</p>
            </div>
            <div className="flex gap-6 text-xs">
              <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
