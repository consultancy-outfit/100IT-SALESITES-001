import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { COMPANY_DETAILS, NAVIGATION_LINKS, LEGAL_LINKS } from "../constants";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center text-white font-bold text-lg">
                W
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Walfinch IT
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering UK businesses with cutting-edge IT solutions, robust cybersecurity, and expert managed services. Your trusted technology partner in Ealing and Uxbridge.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Cybersecurity Solutions</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Cloud Migration</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">IT Consultancy</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Data Backup & Recovery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Contact Us</h3>
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
              <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
              <p>Registered in England and Wales.</p>
            </div>
            <div className="flex space-x-6 text-xs text-slate-500">
              {LEGAL_LINKS.map((link) => (
                <Link key={link.path} to={link.path} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
