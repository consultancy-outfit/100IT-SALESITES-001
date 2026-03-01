import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Cloud, Network, RefreshCw, Zap, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Shield,
  Lock,
  Cloud,
  Network,
  RefreshCw,
  Zap,
};

export const ServicesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our IT Services</h1>
            <p className="text-xl text-slate-400">
              Specialized solutions designed for the unique demands of the UK business landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-16 items-start ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Target Audience</h4>
                      <p className="text-slate-700 font-medium">{service.targetAudience}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Key Benefits</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-600">
                              <Check className="w-4 h-4 text-emerald-500" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Our Process</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.process.map((step, i) => (
                            <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-500">
                              {i + 1}. {step}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2 w-full">
                    <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm sticky top-32">
                      <div className="mb-8">
                        <span className="text-sm text-slate-500 block mb-2">Starting from</span>
                        <span className="text-5xl font-bold text-slate-900">{service.startingPrice}</span>
                        <span className="text-slate-500 ml-2">excl. VAT</span>
                      </div>
                      <p className="text-slate-600 mb-8">
                        Tailored pricing available based on your specific infrastructure and user count.
                      </p>
                      <Link
                        to="/contact"
                        className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                      >
                        Request a Quote <ArrowRight className="w-5 h-5" />
                      </Link>
                      <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                              <img src={`https://picsum.photos/seed/face${i}/100/100`} referrerPolicy="no-referrer" />
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-slate-500">Trusted by 200+ UK companies</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
          <p className="text-slate-600 mb-10">Our consultants are ready to design a bespoke IT strategy that aligns with your business goals.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all">
            Speak with a Consultant <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
