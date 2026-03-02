import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            No hidden fees. Just professional IT support tailored to your organization's scale and needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-sm border ${
                  plan.highlighted ? 'border-brand-500 ring-4 ring-brand-500/10' : 'border-slate-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-6">{plan.idealFor}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-slate-500 font-medium">/month</span>}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 italic">* All prices exclude VAT at 20%</p>
                </div>

                <div className="space-y-4 mb-10">
                  <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Info className="w-4 h-4 text-brand-600" />
                    Support: {plan.supportLevel}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="w-5 h-5 text-brand-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold transition-all ${
                    plan.highlighted
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Pricing FAQs</h2>
          </div>
          <div className="space-y-8">
            {[
              { q: "Is there a long-term contract?", a: "Our standard managed services are on a 12-month rolling contract, but we also offer flexible monthly options for specific project work." },
              { q: "Do you charge for on-site visits?", a: "For Professional and Enterprise plans, standard on-site visits are included. For Essential plans, on-site support is billed at a discounted hourly rate." },
              { q: "Can we change plans later?", a: "Absolutely. You can upgrade your plan at any time as your business grows. Downgrades require 30 days notice." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-8">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
