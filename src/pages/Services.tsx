import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Cloud, Lock, Network, BarChart3, Database } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const ICON_MAP: Record<string, any> = {
  ShieldCheck,
  Cloud,
  Lock,
  Network,
  BarChart3,
  Database,
};

export const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-950 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our IT Services</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Comprehensive technology solutions tailored for British businesses. We provide the expertise you need to stay ahead in a competitive digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon] || CheckCircle2;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row gap-12 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-50 text-brand-600 rounded-lg font-bold">
                      <Icon className="w-6 h-6" />
                      <span>{service.title}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.overview}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Key Benefits</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600">
                              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Our Process</h4>
                        <ul className="space-y-3">
                          {service.process.map((step, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-600">
                              <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center font-bold">
                                {i + 1}
                              </div>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div>
                        <div className="text-sm text-slate-500 font-medium uppercase mb-1">Starting From</div>
                        <div className="text-3xl font-bold text-slate-900">£{service.startingPrice}<span className="text-lg text-slate-400 font-normal"> / month</span></div>
                      </div>
                      <Link
                        to="/contact"
                        className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg text-center"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>

                  {/* Visual Placeholder */}
                  <div className="flex-1 w-full aspect-video lg:aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 relative group">
                    <img
                      src={`https://picsum.photos/seed/${service.id}/800/800`}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="text-white">
                        <div className="text-sm font-medium uppercase tracking-widest mb-2 opacity-80">Target Audience</div>
                        <div className="text-lg font-semibold">{service.target}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ / Trust Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Why Choose Our Managed Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                { title: "UK-Based Support", desc: "Our entire helpdesk is based in the UK, ensuring clear communication and local knowledge." },
                { title: "No Long Contracts", desc: "We believe in our service quality, so we offer flexible rolling contracts that work for you." },
                { title: "Proactive Approach", desc: "We fix problems before they affect your business, using advanced monitoring tools." },
                { title: "Strategic Partnership", desc: "We don't just fix PCs; we help you use technology to drive business growth." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
