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
  MessageSquare, 
  ChevronRight, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X,
  ArrowRight,
  Server,
  Database,
  Users,
  Award,
  Zap
} from 'lucide-react';
import { COMPANY_DETAILS, Service, PricingPlan, Testimonial, CaseStudy } from './types';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'Services', 'About Us', 'Pricing', 'Contact Us'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('Home')}>
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Cera Castleham</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  activePage === item ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActivePage(item);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md"
                >
                  {item}
                </button>
              ))}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center mr-2">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">Cera Castleham</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering British enterprises with cutting-edge IT infrastructure, 
              bespoke cloud solutions, and world-class cybersecurity.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setActivePage('Home')} className="hover:text-emerald-400">Home</button></li>
              <li><button onClick={() => setActivePage('Services')} className="hover:text-emerald-400">Services</button></li>
              <li><button onClick={() => setActivePage('About Us')} className="hover:text-emerald-400">About Us</button></li>
              <li><button onClick={() => setActivePage('Pricing')} className="hover:text-emerald-400">Pricing</button></li>
              <li><button onClick={() => setActivePage('Contact Us')} className="hover:text-emerald-400">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setActivePage('Terms and Conditions')} className="hover:text-emerald-400">Terms & Conditions</button></li>
              <li><button onClick={() => setActivePage('Privacy Policy')} className="hover:text-emerald-400">Privacy Policy</button></li>
              <li><button onClick={() => setActivePage('Privacy Policy')} className="hover:text-emerald-400">GDPR Compliance</button></li>
              <li><button onClick={() => setActivePage('Terms and Conditions')} className="hover:text-emerald-400">Cookie Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company Details</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-emerald-500 shrink-0 mt-1" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-emerald-500 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-emerald-500 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-500">CRN: {COMPANY_DETAILS.crn}</p>
                <p className="text-xs text-slate-500">VAT Registered: GB 123 4567 89</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. Registered in England & Wales.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  const benefits = [
    { title: "UK-Based Support", desc: "Local experts available 24/7 for your peace of mind.", icon: <Users className="w-6 h-6" /> },
    { title: "GDPR Compliant", desc: "Ensuring your data is handled with the highest security standards.", icon: <Shield className="w-6 h-6" /> },
    { title: "Scalable Solutions", desc: "Technology that grows alongside your business ambitions.", icon: <Zap className="w-6 h-6" /> },
  ];

  const caseStudies: CaseStudy[] = [
    { title: "Financial Firm Migration", description: "Seamlessly moved a London-based hedge fund to a hybrid cloud environment.", result: "Saved £45,000 annually in infrastructure costs." },
    { title: "Retail Network Security", description: "Implemented advanced threat detection for a national retail chain.", result: "Reduced security incidents by 92%." },
  ];

  const testimonials: Testimonial[] = [
    { name: "Alistair Graham", role: "CEO, FinTech Solutions", content: "Cera Castleham Lodge transformed our IT infrastructure. Their attention to detail and UK-centric support is unparalleled." },
    { name: "Sarah Jenkins", role: "Operations Director, Sussex Logistics", content: "Reliable, professional, and proactive. They don't just fix problems; they prevent them." },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-emerald-700 bg-emerald-100 rounded-full">
                Excellence in British IT
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Future-Proof Your <span className="text-emerald-600">Business Technology</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-xl">
                Cera Castleham Lodge provides elite IT consultancy and managed services 
                tailored for the unique demands of the UK market. From cloud migration 
                to cybersecurity, we are your strategic technology partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setActivePage('Services')}
                  className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all flex items-center justify-center"
                >
                  Our Services <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActivePage('Contact Us')}
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition-all"
                >
                  Book a Consultation
                </button>
              </div>
            </motion.div>
            <motion.div 
              className="hidden lg:block relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-office/800/600" 
                  alt="Modern IT Office" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Cera Castleham?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We combine global technology standards with local expertise to deliver 
              results that matter to your bottom line.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-emerald-200 transition-colors">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Industries We Serve Across the UK</h2>
              <p className="text-slate-400 mb-10">
                Our expertise spans across diverse sectors, ensuring that your specific 
                regulatory and operational needs are met with precision.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {['Financial Services', 'Legal & Professional', 'Healthcare', 'Manufacturing', 'Retail & E-commerce', 'Education'].map((industry) => (
                  <div key={industry} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                    <span className="text-sm font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-xl bg-slate-800 flex items-center justify-center p-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-emerald-500 mb-2">15+</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Years Experience</div>
                  </div>
                </div>
                <div className="h-64 rounded-xl overflow-hidden">
                  <img src="https://picsum.photos/seed/london/400/600" alt="London" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-xl overflow-hidden">
                  <img src="https://picsum.photos/seed/tech/400/600" alt="Tech" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                </div>
                <div className="h-48 rounded-xl bg-slate-800 flex items-center justify-center p-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-emerald-500 mb-2">99.9%</div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Uptime Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Measurable Results</h2>
            <p className="text-slate-600">Real-world impact for our British clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-emerald-900 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-emerald-100/80 mb-8">{study.description}</p>
                  <div className="inline-block px-6 py-3 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-500/30 text-emerald-400 font-bold">
                    {study.result}
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
              <p className="text-slate-600 mb-8">
                We pride ourselves on building long-term partnerships with our clients.
              </p>
              <div className="flex items-center space-x-2">
                {[1,2,3,4,5].map(i => <Award key={i} className="w-5 h-5 text-emerald-500 fill-emerald-500" />)}
                <span className="ml-2 font-semibold text-slate-900">4.9/5 Trust Score</span>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <MessageSquare className="w-8 h-8 text-emerald-600/20 mb-6" />
                  <p className="text-slate-600 italic mb-8">"{t.content}"</p>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Elevate Your IT Strategy?</h2>
          <p className="text-emerald-100 mb-12 max-w-2xl mx-auto text-lg">
            Join hundreds of UK businesses that trust Cera Castleham Lodge for their technology needs.
          </p>
          <button 
            onClick={() => setActivePage('Contact Us')}
            className="px-10 py-5 bg-white text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-all shadow-xl"
          >
            Get Started Today
          </button>
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
      overview: 'Comprehensive 24/7 monitoring and support for your entire IT estate.',
      targetAudience: 'SMEs and growing enterprises needing reliable day-to-day IT management.',
      process: ['Audit & Onboarding', 'Proactive Monitoring', 'Helpdesk Support', 'Quarterly Reviews'],
      benefits: ['Reduced Downtime', 'Predictable Costs', 'Expert Knowledge Access'],
      startingPrice: '£450/month',
      icon: 'Server'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      overview: 'Advanced threat protection, vulnerability assessments, and employee training.',
      targetAudience: 'Businesses handling sensitive client data or operating in regulated sectors.',
      process: ['Security Audit', 'Implementation', 'Continuous Monitoring', 'Incident Response'],
      benefits: ['Data Protection', 'Regulatory Compliance', 'Peace of Mind'],
      startingPrice: '£750/month',
      icon: 'Shield'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Migration & Strategy',
      overview: 'Seamless transition to Azure, AWS, or Private Cloud environments.',
      targetAudience: 'Companies looking to modernise infrastructure and enable remote work.',
      process: ['Readiness Assessment', 'Migration Planning', 'Execution', 'Optimisation'],
      benefits: ['Scalability', 'Cost Efficiency', 'Enhanced Mobility'],
      startingPrice: '£1,200 (One-off)',
      icon: 'Cloud'
    },
    {
      id: 'it-consultancy',
      title: 'Strategic IT Consultancy',
      overview: 'Expert guidance on digital transformation and long-term tech roadmaps.',
      targetAudience: 'Leadership teams needing strategic alignment between tech and business goals.',
      process: ['Discovery', 'Strategy Development', 'Roadmap Creation', 'Implementation Support'],
      benefits: ['Strategic Alignment', 'Informed Decision Making', 'Competitive Advantage'],
      startingPrice: '£150/hour',
      icon: 'Users'
    },
    {
      id: 'disaster-recovery',
      title: 'Disaster Recovery & Backup',
      overview: 'Robust data backup and business continuity planning.',
      targetAudience: 'Any business where data loss or downtime would be catastrophic.',
      process: ['Risk Assessment', 'Backup Setup', 'DR Testing', 'Ongoing Management'],
      benefits: ['Business Continuity', 'Data Integrity', 'Rapid Recovery'],
      startingPrice: '£200/month',
      icon: 'Database'
    }
  ];

  const getIcon = (name: string) => {
    switch(name) {
      case 'Server': return <Server className="w-8 h-8" />;
      case 'Shield': return <Shield className="w-8 h-8" />;
      case 'Cloud': return <Cloud className="w-8 h-8" />;
      case 'Users': return <Users className="w-8 h-8" />;
      case 'Database': return <Database className="w-8 h-8" />;
      default: return <Cpu className="w-8 h-8" />;
    }
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Our Core IT Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Tailored technology solutions designed to drive efficiency, security, and growth for your business.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 p-10 lg:p-16">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-8">
                  {getIcon(service.icon)}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-8 text-lg">{service.overview}</p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Ideal For</h4>
                  <p className="text-slate-700 font-medium">{service.targetAudience}</p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                  <div>
                    <span className="text-sm text-slate-400 block mb-1">Starting from</span>
                    <span className="text-2xl font-bold text-emerald-600">{service.startingPrice}</span>
                  </div>
                  <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2 bg-slate-900 p-10 lg:p-16 text-white flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-emerald-500 font-bold mb-6 flex items-center">
                      <ChevronRight className="mr-2 w-4 h-4" /> The Process
                    </h4>
                    <ul className="space-y-4">
                      {service.process.map(step => (
                        <li key={step} className="flex items-start text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-3 shrink-0"></span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-emerald-500 font-bold mb-6 flex items-center">
                      <ChevronRight className="mr-2 w-4 h-4" /> Key Benefits
                    </h4>
                    <ul className="space-y-4">
                      {service.benefits.map(benefit => (
                        <li key={benefit} className="flex items-start text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Our Story</h1>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Founded in the heart of East Sussex, Cera Castleham Lodge began with a simple mission: 
              to provide enterprise-grade IT solutions to businesses that value reliability and 
              personal service. 
            </p>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Over the years, we have grown into a leading UK IT consultancy, serving clients 
              from London to Edinburgh. Our name reflects our heritage and our commitment 
              to being a "lodge" of safety and stability in the ever-changing digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-emerald-600 font-bold text-3xl mb-1">150+</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Active Clients</p>
              </div>
              <div>
                <h4 className="text-emerald-600 font-bold text-3xl mb-1">24/7</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Support Coverage</p>
              </div>
            </div>
          </motion.div>
          <div className="mt-12 lg:mt-0 relative">
            <img 
              src="https://picsum.photos/seed/team/800/600" 
              alt="Our Team" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="p-12 rounded-3xl bg-slate-900 text-white">
            <h3 className="text-2xl font-bold mb-6 text-emerald-500">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To empower British businesses with innovative, secure, and scalable technology 
              solutions that drive sustainable growth and operational excellence.
            </p>
          </div>
          <div className="p-12 rounded-3xl bg-emerald-600 text-white">
            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
            <p className="text-emerald-100 text-lg leading-relaxed">
              To be the most trusted technology partner in the UK, recognised for our 
              unwavering commitment to client success and digital security.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "We operate with absolute transparency and honesty in all our dealings." },
              { title: "Excellence", desc: "We strive for the highest standards in every project we undertake." },
              { title: "Innovation", desc: "We constantly explore new technologies to keep our clients ahead." }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="p-12 rounded-3xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0">
            <Lock className="w-20 h-20 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Commitment to GDPR & Security</h3>
            <p className="text-slate-600 leading-relaxed">
              Data privacy is at the core of everything we do. We are fully GDPR compliant 
              and maintain rigorous security protocols to ensure your business data and 
              your customers' information are protected at all times. We hold Cyber Essentials 
              Plus certification, demonstrating our commitment to national security standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  const plans: PricingPlan[] = [
    {
      name: "Essential Support",
      price: "£450",
      features: ["Business Hours Support", "Proactive Monitoring", "Endpoint Security", "Cloud Backup (100GB)", "Monthly Reporting"],
      support: "9am - 5:30pm Mon-Fri",
      idealFor: "Small businesses with up to 10 employees."
    },
    {
      name: "Professional",
      price: "£950",
      features: ["24/7 Critical Support", "Advanced Cybersecurity", "Vulnerability Scanning", "Cloud Backup (1TB)", "Strategic IT Roadmap", "Dedicated Account Manager"],
      support: "24/7 Emergency Response",
      idealFor: "Growing SMEs requiring high availability.",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Full Managed Infrastructure", "SIEM & SOC Monitoring", "Disaster Recovery as a Service", "Unlimited Cloud Storage", "On-site Support Included", "Compliance Management"],
      support: "24/7 Priority Support",
      idealFor: "Large organisations with complex IT needs."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Transparent Pricing</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Choose the plan that fits your business scale. All prices are subject to VAT at the prevailing rate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-10 rounded-3xl bg-white border ${plan.isPopular ? 'border-emerald-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500">{plan.idealFor}</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-500 ml-2">/month</span>}
              </div>
              <div className="mb-8 flex-grow">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">What's Included</h4>
                <ul className="space-y-4">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 border-t border-slate-100">
                <div className="mb-6">
                  <span className="text-xs font-bold text-slate-400 block mb-1">Support Level</span>
                  <span className="text-sm font-medium text-slate-900">{plan.support}</span>
                </div>
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Select Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-slate-500 text-sm">
          <p>* All plans require a minimum 12-month commitment. VAT is charged at 20%.</p>
          <p>Need a bespoke plan? <button className="text-emerald-600 font-bold hover:underline">Talk to our consultants</button>.</p>
        </div>
      </div>
    </div>
  );
};

const ContactUsPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have a question or ready to start your project? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-slate-600">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-emerald-600 font-bold hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity</option>
                    <option>Cloud Migration</option>
                    <option>IT Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"></textarea>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" required className="mt-1 mr-3 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-sm text-slate-500">
                    I consent to Cera Castleham Lodge processing my data in accordance with the <button type="button" className="text-emerald-600 hover:underline">Privacy Policy</button>.
                  </span>
                </div>
                <button type="submit" className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-4 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Registered Office</h4>
                      <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-4 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Phone</h4>
                      <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-4 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Email</h4>
                      <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-4 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Business Hours</h4>
                      <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-64 rounded-3xl bg-slate-100 overflow-hidden relative border border-slate-200">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 mx-auto mb-2 opacity-20" />
                    <p className="text-sm font-medium">Interactive Map Placeholder</p>
                    <p className="text-xs">St Leonards-on-Sea, East Sussex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LegalPage = ({ title, content }: { title: string, content: React.ReactNode }) => {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold mb-10 pb-6 border-b border-slate-100">{title}</h1>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'Home': return <HomePage setActivePage={setActivePage} />;
      case 'Services': return <ServicesPage />;
      case 'About Us': return <AboutUsPage />;
      case 'Pricing': return <PricingPage />;
      case 'Contact Us': return <ContactUsPage />;
      case 'Terms and Conditions': return (
        <LegalPage 
          title="Terms and Conditions" 
          content={
            <>
              <p>Welcome to Cera Castleham Lodge. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">1. Introduction</h3>
              <p>By accessing this website and our services, we assume you accept these terms and conditions in full. Do not continue to use Cera Castleham Lodge's services if you do not accept all of the terms and conditions stated on this page.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">2. Payment Terms</h3>
              <p>All prices are quoted in Great British Pounds (£). Invoices are issued monthly and are payable within 14 days of the invoice date. Late payments may incur interest at a rate of 8% above the Bank of England base rate.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">3. Intellectual Property</h3>
              <p>Unless otherwise stated, Cera Castleham Lodge and/or its licensors own the intellectual property rights for all material on Cera Castleham Lodge. All intellectual property rights are reserved.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">4. Confidentiality</h3>
              <p>We respect your privacy and confidentiality. Any information shared with us during the course of our services will be treated as strictly confidential and will not be disclosed to third parties without your prior consent, except as required by law.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">5. Limitation of Liability</h3>
              <p>Cera Castleham Lodge will not be liable for any indirect, special, or consequential loss or damage arising under these terms and conditions or in connection with our services.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">6. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
              <div className="mt-12 pt-8 border-t border-slate-100 text-sm">
                <p><strong>Company Name:</strong> {COMPANY_DETAILS.name}</p>
                <p><strong>Registered Office:</strong> {COMPANY_DETAILS.address}</p>
                <p><strong>CRN:</strong> {COMPANY_DETAILS.crn}</p>
              </div>
            </>
          } 
        />
      );
      case 'Privacy Policy': return (
        <LegalPage 
          title="Privacy Policy" 
          content={
            <>
              <p>This Privacy Policy describes how Cera Castleham Lodge collects, uses, and protects your personal data in compliance with the UK General Data Protection Regulation (GDPR).</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">1. Data We Collect</h3>
              <p>We may collect personal information such as your name, email address, phone number, and company details when you contact us or use our services.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">2. Purpose of Processing</h3>
              <p>We process your data to provide and improve our IT services, communicate with you regarding your enquiries, and fulfil our contractual obligations.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">3. Data Retention</h3>
              <p>We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy and to comply with our legal obligations.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">4. Your Rights</h3>
              <p>Under GDPR, you have the right to access, rectify, or erase your personal data, as well as the right to restrict or object to its processing. To exercise these rights, please contact us at {COMPANY_DETAILS.email}.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">5. Cookies</h3>
              <p>Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">6. Security Measures</h3>
              <p>We implement robust technical and organisational measures to protect your data from unauthorised access, loss, or disclosure.</p>
              <div className="mt-12 pt-8 border-t border-slate-100 text-sm">
                <p><strong>Data Controller:</strong> {COMPANY_DETAILS.name}</p>
                <p><strong>Contact:</strong> {COMPANY_DETAILS.email}</p>
                <p><strong>Registered Address:</strong> {COMPANY_DETAILS.address}</p>
              </div>
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
