import { useState, useEffect } from 'react';
import { 
  Shield, 
  Cpu, 
  Cloud, 
  Globe, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Menu, 
  X,
  Clock,
  Briefcase,
  ArrowRight,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'terms' | 'privacy';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string, id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => setCurrentPage('home')}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-6 transition-transform">
            <Cpu size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">SureCare <span className="text-indigo-600">Trafford</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 ${currentPage === link.id ? 'text-indigo-600' : 'text-slate-600'}`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all shadow-sm"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-medium ${currentPage === link.id ? 'text-indigo-600' : 'text-slate-600'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => {
                setCurrentPage('contact');
                setIsMobileMenuOpen(false);
              }}
              className="bg-indigo-600 text-white px-5 py-3 rounded-lg text-center font-medium"
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
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white">
              <Cpu size={18} />
            </div>
            <span className="text-xl font-bold text-white">SureCare Trafford</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Empowering British businesses with cutting-edge IT solutions, robust cybersecurity, and strategic digital transformation.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Facebook'].map(s => (
              <div key={s} className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                <span className="sr-only">{s}</span>
                <div className="w-4 h-4 bg-slate-400 rounded-sm" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
            <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Services</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
            <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => setCurrentPage('terms')} className="hover:text-white transition-colors">Terms & Conditions</button></li>
            <li><button onClick={() => setCurrentPage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
            <li><span className="text-slate-500">GDPR Compliance</span></li>
            <li><span className="text-slate-500">Cookie Policy</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company Details</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-indigo-400 mt-1 shrink-0" />
              <span>Registered Office: N/A</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-indigo-400 shrink-0" />
              <span>N/A</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-indigo-400 shrink-0" />
              <span>info@surecaretraffordltd.co.uk</span>
            </li>
            <li className="flex items-center gap-3">
              <Briefcase size={16} className="text-indigo-400 shrink-0" />
              <span>CRN: N/A</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} SureCare Trafford Ltd. All rights reserved.</p>
        <p>Registered in England and Wales. VAT Registration: N/A</p>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Shield size={14} /> Trusted UK IT Partner
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Modern IT Solutions for <span className="text-indigo-600">British Enterprises.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              SureCare Trafford provides enterprise-grade managed IT services, cybersecurity, and cloud transformation tailored for the UK market.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setCurrentPage('services')} className="btn-primary flex items-center gap-2">
                Explore Services <ArrowRight size={18} />
              </button>
              <button onClick={() => setCurrentPage('about')} className="btn-secondary">
                Our Story
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img 
                src="https://picsum.photos/seed/it-office/800/600" 
                alt="Modern IT Office in UK" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">99.9%</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Uptime Guaranteed</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 glass-card p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">15m</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Avg. Response Time</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose SureCare Trafford?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We combine technical excellence with local British expertise to deliver IT services that actually drive business growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Shield className="text-indigo-600" />, 
                title: "Cybersecurity First", 
                desc: "We build security into every layer of your infrastructure, protecting your data from evolving threats." 
              },
              { 
                icon: <Cloud className="text-indigo-600" />, 
                title: "Cloud Native", 
                desc: "Optimise your operations with scalable cloud solutions designed for the modern remote-first workforce." 
              },
              { 
                icon: <Users className="text-indigo-600" />, 
                title: "Dedicated Support", 
                desc: "Our UK-based engineers are available 24/7 to ensure your business never stops moving." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-slate-900 text-white px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 skew-x-12 transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-4">Success Story</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Saving a Manchester Logistics Firm £45,000 Annually.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                By migrating their legacy on-premise servers to a secure hybrid cloud environment, we reduced their hardware maintenance costs by 60% and eliminated downtime during peak periods.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-indigo-400">£45k</div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Annual Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-400">100%</div>
                  <div className="text-sm text-slate-500 uppercase font-bold tracking-wider">Uptime Since Launch</div>
                </div>
              </div>
              <button onClick={() => setCurrentPage('services')} className="flex items-center gap-2 text-white font-bold hover:text-indigo-400 transition-colors">
                View more case studies <ArrowRight size={18} />
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/logistics/800/500" 
                alt="Logistics Case Study" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "James Harrison", role: "CEO, Harrison & Co", text: "SureCare Trafford transformed our outdated IT systems. Their team is professional, responsive, and truly understands the UK business landscape." },
              { name: "Sarah Jenkins", role: "Operations Director, NorthWest Retail", text: "The cybersecurity audit they performed was eye-opening. We now feel much more secure and compliant with GDPR regulations." },
              { name: "David Thompson", role: "Founder, TechStart Manchester", text: "As a startup, we needed scalable IT. SureCare provided the perfect roadmap and support to help us grow without technical friction." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                    {t.name.charAt(0)}
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

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Future-Proof Your Business?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Join hundreds of British companies that trust SureCare Trafford for their IT needs. Get a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button onClick={() => setCurrentPage('contact')} className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg">
              Book Free Consultation
            </button>
            <button onClick={() => setCurrentPage('pricing')} className="bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-800 transition-all border border-indigo-500">
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
      title: "Managed IT Support",
      icon: <Users size={32} />,
      desc: "Comprehensive 24/7 helpdesk and infrastructure management for your entire team.",
      audience: "SMEs and growing enterprises needing reliable daily support.",
      process: ["Audit", "Onboarding", "Monitoring", "Ongoing Support"],
      benefits: ["Reduced downtime", "Predictable costs", "Expert advice"],
      price: "£250"
    },
    {
      title: "Cybersecurity Solutions",
      icon: <Shield size={32} />,
      desc: "Advanced threat detection, firewall management, and employee security training.",
      audience: "Businesses handling sensitive client data or financial information.",
      process: ["Vulnerability Scan", "Hardening", "Training", "24/7 SOC"],
      benefits: ["Data protection", "Regulatory compliance", "Peace of mind"],
      price: "£400"
    },
    {
      title: "Cloud Migration & Strategy",
      icon: <Cloud size={32} />,
      desc: "Seamless transition to Azure, AWS, or Google Cloud with zero business disruption.",
      audience: "Companies looking to modernize legacy systems and enable remote work.",
      process: ["Assessment", "Planning", "Execution", "Optimisation"],
      benefits: ["Scalability", "Remote access", "Lower hardware costs"],
      price: "£1,500"
    },
    {
      title: "Network Infrastructure",
      icon: <Globe size={32} />,
      desc: "Design and implementation of high-speed, secure wired and wireless networks.",
      audience: "Offices, warehouses, and multi-site organisations.",
      process: ["Site Survey", "Design", "Installation", "Certification"],
      benefits: ["High speed", "Reliable connectivity", "Secure access"],
      price: "£800"
    },
    {
      title: "Disaster Recovery",
      icon: <Lock size={32} />,
      desc: "Automated backups and rapid recovery plans to ensure business continuity.",
      audience: "Any business where data loss would be catastrophic.",
      process: ["Risk Analysis", "Backup Setup", "Testing", "Recovery Drills"],
      benefits: ["Zero data loss", "Fast recovery", "Insurance compliance"],
      price: "£300"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Tailored technology solutions designed to empower your business and protect your digital assets.</p>
        </div>

        <div className="space-y-12">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 p-8 md:p-12 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                  {s.icon}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{s.title}</h2>
                <p className="text-lg text-slate-600 mb-8">{s.desc}</p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Target Audience</h4>
                  <p className="text-slate-700 font-medium">{s.audience}</p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Process</h4>
                    <ul className="space-y-2">
                      {s.process.map((p, pi) => (
                        <li key={pi} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold">{pi + 1}</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Key Benefits</h4>
                    <ul className="space-y-2">
                      {s.benefits.map((b, bi) => (
                        <li key={bi} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={14} className="text-emerald-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 bg-slate-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">Starting From</div>
                <div className="text-6xl font-black text-slate-900 mb-4">{s.price}<span className="text-xl font-medium text-slate-400">/mo</span></div>
                <p className="text-slate-500 text-sm mb-8">Custom quotes available for larger infrastructures.</p>
                <button className="btn-primary w-full max-w-xs">Enquire Now</button>
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
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">Our Mission is to <span className="text-indigo-600">Secure & Scale</span> British Business.</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Founded in Trafford, we've grown from a small local consultancy into a leading UK IT services provider. Our journey is defined by a commitment to technical excellence and a deep understanding of the unique challenges faced by UK businesses.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-slate-600 text-sm">To be the most trusted IT partner for SMEs across the United Kingdom, driving innovation through secure technology.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Our Values</h3>
                <p className="text-slate-600 text-sm">Integrity, transparency, and a relentless focus on client success. We speak plain English, not just code.</p>
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
            <div className="absolute -bottom-10 -right-10 bg-indigo-600 text-white p-10 rounded-3xl shadow-xl hidden md:block">
              <div className="text-5xl font-black mb-2">10+</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Robert Sterling", role: "Managing Director", bio: "With 20 years in enterprise IT, Robert leads our strategic vision and client relations." },
              { name: "Emma Whitworth", role: "Technical Director", bio: "Emma oversees our engineering teams and ensures our solutions remain at the cutting edge." },
              { name: "Alistair Cook", role: "Head of Cybersecurity", bio: "Alistair is a certified security expert dedicated to protecting our clients from digital threats." }
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${p.name}`} alt={p.name} referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{p.name}</h3>
                <div className="text-indigo-600 font-medium mb-4">{p.role}</div>
                <p className="text-slate-600 text-sm">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GDPR Compliance */}
        <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-white">
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8">
              <Shield size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Commitment to GDPR</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We take data privacy seriously. As a UK-based company, we are fully compliant with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We act as both a Data Controller and Data Processor, ensuring your information is handled with the highest level of security and transparency.
            </p>
            <ul className="space-y-4">
              {["ISO 27001 Aligned Processes", "Regular Security Audits", "Data Encryption at Rest & Transit", "Employee Privacy Training"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-indigo-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = () => {
  const plans = [
    {
      name: "Essential",
      price: "£250",
      desc: "Perfect for small businesses starting their digital journey.",
      features: ["Remote Helpdesk Support", "Antivirus & Patch Management", "Basic Cloud Backup", "9-5 Support Hours", "1-Hour Response Time"],
      ideal: "Small offices (1-10 users)",
      cta: "Start Essential",
      popular: false
    },
    {
      name: "Professional",
      price: "£750",
      desc: "Comprehensive support for growing teams with advanced needs.",
      features: ["On-site & Remote Support", "Advanced Cybersecurity Suite", "Managed Cloud Infrastructure", "24/7 Critical Monitoring", "15-Min Response Time", "Strategic IT Roadmap"],
      ideal: "Growing SMEs (10-50 users)",
      cta: "Go Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Tailored solutions for large organisations with complex requirements.",
      features: ["Dedicated Account Manager", "Full SOC Monitoring", "Multi-site Infrastructure", "Custom Disaster Recovery", "Unlimited On-site Support", "Compliance Management"],
      ideal: "Large Enterprises (50+ users)",
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">No hidden fees. No long-term lock-ins. Just high-quality IT support tailored to your business size.</p>
          <div className="mt-8 inline-block bg-indigo-50 px-4 py-2 rounded-full text-indigo-700 text-sm font-bold">
            All prices exclude VAT at 20%
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-3xl border transition-all ${plan.popular ? 'border-indigo-600 bg-white shadow-2xl scale-105 z-10' : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.desc}</p>
              </div>
              <div className="mb-8">
                <div className="text-5xl font-black text-slate-900">{plan.price}{plan.price !== 'Custom' && <span className="text-lg font-medium text-slate-400">/mo</span>}</div>
              </div>
              
              <div className="mb-8">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Ideal For</div>
                <p className="text-slate-700 font-medium">{plan.ideal}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle2 size={18} className="text-indigo-600 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-slate-50 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Bespoke Solution?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">We understand that every business is unique. If our standard plans don't fit your needs, we can create a custom package just for you.</p>
          <button className="btn-secondary">Request Custom Quote</button>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">Get in Touch</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Have a question or ready to start your project? Our team is here to help. Fill out the form and we'll get back to you within 1 business hour.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                  <p className="text-slate-600">SureCare Trafford Ltd, N/A, Manchester, United Kingdom</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-600">N/A</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">info@surecaretraffordltd.co.uk</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-600">Monday - Friday: 09:00 - 17:30</p>
                  <p className="text-slate-500 text-sm">24/7 Support for Managed Clients</p>
                </div>
              </div>
            </div>

            <div className="h-64 bg-slate-200 rounded-3xl overflow-hidden relative grayscale">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold">
                Map Placeholder (Trafford, Manchester)
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="john@company.co.uk" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your Business Ltd" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>General Enquiry</option>
                  <option>Managed IT Support</option>
                  <option>Cybersecurity Audit</option>
                  <option>Cloud Migration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How can we help you?"></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" id="consent" />
                <label htmlFor="consent" className="text-sm text-slate-500">
                  I consent to SureCare Trafford Ltd processing my personal data in accordance with the <button className="text-indigo-600 hover:underline">Privacy Policy</button>.
                </label>
              </div>
              <button className="btn-primary w-full py-4 text-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const TermsPage = () => (
  <div className="pt-32 pb-24 px-6">
    <div className="max-w-4xl mx-auto prose prose-slate">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms and Conditions</h1>
      <p className="text-slate-500 mb-8">Last Updated: February 2026</p>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
        <p>These terms and conditions govern your use of the SureCare Trafford Ltd website and our IT services. By accessing this website or engaging our services, you agree to be bound by these terms in full.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Company Details</h2>
        <p>SureCare Trafford Ltd is a company registered in England and Wales. Registered office: N/A. Company Registration Number: N/A. Official email: info@surecaretraffordltd.co.uk.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
        <p>All prices are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate (currently 20%). Invoices are payable within 14 days of issue unless otherwise agreed in writing. Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
        <p>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. All these intellectual property rights are reserved.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
        <p>Both parties agree to maintain the confidentiality of any proprietary information shared during the course of business. This obligation survives the termination of any service agreement.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
        <p>SureCare Trafford Ltd will not be liable for any indirect, special, or consequential loss or damage arising under these terms and conditions or in connection with our website or services.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
        <p>These terms and conditions will be governed by and construed in accordance with the laws of England and Wales, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      </section>
    </div>
  </div>
);

const PrivacyPage = () => (
  <div className="pt-32 pb-24 px-6">
    <div className="max-w-4xl mx-auto prose prose-slate">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
      <p className="text-slate-500 mb-8">Last Updated: February 2026</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Data Collection</h2>
        <p>We collect personal data such as names, email addresses, phone numbers, and company details when you contact us or use our services. We also collect technical data via cookies to improve your experience.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Processing Purposes</h2>
        <p>Your data is processed to provide IT services, respond to enquiries, manage accounts, and comply with legal obligations. We only process data where we have a lawful basis under UK GDPR.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Retention</h2>
        <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Your Rights</h2>
        <p>Under UK GDPR, you have the right to access, rectify, or erase your personal data. You also have the right to restrict processing and data portability. To exercise these rights, please contact us at info@surecaretraffordltd.co.uk.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies</h2>
        <p>Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Security</h2>
        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed.</p>
      </section>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

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
      case 'terms': return <TermsPage />;
      case 'privacy': return <PrivacyPage />;
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
