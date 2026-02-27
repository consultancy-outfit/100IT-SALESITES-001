import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: "Essential Support",
    price: "25",
    description: "Perfect for small teams needing reliable helpdesk support.",
    ideal: "Micro-businesses & Startups",
    support: "Mon-Fri, 9am-5pm",
    features: [
      "Remote Helpdesk Support",
      "Antivirus Management",
      "Patch Management",
      "Monthly Health Reports",
      "1hr Response Time (Critical)"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Business Pro",
    price: "45",
    description: "Comprehensive IT management with advanced security.",
    ideal: "Growing UK SMEs",
    support: "24/7 Critical Support",
    features: [
      "Everything in Essential",
      "Cyber Essentials Readiness",
      "Microsoft 365 Management",
      "Cloud Backup (50GB)",
      "Vulnerability Scanning",
      "Quarterly Strategy Reviews"
    ],
    cta: "Most Popular",
    popular: true
  },
  {
    name: "Enterprise Elite",
    price: "85",
    description: "Full-scale IT department outsourcing for larger organisations.",
    ideal: "Large Organisations & Charities",
    support: "24/7 Dedicated Support",
    features: [
      "Everything in Business Pro",
      "Dedicated Account Manager",
      "On-site Support Included",
      "Advanced Threat Protection",
      "Unlimited Cloud Backup",
      "IT Roadmap & Budgeting"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="bg-slate-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600">No hidden fees. Just expert IT support tailored to your business size.</p>
          <div className="mt-8 inline-flex items-center bg-white p-1 rounded-full shadow-sm border border-slate-200">
            <div className="px-6 py-2 bg-accent text-white rounded-full text-sm font-bold">Monthly</div>
            <div className="px-6 py-2 text-slate-500 text-sm font-bold">Annual (Save 15%)</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 shadow-sm border ${tier.popular ? 'border-accent ring-4 ring-accent/5' : 'border-slate-200'}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{tier.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-primary">£{tier.price}</span>
                  <span className="text-slate-400 ml-2">/user/mo</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">Excluding VAT at 20%</p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Ideal For</p>
                  <p className="text-sm font-medium text-slate-700">{tier.ideal}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Support Level</p>
                  <p className="text-sm font-medium text-slate-700">{tier.support}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">What's Included</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start text-sm text-slate-600">
                        <Check size={16} className="text-accent mr-3 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                to="/contact"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                  tier.popular 
                  ? 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20' 
                  : 'bg-slate-100 text-primary hover:bg-slate-200'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* VAT & FAQ Note */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 border border-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
              <Info className="text-blue-500" size={32} />
            </div>
            <div className="flex-grow">
              <h4 className="text-xl font-bold mb-2">Important Information</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                All prices listed are subject to VAT at the standard UK rate of 20%. Minimum contract terms apply. 
                Custom packages are available for organisations with more than 50 users. 
                We also offer special discounted rates for registered UK charities.
              </p>
            </div>
            <Link to="/contact" className="shrink-0 flex items-center text-accent font-bold hover:underline">
              Speak to an Advisor
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
