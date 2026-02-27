import { Link, useLocation } from "react-router-dom";
import { NAVIGATION, COMPANY_DETAILS } from "../constants";
import { Menu, X, Cpu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-accent transition-colors">
            <Cpu size={24} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-primary">
            {COMPANY_DETAILS.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === item.href ? "text-accent" : "text-slate-600"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-primary/10"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-slate-200 md:hidden flex flex-col p-6 gap-4 shadow-xl"
          >
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium py-2",
                  location.pathname === item.href ? "text-accent" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white text-center py-3 rounded-xl font-semibold mt-2"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
