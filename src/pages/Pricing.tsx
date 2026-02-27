import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Essential Support",
    price: "25",
    period: "per user / month",
    description: "Perfect for small teams needing reliable reactive support.",
    features: [
      "Remote Helpdesk (9am - 5pm)",
      "Basic Endpoint Security",
      "Microsoft 365 Management",
      "Monthly Health Reports",
      "Next Business Day Response"
    ],
    ideal: "Micro-businesses & Startups",
    cta: "Start Essential",
    highlight: false
  },
  {
    name: "Managed Pro",
    price: "45",
    period: "per user / month",
    description: "Our most popular plan for growing UK businesses.",
    features: [
      "24/7 Proactive Monitoring",
      "Advanced Threat Protection",
      "Unlimited Remote Support",
      "Quarterly Strategy Reviews",
      "4-Hour Response Guarantee",
      "Backup Management"
    ],
    ideal: "Established SMEs",
    cta: "Go Pro",
    highlight: true
  },
  {
    name: "Enterprise Elite",
    price: "75",
    period: "per user / month",
    description: "Full-spectrum IT management for complex requirements.",
    features: [
      "Dedicated Account Manager",
      "On-site Support Included",
      "Vulnerability Scanning",
      "Disaster Recovery Planning",
      "1-Hour Critical Response",
      "Compliance Auditing"
    ],
    ideal: "Large Organisations",
    cta: "Contact Sales",
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <div className="pt-20">
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-bold text-zinc-900 mb-6">Transparent Pricing</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Simple, predictable monthly costs to help you manage your IT budget with confidence. All prices exclude VAT at the prevailing rate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 sm:p-10 rounded-[2rem] border ${
                  plan.highlight 
                    ? 'bg-zinc-900 text-white border-zinc-800 shadow-2xl scale-105 z-10' 
                    : 'bg-white text-zinc-900 border-zinc-200 shadow-sm'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">£{plan.price}</span>
                    <span className={`ml-2 text-sm ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div className="flex-1 mb-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-50">What's Included</h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlight ? 'text-indigo-400' : 'text-indigo-600'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-zinc-100/10">
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50 block mb-1">Ideal For</span>
                    <p className="text-sm font-medium">{plan.ideal}</p>
                  </div>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-full text-sm font-bold transition-all ${
                      plan.highlight
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-zinc-900 text-white hover:bg-zinc-800'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-zinc-50 rounded-3xl p-8 sm:p-12 border border-zinc-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <Info className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Need a Custom Solution?</h3>
                  <p className="text-zinc-600 max-w-xl">
                    For organisations with over 100 users or specific compliance needs, we offer bespoke enterprise agreements tailored to your exact requirements.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-zinc-200 rounded-full text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-all shadow-sm"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
