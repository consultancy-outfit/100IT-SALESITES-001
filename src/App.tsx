/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Cloud, 
  Cpu, 
  Headset, 
  BarChart3, 
  Network, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  ChevronRight,
  Target,
  Award,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Types ---

const COMPANY_DETAILS = {
  name: "Benfleet Essex",
  address: "Business Centre, High Road, Benfleet, Essex, SS7 1AA",
  email: "info@benfleetessex.co.uk",
  crn: "08421567",
  hours: "Mon - Fri: 09:00 - 17:30",
};

const SERVICES = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    icon: <Headset className="w-8 h-8" />,
    overview: 'Comprehensive day-to-day IT management and helpdesk support for your entire team.',
    audience: 'SMEs looking to outsource their IT department or supplement internal teams.',
    process: ['Initial Audit', 'Onboarding', '24/7 Monitoring', 'Proactive Maintenance'],
    benefits: ['Reduced Downtime', 'Predictable Costs', 'Expert Advice'],
    startingPrice: '£250'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    icon: <Shield className="w-8 h-8" />,
    overview: 'Advanced threat protection, security audits, and employee awareness training.',
    audience: 'Businesses handling sensitive data or requiring Cyber Essentials certification.',
    process: ['Vulnerability Scan', 'Risk Assessment', 'Implementation', 'Continuous Monitoring'],
    benefits: ['Data Protection', 'Regulatory Compliance', 'Peace of Mind'],
    startingPrice: '£400'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Migration & Hosting',
    icon: <Cloud className="w-8 h-8" />,
    overview: 'Seamless transition to Azure, AWS, or Microsoft 365 with ongoing management.',
    audience: 'Companies looking to modernise infrastructure and enable remote work.',
    process: ['Readiness Assessment', 'Migration Strategy', 'Execution', 'Post-Migration Support'],
    benefits: ['Scalability', 'Remote Accessibility', 'Cost Efficiency'],
    startingPrice: '£150'
  },
  {
    id: 'it-consultancy',
    title: 'Strategic IT Consultancy',
    icon: <BarChart3 className="w-8 h-8" />,
    overview: 'Long-term technology roadmapping aligned with your business objectives.',
    audience: 'Leadership teams needing expert guidance on digital transformation.',
    process: ['Discovery', 'Strategic Planning', 'Vendor Selection', 'Implementation Oversight'],
    benefits: ['ROI Optimisation', 'Future-Proofing', 'Competitive Edge'],
    startingPrice: '£1,200'
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    icon: <Network className="w-8 h-8" />,
    overview: 'Design, installation, and management of robust wired and wireless networks.',
    audience: 'New office setups or businesses experiencing connectivity issues.',
    process: ['Site Survey', 'Design', 'Installation', 'Testing & Optimisation'],
    benefits: ['High Performance', 'Reliability', 'Secure Connectivity'],
    startingPrice: '£800'
  },
  {
    id: 'disaster-recovery',
    title: 'Disaster Recovery',
    icon: <Lock className="w-8 h-8" />,
    overview: 'Automated backup solutions and rapid recovery plans for business continuity.',
    audience: 'Any business that cannot afford significant data loss or downtime.',
    process: ['BIA Analysis', 'Backup Setup', 'Testing', 'Recovery Drills'],
    benefits: ['Business Continuity', 'Data Integrity', 'Risk Mitigation'],
    startingPrice: '£200'
  }
];

const PRICING_PLANS = [
  {
    name: 'Essential Support',
    price: '£25',
    period: 'per user / month',
    features: [
      'Remote Helpdesk Support',
      'Antivirus Management',
      'Patch Management',
      'Email Security',
      '9am - 5pm Support'
    ],
    support: 'Standard Business Hours',
    idealFor: 'Small teams with basic IT needs',
    cta: 'Get Started'
  },
  {
    name: 'Professional Managed',
    price: '£45',
    period: 'per user / month',
    features: [
      'Everything in Essential',
      'On-site Support Included',
      'Cloud Backup (50GB)',
      'Quarterly Strategy Reviews',
      'Priority Response Times'
    ],
    support: 'Enhanced Response (4hr SLA)',
    idealFor: 'Growing businesses requiring proactive care',
    cta: 'Most Popular',
    popular: true
  },
  {
    name: 'Enterprise Secure',
    price: '£75',
    period: 'per user / month',
    features: [
      'Everything in Professional',
      'Advanced Threat Protection',
      'Unlimited Cloud Backup',
      'vCFO / IT Director Services',
      '24/7 Critical Support'
    ],
    support: '24/7 Emergency Support',
    idealFor: 'Compliance-heavy or high-growth firms',
    cta: 'Contact Sales'
  }
];

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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-zinc-900 tracking-tight">Benfleet Essex</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-zinc-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 hover:text-zinc-900 p-2"
            >
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
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-zinc-600 hover:text-indigo-600 hover:bg-zinc-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-indigo-600 text-white px-4 py-3 rounded-lg font-medium mt-4"
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
    <footer className="bg-zinc-950 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Cpu className="text-indigo-500 w-6 h-6" />
              <span className="text-xl font-bold text-white">Benfleet Essex</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Empowering UK businesses through strategic technology solutions and reliable IT support. Your local partner for digital excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              {SERVICES.slice(0, 4).map(s => (
                <li key={s.id}><Link to="/services" className="hover:text-white transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
            <p>Registered in England & Wales</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold mb-6">
                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
                <span>Trusted IT Partner in Essex</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] mb-8 tracking-tight">
                Empowering Your Business Through <span className="text-indigo-600">Digital Excellence</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-lg">
                We provide enterprise-grade IT services, cybersecurity, and cloud solutions tailored for ambitious UK businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center group">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-all flex items-center justify-center">
                  Book a Consultation
                </Link>
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
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">99.9% Uptime</p>
                    <p className="text-xs text-zinc-500">Guaranteed Service Level</p>
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
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Why Choose Benfleet Essex?</h2>
            <p className="text-zinc-600">We combine local expertise with world-class technology to deliver results that matter.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Local Expertise', desc: 'Based in Benfleet, we understand the Essex business landscape and offer rapid on-site support.', icon: <MapPin className="text-indigo-600" /> },
              { title: 'Proactive Support', desc: 'We monitor your systems 24/7 to catch and resolve issues before they impact your business.', icon: <Shield className="text-indigo-600" /> },
              { title: 'Scalable Solutions', desc: 'Our services grow with you, from small startups to established enterprise organisations.', icon: <BarChart3 className="text-indigo-600" /> },
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl border border-zinc-100 hover:border-indigo-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Specialised IT Support for UK Industries</h2>
              <p className="text-lg text-zinc-600 mb-8">We don't believe in one-size-fits-all. Our consultants have deep experience in sectors with unique compliance and technical requirements.</p>
              <div className="grid grid-cols-2 gap-4">
                {['Legal & Professional', 'Healthcare', 'Manufacturing', 'Education', 'Finance', 'Construction'].map((industry, i) => (
                  <div key={i} className="flex items-center space-x-2 text-zinc-700 font-medium">
                    <CheckCircle2 className="text-indigo-600 w-5 h-5" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/ind1/400/500" className="rounded-2xl shadow-lg" alt="Industry 1" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/ind2/400/300" className="rounded-2xl shadow-lg" alt="Industry 2" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/ind3/400/300" className="rounded-2xl shadow-lg" alt="Industry 3" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/ind4/400/500" className="rounded-2xl shadow-lg" alt="Industry 4" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Measurable Results</h2>
            <p className="text-zinc-600">Real impact for our clients across the UK.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 rounded-3xl p-10 text-white flex flex-col justify-between">
              <div>
                <div className="text-indigo-400 font-bold mb-4 uppercase tracking-widest text-xs">Legal Firm Migration</div>
                <h3 className="text-2xl font-bold mb-6">Cloud migration for a 50-user practice in Chelmsford.</h3>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-indigo-400">£12k</div>
                    <div className="text-xs text-zinc-400 uppercase mt-1">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-400">100%</div>
                    <div className="text-xs text-zinc-400 uppercase mt-1">Remote Access</div>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 italic">"The transition was seamless. We saved over £12,000 in server maintenance costs in the first year alone."</p>
            </div>
            <div className="bg-indigo-600 rounded-3xl p-10 text-white flex flex-col justify-between">
              <div>
                <div className="text-indigo-200 font-bold mb-4 uppercase tracking-widest text-xs">Manufacturing Security</div>
                <h3 className="text-2xl font-bold mb-6">Cybersecurity overhaul for a Southend-based manufacturer.</h3>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-indigo-200">0</div>
                    <div className="text-xs text-indigo-100 uppercase mt-1">Security Breaches</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-200">£45k</div>
                    <div className="text-xs text-indigo-100 uppercase mt-1">Risk Mitigated</div>
                  </div>
                </div>
              </div>
              <p className="text-indigo-100 italic">"Benfleet Essex secured our IP and helped us achieve Cyber Essentials Plus certification in record time."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'James Harrington', role: 'Director, Harrington Legal', text: 'Professional, responsive, and they actually speak plain English. Best IT partner we\'ve had.' },
              { name: 'Sarah Jenkins', role: 'Operations Manager, Essex Tech', text: 'Their proactive approach saved us from a major ransomware attack. Truly invaluable service.' },
              { name: 'Robert Smith', role: 'Founder, Smith & Co', text: 'Reliable IT support that just works. It allows me to focus on growing my business instead of fixing PCs.' },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-zinc-600 mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-zinc-900">{t.name}</p>
                  <p className="text-sm text-zinc-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your IT?</h2>
              <p className="text-xl text-indigo-100 mb-10">Join hundreds of UK businesses that trust Benfleet Essex for their technology needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition-all">
                  Get Started Today
                </Link>
                <Link to="/pricing" className="bg-indigo-500 text-white border border-indigo-400 px-8 py-4 rounded-full font-bold hover:bg-indigo-400 transition-all">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full -mr-32 -mt-32 opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-700 rounded-full -ml-32 -mb-32 opacity-50" />
          </div>
        </div>
      </section>
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-white">
      <section className="pt-20 pb-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">Our IT Services</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">Enterprise-grade solutions tailored for the modern UK business landscape.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-zinc-600 mb-6">{service.overview}</p>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-2">Ideal For:</h4>
                      <p className="text-zinc-600">{service.audience}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-zinc-900 mb-2">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((b, i) => (
                            <li key={i} className="flex items-center text-sm text-zinc-600">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900 mb-2">Our Process:</h4>
                        <ul className="space-y-2">
                          {service.process.map((p, i) => (
                            <li key={i} className="flex items-center text-sm text-zinc-600">
                              <span className="w-5 h-5 bg-zinc-100 rounded-full flex items-center justify-center text-[10px] font-bold mr-2">{i + 1}</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Starting From</p>
                      <p className="text-2xl font-bold text-zinc-900">{service.startingPrice}<span className="text-sm font-normal text-zinc-500"> / month</span></p>
                    </div>
                    <Link to="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all">
                      Enquire Now
                    </Link>
                  </div>
                </div>
                
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/800/600`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden sm:block max-w-[200px]">
                    <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Expert Tip</p>
                    <p className="text-sm text-zinc-600 leading-tight">Our {service.title.toLowerCase()} can improve operational efficiency by up to 40%.</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-white">
      <section className="pt-20 pb-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">About Benfleet Essex</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">A decade of excellence in IT services, built on trust, expertise, and local commitment.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Story</h2>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                Founded in the heart of Essex, Benfleet Essex started with a simple mission: to provide small and medium-sized businesses with the same level of IT sophistication enjoyed by global corporations.
              </p>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Over the past 10 years, we have grown from a small local support team into a comprehensive IT consultancy serving clients across London and the South East. Our journey has been defined by our commitment to staying ahead of the technology curve while never losing the personal touch that our clients value.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-indigo-600">10+</p>
                  <p className="text-sm text-zinc-500 uppercase font-bold mt-2">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-indigo-600">250+</p>
                  <p className="text-sm text-zinc-500 uppercase font-bold mt-2">Clients Served</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/about-team/800/600" className="rounded-3xl shadow-2xl" alt="Our Team" referrerPolicy="no-referrer" />
              <div className="absolute -top-6 -right-6 bg-indigo-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs uppercase font-bold opacity-80">UK Based Support</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <div className="bg-zinc-50 p-12 rounded-3xl">
              <Target className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h3>
              <p className="text-zinc-600 leading-relaxed">To empower UK businesses by delivering innovative, reliable, and secure technology solutions that drive growth and operational excellence.</p>
            </div>
            <div className="bg-indigo-50 p-12 rounded-3xl">
              <Award className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Vision</h3>
              <p className="text-zinc-600 leading-relaxed">To be the most trusted IT partner in the South East, known for our technical expertise, proactive approach, and unwavering commitment to client success.</p>
            </div>
          </div>

          <div className="mb-32">
            <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: 'Integrity', desc: 'We provide honest advice and transparent pricing, always putting your business interests first.' },
                { title: 'Excellence', desc: 'We strive for perfection in every project, from simple support tickets to complex migrations.' },
                { title: 'Innovation', desc: 'We continuously explore new technologies to keep our clients ahead of the competition.' },
                { title: 'Reliability', desc: 'When you need us, we are there. No excuses, just solutions.' },
              ].map((v, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600 font-bold text-xl">{i + 1}</div>
                  <h4 className="font-bold text-zinc-900 mb-3">{v.title}</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">GDPR & Compliance</h2>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  As a UK-based IT provider, we take data protection seriously. We are fully compliant with the UK GDPR and Data Protection Act 2018. Our internal processes and the solutions we provide are designed with "Privacy by Design" at their core.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                    <span>Cyber Essentials Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                    <span>Information Commissioner's Office (ICO) Registered</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                    <span>Regular Security Audits</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800 p-8 rounded-2xl text-center">
                  <Shield className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
                  <p className="font-bold">Secure Data</p>
                </div>
                <div className="bg-zinc-800 p-8 rounded-2xl text-center">
                  <Lock className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
                  <p className="font-bold">Privacy First</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="bg-white">
      <section className="pt-20 pb-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">Transparent Pricing</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">No hidden fees. No complex contracts. Just reliable IT support at a predictable monthly cost.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PRICING_PLANS.map((plan, i) => (
              <div 
                key={i} 
                className={`relative p-10 rounded-[2.5rem] border ${
                  plan.popular ? 'border-indigo-600 shadow-2xl scale-105 z-10 bg-white' : 'border-zinc-100 bg-zinc-50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-500">{plan.idealFor}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                    <span className="text-zinc-500 ml-2 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-[10px] text-zinc-400 mt-2 uppercase font-bold tracking-wider">* Prices exclude VAT at 20%</p>
                </div>
                <div className="space-y-4 mb-10">
                  <p className="text-xs font-bold text-zinc-900 uppercase tracking-widest">What's Included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start text-sm text-zinc-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8 border-t border-zinc-200 mb-8">
                  <p className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-2">Support Level:</p>
                  <p className="text-sm text-zinc-600">{plan.support}</p>
                </div>
                <Link 
                  to="/contact" 
                  className={`block w-full text-center py-4 rounded-2xl font-bold transition-all ${
                    plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-zinc-50 p-12 rounded-3xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-zinc-600 mb-8">For larger organisations or specific project requirements, we offer bespoke pricing and service level agreements.</p>
            <Link to="/contact" className="inline-flex items-center text-indigo-600 font-bold hover:underline">
              Contact our enterprise team <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <section className="pt-20 pb-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">Have a question or ready to start your project? We're here to help.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">Contact Information</h2>
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Our Office</h4>
                    <p className="text-zinc-600">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Email Us</h4>
                    <p className="text-zinc-600">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Business Hours</h4>
                    <p className="text-zinc-600">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-zinc-900 rounded-3xl text-white">
                <h4 className="font-bold mb-4">Emergency Support</h4>
                <p className="text-zinc-400 text-sm mb-6">Existing clients with 24/7 support contracts can access our emergency helpdesk via their dedicated portal.</p>
                <a href="#" className="inline-flex items-center text-indigo-400 font-bold hover:underline">
                  Client Portal Login <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
              
              <div className="mt-8 aspect-video bg-zinc-100 rounded-3xl border border-zinc-200 flex items-center justify-center text-zinc-400 overflow-hidden relative">
                <img src="https://picsum.photos/seed/map/800/450?blur=2" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Map" referrerPolicy="no-referrer" />
                <div className="relative z-10 flex flex-col items-center">
                  <MapPin className="w-10 h-10 mb-2" />
                  <span className="font-bold text-zinc-900">Map Placeholder</span>
                  <span className="text-xs">Benfleet, Essex</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-2xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">Message Sent!</h3>
                  <p className="text-zinc-600">Thank you for contacting us. A member of our team will be in touch within 24 business hours.</p>
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
                      <label className="text-sm font-bold text-zinc-900">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all" placeholder="john@company.co.uk" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all" placeholder="Your Business Ltd" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900">Service Interested In</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cybersecurity</option>
                      <option>Cloud Services</option>
                      <option>IT Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900">Your Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input required type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500" />
                    <label className="text-xs text-zinc-500 leading-tight">
                      I consent to Benfleet Essex processing my personal data in accordance with the <Link to="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Terms = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>These Terms and Conditions govern the provision of IT services by Benfleet Essex ("the Company", "we", "us") to the client ("the Client", "you"). By engaging our services, you agree to be bound by these terms.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Services</h2>
            <p>The specific services to be provided will be detailed in a Service Level Agreement (SLA) or Statement of Work (SOW). We will perform services with reasonable skill and care in accordance with industry standards.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Payment Terms</h2>
            <p>All prices are quoted in Great British Pounds (GBP) and exclude VAT unless otherwise stated. Invoices are payable within 14 days of the invoice date. Recurring services are billed monthly in advance. Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
            <p>All intellectual property rights in materials created by us during the provision of services remain our property unless otherwise agreed in writing. The Client is granted a non-exclusive, non-transferable licence to use such materials for their internal business purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidentiality</h2>
            <p>Both parties agree to keep confidential all non-public information disclosed by the other party during the course of the engagement. This obligation survives the termination of any agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
            <p>Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the Client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, loss of profits, or loss of data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

const Privacy = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <p className="text-sm font-bold">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Information We Collect</h2>
            <p>We collect personal data that you provide to us, including your name, email address, phone number, and company details when you contact us or use our services. We also collect technical data such as IP addresses and browser information through cookies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Purpose of Processing</h2>
            <p>We process your data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage our IT services.</li>
              <li>Respond to enquiries and provide customer support.</li>
              <li>Send marketing communications (where you have consented).</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Your Rights</h2>
            <p>Under the UK GDPR, you have the right to access, correct, or erase your personal data. You also have the right to object to or restrict processing, and the right to data portability. To exercise these rights, please contact us at {COMPANY_DETAILS.email}.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience and analyse traffic. You can manage your cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Security</h2>
            <p>We have implemented appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email} or write to us at our registered office: {COMPANY_DETAILS.address}.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
