import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Teesside <span className="text-brand-400">Supported Living</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering UK healthcare and supported living providers with cutting-edge IT infrastructure, 
              cybersecurity, and managed services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Facebook className="w-5 h-5" /></a>
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

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-brand-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">GDPR Compliance</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0" />
                <span>UNITED KINGDOM</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                <span>#####</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-400 shrink-0" />
                <span>#####</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="text-center md:text-left space-y-2">
            <p>© {currentYear} Teesside Supported Living. All rights reserved.</p>
            <div className="space-y-1">
              <p>Company Name: Teesside Supported Living</p>
              <p>Registered Office Address (UK): UNITED KINGDOM</p>
              <p>Company Registration Number (CRN): #####</p>
              <p>UK Phone Number:#####</p>
              <p>Official Business Email: #####</p>
            </div>
          </div>
          <div className="flex gap-6">
            <span>VAT Reg: #####</span>
            <span>ISO ##### Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
