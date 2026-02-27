import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Cloud, 
  Lock, 
  Lightbulb, 
  Network, 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle2,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Page, Service, PricingTier } from './types';
import { COMPANY_DETAILS, SERVICES, PRICING_TIERS, TESTIMONIALS, CASE_STUDIES } from './constants';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About Us', value: 'about' },
    { label: 'Pricing', value: 'pricing' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center mr-3">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-brand-primary tracking-tight">Eleanor Live Well</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  currentPage === item.value ? 'text-brand-accent' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-brand-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
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
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setCurrentPage(item.value);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <ShieldCheck className="text-brand-accent w-8 h-8 mr-2" />
              <span className="text-xl font-bold text-white">Eleanor Live Well</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering British businesses through strategic IT solutions and reliable managed services.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 mt-1 text-brand-accent" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 mt-1 text-brand-accent" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-brand-accent" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="mb-2">Company Name: {COMPANY_DETAILS.name}</p>
              <p className="mb-2">Registered Office Address (UK): {COMPANY_DETAILS.address}</p>
              <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
            </div>
            <div className="md:text-right">
              <p>© {new Date().getFullYear()} Eleanor Live Well Ltd. All rights reserved.</p>
              <p className="mt-2">Registered in England and Wales.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50 rounded-l-[100px] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-brand-accent uppercase bg-blue-50 rounded-full">
                Premium UK IT Services
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
                Strategic Technology for <span className="text-brand-accent">British Business</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                Eleanor Live Well provides enterprise-grade IT support, cloud strategy, and cyber security tailored for the UK market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setCurrentPage('services')} className="btn-primary flex items-center justify-center">
                  Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button onClick={() => setCurrentPage('contact')} className="btn-secondary">
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
              <div className="absolute -bottom-6 -left-6 glass-card p-6 max-w-xs hidden sm:block">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Live Status</span>
                </div>
                <p className="text-sm font-medium text-slate-800">
                  99.9% Uptime maintained for all managed clients across the UK.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Eleanor Live Well?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We combine deep technical expertise with a human-centric approach to deliver IT services that actually drive growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'UK-Based Support', desc: 'Our entire team is based in the UK, ensuring no language barriers and local time zone alignment.', icon: <MapPin className="w-6 h-6" /> },
              { title: 'GDPR Excellence', desc: 'Security is at our core. We ensure every solution is fully compliant with UK data protection laws.', icon: <ShieldCheck className="w-6 h-6" /> },
              { title: 'Predictable Pricing', desc: 'No hidden fees. Our transparent GBP pricing helps you manage your budget with confidence.', icon: <CheckCircle2 className="w-6 h-6" /> },
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-brand-accent transition-colors group">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:text-brand-accent transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Measurable Results</h2>
              <p className="text-slate-600">Real impact for real British businesses.</p>
            </div>
            <button onClick={() => setCurrentPage('about')} className="text-brand-accent font-semibold flex items-center mt-4 md:mt-0">
              View all case studies <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="glass-card p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">{study.client}</span>
                  <span className="text-lg font-bold text-emerald-600">{study.result}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow">{study.description}</p>
                <button className="text-sm font-bold flex items-center hover:text-brand-accent transition-colors">
                  Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-slate-600 mb-8">
                We pride ourselves on long-term partnerships with some of the UK's most innovative companies.
              </p>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-5 h-5 text-yellow-400">★</div>)}
              </div>
              <p className="text-sm font-medium mt-2">Average 4.9/5 rating on Trustpilot</p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-2xl relative">
                  <div className="text-4xl text-slate-200 absolute top-4 right-6 font-serif">"</div>
                  <p className="text-slate-700 italic mb-6 relative z-10">{t.content}</p>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-[40px] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 relative z-10">Ready to secure your digital future?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto relative z-10">
              Join dozens of UK businesses that trust Eleanor Live Well for their IT needs.
            </p>
            <button onClick={() => setCurrentPage('contact')} className="bg-white text-brand-primary px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all relative z-10">
              Get a Free IT Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8" />;
      case 'Cloud': return <Cloud className="w-8 h-8" />;
      case 'Lock': return <Lock className="w-8 h-8" />;
      case 'Lightbulb': return <Lightbulb className="w-8 h-8" />;
      case 'Network': return <Network className="w-8 h-8" />;
      default: return <ShieldCheck className="w-8 h-8" />;
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Core IT Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to scale with your business.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, i) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-blue-50 text-brand-accent rounded-2xl flex items-center justify-center mb-8">
                  {getIcon(service.icon)}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3">Target Audience</h4>
                    <p className="text-slate-700">{service.targetAudience}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3">Starting From</h4>
                    <p className="text-2xl font-bold text-brand-primary">{service.startingPrice}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="glass-card p-8 bg-slate-50">
                  <h4 className="font-bold mb-6">Our Process</h4>
                  <div className="space-y-6">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0 shadow-sm">
                          {idx + 1}
                        </div>
                        <p className="text-slate-700 font-medium pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-8">Our Story</h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in the heart of the UK, Eleanor Live Well was born from a simple observation: many IT providers focus on the technology, but forget the people using it.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We set out to build a different kind of IT company—one that speaks plain English, understands the unique challenges of the British business landscape, and prioritises long-term value over quick fixes.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-brand-primary mb-1">10+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-primary mb-1">150+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Clients Served</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/team/800/600" 
              alt="Our Team" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-accent p-8 rounded-2xl text-white shadow-xl max-w-xs">
              <p className="text-xl font-bold mb-2">Our Mission</p>
              <p className="text-sm opacity-90">To provide world-class IT infrastructure that allows British businesses to focus on what they do best.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-600">To be the most trusted technology partner for SMEs across the United Kingdom, known for integrity and excellence.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Core Values</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Transparency in all dealings</li>
              <li>• Relentless focus on security</li>
              <li>• Commitment to innovation</li>
              <li>• Empathy for the end-user</li>
            </ul>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold mb-4">GDPR Commitment</h3>
            <p className="text-slate-600">We are fully committed to the UK GDPR. Every solution we design is "secure by design" and "private by default."</p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Eleanor Thompson', role: 'Founder & CEO', img: 'https://picsum.photos/seed/person1/400/400' },
              { name: 'David Miller', role: 'Chief Technology Officer', img: 'https://picsum.photos/seed/person2/400/400' },
              { name: 'James Wilson', role: 'Head of Security', img: 'https://picsum.photos/seed/person3/400/400' },
            ].map((person, i) => (
              <div key={i} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold">{person.name}</h4>
                <p className="text-slate-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your business stage. All prices are in GBP and exclude VAT.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-[32px] flex flex-col h-full relative ${
                tier.highlighted 
                ? 'bg-brand-primary text-white shadow-2xl scale-105 z-10' 
                : 'bg-white text-slate-900 border border-slate-200'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className={`text-sm mb-8 ${tier.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                {tier.idealFor}
              </p>
              <div className="mb-8">
                <span className="text-5xl font-bold">{tier.price}</span>
                {tier.price !== 'Custom' && <span className={`text-sm ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>}
              </div>
              
              <div className="mb-8 flex-grow">
                <h4 className={`text-xs font-bold uppercase tracking-widest mb-4 ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                  What's Included
                </h4>
                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle2 className={`w-4 h-4 mr-3 mt-0.5 ${tier.highlighted ? 'text-brand-accent' : 'text-emerald-500'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`pt-8 border-t mb-8 ${tier.highlighted ? 'border-white/10' : 'border-slate-100'}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Support Level</p>
                <p className="font-medium">{tier.support}</p>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.highlighted 
                ? 'bg-white text-brand-primary hover:bg-slate-100' 
                : 'bg-brand-primary text-white hover:bg-slate-800'
              }`}>
                {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started Now'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-slate-500 text-sm">
          <p>* All plans are billed monthly. Custom enterprise plans available upon request.</p>
          <p>VAT will be added at the prevailing UK rate (currently 20%).</p>
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
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-8">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-12">
              Have a question or ready to start your IT transformation? Our UK-based team is ready to help.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 text-brand-accent rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 text-brand-accent rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 text-brand-accent rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            <div className="aspect-video w-full bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/map/800/400?blur=2" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <MapPin className="w-10 h-10 text-brand-accent mb-4" />
                <p className="font-bold text-slate-900 mb-2">Our UK Office</p>
                <p className="text-slate-600 text-sm">{COMPANY_DETAILS.address}</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-10">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-slate-600 mb-8">
                  Thank you for reaching out. A member of our team will get back to you within 24 business hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all bg-white">
                    <option>Managed IT Support</option>
                    <option>Cloud Migration</option>
                    <option>Cyber Security</option>
                    <option>IT Consultancy</option>
                    <option>Network Infrastructure</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all resize-none"></textarea>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" required className="mt-1 mr-3" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    I consent to Eleanor Live Well storing my data to contact me regarding my enquiry. I have read and agree to the <button type="button" className="text-brand-accent underline">Privacy Policy</button>.
                  </p>
                </div>
                <button type="submit" className="w-full btn-primary">
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
        <h1 className="text-4xl font-bold mb-12">{title}</h1>
        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
          {content}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'pricing': return <PricingPage />;
      case 'contact': return <ContactPage />;
      case 'terms': return (
        <LegalPage 
          title="Terms & Conditions" 
          content={
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p>These terms and conditions govern your use of the Eleanor Live Well website and the provision of our IT services. By accessing our website or engaging our services, you agree to these terms in full.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">2. Payment Terms</h2>
                <p>All prices quoted are in Great British Pounds (GBP) and are subject to VAT at the prevailing UK rate. Payment for managed services is due monthly in advance. Project-based work requires a 50% deposit before commencement.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
                <p>Unless otherwise stated, Eleanor Live Well owns the intellectual property rights for all material on this website and all custom code developed during the provision of services, until full payment has been received.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">4. Confidentiality</h2>
                <p>We acknowledge that in the course of providing IT services, we may have access to confidential information. We commit to maintaining strict confidentiality and will not disclose any sensitive data to third parties without prior written consent.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
                <p>To the maximum extent permitted by English law, Eleanor Live Well shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or website.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              </section>
            </div>
          } 
        />
      );
      case 'privacy': return (
        <LegalPage 
          title="Privacy Policy" 
          content={
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
                <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. This includes names, email addresses, and phone numbers.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">2. Processing Purposes</h2>
                <p>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. This includes providing services and marketing communications.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">3. Data Retention</h2>
                <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax or accounting requirements).</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">4. Your Rights (GDPR)</h2>
                <p>Under the UK GDPR, you have the right to access, rectify, or erase your personal data. You also have the right to object to processing and the right to data portability. To exercise these rights, please contact us at {COMPANY_DETAILS.email}.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
                <p>We use cookies and similar tracking technologies to access or store information. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">6. Security Measures</h2>
                <p>We have implemented appropriate technical and organisational security measures designed to protect the security of any personal information we process. However, please remember that no electronic transmission over the internet can be guaranteed 100% secure.</p>
              </section>
            </div>
          } 
        />
      );
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
