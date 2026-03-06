import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Globe,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import React, { useState } from "react";
import logo from "../assets/Wickham_Hall.svg";

const COMPANY_DETAILS = {
  name: "Wickham Hall",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17049007",
  phone: "0194 256 5146",
  email: "info@wickhamhall.co.uk",
  hours: "Mon - Fri: 08:30 - 18:00",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Wickham Hall" className="h-14 w-auto" />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "text-brand" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-brand text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-dark transition-all shadow-lg shadow-slate-200"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-brand text-white px-5 py-3 rounded-lg font-medium mt-4 hover:bg-brand-dark"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center">
                <img src={logo} alt="Wickham Hall" className="h-14 w-auto" />
              </div>
              <p className="text-slate-600 leading-relaxed">
                Empowering British businesses through innovative IT solutions,
                robust cybersecurity, and strategic technology consultancy.
              </p>
              <div className="flex space-x-4">
                <Shield className="w-5 h-5 text-brand" />
                <Globe className="w-5 h-5 text-brand" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-slate-900 font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-slate-600 hover:text-brand transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/pricing"
                    className="text-slate-600 hover:text-brand transition-colors"
                  >
                    Pricing Plans
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-slate-900 font-bold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/terms"
                    className="text-slate-600 hover:text-brand transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-slate-600 hover:text-brand transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy#gdpr"
                    className="text-slate-600 hover:text-brand transition-colors"
                  >
                    GDPR Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms#cookies"
                    className="text-slate-600 hover:text-brand transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-slate-900 font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <span className="text-sm text-slate-600">
                    {COMPANY_DETAILS.address}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-sm text-slate-600">
                    {COMPANY_DETAILS.phone}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-sm text-slate-600">
                    {COMPANY_DETAILS.email}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="text-xs text-slate-500 space-y-1">
                <p>
                  © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All
                  rights reserved.
                </p>
                <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
                <p>Registered in England and Wales.</p>
              </div>
              <div className="flex md:justify-end space-x-6 text-xs text-slate-500">
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
