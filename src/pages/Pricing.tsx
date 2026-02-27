import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Essential Support",
    price: 450,
    period: "per month",
    features: [
      "Unlimited Remote Support",
      "9am - 5pm Business Hours",
      "4 Hour Critical Response",
      "Basic Cyber Security",
      "Cloud Backup (500GB)",
      "Monthly Health Reports"
    ],
    supportLevel: "Business Hours",
    idealFor: "Small businesses with 5-15 users",
    popular: false
  },
  {
    name: "Professional Managed",
    price: 950,
    period: "per month",
    features: [
      "Everything in Essential",
      "On-site Support Included",
      "24/7 Monitoring",
      "1 Hour Critical Response",
      "Advanced Endpoint Security",
      "Cloud Backup (2TB)",
      "Vulnerability Scanning",
      "Quarterly IT Strategy"
    ],
    supportLevel: "Priority 24/7",
    idealFor: "Growing SMEs with 15-50 users",
    popular: true
  },
  {
    name: "Enterprise Solutions",
    price: 1850,
    period: "per month",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "30 Min Critical Response",
      "Full Cyber Essentials Audit",
      "Disaster Recovery Planning",
      "Unlimited Cloud Storage",
      "Custom API Integrations",
      "Monthly Strategy Meetings"
    ],
    supportLevel: "Dedicated VIP",
    idealFor: "Large organisations with 50+ users",
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            No hidden fees. No long-term lock-ins. Just enterprise-grade IT support tailored for your business.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border ${plan.popular ? 'border-brand-500 ring-4 ring-brand-500/10' : 'border-slate-100'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500">{plan.idealFor}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-display font-bold text-slate-900">£{plan.price}</span>
                    <span className="text-slate-500 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">* All prices are subject to VAT at the prevailing rate.</p>
                </div>
                
                <div className="space-y-4 mb-10">
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center">
                    <Info size={16} className="mr-2 text-brand-600" />
                    <span>Support Level: {plan.supportLevel}</span>
                  </p>
                  <div className="h-px bg-slate-100" />
                  <ul className="space-y-4">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start space-x-3 text-sm text-slate-600">
                        <Check size={18} className="text-brand-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                    plan.popular 
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25' 
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle size={48} className="mx-auto text-brand-600 mb-6" />
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-8 text-left">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Is there a minimum contract term?</h4>
              <p className="text-slate-600">We typically work on a 12-month rolling contract, but we also offer flexible monthly options for specific projects.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">How quickly can you onboard our company?</h4>
              <p className="text-slate-600">Onboarding usually takes 5-10 business days, depending on the complexity of your current infrastructure.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Do you provide hardware as part of the plans?</h4>
              <p className="text-slate-600">Hardware is typically purchased separately, but we provide full procurement services at competitive business rates.</p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/contact" className="text-brand-600 font-bold hover:underline">Still have questions? Contact our team →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
