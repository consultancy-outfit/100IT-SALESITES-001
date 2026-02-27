import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Server, Cloud, ShieldCheck, Lightbulb, Database, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services = () => {
  const icons = [
    <Server className="w-10 h-10" />,
    <Cloud className="w-10 h-10" />,
    <ShieldCheck className="w-10 h-10" />,
    <Lightbulb className="w-10 h-10" />,
    <Database className="w-10 h-10" />,
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our IT Services</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Tailored technology solutions designed to solve complex business challenges and drive digital transformation for UK organisations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="space-y-32">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="inline-flex p-4 bg-blue-50 text-brand-accent rounded-2xl mb-6">
                    {icons[index] || <HelpCircle className="w-10 h-10" />}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.overview}
                  </p>
                  
                  <div className="mb-8">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Target Audience</p>
                    <p className="text-slate-700 font-medium">{service.target}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Process</p>
                      <ul className="space-y-3">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-slate-600">
                            <span className="text-brand-accent font-bold">{i + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Key Benefits</p>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Investment Starting From</p>
                      <p className="text-2xl font-bold text-slate-900">£{service.startingPrice.toLocaleString()}</p>
                    </div>
                    <Link to="/contact" className="btn-primary">
                      Enquire Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-brand-accent/5 rounded-3xl blur-2xl" />
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/800/600`} 
                      alt={service.title} 
                      className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            Our services are highly flexible. If you don't see exactly what you're looking for, get in touch for a bespoke IT strategy tailored to your specific needs.
          </p>
          <Link to="/contact" className="btn-secondary">
            Speak to a Consultant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
