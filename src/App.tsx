import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Cpu, 
  Cloud, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight,
  Users,
  Briefcase,
  Zap,
  Lock,
  Server,
  Database,
  Headphones,
  FileText,
  ExternalLink,
  Clock,
  Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'terms' | 'privacy';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About Us', value: 'about' },
    { label: 'Pricing', value: 'pricing' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-indigo-600 p-2 rounded-lg mr-2">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              SureCare <span className="text-indigo-600">IT</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => setCurrentPage(link.value)}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${currentPage === link.value ? 'text-indigo-600' : 'text-slate-600'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
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
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => {
                    setCurrentPage(link.value);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  setCurrentPage('contact');
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-indigo-600 text-white px-5 py-3 rounded-xl text-base font-semibold"
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

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-indigo-600 p-2 rounded-lg mr-2">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">SureCare IT</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering UK businesses with cutting-edge IT solutions, robust cybersecurity, and dedicated support. Based in Wakefield, serving the nation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-indigo-400 transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-indigo-400 transition-colors">Services</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-indigo-400 transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-indigo-400 transition-colors">Pricing</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-indigo-400 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setCurrentPage('terms')} className="hover:text-indigo-400 transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">GDPR Compliance</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Cookie Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Building2 className="w-5 h-5 mr-3 text-indigo-500 shrink-0" />
                <span>SureCare Batley & Wakefield</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-indigo-500 shrink-0" />
                <span>Registered Office: Not Available</span>
              </li>
              <li className="flex items-start">
                <FileText className="w-5 h-5 mr-3 text-indigo-500 shrink-0" />
                <span>CRN: Not Available</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-indigo-500 shrink-0" />
                <span>Phone: Not Available</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-indigo-500 shrink-0" />
                <span>Email: Not Availble</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SureCare Batley & Wakefield. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Built in the UK</span>
            <span>VAT Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3 mr-2" />
                Next-Gen IT Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Reliable IT Support for <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">UK Businesses</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                SureCare IT provides comprehensive technology management, cybersecurity, and cloud solutions tailored to the unique needs of British enterprises. We handle the tech, so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('services')}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 flex items-center justify-center"
                >
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </button>
              </div>
              <div className="mt-10 flex items-center space-x-8 text-slate-400">
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                  <span className="text-sm font-medium">99.9% Uptime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                  <span className="text-sm font-medium">24/7 Monitoring</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
                alt="IT Professionals working" 
                className="rounded-2xl shadow-2xl relative z-10 border border-white/20"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose SureCare IT?</h2>
            <p className="text-slate-600">We don't just fix computers; we build resilient digital foundations that drive efficiency and security for your business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-indigo-600" />,
                title: "Cybersecurity First",
                desc: "We implement multi-layered security protocols to protect your sensitive data from evolving UK threats."
              },
              {
                icon: <Users className="w-8 h-8 text-indigo-600" />,
                title: "Local Expertise",
                desc: "Based in Wakefield, we understand the local business landscape and provide rapid on-site support when needed."
              },
              {
                icon: <Zap className="w-8 h-8 text-indigo-600" />,
                title: "Proactive Management",
                desc: "Our systems identify and resolve issues before they impact your operations, ensuring maximum productivity."
              }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all group">
                <div className="mb-6 bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Industries We Empower Across the UK</h2>
              <p className="text-slate-600 mb-8">Our versatile IT solutions are designed to meet the specific regulatory and operational requirements of various sectors.</p>
              <div className="grid grid-cols-2 gap-4">
                {['Healthcare & Care', 'Legal Services', 'Manufacturing', 'Retail & E-commerce', 'Education', 'Financial Services'].map((industry, i) => (
                  <div key={i} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3" />
                    <span className="font-medium text-slate-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=500" alt="Healthcare tech" className="rounded-xl shadow-md" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=500" alt="Legal tech" className="rounded-xl shadow-md mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Measurable Results</h2>
            <p className="text-slate-600">Real impact for real UK businesses.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Server className="w-32 h-32" />
              </div>
              <span className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-4 block">Manufacturing Sector</span>
              <h3 className="text-2xl font-bold mb-6">Infrastructure Overhaul for Wakefield Factory</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-indigo-400">£45,000</div>
                  <div className="text-xs text-slate-400 uppercase mt-1">Annual Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-400">40%</div>
                  <div className="text-xs text-slate-400 uppercase mt-1">Efficiency Boost</div>
                </div>
              </div>
              <p className="text-slate-400 mb-8">Modernised legacy server systems and implemented cloud-hybrid storage, reducing downtime by 98%.</p>
              <button className="text-white font-bold flex items-center hover:text-indigo-400 transition-colors">
                Read Full Case Study <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="bg-indigo-600 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Lock className="w-32 h-32" />
              </div>
              <span className="text-indigo-200 font-bold text-sm uppercase tracking-widest mb-4 block">Legal Services</span>
              <h3 className="text-2xl font-bold mb-6">Cybersecurity Transformation for Leeds Law Firm</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-indigo-200">100%</div>
                  <div className="text-xs text-indigo-100 uppercase mt-1">Compliance Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-200">£12,000</div>
                  <div className="text-xs text-indigo-100 uppercase mt-1">Insurance Premium Reduction</div>
                </div>
              </div>
              <p className="text-indigo-100 mb-8">Implemented advanced encryption and multi-factor authentication, achieving Cyber Essentials Plus certification.</p>
              <button className="text-white font-bold flex items-center hover:text-indigo-200 transition-colors">
                Read Full Case Study <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Graham",
                role: "Director, Graham & Sons Ltd",
                content: "SureCare IT transformed our remote working capabilities. Their response time is exceptional, and they speak plain English, not tech-jargon."
              },
              {
                name: "Sarah Jenkins",
                role: "Practice Manager, West Yorkshire Health",
                content: "Security is paramount in our sector. SureCare provided a robust solution that gives us complete peace of mind regarding patient data."
              },
              {
                name: "Oliver Thompson",
                role: "Founder, Wakefield Creative",
                content: "The best IT partner we've ever had. They are proactive, professional, and truly feel like an extension of our own team."
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Zap key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-3">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Future-Proof Your Business?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">Join hundreds of UK businesses that trust SureCare IT for their technology needs. Let's build something great together.</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Managed IT Support",
      icon: <Headphones className="w-10 h-10" />,
      overview: "Comprehensive 24/7 technical support for your entire business infrastructure.",
      target: "SMEs looking for a reliable, outsourced IT department.",
      steps: ["Initial Audit", "System Optimisation", "24/7 Monitoring", "Helpdesk Access"],
      benefits: ["Reduced Downtime", "Fixed Monthly Costs", "Expert Advice"],
      price: "£250"
    },
    {
      title: "Cybersecurity Solutions",
      icon: <Lock className="w-10 h-10" />,
      overview: "Multi-layered protection against malware, phishing, and data breaches.",
      target: "Businesses handling sensitive client or financial data.",
      steps: ["Vulnerability Scan", "Firewall Setup", "Employee Training", "Incident Response"],
      benefits: ["GDPR Compliance", "Data Integrity", "Peace of Mind"],
      price: "£400"
    },
    {
      title: "Cloud Migration & Hosting",
      icon: <Cloud className="w-10 h-10" />,
      overview: "Seamless transition to secure cloud environments like Azure and AWS.",
      target: "Companies aiming for flexibility and remote work capabilities.",
      steps: ["Cloud Strategy", "Data Migration", "Security Config", "Ongoing Management"],
      benefits: ["Scalability", "Remote Access", "Lower Hardware Costs"],
      price: "£500"
    },
    {
      title: "Network Infrastructure",
      icon: <Server className="w-10 h-10" />,
      overview: "Design and implementation of robust, high-speed business networks.",
      target: "Growing offices or manufacturing sites needing stable connectivity.",
      steps: ["Site Survey", "Hardware Install", "Network Security", "Performance Tuning"],
      benefits: ["High Speed", "Reliability", "Future-Proofing"],
      price: "£1,200"
    },
    {
      title: "Data Backup & Recovery",
      icon: <Database className="w-10 h-10" />,
      overview: "Automated backups and rapid recovery plans to ensure business continuity.",
      target: "Any business where data loss would be catastrophic.",
      steps: ["Backup Strategy", "Automated Sync", "Regular Testing", "Rapid Restore"],
      benefits: ["Zero Data Loss", "Quick Recovery", "Business Continuity"],
      price: "£150"
    },
    {
      title: "IT Consultancy",
      icon: <Briefcase className="w-10 h-10" />,
      overview: "Strategic technology planning to align your IT with business goals.",
      target: "Leadership teams planning digital transformation.",
      steps: ["Business Analysis", "Tech Roadmap", "Budget Planning", "Implementation Support"],
      benefits: ["Strategic Growth", "Cost Efficiency", "Competitive Edge"],
      price: "£800"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Core IT Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Tailored technology solutions designed to drive growth, security, and efficiency for UK enterprises.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all"
            >
              <div className="flex items-start mb-8">
                <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600 mr-6">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-500 font-medium">Starting from <span className="text-indigo-600">{service.price} / month</span></p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Overview</h4>
                  <p className="text-slate-600 leading-relaxed">{service.overview}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Process Steps</h4>
                    <ul className="space-y-2">
                      {service.steps.map((step, si) => (
                        <li key={si} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, bi) => (
                        <li key={bi} className="flex items-center text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-50">
                  <span className="text-xs font-bold text-slate-400 uppercase mr-2">Ideal For:</span>
                  <span className="text-sm text-slate-700 font-medium">{service.target}</span>
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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Mission & Vision</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At SureCare IT, our mission is to simplify technology for UK businesses, enabling them to reach their full potential through secure, innovative, and reliable IT solutions.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Empowering Growth</h3>
                  <p className="text-slate-600">We believe technology should be a catalyst for business expansion, not a hurdle.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Uncompromising Security</h3>
                  <p className="text-slate-600">Protecting our clients' digital assets is at the core of everything we do.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team meeting" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="text-4xl font-bold text-indigo-600 mb-1">15+</div>
              <div className="text-sm text-slate-500 font-medium">Years of Combined Experience</div>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-slate-950 rounded-[3rem] p-12 lg:p-20 text-white mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" />
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl font-bold mb-8">The SureCare IT Story</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Founded in the heart of West Yorkshire, SureCare IT began with a simple observation: many local businesses were struggling with complex IT issues that hindered their growth. We saw a need for a partner who could provide not just technical fixes, but strategic guidance.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Over the years, we've grown from a small local support team into a comprehensive IT services provider serving clients across the UK. Our commitment to personal service and technical excellence remains unchanged.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
            <p className="text-slate-600">The experts behind our technical excellence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "James Harrison", role: "Managing Director", bio: "20 years in enterprise IT management." },
              { name: "Eleanor Wright", role: "Technical Director", bio: "Cybersecurity specialist and cloud architect." },
              { name: "David Miller", role: "Operations Manager", bio: "Expert in service delivery and client relations." }
            ].map((leader, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 bg-slate-100 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg group-hover:border-indigo-100 transition-all">
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-slate-300">
                    {leader.name[0]}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                <p className="text-indigo-600 font-medium text-sm mb-4">{leader.role}</p>
                <p className="text-slate-500 text-sm px-4">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values & GDPR */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-indigo-50 p-10 rounded-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <ul className="space-y-4">
              <li className="flex items-center font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3" /> Integrity in every interaction
              </li>
              <li className="flex items-center font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3" /> Continuous technical innovation
              </li>
              <li className="flex items-center font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3" /> Client-centric service delivery
              </li>
              <li className="flex items-center font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3" /> Transparent communication
              </li>
            </ul>
          </div>
          <div className="bg-emerald-50 p-10 rounded-3xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">GDPR & Compliance</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We are fully committed to the highest standards of data protection. Our processes are strictly aligned with the UK GDPR and Data Protection Act 2018.
            </p>
            <div className="flex items-center text-emerald-700 font-bold">
              <Shield className="w-6 h-6 mr-2" />
              Cyber Essentials Certified
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
      price: "199",
      ideal: "Small businesses with basic IT needs.",
      features: [
        "Remote Helpdesk (9am-5pm)",
        "Antivirus & Malware Protection",
        "Cloud Backup (50GB)",
        "Monthly Health Reports",
        "Basic Network Monitoring"
      ],
      support: "Next Business Day",
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "449",
      popular: true,
      ideal: "Growing companies requiring proactive management.",
      features: [
        "Priority Helpdesk (8am-8pm)",
        "Advanced Cybersecurity Suite",
        "Cloud Backup (500GB)",
        "On-site Support Included",
        "24/7 Server Monitoring",
        "Quarterly Strategic Reviews"
      ],
      support: "4-Hour Response",
      cta: "Choose Pro"
    },
    {
      name: "Enterprise",
      price: "999",
      ideal: "Larger organisations with complex infrastructure.",
      features: [
        "24/7/365 Dedicated Support",
        "Full Managed Security (SOC)",
        "Unlimited Cloud Storage",
        "Dedicated Account Manager",
        "Disaster Recovery Planning",
        "IT Roadmap & Consultancy"
      ],
      support: "1-Hour Response",
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Transparent Pricing for UK Businesses</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Choose the plan that fits your current needs. All prices are per month and exclude VAT.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl p-10 shadow-sm border ${tier.popular ? 'border-indigo-600 ring-4 ring-indigo-50' : 'border-slate-100'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">£{tier.price}</span>
                  <span className="text-slate-500 ml-2">/ month</span>
                </div>
                <p className="text-sm text-slate-500 mt-4 leading-relaxed">{tier.ideal}</p>
              </div>

              <div className="space-y-4 mb-10">
                {tier.features.map((feature, fi) => (
                  <div key={fi} className="flex items-start text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-50 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Support Level:</span>
                  <span className="font-bold text-slate-900">{tier.support}</span>
                </div>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white p-8 rounded-3xl border border-slate-100 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Need a Bespoke Solution?</h3>
          <p className="text-slate-600 mb-6">We offer custom packages for unique requirements and multi-site operations.</p>
          <button className="text-indigo-600 font-bold hover:underline">Talk to our experts</button>
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
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-12">
              Have a question or ready to discuss your IT needs? Fill out the form and our team will get back to you within 4 business hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-indigo-50 p-3 rounded-xl mr-4">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">SureCare Batley & Wakefield</h3>
                  <p className="text-slate-500">Registered Office: Not Available</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-50 p-3 rounded-xl mr-4">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Business Hours</h3>
                  <p className="text-slate-500">Monday - Friday: 09:00 - 17:30</p>
                  <p className="text-slate-500">24/7 Support for Enterprise Clients</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-50 p-3 rounded-xl mr-4">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email & Phone</h3>
                  <p className="text-slate-500">Email: Not Availble</p>
                  <p className="text-slate-500">Phone: Not Available</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-slate-100 h-64 rounded-3xl flex items-center justify-center text-slate-400 font-medium border-2 border-dashed border-slate-200">
              <div className="text-center">
                <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
                Map Placeholder (Wakefield Area)
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="Acme Ltd" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="john@example.co.uk" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white">
                  <option>Managed IT Support</option>
                  <option>Cybersecurity</option>
                  <option>Cloud Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" />
                <label className="ml-3 text-sm text-slate-600">
                  I consent to SureCare IT processing my data in accordance with the <button type="button" className="text-indigo-600 hover:underline">Privacy Policy</button>.
                </label>
              </div>
              <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                Send Message
              </button>
            </form>
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
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">{title}</h1>
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
          title="Terms & Conditions" 
          content={
            <>
              <p>Welcome to SureCare Batley & Wakefield. By accessing our website and services, you agree to comply with these terms.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">1. Payment Terms</h3>
              <p>All services are invoiced in Pounds Sterling (GBP). Monthly subscriptions are payable in advance. VAT will be applied at the prevailing UK rate where applicable.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">2. Intellectual Property</h3>
              <p>All content, branding, and software provided remain the property of SureCare Batley & Wakefield or its licensors.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">3. Confidentiality</h3>
              <p>We maintain strict confidentiality regarding all client data and business operations encountered during our service delivery.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">4. Limitation of Liability</h3>
              <p>SureCare Batley & Wakefield shall not be liable for any indirect or consequential loss arising from service interruptions, although we strive for 99.9% uptime.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">5. Governing Law</h3>
              <p>These terms are governed by the laws of England and Wales.</p>
            </>
          } 
        />
      );
      case 'privacy': return (
        <LegalPage 
          title="Privacy Policy" 
          content={
            <>
              <p>SureCare Batley & Wakefield is committed to protecting your privacy in accordance with the UK GDPR.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">1. Data Collection</h3>
              <p>We collect personal data such as names, email addresses, and company details when you contact us or use our services.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">2. Purpose of Processing</h3>
              <p>Data is used to provide IT support, manage accounts, and communicate regarding service updates.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">3. Data Retention</h3>
              <p>We retain data only as long as necessary for the purposes for which it was collected or as required by UK law.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">4. Your Rights</h3>
              <p>Under UK GDPR, you have the right to access, rectify, or erase your personal data. Contact us to exercise these rights.</p>
              <h3 className="text-xl font-bold text-slate-900 mt-8">5. Cookies</h3>
              <p>Our website uses essential cookies to ensure functionality and analytical cookies to improve user experience.</p>
            </>
          } 
        />
      );
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
