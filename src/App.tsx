import React, { useState, useEffect } from 'react';
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
  ArrowRight, 
  Menu, 
  X, 
  Users, 
  Zap, 
  BarChart3, 
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Clock,
  Briefcase,
  Award,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'terms' | 'privacy';

// --- Constants ---
const COMPANY_DETAILS = {
  name: "Standon Gardens Domiciliary Services",
  address: "Not Available",
  crn: "Not Available",
  phone: "Not Available",
  email: "Not Available",
  hours: "Mon - Fri: 09:00 - 17:30",
};

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About Us', value: 'about' },
    { label: 'Pricing', value: 'pricing' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
        >
          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white group-hover:bg-brand-700 transition-colors">
            <Cpu size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-900 hidden sm:block">
            Standon Gardens <span className="text-brand-600">IT</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => { setCurrentPage(item.value); window.scrollTo(0, 0); }}
              className={`text-sm font-medium transition-colors hover:text-brand-600 ${currentPage === item.value ? 'text-brand-600' : 'text-slate-600'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }}
            className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => { setCurrentPage(item.value); setIsOpen(false); window.scrollTo(0, 0); }}
                  className={`text-lg font-medium text-left ${currentPage === item.value ? 'text-brand-600' : 'text-slate-600'}`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => { setCurrentPage('contact'); setIsOpen(false); window.scrollTo(0, 0); }}
                className="bg-brand-600 text-white px-6 py-3 rounded-xl text-center font-semibold"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white">
            <Cpu size={24} className="text-brand-500" />
            <span className="text-xl font-bold tracking-tight">Standon Gardens IT</span>
          </div>
          <p className="text-sm leading-relaxed">
            Empowering British businesses with world-class IT infrastructure, cybersecurity, and digital transformation services.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
              <a key={social} href="#" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                <Globe size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Home</button></li>
            <li><button onClick={() => { setCurrentPage('services'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Services</button></li>
            <li><button onClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">About Us</button></li>
            <li><button onClick={() => { setCurrentPage('pricing'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Pricing</button></li>
            <li><button onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => { setCurrentPage('terms'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Terms & Conditions</button></li>
            <li><button onClick={() => { setCurrentPage('privacy'); window.scrollTo(0, 0); }} className="hover:text-brand-400 transition-colors">Privacy Policy</button></li>
            <li><button className="hover:text-brand-400 transition-colors">Cookie Policy</button></li>
            <li><button className="hover:text-brand-400 transition-colors">GDPR Compliance</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company Details</h4>
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
            <li className="pt-2 text-xs opacity-60">
              CRN: {COMPANY_DETAILS.crn}
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
        <p>Registered in England & Wales. VAT Registration: Not Available</p>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding min-h-[90vh] flex items-center">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-100/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} />
              Trusted UK IT Partners
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
              Future-Proof Your <span className="text-brand-600">Digital Infrastructure</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Standon Gardens IT delivers enterprise-grade managed services, cybersecurity, and cloud solutions tailored for the modern British enterprise.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setCurrentPage('services')}
                className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all flex items-center gap-2 shadow-lg shadow-brand-200"
              >
                Explore Services <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
              >
                Book a Consultation
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
              <div className="font-bold text-slate-400">TRUSTED BY</div>
              <div className="flex gap-6">
                <div className="font-display font-bold text-xl">TECHCORP</div>
                <div className="font-display font-bold text-xl">UKLOGISTICS</div>
                <div className="font-display font-bold text-xl">FINSEC</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="Cybersecurity Operations" 
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 z-20 glass p-6 rounded-2xl shadow-xl max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div className="text-sm font-bold">99.9% Uptime</div>
              </div>
              <p className="text-xs text-slate-500">Guaranteed service availability for your critical business operations.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why British Businesses Choose Us</h2>
            <p className="text-slate-600">We combine local expertise with global technology standards to provide IT services that actually drive growth.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="text-brand-600" />,
                title: "Security First",
                desc: "Cybersecurity isn't an add-on; it's the foundation of everything we build and manage."
              },
              {
                icon: <Zap className="text-brand-600" />,
                title: "Rapid Response",
                desc: "Our UK-based support desk ensures you're never left waiting when critical issues arise."
              },
              {
                icon: <BarChart3 className="text-brand-600" />,
                title: "Strategic Growth",
                desc: "We align your IT roadmap with your business goals to ensure maximum ROI on tech spend."
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden text-white flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <div className="text-brand-400 font-bold text-sm uppercase tracking-widest mb-4">Case Study: Financial Services</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Modernising a London Fintech's Infrastructure
              </h2>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-brand-400">£1.2M</div>
                  <div className="text-sm text-slate-400">Annual Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-400">40%</div>
                  <div className="text-sm text-slate-400">Efficiency Increase</div>
                </div>
              </div>
              <p className="text-slate-400 mb-8">
                "Standon Gardens IT transformed our legacy systems into a high-performance cloud environment, allowing us to scale without the traditional overheads."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-brand-400">JW</div>
                <div>
                  <div className="font-bold">James Whittaker</div>
                  <div className="text-xs text-slate-500">CTO, Sterling Finance</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent lg:block hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Operations Director, Midlands Logistics",
                text: "The transition to managed IT services was seamless. Their team understands the unique challenges of UK logistics."
              },
              {
                name: "David Thorne",
                role: "Founder, Thorne & Co Solicitors",
                text: "Security is paramount for our firm. Standon Gardens IT provided a robust solution that keeps our client data safe."
              },
              {
                name: "Eleanor Rigby",
                role: "Head of IT, Liverpool Creative",
                text: "Finally, an IT partner that speaks our language. No jargon, just results and exceptional support."
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Globe key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-8">"{t.text}"</p>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto bg-brand-600 rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-900/20 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Ready to Elevate Your IT?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto relative z-10">
            Join hundreds of UK businesses that trust Standon Gardens IT for their technology needs.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-brand-600 px-10 py-4 rounded-xl font-bold hover:bg-brand-50 transition-all relative z-10 shadow-xl"
          >
            Contact Our Team Today
          </button>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: <Shield size={32} />,
      title: "Managed Cybersecurity",
      overview: "Comprehensive protection against evolving digital threats, tailored for UK regulatory standards.",
      audience: "SMEs and Enterprises handling sensitive client data.",
      process: ["Audit & Assessment", "Implementation", "24/7 Monitoring", "Incident Response"],
      benefits: ["GDPR Compliance", "Peace of Mind", "Reduced Risk"],
      price: "£499"
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Transformation",
      overview: "Seamless migration and management of your infrastructure to Azure, AWS, or Private Cloud.",
      audience: "Businesses looking to scale and reduce hardware costs.",
      process: ["Cloud Readiness Review", "Migration Strategy", "Deployment", "Optimization"],
      benefits: ["Scalability", "Cost Efficiency", "Remote Access"],
      price: "£850"
    },
    {
      icon: <Users size={32} />,
      title: "Managed IT Support",
      overview: "Proactive maintenance and rapid-response helpdesk for your entire team.",
      audience: "Any business requiring reliable day-to-day IT operations.",
      process: ["Onboarding", "Proactive Monitoring", "Helpdesk Support", "Quarterly Reviews"],
      benefits: ["Zero Downtime", "Expert Advice", "Fixed Monthly Costs"],
      price: "£35"
    },
    {
      icon: <Globe size={32} />,
      title: "Network Solutions",
      overview: "High-performance, secure networking for single or multi-site UK operations.",
      audience: "Distributed teams and multi-location businesses.",
      process: ["Site Survey", "Design", "Installation", "Management"],
      benefits: ["High Speed", "Reliability", "Secure Connectivity"],
      price: "£299"
    },
    {
      icon: <Lock size={32} />,
      title: "Backup & Disaster Recovery",
      overview: "Ensuring your business can recover from any data loss event within minutes.",
      audience: "Critical businesses where data loss is not an option.",
      process: ["Data Mapping", "Backup Setup", "Testing", "Recovery Planning"],
      benefits: ["Business Continuity", "Data Integrity", "Compliance"],
      price: "£150"
    },
    {
      icon: <Cpu size={32} />,
      title: "IT Consultancy",
      overview: "Strategic technology advice to align your IT with your long-term business goals.",
      audience: "Leadership teams planning digital transformation.",
      process: ["Discovery", "Strategic Planning", "Vendor Selection", "Project Oversight"],
      benefits: ["Strategic Alignment", "ROI Focus", "Expert Insight"],
      price: "£1,200"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Core Services</h1>
          <p className="text-xl text-slate-600">Specialised IT solutions designed to empower British businesses in a digital-first world.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-16 h-16 bg-brand-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-200">
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.overview}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Target Audience</h4>
                      <p className="text-sm text-slate-700">{service.audience}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Starting From</h4>
                      <p className="text-xl font-bold text-brand-600">{service.price}<span className="text-xs text-slate-400 font-normal"> / month</span></p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our Process</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, si) => (
                        <span key={si} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-100">{step}</span>
                      ))}
                    </div>
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
      <div className="max-w-7xl mx-auto px-6">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Crafting the Future of <span className="text-brand-600">British IT</span></h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between complex technology and practical business needs, Standon Gardens IT has grown into a leading managed services provider in the UK.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We believe that technology should be an enabler, not a barrier. Our team of dedicated engineers and strategists work tirelessly to ensure our clients have the tools they need to succeed in an increasingly digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-brand-600">15+</div>
                <div className="text-sm text-slate-500 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-600">200+</div>
                <div className="text-sm text-slate-500 font-medium">Active Clients</div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Team Meeting" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-8 rounded-2xl shadow-xl">
              <Award size={40} className="mb-4" />
              <div className="font-bold">Microsoft Solutions Partner</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield />, title: "Integrity", desc: "We act with honesty and transparency in every interaction, ensuring our clients' interests always come first." },
              { icon: <Zap />, title: "Innovation", desc: "We stay ahead of the curve, constantly exploring new technologies to provide the best solutions." },
              { icon: <Heart />, title: "Dedication", desc: "Our commitment to our clients goes beyond contracts; we are your partners in growth." }
            ].map((v, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                <div className="w-12 h-12 bg-white text-brand-600 rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alistair Standon", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
              { name: "Victoria Bloom", role: "CTO", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
              { name: "Marcus Thorne", role: "Head of Security", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
              { name: "Sophie Clarke", role: "Customer Success", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" }
            ].map((m, i) => (
              <div key={i} className="text-center">
                <img src={m.img} alt={m.name} className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg" referrerPolicy="no-referrer" />
                <h4 className="text-xl font-bold">{m.name}</h4>
                <p className="text-brand-600 text-sm font-medium">{m.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GDPR */}
        <div className="bg-slate-900 rounded-3xl p-12 text-white flex flex-col md:flex-row items-center gap-12">
          <div className="w-24 h-24 bg-brand-600 rounded-2xl flex items-center justify-center shrink-0">
            <Shield size={48} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Commitment to GDPR Compliance</h2>
            <p className="text-slate-400 leading-relaxed">
              At Standon Gardens IT, data protection is at the heart of our operations. We are fully committed to GDPR compliance, ensuring that all data handled by our systems is processed securely, transparently, and in accordance with UK data protection laws.
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
      ideal: "Small businesses starting out",
      features: [
        "Mon-Fri 9am-5pm Support",
        "Remote Helpdesk",
        "Antivirus Management",
        "Monthly Health Checks",
        "Basic Patch Management"
      ],
      support: "Next Business Day",
      cta: "Get Started"
    },
    {
      name: "Pro Managed",
      price: "75",
      ideal: "Growing teams needing reliability",
      popular: true,
      features: [
        "24/7 Monitoring",
        "Priority Helpdesk Access",
        "Advanced Cybersecurity Suite",
        "Daily Cloud Backups",
        "Strategic IT Planning",
        "On-site Support Included"
      ],
      support: "4 Hour Response",
      cta: "Choose Pro"
    },
    {
      name: "Enterprise Elite",
      price: "150",
      ideal: "Large organisations with complex needs",
      features: [
        "Dedicated Account Manager",
        "Full Security Operations Center",
        "Disaster Recovery as a Service",
        "Unlimited On-site Support",
        "Custom Cloud Infrastructure",
        "Compliance Auditing"
      ],
      support: "1 Hour Response",
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600">Simple, predictable monthly plans tailored to your business scale. All prices exclude VAT.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-[2rem] p-10 border ${plan.popular ? 'border-brand-500 shadow-xl relative' : 'border-slate-200 shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{plan.ideal}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">£{plan.price}</span>
                  <span className="text-slate-400 text-sm">/ user / month</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-10">
                {plan.features.map((f, fi) => (
                  <div key={fi} className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 mb-8">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Support Level</div>
                <div className="text-sm font-semibold text-slate-900">{plan.support}</div>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm mb-4 italic">* Custom project-based pricing available for one-off migrations and audits.</p>
          <div className="flex justify-center gap-8 grayscale opacity-50">
            <div className="flex items-center gap-2 font-bold"><Shield size={16} /> Cyber Essentials</div>
            <div className="flex items-center gap-2 font-bold"><Lock size={16} /> ISO 27001</div>
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
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Get in <span className="text-brand-600">Touch</span></h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Have a question about our services or need a custom quote? Our UK-based team is ready to help you navigate your technology challenges.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Registered Office</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone Number</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Address</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Business Hours</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                Map Placeholder (UK Service Area)
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                <p className="text-slate-600 mb-8">Thank you for reaching out. One of our IT specialists will be in touch within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-brand-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="Smith" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="john@company.co.uk" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all bg-white">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity</option>
                    <option>Cloud Migration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="How can we help your business?" />
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                  <p className="text-xs text-slate-500">
                    I consent to Standon Gardens IT processing my personal data in accordance with the Privacy Policy.
                  </p>
                </div>
                <button type="submit" className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">
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
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6 leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'pricing': return <PricingPage />;
      case 'contact': return <ContactPage />;
      case 'terms': return (
        <LegalPage 
          title="Terms & Conditions" 
          content={
            <>
              <p>Welcome to Standon Gardens IT. These terms and conditions outline the rules and regulations for the use of {COMPANY_DETAILS.name}'s Website.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">1. Intellectual Property Rights</h3>
              <p>Unless otherwise stated, {COMPANY_DETAILS.name} and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">2. Payment Terms</h3>
              <p>All services are invoiced in Great British Pounds (GBP). Monthly managed services are billed in advance on the 1st of each month. One-off projects require a 50% deposit before commencement.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">3. Limitation of Liability</h3>
              <p>In no event shall {COMPANY_DETAILS.name}, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">4. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </>
          } 
        />
      );
      case 'privacy': return (
        <LegalPage 
          title="Privacy Policy" 
          content={
            <>
              <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Standon Gardens IT.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">1. Data Collection</h3>
              <p>We collect information you provide directly to us, such as when you fill out a contact form, including your name, email address, and phone number.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">2. Processing Purposes</h3>
              <p>We use the information we collect to communicate with you, provide our IT services, and comply with legal obligations under the UK GDPR.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">3. Your Rights</h3>
              <p>Under the UK GDPR, you have the right to access, rectify, or erase your personal data. You also have the right to object to or restrict certain processing of your data.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">4. Security</h3>
              <p>We implement robust technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction.</p>
            </>
          } 
        />
      );
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
