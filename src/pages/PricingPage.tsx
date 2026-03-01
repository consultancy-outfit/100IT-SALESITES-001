import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, HelpCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../constants';

export const PricingPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Predictable IT costs tailored to your business scale. No hidden fees, just expert support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col bg-white rounded-3xl p-8 lg:p-10 border ${
                  plan.highlighted ? 'border-indigo-500 shadow-xl shadow-indigo-100 ring-4 ring-indigo-500/5' : 'border-slate-200 shadow-sm'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500">{plan.idealFor}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 font-medium">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                    <Info className="w-3 h-3" /> All prices exclude VAT at 20%
                  </p>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Support Level</div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm font-semibold text-slate-700">
                    {plan.support}
                  </div>
                  
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest pt-4">Features Included</div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    plan.highlighted 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' 
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Choose {plan.name} <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our billing and services.</p>
          </div>
          <div className="space-y-8">
            {[
              { q: 'Is there a minimum contract term?', a: 'Our standard managed services contracts are 12 months, providing stability and allowing us to invest in your infrastructure. Monthly rolling options are available for specific consultancy projects.' },
              { q: 'What happens if we exceed our user limit?', a: 'We review user counts quarterly. If you grow significantly, we\'ll simply adjust your plan to the next tier or add a per-user fee, ensuring you always have the support you need.' },
              { q: 'Does pricing include hardware costs?', a: 'Our plans cover support, monitoring, and strategy. Hardware and software licenses (like Microsoft 365) are billed separately, though we can procure these for you at competitive UK rates.' },
              { q: 'Are on-site visits included?', a: 'The Professional and Enterprise plans include scheduled on-site visits. Emergency on-site support is included in Enterprise and available as an add-on for other plans.' },
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-500" /> {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Need a bespoke Enterprise plan?</h2>
            <p className="text-indigo-100 text-lg">
              For organizations with over 100 users or complex multi-site requirements, we offer custom service level agreements (SLAs) and dedicated engineering teams.
            </p>
          </div>
          <Link to="/contact" className="whitespace-nowrap bg-white text-indigo-600 px-10 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all">
            Request Custom Proposal
          </Link>
        </div>
      </section>
    </div>
  );
};
