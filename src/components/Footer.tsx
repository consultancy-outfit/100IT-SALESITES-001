import { Link } from "react-router-dom";
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { COMPANY_DETAILS, NAV_LINKS } from "../constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Aspire<span className="text-indigo-600">IT</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering UK businesses with cutting-edge IT solutions, robust cybersecurity, and expert managed support. Your trusted technology partner in Luton and beyond.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:bg-indigo-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:bg-indigo-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg hover:bg-indigo-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/terms" className="text-sm hover:text-indigo-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-sm hover:text-indigo-400 transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="text-sm hover:text-indigo-400 transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-sm hover:text-indigo-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-sm hover:text-indigo-400 transition-colors">IT Consultancy</Link></li>
              <li><Link to="/services" className="text-sm hover:text-indigo-400 transition-colors">Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="flex gap-3 text-sm">
              <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>{COMPANY_DETAILS.address}</span>
            </div>
            <div className="flex gap-3 text-sm">
              <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-indigo-400 transition-colors">
                {COMPANY_DETAILS.phone}
              </a>
            </div>
            <div className="flex gap-3 text-sm">
              <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-indigo-400 transition-colors">
                {COMPANY_DETAILS.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center md:text-left">
            <span>© {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</span>
            <span>Company Registration No: {COMPANY_DETAILS.crn}</span>
          </div>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-indigo-400 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
