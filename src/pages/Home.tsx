import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Zap, Users, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-white">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-6">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Trusted UK IT Partner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Empowering British Business through <span className="text-indigo-600">Smart Technology.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                William and Patrica Venton Centre provides enterprise-grade IT services, cybersecurity, and cloud strategy tailored for the UK market.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/services"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center group"
                >
                  Explore Services
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </Link>
              </div>
              
              <div className="mt-12 flex items-center space-x-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center text-amber-500 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-slate-500 font-medium">Trusted by 200+ UK Companies</p>
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
                  src="https://picsum.photos/seed/it-office/800/600"
                  alt="Modern IT Office"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Shield className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">99.9%</p>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Uptime Guaranteed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
            <p className="text-4xl font-bold text-slate-900 mb-6">Built for the demands of modern British industry.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-indigo-600" />,
                title: "Rapid Response",
                desc: "Average helpdesk response time of under 15 minutes for critical issues."
              },
              {
                icon: <Shield className="w-8 h-8 text-indigo-600" />,
                title: "Security First",
                desc: "Every solution we build has cybersecurity at its core, ensuring GDPR compliance."
              },
              {
                icon: <Users className="w-8 h-8 text-indigo-600" />,
                title: "Local Expertise",
                desc: "UK-based engineers who understand your business environment and local regulations."
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
              <p className="text-4xl font-bold text-slate-900">Comprehensive IT solutions that scale with your business.</p>
            </div>
            <Link to="/services" className="mt-6 md:mt-0 text-indigo-600 font-bold flex items-center hover:underline underline-offset-4">
              View all services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group relative bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-indigo-600 transition-all duration-500">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-indigo-500 transition-colors">
                  <CheckCircle2 className="w-8 h-8 text-indigo-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-8 group-hover:text-indigo-100 transition-colors">{service.description}</p>
                <Link to={`/services#${service.id}`} className="inline-flex items-center font-bold text-indigo-600 group-hover:text-white transition-colors">
                  Learn more <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h2>
            <p className="text-4xl font-bold">Real results for British businesses.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="bg-slate-800 p-10 rounded-3xl border border-slate-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6">
                  <span className="text-indigo-400 font-mono text-sm font-bold uppercase">{study.industry}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 pr-16">{study.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{study.description}</p>
                <div className="flex items-center space-x-2">
                  <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg font-bold text-lg">
                    {study.result}
                  </div>
                  <span className="text-slate-500 text-sm">Return on Investment</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="relative">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full">
                  <div className="flex text-amber-500 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-700 italic mb-8 leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center space-x-4">
                    <img src={`https://picsum.photos/seed/${t.name}/100/100`} className="w-12 h-12 rounded-full" alt={t.name} referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="font-bold text-slate-900">{t.name}</h4>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to secure your business future?</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of UK businesses who trust William and Patricia Venton Centre for their IT needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="bg-indigo-500 text-white border border-indigo-400 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-400 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
