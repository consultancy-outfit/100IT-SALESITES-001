import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Cloud, BarChart3, Database, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Lock,
  Cloud,
  BarChart3,
  Database
};

const Services = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-24 pb-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-extrabold mb-6"
          >
            Our IT Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Specialised technology solutions designed to drive growth, security, and efficiency for UK-based businesses.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, idx) => {
              const Icon = iconMap[service.icon];
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col lg:flex-row gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-indigo-100 rounded-2xl">
                        <Icon className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {service.overview}
                    </p>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2">Ideal For</h4>
                      <p className="text-gray-800 font-medium">{service.targetAudience}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-bold text-gray-900">Process Steps</h4>
                        <ul className="space-y-2">
                          {service.process.map((step, i) => (
                            <li key={i} className="flex items-start text-gray-600 text-sm">
                              <span className="w-5 h-5 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold mr-2 mt-0.5 shrink-0">{i + 1}</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-bold text-gray-900">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-gray-600 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 flex items-center justify-between border-t border-gray-100">
                      <div>
                        <p className="text-sm text-gray-400">Starting from</p>
                        <p className="text-3xl font-bold text-gray-900">£{service.startingPrice}<span className="text-sm font-normal text-gray-400 ml-1">/ month</span></p>
                      </div>
                      <Link 
                        to="/contact" 
                        className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative">
                      <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                        <img 
                          src={`https://images.unsplash.com/photo-${1500000000000 + idx * 1000000}?auto=format&fit=crop&w=800&q=80`} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                        <p className="text-indigo-600 font-black text-4xl">100%</p>
                        <p className="text-gray-500 text-sm font-medium">UK Managed</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Every business is unique. We can design a bespoke IT package that fits your specific operational requirements and budget.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-10 py-5 bg-gray-900 text-white rounded-full text-xl font-bold hover:bg-gray-800 transition-all"
          >
            Request a Bespoke Quote
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
