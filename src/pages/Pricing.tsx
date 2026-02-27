import React from 'react';
import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className="pt-20">
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-zinc-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            No hidden fees. No complex contracts. Just reliable IT support tailored to your business size and needs.
          </p>
          <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-medium border border-amber-100">
            <Info className="h-4 w-4 mr-2" />
            All prices exclude VAT at the prevailing rate.
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border ${
                  plan.isPopular
                    ? 'border-indigo-600 shadow-2xl shadow-indigo-100'
                    : 'border-zinc-200'
                } bg-white flex flex-col`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-500 mb-6">{plan.idealFor}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-zinc-900">{plan.price}</span>
                    <span className="text-zinc-500 ml-2">/ month</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <p className="text-sm font-bold text-zinc-900">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start text-sm text-zinc-600">
                        <Check className="h-4 w-4 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-zinc-100">
                  <div className="mb-6">
                    <p className="text-xs text-zinc-400 uppercase font-bold tracking-widest mb-1">Support Level</p>
                    <p className="text-sm font-semibold text-zinc-900">{plan.supportLevel}</p>
                  </div>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all ${
                      plan.isPopular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                        : 'bg-zinc-900 text-white hover:bg-zinc-800'
                    }`}
                  >
                    Select {plan.name}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-3xl bg-zinc-900 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              For larger organisations or specific project requirements, we offer bespoke pricing models.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
