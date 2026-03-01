import React from 'react';
import { motion } from 'motion/react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../constants';
import { cn } from '../lib/utils';

export const Pricing = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">Transparent Pricing</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Simple, predictable monthly costs with no hidden fees. All plans are billed in GBP (£) and exclude VAT.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col p-8 rounded-3xl border transition-all duration-300",
                  plan.isPopular 
                    ? "border-sky-600 shadow-xl scale-105 z-10 bg-white" 
                    : "border-slate-200 bg-slate-50 hover:border-slate-300"
                )}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 min-h-[40px]">{plan.idealClient}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 font-medium">/user/month</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 italic">* Prices exclude VAT at 20%</p>
                </div>

                <div className="mb-8 flex-grow">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">What's Included</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check size={18} className="text-sky-600 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Support Level</h4>
                  <p className="text-sm font-medium text-slate-700">{plan.supportLevel}</p>
                </div>

                <Link 
                  to="/contact" 
                  className={cn(
                    "btn-primary w-full text-center",
                    !plan.isPopular && "bg-slate-200 text-slate-900 hover:bg-slate-300"
                  )}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {[
                {
                  q: 'Is there a minimum contract length?',
                  a: 'Our standard managed service contracts are 12 months, but we also offer flexible monthly rolling options for specific project-based support.'
                },
                {
                  q: 'How are users calculated?',
                  a: 'A user is defined as an active employee with a dedicated workstation or email account. We review user counts quarterly to ensure your billing remains accurate.'
                },
                {
                  q: 'Do you offer discounts for non-profits?',
                  a: 'Yes, we provide a 15% discount on all managed service plans for registered UK charities and non-profit organizations.'
                },
                {
                  q: 'What happens if we need on-site support?',
                  a: 'Professional and Enterprise plans include on-site support as standard. Essential plans can request on-site visits at a discounted hourly rate.'
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex gap-4">
                    <HelpCircle className="text-sky-600 shrink-0" size={24} />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h4>
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Bespoke Quote?</h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            For organizations with over 100 users or complex multi-site requirements, we offer custom enterprise pricing.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Request Custom Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};
