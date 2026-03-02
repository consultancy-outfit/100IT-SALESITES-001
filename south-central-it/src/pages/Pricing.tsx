import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Standard Support",
    price: "250",
    description: "Essential IT support for small teams needing reliable helpdesk access.",
    ideal: "Micro-businesses & Startups (1-5 users)",
    features: [
      "Mon-Fri 9am-5pm Helpdesk",
      "Remote Desktop Support",
      "Antivirus Management",
      "Basic Patch Management",
      "Monthly Health Reports",
      "4-Hour Response SLA"
    ],
    support: "Standard Business Hours",
    highlight: false
  },
  {
    name: "Professional Managed",
    price: "550",
    description: "Comprehensive management for growing businesses requiring proactive care.",
    ideal: "Established SMEs (5-25 users)",
    features: [
      "24/7 Proactive Monitoring",
      "Unlimited Remote Support",
      "Advanced Cybersecurity Pack",
      "Microsoft 365 Management",
      "Cloud Backup (100GB)",
      "1-Hour Response SLA",
      "Quarterly Strategy Reviews"
    ],
    support: "Priority 24/7 Critical Support",
    highlight: true
  },
  {
    name: "Enterprise Solutions",
    price: "1,200",
    description: "Full-scale IT partnership with dedicated strategic consulting.",
    ideal: "Large Organisations (25+ users)",
    features: [
      "Dedicated Account Manager",
      "On-site Support Included",
      "vCISO Strategic Services",
      "Full Infrastructure Audit",
      "DRaaS Implementation",
      "Custom SLA Agreements",
      "Compliance Management"
    ],
    support: "Dedicated VIP Support Line",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6"
          >
            Transparent <span className="text-brand-600">Pricing</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Simple, predictable monthly plans designed to scale with your business. 
            All prices are subject to VAT at the prevailing rate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl bg-white border ${
                plan.highlight ? 'border-brand-500 shadow-2xl ring-4 ring-brand-50' : 'border-slate-200 shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-extrabold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500 font-medium">/month</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">+ VAT per month</div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest pb-2 border-bottom border-slate-100">What's Included</div>
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl mb-8">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1">
                  <Info className="w-4 h-4 text-brand-600" />
                  Support Level
                </div>
                <p className="text-slate-600 text-xs">{plan.support}</p>
              </div>

              <div className="mb-8">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Ideal For</div>
                <div className="text-slate-900 font-semibold text-sm">{plan.ideal}</div>
              </div>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all ${
                  plan.highlight 
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-white rounded-3xl border border-slate-200 shadow-sm text-center">
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Need a Bespoke Solution?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. If our standard plans don't fit your requirements, 
            we can build a custom service package tailored to your specific needs.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors">
            Contact our sales team for a custom quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
