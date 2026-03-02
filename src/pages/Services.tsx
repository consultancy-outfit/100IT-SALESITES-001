import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-zinc-50 py-24 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6"
          >
            Our IT <span className="text-emerald-600">Services</span>
          </motion.h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to help British businesses thrive in a digital-first world.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center space-x-3 text-emerald-600 font-bold uppercase tracking-widest text-sm">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span>Service {index + 1}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">{service.title}</h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">{service.overview}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-bold text-zinc-900 flex items-center">
                          <Icons.CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                          Key Benefits
                        </h4>
                        <ul className="text-sm text-zinc-600 space-y-2">
                          {service.benefits.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-bold text-zinc-900 flex items-center">
                          <Icons.ArrowRightCircle className="h-4 w-4 text-emerald-500 mr-2" />
                          Our Process
                        </h4>
                        <ul className="text-sm text-zinc-600 space-y-2">
                          {service.process.map((p, i) => <li key={i}>{i + 1}. {p}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div>
                        <span className="text-sm text-zinc-500 block mb-1">Starting from</span>
                        <span className="text-3xl font-bold text-zinc-900">£{service.startingPrice} <span className="text-sm font-normal text-zinc-500">/ month</span></span>
                      </div>
                      <Link
                        to="/contact"
                        className="bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-all text-center"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="aspect-video rounded-[2rem] overflow-hidden bg-zinc-100 border border-zinc-200 shadow-xl">
                      <img
                        src={`https://picsum.photos/seed/${service.id}/800/600`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Who We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['SMEs', 'Healthcare', 'Legal Firms', 'Logistics', 'Finance', 'Retail', 'Education', 'Non-Profits'].map((sector, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                <span className="text-emerald-500 font-bold">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
