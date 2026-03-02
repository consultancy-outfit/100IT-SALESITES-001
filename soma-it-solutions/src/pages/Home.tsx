import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Cloud, Lock, Zap, Users, CheckCircle, ArrowRight, PlayCircle } from 'lucide-react';
import { SERVICES, TESTIMONIALS, CASE_STUDIES, COMPANY_DETAILS } from '../constants';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-100">
                <Shield className="w-4 h-4" />
                <span>Cyber Essentials Certified IT Partner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                Empowering <span className="text-emerald-600">London's</span> Digital Future
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Specialized IT services and healthcare technology solutions for businesses across Central London. We provide the infrastructure you need to thrive in a digital-first world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-200"
                >
                  Get a Free Audit <ChevronRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/services" 
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  Our Services <PlayCircle className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      className="w-10 h-10 rounded-full border-2 border-white"
                      referrerPolicy="no-referrer"
                      alt="User"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  Trusted by <span className="font-bold text-slate-900">500+</span> businesses across the UK
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-emerald-100/50 rounded-3xl blur-2xl -z-10"></div>
              <img 
                src="https://picsum.photos/seed/it-london/1200/800" 
                alt="London IT Infrastructure" 
                className="rounded-3xl shadow-2xl border border-white/20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Zap className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-bold text-slate-900">99.9% Uptime</span>
                </div>
                <p className="text-xs text-slate-500">Guaranteed service availability for all managed clients.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Why Partner With Us</h2>
            <h3 className="text-4xl font-bold text-slate-900">Expertise You Can Trust</h3>
            <p className="text-slate-600">We combine British engineering standards with cutting-edge technology to deliver superior IT outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Security First", desc: "Every solution we build is hardened with enterprise-grade security protocols." },
              { icon: Users, title: "Local Support", desc: "Our engineers are based in London, ready to provide on-site support when you need it." },
              { icon: Zap, title: "Proactive Care", desc: "We fix problems before they impact your business through 24/7 monitoring." }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all group">
                <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                  <benefit.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">Tailored Solutions for UK Industries</h2>
              <p className="text-slate-600 text-lg">We understand the unique regulatory and operational challenges of key British sectors.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Healthcare & Medical', 'Legal Services', 'Financial Firms', 'Creative Agencies', 'Non-Profits', 'Education'].map((industry) => (
                  <div key={industry} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
                Learn more about our expertise <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/healthcare/600/600" alt="Healthcare IT" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/finance/600/600" alt="Finance IT" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Measurable Results</h2>
              <h3 className="text-4xl font-bold text-slate-900">Success Stories in £</h3>
              <p className="text-slate-600">See how we've helped London businesses optimize their IT and save significant capital.</p>
            </div>
            <Link to="/services" className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all">
              View All Services
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 hover:shadow-xl transition-all">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                  {study.industry}
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{study.title}</h4>
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Challenge</p>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Impact</p>
                    <p className="text-emerald-700 font-bold text-xl">{study.result}</p>
                  </div>
                </div>
                <button className="text-slate-900 font-bold flex items-center gap-2 group">
                  Read Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 blur-3xl rounded-full -mr-24 -mt-24"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Client Testimonials</h2>
            <h3 className="text-4xl font-bold">What London Leaders Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
                <p className="text-lg italic text-slate-300 mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/${t.name}/100/100`} alt={t.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-600 rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border-r border-b border-white"></div>
              ))}
            </div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">Ready to Secure Your Business?</h2>
            <p className="text-xl text-emerald-50">Join hundreds of London businesses who trust Soma IT Solutions for their technology needs. Let's build something great together.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-emerald-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all">
                Book a Consultation
              </Link>
              <a href={`tel:${COMPANY_DETAILS.phone}`} className="bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-all flex items-center gap-2">
                Call Us: {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
