import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Monitor, ShieldCheck, Cloud, Lightbulb, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Monitor,
  ShieldCheck,
  Cloud,
  Lightbulb,
  Network
};

const Services: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tailored technology solutions designed to drive efficiency, security, and growth for UK-based enterprises.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Monitor;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={service.id}
                  className={`flex flex-col lg:flex-row items-center gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center text-brand-secondary mb-8">
                        <Icon size={40} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{service.title}</h2>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {service.overview}
                      </p>
                      
                      <div className="mb-8">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Target Audience</h4>
                        <p className="text-slate-700 font-medium">{service.targetAudience}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="text-brand-secondary shrink-0 mt-1" size={18} />
                            <span className="text-slate-700 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-8">
                        <div>
                          <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Starting From</div>
                          <div className="text-3xl font-display font-bold text-slate-900">{service.startingPrice}<span className="text-sm text-slate-400 font-normal">/mo</span></div>
                        </div>
                        <Link to="/contact" className="btn-primary">
                          Enquire Now
                        </Link>
                      </div>
                    </motion.div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-slate-100 rounded-3xl p-12 relative overflow-hidden aspect-square flex flex-col justify-center"
                    >
                      <div className="relative z-10">
                        <h4 className="text-xl font-display font-bold mb-8 text-slate-900">Our Implementation Process</h4>
                        <div className="space-y-6">
                          {service.process.map((step, i) => (
                            <div key={i} className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-brand-primary shadow-sm shrink-0">
                                {i + 1}
                              </div>
                              <span className="text-slate-700 font-medium">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100/40 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Not sure which service you need?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Our experts can perform a comprehensive IT audit of your business to identify gaps and opportunities.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Request a Free IT Audit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
