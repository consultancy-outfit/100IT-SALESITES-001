import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-20 pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Services</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Tailored IT solutions designed to drive efficiency, security, and growth for modern British businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 space-y-8">
                  <div className="inline-flex p-4 bg-indigo-50 rounded-2xl text-indigo-600">
                    <service.icon size={40} />
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-slate-900">{service.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                        Target Audience
                      </h4>
                      <p className="text-slate-600 text-sm">{service.targetAudience}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                        Starting From
                      </h4>
                      <p className="text-2xl font-bold text-indigo-600">{service.startingPrice}</p>
                      <p className="text-xs text-slate-400">Excl. VAT</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900">Key Benefits</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600">
                          <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all group"
                  >
                    Enquire About This Service <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 relative">
                    <h4 className="text-xl font-bold text-slate-900 mb-8">Our Process</h4>
                    <div className="space-y-6 relative">
                      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-indigo-100" />
                      {service.process.map((step, i) => (
                        <div key={i} className="flex gap-6 relative z-10">
                          <div className="w-8 h-8 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm shrink-0 shadow-sm">
                            {i + 1}
                          </div>
                          <div className="pt-1">
                            <h5 className="font-bold text-slate-900">{step}</h5>
                            <p className="text-sm text-slate-500">Standard delivery phase {i + 1}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-slate-100 text-center space-y-8">
            <h3 className="text-3xl font-bold text-slate-900">Need a Custom Solution?</h3>
            <p className="text-lg text-slate-600">
              Every business is unique. If you don't see exactly what you're looking for, our consultants can design a bespoke IT package that fits your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg"
              >
                Schedule a Consultation
              </Link>
              <Link 
                to="/about" 
                className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Learn About Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
