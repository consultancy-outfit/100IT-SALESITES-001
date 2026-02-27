import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { NAVIGATION, COMPANY_DETAILS } from '../../constants/config';
import { cn } from '../../lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white/80 py-3 shadow-sm backdrop-blur-md' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight",
              !scrolled && location.pathname === '/' ? "text-white" : "text-primary"
            )}>
              Wigan <span className="text-accent">IT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent',
                  !scrolled && location.pathname === '/' ? 'text-white/90' : 'text-slate-600',
                  location.pathname === item.href && 'text-accent'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-500/20"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className={cn("h-6 w-6", !scrolled && location.pathname === '/' ? "text-white" : "text-primary")} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 md:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-lg font-medium text-slate-600 hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-white text-center py-3 rounded-xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
