/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Cloud, 
  Cpu, 
  Globe, 
  Lock, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Github,
  Server,
  Database,
  Users,
  MessageSquare,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Page, Service, PricingPlan, Testimonial } from './types';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About Us', value: 'about' },
    { label: 'Pricing', value: 'pricing' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setCurrentPage('home')}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Cpu size={24} />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter">SHAPES <span className="text-indigo-600">IT</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => setCurrentPage(link.value)}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                currentPage === link.value ? 'text-indigo-600' : 'text-slate-600'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="btn-primary py-2 px-5 text-sm"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
                key={link.value}
                onClick={() => {
                  setCurrentPage(link.value);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-medium ${
                  currentPage === link.value ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => {
                setCurrentPage('contact');
                setIsOpen(false);
              }}
              className="btn-primary w-full"
            >
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white">
              <Cpu size={18} />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter text-white">SHAPES <span className="text-indigo-600">IT</span></span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Empowering UK businesses with cutting-edge IT infrastructure, cyber security, and managed cloud solutions.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-indigo-400 transition-colors">Home</button></li>
            <li><button onClick={() => setCurrentPage('services')} className="hover:text-indigo-400 transition-colors">Services</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-indigo-400 transition-colors">About Us</button></li>
            <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-indigo-400 transition-colors">Pricing</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-indigo-400 transition-colors">Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setCurrentPage('terms')} className="hover:text-indigo-400 transition-colors">Terms & Conditions</button></li>
            <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">GDPR Compliance</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company Details</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="font-semibold text-white">Name:</span>
              <span>Shapes Domiciliary Service</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-white">Address:</span>
              <span>Not Available</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-white">CRN:</span>
              <span>Not Available</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-white">Phone:</span>
              <span>Not Available</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-white">Email:</span>
              <span>Not Available</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} Shapes Domiciliary Service. All rights reserved.</p>
        <p>Registered in England & Wales. VAT Registration: Not Available.</p>
      </div>
    </footer>
  );
};

// --- Page Views ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  const benefits = [
    { title: '24/7 UK Support', desc: 'Round-the-clock monitoring and support from our UK-based operations centre.', icon: <Clock className="text-indigo-600" /> },
    { title: 'Cyber Security First', desc: 'Enterprise-grade protection integrated into every solution we deploy.', icon: <Shield className="text-indigo-600" /> },
    { title: 'Scalable Solutions', desc: 'IT infrastructure that grows with your business, from startup to enterprise.', icon: <ArrowRight className="text-indigo-600" /> },
  ];

  const caseStudies = [
    { client: 'London Fintech Group', result: '£45,000 annual savings', desc: 'Cloud migration and infrastructure optimization reduced operational overhead by 30%.' },
    { client: 'Manchester Logistics', result: '99.99% Uptime achieved', desc: 'Implemented high-availability server clusters and redundant network paths.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,#4f46e5,transparent_50%)]"></div>
        </div>
        <div className="section-padding relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-indigo-600 rounded-full">
              UK Managed IT Experts
            </span>
            <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1]">
              Architecting the <span className="text-indigo-400">Future</span> of British Business.
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
              Shapes IT delivers enterprise-grade managed services, cyber security, and cloud infrastructure tailored for the UK market. We don't just fix IT; we drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setCurrentPage('services')} className="btn-primary">Explore Services</button>
              <button onClick={() => setCurrentPage('contact')} className="btn-secondary bg-transparent text-white border-white/20 hover:bg-white/10">Book a Consultation</button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Server Room" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Why Choose Shapes IT?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We combine technical excellence with a deep understanding of the UK business landscape.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                {b.icon}
              </div>
              <h3 className="text-xl mb-3">{b.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50 py-24">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Proven Results for UK Enterprises</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our success is measured by the success of our clients. From London-based fintechs to nationwide logistics firms, we deliver measurable ROI through strategic IT investment.
              </p>
              <div className="space-y-6">
                {caseStudies.map((cs, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-slate-200">
                    <div className="text-indigo-600 mt-1"><CheckCircle2 size={24} /></div>
                    <div>
                      <h4 className="font-bold text-indigo-600 mb-1">{cs.result}</h4>
                      <p className="text-sm font-semibold mb-1">{cs.client}</p>
                      <p className="text-xs text-slate-500">{cs.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" alt="Office 1" className="rounded-xl shadow-md" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400" alt="Team 1" className="rounded-xl shadow-md" referrerPolicy="no-referrer" />
              </div>
              <div className="pt-8 space-y-4">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400" alt="Office 2" className="rounded-xl shadow-md" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" alt="Team 2" className="rounded-xl shadow-md" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding text-center">
        <h2 className="text-3xl mb-12">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Financial Services', 'Healthcare', 'Legal', 'Manufacturing', 'Retail', 'Logistics', 'Education'].map((ind) => (
            <span key={ind} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-600 text-white py-24">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="text-lg italic mb-6">"Shapes IT transformed our legacy systems into a modern, agile cloud environment. Their UK support team is second to none."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-400 rounded-full"></div>
                <div>
                  <p className="font-bold">Alistair Graham</p>
                  <p className="text-sm opacity-80">CTO, Thames Water Solutions</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="text-lg italic mb-6">"The security audit and subsequent implementation by Shapes IT gave us the confidence to scale our digital offerings globally."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-400 rounded-full"></div>
                <div>
                  <p className="font-bold">Sarah Jenkins</p>
                  <p className="text-sm opacity-80">Operations Director, Midlands Logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl mb-6">Ready to Elevate Your IT?</h2>
          <p className="text-slate-600 mb-10 text-lg">Join hundreds of UK businesses that trust Shapes IT for their critical infrastructure.</p>
          <button onClick={() => setCurrentPage('contact')} className="btn-primary px-10 py-4 text-lg">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const services: Service[] = [
    {
      id: 'managed-it',
      title: 'Managed IT Support',
      description: 'Comprehensive 24/7 monitoring and proactive maintenance for your entire IT estate.',
      icon: <Server size={32} />,
      price: 'From £499/month',
      target: 'SMEs requiring reliable, always-on IT infrastructure.',
      process: ['Audit & Assessment', 'Onboarding & Setup', 'Proactive Monitoring', '24/7 Helpdesk Support'],
      benefits: ['Reduced downtime', 'Predictable monthly costs', 'Expert UK-based support']
    },
    {
      id: 'cyber-security',
      title: 'Cyber Security Solutions',
      description: 'Multi-layered protection against evolving digital threats, from phishing to ransomware.',
      icon: <Shield size={32} />,
      price: 'From £299/month',
      target: 'Businesses handling sensitive client data or regulated industries.',
      process: ['Vulnerability Scanning', 'Threat Mitigation', 'Employee Training', 'Incident Response Planning'],
      benefits: ['GDPR compliance', 'Risk reduction', 'Peace of mind']
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Strategy',
      description: 'Seamless transition to Azure, AWS, or Private Cloud environments tailored to your needs.',
      icon: <Cloud size={32} />,
      price: 'Project-based from £2,500',
      target: 'Companies looking to modernize legacy infrastructure.',
      process: ['Cloud Readiness Review', 'Architecture Design', 'Data Migration', 'Post-Migration Optimization'],
      benefits: ['Improved agility', 'Cost optimization', 'Remote work enablement']
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      description: 'Design and implementation of high-performance, secure wired and wireless networks.',
      icon: <Globe size={32} />,
      price: 'From £1,500 per site',
      target: 'New office fit-outs or businesses with connectivity issues.',
      process: ['Site Survey', 'Network Design', 'Hardware Installation', 'Performance Tuning'],
      benefits: ['High-speed connectivity', 'Secure guest access', 'Reliable VoIP performance']
    },
    {
      id: 'data-backup',
      title: 'Data Backup & Recovery',
      description: 'Robust disaster recovery plans and automated backups to ensure business continuity.',
      icon: <Database size={32} />,
      price: 'From £149/month',
      target: 'All businesses for whom data loss is not an option.',
      process: ['Data Mapping', 'Backup Schedule Setup', 'Recovery Testing', 'Continuous Verification'],
      benefits: ['Rapid restoration', 'Off-site redundancy', 'Compliance adherence']
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Our Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Comprehensive IT solutions designed to meet the unique challenges of the UK business environment.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="space-y-24">
          {services.map((s, i) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-indigo-200">
                  {s.icon}
                </div>
                <h2 className="text-3xl mb-4">{s.title}</h2>
                <p className="text-slate-600 mb-6 text-lg">{s.description}</p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
                  <p className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-wider">Pricing</p>
                  <p className="text-2xl font-display font-bold text-slate-900">{s.price}</p>
                  <p className="text-xs text-slate-500 mt-1">*Excluding VAT. Subject to survey.</p>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-slate-900">Target Audience:</p>
                  <p className="text-slate-600 text-sm">{s.target}</p>
                </div>
              </div>

              <div className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <div className="mb-8">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <ChevronRight className="text-indigo-600" size={20} />
                    The Process
                  </h4>
                  <div className="space-y-3">
                    {s.process.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="text-indigo-600" size={20} />
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {s.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
  const values = [
    { title: 'Integrity', desc: 'We deliver honest advice and transparent pricing, always putting the client first.' },
    { title: 'Innovation', desc: 'We stay ahead of the curve, bringing the latest global tech to British businesses.' },
    { title: 'Reliability', desc: 'Our systems and support are built to be resilient, ensuring your business never stops.' },
    { title: 'Security', desc: 'Protection is not an add-on; it is woven into the fabric of everything we do.' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-24">
        <div className="section-padding grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl mb-6">Our Story</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Founded in the heart of the UK, Shapes IT (a division of Shapes Domiciliary Service) began with a simple mission: to make enterprise-grade technology accessible to businesses of all sizes. 
            </p>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" alt="Team Meeting" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl mb-6">Mission & Vision</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-indigo-600 mb-2 uppercase tracking-widest text-xs">Our Mission</h4>
                <p className="text-slate-600 leading-relaxed">To empower UK businesses through innovative, secure, and reliable IT solutions that drive growth and operational excellence.</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-600 mb-2 uppercase tracking-widest text-xs">Our Vision</h4>
                <p className="text-slate-600 leading-relaxed">To be the UK's most trusted partner for managed IT services, known for our technical brilliance and unwavering commitment to client success.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-3xl mb-6">Core Values</h2>
            <div className="grid grid-cols-1 gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-indigo-600 mt-1"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="font-bold mb-1">{v.title}</h4>
                    <p className="text-sm text-slate-600">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-y border-slate-100">
        <div className="section-padding">
          <h2 className="text-3xl text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'James Harrison', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300' },
              { name: 'Eleanor Wright', role: 'Technical Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300' },
              { name: 'David Thompson', role: 'Head of Cyber Security', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300' },
            ].map((person, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-indigo-50">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold mb-1">{person.name}</h4>
                <p className="text-slate-500 text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-8 text-indigo-600">
            <Lock size={32} />
          </div>
          <h2 className="text-3xl mb-6">GDPR & Compliance</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            As a UK-based company, we take data protection seriously. We are fully committed to GDPR compliance and hold our partners to the same rigorous standards. Our internal processes are audited regularly to ensure your data—and your clients' data—remains secure and private.
          </p>
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <Shield size={16} /> ISO 27001
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <Lock size={16} /> Cyber Essentials
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PricingPage = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Essential Support',
      price: '£499',
      features: ['Remote Helpdesk (9-5)', 'Patch Management', 'Antivirus Protection', 'Monthly Health Reports', 'Cloud Backup (100GB)'],
      support: 'Next Business Day',
      idealFor: 'Small businesses with basic IT needs.',
    },
    {
      name: 'Professional Managed',
      price: '£999',
      features: ['24/7 Remote Support', 'On-site Support Included', 'Advanced Threat Protection', 'Network Monitoring', 'Cloud Backup (500GB)', 'vCIO Strategic Planning'],
      support: '4-Hour Response',
      idealFor: 'Growing companies requiring proactive management.',
      recommended: true,
    },
    {
      name: 'Enterprise Secure',
      price: '£1,999',
      features: ['Dedicated Account Manager', '24/7/365 SOC Monitoring', 'SIEM Integration', 'Disaster Recovery as a Service', 'Unlimited Cloud Backup', 'Compliance Auditing'],
      support: '1-Hour Critical Response',
      idealFor: 'Large organisations with complex security needs.',
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Transparent Pricing</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Predictable monthly costs for enterprise-grade IT management.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-2xl border ${
                plan.recommended ? 'border-indigo-600 shadow-xl scale-105 z-10 bg-white' : 'border-slate-200 bg-white shadow-sm'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl mb-2">{plan.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{plan.idealFor}</p>
              <div className="mb-8">
                <span className="text-4xl font-display font-bold">{plan.price}</span>
                <span className="text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={18} className="text-indigo-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-slate-100 mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">SLA Support</p>
                <p className="text-sm font-semibold">{plan.support}</p>
              </div>
              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                plan.recommended ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center text-slate-500 text-sm">
          <p>* All prices are subject to VAT at the prevailing rate. Custom enterprise quotes available upon request.</p>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Get In Touch</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Have a question or need a quote? Our UK team is ready to help.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Registered Office</h4>
                  <p className="text-slate-600">Not Available</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-slate-600">Not Available</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-slate-600">Not Available</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p className="text-slate-600">Monday - Friday: 09:00 - 17:30</p>
                  <p className="text-slate-500 text-sm">24/7 Support available for Managed Clients</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-100 rounded-2xl border border-slate-200 text-center">
              <p className="text-slate-500 italic mb-4">Map Placeholder</p>
              <div className="w-full h-48 bg-slate-200 rounded-xl flex items-center justify-center">
                <MapPin size={48} className="text-slate-400" />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="john@company.co.uk" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all">
                  <option>Managed IT Support</option>
                  <option>Cyber Security</option>
                  <option>Cloud Migration</option>
                  <option>Network Infrastructure</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <label className="text-xs text-slate-500">
                  I consent to Shapes IT processing my personal data in accordance with the Privacy Policy.
                </label>
              </div>
              <button className="btn-primary w-full py-4 text-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const LegalPage = ({ type }: { type: 'terms' | 'privacy' }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl mb-12">{type === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          {type === 'terms' ? (
            <>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p>These Terms and Conditions govern your use of the website and services provided by Shapes Domiciliary Service (trading as Shapes IT). By accessing our services, you agree to be bound by these terms.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Payment Terms</h2>
                <p>All fees are quoted in Pounds Sterling (GBP) and are subject to VAT at the prevailing rate. Invoices are payable within 14 days of issue unless otherwise agreed in writing. Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
                <p>All intellectual property rights in materials provided by Shapes IT during the course of service delivery remain the property of Shapes IT or its licensors. Clients are granted a non-exclusive license to use such materials for their internal business purposes.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Confidentiality</h2>
                <p>Both parties agree to maintain the confidentiality of all sensitive information disclosed during the term of the agreement. This obligation survives the termination of any contract.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
                <p>Shapes IT shall not be liable for any indirect or consequential loss, including loss of profits or data. Our total liability for any claim shall not exceed the total fees paid by the client in the 12 months preceding the claim.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
                <p>These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Data Collection</h2>
                <p>We collect personal data including names, contact details, and business information when you interact with our services. This data is collected via our contact forms, service agreements, and website cookies.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Processing Purposes</h2>
                <p>We process your data to provide and improve our IT services, manage client relationships, process payments, and comply with legal obligations under the UK GDPR.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Retention</h2>
                <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, typically for the duration of our contract plus 7 years for tax and legal compliance.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Subject Rights</h2>
                <p>Under the UK GDPR, you have the right to access, rectify, or erase your personal data. You also have the right to restrict or object to certain types of processing. To exercise these rights, please contact us at our official business email.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies & Security</h2>
                <p>Our website uses essential and analytical cookies to improve user experience. We implement robust technical and organisational measures to protect your data from unauthorised access or disclosure.</p>
              </section>
            </>
          )}
          <div className="pt-12 border-t border-slate-200 mt-12">
            <h4 className="font-bold text-slate-900 mb-4">Company Details for Legal Purposes:</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Company Name:</strong> Shapes Domiciliary Service</li>
              <li><strong>Registered Office:</strong> Not Available</li>
              <li><strong>CRN:</strong> Not Available</li>
              <li><strong>Governing Law:</strong> England & Wales</li>
            </ul>
          </div>
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
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'pricing': return <PricingPage />;
      case 'contact': return <ContactPage />;
      case 'terms': return <LegalPage type="terms" />;
      case 'privacy': return <LegalPage type="privacy" />;
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
