import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    name: "Essential Support",
    price: "25",
    period: "per user / month",
    description: "Reliable remote support for small teams needing basic IT maintenance.",
    features: [
      "Unlimited Remote Support",
      "9am - 5:30pm Helpdesk",
      "Antivirus Management",
      "Patch Management",
      "Basic Email Security",
      "1-Hour Critical Response"
    ],
    ideal: "Startups & Small Offices",
    support: "Standard Business Hours",
    accent: false
  },
  {
    name: "Professional Managed",
    price: "45",
    period: "per user / month",
    description: "Full-service IT management for growing businesses that need proactive care.",
    features: [
      "Everything in Essential",
      "On-site Support Included",
      "Advanced Threat Protection",
      "Microsoft 365 Management",
      "Backup Monitoring",
      "Quarterly Strategy Reviews",
      "30-Min Critical Response"
    ],
    ideal: "Growing SMEs (10-50 users)",
    support: "Priority Support",
    accent: true
  },
  {
    name: "Enterprise Secure",
    price: "75",
    period: "per user / month",
    description: "Maximum security and performance for high-compliance environments.",
    features: [
      "Everything in Professional",
      "24/7 Critical Monitoring",
      "SIEM / SOC Integration",
      "Compliance Auditing",
      "Vulnerability Scanning",
      "Dedicated Account Manager",
      "15-Min Critical Response"
    ],
    ideal: "Regulated & High-Growth Firms",
    support: "24/7 Critical Coverage",
    accent: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
          >
            Transparent <span className="text-accent">Pricing</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, predictable monthly costs with no hidden fees. 
            All prices exclude VAT at the prevailing rate.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {PLANS.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-10 rounded-[3rem] border ${
                  plan.accent 
                    ? 'border-accent bg-primary text-white shadow-2xl shadow-accent/20 scale-105 z-10' 
                    : 'border-slate-100 bg-slate-50 text-primary'
                }`}
              >
                {plan.accent && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.accent ? 'text-white' : 'text-primary'}`}>{plan.name}</h3>
                  <p className={`text-sm ${plan.accent ? 'text-slate-300' : 'text-slate-500'}`}>{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">£{plan.price}</span>
                    <span className={`text-sm font-medium ${plan.accent ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <p className={`text-xs font-bold uppercase tracking-widest ${plan.accent ? 'text-accent' : 'text-slate-400'}`}>Features Included</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className={`h-5 w-5 shrink-0 ${plan.accent ? 'text-accent' : 'text-accent'}`} />
                        <span className={plan.accent ? 'text-slate-200' : 'text-slate-600'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`pt-8 border-t ${plan.accent ? 'border-white/10' : 'border-slate-200'} mb-10`}>
                  <div className="flex justify-between text-xs mb-2">
                    <span className={plan.accent ? 'text-slate-400' : 'text-slate-500'}>Ideal for:</span>
                    <span className="font-bold">{plan.ideal}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={plan.accent ? 'text-slate-400' : 'text-slate-500'}>Support:</span>
                    <span className="font-bold">{plan.support}</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.accent 
                      ? 'bg-accent hover:bg-emerald-600 text-white' 
                      : 'bg-primary hover:bg-slate-800 text-white'
                  }`}
                >
                  Get Started <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VAT Disclaimer */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-slate-50 p-6 rounded-2xl flex gap-4 items-start border border-slate-100">
            <Info className="h-6 w-6 text-accent shrink-0" />
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>VAT Clarification:</strong> All prices listed above are subject to UK Value Added Tax (VAT) at the standard rate of 20%. 
              Monthly billing is processed via Direct Debit. Minimum contract terms apply to all managed service plans.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Enterprise Plan?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            For organisations with over 100 users or complex multi-site requirements, 
            we offer bespoke pricing and dedicated infrastructure.
          </p>
          <Link 
            to="/contact" 
            className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-colors"
          >
            Speak to a Consultant
          </Link>
        </div>
      </section>
    </div>
  );
}
