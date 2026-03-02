import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, CASE_STUDIES, COMPANY_DETAILS } from '../constants';
import { formatCurrency } from '../lib/utils';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide uppercase mb-6">
                British IT Excellence
              </span>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Empowering UK Business through <span className="text-indigo-600">Smarter IT</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                From Hertfordshire to Barnet, we provide managed IT services that drive efficiency, 
                secure your data, and scale with your ambitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 group"
                >
                  Book a Free Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-semibold hover:bg-zinc-50 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-0" />
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Why Choose {COMPANY_DETAILS.name}?</h2>
            <p className="text-zinc-600">We don't just fix computers; we build the technological foundation for your business success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Security First", desc: "Enterprise-grade protection tailored for UK SMEs." },
              { icon: Zap, title: "Rapid Response", desc: "Local engineers ready to support you when it matters most." },
              { icon: Users, title: "Personal Approach", desc: "No call centres. Just direct access to expert technicians." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Real Results for Local Clients</h2>
              <p className="text-zinc-600">See how we've helped businesses in Hertfordshire and North London thrive.</p>
            </div>
            <Link to="/about" className="text-indigo-600 font-semibold flex items-center hover:underline">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl bg-zinc-900 aspect-[16/9] mb-8">
                  <img 
                    src={`https://picsum.photos/seed/${study.client}/1200/800`} 
                    alt={study.title}
                    className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-2">{study.client}</span>
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-zinc-500 uppercase font-semibold mb-1">Measurable Result</p>
                    <p className="text-lg font-bold text-zinc-900">{study.result}</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 uppercase font-semibold mb-1">Business Value</p>
                    <p className="text-lg font-bold text-indigo-600">{study.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-indigo-600 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Trusted by Business Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                <Quote className="w-8 h-8 text-indigo-300 mb-6 opacity-50" />
                <p className="text-white text-lg mb-8 italic leading-relaxed">"{t.content}"</p>
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-indigo-200 text-sm">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30" />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">Ready to secure your digital future?</h2>
              <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
                Join hundreds of UK businesses who trust us with their technology. 
                Get a free infrastructure audit today.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all text-lg"
              >
                Contact Our Experts
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
