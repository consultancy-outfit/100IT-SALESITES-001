import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Shield, Lock, Cloud, Lightbulb, Database, CheckCircle2, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, NAV_ITEMS, SERVICES, PRICING_TIERS, TESTIMONIALS, CASE_STUDIES } from './constants';
import { Service, PricingTier, Testimonial, CaseStudy } from './types';

// --- Components ---

const IconMap: Record<string, any> = {
  ShieldCheck: Shield,
  Lock: Lock,
  Cloud: Cloud,
  Lightbulb: Lightbulb,
  Database: Database,
};

const Navbar = ({ activePage, setActivePage }: { activePage: string; setActivePage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="bg-indigo-600 p-2 rounded-lg mr-2">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              DCCST <span className="text-indigo-600">IT</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => setActivePage(item.path)}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  activePage === item.path ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setActivePage('contact')}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    setActivePage(item.path);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-md"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  setActivePage('contact');
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-indigo-600 text-white px-3 py-3 rounded-md text-base font-semibold text-center"
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

const Footer = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6 cursor-pointer" onClick={() => setActivePage('home')}>
              <div className="bg-indigo-600 p-2 rounded-lg mr-2">
                <Shield className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                DCCST <span className="text-indigo-400">IT</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering UK businesses with world-class IT infrastructure, cybersecurity, and managed support services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <button onClick={() => setActivePage(item.path)} className="hover:text-indigo-400 transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => setActivePage('terms')} className="hover:text-indigo-400 transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('privacy')} className="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button onClick={() => setActivePage('services')} className="hover:text-indigo-400 transition-colors">
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-indigo-400 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-indigo-400 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-indigo-400 shrink-0" />
                <span className="break-all">{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-500">
            <div>
              <p className="mb-2">Company Name: {COMPANY_DETAILS.name}</p>
              <p className="mb-2">Registered Office: {COMPANY_DETAILS.address}</p>
              <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
            </div>
            <div className="md:text-right">
              <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p className="mt-2">VAT Registered. All prices subject to VAT at the prevailing rate.</p>
            </div>
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
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                Leading UK IT Partners
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Reliable IT Solutions for <span className="text-indigo-600">British Businesses</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We provide managed IT support, cybersecurity, and cloud infrastructure designed to help your business thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => setActivePage('services')}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center"
                >
                  Explore Services <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActivePage('contact')}
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/it-office/800/600" 
                alt="IT Professionals" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">99.9% Uptime</p>
                    <p className="text-xs text-slate-500">Guaranteed SLA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose DCCST IT?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We combine technical excellence with a deep understanding of the UK business landscape.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Local Expertise', desc: 'UK-based support team available when you need us most.', icon: MapPin },
              { title: 'GDPR Compliant', desc: 'All our solutions are built with strict data protection at their core.', icon: Shield },
              { title: 'Cost Effective', desc: 'Transparent pricing in GBP with no hidden surprises.', icon: Database },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center"
              >
                <div className="inline-block p-4 bg-indigo-100 rounded-2xl text-indigo-600 mb-6">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Measurable Results</h2>
              <p className="text-slate-600">See how we've helped other UK businesses thrive.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-indigo-600 p-8 flex flex-col justify-center text-white">
                  <p className="text-indigo-200 text-xs font-bold uppercase mb-2">Result</p>
                  <p className="text-2xl font-bold mb-4">{study.result}</p>
                  <p className="text-indigo-200 text-xs font-bold uppercase mb-2">Savings</p>
                  <p className="text-2xl font-bold">{study.savings}</p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{study.title}</h3>
                  <p className="text-indigo-600 text-sm font-semibold mb-4">{study.client}</p>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                  <button className="text-indigo-600 font-bold text-sm flex items-center hover:underline">
                    Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">Trusted by British Business Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 relative">
                <div className="text-indigo-600 mb-6 flex justify-center">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                </div>
                <p className="text-slate-700 italic mb-8">"{t.content}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Ready to Modernise Your IT?</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Book a free consultation with our UK-based experts today and discover how we can help your business grow.
            </p>
            <button 
              onClick={() => setActivePage('contact')}
              className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored for the unique needs of UK businesses.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, i) => {
              const Icon = IconMap[service.icon] || Shield;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2">
                    <div className="inline-block p-4 bg-indigo-100 rounded-2xl text-indigo-600 mb-6">
                      <Icon size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                    
                    <div className="bg-slate-50 p-6 rounded-xl mb-8">
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Target Audience</p>
                      <p className="text-slate-600">{service.targetAudience}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4">Our Process</h4>
                        <ul className="space-y-3">
                          {service.process.map((step, idx) => (
                            <li key={idx} className="flex items-center text-slate-600 text-sm">
                              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center mr-3 shrink-0">{idx + 1}</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4">Key Benefits</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-slate-600 text-sm">
                              <CheckCircle2 className="text-green-500 w-5 h-5 mr-3 shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">Starting from</p>
                        <p className="text-3xl font-bold text-indigo-600">£{service.startingPrice}<span className="text-sm font-normal text-slate-400 ml-1">/month</span></p>
                      </div>
                      <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-all">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/800/600`} 
                      alt={service.title} 
                      className="rounded-2xl shadow-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-indigo-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DCCST IT</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            A dedicated team of technology experts committed to empowering UK businesses through innovation and reliable support.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between complex technology and practical business needs, Disabled Children Community Support Team (DCCST) IT has grown into a leading provider of managed IT services in the United Kingdom.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We believe that technology should be an enabler, not a barrier. Our journey began by supporting community-focused organisations, and we have since expanded our expertise to serve a wide range of SMEs across multiple sectors, always maintaining our core values of integrity, reliability, and excellence.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-10">
                <div>
                  <p className="text-4xl font-bold text-indigo-600 mb-2">10+</p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-indigo-600 mb-2">200+</p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Clients Supported</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/team-meeting/800/600" 
                alt="Our Team" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-slate-50 p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide innovative, secure, and scalable IT solutions that empower UK businesses to achieve their full potential, backed by exceptional local support.
              </p>
            </div>
            <div className="bg-indigo-50 p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted technology partner in the UK, recognised for our commitment to client success and our contribution to a secure digital economy.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-slate-600">The experts driving our vision forward.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
            {[
              { name: 'David Thompson', role: 'Chief Executive Officer', bio: 'Over 20 years of experience in UK IT infrastructure and strategic management.' },
              { name: 'Sarah Miller', role: 'Chief Technology Officer', bio: 'Expert in cybersecurity and cloud architecture with a passion for digital transformation.' },
              { name: 'Robert Wilson', role: 'Head of Support Services', bio: 'Dedicated to delivering world-class customer service and technical support.' },
            ].map((leader, i) => (
              <div key={i} className="text-center">
                <img 
                  src={`https://picsum.photos/seed/leader-${i}/400/400`} 
                  alt={leader.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <h4 className="font-bold text-slate-900 text-lg">{leader.name}</h4>
                <p className="text-indigo-600 text-sm font-semibold mb-4">{leader.role}</p>
                <p className="text-slate-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { title: 'Integrity', desc: 'Honest advice and transparent pricing, always.' },
              { title: 'Excellence', desc: 'Striving for the highest standards in every project.' },
              { title: 'Innovation', desc: 'Staying ahead of the curve with the latest technology.' },
              { title: 'Reliability', desc: 'Being there for our clients when it matters most.' },
            ].map((value, i) => (
              <div key={i} className="p-8 border border-slate-100 rounded-2xl text-center hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-sm text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">GDPR & Compliance</h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  As a UK-based company, we take data protection and GDPR compliance extremely seriously. We are fully committed to protecting the privacy and security of our clients' data and our own.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle2 className="text-indigo-400 mr-3" size={20} />
                    Data Protection Officer (DPO) appointed
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle2 className="text-indigo-400 mr-3" size={20} />
                    Regular security audits and risk assessments
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle2 className="text-indigo-400 mr-3" size={20} />
                    Staff trained in data handling and security
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-indigo-500/30 flex items-center justify-center relative">
                  <Shield className="text-indigo-400 w-20 h-20" />
                  <div className="absolute inset-0 border-4 border-indigo-500 rounded-full animate-ping opacity-20" />
                </div>
              </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16">
            Simple, predictable pricing plans designed to scale with your business. All prices are in GBP and subject to VAT.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, i) => (
              <div 
                key={i} 
                className={`relative p-8 rounded-3xl bg-white border ${tier.isPopular ? 'border-indigo-600 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm'} flex flex-col`}
              >
                {tier.isPopular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <p className="text-sm text-slate-500 mb-6">{tier.idealClient}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-extrabold text-slate-900">£{tier.price}</span>
                    <span className="text-slate-500 ml-1">/month</span>
                  </div>
                </div>
                <div className="mb-8 text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Support Level</p>
                  <p className="text-sm text-slate-700 font-semibold mb-6 flex items-center">
                    <Phone size={16} className="mr-2 text-indigo-600" /> {tier.supportLevel}
                  </p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">What's Included</p>
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <CheckCircle2 className="text-indigo-600 w-5 h-5 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                    Choose {tier.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-slate-600 mb-8">
              We understand that every business is unique. If our standard plans don't quite fit your requirements, we can create a bespoke package tailored specifically to your needs.
            </p>
            <button className="text-indigo-600 font-bold flex items-center mx-auto hover:underline">
              Contact our Sales Team <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h1>
              <p className="text-lg text-slate-600 mb-12">
                Have a question or ready to start your IT transformation? Our UK-based team is here to help.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Registered Office</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600 mr-4">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Business Hours</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">Company Details</h4>
                <p className="text-sm text-slate-600 mb-2">CRN: {COMPANY_DETAILS.crn}</p>
                <p className="text-sm text-slate-600">Registered in England and Wales.</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-600 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">Thank you for contacting us. A member of our team will be in touch shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Business Email</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Migration</option>
                      <option>Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"></textarea>
                  </div>
                  <div className="flex items-start">
                    <input type="checkbox" required className="mt-1 mr-3 h-4 w-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" />
                    <span className="text-xs text-slate-500">
                      I consent to DCCST IT processing my personal data in accordance with the Privacy Policy. We will only use your details to respond to your enquiry.
                    </span>
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="text-slate-400 w-12 h-12 mx-auto mb-4" />
            <p className="text-slate-500 font-bold">Interactive Map Placeholder</p>
            <p className="text-slate-400 text-sm">{COMPANY_DETAILS.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const TermsPage = () => {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>These terms and conditions govern your use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us"). By engaging our services, you agree to be bound by these terms.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
            <p>We provide IT services as described in our service level agreements (SLAs) or project proposals. We endeavour to provide all services with reasonable skill and care.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
            <p>All fees are quoted in Pounds Sterling (£) and are subject to VAT at the prevailing rate. Invoices are payable within 14 days of the invoice date unless otherwise agreed in writing. Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>All intellectual property rights in materials created by us during the provision of services shall remain our property unless otherwise agreed in writing. Clients are granted a non-exclusive license to use such materials for their internal business purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>Both parties agree to keep confidential all information obtained from the other party that is designated as confidential or which by its nature is clearly confidential.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client for the specific service giving rise to the claim in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>These terms and conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

const PrivacyPage = () => {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Data Collection</h2>
            <p>We collect personal data that you provide to us directly, such as your name, email address, and phone number when you contact us or use our services. We also collect technical data about your use of our website through cookies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Processing Purposes</h2>
            <p>We process your data to provide and improve our services, respond to enquiries, manage client accounts, and comply with legal obligations. We only process data where we have a lawful basis to do so under the UK GDPR.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Your Rights</h2>
            <p>Under the UK GDPR, you have the right to access, correct, or erase your personal data. You also have the right to object to or restrict processing, and the right to data portability. To exercise these rights, please contact us at {COMPANY_DETAILS.email}.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Security Measures</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction. This includes encryption, access controls, and regular security assessments.</p>
          </section>
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

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
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
            {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
            {activePage === 'services' && <ServicesPage />}
            {activePage === 'about' && <AboutPage />}
            {activePage === 'pricing' && <PricingPage />}
            {activePage === 'contact' && <ContactPage />}
            {activePage === 'terms' && <TermsPage />}
            {activePage === 'privacy' && <PrivacyPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
