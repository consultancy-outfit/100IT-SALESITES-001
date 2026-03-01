import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Zap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,#0284c7,transparent_70%)]"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block rounded-full bg-sky-500/10 px-3 py-1 text-sm font-semibold text-sky-400 ring-1 ring-inset ring-sky-500/20 mb-6">
                UK-Based Managed IT Services
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
                Empowering British Business Through <span className="text-sky-400">Intelligent IT</span>
              </h1>
              <p className="text-lg leading-8 text-slate-300 mb-10">
                Fradel Lodge provides enterprise-grade IT support, cybersecurity, and cloud solutions tailored for the UK market. We handle the technology, so you can focus on growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary bg-sky-600 hover:bg-sky-500">
                  Explore Services
                </Link>
                <Link to="/contact" className="btn-secondary bg-transparent text-white border-slate-700 hover:bg-slate-800">
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Why Partner With Fradel Lodge?</h2>
            <p className="text-slate-600">We don't just fix computers; we build resilient digital foundations for your business success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-sky-600" size={32} />,
                title: 'Security First',
                description: 'Cybersecurity isn\'t an add-on; it\'s baked into everything we do. We protect your data like it\'s our own.'
              },
              {
                icon: <Zap className="text-sky-600" size={32} />,
                title: 'Proactive Support',
                description: 'We monitor your systems 24/7 to identify and resolve issues before they impact your operations.'
              },
              {
                icon: <Users className="text-sky-600" size={32} />,
                title: 'UK-Based Expertise',
                description: 'Our entire team is based in the UK, providing clear communication and rapid on-site response when needed.'
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Our Core Expertise</h2>
              <p className="text-slate-600">Comprehensive IT solutions designed to scale with your business requirements.</p>
            </div>
            <Link to="/services" className="text-sky-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View all services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.benefits.slice(0, 2).map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="text-sm font-bold text-slate-900 flex items-center gap-1">
                  Learn more <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Measurable Results</h2>
            <p className="text-slate-600 mt-4">How we've helped British businesses save money and improve efficiency.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-slate-900 rounded-3xl overflow-hidden p-8 md:p-0">
                <div className="md:w-1/2 p-8 md:p-12">
                  <span className="text-sky-400 text-sm font-bold uppercase tracking-widest">{study.industry}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">{study.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold">Challenge</p>
                      <p className="text-slate-200 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold">Result</p>
                      <p className="text-sky-400 font-bold text-lg">{study.result}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 h-full min-h-[300px] bg-slate-800 flex items-center justify-center">
                   <div className="text-slate-700 font-mono text-8xl opacity-20 select-none">£</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Trusted by UK Business Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative">
                <div className="text-sky-600 text-4xl font-serif absolute top-4 right-8 opacity-20">"</div>
                <p className="text-slate-600 italic mb-6 relative z-10">"{t.content}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sky-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">Ready to Modernize Your IT?</h2>
          <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of British businesses that trust Fradel Lodge for their technology needs. Let's build your future together.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-sky-600 hover:bg-sky-50">
              Get Started Today
            </Link>
            <Link to="/pricing" className="btn-secondary bg-transparent text-white border-white/30 hover:bg-white/10">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
