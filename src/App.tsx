import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Cloud, 
  Lock, 
  Network, 
  Database, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Check, 
  Menu, 
  X,
  ArrowRight,
  ExternalLink,
  Users,
  Target,
  Award,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES, PRICING_PLANS, TESTIMONIALS, CASE_STUDIES } from './constants';
import { Service, PricingPlan } from './types';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About Us', id: 'about' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
              <Network className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">Innovate <span className="text-indigo-600">UK</span></span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  activePage === item.id ? 'text-indigo-600' : 'text-zinc-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button 
              onClick={() => setActivePage('contact')}
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-600 p-2">
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
            className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-zinc-600 hover:text-indigo-600 hover:bg-zinc-50 rounded-lg"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  setActivePage('contact');
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg text-base font-medium"
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

const Footer = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center mr-2">
                <Network className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Innovate <span className="text-indigo-600">UK</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering British businesses with world-class IT infrastructure, security, and support. Your trusted partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                <span className="text-xs font-bold text-white">In</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                <span className="text-xs font-bold text-white">X</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setActivePage('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setActivePage('services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => setActivePage('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setActivePage('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setActivePage('terms')} className="hover:text-white transition-colors">Terms & Conditions</button></li>
              <li><button onClick={() => setActivePage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => setActivePage('privacy')} className="hover:text-white transition-colors">GDPR Compliance</button></li>
              <li><button onClick={() => setActivePage('privacy')} className="hover:text-white transition-colors">Cookie Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-indigo-500 shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-indigo-500 shrink-0" />
                <span className="break-all">{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-2">Company Details</p>
              <div className="text-sm space-y-1">
                <p>Company Name: {COMPANY_DETAILS.name}</p>
                <p>Registered Office: {COMPANY_DETAILS.address}</p>
                <p>Company Registration Number (CRN): {COMPANY_DETAILS.crn}</p>
                <p>VAT Number: GB 00000000</p>
              </div>
            </div>
            <div className="md:text-right">
              <p className="text-sm">© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p className="text-xs text-zinc-600 mt-1">Designed & Developed in the UK.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                British IT Excellence
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Modern IT Solutions for <span className="text-indigo-600">UK Businesses</span>.
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl">
                From managed support to advanced cyber security, we provide the technical backbone your company needs to thrive in a digital-first economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setActivePage('services')}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center"
                >
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActivePage('contact')}
                  className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </button>
              </div>
              
              <div className="mt-12 flex items-center space-x-8">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-zinc-900">Trusted by 200+ UK Firms</p>
                  <p className="text-zinc-500">Across Yorkshire & Beyond</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 lg:mt-0 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-office/800/600" 
                  alt="Modern IT Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"></div>
              
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl hidden xl:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Uptime Guarantee</p>
                    <p className="text-xl font-bold text-zinc-900">99.99%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">Comprehensive IT Focus</h2>
            <p className="text-lg text-zinc-600">
              We specialize in delivering robust IT infrastructure that scales with your business. Our approach combines British engineering precision with modern cloud agility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Strategic Consultancy", desc: "Aligning your technology roadmap with your commercial goals.", icon: Target },
              { title: "Expert Support", desc: "UK-based helpdesk available round the clock for your peace of mind.", icon: Users },
              { title: "Certified Security", desc: "Protecting your digital assets with Cyber Essentials frameworks.", icon: ShieldCheck }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-zinc-100 hover:border-indigo-100 hover:bg-zinc-50 transition-all group">
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <item.icon className="text-indigo-600 w-7 h-7 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-8">Industries We Serve in the UK</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Manufacturing & Engineering",
                  "Legal & Professional Services",
                  "Logistics & Supply Chain",
                  "Retail & E-commerce",
                  "Education & Non-Profit",
                  "Healthcare & Biotech"
                ].map((industry, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="font-medium text-zinc-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/ind1/400/500" alt="Industry" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/ind2/400/300" alt="Industry" className="rounded-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/ind3/400/300" alt="Industry" className="rounded-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/ind4/400/500" alt="Industry" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">Measurable Results</h2>
            <p className="text-zinc-600">Real-world impact for our British clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-zinc-50 rounded-3xl p-8 lg:p-12 border border-zinc-100">
                <h3 className="text-2xl font-bold text-zinc-900 mb-6">{study.title}</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">The Challenge</p>
                    <p className="text-zinc-700">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Our Solution</p>
                    <p className="text-zinc-700">{study.solution}</p>
                  </div>
                  <div className="pt-6 border-t border-zinc-200">
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">The Result</p>
                    <p className="text-xl font-bold text-zinc-900">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-indigo-100">What business leaders say about us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <p className="text-lg italic mb-8">"{t.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-400 mr-4 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${t.name}/100/100`} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-indigo-200">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Modernise Your IT?</h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                Join hundreds of UK businesses that trust us with their critical infrastructure. Let's discuss your goals today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => setActivePage('contact')}
                  className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all"
                >
                  Get Started Now
                </button>
                <button 
                  onClick={() => setActivePage('pricing')}
                  className="bg-transparent text-white border border-zinc-700 px-10 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all"
                >
                  View Pricing
                </button>
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const icons: Record<string, any> = {
    ShieldCheck, Cloud, Lock, Network, Database
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 mb-6">Our Core Services</h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Tailored IT solutions designed for the unique challenges of the British business landscape.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, i) => {
            const Icon = icons[service.icon] || ShieldCheck;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
                    <Icon className="text-white w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-zinc-600 mb-8 leading-relaxed">{service.overview}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">Target Audience</h4>
                      <p className="text-zinc-600">{service.targetAudience}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">Starting From</h4>
                      <p className="text-2xl font-bold text-indigo-600">{service.startingPrice}</p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">Key Benefits</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-zinc-600">
                          <Check className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-4">Our Process</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, idx) => (
                        <span key={idx} className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-full">
                          {idx + 1}. {step}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/800/800`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Decorative accent */}
                  <div className={`absolute -z-10 w-full h-full bg-indigo-100 rounded-3xl top-8 ${i % 2 === 0 ? '-left-8' : '-right-8'}`}></div>
                </div>
              </motion.div>
            );
          })}
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
            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 mb-8">Our Story</h1>
            <p className="text-xl text-zinc-600 mb-6 leading-relaxed">
              Founded in the heart of Barnsley, Innovate UK IT Services began with a simple mission: to provide enterprise-grade technology solutions to the hardworking businesses of South Yorkshire and beyond.
            </p>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Over the last decade, we have grown from a small local helpdesk into a leading regional IT consultancy, known for our integrity, technical prowess, and commitment to British business success.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-indigo-600 mb-2">10+</p>
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-indigo-600 mb-2">250+</p>
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Clients Served</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/about-team/800/600" alt="Our Team" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 max-w-xs">
              <p className="text-zinc-900 font-bold mb-2">"Technology is just a tool. Our people are the real solution."</p>
              <p className="text-sm text-zinc-500">— Founder's Motto</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="bg-zinc-50 p-12 rounded-[2.5rem]">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center">
              <Target className="mr-3 text-indigo-600" /> Our Mission
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              To empower UK organisations by delivering reliable, secure, and innovative IT infrastructure that drives efficiency and growth, backed by exceptional local support.
            </p>
          </div>
          <div className="bg-zinc-900 p-12 rounded-[2.5rem] text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Cloud className="mr-3 text-indigo-400" /> Our Vision
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              To be the most trusted IT partner in the North of England, recognised for our technical excellence and our contribution to the regional digital economy.
            </p>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Integrity", desc: "Honest advice, always in the client's best interest." },
              { title: "Excellence", desc: "Striving for perfection in every cable run and server config." },
              { title: "Innovation", desc: "Staying ahead of the curve to keep you competitive." },
              { title: "Responsiveness", desc: "Because we know your business can't wait." }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-indigo-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">{value.title}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-50 p-12 lg:p-20 rounded-[3rem]">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="w-16 h-16 text-indigo-600 mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">GDPR & Compliance</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We take data protection seriously. As a UK-based firm, we are fully committed to GDPR compliance. We assist our clients in implementing robust data handling policies and security measures that meet the highest regulatory standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingPage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            No hidden fees. Just professional IT support tailored to your business scale.
          </p>
          <p className="mt-4 text-sm font-bold text-zinc-500 uppercase tracking-widest">All prices exclude VAT at 20%</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 lg:p-10 rounded-3xl border ${
                plan.isPopular ? 'border-indigo-600 bg-zinc-900 text-white shadow-2xl scale-105 z-10' : 'border-zinc-200 bg-white text-zinc-900'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-8 ${plan.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>{plan.idealFor}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>/user/month</span>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Support Level</p>
                <p className="font-semibold">{plan.supportLevel}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.isPopular ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setActivePage('contact')}
                className={`w-full py-4 rounded-full font-bold transition-all ${
                  plan.isPopular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-zinc-50 rounded-[3rem] p-12 text-center">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
            For larger enterprises or specific project-based work (like network installations or cloud migrations), we provide bespoke quotes based on your exact requirements.
          </p>
          <button 
            onClick={() => setActivePage('contact')}
            className="text-indigo-600 font-bold flex items-center justify-center mx-auto hover:text-indigo-700"
          >
            Request a Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
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
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 mb-8">Get in Touch</h1>
            <p className="text-xl text-zinc-600 mb-12">
              Have a question or ready to start your project? Our UK-based team is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mr-6 shrink-0">
                  <MapPin className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Our Office</h4>
                  <p className="text-zinc-600">{COMPANY_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mr-6 shrink-0">
                  <Phone className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Phone</h4>
                  <p className="text-zinc-600">{COMPANY_DETAILS.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mr-6 shrink-0">
                  <Mail className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Email</h4>
                  <p className="text-zinc-600 break-all">{COMPANY_DETAILS.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mr-6 shrink-0">
                  <Clock className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Business Hours</h4>
                  <p className="text-zinc-600">{COMPANY_DETAILS.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
              <h4 className="font-bold text-zinc-900 mb-4">Visit Us</h4>
              <div className="aspect-video bg-zinc-200 rounded-xl flex items-center justify-center text-zinc-400">
                <MapPin className="w-12 h-12" />
                <span className="ml-2 font-medium">Map Placeholder</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-zinc-100">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check className="text-emerald-600 w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-4">Message Sent!</h2>
                <p className="text-zinc-600">Thank you for reaching out. A member of our team will be in touch within 1 business hour.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-indigo-600 font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-zinc-900 mb-2">Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-900 mb-2">Company Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-900 mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-900 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all">
                    <option>Managed IT Support</option>
                    <option>Cloud Solutions</option>
                    <option>Cyber Security</option>
                    <option>Network Infrastructure</option>
                    <option>Backup & Recovery</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-900 mb-2">Your Message</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"></textarea>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" required className="mt-1 mr-3" />
                  <span className="text-xs text-zinc-500">
                    I consent to Innovate UK IT Services processing my data in accordance with their Privacy Policy. I understand my information will be used to respond to this inquiry.
                  </span>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all">
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
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-12">{title}</h1>
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-8">
          {content}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'pricing': return <PricingPage setActivePage={setActivePage} />;
      case 'contact': return <ContactPage />;
      case 'terms': return (
        <LegalPage 
          title="Terms & Conditions" 
          content={
            <>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
                <p>Welcome to Innovate UK IT Services. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions in full.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">2. Intellectual Property Rights</h2>
                <p>Unless otherwise stated, Innovate UK IT Services and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">3. Payment Terms</h2>
                <p>All services are billed in Great British Pounds (£). Standard payment terms are 14 days from the date of invoice unless otherwise agreed in writing. Late payments may incur interest charges in accordance with UK law.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">4. Confidentiality</h2>
                <p>We agree to keep all client data and business information strictly confidential. This obligation extends to all employees and contractors of Innovate UK IT Services.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">5. Limitation of Liability</h2>
                <p>Innovate UK IT Services will not be liable for any indirect, special, or consequential loss or damage arising under these terms and conditions or in connection with our website or services.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">6. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
              </section>
            </>
          } 
        />
      );
      case 'privacy': return (
        <LegalPage 
          title="Privacy Policy" 
          content={
            <>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">1. Data Collection</h2>
                <p>We collect information you provide directly to us, such as when you fill out a contact form or request a quote. This may include your name, email, company name, and phone number.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">2. Processing Purposes</h2>
                <p>We use your data to respond to your inquiries, provide the services you request, and send you important updates regarding your account or our services.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">3. GDPR Compliance</h2>
                <p>In accordance with the General Data Protection Regulation (GDPR), we ensure that your data is processed lawfully, fairly, and transparently. You have the right to access, rectify, or erase your personal data at any time.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">4. Data Retention</h2>
                <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">5. Cookies</h2>
                <p>Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, although this may affect the functionality of the site.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-zinc-900 mb-4">6. Security Measures</h2>
                <p>We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction.</p>
              </section>
            </>
          } 
        />
      );
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
