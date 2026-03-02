import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Cloud, 
  Cpu, 
  Headset, 
  Database, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Info,
  ExternalLink,
  ChevronRight,
  Zap,
  Users,
  Building2,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Types ---

const COMPANY_DETAILS = {
  name: "South East Supported Living",
  address: "#####",
  crn: "#####",
  phone: "#####",
  email: "#####",
  hours: "#####"
};

type Page = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'terms' | 'privacy';

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About Us', value: 'about' },
    { label: 'Pricing', value: 'pricing' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => { setPage('home'); window.scrollTo(0, 0); }}
        >
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-brand-500/20 shadow-lg group-hover:scale-110 transition-transform">
            <Cpu size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-none tracking-tight text-slate-900">SESL</span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-600">IT Solutions</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => { setPage(item.value); window.scrollTo(0, 0); }}
              className={`text-sm font-medium transition-colors hover:text-brand-600 ${currentPage === item.value ? 'text-brand-600' : 'text-slate-600'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { setPage('contact'); window.scrollTo(0, 0); }}
            className="btn-primary py-2 px-5 text-sm"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-slate-200 p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => { setPage(item.value); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
                className={`text-lg font-medium text-left ${currentPage === item.value ? 'text-brand-600' : 'text-slate-600'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => { setPage('contact'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
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

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Cpu size={20} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">SESL IT</span>
          </div>
          <p className="text-sm leading-relaxed">
            Leading the way in British IT infrastructure and managed services. We empower UK businesses with secure, scalable, and innovative technology solutions.
          </p>
          <div className="flex gap-4">
            {/* Social Placeholders */}
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">
              <Globe size={18} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => { setPage('home'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Home</button></li>
            <li><button onClick={() => { setPage('services'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Services</button></li>
            <li><button onClick={() => { setPage('about'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">About Us</button></li>
            <li><button onClick={() => { setPage('pricing'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Pricing</button></li>
            <li><button onClick={() => { setPage('contact'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => { setPage('terms'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Terms & Conditions</button></li>
            <li><button onClick={() => { setPage('privacy'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Privacy Policy</button></li>
            <li><span className="text-slate-500">GDPR Compliance</span></li>
            <li><span className="text-slate-500">Cyber Essentials</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Contact Details</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-brand-500 shrink-0" />
              <span>{COMPANY_DETAILS.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-brand-500 shrink-0" />
              <span>{COMPANY_DETAILS.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-brand-500 shrink-0" />
              <span>{COMPANY_DETAILS.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-slate-900 text-xs flex flex-col md:flex-row justify-between gap-6 items-center">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="font-semibold text-slate-300">{COMPANY_DETAILS.name}</p>
          <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
          <p>Registered in England and Wales.</p>
        </div>
        <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-widest">
              <Zap size={14} />
              <span>Future-Proof Your Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
              Intelligent IT Solutions for <span className="text-brand-500">British Business</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              South East Supported Living provides enterprise-grade managed IT services, robust cybersecurity, and cloud transformation tailored for the UK's unique regulatory landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setPage('services')} className="btn-primary flex items-center gap-2">
                Explore Services <ArrowRight size={18} />
              </button>
              <button onClick={() => setPage('contact')} className="btn-secondary !bg-transparent !text-white !border-slate-700 hover:!bg-slate-900">
                Book a Consultation
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">99.9%</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Uptime SLA</span>
              </div>
              <div className="w-px h-10 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">15min</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Avg Response</span>
              </div>
              <div className="w-px h-10 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">24/7</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">UK Support</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="Cybersecurity Operations" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-2xl border-slate-200/10 max-w-[280px] animate-bounce-slow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Security Active</p>
                  <p className="text-[10px] text-slate-400">Threat monitoring live</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-emerald-500" />
                </div>
                <p className="text-[10px] text-slate-500 text-right">85% Risk Reduction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Why British Businesses Trust SESL IT</h2>
            <p className="text-slate-600 text-lg">We combine global technology standards with local expertise to deliver results that matter to your bottom line.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="text-brand-600" />, 
                title: "Local UK Support", 
                desc: "No offshore call centres. Speak directly with our London-based engineering team any time of day." 
              },
              { 
                icon: <Shield className="text-brand-600" />, 
                title: "GDPR & Compliance", 
                desc: "We ensure your data handling meets strict UK GDPR and Cyber Essentials Plus standards." 
              },
              { 
                icon: <Zap className="text-brand-600" />, 
                title: "Rapid Deployment", 
                desc: "Scale your infrastructure in days, not months, with our automated cloud provisioning tools." 
              }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="text-brand-600 font-bold uppercase tracking-widest text-sm">Case Study: Financial Services</div>
              <h2 className="text-4xl font-bold text-slate-900">Saving £45,000 Annually Through Cloud Consolidation</h2>
              <p className="text-slate-600 text-lg">
                A mid-sized London wealth management firm was struggling with legacy on-premise servers and mounting maintenance costs. We migrated their entire operation to a secure Azure environment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-3xl font-bold text-brand-600">£45k</p>
                  <p className="text-sm text-slate-500">Annual Savings</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-3xl font-bold text-brand-600">100%</p>
                  <p className="text-sm text-slate-500">Remote Ready</p>
                </div>
              </div>
              <button onClick={() => setPage('services')} className="flex items-center gap-2 font-bold text-brand-600 hover:gap-4 transition-all">
                Read Full Story <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "James Harrison", role: "CEO, Kent Logistics", text: "SESL IT transformed our operations. Their proactive approach to security has given us peace of mind we never had before." },
              { name: "Sarah Miller", role: "Director, London Creative", text: "The support team is incredible. They speak plain English and solve issues before we even notice them." },
              { name: "David Thompson", role: "IT Manager, Surrey Health", text: "Reliable, professional, and deeply knowledgeable about UK compliance. Highly recommended for any regulated business." }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50">
                <p className="italic text-slate-600 mb-6 font-medium">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center font-bold text-brand-700">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Elevate Your IT?</h2>
          <p className="text-xl text-brand-100">Join 200+ UK businesses that rely on South East Supported Living for their technology needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setPage('contact')} className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-brand-50 transition-all">
              Contact Our Experts
            </button>
            <button onClick={() => setPage('pricing')} className="bg-brand-700 text-white border border-brand-500 px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-all">
              View Pricing Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity & Compliance",
      overview: "Comprehensive protection against evolving digital threats, ensuring your business stays secure and compliant.",
      audience: "Financial services, legal firms, and data-sensitive SMEs.",
      process: ["Audit & Assessment", "Implementation", "24/7 Monitoring", "Incident Response"],
      benefits: ["Reduced risk of data breaches", "Cyber Essentials certification support", "Peace of mind"],
      price: "£499"
    },
    {
      icon: <Cloud size={32} />,
      title: "Managed Cloud Infrastructure",
      overview: "Scalable cloud solutions using Azure and AWS, optimized for performance and cost-efficiency.",
      audience: "Growing businesses needing flexible infrastructure.",
      process: ["Cloud Strategy", "Migration", "Optimization", "Ongoing Management"],
      benefits: ["Lower hardware costs", "Enhanced remote collaboration", "Automatic scaling"],
      price: "£299"
    },
    {
      icon: <Headset size={32} />,
      title: "24/7 Managed IT Support",
      overview: "Unlimited remote and on-site support from our expert UK-based helpdesk.",
      audience: "Any business requiring reliable IT uptime.",
      process: ["Helpdesk Access", "Remote Resolution", "On-site Visits", "Proactive Maintenance"],
      benefits: ["Zero downtime", "Predictable monthly costs", "Expert advice on tap"],
      price: "£35"
    },
    {
      icon: <Database size={32} />,
      title: "Disaster Recovery & Backup",
      overview: "Robust data backup and recovery plans to ensure business continuity in any scenario.",
      audience: "Businesses where data loss is not an option.",
      process: ["Data Mapping", "Backup Setup", "Recovery Testing", "Off-site Storage"],
      benefits: ["Fast recovery times", "Data redundancy", "Regulatory compliance"],
      price: "£149"
    },
    {
      icon: <Building2 size={32} />,
      title: "IT Consultancy & Strategy",
      overview: "Strategic technology roadmaps aligned with your long-term business goals.",
      audience: "Leadership teams planning digital transformation.",
      process: ["Business Analysis", "Tech Roadmap", "Budget Planning", "Project Management"],
      benefits: ["Aligned IT spend", "Future-proofed tech", "Competitive advantage"],
      price: "£850"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h1 className="text-5xl font-bold mb-6 text-slate-900">Our IT Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl">Expertly managed technology solutions designed to help your business thrive in the digital age.</p>
        </div>

        <div className="space-y-12">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-8 p-8 md:p-12 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="lg:col-span-4 space-y-6">
                <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center">
                  {s.icon}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{s.title}</h2>
                <p className="text-slate-600 leading-relaxed">{s.overview}</p>
                <div className="pt-4">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Starting From</p>
                  <p className="text-4xl font-bold text-brand-600">{s.price}<span className="text-sm text-slate-500 font-normal">/mo</span></p>
                </div>
              </div>

              <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Users size={18} className="text-brand-500" /> Target Audience
                    </h4>
                    <p className="text-sm text-slate-600">{s.audience}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Zap size={18} className="text-brand-500" /> Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {s.benefits.map((b, j) => (
                        <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 mt-1 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-4">Our Process</h4>
                  <div className="space-y-4">
                    {s.process.map((step, j) => (
                      <div key={j} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-brand-600">
                          0{j + 1}
                        </div>
                        <p className="text-sm font-medium text-slate-700">{step}</p>
                      </div>
                    ))}
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

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-slate-900">Empowering UK Business Through <span className="text-brand-600">Technology</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in London, South East Supported Living (SESL IT) was born from a simple mission: to make enterprise-grade IT accessible to businesses of all sizes across the UK.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-brand-600 font-bold text-4xl mb-2">10+</h3>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h3 className="text-brand-600 font-bold text-4xl mb-2">200+</h3>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Active Clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Team" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="p-10 rounded-3xl bg-brand-600 text-white space-y-4">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-brand-100 leading-relaxed">
              To provide innovative, secure, and reliable IT solutions that enable our clients to focus on what they do best, while we handle the complexities of their digital infrastructure.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-slate-900 text-white space-y-4">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              To be the UK's most trusted partner for IT managed services, recognized for our technical excellence, proactive support, and commitment to client success.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "Honest advice and transparent pricing, always." },
              { title: "Excellence", desc: "Striving for the highest technical standards." },
              { title: "Security", desc: "A security-first mindset in everything we do." },
              { title: "Innovation", desc: "Constantly evolving with the tech landscape." }
            ].map((v, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-bold text-xl text-slate-900">{v.title}</h3>
                <p className="text-slate-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Shield size={48} className="text-brand-600 mx-auto" />
            <h2 className="text-3xl font-bold text-slate-900">Commitment to GDPR</h2>
            <p className="text-slate-600 leading-relaxed">
              As a UK-based provider, compliance is in our DNA. We are fully committed to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We ensure all client data is processed securely, stored within compliant regions, and handled with the utmost confidentiality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  const plans = [
    {
      name: "Standard Support",
      price: "35",
      ideal: "Small businesses with basic IT needs.",
      features: [
        "Mon-Fri 9am-5pm Support",
        "Remote Helpdesk Access",
        "Basic Security Monitoring",
        "Monthly Health Reports",
        "1hr Response Time SLA"
      ],
      support: "Remote Only",
      cta: "Get Started"
    },
    {
      name: "Premium Managed",
      price: "75",
      popular: true,
      ideal: "Growing SMEs requiring proactive management.",
      features: [
        "24/7 Remote Support",
        "On-site Emergency Visits",
        "Advanced Threat Protection",
        "Cloud Backup Management",
        "15min Response Time SLA",
        "vCIO Strategic Planning"
      ],
      support: "Hybrid (Remote + On-site)",
      cta: "Choose Premium"
    },
    {
      name: "Enterprise Secure",
      price: "150",
      ideal: "Large organizations with complex compliance.",
      features: [
        "Dedicated Account Manager",
        "Full Security Operations (SOC)",
        "Compliance Management",
        "Disaster Recovery as a Service",
        "Unlimited On-site Support",
        "Custom API Integrations"
      ],
      support: "Full Priority Support",
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6 text-slate-900">Transparent Pricing</h1>
          <p className="text-xl text-slate-600">Scalable IT plans designed to fit your business size and budget. All prices exclude VAT.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-3xl border transition-all hover:shadow-2xl ${p.popular ? 'bg-slate-900 text-white border-brand-500 scale-105 z-10' : 'bg-white border-slate-100 text-slate-900'}`}
            >
              {p.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className={`text-sm ${p.popular ? 'text-slate-400' : 'text-slate-500'}`}>{p.ideal}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">£{p.price}</span>
                  <span className={`text-sm ${p.popular ? 'text-slate-400' : 'text-slate-500'}`}>/user/mo</span>
                </div>
                <p className="text-xs mt-2 opacity-60">+ VAT at current UK rate</p>
              </div>
              <div className="space-y-4 mb-10">
                <p className="font-bold text-sm uppercase tracking-widest opacity-60">What's Included:</p>
                <ul className="space-y-3">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${p.popular ? 'bg-brand-600 hover:bg-brand-700 text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Need a custom solution?</h3>
            <p className="text-slate-600">We offer bespoke packages for non-profits and multi-site corporations.</p>
          </div>
          <button className="btn-primary whitespace-nowrap">Request Custom Quote</button>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-slate-900">Get in Touch</h1>
              <p className="text-xl text-slate-600">Our UK-based experts are ready to help you solve your technology challenges.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Registered Office</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Call Us</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Email Us</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Headset size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Business Hours</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white">
              <h4 className="font-bold mb-4">Find Us on the Map</h4>
              <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                <p className="text-slate-500 text-sm">Interactive Map Placeholder</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-2xl">
            {submitted ? (
              <div className="text-center py-20 space-y-6">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Message Sent!</h2>
                <p className="text-slate-600">Thank you for contacting us. One of our IT specialists will be in touch within 15 minutes during business hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-brand-600 font-bold hover:underline">Send another message</button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" placeholder="Acme Ltd" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Work Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" placeholder="john@company.co.uk" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" placeholder="+44 7000 000000" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity</option>
                    <option>Cloud Migration</option>
                    <option>IT Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1 w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    I consent to South East Supported Living processing my data in accordance with the <button type="button" className="text-brand-600 hover:underline">Privacy Policy</button>.
                  </p>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg">Send Message</button>
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
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-12 text-slate-900">{title}</h1>
        <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-slate-600 prose-li:text-slate-600">
          {content}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'pricing': return <PricingPage />;
      case 'contact': return <ContactPage />;
      case 'terms': return (
        <LegalPage 
          title="Terms and Conditions" 
          content={
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">1. Introduction</h2>
                <p>These terms and conditions govern your use of the IT services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us"). By engaging our services, you agree to these terms in full.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">2. Services</h2>
                <p>We provide managed IT services, cybersecurity, and cloud solutions as described in our service level agreements (SLAs). Specific deliverables and performance metrics will be outlined in your individual contract.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">3. Payment Terms</h2>
                <p>All fees are quoted in Pounds Sterling (£) and exclude VAT. Invoices are issued monthly in advance and are payable within 14 days of the invoice date. Late payments may incur interest charges at 8% above the Bank of England base rate.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">4. Intellectual Property</h2>
                <p>Unless otherwise agreed in writing, all intellectual property rights in software, documentation, and materials created by us during the provision of services remain our property. You are granted a non-exclusive license to use such materials for your internal business purposes.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">5. Confidentiality</h2>
                <p>Both parties agree to keep confidential all information obtained from the other party that is designated as confidential or which should reasonably be considered confidential.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">6. Limitation of Liability</h2>
                <p>Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by you in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">7. Governing Law</h2>
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
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">1. Data Controller</h2>
                <p>{COMPANY_DETAILS.name} is the data controller for the personal data we process. Our registered office is at {COMPANY_DETAILS.address}.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">2. Types of Data Collected</h2>
                <p>We collect information necessary to provide our services, including: name, business email, phone number, job title, company name, and technical data related to your IT infrastructure.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">3. Purposes of Processing</h2>
                <p>We process your data to: provide and manage our services, communicate with you regarding support tickets, send service updates, and comply with legal obligations.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">4. Data Retention</h2>
                <p>We retain personal data for as long as necessary to fulfill the purposes for which it was collected, typically for the duration of our contract plus 6 years for tax and legal purposes.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">5. Your Rights</h2>
                <p>Under UK GDPR, you have the right to: access your data, rectify inaccuracies, request erasure, restrict processing, and object to processing. To exercise these rights, contact us at {COMPANY_DETAILS.email}.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">6. Security Measures</h2>
                <p>We implement industry-standard technical and organizational measures to protect your data, including encryption, multi-factor authentication, and regular security audits.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">7. Cookies</h2>
                <p>Our website uses essential cookies to ensure basic functionality. Analytical cookies are only used with your explicit consent.</p>
              </section>
            </div>
          } 
        />
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={page} setPage={setPage} />
      <main className="flex-grow">
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
