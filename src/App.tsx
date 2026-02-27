import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Cpu, 
  Cloud, 
  Code2, 
  Headphones, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  Users,
  Target,
  Clock,
  Building2,
  Globe,
  Zap
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'terms' | 'privacy';

// --- Constants ---
const COMPANY_DETAILS = {
  name: "Sunburst House",
  address: "Sunburst House, 12-14 High Street, London, EC1A 1BB, United Kingdom",
  crn: "12345678",
  phone: "+44 20 7946 0000",
  email: "hello@sunbursthouse.co.uk",
  hours: "Mon - Fri: 09:00 - 18:00 GMT"
};

const SERVICES = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    icon: Headphones,
    overview: 'Comprehensive 24/7 proactive monitoring and support for your entire IT infrastructure.',
    target: 'SMEs looking for a reliable, outsourced IT department.',
    process: ['Audit', 'Onboarding', 'Monitoring', 'Support'],
    benefits: ['Reduced downtime', 'Predictable costs', 'Expert advice'],
    price: '£499'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    icon: Shield,
    overview: 'Advanced threat protection, vulnerability assessments, and employee security training.',
    target: 'Businesses handling sensitive data or requiring compliance.',
    process: ['Assessment', 'Implementation', 'Training', 'Review'],
    benefits: ['Data protection', 'Compliance', 'Peace of mind'],
    price: '£750'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Infrastructure',
    icon: Cloud,
    overview: 'Seamless migration and management of Azure, AWS, and private cloud environments.',
    target: 'Companies modernising their legacy systems for remote work.',
    process: ['Strategy', 'Migration', 'Optimisation', 'Scaling'],
    benefits: ['Scalability', 'Remote access', 'Disaster recovery'],
    price: '£899'
  },
  {
    id: 'custom-dev',
    title: 'Software Development',
    icon: Code2,
    overview: 'Bespoke software solutions tailored to your specific business workflows and challenges.',
    target: 'Enterprises needing custom tools that off-the-shelf software can\'t provide.',
    process: ['Discovery', 'Design', 'Build', 'Deploy'],
    benefits: ['Efficiency', 'Competitive edge', 'Ownership'],
    price: '£2,500'
  },
  {
    id: 'it-consultancy',
    title: 'IT Strategy & Consultancy',
    icon: BarChart3,
    overview: 'Strategic technology roadmaps aligned with your long-term business objectives.',
    target: 'Leadership teams planning digital transformation.',
    process: ['Analysis', 'Roadmap', 'Execution', 'Governance'],
    benefits: ['ROI focus', 'Future-proofing', 'Clarity'],
    price: '£1,200'
  }
];

const PRICING_PLANS = [
  {
    name: "Essential",
    price: "299",
    features: ["Remote Support", "Antivirus Included", "9/5 Helpdesk", "Monthly Health Check"],
    support: "Standard",
    ideal: "Small businesses with basic needs",
    cta: "Start Essential"
  },
  {
    name: "Business",
    price: "599",
    features: ["On-site Support", "Advanced Security", "24/7 Monitoring", "Backup Management", "vCIO Consulting"],
    support: "Priority",
    ideal: "Growing SMEs requiring reliability",
    cta: "Go Business",
    popular: true
  },
  {
    name: "Enterprise",
    price: "1,499",
    features: ["Unlimited Support", "Full Compliance Suite", "Dedicated Account Manager", "Custom SLA", "Infrastructure Hosting"],
    support: "Elite",
    ideal: "Large organisations with complex IT",
    cta: "Contact Sales"
  }
];

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string, id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setPage('home')}
        >
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white group-hover:bg-brand-accent transition-colors">
            <Zap size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Sunburst House</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                currentPage === item.id ? 'text-brand-accent' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setPage('contact')}
            className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all shadow-lg shadow-blue-900/10"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setPage(item.id); setIsOpen(false); }}
                className={`text-left text-lg font-medium ${
                  currentPage === item.id ? 'text-brand-accent' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => { setPage('contact'); setIsOpen(false); }}
              className="w-full bg-brand-primary text-white py-4 rounded-xl font-semibold"
            >
              Get a Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 text-white mb-6">
          <Zap size={24} className="text-brand-accent" />
          <span className="text-xl font-bold">Sunburst House</span>
        </div>
        <p className="max-w-md mb-8 leading-relaxed">
          Empowering British enterprises with world-class IT infrastructure, 
          cyber security, and strategic managed services. Your partner in digital excellence.
        </p>
        <div className="flex gap-4">
          <a href="#" className="p-2 bg-slate-900 rounded-full hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="p-2 bg-slate-900 rounded-full hover:text-white transition-colors"><Twitter size={20} /></a>
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-4 text-sm">
          <li><button onClick={() => setPage('home')} className="hover:text-brand-accent transition-colors">Home</button></li>
          <li><button onClick={() => setPage('services')} className="hover:text-brand-accent transition-colors">Services</button></li>
          <li><button onClick={() => setPage('about')} className="hover:text-brand-accent transition-colors">About Us</button></li>
          <li><button onClick={() => setPage('pricing')} className="hover:text-brand-accent transition-colors">Pricing</button></li>
          <li><button onClick={() => setPage('contact')} className="hover:text-brand-accent transition-colors">Contact Us</button></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-6">Legal</h4>
        <ul className="space-y-4 text-sm">
          <li><button onClick={() => setPage('terms')} className="hover:text-brand-accent transition-colors">Terms & Conditions</button></li>
          <li><button onClick={() => setPage('privacy')} className="hover:text-brand-accent transition-colors">Privacy Policy</button></li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
      <div className="space-y-2">
        <p className="text-slate-500 uppercase tracking-widest font-bold mb-2">Company Details</p>
        <p>Company Name: {COMPANY_DETAILS.name}</p>
        <p>Registered Office Address: {COMPANY_DETAILS.address}</p>
        <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
        <p>UK Phone Number: {COMPANY_DETAILS.phone}</p>
        <p>Official Business Email: {COMPANY_DETAILS.email}</p>
      </div>
      <div className="md:text-right flex flex-col justify-end">
        <p>© {new Date().getFullYear()} Sunburst House. All rights reserved.</p>
        <p className="mt-1">VAT Registration: GB 987 6543 21</p>
      </div>
    </div>
  </footer>
);

// --- Page Views ---

const Home = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-100">
            <Shield size={16} />
            <span>Trusted UK IT Partner</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 leading-[1.1] mb-6">
            Future-Proof Your <span className="text-brand-accent">British Business</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            Sunburst House provides enterprise-grade IT support, cyber security, 
            and managed services tailored for the unique challenges of the UK market.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setPage('services')}
              className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-all flex items-center gap-2 shadow-xl shadow-blue-900/20"
            >
              Explore Services <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setPage('contact')}
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all"
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
          <div className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://picsum.photos/seed/it-office/800/800" 
              alt="Modern IT Office" 
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="glass-panel p-8 rounded-2xl w-full max-w-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">System Status</p>
                    <p className="text-lg font-bold">All Systems Operational</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-full" />
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <span>Uptime</span>
                    <span>99.99%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-0 opacity-50" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl -z-0 opacity-50" />
        </motion.div>
      </div>
    </section>

    {/* Key Benefits */}
    <section className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Sunburst House?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">We combine technical excellence with a deep understanding of the UK business landscape.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Clock, title: "24/7 UK Support", desc: "Our London-based helpdesk is available around the clock to keep your business running." },
          { icon: Shield, title: "GDPR Compliant", desc: "We ensure all your data handling and IT systems meet strict UK and EU regulations." },
          { icon: BarChart3, title: "ROI Driven", desc: "We don't just fix computers; we implement technology that drives your bottom line." }
        ].map((benefit, i) => (
          <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-brand-accent transition-all group">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-accent mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <benefit.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Case Study */}
    <section className="bg-brand-primary text-white">
      <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Measurable Results for UK Leaders</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-brand-accent pl-6">
              <p className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-2">Case Study: FinTech London</p>
              <h3 className="text-2xl font-bold mb-4">Infrastructure Modernisation</h3>
              <p className="text-slate-300 mb-6">
                We migrated a legacy on-premise system to a secure hybrid cloud, 
                enabling 100% remote work capability within 48 hours.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded-xl">
                  <p className="text-3xl font-bold text-brand-accent">£45k+</p>
                  <p className="text-xs text-slate-400">Annual Savings</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl">
                  <p className="text-3xl font-bold text-brand-accent">0%</p>
                  <p className="text-xs text-slate-400">Downtime during migration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/it-server/800/600" 
            alt="Server Room" 
            className="rounded-2xl shadow-2xl grayscale opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/20 rounded-2xl" />
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: "James Harrington", role: "CEO, Harrington Logistics", quote: "Sunburst House transformed our IT from a headache into a strategic asset. Their response times are unmatched in London." },
          { name: "Sarah Miller", role: "Operations Director, Miller & Co", quote: "The cyber security audit they performed was eye-opening. We now feel completely secure and compliant with GDPR." }
        ].map((t, i) => (
          <div key={i} className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm italic text-slate-700 relative">
            <div className="absolute -top-4 left-8 bg-brand-accent text-white p-2 rounded-lg">
              <Users size={20} />
            </div>
            <p className="mb-6 leading-relaxed">"{t.quote}"</p>
            <div className="not-italic">
              <p className="font-bold text-slate-950">{t.name}</p>
              <p className="text-sm text-slate-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Final CTA */}
    <section className="section-padding bg-slate-50 border-y border-slate-200 text-center">
      <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your IT?</h2>
      <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
        Join hundreds of UK businesses that trust Sunburst House for their technology needs.
      </p>
      <button 
        onClick={() => setPage('contact')}
        className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-accent transition-all shadow-xl shadow-blue-900/20"
      >
        Get Your Free IT Audit
      </button>
    </section>
  </div>
);

const Services = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-20">
    <header className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Tailored IT solutions designed for the modern British enterprise. 
          From managed support to bespoke development.
        </p>
      </div>
    </header>

    <section className="section-padding space-y-24">
      {SERVICES.map((service, i) => (
        <motion.div 
          key={service.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
          <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
            <div className="w-16 h-16 bg-blue-50 text-brand-accent rounded-2xl flex items-center justify-center mb-8">
              <service.icon size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.overview}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-slate-950 mb-3 flex items-center gap-2">
                  <Target size={18} className="text-brand-accent" /> Target Audience
                </h4>
                <p className="text-sm text-slate-600">{service.target}</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-950 mb-3 flex items-center gap-2">
                  <BarChart3 size={18} className="text-brand-accent" /> Key Benefits
                </h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  {service.benefits.map((b, j) => <li key={j} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> {b}</li>)}
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
              <h4 className="font-bold text-slate-950 mb-4">Our Process</h4>
              <div className="flex items-center gap-4">
                {service.process.map((step, j) => (
                  <React.Fragment key={j}>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-xs font-bold mb-2">{j + 1}</div>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-slate-500">{step}</p>
                    </div>
                    {j < service.process.length - 1 && <div className="h-px bg-slate-200 flex-1 mb-6" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-6 bg-brand-primary text-white rounded-2xl">
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold">Starting from</p>
                <p className="text-3xl font-bold">{service.price}<span className="text-sm font-normal text-slate-400"> / month</span></p>
              </div>
              <button 
                onClick={() => setPage('contact')}
                className="bg-brand-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-400 transition-all"
              >
                Enquire Now
              </button>
            </div>
          </div>
          <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
            <img 
              src={`https://picsum.photos/seed/${service.id}/800/600`} 
              alt={service.title} 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl" />
          </div>
        </motion.div>
      ))}
    </section>
  </div>
);

const AboutUs = () => (
  <div className="pt-20">
    <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-8">Our Story</h1>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          Founded in the heart of London, Sunburst House began with a simple mission: 
          to provide British businesses with the same level of IT sophistication 
          usually reserved for global conglomerates.
        </p>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Today, we are a leading managed service provider (MSP) known for our 
          unwavering commitment to quality, security, and the success of our clients. 
          We believe that technology should be an enabler, not a barrier.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-3xl font-bold text-brand-accent mb-2">15+</h4>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Years Experience</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-brand-accent mb-2">250+</h4>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">UK Clients</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src="https://picsum.photos/seed/team1/400/500" alt="Team" className="rounded-2xl shadow-lg mt-12" referrerPolicy="no-referrer" />
        <img src="https://picsum.photos/seed/team2/400/500" alt="Office" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
      </div>
    </section>

    <section className="bg-slate-50 py-24 px-6 border-y border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Target className="text-brand-accent" /> Our Mission
          </h2>
          <p className="text-slate-600 leading-relaxed">
            To empower UK organisations by delivering innovative, secure, and 
            reliable IT solutions that foster growth and resilience in a digital-first world.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Globe className="text-brand-accent" /> Our Vision
          </h2>
          <p className="text-slate-600 leading-relaxed">
            To be the most trusted technology partner in the United Kingdom, 
            recognised for our technical excellence and human-centric approach to IT.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { title: "Integrity", desc: "We are honest, transparent, and always act in our clients' best interests." },
          { title: "Excellence", desc: "We strive for perfection in every ticket, project, and consultation." },
          { title: "Innovation", desc: "We stay ahead of the curve to bring you the latest technology benefits." },
          { title: "Security", desc: "Safety is at the core of everything we build and manage." }
        ].map((v, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <h4 className="text-xl font-bold mb-3 text-brand-accent">{v.title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-brand-primary text-white text-center">
      <Shield size={48} className="mx-auto mb-8 text-brand-accent" />
      <h2 className="text-3xl font-bold mb-6">GDPR & Compliance Commitment</h2>
      <p className="max-w-3xl mx-auto text-slate-300 leading-relaxed">
        As a UK-based company, we are fully committed to the Data Protection Act 2018 
        and UK GDPR. We implement rigorous security measures, regular audits, 
        and staff training to ensure your data—and your clients' data—is handled 
        with the highest level of care and legality.
      </p>
    </section>
  </div>
);

const Pricing = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-20">
    <header className="bg-slate-50 py-24 px-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Transparent Pricing</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Simple, predictable monthly plans with no hidden costs. 
          All prices exclude VAT at 20%.
        </p>
      </div>
    </header>

    <section className="section-padding grid grid-cols-1 lg:grid-cols-3 gap-8">
      {PRICING_PLANS.map((plan, i) => (
        <div 
          key={i} 
          className={`relative p-8 rounded-3xl border ${
            plan.popular ? 'border-brand-accent bg-white shadow-2xl scale-105 z-10' : 'border-slate-200 bg-slate-50'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Most Popular
            </div>
          )}
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="text-sm text-slate-500 mb-6">{plan.ideal}</p>
          <div className="mb-8">
            <span className="text-5xl font-bold">£{plan.price}</span>
            <span className="text-slate-500"> / month</span>
          </div>
          <ul className="space-y-4 mb-10">
            {plan.features.map((f, j) => (
              <li key={j} className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-brand-accent" /> {f}
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-slate-200 mb-8">
            <p className="text-xs font-bold text-slate-400 uppercase mb-2">Support Level</p>
            <p className="font-bold text-slate-900">{plan.support}</p>
          </div>
          <button 
            onClick={() => setPage('contact')}
            className={`w-full py-4 rounded-xl font-bold transition-all ${
              plan.popular ? 'bg-brand-accent text-white hover:bg-blue-600' : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {plan.cta}
          </button>
        </div>
      ))}
    </section>

    <section className="section-padding text-center">
      <div className="glass-panel p-12 rounded-3xl max-w-4xl mx-auto">
        <Building2 size={40} className="mx-auto mb-6 text-brand-accent" />
        <h2 className="text-3xl font-bold mb-4">Need a Custom Enterprise Solution?</h2>
        <p className="text-slate-600 mb-8">
          For organisations with over 100 users or complex multi-site requirements, 
          we offer bespoke SLAs and dedicated infrastructure management.
        </p>
        <button 
          onClick={() => setPage('contact')}
          className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-all"
        >
          Speak to our Enterprise Team
        </button>
      </div>
    </section>
  </div>
);

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-20">
      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>
          <p className="text-lg text-slate-600 mb-12">
            Have a question or ready to start your IT transformation? 
            Our London-based team is ready to help.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 text-brand-accent rounded-xl flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-950 mb-1">Call Us</h4>
                <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                <p className="text-xs text-slate-400 mt-1">{COMPANY_DETAILS.hours}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 text-brand-accent rounded-xl flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-950 mb-1">Email Us</h4>
                <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 text-brand-accent rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-950 mb-1">Visit Us</h4>
                <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-2">
              <MapPin size={32} />
              <p className="text-sm font-medium">Interactive Map Placeholder</p>
              <p className="text-xs">Central London Office</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
              <p className="text-slate-600">
                Thank you for contacting Sunburst House. One of our IT specialists 
                will be in touch within 2 business hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-brand-accent font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="John Smith" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Work Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="john@company.co.uk" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Company Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Acme Ltd" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Interested In</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-blue-100 outline-none transition-all">
                  <option>Managed IT Support</option>
                  <option>Cyber Security</option>
                  <option>Cloud Infrastructure</option>
                  <option>Software Development</option>
                  <option>IT Strategy</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input required type="checkbox" className="mt-1 w-4 h-4 text-brand-accent border-slate-300 rounded focus:ring-brand-accent" id="privacy" />
                <label htmlFor="privacy" className="text-xs text-slate-500 leading-relaxed">
                  I consent to Sunburst House processing my personal data in accordance with their <button type="button" className="text-brand-accent hover:underline">Privacy Policy</button> to respond to my enquiry.
                </label>
              </div>
              <button type="submit" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-accent transition-all shadow-lg shadow-blue-900/10">
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

const Legal = ({ type }: { type: 'terms' | 'privacy' }) => (
  <div className="pt-20">
    <section className="section-padding max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{type === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
        {type === 'terms' ? (
          <>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">1. Introduction</h2>
              <p>These Terms and Conditions govern the use of services provided by Sunburst House ("the Company", "we", "us"). By engaging our services, you agree to these terms in full.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">2. Payment Terms</h2>
              <p>All fees are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate (currently 20%). Invoices are payable within 14 days of issue unless otherwise agreed in writing.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">3. Intellectual Property</h2>
              <p>Unless otherwise stated, Sunburst House owns the intellectual property rights for all material and code generated during the provision of services, until full payment is received, at which point rights transfer to the client as per the specific service agreement.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">4. Confidentiality</h2>
              <p>Both parties agree to maintain the confidentiality of any proprietary information shared during the course of business. This obligation survives the termination of any agreement.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">5. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Sunburst House shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">6. Governing Law</h2>
              <p>These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </div>
          </>
        ) : (
          <>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">1. Data Collection</h2>
              <p>We collect personal data such as names, email addresses, and company details when you contact us or use our services. We also collect technical data via cookies to improve our website experience.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">2. Processing Purposes</h2>
              <p>Data is processed to provide IT services, respond to enquiries, maintain security, and comply with legal obligations under UK GDPR.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">3. Data Retention</h2>
              <p>We retain personal data only for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">4. Your Rights</h2>
              <p>Under UK GDPR, you have the right to access, correct, or erase your personal data. You also have the right to object to or restrict processing. Contact us at {COMPANY_DETAILS.email} to exercise these rights.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">5. Cookies</h2>
              <p>Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950 mb-4">6. Security Measures</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way.</p>
            </div>
          </>
        )}
      </div>
    </section>
  </div>
);

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

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
            {page === 'home' && <Home setPage={setPage} />}
            {page === 'services' && <Services setPage={setPage} />}
            {page === 'about' && <AboutUs />}
            {page === 'pricing' && <Pricing setPage={setPage} />}
            {page === 'contact' && <ContactUs />}
            {page === 'terms' && <Legal type="terms" />}
            {page === 'privacy' && <Legal type="privacy" />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}
