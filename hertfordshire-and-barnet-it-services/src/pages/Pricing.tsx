import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, HelpCircle } from 'lucide-react';
import { PRICING_TIERS } from '../constants';
import { formatCurrency } from '../lib/utils';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-zinc-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            No hidden fees. No complex contracts. Just straightforward IT support 
            plans designed for UK businesses.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-sm border ${
                  tier.isPopular ? 'border-indigo-600 ring-4 ring-indigo-50' : 'border-zinc-200'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{tier.name}</h3>
                  <p className="text-zinc-500 text-sm mb-6">{tier.idealFor}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">{formatCurrency(tier.price)}</span>
                    <span className="text-zinc-500">{tier.period}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2">* All prices exclude VAT at 20%</p>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="font-semibold text-zinc-900 text-sm uppercase tracking-wider">Features Included:</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-600 text-sm">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-100 mb-8">
                  <div className="flex items-center gap-2 text-sm text-zinc-600 mb-2">
                    <Info className="w-4 h-4 text-indigo-600" />
                    <span className="font-semibold">Support Level:</span>
                  </div>
                  <p className="text-sm text-zinc-900 font-medium">{tier.supportLevel}</p>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                    tier.isPopular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' 
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  Choose {tier.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {[
              { q: "Is there a minimum contract term?", a: "Our standard managed service contracts are 12 months, but we offer flexible monthly rolling options for specific services." },
              { q: "Do you charge for on-boarding?", a: "We charge a one-time set-up fee for the Professional and Enterprise tiers to cover the initial infrastructure audit and security hardening." },
              { q: "Can I upgrade my plan later?", a: "Absolutely. You can scale your plan up or down as your business needs change with just 30 days' notice." },
              { q: "Is VAT included in the prices?", a: "No, as we primarily serve businesses, all prices listed are exclusive of VAT, which will be added at the prevailing UK rate (currently 20%)." }
            ].map((faq, idx) => (
              <div key={idx} className="flex gap-4">
                <HelpCircle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-zinc-900 mb-2">{faq.q}</h4>
                  <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
