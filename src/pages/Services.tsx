import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Cloud, Lightbulb, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={32} />,
  Lock: <Lock size={32} />,
  Cloud: <Cloud size={32} />,
  Lightbulb: <Lightbulb size={32} />,
  Network: <Network size={32} />,
};

export const Services = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">Our Services</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Specialized IT solutions designed to meet the unique challenges of the UK business landscape.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 mb-6">
                    {iconMap[service.icon]}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 text-lg mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Ideal For</h4>
                    <p className="text-slate-700 font-medium">{service.targetAudience}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Our Process</h4>
                      <ul className="space-y-2">
                        {service.process.map((step, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 shrink-0 mt-0.5">
                              {j + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 rounded-xl bg-slate-50 border border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold">Starting From</p>
                      <p className="text-2xl font-bold text-slate-900">{service.startingPrice}</p>
                    </div>
                    <Link to="/contact" className="btn-primary py-2 px-6">
                      Enquire Now
                    </Link>
                  </div>
                </div>
                
                <div className="lg:w-1/2 w-full aspect-video bg-slate-100 rounded-3xl overflow-hidden relative group">
                  <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            Every business is different. We can design a bespoke IT service package that fits your specific needs and budget.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Speak to a Consultant <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};
