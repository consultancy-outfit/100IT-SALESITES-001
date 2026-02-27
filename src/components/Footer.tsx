import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Sylvian<span className="text-indigo-600">Care</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Empowering British businesses with cutting-edge IT solutions. From managed support to cloud strategy, we are your dedicated technology partner in the UK.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors text-white">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-indigo-400 transition-colors">IT Services</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Our Team</Link></li>
            <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing Plans</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
            <li><Link to="/gdpr" className="hover:text-indigo-400 transition-colors">GDPR Compliance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Contact Details</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>0000</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>0000</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>N/A</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-xs text-slate-500 space-y-1">
            <p>© {currentYear} Sylvian Care Newbury. All rights reserved.</p>
            <p>Company Name: Sylvian Care Newbury</p>
            <p>Registered Office Address (UK): N/A</p>
            <p>Company Registration Number (CRN): 00000</p>
          </div>
          <div className="md:text-right">
            <p className="text-xs text-slate-500 italic">
              Providing excellence in IT services across the United Kingdom.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
