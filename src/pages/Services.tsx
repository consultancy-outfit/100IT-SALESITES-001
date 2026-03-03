import { motion } from 'motion/react';
import { ShieldCheck, Cloud, Lock, Lightbulb, Database, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  ShieldCheck: <ShieldCheck className="w-10 h-10" />,
  Cloud: <Cloud className="w-10 h-10" />,
  Lock: <Lock className="w-10 h-10" />,
  Lightbulb: <Lightbulb className="w-10 h-10" />,
  Database: <Database className="w-10 h-10" />,
};

export const Services = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our IT Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions designed specifically for the UK healthcare and professional sectors.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex p-3 rounded-2xl bg-brand-100 text-brand-600">
                    {iconMap[service.icon]}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.longDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-brand-600" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-3">Process Steps</h4>
                      <ol className="space-y-2">
                        {service.process.map((step, i) => (
                          <li key={i} className="text-sm text-slate-600 flex gap-3">
                            <span className="font-bold text-brand-600">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="pt-6 flex items-center justify-between border-t border-slate-200">
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Starting from</p>
                      <p className="text-2xl font-bold text-brand-600">{service.startingPrice}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors"
                    >
                      Enquire Now <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Visual Placeholder/Image */}
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-xl relative group">
                    <img
                      src={`https://picsum.photos/seed/${service.id}/800/600`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Not sure what you need?</h2>
          <p className="text-slate-600 mb-10 text-lg">
            Our consultants are happy to discuss your specific requirements and build a custom package for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg"
          >
            Book a Free IT Audit
          </Link>
        </div>
      </section>
    </div>
  );
};
