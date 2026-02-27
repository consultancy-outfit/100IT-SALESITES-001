import { motion } from 'motion/react';
import { Check, Info, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_TIERS } from '../constants';

export default function Pricing() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
              Transparent <span className="text-brand-500">Pricing</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Simple, predictable pricing plans designed to scale with your business. No hidden fees, just expert IT support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl border ${
                  tier.highlighted 
                    ? 'border-brand-500 shadow-2xl shadow-brand-500/10 bg-white z-10' 
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <p className="text-sm text-slate-500">{tier.idealFor}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold text-slate-900">{tier.price}</span>
                    <span className="text-slate-500 font-medium">/user/month</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 italic">* Prices exclude VAT at 20%</p>
                </div>

                <div className="flex-1 space-y-4 mb-10">
                  <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">What's Included:</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check size={18} className="text-brand-600 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Support Hours</div>
                    <div className="text-sm font-medium text-slate-700">{tier.supportLevel}</div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2 ${
                    tier.highlighted
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20'
                      : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Choose {tier.name} <ChevronRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <Info className="text-brand-600 shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Requirements?</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  If your business has unique needs, more than 50 users, or requires specialised compliance support, we can create a bespoke package tailored specifically to your organisation.
                </p>
                <Link to="/contact" className="text-brand-600 font-bold hover:underline">
                  Speak to an advisor about a custom plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
