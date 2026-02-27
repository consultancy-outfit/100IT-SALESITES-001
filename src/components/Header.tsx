import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { NAVIGATION, COMPANY_DETAILS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-black/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-zinc-900">{COMPANY_DETAILS.name}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  location.pathname === item.path ? 'text-emerald-600' : 'text-zinc-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-bottom border-black/5 absolute top-20 left-0 right-0 p-4 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-600 hover:text-emerald-600"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-center font-medium"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
