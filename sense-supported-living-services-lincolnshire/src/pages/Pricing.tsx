import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Foundation",
    price: "25",
    period: "per user / month",
    ideal: "Small businesses needing reliable reactive support.",
    features: [
      "Mon-Fri 9am-5pm Helpdesk",
      "Remote Support Only",
      "Antivirus Management",
      "Basic Patch Management",
      "4 Hour Initial Response SLA",
      "Monthly Health Reports"
    ],
    support: "Standard Business Hours",
    cta: "Start Foundation",
    highlight: false
  },
  {
    name: "Professional",
    price: "45",
    period: "per user / month",
    ideal: "Growing firms requiring proactive security and strategy.",
    features: [
      "24/7 Proactive Monitoring",
      "Remote & On-site Support",
      "Advanced Endpoint Protection",
      "Cloud Backup (100GB/user)",
      "1 Hour Critical Response SLA",
      "Quarterly Strategy Reviews",
      "Cyber Essentials Readiness"
    ],
    support: "Priority 24/7 Support",
    cta: "Go Professional",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "75",
    period: "per user / month",
    ideal: "Large organisations with complex compliance needs.",
    features: [
      "Dedicated Technical Account Manager",
      "Unlimited On-site Support",
      "Managed SIEM & SOC",
      "Full Disaster Recovery Suite",
      "15 Min Emergency Response SLA",
      "Monthly Security Audits",
      "Virtual CTO Services"
    ],
    support: "VIP Dedicated Support",
    cta: "Contact for Enterprise",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Transparent Pricing for <span className="text-emerald-600">Modern Business</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            No hidden fees. No complex contracts. Just enterprise-grade IT support tailored to your scale.
          </p>
          <div className="mt-8 inline-flex items-center bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-100">
            <Info size={16} className="mr-2" />
            All prices are in GBP (£) and exclude VAT at the prevailing rate.
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col bg-white rounded-3xl p-8 shadow-xl border ${
                plan.highlight ? 'border-emerald-600 ring-4 ring-emerald-600/5' : 'border-slate-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm h-10">{plan.ideal}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                  <span className="ml-2 text-slate-500 text-sm">{plan.period}</span>
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600">
                      <Check className="text-emerald-500 mr-3 shrink-0" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <div className="mb-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Support Level</p>
                  <p className="text-slate-900 font-semibold">{plan.support}</p>
                </div>
                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center py-4 rounded-xl font-bold transition-all ${
                    plan.highlight 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg' 
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ / Additional Info */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Is there a minimum contract term?</h4>
                <p className="text-slate-600 text-sm">Our standard managed service contracts are 12 months, but we offer flexible rolling monthly options for our Foundation tier.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">What happens if we grow mid-contract?</h4>
                <p className="text-slate-600 text-sm">Our pricing is designed to scale with you. You can add or remove users at any time, and your monthly billing will adjust automatically.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Do you charge for on-site visits?</h4>
                <p className="text-slate-600 text-sm">On-site support is included in our Professional and Enterprise tiers. For Foundation clients, on-site visits are charged at a discounted hourly rate.</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-900 rounded-3xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-6">Custom Enterprise Solutions</h2>
            <p className="text-emerald-100 mb-8">
              For organisations with over 100 users or specific regulatory requirements, we offer bespoke pricing models including:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-sm">
                <Check className="text-emerald-400 mr-3" size={18} />
                Unlimited site-to-site VPN management
              </li>
              <li className="flex items-center text-sm">
                <Check className="text-emerald-400 mr-3" size={18} />
                Full infrastructure lifecycle management
              </li>
              <li className="flex items-center text-sm">
                <Check className="text-emerald-400 mr-3" size={18} />
                Dedicated on-site engineer days
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block bg-white text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-all"
            >
              Speak to a Consultant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
