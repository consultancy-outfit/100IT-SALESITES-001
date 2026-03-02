/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Lock, Lightbulb, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { cn } from '../utils';

const iconMap: Record<string, any> = {
  Shield,
  Cloud,
  Lock,
  Lightbulb,
  Network,
};

export default function Services() {
  return (
    <div className="pt-20 pb-32">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          >
            <Shield className="h-4 w-4" />
            <span>Comprehensive IT Solutions</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight"
          >
            Our <span className="text-indigo-600">Core Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Tailored IT services designed to meet the unique challenges of UK businesses. From managed support to strategic consultancy, we've got you covered.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || Shield;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "flex flex-col lg:flex-row gap-16 items-center",
                  !isEven && "lg:flex-row-reverse"
                )}
              >
                <div className="flex-1">
                  <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-8">
                    <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Target Audience</h3>
                    <p className="text-slate-700 font-medium">{service.targetAudience}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Process Steps</h3>
                      <ul className="space-y-3">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-center space-x-3 text-slate-600">
                            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold shrink-0">
                              {i + 1}
                            </div>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Key Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center space-x-3 text-slate-600">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-slate-500 block mb-1">Starting from</span>
                      <span className="text-3xl font-bold text-slate-900">{service.startingPrice}</span>
                    </div>
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center">
                      Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-3 group-hover:rotate-1 transition-transform opacity-10" />
                    <img
                      src={`https://images.unsplash.com/photo-${1500000000000 + idx}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      className="relative z-10 rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQ / CTA Section */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Not sure which service is right for you?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Our experts are here to help you navigate the complex world of IT. Book a free 30-minute discovery call to discuss your business needs.
          </p>
          <button className="bg-indigo-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl">
            Book a Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
}
