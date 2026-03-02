import { motion } from 'motion/react';
import { PRICING_PLANS } from '../constants';
import { Check, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-zinc-50 py-24 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6"
          >
            Simple, Transparent <span className="text-emerald-600">Pricing</span>
          </motion.h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            No hidden fees. No complex contracts. Just reliable IT support tailored to your business size and needs.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-[2.5rem] border ${
                  plan.highlight
                    ? 'border-emerald-500 shadow-2xl bg-zinc-950 text-white'
                    : 'border-zinc-200 bg-white text-zinc-900'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {plan.idealFor}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && (
                      <span className={`ml-2 text-sm ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        / user / month
                      </span>
                    )}
                  </div>
                  <p className="text-xs mt-2 text-zinc-500 italic">* All prices exclude VAT at 20%</p>
                </div>

                <div className="space-y-4 mb-10">
                  <p className="text-sm font-bold uppercase tracking-wider opacity-60">What's included:</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className={`h-5 w-5 shrink-0 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <div className="flex items-start space-x-3 pt-4 border-t border-zinc-800/10">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span className="text-sm font-medium">Support: {plan.supportLevel}</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full py-4 rounded-full font-bold text-center transition-all ${
                    plan.highlight
                      ? 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg shadow-emerald-500/20'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            {[
              { q: 'Is there a minimum contract length?', a: 'Our standard managed services are on a 12-month rolling contract, but we offer flexible monthly terms for specific cloud services.' },
              { q: 'Do you charge for initial setup?', a: 'Setup fees vary depending on the complexity of your current infrastructure. We provide a full breakdown in our initial quote.' },
              { q: 'Can we mix and match plans?', a: 'Yes, we can tailor a hybrid plan if different departments in your organisation have varying support requirements.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100">
                <h4 className="font-bold text-zinc-900 mb-2">{item.q}</h4>
                <p className="text-zinc-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
