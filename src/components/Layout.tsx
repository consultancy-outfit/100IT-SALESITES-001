import { COMPANY_DETAILS } from "../constants";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ShieldCheck, Facebook, Twitter, Linkedin } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <ShieldCheck className="h-8 w-8 text-emerald-600" />
          <span className="text-xl font-bold tracking-tight text-slate-900">Hillside IT</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Home</Link>
          <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Services</Link>
          <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">About</Link>
          <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Pricing</Link>
          <Link to="/contact" className="inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-medium text-white hover:bg-slate-800 transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-emerald-600" />
              <span className="text-lg font-bold tracking-tight text-slate-900">Hillside IT Solutions</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Empowering Plymouth businesses with world-class IT support, cloud solutions, and cyber security expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-slate-500 hover:text-emerald-600 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-emerald-600 transition-colors">About Hillside</Link></li>
              <li><Link to="/pricing" className="text-slate-500 hover:text-emerald-600 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-emerald-600 transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-slate-500 hover:text-emerald-600 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-slate-500 hover:text-emerald-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="text-slate-500 hover:text-emerald-600 transition-colors">GDPR Compliance</Link></li>
              <li><Link to="/privacy" className="text-slate-500 hover:text-emerald-600 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Contact Details</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 text-slate-500">
                <MapPin className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex gap-3 text-slate-500">
                <Phone className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex gap-3 text-slate-500">
                <Mail className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p className="mt-1">Registered in England & Wales. CRN: {COMPANY_DETAILS.crn}</p>
          </div>
          <p>VAT registered. All prices exclude VAT unless stated otherwise.</p>
        </div>
      </div>
    </footer>
  );
};
