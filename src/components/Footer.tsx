import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center text-white">
                <Shield size={20} />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">
                Centenary<span className="text-brand-500">Close</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering UK businesses with cutting-edge IT solutions, robust cyber security, and scalable cloud infrastructure. Your trusted partner in digital transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-400 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Cyber Security</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">IT Consultancy</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Network Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-display font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-500 shrink-0" />
                <a href="mailto:info@centenaryclose.co.uk" className="hover:text-brand-400 transition-colors">info@centenaryclose.co.uk</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-500 shrink-0" />
                <span>Not Available</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-500 shrink-0" />
                <span>Registered Office: Not Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Company Details */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-slate-500 space-y-1 text-center md:text-left">
            <p>&copy; {currentYear} Centenary Close. All rights reserved.</p>
            <p>Company Name: Centenary Close</p>
            <p>Company Registration Number (CRN): Not Available</p>
            <p>Registered in England and Wales.</p>
          </div>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link to="/terms" className="hover:text-brand-400 transition-colors underline underline-offset-4">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-brand-400 transition-colors underline underline-offset-4">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
