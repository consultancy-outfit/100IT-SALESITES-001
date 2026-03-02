import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Cloud, Lightbulb, Wifi, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={32} />,
  Lock: <Lock size={32} />,
  Cloud: <Cloud size={32} />,
  Lightbulb: <Lightbulb size={32} />,
  Wifi: <Wifi size={32} />,
};

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Our <span className="text-emerald-500">IT Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-stone-400 leading-relaxed"
            >
              From day-to-day support to long-term strategic planning, we provide the technology foundation your business needs to thrive in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12 space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                      {iconMap[service.icon]}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-stone-900">{service.name}</h2>
                      <p className="text-emerald-600 font-semibold">Starting from {service.startingPrice}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest">Overview</h3>
                    <p className="text-stone-600 text-lg leading-relaxed">{service.overview}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest">Ideal For</h3>
                    <p className="text-stone-900 font-medium">{service.targetAudience}</p>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-colors group"
                    >
                      Enquire About This Service
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                  </div>
                </div>

                <div className="bg-stone-50 p-8 md:p-12 border-l border-stone-100">
                  <div className="space-y-12">
                    <div>
                      <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-6">Our Process</h3>
                      <div className="space-y-4">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex items-center space-x-4">
                            <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-400">
                              0{i + 1}
                            </div>
                            <span className="text-stone-700 font-medium">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-6">Key Benefits</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                            <span className="text-stone-600 text-sm font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="mt-24 bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">All our services include:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'UK-Based Support',
              'GDPR Compliance',
              'No Long-Term Contracts',
              'Dedicated Manager'
            ].map((item) => (
              <div key={item} className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                  <CheckCircle2 size={24} />
                </div>
                <span className="font-bold text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
