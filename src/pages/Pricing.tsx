import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: "Essential Support",
    price: "25",
    setup: "£250",
    ideal: "Small residential homes (1-5 users)",
    features: [
      "Remote Helpdesk (9am - 5pm)",
      "Basic Endpoint Security",
      "Cloud Backup (50GB)",
      "Monthly Health Report",
      "Email Support"
    ],
    support: "Standard Business Hours",
    highlight: false
  },
  {
    name: "Professional Care",
    price: "45",
    setup: "£495",
    ideal: "Medium providers (5-20 users)",
    features: [
      "24/7 Remote Helpdesk",
      "Advanced Cyber Protection",
      "Cloud Backup (250GB)",
      "Quarterly Strategy Review",
      "On-site Support (1 visit/mo)",
      "VoIP Phone System Included"
    ],
    support: "24/7 Emergency Support",
    highlight: true
  },
  {
    name: "Enterprise Infrastructure",
    price: "85",
    setup: "Custom",
    ideal: "Multi-site organisations (20+ users)",
    features: [
      "Dedicated Account Manager",
      "Full Compliance Auditing",
      "Unlimited Cloud Storage",
      "Monthly Strategy Meetings",
      "Priority On-site Response",
      "Disaster Recovery Planning"
    ],
    support: "Priority 24/7 Support",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Transparent Pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Simple, predictable monthly costs designed for the UK care sector. No hidden fees, just reliable IT.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-medium">
            <Info className="w-4 h-4" />
            All prices exclude VAT at 20%
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                tier.highlight 
                  ? 'border-brand-600 shadow-2xl bg-white scale-105 z-10' 
                  : 'border-slate-100 bg-slate-50'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{tier.ideal}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">£{tier.price}</span>
                  <span className="text-slate-500">/user/month</span>
                </div>
                <div className="text-xs text-slate-400 mt-2">One-time setup: {tier.setup}</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">What's Included:</div>
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-brand-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100">
                <div className="mb-6">
                  <div className="text-xs text-slate-400 uppercase font-bold mb-1">Support Level</div>
                  <div className="text-sm font-semibold text-slate-700">{tier.support}</div>
                </div>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                    tier.highlight
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg'
                      : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold mb-2">Is there a minimum contract length?</h4>
                <p className="text-slate-600 text-sm">We typically work on 12-month rolling contracts, but we offer flexibility for growing providers. Contact us to discuss your needs.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Do you provide hardware as well?</h4>
                <p className="text-slate-600 text-sm">Yes, we can procure and lease laptops, tablets, and networking equipment at competitive UK trade rates.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">How quickly can you get us set up?</h4>
                <p className="text-slate-600 text-sm">Standard onboarding takes between 5-10 business days depending on the complexity of your current infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
