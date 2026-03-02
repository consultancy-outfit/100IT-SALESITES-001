import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, Linkedin, Twitter, Shield } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                SOMA<span className="text-emerald-600">IT</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Delivering enterprise-grade IT solutions and specialized healthcare technology across Central London. We empower businesses through innovation and security.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">IT Services</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-500 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal & Compliance</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-emerald-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-500 transition-colors">GDPR Commitment</Link></li>
              <li className="flex items-center gap-2 text-emerald-500">
                <Shield className="w-4 h-4" />
                <span>Cyber Essentials Certified</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>{COMPANY_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>{COMPANY_DETAILS.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>{COMPANY_DETAILS.email}</span>
            </div>
          </div>
        </div>

        {/* Company Details Footer */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-xs text-slate-500 space-y-2">
              <p className="font-semibold text-slate-400 uppercase tracking-wider">Company Details</p>
              <p>Company Name: {COMPANY_DETAILS.name}</p>
              <p>Registered Office Address: {COMPANY_DETAILS.address}</p>
              <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
              <p>Official Business Email: {COMPANY_DETAILS.email}</p>
            </div>
            <div className="text-xs text-slate-500 lg:text-right">
              <p>© {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p className="mt-1 italic">Providing credible IT services across the United Kingdom.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
