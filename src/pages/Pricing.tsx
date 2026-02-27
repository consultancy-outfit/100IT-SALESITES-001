import { motion } from "motion/react";
import { Check, Info, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Essential",
    price: "199",
    description: "Perfect for small offices needing reliable remote support.",
    features: [
      "Remote IT Support (9-5)",
      "Antivirus & Malware Protection",
      "Cloud Backup (100GB)",
      "Microsoft 365 Management",
      "Monthly Health Reports",
    ],
    support: "Next Business Day",
    idealFor: "1-5 Users",
    popular: false,
  },
  {
    name: "Professional",
    price: "449",
    description: "Comprehensive support for growing businesses with on-site needs.",
    features: [
      "Unlimited Remote & On-site Support",
      "Advanced Cyber Security Suite",
      "Cloud Backup (500GB)",
      "Network & Server Monitoring",
      "Quarterly Strategy Reviews",
      "Cyber Essentials Readiness",
    ],
    support: "4-Hour Response",
    idealFor: "5-25 Users",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "999",
    description: "Full-scale technology partnership for complex operations.",
    features: [
      "24/7 Critical Support",
      "Managed Firewall & SIEM",
      "Unlimited Cloud Backup",
      "Dedicated Account Manager",
      "Disaster Recovery Planning",
      "Annual Security Audits",
      "Custom Software Integration",
    ],
    support: "1-Hour Response",
    idealFor: "25+ Users",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Choose the plan that fits your business needs. No hidden fees, no long-term lock-ins. All prices are in GBP and exclude VAT.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 items-start">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-emerald-500 shadow-2xl scale-105 z-10 bg-white' : 'border-slate-200 bg-slate-50'} flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">+ VAT at 20%</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">What's Included</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-8 border-t border-slate-100">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Support Level</span>
                  <span className="font-bold text-slate-900">{plan.support}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Ideal For</span>
                  <span className="font-bold text-slate-900">{plan.idealFor}</span>
                </div>
                <Link 
                  to="/contact" 
                  className={`w-full inline-flex h-12 items-center justify-center rounded-full text-sm font-bold transition-all ${plan.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Info className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Not sure which plan is right?</p>
              <p className="text-sm text-slate-500">We offer a free, no-obligation IT audit to assess your current setup.</p>
            </div>
          </div>
          <Link to="/contact" className="text-emerald-600 font-bold flex items-center gap-2 hover:underline">
            Book your free audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
