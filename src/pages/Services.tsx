import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-zinc-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Expert IT Services Tailored for the UK</h1>
            <p className="text-xl text-zinc-400">
              Comprehensive technology solutions designed to drive efficiency, security, and growth for British businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id}
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="inline-flex p-4 bg-emerald-100 rounded-2xl mb-6">
                    <service.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-zinc-900 mb-4">{service.title}</h2>
                  <p className="text-xl text-zinc-600 mb-8">{service.description}</p>
                  
                  <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 mb-8">
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Target Audience</h4>
                    <p className="text-zinc-800 font-medium">{service.targetAudience}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-4">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-zinc-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 mb-4">Our Process</h4>
                      <ul className="space-y-3">
                        {service.process.map((step, i) => (
                          <li key={step} className="flex items-center gap-2 text-zinc-600">
                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 w-6 h-6 rounded-full flex items-center justify-center">{i + 1}</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="bg-zinc-900 p-12 rounded-[2.5rem] text-white relative overflow-hidden group">
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2">Starting From</h3>
                      <div className="text-6xl font-bold text-emerald-400 mb-8">{service.startingPrice}</div>
                      <p className="text-zinc-400 mb-10 leading-relaxed">
                        Get a custom quote tailored to your specific business requirements and scale.
                      </p>
                      <button className="w-full bg-white text-zinc-900 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
                        Get a Quote <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                    {/* Abstract design element */}
                    <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Not sure which service you need?</h2>
          <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
            Our experts are here to help you navigate the complex IT landscape and find the perfect solutions for your business.
          </p>
          <button className="bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-zinc-800 transition-all">
            Book a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
