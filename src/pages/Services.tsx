import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight, Shield, Lock, Cloud, Zap, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const ICON_MAP: Record<string, any> = {
  Shield: Shield,
  Lock: Lock,
  Cloud: Cloud,
  Zap: Zap,
  Network: Network,
};

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#4f46e5,transparent)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Professional IT Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            From 24/7 managed support to complex cloud migrations, we provide the technical foundation your business needs to thrive in the UK market.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, idx) => {
              const Icon = ICON_MAP[service.icon] || CheckCircle2;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col lg:items-center gap-16 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="lg:w-1/2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-8 shadow-lg shadow-indigo-200">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.overview}
                    </p>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                      <h4 className="font-bold text-slate-900 mb-2">Ideal For:</h4>
                      <p className="text-slate-600">{service.targetAudience}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                      <div>
                        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">Starting From</p>
                        <p className="text-3xl font-bold text-slate-900">£{service.startingPrice}<span className="text-sm font-normal text-slate-500"> / month</span></p>
                      </div>
                      <Link 
                        to="/contact" 
                        className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-3 opacity-10" />
                      <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                        <h4 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
                          Our Implementation Process
                          <ArrowRight className="ml-2 w-5 h-5 text-indigo-600" />
                        </h4>
                        <div className="space-y-8">
                          {service.process.map((step, sIdx) => (
                            <div key={sIdx} className="flex items-start space-x-4">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold text-sm shrink-0">
                                {sIdx + 1}
                              </div>
                              <p className="text-slate-700 font-medium pt-1">{step}</p>
                            </div>
                          ))}
                        </div>
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
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a custom IT package?</h2>
          <p className="text-lg text-slate-600 mb-10">
            We understand that every business is unique. Contact our team to discuss a bespoke service level agreement that fits your exact requirements.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg"
          >
            Request Bespoke Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
