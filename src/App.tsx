import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Shield, Cloud, Lock, Lightbulb, 
  Network, Database, Phone, Mail, MapPin, CheckCircle2,
  ArrowRight, Linkedin, Twitter, Github
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES, PRICING_PLANS } from './constants';
import { cn } from './lib/utils';

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      scrolled ? "bg-white/80 backdrop-blur-md border-slate-200 py-3" : "bg-transparent border-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
            <Shield className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Bridgewater<span className="text-slate-500">Complex</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-slate-900",
                location.pathname === link.path ? "text-slate-900" : "text-slate-500"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-sm"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-slate-900"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-slate-900 text-white px-5 py-3 rounded-xl text-center font-medium"
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

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900">
                Bridgewater<span className="text-slate-500">Complex</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Leading the way in British IT excellence. We provide strategic technology solutions that empower businesses to thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-slate-900"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/services" className="hover:text-slate-900">Managed IT Support</Link></li>
              <li><Link to="/services" className="hover:text-slate-900">Cloud Migration</Link></li>
              <li><Link to="/services" className="hover:text-slate-900">Cyber Security</Link></li>
              <li><Link to="/services" className="hover:text-slate-900">IT Consultancy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/about" className="hover:text-slate-900">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-slate-900">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-slate-900">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-slate-900">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-slate-900">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-xs text-slate-400 space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p>Company Registration Number: {COMPANY_DETAILS.crn} | Registered in England & Wales</p>
          </div>
          <div className="flex space-x-6 text-xs text-slate-400">
            <Link to="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-900">Terms</Link>
            <Link to="/cookies" className="hover:text-slate-900">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wider uppercase mb-6">
                British IT Excellence
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
                Empowering UK Business Through <span className="text-slate-500 italic">Strategic Technology.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                The Bridgewater Complex provides enterprise-grade IT services, cyber security, and cloud consultancy tailored for the unique needs of the British market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/contact" className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:bg-slate-50 transition-all">
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[100px] hidden lg:block" />
      </section>

      {/* Stats/Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h3 className="text-4xl font-bold text-slate-900 mb-2">99.9%</h3>
              <p className="text-slate-500 font-medium">Uptime Guarantee for Managed Clients</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h3 className="text-4xl font-bold text-slate-900 mb-2">£2.4M+</h3>
              <p className="text-slate-500 font-medium">Saved for UK Clients in Efficiency Gains</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h3 className="text-4xl font-bold text-slate-900 mb-2">15+</h3>
              <p className="text-slate-500 font-medium">Years of Combined Industry Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Why Choose Bridgewater?</h2>
            <p className="text-slate-400">We don't just fix computers; we build the technical foundation your business needs to scale securely.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Local Expertise", desc: "UK-based support team that understands your business environment.", icon: <MapPin /> },
              { title: "Security First", desc: "GDPR compliance and robust cyber security are baked into every solution.", icon: <Lock /> },
              { title: "Scalable Growth", desc: "Technology that grows with you, from startup to enterprise.", icon: <ArrowRight /> },
              { title: "Fixed Costs", desc: "Transparent pricing with no hidden fees or surprise invoices.", icon: <Database /> }
            ].map((benefit, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Snippet */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/it-office/800/600" 
                alt="Modern Office" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-slate-500 font-semibold text-sm uppercase tracking-widest mb-4 block">Case Study</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Digital Transformation for London Law Firm</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                We migrated a 40-person legal practice to a secure cloud environment, implementing multi-factor authentication and automated backups.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-3xl font-bold text-slate-900">£45k</p>
                  <p className="text-sm text-slate-500">Annual Hardware Savings</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">100%</p>
                  <p className="text-sm text-slate-500">Remote Work Readiness</p>
                </div>
              </div>
              <Link to="/services" className="text-slate-900 font-bold flex items-center hover:underline">
                View more results <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Trusted by British Business Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alistair Graham", role: "CEO, FinTech London", text: "Bridgewater transformed our infrastructure. Their response time is unmatched in the UK market." },
              { name: "Sarah Jenkins", role: "Director, Manchester Logistics", text: "Professional, reliable, and they speak plain English. No technical jargon, just results." },
              { name: "David Thorne", role: "Partner, Bristol Creative", text: "The peace of mind knowing our data is secure and GDPR compliant is worth every penny." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-900 rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 relative z-10">Ready to Upgrade Your IT?</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
              Join dozens of UK businesses that trust The Bridgewater Complex for their technology needs.
            </p>
            <Link to="/contact" className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all relative z-10 inline-block">
              Get Your Free IT Audit
            </Link>
            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const IconMap: Record<string, any> = {
    ShieldCheck: Shield,
    Cloud: Cloud,
    Lock: Lock,
    Lightbulb: Lightbulb,
    Network: Network,
    Database: Database
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-600">Tailored technology solutions designed to solve real-world business challenges for UK enterprises.</p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {SERVICES.map((service, i) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col lg:flex-row gap-12 items-start p-8 lg:p-12 rounded-[40px] border border-slate-100",
                  i % 2 === 0 ? "bg-white" : "bg-slate-50"
                )}
              >
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-8">
                    <Icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.overview}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Target Audience</h4>
                      <p className="text-slate-600">{service.targetAudience}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest">Key Benefits</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-center text-slate-600">
                            <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Our Process</h4>
                  <div className="space-y-6 relative">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-sm">
                          {idx + 1}
                        </div>
                        <span className="text-slate-700 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Starting from</p>
                      <p className="text-3xl font-bold text-slate-900">{service.startingPrice}</p>
                    </div>
                    <Link to="/contact" className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all">
                      Enquire Now
                    </Link>
                  </div>
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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-8">Our Story</h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Founded in the heart of the UK, The Bridgewater Complex was born from a simple observation: British businesses were being underserved by generic, one-size-fits-all IT providers.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We set out to build a consultancy that combines enterprise-grade technical capability with the personal touch of a local partner. Today, we are proud to support some of the UK's most innovative companies, ensuring their technology is an asset, not a liability.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 text-3xl mb-1">2012</h4>
                <p className="text-slate-500 text-sm">Year Founded</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-3xl mb-1">100%</h4>
                <p className="text-slate-500 text-sm">UK Based Team</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/team/800/800" 
              alt="Our Team" 
              className="rounded-[60px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-10 rounded-[40px] hidden md:block">
              <p className="text-2xl font-bold mb-2">"Excellence is not an act, but a habit."</p>
              <p className="text-slate-400">— Our Founding Principle</p>
            </div>
          </div>
        </div>

        {/* Mission/Vision/Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { title: "Our Mission", text: "To provide UK businesses with the most secure, reliable, and strategic IT infrastructure possible." },
            { title: "Our Vision", text: "To be the most trusted technology partner for British SMEs, driving innovation and growth." },
            { title: "Our Values", text: "Integrity, technical excellence, and a relentless focus on client success guide everything we do." }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[40px] bg-slate-50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "James Bridgewater", role: "Founder & CEO", img: "https://picsum.photos/seed/p1/400/400" },
              { name: "Eleanor Vance", role: "CTO", img: "https://picsum.photos/seed/p2/400/400" },
              { name: "Marcus Thorne", role: "Head of Operations", img: "https://picsum.photos/seed/p3/400/400" },
              { name: "Sophie Chen", role: "Director of Security", img: "https://picsum.photos/seed/p4/400/400" }
            ].map((p, i) => (
              <div key={i} className="text-center">
                <img src={p.img} alt={p.name} className="w-full aspect-square object-cover rounded-3xl mb-6 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                <h4 className="font-bold text-slate-900 text-xl">{p.name}</h4>
                <p className="text-slate-500 text-sm">{p.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GDPR Compliance */}
        <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-10">
          <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0">
            <Shield size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to GDPR</h3>
            <p className="text-slate-600 leading-relaxed">
              As a UK-based company, we take data protection seriously. We are fully compliant with the UK GDPR and the Data Protection Act 2018. We ensure that all client data is processed securely, stored within compliant jurisdictions, and handled with the highest level of confidentiality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600">No hidden fees. No complex contracts. Just reliable IT support tailored to your business size.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <div 
              key={i} 
              className={cn(
                "p-10 rounded-[40px] border flex flex-col",
                plan.popular ? "bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10" : "bg-white text-slate-900 border-slate-200"
              )}
            >
              {plan.popular && (
                <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full self-start mb-6">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={cn("text-sm mb-8", plan.popular ? "text-slate-400" : "text-slate-500")}>Ideal for {plan.idealFor}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-lg opacity-60">{plan.period}</span>
                <p className="text-xs mt-2 opacity-60">{plan.vat}</p>
              </div>

              <div className="mb-10 flex-grow">
                <h4 className="font-bold text-xs uppercase tracking-widest mb-6 opacity-60">What's Included</h4>
                <ul className="space-y-4">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle2 className={cn("w-4 h-4 mr-3", plan.popular ? "text-emerald-400" : "text-emerald-500")} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10 pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Support Level</p>
                <p className="font-semibold">{plan.support}</p>
              </div>

              <Link 
                to="/contact" 
                className={cn(
                  "w-full py-4 rounded-full font-bold text-center transition-all",
                  plan.popular ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. If our standard plans don't fit your requirements, we can create a bespoke package just for you.
          </p>
          <Link to="/contact" className="text-slate-900 font-bold flex items-center justify-center hover:underline">
            Speak to an Expert <ChevronRight className="ml-1 w-4 h-4" />
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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-bold text-slate-900 mb-8">Get in Touch</h1>
            <p className="text-xl text-slate-600 mb-12">
              Have a question or ready to start your project? Fill out the form and our team will get back to you within 4 business hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Registered Office</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 shrink-0">
                  <Shield />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Business Hours</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">Location</h4>
              <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400">
                <MapPin size={48} />
                <span className="ml-2 font-medium">Map Placeholder</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 lg:p-12 rounded-[40px] border border-slate-200 shadow-xl shadow-slate-100">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                <p className="text-slate-600 mb-8">Thank you for reaching out. A member of our team will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-slate-900 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Work Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all">
                    <option>Managed IT Support</option>
                    <option>Cloud Migration</option>
                    <option>Cyber Security</option>
                    <option>IT Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"></textarea>
                </div>
                <div className="flex items-start space-x-3">
                  <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                  <label className="text-xs text-slate-500 leading-relaxed">
                    I consent to The Bridgewater Complex processing my data in accordance with the <Link to="/privacy" className="text-slate-900 underline">Privacy Policy</Link>.
                  </label>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
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
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">{title}</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
          {content}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-slate-900 selection:text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<LegalPage 
              title="Terms and Conditions" 
              content={
                <>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                    <p>These terms and conditions govern your use of the services provided by {COMPANY_DETAILS.name}. By engaging our services, you agree to be bound by these terms.</p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">2. Payment Terms</h2>
                    <p>All prices are quoted in Great British Pounds (£) and are subject to VAT at the prevailing rate unless otherwise stated. Invoices are payable within 14 days of issue.</p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
                    <p>Unless otherwise agreed in writing, all intellectual property rights in any work created by us during the provision of services shall remain our property.</p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">4. Confidentiality</h2>
                    <p>Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as confidential.</p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
                    <p>Our total liability to you in respect of all losses arising under or in connection with the services shall be limited to the total fees paid by you for those services in the 12 months preceding the claim.</p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
                    <p>These terms shall be governed by and construed in accordance with the laws of England and Wales.</p>
                  </section>
                </>
              } 
            />} />
            <Route path="/privacy" element={<LegalPage 
              title="Privacy Policy" 
              content={
                <>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">1. Data Collection</h2>
                    <p>We collect personal data such as names, email addresses, and phone numbers when you contact us or use our services. We also collect technical data about your use of our website.</p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">2. Processing Purposes</h2>
                    <p>We process your data to provide our services, respond to enquiries, improve our website, and comply with legal obligations under the UK GDPR.</p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">3. Data Retention</h2>
                    <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">4. Your Rights</h2>
                    <p>Under the UK GDPR, you have the right to access, correct, or erase your personal data. You also have the right to object to or restrict the processing of your data.</p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">5. Cookies</h2>
                    <p>Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.</p>
                  </section>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">6. Security</h2>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way.</p>
                  </section>
                </>
              } 
            />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
