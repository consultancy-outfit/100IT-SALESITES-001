import { Check, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { PRICING_TIERS } from '../constants';

export const Pricing = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-zinc-50 py-24 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-zinc-900 mb-6">Transparent Monthly Pricing</h1>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Choose the plan that fits your business scale. No hidden fees, just professional IT support you can rely on.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-zinc-200 rounded-full text-sm font-medium text-zinc-700">
              <Info className="w-4 h-4" />
              All prices exclude VAT at the standard UK rate.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier) => (
              <div 
                key={tier.name}
                className={`relative p-10 rounded-[2.5rem] border ${
                  tier.isPopular 
                    ? 'border-emerald-500 bg-zinc-900 text-white shadow-2xl shadow-emerald-900/20' 
                    : 'border-zinc-200 bg-white text-zinc-900'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    <span className={tier.isPopular ? 'text-zinc-400' : 'text-zinc-500'}>/month</span>
                  </div>
                  <p className={`mt-4 text-sm ${tier.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    Ideal for: {tier.idealFor}
                  </p>
                </div>

                <div className="space-y-6 mb-10">
                  <div className={`pt-6 border-t ${tier.isPopular ? 'border-zinc-800' : 'border-zinc-100'}`}>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-70">What's Included</h4>
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className={`w-5 h-5 shrink-0 ${tier.isPopular ? 'text-emerald-400' : 'text-emerald-600'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`pt-6 border-t ${tier.isPopular ? 'border-zinc-800' : 'border-zinc-100'}`}>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Support Level</h4>
                    <p className="text-sm font-medium">{tier.supportLevel}</p>
                  </div>
                </div>

                <button 
                  className={`w-full py-4 rounded-2xl font-bold transition-all ${
                    tier.isPopular 
                      ? 'bg-emerald-500 text-white hover:bg-emerald-400' 
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-[3rem] border border-zinc-200 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-zinc-600 mb-8">
            For larger enterprises or specialized requirements, we offer bespoke pricing models tailored to your exact needs.
          </p>
          <button className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-500 transition-all">
            Contact Sales for a Bespoke Quote
          </button>
        </div>
      </section>
    </div>
  );
};
