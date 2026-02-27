import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">
                Blessday<span className="text-brand-500">House</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering British businesses with cutting-edge IT solutions, robust cybersecurity, and scalable cloud infrastructure. Your trusted partner in digital transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-500 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-brand-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">IT Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-500 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-500 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-brand-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-brand-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-500 transition-colors">GDPR Compliance</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-500 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                <span>Registered Office: N/A</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span>Phone: N/A</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <a href="mailto:info@blessdayhouse.co.uk" className="hover:text-brand-500">info@blessdayhouse.co.uk</a>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Company Registration</p>
                <p className="mt-1">CRN: N/A</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Blessday House. All rights reserved. Registered in England & Wales.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-300">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-300">Terms</Link>
            <Link to="/privacy" className="hover:text-slate-300">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
