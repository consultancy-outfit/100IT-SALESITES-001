import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="pt-20 pb-16 bg-brand-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our IT Services</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Specialized technology solutions designed to drive efficiency, security, and growth for UK-based organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-brand-accent/10 rounded-3xl blur-2xl" />
                    <div className="relative bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
                      <service.icon className="w-16 h-16 text-brand-accent mb-8" />
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-slate-600 mb-8">{service.description}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Target Audience</h4>
                          <p className="text-slate-700 font-medium">{service.targetAudience}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Key Benefits</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-2 text-slate-600">
                                <Check className="w-4 h-4 text-emerald-500" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                    <div className="space-y-4">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center font-bold text-slate-400 group-hover:border-brand-accent group-hover:text-brand-accent transition-colors">
                            {i + 1}
                          </div>
                          <p className="text-lg text-slate-700 font-medium">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-200">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Starting from</p>
                        <p className="text-3xl font-bold text-brand-primary">{service.startingPrice}</p>
                      </div>
                      <Link to="/contact" className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-slate-50 border border-slate-100">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-slate-600 mb-10">
              Every business is unique. We can tailor our services to meet your specific operational requirements and budget.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-brand-accent font-bold text-lg hover:gap-4 transition-all">
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
