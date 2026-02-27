import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your business needs. All plans are billed monthly and tailored for UK-based organisations.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl border ${
                  plan.isPopular ? 'border-zinc-900 shadow-xl ring-1 ring-zinc-900' : 'border-zinc-200'
                } bg-white`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-zinc-500 mb-6">{plan.idealFor}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-zinc-500 text-sm">/month</span>}
                  </div>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-wider mt-1">{plan.vatInfo}</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">What's included:</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-zinc-600">
                        <Check size={18} className="text-zinc-900 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-zinc-100">
                    <p className="text-xs font-bold text-zinc-900 mb-2">Support Level:</p>
                    <p className="text-sm text-zinc-600">{plan.support}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.isPopular 
                      ? 'bg-zinc-900 text-white hover:bg-zinc-800' 
                      : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/Info Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-8 bg-white rounded-2xl border border-zinc-200">
            <Info className="text-zinc-900 shrink-0 mt-1" size={24} />
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-zinc-900">Important Information</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                All prices listed are subject to VAT at the prevailing UK rate. Our contracts are typically on a 12-month rolling basis with a 30-day notice period. On-boarding fees may apply depending on the complexity of your current infrastructure.
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                For organisations with more than 50 users, we recommend our Enterprise plan for a fully bespoke service level agreement (SLA).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Unsure which plan is right for you?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-10 py-5 rounded-full font-bold hover:bg-zinc-800 transition-colors"
          >
            Get a Free IT Audit <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
