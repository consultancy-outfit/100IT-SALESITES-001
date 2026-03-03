import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Shield, 
  Cloud, 
  Cpu, 
  Headset, 
  BarChart, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Lock,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const COMPANY_NAME = "Swanton Community Services South Yorkshire";
const ADDRESS = "Unit 12, Sheffield Business Park, Europa Link, Sheffield, S9 1XU, United Kingdom";
const CRN = "09876543";
const PHONE = "+44 (0) 114 555 0123";
const EMAIL = "enquiries@swanton-it-services.co.uk";
const HOURS = "Mon - Fri: 08:30 - 18:00";

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About Us', id: 'about' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="bg-indigo-600 p-2 rounded-lg mr-2">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className={cn(
              "font-bold text-xl tracking-tight",
              scrolled ? "text-slate-900" : "text-slate-900"
            )}>
              Swanton<span className="text-indigo-600">IT</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-600",
                  currentPage === item.id ? "text-indigo-600" : "text-slate-600"
                )}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
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
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-md"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  setCurrentPage('contact');
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-indigo-600 text-white px-5 py-3 rounded-xl text-center font-semibold"
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

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-indigo-600 p-2 rounded-lg mr-2">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Swanton<span className="text-indigo-400">IT</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Leading the way in digital transformation for South Yorkshire businesses. Reliable, secure, and innovative IT solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-indigo-400 transition-colors" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-indigo-400 transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-indigo-400 transition-colors">Services</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-indigo-400 transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-indigo-400 transition-colors">Pricing</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-indigo-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setCurrentPage('terms')} className="hover:text-indigo-400 transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-indigo-400 transition-colors">GDPR Compliance</button></li>
              <li><button onClick={() => setCurrentPage('terms')} className="hover:text-indigo-400 transition-colors">Cookie Policy</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
                <span>{PHONE}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
                <span>{EMAIL}</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
                <span>{HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-xs space-y-2">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p>Company Registration Number: {CRN} | Registered in England and Wales</p>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -ml-48 -mb-48"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wider uppercase mb-6">
                Next-Gen IT Solutions
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Empowering <span className="text-indigo-600">British</span> Business Through Technology.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Swanton IT delivers enterprise-grade managed services, cybersecurity, and cloud solutions tailored for the unique needs of South Yorkshire's growing enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('services')}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center"
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
              
              <div className="mt-12 flex items-center space-x-6 grayscale opacity-50">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted By</span>
                <div className="flex space-x-8">
                  <div className="font-bold text-xl">SHEFFIELD TECH</div>
                  <div className="font-bold text-xl">YORKSHIRE GAS</div>
                  <div className="font-bold text-xl">UK LOGISTICS</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-office/800/600" 
                  alt="Modern IT Office" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 max-w-xs">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Shield className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">100% GDPR Compliant</div>
                  <div className="text-xs text-slate-500">Your data is safe with us.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Swanton IT?</h2>
            <p className="text-slate-600">We don't just fix computers; we build the technological foundation for your business growth.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Clock className="w-8 h-8 text-indigo-600" />, 
                title: "15-Min Response Guarantee", 
                desc: "Our UK-based support desk is always ready. We pride ourselves on rapid resolution times for critical issues." 
              },
              { 
                icon: <Shield className="w-8 h-8 text-indigo-600" />, 
                title: "Cyber Essentials Certified", 
                desc: "We implement government-backed security standards to protect your business from 99% of common cyber threats." 
              },
              { 
                icon: <BarChart className="w-8 h-8 text-indigo-600" />, 
                title: "Strategic IT Planning", 
                desc: "We provide quarterly business reviews to ensure your IT strategy aligns perfectly with your commercial goals." 
              }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Success Story</span>
              <h2 className="text-4xl font-bold mt-4 mb-8">Digital Transformation for Sheffield Manufacturing Ltd.</h2>
              <p className="text-slate-400 text-lg mb-8">
                We migrated a legacy on-premise infrastructure to a hybrid cloud environment, implementing advanced automation and security protocols.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="border-l-2 border-indigo-500 pl-6">
                  <div className="text-3xl font-bold text-white">£45,000</div>
                  <div className="text-sm text-slate-400">Annual Savings</div>
                </div>
                <div className="border-l-2 border-indigo-500 pl-6">
                  <div className="text-3xl font-bold text-white">35%</div>
                  <div className="text-sm text-slate-400">Efficiency Increase</div>
                </div>
              </div>
              <button 
                onClick={() => setCurrentPage('services')}
                className="text-indigo-400 font-bold flex items-center hover:text-indigo-300 transition-colors"
              >
                View More Case Studies <ChevronRight className="ml-1 w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/factory/800/800" 
                  alt="Manufacturing" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-indigo-500/30 rounded-3xl scale-110 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "James Harrison", role: "MD, Peak District Logistics", text: "Swanton IT transformed our remote working capabilities overnight. Their support team is second to none in South Yorkshire." },
              { name: "Sarah Thompson", role: "Operations Director, Sheffield Creative", text: "Finally, an IT company that speaks English, not jargon. They've saved us thousands in unnecessary hardware costs." },
              { name: "Robert Miller", role: "Founder, Miller & Co Law", text: "Their cybersecurity audit was eye-opening. We now feel completely secure and compliant with all UK legal requirements." }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm italic text-slate-600 relative">
                <div className="text-indigo-600 text-4xl absolute top-4 right-8 opacity-20 font-serif">"</div>
                <p className="mb-6 relative z-10">{t.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <span className="text-indigo-700 font-bold text-xs">{t.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 not-italic">{t.name}</div>
                    <div className="text-xs text-slate-500 not-italic">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Secure Your Business Future?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of South Yorkshire businesses that trust Swanton IT for their technology needs.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-2xl"
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
      icon: <Monitor className="w-10 h-10" />,
      title: "Managed IT Support",
      overview: "Comprehensive day-to-day IT management and helpdesk support for your entire team.",
      audience: "SMEs with 10-250 employees needing reliable tech support.",
      process: ["Audit", "Onboarding", "24/7 Monitoring", "Proactive Maintenance"],
      benefits: "Reduced downtime, predictable costs, and expert advice on tap.",
      price: "£25"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Cybersecurity Solutions",
      overview: "Advanced protection against ransomware, phishing, and data breaches.",
      audience: "Businesses handling sensitive client data or financial transactions.",
      process: ["Vulnerability Scan", "Security Layering", "Employee Training", "Incident Response"],
      benefits: "Peace of mind, legal compliance, and brand protection.",
      price: "£45"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Migration & Hosting",
      overview: "Seamless transition to Microsoft Azure or AWS with managed hosting services.",
      audience: "Companies looking to modernize infrastructure and enable remote work.",
      process: ["Assessment", "Strategy", "Migration", "Optimization"],
      benefits: "Scalability, flexibility, and lower capital expenditure.",
      price: "£150"
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "IT Strategy & Consulting",
      overview: "Virtual CTO services to align your technology with your business growth.",
      audience: "Growing businesses needing high-level technical leadership.",
      process: ["Discovery", "Gap Analysis", "Roadmap Creation", "Implementation"],
      benefits: "Better ROI on tech spend and competitive advantage.",
      price: "£500"
    },
    {
      icon: <Headset className="w-10 h-10" />,
      title: "VoIP & Communication",
      overview: "Modern cloud-based phone systems that work anywhere in the world.",
      audience: "Teams needing professional communication tools without expensive hardware.",
      process: ["Setup", "Porting", "Training", "Support"],
      benefits: "Crystal clear calls, massive cost savings over traditional lines.",
      price: "£12"
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Disaster Recovery",
      overview: "Robust backup solutions ensuring your business can recover from any data loss.",
      audience: "Any business where data loss would be catastrophic.",
      process: ["Risk Assessment", "Backup Setup", "Testing", "Recovery Drills"],
      benefits: "Business continuity and protection against hardware failure.",
      price: "£80"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Our IT Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tailored technology solutions designed to drive efficiency and security for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">{s.overview}</p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-1">Target Audience</div>
                  <div className="text-sm text-slate-700">{s.audience}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase mb-2">Process</div>
                  <div className="flex flex-wrap gap-2">
                    {s.process.map((p, pi) => (
                      <span key={pi} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                <div>
                  <div className="text-xs text-slate-400">Starting from</div>
                  <div className="text-xl font-bold text-indigo-600">{s.price}<span className="text-xs font-normal text-slate-500"> / month</span></div>
                </div>
                <button className="p-3 rounded-full bg-slate-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
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
        {/* Mission/Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Our Mission & Vision</h1>
            <div className="space-y-8">
              <div className="bg-indigo-50 p-8 rounded-2xl border-l-4 border-indigo-600">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Mission</h3>
                <p className="text-indigo-800/80 leading-relaxed">
                  To provide world-class IT infrastructure and support that enables South Yorkshire businesses to compete on a global stage, ensuring security, reliability, and innovation are at the heart of everything we do.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-slate-600">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Vision</h3>
                <p className="text-slate-700 leading-relaxed">
                  To be the most trusted technology partner in the North of England, recognized for our technical excellence, ethical practices, and unwavering commitment to client success.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/team/800/600" 
              alt="Our Team" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold text-indigo-600 mb-1">15+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-32">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-slate lg:prose-lg mx-auto text-slate-600 leading-relaxed space-y-6">
            <p>
              Founded in 2010 in the heart of Sheffield, Swanton IT began with a simple goal: to bring enterprise-level IT support to the small and medium-sized businesses that form the backbone of the South Yorkshire economy.
            </p>
            <p>
              Our founder, a veteran systems architect, saw a gap in the market for an IT provider that combined technical brilliance with a truly personal, local service. Starting from a small office near the city centre, we've grown into a team of over 25 dedicated specialists.
            </p>
            <p>
              Today, we manage the digital infrastructure for hundreds of businesses across logistics, manufacturing, and legal sectors. While we've grown, our core values remain unchanged: honesty, transparency, and a relentless focus on the client.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "We always do what's right for the client, even if it's not the easiest path for us." },
              { title: "Innovation", desc: "We stay ahead of the curve so you don't have to worry about falling behind." },
              { title: "Reliability", desc: "When things go wrong, we're there. No excuses, just solutions." },
              { title: "Compliance", desc: "We are obsessed with GDPR and UK data security standards." }
            ].map((v, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600 font-bold text-2xl">0{i+1}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "David Swanton", role: "Founder & CEO", bio: "20+ years in systems architecture and business leadership." },
              { name: "Emma Richardson", role: "Technical Director", bio: "Cybersecurity expert with a focus on enterprise cloud migration." },
              { name: "Mark Wilson", role: "Head of Support", bio: "Dedicated to maintaining our 15-minute response guarantee." }
            ].map((l, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-slate-100">
                  <img 
                    src={`https://picsum.photos/seed/person${i}/400/500`} 
                    alt={l.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{l.name}</h3>
                <div className="text-indigo-600 text-sm font-semibold mb-3">{l.role}</div>
                <p className="text-sm text-slate-500">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  const plans = [
    {
      name: "Essential Support",
      price: "25",
      ideal: "Small businesses & startups",
      features: [
        "Remote Helpdesk Support",
        "Antivirus & Malware Protection",
        "Monthly Health Reports",
        "4-Hour Response Time",
        "Cloud Backup (50GB)"
      ],
      support: "Mon-Fri, 9-5",
      cta: "Start Essential",
      popular: false
    },
    {
      name: "Business Pro",
      price: "55",
      ideal: "Growing SMEs (15-50 staff)",
      features: [
        "Priority On-Site Support",
        "Advanced Cybersecurity Suite",
        "Quarterly Strategic Reviews",
        "1-Hour Response Time",
        "Cloud Backup (250GB)",
        "Microsoft 365 Management"
      ],
      support: "24/7 Critical Support",
      cta: "Go Pro",
      popular: true
    },
    {
      name: "Enterprise Managed",
      price: "120",
      ideal: "Large organizations (50+ staff)",
      features: [
        "Dedicated Account Manager",
        "Full Infrastructure Management",
        "vCTO Consulting Services",
        "15-Min Response Time",
        "Unlimited Cloud Backup",
        "Compliance & Audit Support"
      ],
      support: "24/7/365 VIP Support",
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Transparent Pricing</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            All prices are per user, per month. Prices exclude VAT at the prevailing rate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={cn(
                "relative bg-white rounded-3xl p-8 border transition-all duration-300",
                p.popular ? "border-indigo-600 shadow-2xl scale-105 z-10" : "border-slate-100 shadow-sm hover:shadow-lg"
              )}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{p.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{p.ideal}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900">£{p.price}</span>
                  <span className="text-slate-500 ml-2">/user/mo</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-10">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</div>
                {p.features.map((f, fi) => (
                  <div key={fi} className="flex items-center text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="mb-10 p-4 bg-slate-50 rounded-xl">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Support Level</div>
                <div className="text-sm font-bold text-slate-900">{p.support}</div>
              </div>

              <button className={cn(
                "w-full py-4 rounded-xl font-bold transition-all",
                p.popular ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200" : "bg-slate-900 text-white hover:bg-slate-800"
              )}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-12 rounded-3xl border border-slate-100 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-600 mb-8">
            For complex infrastructures, multi-site setups, or specialized compliance needs, we offer bespoke pricing models.
          </p>
          <button className="text-indigo-600 font-bold flex items-center mx-auto hover:underline">
            Talk to our Solutions Architect <ArrowRight className="ml-2 w-5 h-5" />
          </button>
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
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Get in Touch</h1>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Have a question about our services or need immediate IT support? Our team is here to help.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-xl mr-6">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Office</h4>
                  <p className="text-slate-500 text-sm">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-xl mr-6">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-500 text-sm">{PHONE}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-xl mr-6">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-500 text-sm">{EMAIL}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-xl mr-6">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-500 text-sm">{HOURS}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
                <MapPin className="w-12 h-12 mb-2 opacity-20" />
                <span className="text-xs font-bold uppercase tracking-widest">Interactive Map Placeholder</span>
              </div>
              <img 
                src="https://picsum.photos/seed/map/800/450?grayscale&blur=2" 
                alt="Map" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-2xl">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-500">Thank you for reaching out. One of our specialists will contact you within 2 business hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-indigo-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" placeholder="john@company.co.uk" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" placeholder="Your Business Ltd" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all appearance-none bg-white">
                    <option>Managed IT Support</option>
                    <option>Cybersecurity</option>
                    <option>Cloud Solutions</option>
                    <option>IT Strategy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none" placeholder="Tell us about your IT needs..."></textarea>
                </div>
                <div className="flex items-start space-x-3">
                  <input required type="checkbox" id="consent" className="mt-1 w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" />
                  <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                    I consent to Swanton IT storing my data to contact me about my enquiry. I have read and agree to the <button type="button" className="text-indigo-600 hover:underline">Privacy Policy</button>.
                  </label>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
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
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">{title}</h1>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
          {content}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
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
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h3>
                <p>Welcome to {COMPANY_NAME}. These terms and conditions outline the rules and regulations for the use of our services. By accessing this website and our services, you accept these terms in full.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Payment Terms</h3>
                <p>All services are billed in Great British Pounds (GBP). Invoices are issued monthly in advance and are payable within 14 days of the invoice date. Late payments may incur interest at a rate of 8% above the Bank of England base rate.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Intellectual Property</h3>
                <p>Unless otherwise stated, {COMPANY_NAME} and/or its licensors own the intellectual property rights for all material on this website and all code/documentation produced during the provision of services.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Confidentiality</h3>
                <p>We undertake to keep all client data and business information strictly confidential. We will not disclose any information to third parties without prior written consent, except where required by UK law.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h3>
                <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Our liability for any service failure is limited to the amount paid for that service in the preceding 3 months.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Governing Law</h3>
                <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
              </section>
            </>
          } 
        />
      );
      case 'privacy': return (
        <LegalPage 
          title="Privacy Policy (GDPR Compliant)" 
          content={
            <>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Data Collection</h3>
                <p>We collect personal data such as names, email addresses, and phone numbers when you fill out our contact form or sign up for our services. We also collect technical data including IP addresses and cookie information.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Purpose of Processing</h3>
                <p>We process your data to provide our IT services, respond to enquiries, manage your account, and comply with our legal obligations under the UK Data Protection Act 2018 and UK GDPR.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Data Retention</h3>
                <p>We retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Your Rights</h3>
                <p>Under GDPR, you have the right to access, correct, or erase your personal data. You also have the right to object to processing and the right to data portability. To exercise these rights, please contact us at {EMAIL}.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Cookies</h3>
                <p>Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of certain parts of our site.</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Security Measures</h3>
                <p>We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees and third parties who have a business need to know.</p>
              </section>
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
