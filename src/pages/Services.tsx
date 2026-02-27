import { motion } from 'motion/react';
import { 
  Headphones, 
  Lock, 
  Cloud, 
  BarChart3, 
  Network, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Headphones,
  Lock,
  Cloud,
  BarChart3,
  Network
};

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-950 py-24 border-b border-slate-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
              Comprehensive <span className="text-brand-500">IT Services</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Tailored technology solutions designed to drive efficiency, security, and growth for UK businesses. From daily support to long-term strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                >
                  <div className="flex-1 w-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 mb-8 shadow-sm">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.longDescription}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-brand-600" />
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-brand-400" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <ArrowRight size={18} className="text-brand-600" />
                          Our Process
                        </h4>
                        <ul className="space-y-2">
                          {service.process.map((step, i) => (
                            <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                              <span className="text-brand-600 font-bold text-xs">{i + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Target Audience</div>
                        <div className="text-slate-700 font-medium">{service.targetAudience}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Starting From</div>
                        <div className="text-2xl font-display font-bold text-brand-600">{service.startingPrice}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-600 rounded-3xl rotate-3 opacity-10" />
                      <div className="relative bg-slate-900 rounded-3xl p-12 overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-3xl rounded-full" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-500/10 blur-3xl rounded-full" />
                        
                        <div className="relative z-10">
                          <div className="text-brand-500 mb-6">
                            <Icon size={48} />
                          </div>
                          <h3 className="text-2xl font-display font-bold text-white mb-6">Service Overview</h3>
                          <p className="text-slate-400 mb-8 leading-relaxed">
                            {service.description}
                          </p>
                          <Link 
                            to="/contact" 
                            className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-400 transition-colors"
                          >
                            Enquire about this service <ChevronRight size={20} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-8">Not sure which service you need?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Our experts are here to help you navigate the complex world of IT. Book a free consultation today.
          </p>
          <Link
            to="/contact"
            className="bg-brand-600 text-white px-10 py-4 rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
