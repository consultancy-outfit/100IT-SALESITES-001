import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, CASE_STUDIES, COMPANY_DETAILS } from '../constants';

export default function Home() {
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
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                UK's Leading Managed IT Partner
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                IT Support That <span className="text-indigo-600">Empowers</span> Your Business.
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Proactive managed services, expert cyber security, and strategic cloud solutions tailored for the modern British enterprise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-200">
                  Book a Free Audit <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
                  Explore Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern IT Infrastructure" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
                <div className="text-3xl font-bold text-indigo-600 mb-1">99.9%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Uptime Guaranteed</div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose {COMPANY_DETAILS.name}?</h2>
            <p className="text-slate-600">We don't just fix computers; we build technology foundations that drive growth and security.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Security First', desc: 'Enterprise-grade cyber security built into every solution we provide.' },
              { icon: Zap, title: 'Rapid Response', desc: 'Average helpdesk response time of under 15 minutes for critical issues.' },
              { icon: Users, title: 'Dedicated Team', desc: 'Your own account manager and team of certified UK-based engineers.' }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100">
                  <benefit.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Industries We Serve Across the UK</h2>
              <div className="grid grid-cols-2 gap-4">
                {['Legal & Professional', 'Healthcare', 'Manufacturing', 'Finance', 'Retail & E-commerce', 'Education'].map((industry, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="text-indigo-400 w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-indigo-600/20 p-8 rounded-3xl border border-indigo-500/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Committed to Excellence</h3>
                <p className="text-indigo-100 mb-8 leading-relaxed">
                  Our expertise spans multiple sectors, ensuring we understand the unique regulatory and operational challenges your business faces in the UK market.
                </p>
                <Link to="/about" className="text-white font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn about our approach <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Measurable Results</h2>
              <p className="text-slate-600">See how we've helped British businesses optimize their IT spend and performance.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-indigo-600 font-bold text-lg mb-2">{study.result}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{study.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{study.description}</p>
                <div className="h-1 w-12 bg-indigo-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                <div className="text-indigo-600 mb-6 font-serif text-5xl opacity-20 absolute top-4 left-4">"</div>
                <p className="text-slate-600 italic mb-8 relative z-10">{t.content}</p>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Secure Your IT Future?</h2>
              <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto">
                Join hundreds of successful UK businesses that trust {COMPANY_DETAILS.name} for their technology needs.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all shadow-lg">
                  Get a Free Quote
                </Link>
                <Link to="/pricing" className="bg-indigo-700 text-white border border-indigo-500 px-10 py-4 rounded-full font-bold hover:bg-indigo-800 transition-all">
                  View Pricing
                </Link>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
