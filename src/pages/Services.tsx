import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Section, Card, Button } from '../components/UI';
import { SERVICES } from '../constants';

const Services = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Expertise</p>
            <h1 className="text-5xl md:text-6xl mb-8">Tailored IT Solutions for the Modern Enterprise.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              From managed support to specialized healthcare technology, we provide the infrastructure that drives growth and ensures security.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 gap-16">
          {SERVICES.map((service, i) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="p-4 bg-brand-accent/10 text-brand-accent rounded-2xl w-fit mb-6">
                    <IconComponent size={40} />
                  </div>
                  <h2 className="text-3xl mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.overview}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Icons.Target className="text-brand-accent mt-1" size={20} />
                      <div>
                        <p className="font-bold text-slate-900">Target Audience</p>
                        <p className="text-slate-600">{service.target}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icons.TrendingUp className="text-brand-accent mt-1" size={20} />
                      <div>
                        <p className="font-bold text-slate-900">Key Benefits</p>
                        <ul className="list-disc list-inside text-slate-600">
                          {service.benefits.map((b, idx) => <li key={idx}>{b}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Starting From</p>
                      <p className="text-3xl font-bold text-brand-primary">£{service.startingPrice}<span className="text-sm font-normal text-slate-400">/mo</span></p>
                    </div>
                    <Button>Enquire Now</Button>
                  </div>
                </div>

                <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <Card className="bg-white border-none shadow-xl p-0 overflow-hidden">
                    <div className="bg-brand-primary p-8 text-white">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Icons.ClipboardList size={20} /> Implementation Process
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
                            <span className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center font-bold text-sm">
                              {idx + 1}
                            </span>
                            <span className="font-medium">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-8 bg-slate-50">
                      <p className="text-sm text-slate-500 mb-4">
                        Our process is designed to minimize disruption while maximizing ROI. We follow industry best practices and UK compliance standards for every deployment.
                      </p>
                      <div className="flex gap-2">
                        {[1, 2, 3].map(n => (
                          <div key={n} className="h-1 flex-grow bg-slate-200 rounded-full">
                            <div className="h-full bg-brand-accent rounded-full" style={{ width: `${33 * n}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section title="Need a Custom Solution?" subtitle="Consultancy" className="bg-white text-center">
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Not sure which service fits your business? Our consultants are ready to perform a free initial audit of your current IT landscape.
        </p>
        <Button size="lg" variant="outline">Schedule a Free Audit</Button>
      </Section>
    </div>
  );
};

export default Services;
