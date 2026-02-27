import { motion } from 'motion/react';
import { ShieldCheck, Cloud, Lock, Lightbulb, Network, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Cloud,
  Lock,
  Lightbulb,
  Network,
};

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Our IT Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            From day-to-day support to long-term digital strategy, we provide the technical expertise 
            your business needs to thrive in the UK market.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2">
                    <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-8">
                      <Icon className="text-brand-emerald w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-brand-navy mb-3">Ideal for:</h4>
                      <p className="text-slate-600">{service.targetAudience}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-700">
                          <Check className="text-brand-emerald w-5 h-5 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      <div>
                        <span className="text-sm text-slate-500 block">Starting from</span>
                        <span className="text-2xl font-bold text-brand-navy">£{service.startingPrice} <span className="text-sm font-normal text-slate-500">/mo</span></span>
                      </div>
                      <Link to="/contact" className="btn-primary">
                        Enquire Now <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-1/2 bg-slate-100 rounded-3xl p-8 md:p-12">
                    <h4 className="text-xl font-bold mb-8 text-brand-navy">Our Process</h4>
                    <div className="space-y-6">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0 font-bold text-sm">
                            {i + 1}
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Bespoke Solution?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Not every business fits into a box. We offer custom IT packages tailored to your specific operational requirements.
          </p>
          <Link to="/contact" className="btn-primary bg-brand-emerald hover:bg-emerald-600 text-brand-navy">
            Request a Custom Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}
