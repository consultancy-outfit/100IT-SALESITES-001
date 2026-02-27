import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Shield, Cloud, Lock, Lightbulb, Database, Monitor } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const ICON_MAP: Record<string, any> = {
  ShieldCheck: Shield,
  Cloud: Cloud,
  Lock: Lock,
  Lightbulb: Lightbulb,
  Database: Database,
};

export function Services() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">
              Enterprise-Grade <span className="text-brand-accent">IT Services</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We provide a comprehensive suite of technology solutions designed to help UK businesses operate securely, efficiently, and at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon] || Monitor;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-8">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.longDescription}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Key Benefits</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3 text-slate-600 text-sm">
                              <Check className="text-brand-accent shrink-0 mt-0.5" size={16} />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Our Process</h4>
                        <ul className="space-y-3">
                          {service.process.map((step, i) => (
                            <li key={step} className="flex items-start gap-3 text-slate-600 text-sm">
                              <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-white rounded-2xl border border-slate-200">
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold mb-1">Starting from</p>
                        <p className="text-3xl font-bold text-brand-primary">£{service.startingPrice}<span className="text-sm font-normal text-slate-400"> / month</span></p>
                      </div>
                      <Link 
                        to="/contact" 
                        className="w-full sm:w-auto bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-accent transition-all text-center"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={`https://picsum.photos/seed/${service.id}/800/600`} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-brand-accent text-white p-6 rounded-2xl shadow-xl hidden md:block">
                      <p className="text-xs uppercase font-bold mb-1 opacity-80">Target Audience</p>
                      <p className="font-bold max-w-[200px]">{service.targetAudience}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ / Trust Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Why Choose Rosewood Lodge?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-brand-primary">
                  <Shield size={24} />
                </div>
                <h4 className="font-bold">Fully Insured</h4>
                <p className="text-sm text-slate-500">Comprehensive professional indemnity and public liability insurance for your protection.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-brand-primary">
                  <Monitor size={24} />
                </div>
                <h4 className="font-bold">UK Helpdesk</h4>
                <p className="text-sm text-slate-500">Our support team is based entirely in the UK, ensuring clear communication and local expertise.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-brand-primary">
                  <Lock size={24} />
                </div>
                <h4 className="font-bold">Secure by Design</h4>
                <p className="text-sm text-slate-500">Security isn't an add-on; it's baked into every solution we provide from the ground up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
