import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Shield, Lock, Cloud, BarChart, RefreshCw, 
  CheckCircle, ArrowRight, Mail, Phone, MapPin, Clock,
  ChevronRight, Facebook, Twitter, Linkedin, ExternalLink
} from 'lucide-react';
import { COMPANY, NAV_ITEMS, SERVICES, PRICING, TESTIMONIALS, CASE_STUDIES } from './constants';
import { Service, PricingPlan } from './types';

// --- Components ---

const IconMap: Record<string, any> = {
  Shield, Lock, Cloud, BarChart, RefreshCw
};

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (id: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setActivePage('home')}
        >
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            SC
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">St Crispin Village</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${activePage === item.id ? 'text-brand-accent' : 'text-slate-600'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setActivePage('contact')}
            className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-medium ${activePage === item.id ? 'text-brand-accent' : 'text-slate-600'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                setActivePage('contact');
                setIsOpen(false);
              }}
              className="bg-brand-primary text-white p-4 rounded-xl text-center font-semibold"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (id: string) => void }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 text-white mb-6">
            <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center font-bold text-slate-950">SC</div>
            <span className="font-bold text-lg">St Crispin Village</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Providing enterprise-grade IT solutions to British businesses since 2015. Credible, professional, and reliable.
          </p>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            {NAV_ITEMS.map(item => (
              <li key={item.id}>
                <button onClick={() => setActivePage(item.id)} className="hover:text-white transition-colors">{item.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setActivePage('terms')} className="hover:text-white transition-colors">Terms & Conditions</button></li>
            <li><button onClick={() => setActivePage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
            <li><button className="hover:text-white transition-colors">Cookie Policy</button></li>
            <li><button className="hover:text-white transition-colors">GDPR Compliance</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company Details</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="w-4 h-4 shrink-0" /> {COMPANY.address}</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 shrink-0" /> {COMPANY.phone}</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 shrink-0" /> {COMPANY.email}</li>
            <li className="pt-2 text-xs opacity-60">CRN: {COMPANY.crn}</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 text-center text-xs">
        <p>© {new Date().getFullYear()} {COMPANY.name} IT Services. All rights reserved. Registered in England & Wales.</p>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = ({ setActivePage }: { setActivePage: (id: string) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 section-padding">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6">
              <Shield className="w-3 h-3" /> UK Managed IT Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-950 leading-[1.1] mb-6">
              Empowering British Business Through <span className="text-brand-accent">Smart IT</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              We provide proactive, secure, and scalable IT infrastructure tailored for the UK market. From cybersecurity to cloud migration, we're your local technology partner.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setActivePage('services')}
                className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setActivePage('contact')}
                className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
              >
                Book a Free Audit
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Modern UK Office" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 glass p-6 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Uptime Guarantee</p>
                  <p className="text-xl font-bold">99.9%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose St Crispin Village?</h2>
            <p className="text-slate-600">We combine technical excellence with a deep understanding of the UK business landscape.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Local UK Support", desc: "Our helpdesk is based in the UK, ensuring no language barriers and GMT-aligned support.", icon: <MapPin className="text-brand-accent" /> },
              { title: "GDPR Compliant", desc: "We ensure your data handling meets the strictest UK GDPR and DPA 2018 standards.", icon: <Shield className="text-brand-accent" /> },
              { title: "Cost Efficiency", desc: "Predictable monthly billing in GBP with no hidden international transaction fees.", icon: <BarChart className="text-brand-accent" /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-brand-accent/20 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Results</h2>
              <p className="text-slate-400">Real-world impact for British organisations across multiple sectors.</p>
            </div>
            <button 
              onClick={() => setActivePage('services')}
              className="text-brand-accent font-bold flex items-center gap-2 hover:underline"
            >
              View All Services <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                <div className="text-brand-accent font-mono text-sm mb-2 uppercase tracking-widest">{study.client}</div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-slate-400 mb-6">{study.description}</p>
                <div className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg font-bold">
                  {study.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 italic text-slate-600 relative">
                <span className="text-6xl text-slate-100 absolute top-4 left-4 font-serif">"</span>
                <p className="relative z-10 mb-6">{t.content}</p>
                <div className="flex items-center gap-4 not-italic">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-brand-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Secure Your IT Future?</h2>
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto relative z-10">
              Join hundreds of UK businesses that trust St Crispin Village for their technology needs. Let's build something resilient together.
            </p>
            <button 
              onClick={() => setActivePage('contact')}
              className="bg-brand-accent text-slate-950 px-10 py-4 rounded-xl font-bold hover:bg-sky-400 transition-all relative z-10"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Core IT Services</h1>
          <p className="text-xl text-slate-600">Specialised technology solutions designed for the unique challenges of the UK business environment.</p>
        </div>

        <div className="space-y-20">
          {SERVICES.map((service, i) => {
            const Icon = IconMap[service.icon] || Shield;
            return (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-brand-accent/10 text-brand-accent rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3">Ideal For</h4>
                    <p className="text-slate-700">{service.target}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-emerald-500" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3">Our Process</h4>
                      <ul className="space-y-2">
                        {service.process.map((p, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold">{idx + 1}</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Starting From</p>
                      <p className="text-2xl font-bold text-brand-primary">{service.startingPrice}</p>
                    </div>
                    <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all">
                      Enquire Now
                    </button>
                  </div>
                </div>
                <div className={`rounded-3xl overflow-hidden shadow-2xl ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                   <img 
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1551434678-e076c223a692' : i === 1 ? '1550751827-4bd374c3f58b' : i === 2 ? '1451187580459-43490279c0fa' : '1519389950473-47ba0277781c'}?auto=format&fit=crop&w=800&q=80`}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                   />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold mb-6">Our Story & Mission</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Founded in Northamptonshire, St Crispin Village was born from a simple observation: British SMEs were underserved by large, impersonal IT firms. We set out to build a consultancy that combines enterprise-grade technology with the personal touch of a local partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-slate-600 mb-8">
              To provide resilient, secure, and forward-thinking IT infrastructure that allows UK businesses to focus on growth without technical friction.
            </p>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-slate-600">
              To become the most trusted IT partner for SMEs across the UK, recognised for our integrity, technical prowess, and commitment to client success.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-8">Core Values</h2>
            <div className="space-y-6">
              {[
                { title: "Integrity", desc: "We provide honest advice, even if it means a smaller project for us." },
                { title: "Excellence", desc: "We don't settle for 'good enough'. Our standards are enterprise-level." },
                { title: "Local Focus", desc: "We understand the UK market, regulations, and business culture." },
                { title: "Security First", desc: "Security isn't an add-on; it's baked into every solution we build." }
              ].map((v, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-white shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">{v.title}</h4>
                    <p className="text-sm text-slate-600">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Robert St Crispin", role: "Founder & CEO", bio: "20+ years in enterprise IT infrastructure." },
              { name: "Eleanor Vance", role: "CTO", bio: "Cybersecurity expert and former government consultant." },
              { name: "David Miller", role: "Head of Support", bio: "Passionate about delivering world-class client experiences." }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1507003211169-0a1dd7228f2d' : i === 1 ? '1494790108377-be9c29b29330' : '1500648767791-00dcc994a43e'}?auto=format&fit=crop&w=300&q=80`} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-brand-accent font-medium text-sm mb-2">{member.role}</p>
                <p className="text-slate-500 text-sm max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2">GDPR & Data Protection Commitment</h3>
            <p className="text-emerald-800/80 text-sm leading-relaxed">
              We take data protection seriously. As a UK-based company, we are fully registered with the Information Commissioner's Office (ICO) and ensure all our services and internal processes are strictly GDPR compliant. Your data never leaves the UK/EEA without explicit consent and robust protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600">No hidden fees. No complex contracts. Just reliable IT support billed in GBP.</p>
          <p className="mt-4 text-sm font-medium text-slate-400 italic">* All prices exclude VAT at the prevailing rate.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PRICING.map((plan, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-3xl p-8 shadow-sm border ${plan.popular ? 'border-brand-accent ring-4 ring-brand-accent/5 scale-105 z-10' : 'border-slate-200'} flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full self-start mb-6">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6">{plan.idealFor}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-400 font-medium"> / month</span>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="pb-4 border-b border-slate-50">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2">Support Level</p>
                  <p className="text-sm font-medium flex items-center gap-2"><Clock className="w-4 h-4 text-brand-accent" /> {plan.support}</p>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-brand-accent text-white hover:bg-sky-600' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-10 rounded-3xl border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-slate-600 mb-6">
              For larger enterprises or specific project-based work, we offer bespoke pricing tailored to your exact requirements.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-brand-accent" /> Multi-site infrastructure</li>
              <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-brand-accent" /> Dedicated on-site engineers</li>
              <li className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-brand-accent" /> Global cloud architecture</li>
            </ul>
            <button className="text-brand-accent font-bold flex items-center gap-2 hover:underline">
              Speak to our consultants <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h4 className="font-bold mb-4">Frequently Asked Questions</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold mb-1">Is there a minimum contract term?</p>
                <p className="text-xs text-slate-500">Our standard managed services have a 12-month initial term, followed by a 30-day rolling notice.</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1">Do you charge for onboarding?</p>
                <p className="text-xs text-slate-500">We typically waive onboarding fees for 24-month contracts. Otherwise, a one-off setup fee applies.</p>
              </div>
            </div>
          </div>
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
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600 mb-12">
              Have a question or ready to start? Our UK-based team is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Registered Office</h4>
                  <p className="text-slate-600 text-sm">{COMPANY.address}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone Number</h4>
                  <p className="text-slate-600 text-sm">{COMPANY.phone}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Address</h4>
                  <p className="text-slate-600 text-sm">{COMPANY.email}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p className="text-slate-600 text-sm">{COMPANY.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold mb-4">Location</h4>
              <div className="w-full h-48 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">
                <p className="text-sm font-medium">Interactive Map Placeholder</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                <p className="text-slate-600">Thank you for reaching out. A member of our team will contact you within 24 business hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-accent font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="john@company.co.uk" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="Acme Ltd" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Service of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity</option>
                    <option>Cloud Migration</option>
                    <option>IT Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    I consent to St Crispin Village processing my personal data in accordance with their Privacy Policy to respond to this enquiry.
                  </p>
                </div>
                <button type="submit" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
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
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">{title}</h1>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
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
          title="Terms and Conditions" 
          content={
            <>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h3>
                <p>These terms and conditions govern your use of the St Crispin Village website and our IT services. By accessing this website or engaging our services, you accept these terms in full.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Company Details</h3>
                <p>St Crispin Village is a trading name of St Crispin Village IT Services. Registered in England & Wales. CRN: {COMPANY.crn}. Registered Office: {COMPANY.address}.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Payment Terms</h3>
                <p>All fees are quoted in Pounds Sterling (GBP) and are subject to VAT at the prevailing UK rate. Managed service invoices are issued monthly in advance and are payable within 14 days of the invoice date.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Intellectual Property</h3>
                <p>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. All these intellectual property rights are reserved.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Confidentiality</h3>
                <p>Both parties agree to maintain the confidentiality of any proprietary information shared during the course of business engagement. This obligation survives the termination of any service agreement.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h3>
                <p>To the extent permitted by English law, St Crispin Village shall not be liable for any indirect, special, or consequential loss or damage arising under these terms and conditions or in connection with our services.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">7. Governing Law</h3>
                <p>These terms and conditions will be governed by and construed in accordance with the laws of England and Wales, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              </section>
            </>
          } 
        />
      );
      case 'privacy': return (
        <LegalPage 
          title="Privacy Policy" 
          content={
            <>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Data Collection</h3>
                <p>We collect personal data that you provide to us, including name, email address, phone number, and company details, primarily through our contact forms and service engagement process.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Processing Purposes</h3>
                <p>We process your data to provide IT support services, manage your account, respond to enquiries, and comply with legal obligations. We only process data where we have a lawful basis to do so under UK GDPR.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Data Retention</h3>
                <p>We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Subject Rights</h3>
                <p>Under UK GDPR, you have rights including the right to access, correct, or erase your personal data. You also have the right to object to or restrict certain processing. To exercise these rights, please contact us at {COMPANY.email}.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Cookies</h3>
                <p>Our website uses cookies to enhance user experience and analyse traffic. You can manage your cookie preferences through your browser settings.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Security Measures</h3>
                <p>We implement robust technical and organisational security measures to protect your data from unauthorised access, loss, or disclosure. This includes encryption, access controls, and regular security audits.</p>
              </section>
            </>
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
