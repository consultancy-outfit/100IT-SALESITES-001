import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Comprehensive IT Solutions
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From day-to-day support to long-term strategic planning, we provide the technology backbone your business needs to thrive.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="lg:w-1/2 space-y-8">
                  <div className="inline-flex items-center gap-3 text-indigo-600 font-bold uppercase tracking-widest text-sm">
                    <service.icon className="w-6 h-6" />
                    <span>{service.title}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{service.overview}</h2>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="text-sm font-bold text-slate-500 uppercase mb-3">Target Audience</h4>
                    <p className="text-slate-700">{service.target}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="text-indigo-600 w-5 h-5" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="text-slate-600 text-sm">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-4">Our Process</h4>
                      <div className="space-y-3">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                              {i + 1}
                            </span>
                            <span className="text-slate-600 text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 flex items-center justify-between border-t border-slate-100">
                    <div>
                      <span className="text-slate-500 text-sm">Starting from</span>
                      <div className="text-2xl font-bold text-slate-900">£{service.startingPrice} <span className="text-sm font-normal text-slate-400">/ month</span></div>
                    </div>
                    <Link to="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all flex items-center gap-2">
                      Enquire Now <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/800/600`} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
            Every business is unique. We can tailor a package specifically for your operational requirements and budget.
          </p>
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
