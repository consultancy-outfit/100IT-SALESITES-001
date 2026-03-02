import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Check,
  ExternalLink,
  Linkedin,
  Twitter,
  Users,
  Target,
  Award,
  CheckCircle2
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { COMPANY_DETAILS, SERVICES, PRICING_PLANS, TESTIMONIALS, CASE_STUDIES } from './constants';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setActivePage('home')}
          >
            <span className="text-2xl font-bold tracking-tighter text-zinc-900">
              THURROCK<span className="text-emerald-600">ESSEX</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-emerald-600",
                  activePage === item.id ? "text-emerald-600" : "text-zinc-600"
                )}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setActivePage('contact')}
              className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-900">
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
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "block w-full text-left px-3 py-4 text-base font-medium rounded-md",
                    activePage === item.id ? "bg-emerald-50 text-emerald-600" : "text-zinc-600 hover:bg-zinc-50"
                  )}
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

const Footer = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold tracking-tighter text-white mb-6">
              THURROCK<span className="text-emerald-500">ESSEX</span>
            </div>
            <p className="max-w-md mb-8 text-zinc-500 leading-relaxed">
              Empowering British businesses through innovative IT solutions, robust cybersecurity, and expert managed services. Your local partner for digital excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setActivePage('home')} className="hover:text-emerald-500 transition-colors">Home</button></li>
              <li><button onClick={() => setActivePage('services')} className="hover:text-emerald-500 transition-colors">Services</button></li>
              <li><button onClick={() => setActivePage('about')} className="hover:text-emerald-500 transition-colors">About Us</button></li>
              <li><button onClick={() => setActivePage('pricing')} className="hover:text-emerald-500 transition-colors">Pricing</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-emerald-500 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setActivePage('terms')} className="hover:text-emerald-500 transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => setActivePage('privacy')} className="hover:text-emerald-500 transition-colors">Privacy Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-2">
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company Details</h5>
            <p className="text-sm"><span className="text-zinc-500">Company Name:</span> {COMPANY_DETAILS.name}</p>
            <p className="text-sm"><span className="text-zinc-500">Registered Office:</span> {COMPANY_DETAILS.address}</p>
            <p className="text-sm"><span className="text-zinc-500">Registration Number (CRN):</span> {COMPANY_DETAILS.crn}</p>
            <p className="text-sm"><span className="text-zinc-500">Phone:</span> {COMPANY_DETAILS.phone}</p>
            <p className="text-sm"><span className="text-zinc-500">Email:</span> {COMPANY_DETAILS.email}</p>
          </div>
          <div className="lg:text-right flex flex-col justify-end h-full">
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Thurrock Essex. All rights reserved. 
              <br className="hidden md:block" />
              Registered in England and Wales.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-6">
                <ShieldCheck size={14} className="mr-2" /> Trusted UK IT Partner
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Modern IT Solutions for <span className="text-emerald-600">British Business</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                From managed support to advanced cybersecurity, we provide the technical foundation your business needs to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setActivePage('services')}
                  className="bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-all flex items-center justify-center group"
                >
                  Explore Services <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setActivePage('contact')}
                  className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Benefits */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-emerald-600">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Rapid Response</h3>
              <p className="text-zinc-600">Average response time of under 15 minutes for critical issues. We keep your business moving.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-emerald-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">GDPR Compliant</h3>
              <p className="text-zinc-600">Full compliance with UK data protection laws, ensuring your client data is always secure.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-emerald-600">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Local Expertise</h3>
              <p className="text-zinc-600">Based in the UK, we understand the local market and regulatory landscape perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Proven Results</h2>
            <p className="text-zinc-600 max-w-2xl">We don't just provide services; we deliver measurable business outcomes for our clients across the UK.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="group p-8 bg-white border border-zinc-200 rounded-3xl hover:border-emerald-500 transition-all shadow-sm">
                <div className="text-emerald-600 font-bold text-2xl mb-2">{study.result}</div>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{study.title}</h4>
                <p className="text-zinc-600 mb-6">{study.description}</p>
                <div className="flex items-center text-sm font-semibold text-zinc-900 group-hover:text-emerald-600 transition-colors">
                  Read Case Study <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-zinc-400">Trusted by businesses across London and the South East.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-8 bg-zinc-800/50 rounded-3xl border border-zinc-800">
                <p className="text-lg italic text-zinc-300 mb-8">"{t.content}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-emerald-500">{t.role}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to secure your digital future?</h2>
              <p className="text-emerald-50 text-xl mb-10 max-w-2xl mx-auto">
                Join hundreds of UK businesses that trust Thurrock Essex for their IT needs. Let's build something great together.
              </p>
              <button 
                onClick={() => setActivePage('contact')}
                className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-900/20"
              >
                Get a Free IT Audit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-zinc-900 mb-6">Our Services</h1>
          <p className="text-xl text-zinc-600">Comprehensive IT solutions designed to solve complex business challenges. We combine technical excellence with strategic thinking.</p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={cn(
              "flex flex-col lg:flex-row gap-16 items-center",
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            )}>
              <div className="flex-1 w-full">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                  <service.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-4">{service.title}</h2>
                <p className="text-lg text-zinc-600 mb-8">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-3 flex items-center">
                      <Target size={18} className="mr-2 text-emerald-600" /> Target Audience
                    </h4>
                    <p className="text-zinc-600 text-sm">{service.targetAudience}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-3 flex items-center">
                      <Award size={18} className="mr-2 text-emerald-600" /> Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="text-zinc-600 text-sm flex items-center">
                          <Check size={14} className="mr-2 text-emerald-500" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <h4 className="font-bold text-zinc-900 mb-4">Our Process</h4>
                  <div className="flex flex-wrap gap-3">
                    {service.process.map((step, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-medium text-zinc-600">
                        {i + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <span className="text-zinc-500 text-sm">Starting from</span>
                    <div className="text-2xl font-bold text-zinc-900">{service.startingPrice} <span className="text-sm font-normal text-zinc-500">/ month</span></div>
                  </div>
                  <button className="bg-zinc-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-zinc-800 transition-all">
                    Enquire Now
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full aspect-video bg-zinc-100 rounded-[2rem] overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/${service.id}/800/600`} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
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
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-zinc-900 mb-6">About Thurrock Essex</h1>
          <p className="text-xl text-zinc-600">We are a team of dedicated IT professionals based in the UK, committed to helping businesses navigate the complexities of modern technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h2>
              <p className="text-zinc-600 leading-relaxed">To provide world-class IT infrastructure and support that empowers British businesses to grow securely and efficiently.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Vision</h2>
              <p className="text-zinc-600 leading-relaxed">To be the most trusted IT partner in the South East, known for our technical excellence, rapid response, and unwavering integrity.</p>
            </div>
          </div>
          <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Our Core Values</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-4 shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Integrity First</h4>
                  <p className="text-sm text-zinc-600">We provide honest advice, even if it means recommending a less expensive solution.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-4 shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Technical Excellence</h4>
                  <p className="text-sm text-zinc-600">Our engineers are continuously trained on the latest technologies and security standards.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-4 shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Client-Centric</h4>
                  <p className="text-sm text-zinc-600">Your business goals drive our technical recommendations, not the other way around.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* GDPR Section */}
        <div className="bg-zinc-900 text-white p-12 lg:p-20 rounded-[3rem] mb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
              <ShieldCheck size={14} className="mr-2" /> Data Protection
            </div>
            <h2 className="text-3xl font-bold mb-6">Commitment to GDPR Compliance</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              In an era of increasing data breaches, we take our responsibility as a data processor seriously. Thurrock Essex is fully committed to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center text-zinc-300"><Check size={16} className="mr-2 text-emerald-500" /> Regular Security Audits</li>
              <li className="flex items-center text-zinc-300"><Check size={16} className="mr-2 text-emerald-500" /> Encrypted Data Storage</li>
              <li className="flex items-center text-zinc-300"><Check size={16} className="mr-2 text-emerald-500" /> Staff GDPR Training</li>
              <li className="flex items-center text-zinc-300"><Check size={16} className="mr-2 text-emerald-500" /> Data Processing Agreements</li>
            </ul>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'James Wilson', role: 'Technical Director', bio: '20+ years in enterprise infrastructure and cloud strategy.' },
              { name: 'Emma Radcliffe', role: 'Head of Operations', bio: 'Expert in service delivery and client relationship management.' },
              { name: 'Robert Chen', role: 'Lead Security Architect', bio: 'Certified ethical hacker and GDPR compliance specialist.' }
            ].map((person, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 bg-zinc-100 rounded-full mx-auto mb-6 overflow-hidden">
                  <img src={`https://picsum.photos/seed/person${idx}/200/200`} alt={person.name} referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900">{person.name}</h4>
                <p className="text-emerald-600 font-medium mb-4">{person.role}</p>
                <p className="text-zinc-600 text-sm">{person.bio}</p>
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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-zinc-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-zinc-600">No hidden fees. No complex contracts. Just reliable IT support tailored to your business size.</p>
          <p className="mt-4 text-sm text-zinc-500 italic">* All prices are subject to VAT at the prevailing rate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <div key={idx} className={cn(
              "relative p-8 rounded-[2.5rem] border transition-all",
              plan.isPopular 
                ? "bg-zinc-900 text-white border-zinc-800 shadow-2xl scale-105 z-10" 
                : "bg-white text-zinc-900 border-zinc-200 hover:border-emerald-500"
            )}>
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={cn("text-sm", plan.isPopular ? "text-zinc-400" : "text-zinc-500")}>/ month</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className={cn("text-xs font-bold uppercase tracking-wider mb-4", plan.isPopular ? "text-emerald-400" : "text-emerald-600")}>
                  What's Included
                </div>
                <ul className="space-y-4">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check size={16} className="mr-3 text-emerald-500 shrink-0" />
                      <span className={plan.isPopular ? "text-zinc-300" : "text-zinc-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cn("pt-8 border-t mb-8", plan.isPopular ? "border-zinc-800" : "border-zinc-100")}>
                <div className="mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-60">Support Level</div>
                  <div className="text-sm font-medium">{plan.supportLevel}</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-60">Ideal For</div>
                  <div className="text-sm font-medium">{plan.idealFor}</div>
                </div>
              </div>

              <button className={cn(
                "w-full py-4 rounded-full font-bold transition-all",
                plan.isPopular 
                  ? "bg-emerald-500 text-white hover:bg-emerald-400" 
                  : "bg-zinc-900 text-white hover:bg-zinc-800"
              )}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-zinc-50 rounded-[3rem] border border-zinc-100 text-center">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">Need a custom solution?</h3>
          <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">For larger enterprises or specific project-based requirements, we offer bespoke pricing models. Contact our team for a detailed proposal.</p>
          <button className="text-emerald-600 font-bold flex items-center mx-auto hover:gap-2 transition-all">
            Talk to an Expert <ArrowRight size={18} className="ml-2" />
          </button>
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
            <h1 className="text-5xl font-bold text-zinc-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-zinc-600 mb-12">Have a question or ready to start your IT transformation? We're here to help.</p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mr-6 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Email Us</h4>
                  <p className="text-zinc-600">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mr-6 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Call Us</h4>
                  <p className="text-zinc-600">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mr-6 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Visit Us</h4>
                  <p className="text-zinc-600">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mr-6 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Business Hours</h4>
                  <p className="text-zinc-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 aspect-video bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm font-medium">
                Map Placeholder (UK Service Area)
              </div>
              <img 
                src="https://picsum.photos/seed/map/800/450?grayscale" 
                alt="Map" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[3rem] border border-zinc-200 shadow-xl shadow-zinc-200/50">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Message Sent!</h3>
                <p className="text-zinc-600">Thank you for reaching out. One of our IT specialists will contact you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-emerald-600 font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-900">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-900">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" placeholder="john@company.co.uk" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-900">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" placeholder="Your Business Ltd" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-900">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-white">
                    <option>Managed IT Support</option>
                    <option>Cloud Solutions</option>
                    <option>Cybersecurity</option>
                    <option>Network Infrastructure</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-900">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500" />
                  <label className="text-xs text-zinc-500 leading-relaxed">
                    I consent to Thurrock Essex processing my data in accordance with their Privacy Policy. I understand I can withdraw my consent at any time.
                  </label>
                </div>
                <button type="submit" className="w-full bg-zinc-900 text-white py-4 rounded-full font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10">
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
        <h1 className="text-4xl font-bold text-zinc-900 mb-12">{title}</h1>
        <div className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-li:text-zinc-600">
          {content}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} />;
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
                <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
                <p>These Terms and Conditions govern your use of the services provided by {COMPANY_DETAILS.name} ("the Company"). By engaging our services, you agree to be bound by these terms.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">2. Services</h2>
                <p>The Company provides IT consultancy, managed support, cloud solutions, and cybersecurity services as detailed in specific Service Level Agreements (SLAs) or project proposals.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">3. Payment Terms</h2>
                <p>All fees are quoted in Pounds Sterling (£) and are subject to VAT at the prevailing UK rate. Monthly support fees are payable in advance via Direct Debit or bank transfer. Project-based work requires a 50% deposit unless otherwise agreed.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">4. Intellectual Property</h2>
                <p>Unless otherwise agreed in writing, all intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company until full payment is received.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">5. Confidentiality</h2>
                <p>Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as such.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">6. Limitation of Liability</h2>
                <p>The Company's total liability for any claim arising out of or in connection with these terms shall be limited to the total fees paid by the Client in the 12 months preceding the claim.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">7. Governing Law</h2>
                <p>These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              </section>
              <div className="pt-8 border-t border-zinc-100 text-sm text-zinc-400">
                Last updated: {new Date().toLocaleDateString('en-GB')}
              </div>
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
                <h2 className="text-xl font-bold mb-4">1. Data Collection</h2>
                <p>We collect personal data such as names, email addresses, and phone numbers when you contact us or use our services. We also collect technical data through cookies to improve our website experience.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">2. Purpose of Processing</h2>
                <p>We process your data to provide IT services, manage your account, respond to enquiries, and comply with legal obligations under the UK GDPR.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">3. Data Retention</h2>
                <p>We retain your personal data only for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">4. Your Rights</h2>
                <p>Under the UK GDPR, you have the right to access, correct, or erase your personal data. You also have the right to object to or restrict certain processing activities.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">5. Cookies</h2>
                <p>Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">6. Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold mb-4">7. Contact</h2>
                <p>For any privacy-related enquiries, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.</p>
              </section>
              <div className="pt-8 border-t border-zinc-100 text-sm text-zinc-400">
                Last updated: {new Date().toLocaleDateString('en-GB')}
              </div>
            </div>
          } 
        />
      );
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
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
