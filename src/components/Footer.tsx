import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, Linkedin, Twitter, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Venton Centre</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing enterprise-grade IT solutions for British businesses since 2010. We focus on reliability, security, and strategic growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">IT Services</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-indigo-400">{COMPANY_DETAILS.email}</a>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <h3 className="text-white font-semibold">GDPR Compliant</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              We take data protection seriously. Our systems are fully compliant with UK GDPR regulations.
            </p>
            <div className="flex flex-col space-y-2 text-xs">
              <Link to="/privacy" className="hover:text-white underline underline-offset-4">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white underline underline-offset-4">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500">
          <div className="flex flex-col space-y-1 text-center md:text-left">
            <p>&copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
          </div>
          <p>Registered in England & Wales</p>
        </div>
      </div>
    </footer>
  );
}
