import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                <Cpu size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white leading-none">SHS SOLUTIONS</span>
                <span className="text-[10px] font-medium text-brand-400 tracking-widest uppercase">North East IT</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering UK businesses with cutting-edge IT infrastructure, cyber security, and managed services. Your trusted technology partner in the North East.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-400 transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Cyber Security</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Disaster Recovery</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">IT Consultancy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-400 shrink-0 mt-0.5" />
                <span>Not Available<br />United Kingdom</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-400 shrink-0" />
                <span>Not Available</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-400 shrink-0" />
                <span>Not Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500">
          <div className="flex flex-col space-y-2">
            <p>&copy; {currentYear} Shauna HealthCare Services Solutions North East. All rights reserved.</p>
            <p>Company Name: Shauna HealthCare Services Solutions North East</p>
            <p>CRN: Not Available | Registered in England & Wales</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
