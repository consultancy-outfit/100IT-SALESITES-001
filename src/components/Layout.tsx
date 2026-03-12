import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Shield,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { COMPANY_DETAILS } from "../constants";
import HCFLogo from "../assets/HCF_The_Springs.svg";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyan-50 font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      {/* Top Bar */}
      <div className="bg-cyan-100 text-slate-700 py-2 px-4 hidden md:block border-b border-cyan-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium tracking-wide uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-cyan-600" />{" "}
              {COMPANY_DETAILS.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-cyan-600" />{" "}
              {COMPANY_DETAILS.email}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>UK Registered Company: {COMPANY_DETAILS.crn}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-cyan-100">
        <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-[160px] h-[40px] overflow-hidden flex items-center cursor-pointer">
              <img
                src={HCFLogo}
                alt={`${COMPANY_DETAILS.name} logo`}
                className="w-50 h-18 object-cover object-center"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-cyan-600",
                  location.pathname === link.path
                    ? "text-cyan-600"
                    : "text-slate-600",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-cyan-700 transition-all shadow-md shadow-cyan-200 active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-lg font-medium text-slate-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-cyan-600 text-white px-6 py-3 rounded-xl text-center font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-cyan-50 text-slate-700 pt-20 pb-10 border-t border-cyan-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Link to="/" className="flex items-center cursor-pointer">
                <div className="w-[160px] h-[40px] overflow-hidden flex items-center cursor-pointer">
                  <img
                    src={HCFLogo}
                    alt={`${COMPANY_DETAILS.name} logo`}
                    className="w-50 h-18 object-cover object-center"
                  />
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-slate-600">
                Empowering UK businesses with cutting-edge IT solutions, managed
                services, and strategic technology consulting.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-colors cursor-pointer text-cyan-600">
                  <Globe size={16} />
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-colors cursor-pointer text-cyan-600">
                  <Shield size={16} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold mb-6">Our Services</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-600 transition-colors"
                  >
                    Managed IT Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-600 transition-colors"
                  >
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-600 transition-colors"
                  >
                    Cybersecurity Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-600 transition-colors"
                  >
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-600 transition-colors"
                  >
                    Disaster Recovery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-cyan-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="hover:text-cyan-600 transition-colors"
                  >
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-cyan-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-cyan-600 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-cyan-600 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold mb-6">Contact Details</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-cyan-600 shrink-0" />
                  <span>{COMPANY_DETAILS.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-cyan-600 shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-cyan-600 shrink-0" />
                  <span>{COMPANY_DETAILS.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-cyan-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
            <p>
              © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <span>CRN: {COMPANY_DETAILS.crn}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
