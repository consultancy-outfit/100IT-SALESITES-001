import React from 'react';
import { motion } from 'motion/react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { Layout } from '../components/Layout';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Simple, scalable pricing plans designed to fit businesses of all sizes. No hidden fees, just expert IT support.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col p-8 rounded-[2.5rem] border ${i === 1 ? 'border-brand-accent bg-slate-900 text-white shadow-2xl scale-105 z-10' : 'border-slate-200 bg-white text-slate-900'}`}
              >
                {i === 1 && (
                  <div className="bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full w-fit mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-8 ${i === 1 ? 'text-slate-400' : 'text-slate-500'}`}>{plan.idealFor}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    {plan.price === 'Custom' ? 'Custom' : `£${plan.price}`}
                  </span>
                  {plan.price !== 'Custom' && <span className={`text-sm ml-1 ${i === 1 ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>}
                  <div className={`text-xs mt-2 ${i === 1 ? 'text-slate-500' : 'text-slate-400'}`}>{plan.vatInfo}</div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  <div className={`text-sm font-bold uppercase tracking-wider mb-4 ${i === 1 ? 'text-brand-accent' : 'text-slate-900'}`}>
                    What's Included
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${i === 1 ? 'text-brand-accent' : 'text-emerald-500'}`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-slate-200/10">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <HelpCircle className="w-4 h-4 text-slate-500" />
                      Support: {plan.support}
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${i === 1 ? 'bg-brand-accent text-white hover:bg-emerald-500' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Select Plan'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'Is there a long-term contract?', a: 'We offer both flexible monthly rolling contracts and discounted annual commitments to suit your business needs.' },
                { q: 'Do you charge for on-site visits?', a: 'Professional and Enterprise plans include a set number of on-site visits. Additional visits are billed at a preferential rate.' },
                { q: 'Can I change plans later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time as your business requirements evolve.' }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Bespoke Solution?</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
              If your requirements don't fit into our standard tiers, we can design a custom infrastructure and support package tailored specifically to your organisation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all"
            >
              Request a Custom Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
