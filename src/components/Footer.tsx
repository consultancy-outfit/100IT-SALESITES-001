import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Attaining Independence</span>
            </Link>
            <p className="text-sm leading-6 max-w-xs">
              Empowering UK businesses with cutting-edge IT solutions, robust cybersecurity, and scalable cloud infrastructure.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/services" className="text-sm leading-6 hover:text-white">Managed IT Support</Link></li>
                  <li><Link to="/services" className="text-sm leading-6 hover:text-white">Cybersecurity</Link></li>
                  <li><Link to="/services" className="text-sm leading-6 hover:text-white">Cloud Solutions</Link></li>
                  <li><Link to="/services" className="text-sm leading-6 hover:text-white">IT Consultancy</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/about" className="text-sm leading-6 hover:text-white">About Us</Link></li>
                  <li><Link to="/pricing" className="text-sm leading-6 hover:text-white">Pricing</Link></li>
                  <li><Link to="/contact" className="text-sm leading-6 hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Details</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-3">
                    <Phone className="h-5 w-5 text-brand-500 shrink-0" />
                    <span className="text-sm">0121 405 2129</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="h-5 w-5 text-brand-500 shrink-0" />
                    <span className="text-sm">Info@attainingindependence.co.uk</span>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="h-5 w-5 text-brand-500 shrink-0" />
                    <span className="text-sm">
                      15 Queens Road, Donnington,<br />
                      Telford, England, TF2 8DB
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs leading-5 text-slate-400">
            &copy; {currentYear} Attaining Independence. All rights reserved.
            <div className="mt-1">
              Company Registration Number: 17046237
            </div>
          </div>
          <div className="flex gap-x-6">
            <Link to="/terms" className="text-xs leading-5 text-slate-400 hover:text-white">Terms & Conditions</Link>
            <Link to="/privacy" className="text-xs leading-5 text-slate-400 hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
