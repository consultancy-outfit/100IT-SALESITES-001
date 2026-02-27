import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Cloud, Network, Lightbulb, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Lock,
  Cloud,
  Network,
  Lightbulb,
  Database,
};

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-6">Our IT Services</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Comprehensive technology solutions designed to help UK businesses scale securely and efficiently. From managed support to strategic consultancy.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2 space-y-8">
                    <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-white">
                      <Icon size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-zinc-900 mb-4">{service.title}</h2>
                      <p className="text-lg text-zinc-600 mb-6">{service.description}</p>
                      <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 inline-block">
                        <p className="text-sm font-medium text-zinc-900">
                          <span className="text-zinc-500 font-normal">Ideal for:</span> {service.targetAudience}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Our Process</h3>
                        <ul className="space-y-3">
                          {service.process.map((step, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-zinc-600">
                              <span className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold text-zinc-900 shrink-0">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Key Benefits</h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-zinc-600">
                              <CheckCircle2 size={16} className="text-zinc-900 shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8 flex items-center gap-8">
                      <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Starting from</p>
                        <p className="text-3xl font-bold text-zinc-900">{service.startingPrice}</p>
                      </div>
                      <Link
                        to="/contact"
                        className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2"
                      >
                        Enquire Now <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-100">
                      <img
                        src={`https://picsum.photos/seed/${service.id}/1200/900`}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Need a Custom Solution?</h2>
          <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto">
            Every business is unique. We offer bespoke IT packages tailored to your specific operational requirements and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-10 py-5 rounded-full font-bold hover:bg-zinc-800 transition-colors"
          >
            Request a Bespoke Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
