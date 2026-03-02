import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, COMPANY_DETAILS } from '../constants';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-5xl font-bold tracking-tight">Enterprise IT Services</h1>
            <p className="text-xl text-slate-400">
              Comprehensive technology solutions designed for the modern UK business landscape. From managed support to specialized healthcare tech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-3 text-emerald-600 font-bold uppercase tracking-widest text-sm">
                      <div className="bg-emerald-50 p-3 rounded-xl">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span>{service.title}</span>
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900">{service.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{service.overview}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="font-bold text-slate-900 flex items-center gap-2">
                          <Icons.Target className="w-4 h-4 text-emerald-500" /> Target Audience
                        </h3>
                        <p className="text-sm text-slate-600">{service.targetAudience}</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-bold text-slate-900 flex items-center gap-2">
                          <Icons.Zap className="w-4 h-4 text-emerald-500" /> Key Benefits
                        </h3>
                        <ul className="text-sm text-slate-600 space-y-2">
                          {service.benefits.map((b, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Icons.Check className="w-3 h-3 text-emerald-500" /> {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Starting From</p>
                        <p className="text-3xl font-bold text-slate-900">{service.startingPrice}</p>
                      </div>
                      <Link 
                        to="/contact" 
                        className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 relative">
                    <div className="absolute -inset-4 bg-emerald-100/30 rounded-3xl blur-xl -z-10"></div>
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                      <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Icons.ClipboardList className="w-5 h-5 text-emerald-500" /> Our Process
                      </h3>
                      <div className="space-y-6">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {i + 1}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">{step}</p>
                              <p className="text-xs text-slate-500">Standard implementation phase {i + 1}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-600">
            Every business is unique. If you don't see exactly what you need, our consultants can design a bespoke IT package tailored to your specific goals and budget.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
