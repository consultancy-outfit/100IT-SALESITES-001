import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

export const Services = () => {
  return (
    <div className="pt-20">
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-zinc-900 mb-6">Our IT Services</h1>
            <p className="text-xl text-zinc-600">
              Comprehensive technology solutions designed to help UK businesses thrive in a digital-first world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 space-y-8">
                    <div className="inline-flex p-4 rounded-2xl bg-indigo-50 text-indigo-600">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-zinc-900 mb-4">{service.title}</h2>
                      <p className="text-lg text-zinc-600 leading-relaxed">{service.overview}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-zinc-900 mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center text-zinc-600 text-sm">
                              <Icons.Check className="h-4 w-4 text-emerald-500 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900 mb-3">Our Process</h4>
                        <ul className="space-y-2">
                          {service.process.map((step, i) => (
                            <li key={i} className="flex items-center text-zinc-600 text-sm">
                              <span className="w-5 h-5 rounded-full bg-zinc-100 text-[10px] flex items-center justify-center font-bold mr-2">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-100">
                      <p className="text-sm text-zinc-500 mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-indigo-600">{service.startingPrice}<span className="text-sm font-normal text-zinc-400"> / month</span></p>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative">
                      <img
                        src={`https://picsum.photos/seed/${service.id}/800/600`}
                        alt={service.title}
                        className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 max-w-xs">
                        <p className="text-sm font-bold text-zinc-900 mb-1">Ideal for:</p>
                        <p className="text-sm text-zinc-600">{service.targetAudience}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
