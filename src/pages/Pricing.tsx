import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    name: "Foundation",
    price: "35",
    description: "Essential IT support for small teams needing reliable helpdesk assistance.",
    ideal: "Startups & Small Offices (5-15 users)",
    features: [
      "Unlimited Remote Support",
      "9:00 - 17:30 Helpdesk",
      "Proactive Monitoring",
      "Antivirus & Patch Management",
      "Basic Backup Solution",
      "Monthly Health Reports"
    ],
    notIncluded: [
      "On-site Support",
      "Strategic IT Consulting",
      "Advanced Cybersecurity",
      "Disaster Recovery Drills"
    ],
    cta: "Start Foundation",
    highlight: false
  },
  {
    name: "Professional",
    price: "65",
    description: "Comprehensive IT management with enhanced security and strategic oversight.",
    ideal: "Growing Businesses (15-50 users)",
    features: [
      "Everything in Foundation",
      "Priority Remote Support",
      "Inclusive On-site Support",
      "Advanced Threat Protection",
      "Cloud Backup & Recovery",
      "Quarterly Strategic Reviews",
      "Cyber Essentials Readiness"
    ],
    notIncluded: [
      "24/7 Emergency Support",
      "Dedicated On-site Engineer"
    ],
    cta: "Go Professional",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "95",
    description: "Fully managed technology ecosystem with maximum security and 24/7 availability.",
    ideal: "Established Firms (50+ users)",
    features: [
      "Everything in Professional",
      "24/7/365 Emergency Support",
      "Dedicated Account Manager",
      "Full Disaster Recovery Plan",
      "SIEM & SOC Monitoring",
      "Unlimited On-site Support",
      "vCTO Strategic Planning",
      "Annual Security Audits"
    ],
    notIncluded: [],
    cta: "Contact Sales",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white pt-32 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Simple, predictable plans designed to scale with your business. No hidden fees, just expert IT support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-[32px] p-8 shadow-xl border ${
                plan.highlight ? 'border-indigo-600 ring-4 ring-indigo-600/5' : 'border-slate-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500 font-medium">/user/month</span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Excluding VAT</p>
              </div>

              <div className="mb-8 p-4 bg-slate-50 rounded-2xl">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Ideal For</p>
                <p className="text-sm font-semibold text-slate-700">{plan.ideal}</p>
              </div>

              <div className="space-y-4 mb-10">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check size={18} className="text-emerald-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-400">
                      <X size={18} className="text-slate-300 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta} <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VAT Notice */}
      <section className="max-w-3xl mx-auto px-4 mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-medium text-slate-500">
          <Info size={14} />
          All prices are subject to VAT at the prevailing UK rate.
        </div>
        <p className="mt-8 text-slate-600 leading-relaxed">
          Need a custom solution for a larger organization or specific project? We offer bespoke pricing for complex infrastructure requirements and multi-site operations.
        </p>
        <Link to="/contact" className="mt-4 inline-block text-indigo-600 font-bold hover:underline">
          Contact us for a custom quote
        </Link>
      </section>
    </div>
  );
}
