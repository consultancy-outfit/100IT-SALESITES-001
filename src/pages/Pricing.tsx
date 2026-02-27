import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: "Standard Support",
      price: "45",
      period: "per user/month",
      description: "Essential IT support for small teams needing reliable helpdesk services.",
      features: [
        "Unlimited Remote Support",
        "Mon-Fri 08:30 - 18:00",
        "Endpoint Security (Antivirus)",
        "Email & Microsoft 365 Support",
        "Basic Data Backup (100GB)",
        "4-Hour Response SLA"
      ],
      support: "Remote Helpdesk",
      ideal: "Small businesses with 5-20 employees.",
      highlight: false
    },
    {
      name: "Managed Business",
      price: "85",
      period: "per user/month",
      description: "Comprehensive IT management with proactive security and strategic planning.",
      features: [
        "Everything in Standard",
        "24/7 Critical Monitoring",
        "On-site Support Included",
        "Advanced Cyber Security Suite",
        "Cloud Management (Azure/AWS)",
        "Quarterly IT Strategy Reviews",
        "1-Hour Response SLA"
      ],
      support: "Priority Remote & On-site",
      ideal: "Growing companies with 20-100 employees.",
      highlight: true
    },
    {
      name: "Enterprise Elite",
      price: "Custom",
      period: "bespoke pricing",
      description: "Full-scale technology partnership with dedicated resources and vCTO services.",
      features: [
        "Everything in Managed",
        "Dedicated Account Engineer",
        "vCTO Strategic Guidance",
        "ISO 27001 Compliance Support",
        "Full Disaster Recovery Suite",
        "Custom Software Maintenance",
        "15-Min Emergency Response"
      ],
      support: "Dedicated 24/7 Support",
      ideal: "Large organisations and regulated sectors.",
      highlight: false
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            Transparent <span className="text-indigo-600">UK Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Simple, predictable pricing plans designed to scale with your business. No hidden fees, just expert IT support.
          </motion.p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100">
            <Info className="w-4 h-4 mr-2" />
            All prices exclude VAT at the prevailing UK rate (20%).
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-10 rounded-[2.5rem] transition-all duration-300 ${
                plan.highlight
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-display font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-display font-bold">£{plan.price}</span>
                  <span className={`ml-2 text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                <p className={`text-xs font-bold uppercase tracking-wider ${plan.highlight ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  What's Included:
                </p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.highlight ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    <span className="text-sm leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <div className={`pt-8 border-t mb-10 ${plan.highlight ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className="mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Support Level
                  </span>
                  <p className="text-sm font-medium">{plan.support}</p>
                </div>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Ideal For
                  </span>
                  <p className="text-sm font-medium">{plan.ideal}</p>
                </div>
              </div>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-full font-bold text-center transition-all flex items-center justify-center ${
                  plan.highlight
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-900/20'
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200'
                }`}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ/Notes */}
        <div className="mt-24 max-w-3xl mx-auto bg-white p-12 rounded-[2rem] shadow-sm border border-slate-200">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 text-center">Important Information</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                <span className="text-indigo-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Contract Terms</h4>
                <p className="text-sm text-slate-600">Our standard contracts are 12 months, but we offer flexible monthly rolling options for a small premium.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                <span className="text-indigo-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Onboarding Fee</h4>
                <p className="text-sm text-slate-600">A one-time onboarding fee applies to set up your systems, security protocols, and documentation. This is typically equivalent to one month's service fee.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                <span className="text-indigo-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Hardware & Software</h4>
                <p className="text-sm text-slate-600">Plan prices cover management and support. Hardware costs and third-party software licenses (e.g., Microsoft 365) are billed separately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
