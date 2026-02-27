import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Comprehensive IT Services
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Tailored technology solutions designed to drive efficiency, security, and growth for your business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 space-y-8">
                  <div className="inline-block px-4 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold uppercase tracking-wider">
                    Service {idx + 1}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-900">Key Benefits:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map(benefit => (
                        <li key={benefit} className="flex items-center gap-2 text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-slate-500 uppercase">Starting From</span>
                      <span className="text-2xl font-bold text-indigo-600">{service.price} <span className="text-sm font-normal text-slate-400">/ month</span></span>
                    </div>
                    <p className="text-sm text-slate-500 mb-6">
                      <span className="font-bold">Ideal for:</span> {service.target}
                    </p>
                    <Link 
                      to="/contact" 
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
                    >
                      Enquire Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="relative">
                    <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={`https://picsum.photos/seed/${service.id}/800/450`} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Process Steps Overlay */}
                    <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                      <h4 className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">Our Process</h4>
                      <div className="flex gap-4">
                        {service.process.map((step, sIdx) => (
                          <div key={step} className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                              {sIdx + 1}
                            </div>
                            <span className="text-[10px] font-bold text-slate-600 uppercase">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Every business is unique. We can design a bespoke IT package that perfectly fits your requirements and budget.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg"
          >
            Request a Bespoke Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}
