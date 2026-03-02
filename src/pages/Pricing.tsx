import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-20 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">Transparent Pricing</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Simple, predictable monthly plans designed to scale with your business. No hidden fees, just expert IT support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl border-2 transition-all hover:shadow-2xl ${
                  plan.name === 'Professional' 
                    ? 'border-indigo-600 bg-white shadow-xl scale-105 z-10' 
                    : 'border-slate-100 bg-slate-50'
                }`}
              >
                {plan.name === 'Professional' && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 font-medium">/user/month</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">{plan.vatInfo}</p>
                </div>

                <div className="space-y-6 mb-10 flex-grow">
                  <div className="pt-6 border-t border-slate-200">
                    <div className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">What's Included</div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                          <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Support Level</div>
                    <p className="text-sm font-semibold text-slate-900">{plan.supportLevel}</p>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Ideal For</div>
                    <p className="text-sm text-slate-600">{plan.idealFor}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.name === 'Professional'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / Features Table */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Enterprise-Grade Standards</h2>
              <p className="text-slate-600">All our plans come with these core guarantees as standard.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: ShieldCheck, title: "Cyber Essentials Ready", desc: "All support plans are built around Cyber Essentials standards to keep you secure." },
                { icon: Zap, title: "15-Minute Response", desc: "Our average response time for critical issues is under 15 minutes." },
                { icon: Globe, title: "UK-Based Support", desc: "No overseas call centres. Speak directly to our engineers in Telford." },
                { icon: Info, title: "No Long Contracts", desc: "We believe in earning your business every month. Flexible rolling terms available." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="shrink-0 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-indigo-600 rounded-[2.5rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Need a Bespoke Enterprise Quote?</h2>
              <p className="text-xl text-indigo-100">
                For organisations with over 50 users or complex multi-site requirements, we offer custom pricing and dedicated infrastructure management.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="shrink-0 px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl flex items-center gap-2 group"
            >
              Contact Our Sales Team <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
