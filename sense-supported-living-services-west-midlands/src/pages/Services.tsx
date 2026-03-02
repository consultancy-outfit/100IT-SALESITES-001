import { motion } from 'motion/react';
import { Check, ArrowRight, Shield, Cloud, Lock, Network, RotateCcw, Lightbulb } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const ICON_MAP: Record<string, any> = {
  Shield,
  Cloud,
  Lock,
  Network,
  RotateCcw,
  Lightbulb,
};

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-24 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Services</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Tailored IT solutions designed to solve complex business challenges. We provide the technical foundation so you can focus on growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon] || Shield;
              return (
                <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-indigo-200">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Ideal For</p>
                      <p className="text-slate-900 font-medium">{service.targetAudience}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                          Key Benefits
                        </h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                              <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                          Our Process
                        </h4>
                        <ul className="space-y-3">
                          {service.process.map((step, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-8 bg-indigo-600 rounded-3xl text-white shadow-xl shadow-indigo-200">
                      <div>
                        <p className="text-indigo-100 text-xs font-bold uppercase tracking-widest mb-1">Starting From</p>
                        <p className="text-3xl font-bold">{service.startingPrice}</p>
                      </div>
                      <Link to="/contact" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold hover:bg-indigo-50 transition-all flex items-center gap-2">
                        Enquire Now <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 w-full">
                    <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative group">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Not sure which service you need?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Our experts can provide a free IT audit to identify gaps in your infrastructure and recommend the best path forward.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-all">
            Book Free IT Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
