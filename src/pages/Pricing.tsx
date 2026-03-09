import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '../constants';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-stone-50 py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-stone-900 mb-6"
          >
            Transparent <span className="text-orange-600">Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
          >
            No hidden fees. No complex contracts. Just reliable IT support tailored to your business size and needs.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-[2.5rem] p-10 shadow-xl border ${
                idx === 1 ? 'border-orange-500 ring-4 ring-orange-50' : 'border-stone-100'
              } flex flex-col relative`}
            >
              {idx === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">{tier.name}</h3>
                <p className="text-stone-500 text-sm font-medium">{tier.idealFor}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-stone-900">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-stone-500 ml-2">/user/month</span>}
                </div>
                <p className="text-xs text-stone-400 mt-2">{tier.vatInfo}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <p className="text-sm font-bold text-stone-900 uppercase tracking-widest">What's Included</p>
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check className="text-orange-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-stone-600 text-sm">{feature}</span>
                  </div>
                ))}
                <div className="pt-4 border-t border-stone-50">
                  <p className="text-sm font-bold text-stone-900">Support Level:</p>
                  <p className="text-stone-600 text-sm">{tier.supportLevel}</p>
                </div>
              </div>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-full font-bold text-center transition-all ${
                  idx === 1 ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-stone-900 text-white hover:bg-orange-600'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Common Questions</h2>
        </div>
        <div className="space-y-6">
          {[
            { q: "Is there a minimum contract length?", a: "We typically work on a 12-month rolling basis, but we also offer flexible monthly terms for startups." },
            { q: "Do you charge for on-site visits?", a: "Our Professional and Enterprise tiers include local on-site support within Greater Manchester and London." },
            { q: "How quickly can you onboard us?", a: "Most businesses can be fully onboarded and secured within 5-10 working days." }
          ].map((faq, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
              <div className="flex items-start space-x-4">
                <HelpCircle className="text-orange-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-stone-900 mb-2">{faq.q}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need a Bespoke Solution?</h2>
          <p className="text-stone-400 mb-10 max-w-xl mx-auto">
            If our standard tiers don't quite fit your requirements, contact us for a custom proposal tailored to your specific infrastructure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-colors"
          >
            Request Custom Quote <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
