import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-brand-accent p-1.5 rounded-lg">
                <Monitor className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {COMPANY_DETAILS.name.split(' ')[0]}
                <span className="text-brand-accent">{COMPANY_DETAILS.name.split(' ')[1]}</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium IT services and strategic technology solutions for forward-thinking UK businesses. Empowering your growth through innovation and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-accent transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Cyber Security</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">IT Consultancy</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Disaster Recovery</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-slate-500 space-y-1 text-center md:text-left">
              <p>&copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn} | VAT: {COMPANY_DETAILS.vatNumber}</p>
              <p>Registered in England and Wales.</p>
            </div>
            <div className="flex space-x-6 text-xs text-slate-500">
              <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
