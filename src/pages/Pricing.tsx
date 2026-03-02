import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, HelpCircle } from 'lucide-react';
import { Section, Card, Button } from '../components/UI';
import { PRICING_PLANS } from '../constants';

const Pricing = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">Transparent Pricing</p>
            <h1 className="text-5xl md:text-6xl mb-8">Plans Built for Your Business Scale.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              No hidden fees. No complex contracts. Just reliable IT support tailored to your specific needs and budget.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <Card 
              key={i} 
              delay={i * 0.1} 
              className={`relative flex flex-col h-full ${plan.popular ? 'border-brand-accent border-2 shadow-xl scale-105 z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{plan.idealFor}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-brand-primary">£{plan.price}</span>
                  <span className="text-slate-400 font-medium">/month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 italic">*{plan.vat}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 bg-emerald-100 text-emerald-600 rounded-full">
                      <Check size={14} />
                    </div>
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 mb-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <Info size={16} className="text-brand-accent" />
                  <span className="font-semibold">Support Level:</span>
                </div>
                <p className="text-sm text-slate-700 font-medium">{plan.support}</p>
              </div>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full"
              >
                Choose {plan.name}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our service plans.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Is there a minimum contract length?", a: "Our standard managed services contracts are 12 months, but we also offer flexible month-to-month options for specific project-based work." },
              { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can scale your support level as your business grows or changes. We review plans quarterly with our clients." },
              { q: "What happens if I need emergency support outside of my plan?", a: "Emergency support is always available. If it's not covered by your plan, it is billed at a transparent hourly rate which will be agreed upon before work commences." },
              { q: "Are on-site visits included?", a: "Professional and Enterprise plans include a set number of on-site visits per month. Essential plans are remote-first, with on-site visits available as an add-on." }
            ].map((faq, i) => (
              <Card key={i} className="p-6">
                <div className="flex gap-4">
                  <div className="text-brand-accent mt-1">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-brand-primary text-white text-center">
        <h2 className="text-3xl mb-6">Need a Bespoke Enterprise Quote?</h2>
        <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
          For organizations with over 100 users or complex multi-site requirements, we offer custom pricing structures and dedicated infrastructure teams.
        </p>
        <Button variant="secondary" size="lg">Talk to our Sales Team</Button>
      </Section>
    </div>
  );
};

export default Pricing;
