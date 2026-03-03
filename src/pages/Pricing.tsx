import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Simple, Transparent Pricing</h1>
            <p className="text-lg text-slate-600">Choose the plan that fits your business needs. No hidden fees, just expert support.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-[2rem] p-10 shadow-sm border ${
                  plan.popular ? 'border-indigo-600 ring-4 ring-indigo-50' : 'border-slate-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500">{plan.idealFor}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                    <span className="text-slate-400 font-medium">/ month</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{plan.vat}</p>
                </div>
                
                <div className="space-y-4 mb-10">
                  <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">What's Included:</div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="w-5 h-5 text-indigo-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-slate-50">
                  <div className="mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">Support Level</div>
                    <div className="text-sm font-semibold text-slate-900">{plan.support}</div>
                  </div>
                  <Link 
                    to="/contact" 
                    className={`block w-full text-center py-4 rounded-full font-bold transition-all ${
                      plan.popular 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100' 
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-white rounded-[2rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Custom Enterprise Solutions</h3>
              <p className="text-slate-600">Need something more specific? We offer tailored packages for large organizations with complex infrastructure and security requirements.</p>
            </div>
            <Link to="/contact" className="bg-indigo-50 text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-100 transition-all flex items-center gap-2">
              Contact Sales <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { q: 'Is there a minimum contract length?', a: 'Our standard managed service contracts are 12 months, but we also offer flexible monthly rolling options for specific services.' },
              { q: 'Do you charge for onboarding?', a: 'Onboarding fees depend on the complexity of your current environment. We provide a full breakdown after our initial audit.' },
              { q: 'Can I change my plan later?', a: 'Absolutely. You can upgrade or downgrade your plan as your business needs evolve.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-8">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
