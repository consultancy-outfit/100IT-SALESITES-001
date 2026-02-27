import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <Cpu className="text-zinc-950 w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Draycombe<span className="text-zinc-500">House</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium UK-based IT services provider delivering innovative technology solutions to businesses across the United Kingdom.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cloud Migration</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">IT Consultancy</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Disaster Recovery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-sm">
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-zinc-500" />
              <span>{COMPANY_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-zinc-500" />
              <span>{COMPANY_DETAILS.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-zinc-500" />
              <span>{COMPANY_DETAILS.email}</span>
            </div>
          </div>
        </div>

        {/* Legal & Bottom */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <div className="space-y-2 text-center md:text-left">
            <p>&copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p className="text-zinc-600">
              Company Registration Number: {COMPANY_DETAILS.crn} | Registered in England and Wales
            </p>
          </div>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
