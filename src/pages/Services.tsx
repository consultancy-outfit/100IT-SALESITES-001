import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';
import { 
  ShieldCheck, 
  Lock, 
  Cloud, 
  Network, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Lock,
  Cloud,
  Network,
  Lightbulb
};

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-zinc-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our IT Services
          </motion.h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Specialised solutions designed to solve complex technical challenges for British businesses.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, idx) => {
              const Icon = iconMap[service.icon];
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={service.id}
                  className={`flex flex-col lg:flex-row gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center space-x-3 text-indigo-600 font-bold tracking-wider uppercase text-sm">
                      <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span>{service.title}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
                      {service.description}
                    </h2>

                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Target Audience</h3>
                      <p className="text-zinc-600">{service.targetAudience}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Process</h3>
                        <ul className="space-y-2">
                          {service.process.map((step, i) => (
                            <li key={i} className="flex items-center text-sm text-zinc-600">
                              <span className="w-5 h-5 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center text-[10px] mr-3 shrink-0">
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center text-sm text-zinc-600">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-3 shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 flex items-center justify-between border-t border-zinc-100">
                      <div>
                        <p className="text-xs text-zinc-400 uppercase font-bold tracking-widest mb-1">Starting From</p>
                        <p className="text-2xl font-bold text-zinc-900">{service.startingPrice}</p>
                      </div>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center text-indigo-600 font-bold hover:translate-x-2 transition-transform"
                      >
                        Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-100 relative group">
                      <img 
                        src={`https://picsum.photos/seed/${service.id}/800/600`}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Not sure which service you need?</h2>
          <p className="text-zinc-600 mb-10 max-w-xl mx-auto">Our consultants can perform a comprehensive audit of your current systems and recommend the best path forward.</p>
          <Link 
            to="/contact"
            className="bg-zinc-900 text-white px-10 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
