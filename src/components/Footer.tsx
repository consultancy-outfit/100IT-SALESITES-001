import { Link } from "react-router-dom";
import { COMPANY_DETAILS, NAVIGATION } from "../constants";
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 text-white">
            <Cpu size={32} className="text-accent" />
            <span className="font-display font-bold text-2xl tracking-tight">
              {COMPANY_DETAILS.name}
            </span>
          </Link>
          <p className="text-slate-400 leading-relaxed">
            Delivering world-class IT solutions and strategic technology consultancy to businesses across the United Kingdom.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-accent hover:text-white transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-accent hover:text-white transition-all">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {NAVIGATION.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="hover:text-accent transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-display font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Phone size={20} className="text-accent shrink-0" />
              <span>{COMPANY_DETAILS.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="text-accent shrink-0" />
              <span className="break-all">{COMPANY_DETAILS.email}</span>
            </li>
            <li className="flex gap-3">
              <MapPin size={20} className="text-accent shrink-0" />
              <span>{COMPANY_DETAILS.address}</span>
            </li>
          </ul>
        </div>

        {/* Trust */}
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck size={24} className="text-emerald-400" />
            <span className="text-white font-bold">GDPR Compliant</span>
          </div>
          <p className="text-sm text-slate-400">
            We are committed to protecting your data and privacy. Our systems are fully compliant with UK GDPR regulations.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-slate-800">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <span><strong>Company Name:</strong> {COMPANY_DETAILS.name}</span>
            <span><strong>CRN:</strong> {COMPANY_DETAILS.crn}</span>
            <span><strong>Registered Office:</strong> {COMPANY_DETAILS.address}</span>
          </div>
          <p>© {currentYear} {COMPANY_DETAILS.name} IT Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
