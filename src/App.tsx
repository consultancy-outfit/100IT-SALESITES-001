import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Cloud, 
  Cpu, 
  Headset, 
  BarChart3, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Linkedin,
  Twitter,
  ExternalLink,
  Clock,
  Lock,
  Zap,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_DETAILS, NAV_LINKS, LEGAL_LINKS } from './constants';
import { Logo } from './assets';

// --- Components ---

const Header = ({ activePage, setActivePage }: { activePage: string, setActivePage: (id: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => setActivePage('home')}
        >
          <img src={Logo} alt="Marram Green" className="h-20 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${activePage === link.id ? 'text-brand-primary' : 'text-slate-600'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => setActivePage('contact')}
            className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-secondary transition-all shadow-md hover:shadow-lg"
          >
            Get a Quote
          </button>
        </nav>

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
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => { setActivePage(link.id); setIsMobileMenuOpen(false); }}
                  className={`text-lg font-medium text-left ${activePage === link.id ? 'text-brand-primary' : 'text-slate-600'}`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => { setActivePage('contact'); setIsMobileMenuOpen(false); }}
                className="bg-brand-primary text-white px-6 py-3 rounded-xl text-center font-semibold"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (id: string) => void }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center text-white">
              <img src={Logo} alt="Marram Green" className="h-20 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed">
              Empowering UK businesses through innovative IT solutions, robust cybersecurity, and scalable cloud infrastructure. Your trusted technology partner in London.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <button onClick={() => setActivePage(link.id)} className="hover:text-brand-accent transition-colors">{link.name}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone size={18} className="text-brand-accent shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-brand-accent shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-brand-accent shrink-0" />
                <span>{COMPANY_DETAILS.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Registered Office</h4>
            <div className="flex gap-3 text-sm mb-4">
              <MapPin size={18} className="text-brand-accent shrink-0" />
              <span>{COMPANY_DETAILS.address}</span>
            </div>
            <p className="text-xs text-slate-500">
              Company Registration Number: {COMPANY_DETAILS.crn}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name} Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map(link => (
              <button key={link.id} onClick={() => setActivePage(link.id)} className="hover:text-white transition-colors">
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Content ---

const HomePage = ({ setActivePage }: { setActivePage: (id: string) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-slate-50 -z-10" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              Trusted IT Partner for UK SMEs
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Next-Generation <span className="text-brand-primary">IT Solutions</span> for Modern Business
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Marram Green provides enterprise-grade IT services, cybersecurity, and cloud infrastructure tailored for the British market. We help you scale with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setActivePage('services')}
                className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-secondary transition-all flex items-center gap-2 shadow-lg shadow-brand-primary/20"
              >
                Explore Services <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setActivePage('contact')}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
              >
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
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">99.9%</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Uptime Guaranteed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Marram Green?</h2>
            <p className="text-slate-600">We combine technical excellence with a deep understanding of the UK business landscape to deliver results that matter.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={32} />, title: "Cybersecurity First", desc: "Our 'Secure by Design' approach ensures your data and infrastructure are protected against evolving threats." },
              { icon: <Headset size={32} />, title: "24/7 UK Support", desc: "Our London-based helpdesk is always ready to assist, ensuring minimal downtime for your operations." },
              { icon: <BarChart3 size={32} />, title: "Strategic Growth", desc: "We don't just fix problems; we provide IT roadmaps that align with your long-term business goals." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 hover:bg-brand-primary hover:text-white transition-all duration-300 group">
                <div className="mb-6 text-brand-primary group-hover:text-white transition-colors">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 group-hover:text-slate-100 transition-colors leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-slate-600">Specialised IT solutions for diverse sectors across the United Kingdom.</p>
            </div>
            <button onClick={() => setActivePage('services')} className="text-brand-primary font-bold flex items-center gap-2 hover:underline">
              View all sectors <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Financial Services', 'Legal & Professional', 'Healthcare', 'Manufacturing', 'Retail & E-commerce', 'Non-Profit', 'Education', 'Construction'].map((industry, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 hover:shadow-md transition-all">
                <div className="w-2 h-2 rounded-full bg-brand-accent" />
                <span className="font-medium text-slate-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-[3rem] p-8 md:p-16 text-white relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <BarChart3 size={200} />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-brand-accent/20 text-brand-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Case Study</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Saving £45,000 Annually for a London Law Firm</h2>
                <p className="text-brand-accent/90 text-lg mb-8 leading-relaxed">
                  We migrated a 50-user legal practice to a fully managed cloud environment, reducing hardware costs and increasing billable efficiency.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <p className="text-3xl font-bold mb-1">35%</p>
                    <p className="text-sm text-brand-accent/70">Efficiency Increase</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1">£45k</p>
                    <p className="text-sm text-brand-accent/70">Annual IT Savings</p>
                  </div>
                </div>
                <button onClick={() => setActivePage('contact')} className="bg-brand-accent text-brand-primary px-8 py-4 rounded-xl font-bold hover:bg-white transition-all">
                  Read Full Story
                </button>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800" 
                  alt="Case Study" 
                  className="rounded-2xl shadow-2xl rotate-3"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alistair Graham", role: "CEO, Graham & Co", text: "Marram Green transformed our IT infrastructure. Their proactive approach to security has given us peace of mind." },
              { name: "Sarah Jenkins", role: "Operations Director", text: "The support team is exceptional. Issues are resolved in minutes, not hours. Highly recommended for any UK business." },
              { name: "David Thompson", role: "Founder, TechFlow", text: "Professional, knowledgeable, and reliable. They truly understand the needs of a growing company in London." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-1 text-brand-accent mb-6">
                  {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full" />
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Modernise Your IT?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of UK businesses that trust Marram Green for their technology needs. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => setActivePage('contact')} className="bg-brand-accent text-brand-primary px-10 py-4 rounded-xl font-bold hover:bg-white transition-all">
                Get Started Today
              </button>
              <button onClick={() => setActivePage('pricing')} className="bg-transparent border border-slate-700 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Managed IT Support",
      icon: <Headset size={40} />,
      overview: "Comprehensive 24/7 IT management for your entire business infrastructure.",
      target: "SMEs looking for a reliable outsourced IT department.",
      process: ["Audit", "Onboarding", "Monitoring", "Proactive Support"],
      benefits: "Reduced downtime, fixed monthly costs, expert guidance.",
      price: "£250"
    },
    {
      title: "Cybersecurity Solutions",
      icon: <Shield size={40} />,
      overview: "Advanced threat protection, endpoint security, and employee training.",
      target: "Businesses handling sensitive client data or under regulatory compliance.",
      process: ["Vulnerability Scan", "Firewall Setup", "EDR Deployment", "Training"],
      benefits: "GDPR compliance, data protection, peace of mind.",
      price: "£400"
    },
    {
      title: "Cloud Infrastructure",
      icon: <Cloud size={40} />,
      overview: "Migration and management of Azure, AWS, or Private Cloud environments.",
      target: "Companies seeking scalability and remote work capabilities.",
      process: ["Cloud Strategy", "Migration", "Optimisation", "Management"],
      benefits: "Scalability, accessibility, cost-efficiency.",
      price: "£500"
    },
    {
      title: "Network & Connectivity",
      icon: <Globe size={40} />,
      overview: "High-speed business broadband, leased lines, and secure Wi-Fi solutions.",
      target: "Offices requiring stable, high-performance connectivity.",
      process: ["Site Survey", "Installation", "Configuration", "Maintenance"],
      benefits: "High-speed access, secure guest networks, redundancy.",
      price: "£150"
    },
    {
      title: "IT Consultancy & Strategy",
      icon: <BarChart3 size={40} />,
      overview: "Strategic technology roadmaps to align IT with your business goals.",
      target: "Leadership teams planning digital transformation or expansion.",
      process: ["Discovery", "Analysis", "Roadmap Creation", "Execution"],
      benefits: "Long-term ROI, competitive advantage, modernised stack.",
      price: "£1,000"
    },
    {
      title: "Disaster Recovery",
      icon: <Lock size={40} />,
      overview: "Robust backup solutions and business continuity planning.",
      target: "Any business that cannot afford more than 1 hour of downtime.",
      process: ["Risk Assessment", "Backup Setup", "Testing", "Recovery Drills"],
      benefits: "Business continuity, data resilience, risk mitigation.",
      price: "£300"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Tailored IT solutions designed to drive efficiency, security, and growth for UK businesses.
          </p>
        </div>

        <div className="grid gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 grid lg:grid-cols-3 gap-12"
            >
              <div className="lg:col-span-1">
                <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-6">{service.overview}</p>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Starting From</p>
                  <p className="text-3xl font-bold text-brand-primary">{service.price}<span className="text-sm font-normal text-slate-500"> / month</span></p>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Users size={18} className="text-brand-accent" /> Target Audience
                  </h3>
                  <p className="text-slate-600 text-sm">{service.target}</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Zap size={18} className="text-brand-accent" /> Key Benefits
                  </h3>
                  <p className="text-slate-600 text-sm">{service.benefits}</p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <h3 className="font-bold text-slate-900 mb-6">Our Process</h3>
                <div className="space-y-4">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-slate-700 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-brand-primary transition-all">
                  Inquire Now
                </button>
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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Crafting the Future of UK IT</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in London, Marram Green was born from a vision to bridge the gap between complex technology and practical business needs. We believe that IT should be an enabler of growth, not a source of frustration.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-brand-primary mb-2">10+</h3>
                <p className="text-sm text-slate-500">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-brand-primary mb-2">200+</h3>
                <p className="text-sm text-slate-500">Clients Supported</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Team Meeting" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="bg-brand-primary text-white p-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-brand-accent/80 text-lg leading-relaxed">
              To provide UK businesses with innovative, secure, and scalable technology solutions that drive sustainable growth and operational excellence.
            </p>
          </div>
          <div className="bg-slate-900 text-white p-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To be the leading technology partner for SMEs across the United Kingdom, recognised for our integrity, technical mastery, and commitment to client success.
            </p>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16">Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "We are honest, transparent, and always act in our clients' best interests." },
              { title: "Innovation", desc: "We stay ahead of the curve, bringing the latest tech to your business." },
              { title: "Excellence", desc: "We don't settle for 'good enough'. We strive for perfection in every task." },
              { title: "Reliability", desc: "When you need us, we're there. No excuses, just solutions." }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="font-bold mb-4">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-200">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="shrink-0">
              <Shield size={80} className="text-brand-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">GDPR & Compliance Commitment</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                As a UK-based IT provider, we take data protection seriously. We are fully compliant with the UK GDPR and the Data Protection Act 2018. Our internal processes and the solutions we build for clients are designed with privacy and security at their core.
              </p>
              <button className="text-brand-primary font-bold hover:underline">Download Compliance Statement</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  const tiers = [
    {
      name: "Essential Support",
      price: "£250",
      ideal: "Small businesses with up to 10 users.",
      features: [
        "Mon-Fri 9-5 Support",
        "Remote Helpdesk",
        "Basic Endpoint Security",
        "Cloud Backup (100GB)",
        "Monthly Health Check"
      ],
      support: "Standard (4h Response)",
      accent: false
    },
    {
      name: "Business Pro",
      price: "£550",
      ideal: "Growing SMEs with 10-50 users.",
      features: [
        "24/7 Monitoring",
        "Unlimited Remote Support",
        "Advanced Cybersecurity Stack",
        "Cloud Backup (500GB)",
        "Quarterly Strategy Review",
        "On-site Support Included"
      ],
      support: "Priority (1h Response)",
      accent: true
    },
    {
      name: "Enterprise Managed",
      price: "£1,200",
      ideal: "Large organisations with 50+ users.",
      features: [
        "Full Infrastructure Management",
        "Dedicated Account Manager",
        "vCISO Services",
        "Unlimited Cloud Storage",
        "Disaster Recovery Planning",
        "Custom Software Support"
      ],
      support: "Premium (30m Response)",
      accent: false
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, scalable plans designed for UK businesses of all sizes. All prices exclude VAT.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-[2.5rem] border transition-all duration-300 ${tier.accent ? 'bg-brand-primary text-white border-brand-primary shadow-2xl scale-105 z-10' : 'bg-white text-slate-900 border-slate-200 hover:border-brand-primary'}`}
            >
              {tier.accent && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-brand-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className={`text-sm ${tier.accent ? 'text-brand-accent/70' : 'text-slate-500'}`}>/ month</span>
              </div>
              <p className={`text-sm mb-8 ${tier.accent ? 'text-brand-accent/80' : 'text-slate-500'}`}>{tier.ideal}</p>
              
              <div className="space-y-4 mb-10">
                {tier.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className={tier.accent ? 'text-brand-accent' : 'text-brand-primary'} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className={`pt-6 border-t mb-10 ${tier.accent ? 'border-white/10' : 'border-slate-100'}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Support Level</p>
                <p className="font-semibold">{tier.support}</p>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.accent ? 'bg-brand-accent text-brand-primary hover:bg-white' : 'bg-slate-900 text-white hover:bg-brand-primary'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-slate-500 text-sm">
          <p>Need a custom plan? <button className="text-brand-primary font-bold hover:underline">Contact us for a bespoke quote</button></p>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Let's Talk Technology</h1>
            <p className="text-lg text-slate-600 mb-12">
              Have a question or ready to start your project? Our team is here to help you navigate your IT journey.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Visit Our Office</h3>
                  <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 bg-slate-200 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium italic">
                Interactive Map Placeholder (Leyton, London)
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" placeholder="john@company.co.uk" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Company Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" placeholder="Your Business Ltd" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all">
                  <option>Managed IT Support</option>
                  <option>Cybersecurity</option>
                  <option>Cloud Infrastructure</option>
                  <option>IT Consultancy</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded border-slate-300 text-brand-primary focus:ring-brand-primary" required />
                <p className="text-xs text-slate-500 leading-relaxed">
                  I consent to Marram Green processing my personal data in accordance with the <button className="text-brand-primary hover:underline">Privacy Policy</button>.
                </p>
              </div>
              <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const LegalPage = ({ type }: { type: 'terms' | 'privacy' }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">{type === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}</h1>
        <div className="prose prose-slate max-w-none">
          {type === 'terms' ? (
            <div className="space-y-8 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p>These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} Ltd, registered in England and Wales under company number {COMPANY_DETAILS.crn}. By engaging our services, you agree to these terms in full.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Payment Terms</h2>
                <p>All financial references and invoices are in Great British Pounds (GBP £). Payments are due within 14 days of the invoice date unless otherwise agreed in writing. Late payments may incur interest at a rate of 8% above the Bank of England base rate.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
                <p>Unless otherwise stated, {COMPANY_DETAILS.name} Ltd owns the intellectual property rights for all material produced during the delivery of services. All intellectual property rights are reserved.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Confidentiality</h2>
                <p>Both parties agree to maintain the confidentiality of any proprietary information shared during the course of the business relationship. This obligation survives the termination of any agreement.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
                <p>{COMPANY_DETAILS.name} Ltd shall not be liable for any indirect, special, or consequential loss or damage arising under these terms and conditions or in connection with our services.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              </section>
            </div>
          ) : (
            <div className="space-y-8 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Data Collection</h2>
                <p>We collect personal data such as names, email addresses, phone numbers, and company details when you interact with our website or services. This is done to provide and improve our IT solutions.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Processing Purposes</h2>
                <p>Data is processed for the purposes of service delivery, billing, customer support, and marketing (where consent is provided). We process data in accordance with the UK GDPR.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Retention</h2>
                <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Your Rights</h2>
                <p>Under the UK GDPR, you have the right to access, correct, or erase your personal data. You also have the right to object to or restrict processing. To exercise these rights, contact us at {COMPANY_DETAILS.email}.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies</h2>
                <p>Our website uses cookies to enhance user experience and analyse traffic. You can manage your cookie preferences through your browser settings.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Security Measures</h2>
                <p>We implement robust technical and organisational measures to protect your data against unauthorised access, loss, or destruction. This includes encryption, firewalls, and regular security audits.</p>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top on page change
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
      case 'terms': return <LegalPage type="terms" />;
      case 'privacy': return <LegalPage type="privacy" />;
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage={activePage} setActivePage={setActivePage} />
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
