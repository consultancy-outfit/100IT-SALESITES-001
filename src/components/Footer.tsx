import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Cpu className="w-8 h-8 text-brand-accent" />
              <span className="font-bold text-2xl text-white tracking-tight">
                Community<span className="text-brand-accent">ShortBreaks</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering British businesses with cutting-edge IT solutions, robust cybersecurity, and strategic technology consultancy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-accent transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/terms" className="hover:text-brand-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-brand-accent transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-sm">{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-sm">{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-sm">{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex flex-col gap-1">
              <p>&copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p>Company Registration Number: {COMPANY_DETAILS.crn}</p>
              <p>Registered in England and Wales.</p>
            </div>
            <div className="flex gap-6">
              <span>VAT Registered: GB 123 4567 89</span>
              <span>Cyber Essentials Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
