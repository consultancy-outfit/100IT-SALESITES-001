import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Shield, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, CASE_STUDIES } from '../constants';

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-6">
                UK-Based IT Excellence
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-6">
                Empowering Your Service with <span className="text-indigo-600">Smarter IT</span>
              </h1>
              <p className="text-lg text-zinc-600 mb-8 max-w-lg">
                Walsall Domiciliary Care Service provides enterprise-grade technology solutions tailored for the care sector and British SMEs. From managed support to digital transformation, we drive your efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200"
                >
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-zinc-200 text-base font-medium rounded-full text-zinc-900 bg-white hover:bg-zinc-50"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/it-hero/800/600"
                alt="IT Professionals"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">100% Secure</p>
                    <p className="text-xs text-zinc-500">GDPR Compliant Systems</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Why Choose Walsall Domiciliary Care?</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We combine technical expertise with a deep understanding of the UK business landscape to deliver results that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Rapid Response', desc: 'Average response time of under 15 minutes for critical issues.' },
              { icon: Users, title: 'Expert Team', desc: 'Certified engineers with decades of combined experience in UK IT.' },
              { icon: Shield, title: 'Security First', desc: 'Every solution we build is hardened against modern cyber threats.' },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100"
              >
                <benefit.icon className="h-10 w-10 text-indigo-600 mb-6" />
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                <p className="text-zinc-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-4">Measurable Results</h2>
              <p className="text-zinc-400 max-w-xl">
                We don't just talk about performance; we prove it. See how we've helped UK businesses save money and scale.
              </p>
            </div>
            <Link to="/services" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img
                    src={`https://picsum.photos/seed/case-${i}/800/450`}
                    alt={study.title}
                    className="group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-indigo-400 font-medium mb-4">{study.client}</p>
                <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                  <p className="text-sm text-zinc-400 mb-2">Key Result:</p>
                  <p className="text-lg font-bold text-emerald-400">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Trusted by Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50 relative">
                <Star className="h-5 w-5 text-amber-400 fill-amber-400 mb-6" />
                <p className="text-zinc-700 italic mb-8">"{t.content}"</p>
                <div>
                  <p className="font-bold text-zinc-900">{t.name}</p>
                  <p className="text-sm text-zinc-500">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT?</h2>
              <p className="text-indigo-100 mb-10 max-w-2xl mx-auto text-lg">
                Join hundreds of UK organisations that rely on Walsall Domiciliary Care Service for their daily operations and long-term strategy.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-zinc-100 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-700 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
