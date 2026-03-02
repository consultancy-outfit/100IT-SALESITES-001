import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Server, Cloud, ShieldAlert, Network, Database, Lightbulb } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const serviceIcons: Record<string, React.ReactNode> = {
  'managed-it': <Server size={32} />,
  'cloud-solutions': <Cloud size={32} />,
  'cyber-security': <ShieldAlert size={32} />,
  'network-infrastructure': <Network size={32} />,
  'disaster-recovery': <Database size={32} />,
  'it-consultancy': <Lightbulb size={32} />,
};

const Services = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-indigo-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Our IT Services</h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              We provide a comprehensive suite of technology solutions designed to help British businesses scale, secure their data, and stay ahead of the competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl">
                    {serviceIcons[service.id]}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <span className="w-1.5 h-6 bg-indigo-600 rounded-full mr-3" />
                        Target Audience
                      </h4>
                      <p className="text-sm text-slate-600">{service.target}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                        <span className="w-1.5 h-6 bg-indigo-600 rounded-full mr-3" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-center">
                            <Check size={14} className="text-emerald-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4">Our Process</h4>
                    <div className="flex flex-wrap gap-4">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex items-center">
                          <span className="text-xs font-bold bg-slate-100 text-slate-500 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                            {i + 1}
                          </span>
                          <span className="text-sm font-medium text-slate-700">{step}</span>
                          {i < service.process.length - 1 && <ArrowRight size={14} className="mx-3 text-slate-300" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-2xl font-bold text-slate-900">
                      Starting from <span className="text-indigo-600">£{service.startingPrice}</span>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-indigo-600/5 rounded-[2.5rem] -rotate-2" />
                    <img
                      src={`https://picsum.photos/seed/${service.id}/800/600`}
                      alt={service.title}
                      className="relative rounded-[2rem] shadow-xl w-full object-cover aspect-[4/3]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Not sure which service you need?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Our experts are here to help. We can conduct a full IT audit of your business and provide a tailored roadmap for your technology.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all"
          >
            Book Free IT Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
