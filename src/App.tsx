/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Server, 
  Cloud, 
  Headset, 
  Network, 
  Briefcase, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  Users,
  Target,
  Award,
  Lock,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'terms' | 'privacy';

// --- Constants ---
const COMPANY_DETAILS = {
  name: "Centurion Support Services",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17048927",
  phone: "0149 470 6278",
  email: "info@centurionsupportservices.co.uk",
  hours: "Mon - Fri: 08:30 - 18:00",
};

// --- Components ---

const Navbar = ({ activePage, setPage }: { activePage: Page, setPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setPage('home')}>
            <Shield className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold tracking-tight text-slate-900">CENTURION</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  activePage === item.id ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setPage('contact')}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm shadow-blue-200"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setPage(item.id); setIsOpen(false); }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => { setPage('contact'); setIsOpen(false); }}
                className="w-full mt-4 bg-blue-600 text-white px-3 py-4 rounded-md text-base font-semibold"
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

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center text-white mb-6">
              <Shield className="h-7 w-7 text-blue-500 mr-2" />
              <span className="text-xl font-bold tracking-tight">CENTURION</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Providing enterprise-grade IT solutions and strategic support to businesses across the United Kingdom. Your credible partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs font-bold">in</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs font-bold">X</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setPage('services')} className="hover:text-white transition-colors">Managed IT Support</button></li>
              <li><button onClick={() => setPage('services')} className="hover:text-white transition-colors">Cyber Security</button></li>
              <li><button onClick={() => setPage('services')} className="hover:text-white transition-colors">Cloud Solutions</button></li>
              <li><button onClick={() => setPage('services')} className="hover:text-white transition-colors">Network Infrastructure</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setPage('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setPage('pricing')} className="hover:text-white transition-colors">Pricing Plans</button></li>
              <li><button onClick={() => setPage('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
              <li><button onClick={() => setPage('terms')} className="hover:text-white transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => setPage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
                <span>{COMPANY_DETAILS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
            <p className="mt-1 text-slate-500">Registered in England & Wales | CRN: {COMPANY_DETAILS.crn}</p>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => setPage('privacy')} className="hover:text-white">Privacy</button>
            <button onClick={() => setPage('terms')} className="hover:text-white">Terms</button>
            <button onClick={() => setPage('contact')} className="hover:text-white">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Trusted UK IT Partner
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Empowering British Business Through <span className="text-blue-600">Smart IT.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                Centurion Support Services provides proactive managed IT, robust cyber security, and strategic cloud solutions tailored for the UK market.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => setPage('services')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center shadow-lg shadow-blue-200"
                >
                  Explore Services <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => setPage('contact')}
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </button>
              </div>
              <div className="mt-12 flex items-center space-x-8 opacity-50 grayscale">
                {/* Placeholder logos */}
                <div className="font-bold text-xl">TRUSTED</div>
                <div className="font-bold text-xl">SECURE</div>
                <div className="font-bold text-xl">RELIABLE</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-office/800/600" 
                  alt="Modern IT Office" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-green-50 rounded-lg mr-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">99.9% Uptime Guarantee</span>
                </div>
                <p className="text-xs text-slate-500">Enterprise-grade reliability for your critical business infrastructure.</p>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Centurion?</h2>
            <p className="text-slate-600">We don't just fix computers; we build the technological foundation that allows your business to scale securely and efficiently.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Shield className="h-8 w-8 text-blue-600" />, 
                title: "Security First", 
                desc: "Cyber security isn't an add-on; it's baked into every solution we provide." 
              },
              { 
                icon: <Headset className="h-8 w-8 text-blue-600" />, 
                title: "UK-Based Support", 
                desc: "Real people, real expertise, right here in the UK. No offshore call centres." 
              },
              { 
                icon: <Target className="h-8 w-8 text-blue-600" />, 
                title: "Strategic Focus", 
                desc: "We align your IT roadmap with your business goals to drive measurable ROI." 
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all group">
                <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-slate-400 mb-10 text-lg">Our expertise spans across diverse sectors, ensuring compliance and efficiency regardless of your field.</p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Legal & Professional",
                  "Financial Services",
                  "Manufacturing",
                  "Healthcare",
                  "Education",
                  "Non-Profit"
                ].map((industry, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/industry1/400/300" alt="Industry" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/industry2/400/300" alt="Industry" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Measurable Results</h2>
              <p className="text-slate-600">Real-world impact for our UK clients. We deliver efficiency that translates directly to the bottom line.</p>
            </div>
            <button onClick={() => setPage('services')} className="mt-6 md:mt-0 text-blue-600 font-bold flex items-center hover:underline">
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
              <div className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Financial Sector</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Infrastructure Overhaul for London Wealth Manager</h3>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">£45k</div>
                  <div className="text-sm text-slate-500">Annual Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">100%</div>
                  <div className="text-sm text-slate-500">Compliance Score</div>
                </div>
              </div>
              <p className="text-slate-600 mb-8">Migrated legacy on-premise servers to a secure private cloud, reducing hardware maintenance costs and enabling secure remote work for 50+ staff.</p>
              <button onClick={() => setPage('contact')} className="text-slate-900 font-bold flex items-center hover:text-blue-600 transition-colors">
                Read Case Study <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
              <div className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Manufacturing</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Cyber Security Response & Hardening</h3>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">£120k</div>
                  <div className="text-sm text-slate-500">Potential Loss Averted</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">&lt;2h</div>
                  <div className="text-sm text-slate-500">Recovery Time</div>
                </div>
              </div>
              <p className="text-slate-600 mb-8">Implemented advanced endpoint protection and multi-factor authentication across three UK sites after a near-miss phishing attempt.</p>
              <button onClick={() => setPage('contact')} className="text-slate-900 font-bold flex items-center hover:text-blue-600 transition-colors">
                Read Case Study <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Graham",
                role: "Operations Director, Graham & Co",
                quote: "Centurion transformed our IT from a constant headache into a strategic asset. Their response times are exceptional."
              },
              {
                name: "Sarah Jenkins",
                role: "CEO, Bright Future Ltd",
                quote: "The peace of mind knowing our data is secure and GDPR compliant is invaluable. Highly recommend their cyber security audit."
              },
              {
                name: "David Thompson",
                role: "IT Manager, Northern Logistics",
                quote: "A truly professional team that understands the UK business landscape. Their cloud migration was seamless and on budget."
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Secure Your Digital Future?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Join hundreds of UK businesses that trust Centurion for their IT support and strategy.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => setPage('contact')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all"
                >
                  Contact Us Today
                </button>
                <button 
                  onClick={() => setPage('pricing')}
                  className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all"
                >
                  View Pricing
                </button>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ setPage }: { setPage: (p: Page) => void }) => {
  const services = [
    {
      icon: <Headset className="h-10 w-10" />,
      title: "Managed IT Support",
      overview: "Comprehensive 24/7 monitoring and helpdesk support for your entire team.",
      audience: "SMEs looking for a reliable, outsourced IT department.",
      process: ["Audit", "Onboarding", "Continuous Monitoring", "Monthly Reviews"],
      benefits: ["Reduced Downtime", "Predictable Costs", "Expert Helpdesk"],
      price: "£25"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Cyber Security & Compliance",
      overview: "Advanced threat protection, vulnerability assessments, and GDPR compliance audits.",
      audience: "Businesses handling sensitive data or requiring Cyber Essentials certification.",
      process: ["Risk Assessment", "Implementation", "Staff Training", "Ongoing Audits"],
      benefits: ["Data Protection", "Legal Compliance", "Peace of Mind"],
      price: "£45"
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Migration & Strategy",
      overview: "Seamless transition to Microsoft 365, Azure, or private cloud environments.",
      audience: "Companies looking to modernise infrastructure and enable remote work.",
      process: ["Strategy", "Migration Planning", "Execution", "Post-Migration Support"],
      benefits: ["Scalability", "Cost Efficiency", "Remote Accessibility"],
      price: "£500"
    },
    {
      icon: <Network className="h-10 w-10" />,
      title: "Network Infrastructure",
      overview: "Design and implementation of high-speed, secure wired and wireless networks.",
      audience: "New office fit-outs or businesses experiencing slow connectivity.",
      process: ["Site Survey", "Design", "Hardware Installation", "Testing"],
      benefits: ["High Performance", "Reliable Connectivity", "Future-Proofing"],
      price: "£1,200"
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Business Continuity",
      overview: "Robust backup solutions and disaster recovery planning to keep you operational.",
      audience: "Critical businesses where downtime is not an option.",
      process: ["Impact Analysis", "Backup Setup", "Recovery Testing", "Plan Maintenance"],
      benefits: ["Zero Data Loss", "Rapid Recovery", "Risk Mitigation"],
      price: "£150"
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "IT Consultancy",
      overview: "Strategic technology advice to align your IT with long-term business goals.",
      audience: "Leadership teams planning digital transformation or expansion.",
      process: ["Discovery", "Analysis", "Strategic Roadmap", "Implementation Oversight"],
      benefits: ["Strategic Alignment", "Informed Decisions", "Competitive Edge"],
      price: "£150"
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Core Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tailored IT solutions designed to solve complex business challenges and drive growth in the UK market.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{service.overview}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-2">Target Audience:</h4>
                    <p className="text-slate-600">{service.audience}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Process Steps:</h4>
                      <ul className="space-y-2">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-center text-sm text-slate-600">
                            <ChevronRight className="h-4 w-4 text-blue-500 mr-2" /> {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-sm text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <span className="text-sm text-slate-500 block">Starting from</span>
                      <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                      <span className="text-sm text-slate-500"> {service.title === 'Managed IT Support' || service.title === 'Cyber Security & Compliance' ? '/user/mo' : service.title === 'IT Consultancy' ? '/hr' : 'project'}</span>
                    </div>
                    <button onClick={() => setPage('contact')} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                      Enquire Now
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                    <img 
                      src={`https://picsum.photos/seed/service-${idx}/800/600`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
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

const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">Built on Trust, Driven by <span className="text-blue-500">Excellence.</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Centurion Support Services was founded with a single mission: to provide UK businesses with the enterprise-grade IT infrastructure they deserve, without the enterprise complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Established in 2015, Centurion began as a small team of dedicated engineers in London. We saw a gap in the market for an IT provider that combined technical brilliance with a deep understanding of the British business landscape.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Today, we support hundreds of businesses across the UK, from high-growth startups in Shoreditch to established manufacturing firms in the Midlands. Our growth has been fueled by one thing: the success of our clients.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Clients Supported</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/team/800/600" alt="Our Team" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-lg font-bold">"Your success is our only metric."</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100">
              <Target className="h-10 w-10 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">To empower UK businesses by providing secure, scalable, and innovative IT solutions that drive efficiency and growth.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100">
              <Award className="h-10 w-10 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">To be the UK's most trusted IT partner, known for our technical integrity, proactive support, and commitment to client success.</p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Integrity", desc: "Honest advice, even when it's not the easiest path." },
                { title: "Proactivity", desc: "Solving problems before they impact your business." },
                { title: "Excellence", desc: "Striving for the highest standards in every ticket." },
                { title: "Security", desc: "Protecting your data as if it were our own." }
              ].map((v, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h4>
                  <p className="text-slate-600 text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-10 lg:p-16 border border-slate-100">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">GDPR & Compliance Commitment</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  In the modern digital landscape, compliance isn't optional. We are fully committed to the UK GDPR and Data Protection Act 2018. Our internal processes, data handling, and client solutions are all designed with "Privacy by Design" at their core.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700">
                    <Shield className="h-4 w-4 text-green-600 mr-2" /> Cyber Essentials Certified
                  </div>
                  <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700">
                    <Lock className="h-4 w-4 text-green-600 mr-2" /> GDPR Compliant
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center text-white text-center p-6 shadow-xl">
                  <div>
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-xs font-medium uppercase tracking-wider">Compliance Record</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PricingPage = ({ setPage }: { setPage: (p: Page) => void }) => {
  const plans = [
    {
      name: "Essential Support",
      price: "250",
      desc: "Perfect for small teams needing reliable helpdesk support.",
      features: [
        "Mon-Fri 9-5 Helpdesk",
        "Remote Support",
        "Endpoint Antivirus",
        "Basic Patch Management",
        "Monthly Health Report"
      ],
      support: "8-hour SLA",
      ideal: "Startups & Micro-businesses",
      popular: false
    },
    {
      name: "Professional IT",
      price: "750",
      desc: "Comprehensive management for growing UK businesses.",
      features: [
        "24/7 Critical Monitoring",
        "Unlimited Remote Support",
        "Advanced Cyber Security",
        "Backup Management",
        "Quarterly Strategy Reviews",
        "On-site Support (Inclusive)"
      ],
      support: "4-hour SLA",
      ideal: "Growing SMEs (10-50 staff)",
      popular: true
    },
    {
      name: "Enterprise Managed",
      price: "1,500",
      desc: "Full-scale IT department for complex organisations.",
      features: [
        "Dedicated Account Manager",
        "24/7/365 Helpdesk Access",
        "SIEM & SOC Monitoring",
        "Disaster Recovery Planning",
        "Unlimited On-site Support",
        "IT Director Consultancy"
      ],
      support: "1-hour Critical SLA",
      ideal: "Large Firms & Multi-site Ops",
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Transparent Pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No hidden fees. No complex contracts. Just straightforward IT support tailored to your business size.
          </p>
          <p className="mt-4 text-sm text-slate-500 italic">* All prices are subject to VAT at the prevailing rate.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-sm'} flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm h-10">{plan.desc}</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500"> /month</span>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-start text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-slate-100 space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Support Level:</span>
                    <span className="font-bold text-slate-900">{plan.support}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Ideal For:</span>
                    <span className="font-bold text-slate-900">{plan.ideal}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setPage('contact')}
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-slate-50 rounded-3xl p-10 text-center border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">For larger enterprises or specific project-based work, we offer bespoke pricing models. Contact our consultancy team for a detailed proposal.</p>
            <button onClick={() => setPage('contact')} className="text-blue-600 font-bold flex items-center mx-auto hover:underline">
              Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question or ready to start your IT journey? Our London-based team is here to help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-xl mr-6">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-xl mr-6">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-xl mr-6">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-xl mr-6">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden h-64 bg-slate-100 border border-slate-200 relative">
                {/* Map Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col">
                  <MapPin className="h-10 w-10 mb-2" />
                  <span className="font-medium">Interactive Map Placeholder</span>
                  <span className="text-xs">City Road, London</span>
                </div>
                <img src="https://picsum.photos/seed/london-map/800/400?grayscale" alt="Map" className="w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
              </div>
            </div>

            <div className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for contacting Centurion. One of our specialists will be in touch within 2 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-600 font-bold hover:underline">Send another message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@company.co.uk" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Acme Ltd" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                      <option>Managed IT Support</option>
                      <option>Cyber Security Audit</option>
                      <option>Cloud Migration</option>
                      <option>Network Infrastructure</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
                  </div>
                  <div className="flex items-start">
                    <input required type="checkbox" className="mt-1 mr-3 h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
                    <span className="text-xs text-slate-500 leading-relaxed">
                      I consent to Centurion Support Services processing my data in accordance with the <button type="button" className="text-blue-600 hover:underline">Privacy Policy</button>. We will never share your details with third parties for marketing.
                    </span>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
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

const LegalPage = ({ title, content }: { title: string, content: React.ReactNode }) => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
          <p className="text-sm text-slate-500 mt-2">Last Updated: February 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          {content}
        </div>
      </section>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'services': return <ServicesPage setPage={setPage} />;
      case 'about': return <AboutPage />;
      case 'pricing': return <PricingPage setPage={setPage} />;
      case 'contact': return <ContactPage />;
      case 'terms': return (
        <LegalPage 
          title="Terms and Conditions" 
          content={
            <div className="space-y-8 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p>These terms and conditions govern your use of the services provided by {COMPANY_DETAILS.name} ("the Company"). By engaging our services, you agree to be bound by these terms in full. Our registered office is located at {COMPANY_DETAILS.address}.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">2. Services</h2>
                <p>The Company provides managed IT support, cyber security, cloud migration, and IT consultancy services. The specific scope of work will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW) provided to the client.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
                <p>All fees are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate. Monthly support fees are payable in advance via Direct Debit. Project-based work requires a 50% deposit upon commencement, with the balance due upon completion. Late payments may incur interest at a rate of 8% above the Bank of England base rate.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
                <p>Unless otherwise agreed in writing, all intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company. The Client is granted a non-exclusive, non-transferable licence to use such materials for their internal business purposes.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
                <p>Both parties agree to maintain the confidentiality of any proprietary information disclosed during the term of the agreement. This obligation survives the termination of the agreement for a period of five years.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, the Company's total liability for any claim arising under these terms shall not exceed the total fees paid by the Client in the twelve months preceding the claim. We do not exclude liability for death or personal injury caused by our negligence.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
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
                <h2 className="text-xl font-bold text-slate-900 mb-4">1. Data Collection</h2>
                <p>We collect personal data that you provide directly to us, including your name, email address, phone number, and company details when you enquire about our services. We also collect technical data such as IP addresses and cookie information through your use of our website.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">2. Processing Purposes</h2>
                <p>We process your data to: (a) provide and manage our IT services; (b) respond to your enquiries; (c) comply with legal obligations; and (d) improve our website and service offerings. The legal basis for processing is either the performance of a contract or our legitimate business interests.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">3. Data Retention</h2>
                <p>We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years following the termination of a contract.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">4. Subject Rights</h2>
                <p>Under the UK GDPR, you have the right to: (a) access your personal data; (b) request correction or erasure; (c) object to processing; (d) request data portability; and (e) withdraw consent. To exercise these rights, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">5. Cookies</h2>
                <p>Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings. Essential cookies are required for the website to function correctly.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">6. Security Measures</h2>
                <p>We implement robust technical and organisational measures to protect your data, including encryption, firewalls, and secure access controls. Our staff undergo regular data protection training.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4">7. Contact</h2>
                <p>If you have any questions about this policy, please contact us at {COMPANY_DETAILS.name}, {COMPANY_DETAILS.address} or email {COMPANY_DETAILS.email}.</p>
              </section>
            </div>
          } 
        />
      );
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar activePage={page} setPage={setPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}
