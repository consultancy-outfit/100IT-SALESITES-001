import { motion } from 'motion/react';
import { Check, ArrowRight, Shield, Cloud, Cpu, Network, Headphones, Lock } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Shield, Cloud, Cpu, Network, Headphones, Lock
};

export const Services = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to drive efficiency, security, and growth for UK businesses.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Cpu;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-start`}
              >
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-3 text-brand-600 font-bold uppercase tracking-widest text-sm">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    {service.title}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.overview}</h2>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900">Target Audience</h4>
                    <p className="text-slate-600">{service.targetAudience}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900">Our Process</h4>
                      <ul className="space-y-3">
                        {service.process.map((step, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0">0{j+1}</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-900">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                            <Check size={18} className="text-brand-500 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1">Starting From</p>
                      <p className="text-3xl font-bold text-brand-900">£{service.startingPrice}<span className="text-sm font-normal text-slate-400"> / month</span></p>
                    </div>
                    <Link to="/contact" className="bg-brand-900 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-800 transition-all">
                      Enquire Now
                    </Link>
                  </div>
                </div>

                <div className="w-full lg:w-1/3 bg-slate-50 rounded-3xl p-8 border border-slate-100 hidden lg:block">
                  <div className="aspect-square bg-white rounded-2xl shadow-inner flex items-center justify-center">
                    <Icon size={120} className="text-brand-200" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
