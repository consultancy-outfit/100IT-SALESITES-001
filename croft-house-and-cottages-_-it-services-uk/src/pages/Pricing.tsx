import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { PRICING_TIERS } from '../constants';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans are billed monthly with no long-term lock-ins.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border flex flex-col ${
                  tier.isPopular 
                    ? 'border-brand-emerald bg-white shadow-xl scale-105 z-10' 
                    : 'border-slate-200 bg-white'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-emerald text-brand-navy text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{tier.name}</h3>
                  <p className="text-sm text-slate-500 mb-6">{tier.idealFor}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-brand-navy">£{tier.price}</span>
                    <span className="text-slate-500">/user/mo</span>
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">What's Included:</h4>
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="text-brand-emerald w-5 h-5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-slate-100 mb-8">
                  <div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                    <Info size={16} className="text-brand-emerald" />
                    <span className="font-semibold">Support Level:</span>
                  </div>
                  <p className="text-sm text-slate-600">{tier.supportLevel}</p>
                </div>

                <Link 
                  to="/contact" 
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    tier.isPopular 
                      ? 'bg-brand-emerald text-brand-navy hover:bg-emerald-400' 
                      : 'bg-brand-navy text-white hover:bg-slate-800'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center text-slate-500 text-sm">
            <p>* All prices are subject to VAT at the standard UK rate (currently 20%).</p>
            <p>Custom enterprise pricing available for organisations with over 100 users.</p>
          </div>
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-brand-navy mb-2">Is there a setup fee?</h4>
              <p className="text-slate-600">For our Essential and Professional plans, there is typically a small one-time onboarding fee to set up your security profiles and monitoring agents.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-navy mb-2">Can we change plans later?</h4>
              <p className="text-slate-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next monthly billing cycle.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-navy mb-2">Do you offer discounts for non-profits?</h4>
              <p className="text-slate-600">Absolutely. We support many UK charities and offer a 20% discount on all our managed service plans for registered non-profits.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
