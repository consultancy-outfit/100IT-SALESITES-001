import React from 'react';
import { motion } from 'motion/react';
import { Check, X, HelpCircle, ArrowRight, Zap, Shield, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const plans = [
  {
    name: "Essential",
    icon: Zap,
    price: "£25",
    period: "/user/month",
    description: "Ideal for small teams needing reliable remote support and basic security.",
    features: [
      "Remote IT Support (9-5)",
      "Antivirus & Malware Protection",
      "Cloud Backup (50GB/user)",
      "Email Security Filtering",
      "Monthly Health Reports",
      "Microsoft 365 Management"
    ],
    notIncluded: [
      "On-site Support",
      "24/7 Monitoring",
      "Strategic IT Roadmap",
      "Advanced Cyber Security"
    ],
    idealFor: "Startups & Small Offices",
    support: "Remote Only",
    buttonText: "Start Essential",
    highlight: false
  },
  {
    name: "Professional",
    icon: Shield,
    price: "£45",
    period: "/user/month",
    description: "Our most popular plan for growing businesses requiring on-site support.",
    features: [
      "Unlimited Remote & On-site Support",
      "Advanced Endpoint Protection",
      "Cloud Backup (250GB/user)",
      "Vulnerability Scanning",
      "Quarterly Strategy Reviews",
      "Network Management",
      "Cyber Essentials Readiness"
    ],
    notIncluded: [
      "24/7 Support",
      "Dedicated Account Manager"
    ],
    idealFor: "Established SMEs",
    support: "Remote & On-site",
    buttonText: "Go Professional",
    highlight: true
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "£85",
    period: "/user/month",
    description: "Complete IT outsourcing with 24/7 support and high-level security.",
    features: [
      "24/7 Priority Support",
      "Full Managed Security (SOC)",
      "Unlimited Cloud Storage",
      "Dedicated Account Manager",
      "Monthly Strategic Planning",
      "Disaster Recovery as a Service",
      "Compliance Management",
      "Custom Software Integration"
    ],
    notIncluded: [],
    idealFor: "Large Enterprises",
    support: "24/7 Priority",
    buttonText: "Contact Sales",
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-zinc-900 tracking-tight mb-6"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 max-w-3xl mx-auto"
          >
            Choose a plan that scales with your business. No hidden fees, just professional IT excellence.
          </motion.p>
          <div className="mt-8 flex items-center justify-center space-x-4">
            <span className="text-sm font-medium text-zinc-500">All prices exclude VAT at 20%</span>
            <div className="h-4 w-px bg-zinc-300"></div>
            <span className="text-sm font-medium text-zinc-500">Billed Monthly</span>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl border ${
                  plan.highlight 
                    ? 'border-indigo-600 shadow-2xl shadow-indigo-100 ring-1 ring-indigo-600' 
                    : 'border-zinc-200 bg-white'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-indigo-600 text-white' : 'bg-zinc-100 text-zinc-900'}`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                    <span className="text-zinc-500 text-sm ml-1">{plan.period}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2">Ideal for: {plan.idealFor}</p>
                </div>

                <div className="flex-1 space-y-4 mb-10">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">What's Included</p>
                  <ul className="space-y-3">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-start text-sm text-zinc-600">
                        <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {plan.notIncluded.map(feature => (
                      <li key={feature} className="flex items-start text-sm text-zinc-400">
                        <X className="w-5 h-5 text-zinc-200 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-100 mb-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500">Support Level</span>
                    <span className="font-semibold text-zinc-900">{plan.support}</span>
                  </div>
                </div>

                <Link
                  to={ROUTES.CONTACT}
                  className={`w-full py-4 rounded-xl font-bold transition-all text-center ${
                    plan.highlight
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                q: "Is there a minimum contract length?",
                a: "Our standard managed service contracts are 12 months, but we also offer flexible monthly rolling options for specific services."
              },
              {
                q: "Do you charge for onboarding?",
                a: "We charge a one-time setup fee for onboarding to cover the initial audit, system integration, and security baseline implementation."
              },
              {
                q: "Can we upgrade or downgrade our plan?",
                a: "Yes, you can upgrade your plan at any time. Downgrades are possible at the end of your current contract term."
              },
              {
                q: "What happens if we have an emergency out of hours?",
                a: "Enterprise clients have 24/7 access to our emergency line. Professional and Essential clients can access out-of-hours support at a premium hourly rate."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                <h4 className="text-lg font-bold text-zinc-900 mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 text-indigo-600 mr-3" />
                  {faq.q}
                </h4>
                <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-3xl p-12 lg:p-20 text-white text-center">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Need something more specific?</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              We understand that every business is unique. Contact our team for a bespoke quote tailored to your exact infrastructure and requirements.
            </p>
            <Link
              to={ROUTES.CONTACT}
              className="inline-flex items-center bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all group"
            >
              Request a Custom Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
