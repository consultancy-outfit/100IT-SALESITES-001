/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Cloud, 
  Cpu, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  Server,
  Lock,
  Users,
  BarChart3,
  Zap,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type Page = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'terms' | 'privacy';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { name: string, id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About Us', id: 'about' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setCurrentPage('home')}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">St Helens IT</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                currentPage === link.id ? 'text-indigo-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="btn-primary py-2 px-5 text-sm"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-medium ${
                  currentPage === link.id ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                setCurrentPage('contact');
                setIsOpen(false);
              }}
              className="btn-primary justify-center"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl text-white">St Helens IT</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Providing enterprise-grade IT solutions for UK businesses. We focus on security, scalability, and seamless digital transformation.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-500 transition-colors cursor-pointer">
              <Globe size={16} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
            <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Services</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
            <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors">Terms & Conditions</button></li>
            <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company Details</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Users size={16} className="mt-1 text-indigo-400" />
              <span>Company Name: St Helens Supported Living</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-indigo-400" />
              <span>Registered Office: Not Available</span>
            </li>
            <li className="flex items-start gap-3">
              <BarChart3 size={16} className="mt-1 text-indigo-400" />
              <span>CRN: Not Available</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-1 text-indigo-400" />
              <span>Phone: Not Available</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-1 text-indigo-400" />
              <span>Email: Not Available</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} St Helens Supported Living. All rights reserved. Registered in England & Wales.</p>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="pt-20"
  >
    {/* Hero Section */}
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            UK's Leading IT Partner
          </span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
            Empowering British Business Through <span className="text-indigo-600">Smart IT</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            From managed cloud services to robust cybersecurity, we provide the technical foundation your business needs to thrive in the digital age.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setCurrentPage('services')} className="btn-primary">
              Explore Our Services <ArrowRight size={18} />
            </button>
            <button onClick={() => setCurrentPage('contact')} className="btn-secondary">
              Book a Consultation
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-indigo-600/5 border border-indigo-100 flex items-center justify-center p-12">
            <div className="grid grid-cols-2 gap-6 w-full">
              {[Shield, Cloud, Server, Lock].map((Icon, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <Icon className="text-indigo-600 w-10 h-10 mb-4" />
                  <span className="text-sm font-bold text-slate-800">
                    {['Security', 'Cloud', 'Infrastructure', 'Compliance'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>

    {/* Key Benefits */}
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose St Helens IT?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We combine local British expertise with global technology standards to deliver unmatched service.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: '24/7 UK Support', desc: 'Our dedicated team is always available to handle your technical issues, day or night.', icon: Clock },
            { title: 'GDPR Compliant', desc: 'We ensure all your data handling meets strict UK and EU regulatory requirements.', icon: Shield },
            { title: 'Scalable Solutions', desc: 'IT that grows with you. From startups to enterprises, we have the right fit.', icon: Zap },
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <item.icon className="text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Industries We Serve in the UK</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Every sector has unique challenges. We provide tailored IT strategies for diverse British industries, ensuring efficiency and competitive advantage.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Financial Services', 'Healthcare & NHS', 'Legal & Professional', 'Manufacturing', 'Retail & E-commerce', 'Education'].map((industry, i) => (
              <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                <CheckCircle2 className="text-indigo-600 w-5 h-5" />
                {industry}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Case Study: Legal Firm Transformation</h3>
            <p className="opacity-90 mb-6 italic">"St Helens IT overhauled our legacy systems, moving us to a secure cloud environment."</p>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold">£45,000</p>
                <p className="text-xs uppercase tracking-widest opacity-70">Annual Savings</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-3xl font-bold">99.9%</p>
                <p className="text-xs uppercase tracking-widest opacity-70">Uptime Achieved</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Trusted by British Business Leaders</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'James Montgomery', role: 'CEO, London Logistics', text: 'St Helens IT has been instrumental in our digital expansion. Their proactive approach to security is world-class.' },
            { name: 'Sarah Jenkins', role: 'Director, Manchester Health', text: 'The transition to managed services was seamless. We finally have an IT partner that understands our specific compliance needs.' },
            { name: 'Robert Thorne', role: 'CTO, Birmingham Tech', text: 'Exceptional support and technical expertise. They feel like an extension of our own team rather than a vendor.' },
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Zap key={i} size={16} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-slate-700 mb-6 italic">"{t.text}"</p>
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
    <section className="section-padding bg-indigo-600 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-display font-bold mb-6">Ready to Modernise Your IT?</h2>
        <p className="text-xl opacity-90 mb-10">Join hundreds of UK businesses that trust St Helens IT for their digital infrastructure.</p>
        <button onClick={() => setCurrentPage('contact')} className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
          Contact Us Today <ArrowRight size={20} />
        </button>
      </div>
    </section>
  </motion.div>
);

const ServicesPage = () => {
  const services = [
    {
      title: 'Managed IT Support',
      icon: Users,
      desc: 'Comprehensive day-to-day management of your IT environment, ensuring everything runs smoothly.',
      audience: 'SMEs and growing businesses without in-house IT.',
      process: ['Audit', 'Onboarding', '24/7 Monitoring', 'Monthly Review'],
      benefits: ['Reduced Downtime', 'Predictable Costs', 'Expert Advice'],
      price: 'From £499 / month'
    },
    {
      title: 'Cybersecurity Solutions',
      icon: Shield,
      desc: 'Advanced threat detection, firewall management, and employee security training.',
      audience: 'Businesses handling sensitive client data or regulated sectors.',
      process: ['Vulnerability Assessment', 'Implementation', 'Continuous Monitoring'],
      benefits: ['Data Protection', 'Regulatory Compliance', 'Peace of Mind'],
      price: 'From £750 / month'
    },
    {
      title: 'Cloud Infrastructure',
      icon: Cloud,
      desc: 'Migration, management, and optimization of Azure, AWS, or Private Cloud environments.',
      audience: 'Companies looking to modernize legacy hardware and enable remote work.',
      process: ['Strategy', 'Migration', 'Optimization', 'Support'],
      benefits: ['Scalability', 'Remote Access', 'Cost Efficiency'],
      price: 'From £1,200 / project'
    },
    {
      title: 'Network Management',
      icon: Server,
      desc: 'Design and maintenance of high-speed, secure business networks and Wi-Fi solutions.',
      audience: 'Office-based businesses requiring high-performance connectivity.',
      process: ['Site Survey', 'Design', 'Installation', 'Maintenance'],
      benefits: ['High Performance', 'Secure Connectivity', 'Reliability'],
      price: 'From £300 / month'
    },
    {
      title: 'Disaster Recovery',
      icon: Lock,
      desc: 'Automated backups and rapid recovery plans to protect your business from data loss.',
      audience: 'All businesses where data continuity is critical.',
      process: ['Risk Analysis', 'Backup Setup', 'Testing', 'Recovery Support'],
      benefits: ['Business Continuity', 'Zero Data Loss', 'Fast Recovery'],
      price: 'From £250 / month'
    },
    {
      title: 'IT Consultancy',
      icon: BarChart3,
      desc: 'Strategic guidance on technology adoption, digital transformation, and budgeting.',
      audience: 'Leadership teams planning significant growth or digital shifts.',
      process: ['Discovery', 'Strategy Design', 'Roadmap', 'Execution Support'],
      benefits: ['Strategic Alignment', 'ROI Optimization', 'Future-Proofing'],
      price: 'From £150 / hour'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tailored technology solutions designed to solve real-world business challenges in the UK.
          </p>
        </div>

        <div className="grid gap-12">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden grid lg:grid-cols-3">
              <div className="p-10 bg-slate-50 border-r border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
                  <s.icon className="text-white w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{s.desc}</p>
                <div className="pt-6 border-t border-slate-200">
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Starting Price</p>
                  <p className="text-2xl font-bold text-slate-900">{s.price}</p>
                </div>
              </div>
              
              <div className="p-10 lg:col-span-2 grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Users size={18} className="text-indigo-600" /> Target Audience
                  </h3>
                  <p className="text-slate-600 text-sm mb-8">{s.audience}</p>
                  
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Zap size={18} className="text-indigo-600" /> Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {s.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <Check size={16} className="text-emerald-500" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-indigo-600" /> Our Process
                  </h3>
                  <div className="space-y-6 relative before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
                    {s.process.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4 relative">
                        <div className="w-[19px] h-[19px] rounded-full bg-white border-2 border-indigo-600 z-10" />
                        <p className="text-sm font-medium text-slate-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AboutPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="pt-32 pb-20 px-6"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">Our Story</h1>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Founded in the heart of the North West, St Helens IT (operating under St Helens Supported Living) began with a simple mission: to provide enterprise-level IT support to businesses that were being underserved by traditional providers.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Over the years, we have grown into a nationwide partner, known for our technical precision and deeply personal approach to client relationships. We don't just fix computers; we build the digital foundations for British success.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-indigo-600 font-bold text-3xl mb-1">15+</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Years Experience</p>
            </div>
            <div>
              <h4 className="text-indigo-600 font-bold text-3xl mb-1">250+</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Clients Nationwide</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team working" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
            <p className="text-sm font-medium text-slate-600 italic">"Our commitment to excellence is matched only by our dedication to our clients' growth."</p>
            <p className="mt-4 font-bold">- Leadership Team</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-slate-600 leading-relaxed">To simplify technology for businesses, enabling them to focus on what they do best while we handle the complexities of the digital world.</p>
        </div>
        <div className="bg-indigo-600 p-10 rounded-3xl text-white shadow-xl shadow-indigo-200">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="opacity-90 leading-relaxed">To be the UK's most trusted IT partner, recognized for innovation, integrity, and our contribution to the British digital economy.</p>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-display font-bold text-center mb-16">Our Core Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: 'Integrity', desc: 'Honest advice, even when it means recommending a cheaper solution.' },
            { title: 'Innovation', desc: 'Always looking for the next technology that can give our clients an edge.' },
            { title: 'Reliability', desc: 'When you need us, we are there. No excuses, just solutions.' },
            { title: 'Security', desc: 'Protection is at the core of everything we build and manage.' },
          ].map((v, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-indigo-600" />
              </div>
              <h4 className="font-bold mb-2">{v.title}</h4>
              <p className="text-sm text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-12 text-white">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-display font-bold mb-6">GDPR & Compliance Commitment</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            As a UK-based company, we take data privacy with the utmost seriousness. We are fully committed to GDPR compliance and help our clients navigate the complex landscape of data protection. Our internal processes are audited regularly to ensure your data—and your clients' data—remains secure and private.
          </p>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 border border-white/20 rounded-lg text-xs font-bold uppercase tracking-widest">GDPR Ready</div>
            <div className="px-4 py-2 border border-white/20 rounded-lg text-xs font-bold uppercase tracking-widest">Cyber Essentials</div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const PricingPage = () => {
  const plans = [
    {
      name: 'Essential Support',
      price: '499',
      ideal: 'Small businesses needing reliable reactive support.',
      features: [
        'Mon-Fri 9am-5pm Support',
        'Remote Troubleshooting',
        'Basic Endpoint Security',
        'Monthly Health Checks',
        'Email Support'
      ],
      support: 'Standard Response (4h)',
      cta: 'Start Essential'
    },
    {
      name: 'Managed Business',
      price: '950',
      ideal: 'Growing companies requiring proactive management.',
      popular: true,
      features: [
        '24/7 Monitoring',
        'Priority Remote & On-site',
        'Advanced Threat Protection',
        'Cloud Backup (1TB)',
        'Strategic IT Roadmap',
        'Patch Management'
      ],
      support: 'Priority Response (1h)',
      cta: 'Go Managed'
    },
    {
      name: 'Enterprise Elite',
      price: '2,400',
      ideal: 'Large organizations with complex infrastructure.',
      features: [
        'Full 24/7/365 Support',
        'Dedicated Account Manager',
        'SIEM & SOC Monitoring',
        'Unlimited Cloud Storage',
        'Disaster Recovery as a Service',
        'Quarterly Security Audits'
      ],
      support: 'Instant Response (15m)',
      cta: 'Contact for Enterprise'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the level of support that fits your business needs. No hidden fees, just clear value.
          </p>
          <p className="mt-4 text-sm font-medium text-slate-500 italic">All prices are exclusive of VAT at 20%.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-3xl border ${
                plan.popular ? 'border-indigo-600 shadow-2xl shadow-indigo-100 scale-105 z-10' : 'border-slate-100 shadow-sm'
              } bg-white flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 h-10">{plan.ideal}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-900">£</span>
                  <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium">/month</span>
                </div>
              </div>
              <div className="mb-10 flex-grow">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</p>
                <ul className="space-y-4">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 size={18} className="text-indigo-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-sm font-bold text-slate-900">Support Level:</p>
                  <p className="text-sm text-slate-600">{plan.support}</p>
                </div>
              </div>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-slate-50 rounded-3xl border border-slate-100 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We understand that some businesses have unique requirements. Contact our team for a bespoke quote tailored to your specific infrastructure and goals.
          </p>
          <button className="btn-secondary">Request Custom Quote</button>
        </div>
      </div>
    </motion.div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-12">
              Have a question or ready to start your IT transformation? Our team is here to help. Reach out via the form or use our contact details below.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Registered Office</h4>
                  <p className="text-slate-600">Not Available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone Number</h4>
                  <p className="text-slate-600">Not Available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Address</h4>
                  <p className="text-slate-600">Not Available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Business Hours</h4>
                  <p className="text-slate-600">Monday - Friday: 09:00 - 17:30</p>
                  <p className="text-slate-600 text-sm italic">24/7 Support available for Managed Clients</p>
                </div>
              </div>
            </div>

            <div className="h-64 bg-slate-200 rounded-3xl overflow-hidden relative grayscale">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                Map Placeholder (UK Office Location)
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-emerald-600 w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                <p className="text-slate-600 mb-8">Thank you for reaching out. One of our IT specialists will be in touch within 24 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" placeholder="Acme Ltd" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Work Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" placeholder="john@company.co.uk" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all bg-white">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity</option>
                    <option>Cloud Services</option>
                    <option>IT Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none" placeholder="Tell us about your IT needs..."></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
                  <label className="text-xs text-slate-500 leading-relaxed">
                    I consent to St Helens Supported Living processing my personal data in accordance with the Privacy Policy to respond to my enquiry.
                  </label>
                </div>
                <button type="submit" className="w-full btn-primary justify-center py-4">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LegalPage = ({ title, content }: { title: string, content: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="pt-32 pb-20 px-6"
  >
    <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl border border-slate-100 shadow-sm">
      <h1 className="text-4xl font-display font-bold mb-10">{title}</h1>
      <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-p:leading-relaxed prose-li:leading-relaxed">
        {content}
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'pricing': return <PricingPage />;
      case 'contact': return <ContactPage />;
      case 'terms': return (
        <LegalPage 
          title="Terms and Conditions" 
          content={
            <div className="space-y-6 text-slate-600">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
                <p>Welcome to St Helens IT, a trading name of St Helens Supported Living. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">2. Payment Terms</h2>
                <p>All services are invoiced in Great British Pounds (GBP). Standard payment terms are 14 days from the date of invoice unless otherwise agreed in writing. Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">3. Intellectual Property</h2>
                <p>Unless otherwise stated, St Helens Supported Living and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">4. Confidentiality</h2>
                <p>We maintain strict confidentiality regarding all client data and business operations. We will not disclose any sensitive information to third parties without prior written consent, except as required by law.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">5. Limitation of Liability</h2>
                <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. We will not be liable for any loss or damage of any nature.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">6. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
              </section>
            </div>
          } 
        />
      );
      case 'privacy': return (
        <LegalPage 
          title="Privacy Policy" 
          content={
            <div className="space-y-6 text-slate-600">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">1. Data Collection</h2>
                <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. This may include names, contact information, and business details.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">2. Processing Purposes</h2>
                <p>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">3. Data Retention</h2>
                <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">4. Your Rights (GDPR)</h2>
                <p>Under the GDPR, you have rights including the right to access, rectify, or erase your personal data. You also have the right to object to processing and the right to data portability.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">5. Cookies</h2>
                <p>We use cookies and similar tracking technologies to access or store information. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">6. Security Measures</h2>
                <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
              </section>
            </div>
          } 
        />
      );
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
