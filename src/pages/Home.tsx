import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Globe2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent opacity-70" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 mb-6 border border-indigo-100">
                UK's Leading IT Partner
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 tracking-tight mb-8 leading-[1.1]">
                Future-Proof Your <span className="text-indigo-600">British Business</span>
              </h1>
              <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                Oaklands Respite delivers enterprise-grade IT services, robust cybersecurity, and strategic cloud solutions tailored for the UK market. We handle the tech, so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center group"
                >
                  Book a Free Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Logos Placeholder */}
      <section className="py-12 border-y border-zinc-100 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50 grayscale">
            <div className="flex justify-center font-bold text-xl italic">London Tech Hub</div>
            <div className="flex justify-center font-bold text-xl italic">UK Enterprise</div>
            <div className="flex justify-center font-bold text-xl italic">British Finance</div>
            <div className="flex justify-center font-bold text-xl italic">Global Logistics</div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100">
                <img 
                  src="https://picsum.photos/seed/it-office/800/800" 
                  alt="Modern UK Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-zinc-900">99.9%</p>
                    <p className="text-sm text-zinc-500">Uptime Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">
                Why British SMEs Trust Oaklands Respite
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                In an era of rapid digital transformation, having a local IT partner who understands the UK regulatory landscape (GDPR, Cyber Essentials) is critical. We provide more than just support; we provide a competitive edge.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: 'GDPR Compliant', desc: 'Full data protection alignment.' },
                  { icon: Zap, title: 'Rapid Response', desc: 'Average 15-min response time.' },
                  { icon: Users, title: 'Local Experts', desc: 'UK-based certified engineers.' },
                  { icon: BarChart3, title: 'Strategic ROI', desc: 'Tech that drives your bottom line.' },
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="shrink-0 w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">{item.title}</h4>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Empower</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Specialised IT solutions for the unique challenges of the UK's most dynamic sectors.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Financial Services', desc: 'Secure, high-performance infrastructure for London\'s fintech and traditional banking sectors.' },
              { title: 'Legal & Professional', desc: 'Confidentiality-first IT systems with robust document management and encryption.' },
              { title: 'Manufacturing', desc: 'IoT integration and smart factory solutions to boost productivity across British industry.' },
              { title: 'Healthcare', desc: 'NHS-aligned data security and reliable systems for private clinics and care providers.' },
              { title: 'Retail & E-commerce', desc: 'Omnichannel support and scalable cloud hosting for the UK\'s digital high street.' },
              { title: 'Non-Profit', desc: 'Cost-effective IT strategies that maximise impact for UK registered charities.' },
            ].map((industry, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:border-indigo-500 transition-colors group">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-indigo-400 transition-colors">{industry.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">Measurable Results</h2>
              <p className="text-lg text-zinc-600">Real-world impact for our clients across the United Kingdom.</p>
            </div>
            <Link to="/services" className="text-indigo-600 font-semibold flex items-center hover:underline">
              View all services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-100 mb-6">
                <img src="https://picsum.photos/seed/case1/800/450" alt="Case Study 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-indigo-600 text-sm font-bold uppercase tracking-wider">
                  <Globe2 size={16} />
                  <span>Cloud Migration</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Saving £45,000 Annually for a Manchester Logistics Firm</h3>
                <p className="text-zinc-600">By migrating legacy servers to a hybrid-cloud environment, we reduced hardware maintenance costs by 60% and eliminated downtime.</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-100 mb-6">
                <img src="https://picsum.photos/seed/case2/800/450" alt="Case Study 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-indigo-600 text-sm font-bold uppercase tracking-wider">
                  <Shield size={16} />
                  <span>Cybersecurity</span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Preventing a £1.2M Ransomware Threat in Birmingham</h3>
                <p className="text-zinc-600">Our 24/7 SOC detected and neutralized a sophisticated phishing campaign targeting a mid-sized law firm within minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { name: 'Alistair Graham', role: 'CEO, BritTech Solutions', text: 'Oaklands Respite transformed our IT from a headache into a strategic asset. Their UK-based team is incredibly responsive.' },
              { name: 'Sarah Jenkins', role: 'Operations Director, London Legal', text: 'The peace of mind knowing our data is GDPR compliant and secure is invaluable. Truly the best IT partner we\'ve had.' },
              { name: 'David Thompson', role: 'Founder, Midlands Manufacturing', text: 'They understood our specific needs as a British manufacturer. The ROI on our new cloud system was evident within months.' },
            ].map((t, i) => (
              <div key={i} className="space-y-6">
                <Quote className="text-indigo-300 opacity-50" size={40} />
                <p className="text-xl font-medium leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-indigo-200 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">Ready to elevate your business technology?</h2>
          <p className="text-xl text-zinc-600 mb-12">Join hundreds of successful UK businesses powered by Oaklands Respite.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-zinc-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl"
          >
            Get a Free Consultation
            <ArrowRight className="ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
