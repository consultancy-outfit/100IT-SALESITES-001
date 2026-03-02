import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Transparent Pricing</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Simple, scalable IT support plans designed for British businesses of all sizes. No hidden fees, just expert support.
            </p>
            <div className="mt-8 inline-flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Info size={16} className="mr-2" />
              All prices exclude VAT at the standard UK rate (20%)
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-[2.5rem] p-10 shadow-xl border-2 transition-all hover:shadow-2xl ${
                  plan.popular ? 'border-indigo-600 scale-105 z-10' : 'border-slate-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                    <span className="text-slate-500 ml-2 text-sm">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">What's Included</div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-100 space-y-4 mb-10">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Support Level</div>
                    <div className="text-sm font-semibold text-slate-900">{plan.support}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ideal For</div>
                    <div className="text-sm font-semibold text-slate-900">{plan.idealFor}</div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-2xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pricing FAQs</h2>
            <p className="text-slate-600">Common questions about our billing and contracts.</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                <HelpCircle size={20} className="text-indigo-600 mr-3" />
                Are there any setup fees?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We typically charge a one-off onboarding fee to audit your systems and bring them up to our standard. This varies based on the complexity of your infrastructure.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                <HelpCircle size={20} className="text-indigo-600 mr-3" />
                Do you offer annual contracts?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes, we offer both monthly rolling and annual contracts. Annual contracts typically come with a 10% discount on the per-user pricing.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                <HelpCircle size={20} className="text-indigo-600 mr-3" />
                What happens if we add more users?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our pricing is flexible. You can add or remove users at any time, and your monthly bill will adjust automatically from the next billing cycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
