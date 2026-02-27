import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Essential Support",
    price: "499",
    period: "month",
    ideal: "Small businesses with 5-15 users.",
    features: [
      "9/5 Remote Support",
      "Next-Day On-site Response",
      "Basic Endpoint Security",
      "Monthly Health Reports",
      "Cloud Backup (500GB)",
      "Standard Network Monitoring"
    ],
    support: "Standard Business Hours",
    cta: "Start Essential",
    highlight: false
  },
  {
    name: "Professional Managed",
    price: "999",
    period: "month",
    ideal: "Growing companies with 15-50 users.",
    features: [
      "24/7 Remote Support",
      "4-Hour On-site Response",
      "Advanced Threat Protection",
      "Weekly Strategic Reviews",
      "Cloud Backup (2TB)",
      "Advanced Network Security",
      "vCIO Advisory Services"
    ],
    support: "24/7 Priority Access",
    cta: "Go Professional",
    highlight: true
  },
  {
    name: "Enterprise Elite",
    price: "2,499",
    period: "month",
    ideal: "Large organisations with 50+ users.",
    features: [
      "24/7 Dedicated Support",
      "1-Hour Critical Response",
      "Full SIEM/SOC Monitoring",
      "Daily Compliance Audits",
      "Unlimited Cloud Backup",
      "Dedicated Account Manager",
      "Custom Digital Roadmap"
    ],
    support: "Dedicated Support Team",
    cta: "Contact for Enterprise",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <div className="bg-slate-50 py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Transparent IT Pricing</h1>
          <p className="text-xl text-slate-600">Simple, scalable plans designed for UK businesses of all sizes. No hidden fees, just expert support.</p>
          <div className="mt-8 inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-500">
            <Info className="h-4 w-4 text-brand-accent" />
            <span>All prices exclude VAT at the standard UK rate.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-10 shadow-sm border ${
                plan.highlight ? 'border-brand-accent ring-4 ring-brand-accent/5' : 'border-slate-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500">{plan.ideal}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500 ml-2">/{plan.period}</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">+ VAT</div>
              </div>
              
              <div className="space-y-4 mb-10">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">What's Included</div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-slate-700">
                      <Check className="h-5 w-5 text-brand-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-8 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Support Level</div>
                <p className="text-sm font-medium text-slate-900 mb-8">{plan.support}</p>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                    plan.highlight
                      ? 'bg-brand-accent text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-white flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-xl mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-slate-400">For complex requirements, multi-site setups, or specialised compliance needs, we offer bespoke pricing tailored to your exact specifications.</p>
          </div>
          <Link to="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 px-10">
            Request Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
