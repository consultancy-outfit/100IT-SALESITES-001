import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '@/src/constants';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Transparent, Scalable Pricing
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your business stage. No hidden fees, just expert support.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-3xl border flex flex-col ${
                  plan.popular 
                    ? 'border-indigo-600 shadow-2xl shadow-indigo-100 ring-4 ring-indigo-50' 
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500">{plan.ideal}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                    <span className="text-slate-500 font-medium">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{plan.vat}</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</div>
                  <ul className="space-y-4">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-slate-600 text-sm">
                        <Check className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-bold text-slate-900">Support:</span>
                      <span className="text-slate-600">{plan.support}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Info className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Need something different?</h4>
                <p className="text-sm text-slate-600">We offer custom enterprise agreements for organisations with 100+ users or complex infrastructure needs.</p>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="whitespace-nowrap px-6 py-3 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-8">
            {[
              { q: 'Is there a minimum contract length?', a: 'Our standard managed services contracts are 12 months, but we also offer flexible month-to-month options for specific project work.' },
              { q: 'Do you charge for onboarding?', a: 'We charge a one-time setup fee based on the complexity of your environment to ensure a seamless transition and full security audit.' },
              { q: 'Can we change plans later?', a: 'Absolutely. You can scale your plan up or down as your business requirements evolve.' },
            ].map(faq => (
              <div key={faq.q}>
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
