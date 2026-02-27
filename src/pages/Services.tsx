import { motion } from 'motion/react';
import { ShieldCheck, Lock, Cloud, Lightbulb, Network, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Lock,
  Cloud,
  Lightbulb,
  Network,
};

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-zinc-50 pt-24 pb-16 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Our IT Services</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Tailored technology solutions designed to meet the unique challenges of the UK business landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
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
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex p-4 bg-zinc-100 rounded-2xl mb-8">
                      <Icon className="h-8 w-8 text-zinc-900" />
                    </div>
                    <h2 className="text-4xl font-bold text-zinc-900 mb-6">{service.title}</h2>
                    <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Target Audience</h3>
                      <p className="text-zinc-700 font-medium">{service.audience}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Process</h3>
                        <ul className="space-y-3">
                          {service.process.map((step, i) => (
                            <li key={i} className="flex items-center text-zinc-600 text-sm">
                              <span className="w-5 h-5 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center text-[10px] font-bold mr-3">{i + 1}</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Benefits</h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center text-zinc-600 text-sm">
                              <Check className="h-4 w-4 text-emerald-500 mr-3" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                      <div>
                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Starting From</div>
                        <div className="text-3xl font-bold text-zinc-900">{service.startingPrice} <span className="text-sm font-normal text-zinc-500">/ month</span></div>
                      </div>
                      <Link to="/contact" className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all text-sm">
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                  
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-[4/3] bg-zinc-100 rounded-[2rem] overflow-hidden border border-zinc-200 relative group">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zinc-900/5 rounded-full blur-3xl"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Need a Custom Solution?</h2>
          <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto">
            Every business is different. We can design a bespoke IT package that fits your specific operational requirements and budget.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all">
            Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
