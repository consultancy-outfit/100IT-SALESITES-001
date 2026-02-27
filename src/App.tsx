import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Lock, 
  Cloud, 
  Network, 
  Lightbulb, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Building2,
  FileText,
  Users,
  Target,
  Award
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES, PRICING, TESTIMONIALS, CASE_STUDIES } from './constants';
import { Service, PricingTier } from './types';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About Us', id: 'about' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => { setActivePage('home'); setIsOpen(false); }}
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold text-primary tracking-tight">
            Wrekin Villa
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                activePage === item.id ? 'text-accent' : 'text-slate-600'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => setActivePage('contact')}
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-left text-lg font-medium ${
                    activePage === item.id ? 'text-accent' : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => { setActivePage('contact'); setIsOpen(false); }}
                className="bg-primary text-white px-6 py-3 rounded-xl text-center font-semibold"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="text-accent w-8 h-8" />
            <span className="text-2xl font-display font-bold text-white">Wrekin Villa</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Empowering British businesses with cutting-edge IT solutions and unwavering support. Your trusted partner in digital transformation.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setActivePage('home')} className="hover:text-accent transition-colors">Home</button></li>
            <li><button onClick={() => setActivePage('services')} className="hover:text-accent transition-colors">Services</button></li>
            <li><button onClick={() => setActivePage('about')} className="hover:text-accent transition-colors">About Us</button></li>
            <li><button onClick={() => setActivePage('pricing')} className="hover:text-accent transition-colors">Pricing</button></li>
            <li><button onClick={() => setActivePage('contact')} className="hover:text-accent transition-colors">Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setActivePage('terms')} className="hover:text-accent transition-colors">Terms & Conditions</button></li>
            <li><button onClick={() => setActivePage('privacy')} className="hover:text-accent transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => setActivePage('about')} className="hover:text-accent transition-colors">GDPR Compliance</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company Details</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-accent shrink-0" />
              <span>{COMPANY_DETAILS.name}<br />{COMPANY_DETAILS.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-accent shrink-0" />
              <span>CRN: {COMPANY_DETAILS.crn}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <span>{COMPANY_DETAILS.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <span>{COMPANY_DETAILS.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. Registered in England & Wales.</p>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-bold rounded-full mb-6">
              UK-Based Managed IT Services
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-6 leading-[1.1]">
              Intelligent IT for the <span className="text-accent">Modern British</span> Enterprise.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Wrekin Villa provides enterprise-grade IT support, cybersecurity, and cloud solutions tailored for the unique needs of UK businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setActivePage('services')}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActivePage('contact')}
                className="bg-white text-primary border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all"
              >
                Book a Consultation
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/it-office/800/800" 
                alt="Modern IT Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary">99.9% Uptime</p>
                  <p className="text-xs text-slate-500">Guaranteed SLA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Why Choose Wrekin Villa?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We combine local UK expertise with world-class technology to deliver IT that actually works for you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Clock className="w-8 h-8" />, title: "24/7 UK Support", desc: "Our London-based helpdesk is available around the clock to resolve your issues." },
            { icon: <Shield className="w-8 h-8" />, title: "Cyber-First Approach", desc: "Security isn't an add-on; it's baked into every solution we provide." },
            { icon: <Target className="w-8 h-8" />, title: "Strategic Partnership", desc: "We don't just fix PCs; we help you use technology to grow your business." }
          ].map((benefit, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-accent/20 hover:bg-slate-50 transition-all group">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl mb-3">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl mb-6">Industries We Serve Across the UK</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                From financial services in the City to manufacturing in the Midlands, we provide sector-specific IT expertise that meets regulatory requirements and operational demands.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Legal & Financial', 'Manufacturing', 'Healthcare', 'Retail & E-commerce', 'Non-Profit', 'Professional Services'].map((industry, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent w-5 h-5" />
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/legal/400/300" alt="Legal Industry" className="rounded-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/factory/400/300" alt="Manufacturing" className="rounded-2xl w-full h-48 object-cover mt-8" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/health/400/300" alt="Healthcare" className="rounded-2xl w-full h-48 object-cover -mt-8" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/retail/400/300" alt="Retail" className="rounded-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Measurable Results</h2>
          <p className="text-slate-600">Real-world impact for our British clients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <h3 className="text-2xl mb-4 text-primary">{study.title}</h3>
              <div className="space-y-4 mb-8">
                <p className="text-sm"><span className="font-bold text-primary">Challenge:</span> {study.challenge}</p>
                <p className="text-sm"><span className="font-bold text-primary">Solution:</span> {study.solution}</p>
                <p className="text-sm"><span className="font-bold text-primary">Result:</span> {study.result}</p>
              </div>
              <div className="pt-6 border-t border-slate-200">
                <p className="text-3xl font-display font-bold text-accent">{study.value}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Estimated Value Delivered</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-slate-600 italic mb-6">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="bg-accent rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl mb-6">Ready to Modernise Your IT?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Join hundreds of UK businesses that trust Wrekin Villa for their technology needs.</p>
            <button 
              onClick={() => setActivePage('contact')}
              className="bg-white text-accent px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-xl"
            >
              Get Started Today
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
             <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Shield': return <Shield className="w-10 h-10" />;
      case 'Lock': return <Lock className="w-10 h-10" />;
      case 'Cloud': return <Cloud className="w-10 h-10" />;
      case 'Network': return <Network className="w-10 h-10" />;
      case 'Lightbulb': return <Lightbulb className="w-10 h-10" />;
      default: return <Shield className="w-10 h-10" />;
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Our Core IT Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Comprehensive technology solutions designed to empower your business operations and secure your future.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="space-y-24">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-20 h-20 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8">
                  {getIcon(service.icon)}
                </div>
                <h2 className="text-3xl md:text-4xl mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.longDescription}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" /> Target Audience
                    </h4>
                    <p className="text-sm text-slate-600">{service.targetAudience}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" /> Key Benefits
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {service.benefits.map((b, idx) => <li key={idx}>• {b}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-sm text-slate-500 mb-1">Starting from</p>
                  <p className="text-3xl font-display font-bold text-primary">{service.startingPrice} <span className="text-sm font-normal text-slate-400">/ month</span></p>
                </div>
              </div>

              <div className={`relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="bg-slate-100 rounded-3xl p-8 md:p-12">
                  <h4 className="text-xl font-bold mb-8 text-primary">Our Process</h4>
                  <div className="space-y-8">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex gap-6">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm font-bold text-accent border border-slate-200">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-primary">{step}</p>
                          <p className="text-xs text-slate-500 mt-1">Standard implementation phase {idx + 1}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl mb-6">About Wrekin Villa</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Founded on the principles of reliability and innovation, Wrekin Villa has grown from a local support desk to a premier UK IT consultancy.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-display font-bold text-accent mb-2">15+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-accent mb-2">250+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">Clients Nationwide</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/team/800/600" alt="Our Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl mb-6 flex items-center gap-3">
              <Target className="text-accent w-8 h-8" /> Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed">
              To empower British businesses by providing seamless, secure, and strategic IT solutions that drive growth and operational excellence. We believe technology should be an enabler, not a barrier.
            </p>
          </div>
          <div>
            <h2 className="text-3xl mb-6 flex items-center gap-3">
              <Shield className="text-accent w-8 h-8" /> Our Vision
            </h2>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted IT partner in the UK, recognised for our technical brilliance, ethical approach to data, and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "We are honest, transparent, and ethical in all our dealings." },
              { title: "Innovation", desc: "We constantly explore new technologies to keep our clients ahead." },
              { title: "Excellence", desc: "We strive for perfection in every ticket we close and project we deliver." },
              { title: "Security", desc: "Data protection is at the heart of everything we build and manage." }
            ].map((value, i) => (
              <div key={i} className="text-center p-6 border border-white/10 rounded-2xl">
                <h3 className="text-xl mb-4 text-accent">{value.title}</h3>
                <p className="text-sm text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="shrink-0">
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center">
                <Lock className="text-accent w-12 h-12" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl mb-4">GDPR & Data Compliance</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                As a UK-based company, we take GDPR compliance extremely seriously. We are fully registered with the Information Commissioner's Office (ICO) and implement rigorous data protection protocols for both our internal operations and the systems we manage for our clients.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> ICO Registered</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Regular Security Audits</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Data Processing Agreements</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-4 h-4" /> Cyber Essentials Certified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-4">No hidden fees. No complex jargon. Just reliable IT support for your business.</p>
          <p className="text-sm text-slate-400 font-medium italic">* All prices are subject to VAT at the prevailing UK rate.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING.map((tier, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-3xl border ${
                tier.popular ? 'border-accent shadow-xl bg-white scale-105 z-10' : 'border-slate-200 bg-slate-50'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl mb-2">{tier.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{tier.idealFor}</p>
              <div className="mb-8">
                <span className="text-5xl font-display font-bold text-primary">{tier.price}</span>
                <span className="text-slate-400 ml-2">{tier.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {tier.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="text-accent w-5 h-5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3 text-sm text-slate-600 pt-4 border-t border-slate-200">
                  <Clock className="text-slate-400 w-5 h-5 shrink-0" />
                  <span><span className="font-bold text-primary">Support:</span> {tier.support}</span>
                </li>
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.popular ? 'bg-accent text-white hover:bg-accent-dark' : 'bg-primary text-white hover:bg-slate-800'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-3xl mx-auto bg-slate-900 text-white p-10 rounded-3xl text-center">
          <h3 className="text-2xl mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-400 mb-8">We offer bespoke pricing for large enterprises, multi-site operations, and complex infrastructure projects.</p>
          <button className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent-dark transition-all">
            Request a Custom Quote
          </button>
        </div>
      </section>
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
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-6xl mb-6">Get in Touch</h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Whether you have a technical emergency or want to discuss a long-term IT strategy, our team is ready to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Registered Office</h4>
                    <p className="text-slate-600 text-sm">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Phone Number</h4>
                    <p className="text-slate-600 text-sm">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Email Address</h4>
                    <p className="text-slate-600 text-sm">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-sm">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for contacting Wrekin Villa. A member of our team will be in touch shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-accent font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="john@company.co.uk" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Your Business Ltd" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Services</option>
                      <option>Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input required type="checkbox" className="mt-1 w-4 h-4 text-accent border-slate-300 rounded focus:ring-accent" />
                    <p className="text-xs text-slate-500">
                      I consent to Wrekin Villa processing my data in accordance with their Privacy Policy for the purpose of responding to this enquiry.
                    </p>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">Interactive Map Placeholder</p>
            <p className="text-xs text-slate-400">Serving businesses across the United Kingdom</p>
          </div>
        </div>
        <img src="https://picsum.photos/seed/map/1920/600?blur=5" alt="Map background" className="w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
      </section>
    </div>
  );
};

const LegalPage = ({ title, content }: { title: string, content: React.ReactNode }) => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl">{title}</h1>
          <p className="text-slate-500 mt-4">Last Updated: February 2026</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 prose prose-slate prose-lg">
          {content}
        </div>
      </section>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'pricing': return <PricingPage />;
      case 'contact': return <ContactPage />;
      case 'terms': return (
        <LegalPage 
          title="Terms & Conditions" 
          content={
            <div className="space-y-8 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                <p>These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us"). By engaging our services, you agree to be bound by these terms.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Services and Payment</h2>
                <p>All services are provided as described in the relevant Service Level Agreement (SLA) or project proposal. Payments must be made in Pounds Sterling (£). Standard payment terms are 30 days from the date of invoice unless otherwise agreed in writing.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Intellectual Property</h2>
                <p>All intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company until full payment is received, at which point rights are transferred to the Client, subject to any third-party licenses.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Confidentiality</h2>
                <p>Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or would reasonably be considered confidential in nature.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Limitation of Liability</h2>
                <p>To the maximum extent permitted by English law, the Company's total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the Client in the 12 months preceding the claim.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Governing Law</h2>
                <p>These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              </section>
            </div>
          } 
        />
      );
      case 'privacy': return (
        <LegalPage 
          title="Privacy Policy" 
          content={
            <div className="space-y-8 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Data Collection</h2>
                <p>We collect personal data that you provide to us directly (e.g., via contact forms) and data collected automatically through your use of our website (e.g., cookies). This may include your name, email address, phone number, and IP address.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Purpose of Processing</h2>
                <p>We process your data to provide our services, respond to enquiries, improve our website, and comply with legal obligations under the UK GDPR and Data Protection Act 2018.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Data Retention</h2>
                <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by UK law (typically 6 years for financial records).</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Your Rights</h2>
                <p>Under the UK GDPR, you have the right to access, rectify, or erase your personal data, as well as the right to restrict or object to certain processing. To exercise these rights, please contact us at {COMPANY_DETAILS.email}.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Cookies</h2>
                <p>Our website uses cookies to enhance user experience. You can manage your cookie preferences through your browser settings. Essential cookies are required for the website to function correctly.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Security</h2>
                <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction.</p>
              </section>
            </div>
          } 
        />
      );
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
