import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Our IT Services</h1>
            <p className="text-xl text-slate-600">
              Comprehensive technology solutions designed to drive efficiency, security, and growth for your UK business.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="text-accent w-8 h-8" />
                    </div>
                    <h2 className="text-3xl mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3">Ideal For</h4>
                      <p className="text-slate-700">{service.audience}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3">Our Process</h4>
                        <ul className="space-y-2">
                          {service.process.map((step, i) => (
                            <li key={i} className="flex items-center text-sm text-slate-600">
                              <Icons.ChevronRight className="w-4 h-4 text-accent mr-2" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center text-sm text-slate-600">
                              <Icons.Check className="w-4 h-4 text-emerald-500 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold">Starting from</p>
                        <p className="text-3xl font-display font-bold text-primary">£{service.startingPrice}<span className="text-sm font-normal text-slate-500">/mo</span></p>
                      </div>
                      <Link
                        to="/contact"
                        className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                  <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={`https://picsum.photos/seed/${service.id}/800/600`}
                        alt={service.title}
                        className="w-full h-auto"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Every business is unique. We can tailor our services to meet your specific operational requirements and budget.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-sky-600 transition-all shadow-lg shadow-accent/20"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
