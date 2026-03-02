import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Shield, Cloud, Headset, 
  BarChart3, Lock, Mail, Phone, MapPin, CheckCircle2,
  ArrowRight, Facebook, Twitter, Linkedin, ExternalLink
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES, PRICING_PLANS } from './constants';

// --- Navigation State ---
type Page = 'home' | 'services' | 'about' | 'pricing' | 'contact' | 'terms' | 'privacy';

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setPage('home')}>
            <div className="bg-indigo-600 p-2 rounded-lg mr-2">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              House of St Martin
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${currentPage === item.id ? 'text-indigo-600' : 'text-slate-600'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setPage('contact')}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
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
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setPage(item.id); setIsOpen(false); }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => { setPage('contact'); setIsOpen(false); }}
                className="w-full mt-4 bg-indigo-600 text-white px-3 py-4 rounded-lg font-semibold"
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
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <Shield className="text-indigo-400 w-8 h-8 mr-2" />
              <span className="text-2xl font-bold text-white">House of St Martin</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Leading the way in digital transformation for British businesses. Professional IT services with a human touch.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setPage('home')} className="hover:text-indigo-400 transition-colors">Home</button></li>
              <li><button onClick={() => setPage('services')} className="hover:text-indigo-400 transition-colors">Services</button></li>
              <li><button onClick={() => setPage('about')} className="hover:text-indigo-400 transition-colors">About Us</button></li>
              <li><button onClick={() => setPage('pricing')} className="hover:text-indigo-400 transition-colors">Pricing</button></li>
              <li><button onClick={() => setPage('contact')} className="hover:text-indigo-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setPage('terms')} className="hover:text-indigo-400 transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => setPage('privacy')} className="hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => setPage('privacy')} className="hover:text-indigo-400 transition-colors">Cookie Policy</button></li>
              <li><button onClick={() => setPage('privacy')} className="hover:text-indigo-400 transition-colors">GDPR Compliance</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-indigo-400 shrink-0 mt-1" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-indigo-400 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-indigo-400 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </li>
              <li className="pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-500">CRN: {COMPANY_DETAILS.crn}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Registered in England & Wales. VAT Registered.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
              Empowering British Enterprise
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
              Premium IT Solutions <br />
              <span className="text-indigo-600">Built for Growth.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              House of St Martin provides world-class managed IT support, cybersecurity, and cloud strategy tailored for the unique needs of UK businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setPage('services')}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center shadow-xl shadow-indigo-200"
              >
                Explore Services <ChevronRight className="ml-2" />
              </button>
              <button 
                onClick={() => setPage('contact')}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Book a Consultation
              </button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8 grayscale opacity-50">
              <span className="font-bold text-slate-400">TRUSTED BY:</span>
              <div className="flex space-x-6">
                <div className="h-6 w-24 bg-slate-300 rounded"></div>
                <div className="h-6 w-24 bg-slate-300 rounded"></div>
                <div className="h-6 w-24 bg-slate-300 rounded"></div>
              </div>
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Office" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose House of St Martin?</h2>
          <p className="text-slate-600 text-lg">We combine technical excellence with a deep understanding of the British business landscape.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Headset className="text-indigo-600" />, title: "UK-Based Support", desc: "Our helpdesk is 100% UK-based, ensuring clear communication and rapid response times." },
            { icon: <Shield className="text-indigo-600" />, title: "Security First", desc: "Every solution we build has security at its core, protecting your business from evolving threats." },
            { icon: <BarChart3 className="text-indigo-600" />, title: "Strategic ROI", desc: "We don't just fix problems; we provide technology that drives measurable business value." }
          ].map((benefit, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
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
            <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">Case Study</span>
            <h2 className="text-4xl font-bold mt-4 mb-8">Digital Transformation for Midlands Logistics</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We helped a leading Telford-based logistics firm migrate their entire legacy infrastructure to a secure hybrid-cloud environment.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="border-l-2 border-indigo-500 pl-6">
                <div className="text-3xl font-bold text-white">£45,000</div>
                <div className="text-slate-400 text-sm">Annual Cost Savings</div>
              </div>
              <div className="border-l-2 border-emerald-500 pl-6">
                <div className="text-3xl font-bold text-white">99.99%</div>
                <div className="text-slate-400 text-sm">Uptime Achieved</div>
              </div>
            </div>
            <button 
              onClick={() => setPage('services')}
              className="inline-flex items-center text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
            >
              View full case study <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
              alt="Team working" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-2xl font-bold">"A game changer for our operations."</p>
              <p className="text-indigo-200 mt-2">— James Harrison, CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Jenkins", role: "Director, London Legal Partners", text: "The team at House of St Martin transformed our remote working capabilities overnight. Their support is second to none." },
            { name: "David Thompson", role: "IT Manager, Northern Manufacturing", text: "Professional, knowledgeable, and always available. They feel like a true extension of our internal team." },
            { name: "Alistair Cook", role: "Founder, Cook & Co", text: "Finally, an IT company that speaks plain English and delivers on their promises. Highly recommended for any UK business." }
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-slate-700 italic mb-6">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20 bg-indigo-600">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to Secure Your Digital Future?</h2>
        <p className="text-indigo-100 text-xl mb-10">Join hundreds of British businesses who trust House of St Martin for their IT needs.</p>
        <button 
          onClick={() => setPage('contact')}
          className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl"
        >
          Get Started Today
        </button>
      </div>
    </section>
  </div>
);

const ServicesPage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Our IT Services</h1>
        <p className="text-lg text-slate-600">Comprehensive technology solutions designed to help your business thrive in the digital age.</p>
      </div>

      <div className="space-y-24">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
              <div className="inline-block p-3 bg-indigo-100 rounded-2xl text-indigo-600 mb-6">
                {index === 0 && <Headset size={32} />}
                {index === 1 && <Cloud size={32} />}
                {index === 2 && <Lock size={32} />}
                {index === 3 && <BarChart3 size={32} />}
                {index === 4 && <Shield size={32} />}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.overview}</p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Ideal For</h4>
                  <p className="text-slate-600">{service.target}</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-3">Starting From</h4>
                  <p className="text-2xl font-bold text-indigo-600">£{service.startingPrice}<span className="text-sm text-slate-400 font-normal"> / month</span></p>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="font-bold text-slate-900 mb-4">Our Process</h4>
                <div className="flex flex-wrap gap-3">
                  {service.process.map((step, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-700 flex items-center">
                      <span className="w-5 h-5 rounded-full bg-white text-indigo-600 flex items-center justify-center text-xs font-bold mr-2 border border-indigo-100">{i + 1}</span>
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setPage('contact')}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all"
              >
                Enquire About {service.title}
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-6">Key Benefits</h4>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="text-emerald-500 mr-3 shrink-0 mt-1" size={20} />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-slate-500 text-sm mb-2">Need a custom solution?</p>
                  <p className="text-slate-900 font-bold">Contact our consultants for a bespoke proposal tailored to your infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Story Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Our Story</h1>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Founded in the heart of Shropshire, House of St Martin began with a simple mission: to provide British businesses with the high-calibre IT support typically reserved for global corporations.
            </p>
            <p>
              Named after the patron saint of service and protection, we have spent over a decade building a reputation for technical excellence, unwavering reliability, and a deeply personal approach to client relationships.
            </p>
            <p>
              Today, we serve hundreds of organisations across the UK, from dynamic startups in London to established manufacturing firms in the Midlands, helping them navigate the complexities of digital transformation with confidence.
            </p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
            alt="Our Team" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div className="text-4xl font-bold text-indigo-600">12+</div>
            <div className="text-slate-500 font-medium">Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-32">
        <div className="bg-indigo-600 p-12 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
          <p className="text-indigo-100 text-lg leading-relaxed">
            To empower British enterprise through innovative, secure, and reliable technology solutions that drive sustainable growth and operational excellence.
          </p>
        </div>
        <div className="bg-slate-900 p-12 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            To be the UK's most trusted partner for digital transformation, known for our integrity, technical mastery, and commitment to our clients' success.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-32">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Our Core Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Integrity", desc: "We do what's right for our clients, even when it's the harder path." },
            { title: "Excellence", desc: "We hold ourselves to the highest technical and professional standards." },
            { title: "Agility", desc: "We adapt rapidly to the evolving technological and business landscape." },
            { title: "Partnership", desc: "We succeed only when our clients succeed. We are one team." }
          ].map((v, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h4>
              <p className="text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance */}
      <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8">
        <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
          <Shield className="text-white" size={40} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Commitment to GDPR & Security</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            As a UK-based IT provider, we take data protection seriously. We are fully GDPR compliant and Cyber Essentials Plus certified, ensuring your data and your clients' data is handled with the highest level of security and legal rigour.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const PricingPage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Transparent Pricing</h1>
        <p className="text-lg text-slate-600">Simple, predictable plans designed to scale with your business. All prices are in GBP.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan, i) => (
          <div key={i} className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-indigo-600 shadow-2xl scale-105 z-10 bg-white' : 'border-slate-200 bg-slate-50'} flex flex-col`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6">Ideal for {plan.idealFor}</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-extrabold text-slate-900">£{plan.price}</span>
                <span className="text-slate-500 ml-2">/ month</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">{plan.vat}</p>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              <p className="font-bold text-slate-900 text-sm uppercase tracking-wider">Features Included:</p>
              {plan.features.map((f, j) => (
                <div key={j} className="flex items-center text-slate-600">
                  <CheckCircle2 size={18} className="text-indigo-600 mr-3 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm"><span className="font-bold text-slate-900">Support Level:</span> {plan.supportLevel}</p>
              </div>
            </div>

            <button 
              onClick={() => setPage('contact')}
              className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'}`}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-slate-900 rounded-3xl text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Need a Custom Enterprise Solution?</h3>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          For larger organisations requiring dedicated infrastructure, bespoke security protocols, or multi-site support, we offer tailored enterprise agreements.
        </p>
        <button 
          onClick={() => setPage('contact')}
          className="bg-indigo-500 text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-400 transition-all"
        >
          Request a Bespoke Quote
        </button>
      </div>
    </div>
  </div>
);

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
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-12">
              Have a question about our services or need immediate IT assistance? Our team is ready to help.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0 mr-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Registered Office</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0 mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0 mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0 mr-6">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            <div className="h-64 bg-slate-200 rounded-3xl overflow-hidden relative border border-slate-300">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium italic">
                Interactive Map Placeholder (Telford Area)
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-600">Thank you for contacting House of St Martin. One of our consultants will be in touch within 2 business hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-indigo-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="Acme Ltd" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="john@company.co.uk" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white">
                    <option>Managed IT Support</option>
                    <option>Cloud Migration</option>
                    <option>Cyber Security</option>
                    <option>IT Consultancy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <div className="flex items-start">
                  <input required type="checkbox" className="mt-1 mr-3 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
                  <label className="text-sm text-slate-500">
                    I consent to House of St Martin processing my data in accordance with the <button type="button" className="text-indigo-600 hover:underline">Privacy Policy</button>.
                  </label>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
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

const TermsPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-900 mb-12">Terms and Conditions</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>These terms and conditions govern the use of services provided by House of St Martin ("the Company"). By engaging our services, you agree to be bound by these terms.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Payment Terms</h2>
          <p>All fees are quoted in Pounds Sterling (GBP) and are subject to VAT at the prevailing rate. Payment for monthly managed services is due on the 1st of each month via Direct Debit. Project-based work requires a 50% deposit upon commencement.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
          <p>All intellectual property rights in any materials produced by the Company shall remain the property of the Company until full payment has been received, at which point rights shall transfer to the Client.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Confidentiality</h2>
          <p>Both parties agree to keep confidential all information obtained during the course of the engagement that is marked as confidential or would reasonably be considered confidential.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
          <p>The Company's total liability for any claim arising out of or in connection with the services shall be limited to the total fees paid by the Client in the 12 months preceding the claim.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the English courts.</p>
        </section>
      </div>
    </div>
  </div>
);

const PrivacyPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-900 mb-12">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Data Collection</h2>
          <p>We collect personal data including names, email addresses, phone numbers, and company details when you interact with our website or engage our services. This is necessary for the performance of our contract with you.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Processing Purposes</h2>
          <p>We process your data to provide IT support services, manage your account, communicate with you regarding service updates, and for internal marketing purposes (where you have consented).</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Retention</h2>
          <p>We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Your Rights</h2>
          <p>Under GDPR, you have the right to access, correct, or erase your personal data. You also have the right to object to processing and the right to data portability. To exercise these rights, please contact info@houseofstmartin.co.uk.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies</h2>
          <p>Our website uses cookies to enhance your browsing experience and analyse site traffic. You can manage your cookie preferences through your browser settings.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Security Measures</h2>
          <p>We implement robust technical and organisational measures to protect your data, including encryption, secure access controls, and regular security audits.</p>
        </section>
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar currentPage={page} setPage={setPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {page === 'home' && <HomePage setPage={setPage} />}
            {page === 'services' && <ServicesPage setPage={setPage} />}
            {page === 'about' && <AboutPage />}
            {page === 'pricing' && <PricingPage setPage={setPage} />}
            {page === 'contact' && <ContactPage />}
            {page === 'terms' && <TermsPage />}
            {page === 'privacy' && <PrivacyPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}
