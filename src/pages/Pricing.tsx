import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, HelpCircle } from 'lucide-react';
import { PRICING_TIERS } from '../constants';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-primary text-white py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">
              Transparent <span className="text-brand-accent">Pricing</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Simple, predictable pricing models designed to scale with your business. No hidden fees, just expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 -mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative p-10 rounded-3xl border transition-all duration-300",
                  tier.highlighted 
                    ? "bg-white border-brand-accent shadow-2xl scale-105 z-10" 
                    : "bg-white border-slate-200 shadow-sm hover:shadow-md"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-slate-500 text-sm">{tier.idealClient}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">£{tier.price}</span>
                    <span className="text-slate-400 text-sm">/user/month</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">* Excludes VAT at 20%</p>
                </div>
                <div className="mb-10 space-y-4">
                  <p className="text-sm font-bold text-brand-primary uppercase tracking-widest">What's Included:</p>
                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="text-brand-accent shrink-0 mt-0.5" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-10 pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-400 uppercase font-bold mb-2">Support Level</p>
                  <p className="text-sm font-semibold text-brand-primary">{tier.supportLevel}</p>
                </div>
                <Link
                  to="/contact"
                  className={cn(
                    "w-full py-4 rounded-xl font-bold text-center block transition-all",
                    tier.highlighted
                      ? "bg-brand-accent text-white hover:bg-emerald-500 shadow-lg shadow-brand-accent/20"
                      : "bg-slate-100 text-brand-primary hover:bg-slate-200"
                  )}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VAT & Custom Quote */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-brand-primary rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent shrink-0">
                <HelpCircle size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
                <p className="text-slate-400">For larger enterprises or specific project requirements, we offer bespoke pricing models.</p>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="bg-brand-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 transition-all whitespace-nowrap"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Pricing FAQ</h2>
            <p className="text-lg text-slate-600">Common questions about our billing and contracts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { q: 'Is there a minimum contract length?', a: 'Our standard managed services contracts are 12 months, but we also offer flexible rolling monthly options for specific services.' },
              { q: 'How are users counted?', a: 'A user is defined as any individual with an active mailbox or account within your primary business domain.' },
              { q: 'Are there any setup fees?', a: 'Setup fees vary depending on the complexity of your current infrastructure. We provide a full breakdown after our initial audit.' },
              { q: 'Do you offer discounts for non-profits?', a: 'Yes, we provide special pricing for registered UK charities and non-profit organisations.' }
            ].map((faq, i) => (
              <div key={i} className="space-y-3">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <Info size={18} className="text-brand-accent" />
                  {faq.q}
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
