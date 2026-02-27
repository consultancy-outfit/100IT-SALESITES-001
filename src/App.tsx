import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Shield, Cloud, Lock, Network, Lightbulb, Database, 
  ChevronRight, Phone, Mail, MapPin, Clock, CheckCircle2, 
  ArrowRight, Facebook, Twitter, Linkedin, Github
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES, PRICING_PLANS, TESTIMONIALS, CASE_STUDIES } from './constants';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Warm Embrace <span className="text-indigo-600">IT</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-base font-semibold"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Warm Embrace <span className="text-indigo-400">IT</span></span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading the way in British IT services. We provide secure, scalable, and innovative technology solutions for modern enterprises across the UK.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">GDPR Compliance</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.name}<br />{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-indigo-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-indigo-400 transition-colors">{COMPANY_DETAILS.email}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-indigo-400 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-xs opacity-70">
                <span>CRN: {COMPANY_DETAILS.crn}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs">
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. Registered in England & Wales.
          </p>
          <p className="text-xs text-slate-500">
            Designed for excellence in British IT.
          </p>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-70" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
                Trusted UK IT Partners
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                Empowering British Business Through <span className="text-indigo-600">Smart IT</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                From managed support to advanced cybersecurity, we provide the technical backbone your business needs to thrive in a digital-first world.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/services"
                  className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200 flex items-center justify-center group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Warm Embrace IT?</h2>
              <p className="text-lg text-slate-600 mb-8">
                We don't just fix computers; we build resilient, high-performance environments that drive growth. Our team of UK-based engineers is dedicated to your success.
              </p>
              <div className="space-y-4">
                {[
                  "99.9% Uptime Guarantee",
                  "15-Minute Response Time for Critical Issues",
                  "Fully GDPR & Cyber Essentials Compliant",
                  "Transparent, Fixed-Fee Pricing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">150+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Clients Managed</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Support Coverage</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Specialised IT solutions tailored for the unique regulatory and operational requirements of UK sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Legal', icon: 'Scale' },
              { name: 'Finance', icon: 'Banknote' },
              { name: 'Healthcare', icon: 'HeartPulse' },
              { name: 'Construction', icon: 'HardHat' },
              { name: 'Retail', icon: 'ShoppingBag' },
              { name: 'Education', icon: 'GraduationCap' },
            ].map((industry, i) => (
              <div key={i} className="flex flex-col items-center p-6 bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-50 transition-colors">
                  <div className="text-slate-400 group-hover:text-indigo-600 transition-colors">
                    {/* Placeholder for dynamic icons */}
                    <div className="w-6 h-6 border-2 border-current rounded-sm" />
                  </div>
                </div>
                <span className="font-semibold text-slate-700 text-sm">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Measurable Results</h2>
              <p className="text-slate-400">
                We don't just talk about performance; we deliver it. Here's how we've helped UK businesses save money and increase efficiency.
              </p>
            </div>
            <Link to="/contact" className="text-indigo-400 font-semibold flex items-center hover:text-indigo-300 transition-colors">
              View all case studies <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all">
                <div className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-4">{study.client}</div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6">{study.description}</p>
                <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-300 font-bold">
                  Result: {study.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-indigo-600 mb-6 font-serif text-5xl absolute top-4 left-4 opacity-10">"</div>
                <p className="text-slate-600 mb-8 relative z-10 italic">
                  {t.content}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[2.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Secure Your Digital Future?</h2>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                Join hundreds of UK businesses that trust Warm Embrace IT for their technology needs. Let's build something great together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-white text-indigo-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all shadow-xl"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto bg-indigo-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-800 transition-all border border-indigo-500"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const IconMap: Record<string, any> = {
    Shield, Cloud, Lock, Network, Lightbulb, Database
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to scale with your business. We handle the complexity so you can focus on growth.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, i) => {
            const Icon = IconMap[service.icon] || Shield;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center space-x-3 text-indigo-600 font-bold uppercase tracking-widest text-sm">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span>{service.title}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{service.description}</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <ArrowRight size={16} className="mr-2 text-indigo-600" /> Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((b, idx) => (
                          <li key={idx} className="text-slate-600 text-sm flex items-center">
                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <ArrowRight size={16} className="mr-2 text-indigo-600" /> Target Audience
                      </h4>
                      <p className="text-slate-600 text-sm">{service.targetAudience}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4">Our Process</h4>
                    <div className="flex flex-wrap gap-3">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-indigo-600 border border-slate-200 shadow-sm">
                            {idx + 1}. {step}
                          </span>
                          {idx < service.process.length - 1 && <ChevronRight size={14} className="mx-1 text-slate-300" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <span className="text-slate-500 text-sm">Starting from</span>
                      <div className="text-2xl font-bold text-slate-900">{service.startingPrice}</div>
                    </div>
                    <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all">
                      Enquire Now
                    </Link>
                  </div>
                </div>
                <div className="flex-1 w-full aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={`https://picsum.photos/seed/${service.id}/800/800`} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">A Legacy of Technical Excellence</h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in the heart of the UK, Warm Embrace IT began with a simple mission: to make enterprise-grade technology accessible to businesses of all sizes. We saw a gap in the market for an IT partner that combined technical brilliance with a truly human approach.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Today, we are a leading managed service provider, supporting hundreds of users across the country. Our name reflects our philosophy—we embrace your technical challenges as our own, providing a warm, supportive, and highly professional service that feels like an extension of your own team.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-sm text-slate-500">To empower UK businesses through innovative, secure, and reliable technology solutions.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Our Vision</h4>
                <p className="text-sm text-slate-500">To be the most trusted and human-centric IT partner in the British technology sector.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-indigo-600 rounded-[4rem] rotate-3 absolute inset-0 -z-10 opacity-10" />
            <img 
              src="https://picsum.photos/seed/about-team/800/800" 
              alt="Our Team" 
              className="rounded-[4rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity First', desc: 'We operate with absolute transparency in our pricing, our advice, and our actions.' },
              { title: 'Technical Mastery', desc: 'We never stop learning. Our engineers are constantly certified in the latest technologies.' },
              { title: 'Human Connection', desc: 'Technology is about people. We communicate clearly, without jargon, and with empathy.' }
            ].map((v, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-indigo-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
                <p className="text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GDPR */}
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 text-indigo-400 font-bold uppercase tracking-widest text-sm mb-6">
              <Lock size={20} />
              <span>Security & Compliance</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Commitment to GDPR & Privacy</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              As a UK-based company, we take data protection seriously. We are fully compliant with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We help our clients achieve and maintain the same high standards of data security.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
              <li className="flex items-center"><CheckCircle2 className="text-indigo-400 mr-2 w-4 h-4" /> Cyber Essentials Certified</li>
              <li className="flex items-center"><CheckCircle2 className="text-indigo-400 mr-2 w-4 h-4" /> Regular Security Audits</li>
              <li className="flex items-center"><CheckCircle2 className="text-indigo-400 mr-2 w-4 h-4" /> Encrypted Data Backups</li>
              <li className="flex items-center"><CheckCircle2 className="text-indigo-400 mr-2 w-4 h-4" /> Staff Security Training</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose a plan that fits your business needs. No hidden fees, no long-term contracts, just reliable IT support.
          </p>
          <p className="mt-4 text-sm text-slate-500 italic">* All prices are per user, per month and exclude VAT at the prevailing rate.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-[2.5rem] p-10 border-2 transition-all relative ${
                plan.isPopular ? 'border-indigo-600 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm hover:border-indigo-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 ml-1">/user/mo</span>
                </div>
                <p className="text-sm text-slate-500 mt-4">{plan.idealFor}</p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</div>
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100 mb-10">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Support Level</div>
                <div className="flex items-center space-x-2 text-slate-900 font-semibold">
                  <Clock size={16} className="text-indigo-600" />
                  <span>{plan.supportLevel}</span>
                </div>
              </div>

              <Link
                to="/contact"
                className={`block w-full text-center py-4 rounded-full font-bold transition-all ${
                  plan.isPopular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-12 rounded-[3rem] border border-slate-100 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Custom Enterprise Solution?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            For organisations with over 100 users or complex multi-site requirements, we offer bespoke pricing and dedicated infrastructure management.
          </p>
          <Link to="/contact" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700">
            Contact our Enterprise Team <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">Let's Talk Technology</h1>
            <p className="text-lg text-slate-600 mb-12">
              Whether you have a specific project in mind or just want to explore how we can improve your IT, we're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-slate-600 hover:text-indigo-600 transition-colors">{COMPANY_DETAILS.email}</a>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <span className="text-slate-600">{COMPANY_DETAILS.phone}</span>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <span className="text-slate-600">{COMPANY_DETAILS.hours}</span>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                  <span className="text-slate-600">{COMPANY_DETAILS.name}<br />{COMPANY_DETAILS.address}</span>
                  <div className="mt-2 text-xs text-slate-400">CRN: {COMPANY_DETAILS.crn}</div>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 bg-slate-100 rounded-3xl border border-slate-200 flex items-center justify-center text-slate-400 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/400')] grayscale opacity-30" />
              <span className="relative z-10 font-medium">Map Placeholder</span>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[3rem] border border-slate-100 shadow-2xl">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="text-emerald-600 w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h2>
                <p className="text-slate-600">One of our engineers will be in touch within the next 2 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-indigo-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="Acme Ltd" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Work Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="john@company.co.uk" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all appearance-none bg-white">
                    <option>Managed IT Support</option>
                    <option>Cloud Migration</option>
                    <option>Cyber Security</option>
                    <option>Network Infrastructure</option>
                    <option>Other / General Enquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <div className="flex items-start space-x-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" id="consent" />
                  <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                    I consent to Warm Embrace IT processing my data in accordance with their <Link to="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link>. We will never share your details with third parties.
                  </label>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LegalPage = ({ title, content }: { title: string, content: React.ReactNode }) => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">{title}</h1>
        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
          {content}
        </div>
      </div>
    </div>
  );
};

const TermsContent = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
      <p>These Terms and Conditions govern your use of the Warm Embrace Care Agency (trading as Warm Embrace IT) website and services. By accessing this website, you agree to these terms in full. If you disagree with any part of these terms, you must not use our website or services.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
      <p>Unless otherwise stated, Warm Embrace Care Agency and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages for your own personal use subject to restrictions set in these terms.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
      <p>All financial transactions are conducted in Pounds Sterling (£). Invoices are issued monthly in advance for managed services and are due within 14 days of the invoice date. Late payments may incur interest at a rate of 8% above the Bank of England base rate.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
      <p>Warm Embrace IT will not be liable for any indirect, special, or consequential loss or damage arising under these terms and conditions or in connection with our website, whether arising in tort, contract, or otherwise.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
      <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
    </section>
  </div>
);

const PrivacyContent = () => (
  <div className="space-y-8">
    <section>
      <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
      <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. This may include names, email addresses, phone numbers, and company details.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">2. Processing Purposes</h2>
      <p>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations (including UK GDPR), and/or your consent.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">3. Data Retention</h2>
      <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
      <p>Under the UK GDPR, you have rights including the right to access, rectify, or erase your personal data, the right to restrict processing, and the right to data portability. To exercise these rights, please contact us at {COMPANY_DETAILS.email}.</p>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">5. Security Measures</h2>
      <p>We have implemented appropriate technical and organisational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
    </section>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<LegalPage title="Terms & Conditions" content={<TermsContent />} />} />
          <Route path="/privacy" element={<LegalPage title="Privacy Policy" content={<PrivacyContent />} />} />
        </Routes>
      </Layout>
    </Router>
  );
}
