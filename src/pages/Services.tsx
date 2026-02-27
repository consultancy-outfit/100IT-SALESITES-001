import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Shield, Cloud, Headphones, Search, Database, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  'managed-it': <Headphones className="w-10 h-10" />,
  'cloud-solutions': <Cloud className="w-10 h-10" />,
  'cyber-security': <Shield className="w-10 h-10" />,
  'it-consultancy': <Search className="w-10 h-10" />,
  'disaster-recovery': <Database className="w-10 h-10" />,
  'network-solutions': <Wifi className="w-10 h-10" />,
};

const Services = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-zinc-950 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold tracking-tight mb-8"
            >
              Our <span className="text-emerald-500">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-400 leading-relaxed"
            >
              From 24/7 helpdesk support to complex cloud migrations, we provide the technical expertise your UK business needs to thrive in a digital-first world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex p-4 rounded-2xl bg-emerald-50 text-emerald-600 mb-8">
                    {iconMap[service.id] || <CheckCircle2 className="w-10 h-10" />}
                  </div>
                  <h2 className="text-4xl font-bold text-zinc-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Ideal For</h4>
                    <p className="text-zinc-900 font-medium">{service.audience}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Our Process</h4>
                      <ul className="space-y-2">
                        {service.process.map((step, j) => (
                          <li key={j} className="flex items-center gap-2 text-zinc-600">
                            <span className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-500">
                              {j + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-center gap-2 text-zinc-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <div>
                      <div className="text-sm text-zinc-500 mb-1">Starting from</div>
                      <div className="text-3xl font-bold text-zinc-900">£{service.startingPrice}<span className="text-sm text-zinc-400 font-normal"> /mo</span></div>
                    </div>
                    <Link
                      to="/contact"
                      className="px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all flex items-center gap-2 group"
                    >
                      Enquire Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={`https://picsum.photos/seed/service-${i}/800/600`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden sm:block">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Compliance</div>
                        <div className="text-sm font-bold text-zinc-900">GDPR & ISO Ready</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Need a Custom Solution?</h2>
          <p className="text-zinc-600 text-lg mb-12">
            Every business is unique. We offer bespoke IT packages designed specifically for your operational requirements and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
          >
            Book a Free Audit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
