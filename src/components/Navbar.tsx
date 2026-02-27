import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Cpu } from 'lucide-react';
import { NAVIGATION, COMPANY_DETAILS } from '../constants';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-zinc-900 uppercase">
                {COMPANY_DETAILS.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-zinc-900",
                  location.pathname === item.href ? "text-zinc-900 underline underline-offset-8" : "text-zinc-500"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-zinc-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-zinc-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 text-base font-medium",
                  location.pathname === item.href ? "text-zinc-900 bg-zinc-50" : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
