import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Cpu, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <Cpu className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold tracking-tight">
                Sterling Standard <span className="text-emerald-500">IT</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering British businesses with cutting-edge IT solutions, robust security, and strategic consultancy. Your trusted technology partner in Liverpool and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-500 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-emerald-500 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-500 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">GDPR Compliance</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>sterlingstandardcaregroupliverpool.co.uk</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>Not Available</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>Not Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Details Footer */}
        <div className="pt-8 border-t border-zinc-900 text-xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <span className="block text-zinc-500 uppercase tracking-wider mb-1">Company Name</span>
              <span className="text-zinc-300">Sterling Standard Care Group Liverpool</span>
            </div>
            <div>
              <span className="block text-zinc-500 uppercase tracking-wider mb-1">Registered Address</span>
              <span className="text-zinc-300">Not Available</span>
            </div>
            <div>
              <span className="block text-zinc-500 uppercase tracking-wider mb-1">Registration Number</span>
              <span className="text-zinc-300">Not Available</span>
            </div>
            <div>
              <span className="block text-zinc-500 uppercase tracking-wider mb-1">Business Email</span>
              <span className="text-zinc-300">sterlingstandardcaregroupliverpool.co.uk</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-4">
            <p>© {new Date().getFullYear()} Sterling Standard Care Group Liverpool. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Registered in England & Wales.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
