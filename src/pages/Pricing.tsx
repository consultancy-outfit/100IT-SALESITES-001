/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Shield, Zap, TrendingUp, Users, ArrowRight, Star } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { cn } from '../utils';

export default function Pricing() {
  return (
    <div className="pt-20 pb-32">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8"
          >
            <Zap className="h-4 w-4" />
            <span>Transparent & Scalable Pricing</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight"
          >
            Plans for Every <span className="text-indigo-600">Business Size</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Simple, predictable pricing with no hidden fees. All our plans are designed to scale with your business as you grow.
          </motion.p>
          <div className="mt-8 text-sm text-slate-500 font-medium">
            * All prices are per user, per month and exclude VAT at the prevailing rate.
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative bg-white p-10 rounded-[2.5rem] border transition-all flex flex-col h-full",
                plan.isPopular ? "border-indigo-600 shadow-2xl scale-105 z-10" : "border-slate-200 shadow-sm hover:shadow-md"
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-white" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm font-medium">{plan.idealFor}</p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline space-x-1">
                  <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium">/user/mo</span>
                </div>
                <div className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-widest">+ VAT @ 20%</div>
              </div>

              <div className="mb-10 flex-grow">
                <div className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">What's Included</div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 text-slate-600">
                      <Check className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Support Level</div>
                  <div className="text-sm font-semibold text-slate-900">{plan.supportLevel}</div>
                </div>
              </div>

              <button
                className={cn(
                  "w-full py-4 rounded-full font-bold transition-all flex items-center justify-center space-x-2",
                  plan.isPopular ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg" : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 rounded-[3rem] p-12 md:p-24 border border-indigo-100 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              If your business has unique requirements or more than 100 users, we can design a bespoke IT package tailored specifically to your needs.
            </p>
          </div>
          <button className="bg-indigo-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl whitespace-nowrap">
            Request Custom Quote
          </button>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Is there a minimum contract term?</h3>
            <p className="text-slate-600 leading-relaxed">
              Our standard contract term is 12 months, which allows us to provide the best possible service and predictable pricing. However, we do offer flexible monthly rolling options for certain services.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Can I upgrade or downgrade my plan?</h3>
            <p className="text-slate-600 leading-relaxed">
              Yes, you can upgrade your plan at any time to access more features or support. Downgrades are processed at the end of your current billing cycle or contract term.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What happens if I add more users?</h3>
            <p className="text-slate-600 leading-relaxed">
              Adding users is simple. Your monthly invoice will automatically adjust based on the number of active users in your organization. We'll even help you set up their accounts and hardware.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
