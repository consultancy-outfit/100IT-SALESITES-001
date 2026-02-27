import React from 'react';
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';
import { Page } from '../types';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Our Expertise</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
            >
              Professional IT <br /><span className="text-emerald-400 italic serif">Solutions.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              From day-to-day support to complex cloud migrations, we provide the technical foundations your business needs to thrive in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-16 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:w-40 group-hover:h-40"></div>
                    <div className="relative z-10">
                      <div className="mb-8 p-4 bg-emerald-50 rounded-2xl inline-block">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                      <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        {service.overview}
                      </p>
                      
                      <div className="mb-10">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Target Audience</h4>
                        <p className="text-slate-700 font-medium">{service.targetAudience}</p>
                      </div>

                      <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Starting Price</span>
                          <span className="text-2xl font-bold text-slate-900">{service.startingPrice} <span className="text-sm font-normal text-slate-500">ex. VAT</span></span>
                        </div>
                        <button 
                          onClick={() => onNavigate('contact')}
                          className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                        <span className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs mr-3">01</span>
                        Our Process
                      </h3>
                      <ul className="space-y-4">
                        {service.process.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start text-slate-600 text-sm">
                            <ArrowRight className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                        <span className="w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center text-xs mr-3">02</span>
                        Key Benefits
                      </h3>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start text-slate-600 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-12 p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <p className="text-emerald-800 text-sm font-medium leading-relaxed italic">
                      "We don't just provide services; we build long-term partnerships. Our goal is to become your trusted technical advisor, helping you navigate the complexities of modern IT."
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 border border-slate-100">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Need a custom solution?</h3>
              <p className="text-slate-600 text-lg">Every business is unique. We can design a bespoke IT package that fits your specific requirements and budget.</p>
            </div>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all text-lg flex items-center group"
            >
              Speak to an Expert
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;