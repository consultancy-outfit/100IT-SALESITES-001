import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Cloud, Lightbulb, RefreshCcw, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  ShieldCheck: ShieldCheck,
  Lock: Lock,
  Cloud: Cloud,
  Lightbulb: Lightbulb,
  RefreshCcw: RefreshCcw,
};

const Services = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our IT Services</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tailored technology solutions designed to meet the unique challenges of the British business landscape.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                >
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-8">
                      <Icon className="w-8 h-8 text-brand-accent" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((b, idx) => (
                            <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0"></span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                          Our Process
                        </h4>
                        <ul className="space-y-2">
                          {service.process.map((p, idx) => (
                            <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                              <span className="font-mono text-brand-accent text-xs font-bold">0{idx + 1}</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                      <div className="bg-slate-50 px-6 py-3 rounded-xl border border-slate-100">
                        <span className="text-xs text-slate-500 uppercase font-bold block mb-1">Starting from</span>
                        <span className="text-2xl font-bold text-brand-primary">{service.startingPrice}</span>
                      </div>
                      <Link
                        to="/contact"
                        className="text-brand-accent font-bold flex items-center gap-2 hover:gap-3 transition-all"
                      >
                        Enquire About This Service <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="aspect-video bg-slate-100 rounded-[2rem] relative overflow-hidden group shadow-2xl">
                      <img
                        src={`https://picsum.photos/seed/${service.id}/800/600`}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="text-white/80 text-sm font-medium mb-2">Target Audience</div>
                        <div className="text-white font-bold text-xl">{service.targetAudience}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-slate-600">We provide specialised IT support for a wide range of sectors across the United Kingdom.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Legal & Professional', 'Healthcare & Medical', 'Manufacturing', 'Retail & E-commerce',
              'Education', 'Non-Profit', 'Financial Services', 'Construction'
            ].map((industry, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 text-center font-semibold text-slate-700 hover:border-brand-accent hover:text-brand-accent transition-all cursor-default">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
