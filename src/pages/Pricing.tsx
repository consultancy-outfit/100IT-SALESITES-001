import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../constants';

const Pricing = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="py-24 lg:py-32 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 mb-8">
              Transparent <span className="text-emerald-600">Pricing</span>
            </h1>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Predictable monthly costs with no hidden fees. All plans are billed in GBP and are subject to VAT at the prevailing rate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-10 rounded-[2.5rem] border ${
                  plan.popular
                    ? 'border-emerald-500 bg-white shadow-2xl shadow-emerald-100'
                    : 'border-zinc-200 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-white" />
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                  <p className="text-zinc-500 text-sm">{plan.idealFor}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">£{plan.price}</span>
                    <span className="text-zinc-400 font-medium">/month</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2">+ VAT at 20%</p>
                </div>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Support Level</h4>
                    <div className="flex items-center gap-2 text-zinc-900 font-medium">
                      <Zap className="w-4 h-4 text-emerald-500" />
                      {plan.support}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Included Features</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-zinc-600">
                          <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">No Long-Term Lock-in</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  We believe in earning your business every month. Our standard contracts are flexible, allowing you to scale up or down as needed.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">VAT Invoicing</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Fully compliant UK VAT invoices are provided monthly. All prices listed are exclusive of VAT at the standard UK rate of 20%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a bespoke enterprise plan?</h2>
              <p className="text-zinc-400 text-lg">
                For organisations with over 100 users or complex multi-site requirements, we offer tailored pricing structures.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-10 py-5 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20 whitespace-nowrap"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
