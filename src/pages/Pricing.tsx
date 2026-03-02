import React from 'react';
import { PRICING_TIERS, COMPANY_DETAILS } from '../constants';
import { Check, HelpCircle, ArrowRight, ShieldCheck, Zap, Building } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-5xl font-bold text-slate-900 tracking-tight">Transparent IT Pricing</h1>
            <p className="text-xl text-slate-600">
              Scalable IT support plans designed for London's diverse business landscape. No hidden fees, just reliable service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white p-10 rounded-3xl border ${
                  i === 1 ? 'border-emerald-500 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-lg'
                } flex flex-col`}
              >
                {i === 1 && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <p className="text-sm text-slate-500">{tier.idealClient}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                    {tier.price !== 'Custom' && <span className="text-slate-500 font-medium">/month</span>}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 italic">{tier.vatInfo}</p>
                </div>
                <div className="flex-grow space-y-4 mb-10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</p>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Support Level</p>
                    <p className="text-sm font-semibold text-slate-900">{tier.supportLevel}</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    i === 1 
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-100' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table (Simplified) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Plan Comparison</h2>
            <p className="text-slate-600">Choose the right level of support for your business needs.</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="p-6 text-sm font-bold text-slate-900 border-b border-slate-200">Feature</th>
                  <th className="p-6 text-sm font-bold text-slate-900 border-b border-slate-200">Essential</th>
                  <th className="p-6 text-sm font-bold text-slate-900 border-b border-slate-200">Professional</th>
                  <th className="p-6 text-sm font-bold text-slate-900 border-b border-slate-200">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600">
                {[
                  { name: "Remote Support", e: "9-5 Mon-Fri", p: "9-5 Mon-Fri", ent: "24/7/365" },
                  { name: "On-site Support", e: "Pay-as-you-go", p: "Included", ent: "Unlimited" },
                  { name: "SLA Response", e: "Next Day", p: "4 Hours", ent: "1 Hour" },
                  { name: "Cyber Security", e: "Basic", p: "Advanced", ent: "Full SOC" },
                  { name: "CTO Advisory", e: "No", p: "Quarterly", ent: "Monthly" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 border-b border-slate-100 font-medium text-slate-900">{row.name}</td>
                    <td className="p-6 border-b border-slate-100">{row.e}</td>
                    <td className="p-6 border-b border-slate-100">{row.p}</td>
                    <td className="p-6 border-b border-slate-100">{row.ent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { q: "Are there any setup fees?", a: "We typically charge a one-off onboarding fee to audit and secure your systems. This varies based on complexity but starts from £250." },
              { q: "Can I change my plan later?", a: "Yes, you can upgrade or downgrade your plan with 30 days' notice. We want our services to grow with your business." },
              { q: "Is VAT included in the prices?", a: "No, all prices listed are exclusive of VAT, which will be added to your invoice at the standard UK rate of 20%." },
              { q: "Do you offer discounts for non-profits?", a: "Yes, we offer a 15% discount on all managed service plans for registered UK charities." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-emerald-500" /> {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
