import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Lock, Network, Database, Lightbulb, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { formatCurrency } from '../lib/utils';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Shield,
  Cloud,
  Lock,
  Network,
  Database,
  Lightbulb
};

const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold text-zinc-900 mb-6">Our IT Services</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Tailored technology solutions designed to solve complex business challenges 
              and drive sustainable growth in the UK market.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-zinc-900 mb-6">{service.title}</h2>
                    <p className="text-lg text-zinc-600 mb-8 leading-relaxed">{service.overview}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                          <Check className="w-5 h-5 text-indigo-600" /> Key Benefits
                        </h4>
                        <ul className="space-y-3">
                          {service.benefits.map((b, i) => (
                            <li key={i} className="text-zinc-600 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                          <Check className="w-5 h-5 text-indigo-600" /> Our Process
                        </h4>
                        <ul className="space-y-3">
                          {service.process.map((p, i) => (
                            <li key={i} className="text-zinc-600 flex items-start gap-2">
                              <span className="font-mono text-xs text-indigo-600 mt-1">{i + 1}.</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-zinc-500 uppercase font-semibold tracking-wider mb-1">Starting From</p>
                        <p className="text-2xl font-bold text-zinc-900">{formatCurrency(service.startingPrice)} <span className="text-sm font-normal text-zinc-500">/ project</span></p>
                      </div>
                      <Link
                        to="/contact"
                        className="px-6 py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-colors"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative rounded-3xl overflow-hidden bg-zinc-100 aspect-square lg:aspect-[4/5]">
                      <img 
                        src={`https://picsum.photos/seed/${service.id}/800/1000`} 
                        alt={service.title}
                        className="object-cover w-full h-full"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="bg-white/90 backdrop-blur p-6 rounded-2xl">
                          <p className="text-zinc-900 font-bold mb-1">Target Audience</p>
                          <p className="text-zinc-600 text-sm">{service.targetAudience}</p>
                        </div>
                      </div>
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
          <p className="text-zinc-600 mb-10 text-lg">
            Every business is unique. We can design a bespoke IT package that fits your specific 
            requirements and budget perfectly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all"
          >
            Request a Bespoke Proposal <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
