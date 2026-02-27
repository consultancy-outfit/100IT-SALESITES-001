import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Essential Support',
    price: '35',
    description: 'Perfect for small teams needing reliable reactive support and basic security.',
    idealFor: 'Startups & Micro-businesses (1-10 users)',
    features: [
      'Unlimited Remote Support',
      '9am - 5pm Mon-Fri Coverage',
      'Managed Antivirus',
      'Patch Management',
      'Basic Email Security',
      'Monthly Health Reports'
    ],
    supportLevel: 'Next Business Day Response',
    cta: 'Start with Essential',
    highlight: false
  },
  {
    name: 'Professional Managed',
    price: '65',
    description: 'Our most popular plan. Proactive management and advanced security for growing firms.',
    idealFor: 'Growing SMEs (11-50 users)',
    features: [
      'Everything in Essential',
      'Proactive 24/7 Monitoring',
      'Advanced Endpoint Protection',
      'Microsoft 365 Management',
      'Quarterly Strategic Reviews',
      '1-Hour Response Time (Critical)'
    ],
    supportLevel: 'Priority Response',
    cta: 'Get Professional',
    highlight: true
  },
  {
    name: 'Enterprise Secure',
    price: '120',
    description: 'Comprehensive IT management with a heavy focus on cybersecurity and compliance.',
    idealFor: 'Compliance-heavy sectors (50+ users)',
    features: [
      'Everything in Professional',
      '24/7 Security Operations (SOC)',
      'Cyber Essentials Readiness',
      'Vulnerability Scanning',
      'Backup & Disaster Recovery',
      'Dedicated Account Manager'
    ],
    supportLevel: '24/7/365 Emergency Support',
    cta: 'Enquire for Enterprise',
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-24 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
          Transparent <span className="text-brand-accent">Pricing</span> for UK Business.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Simple, per-user pricing with no hidden fees. All plans are billed monthly in GBP.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border ${
                plan.highlight 
                  ? 'bg-slate-900 text-white border-slate-800 shadow-2xl scale-105 z-10' 
                  : 'bg-white text-slate-900 border-slate-100 shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-slate-900 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-brand-accent' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">£{plan.price}</span>
                  <span className={`text-sm font-medium ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    / user / month
                  </span>
                </div>
                <p className="text-[10px] mt-2 opacity-60 uppercase tracking-widest font-bold">Excluding VAT</p>
              </div>

              <div className={`mb-8 p-4 rounded-2xl ${plan.highlight ? 'bg-slate-800' : 'bg-slate-50'}`}>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Ideal For</h4>
                <p className="text-sm font-semibold">{plan.idealFor}</p>
              </div>

              <div className="space-y-4 mb-10">
                <h4 className="text-xs font-bold uppercase tracking-widest opacity-60">Features Included</h4>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-brand-accent' : 'text-brand-accent'}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className={`mb-10 pt-6 border-t ${plan.highlight ? 'border-slate-800' : 'border-slate-100'}`}>
                <h4 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Support Level</h4>
                <p className="text-sm font-bold">{plan.supportLevel}</p>
              </div>

              <Link
                to="/contact"
                className={`flex items-center justify-center w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight 
                    ? 'bg-brand-accent text-slate-900 hover:bg-white' 
                    : 'bg-slate-900 text-white hover:bg-brand-accent hover:text-slate-900'
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing FAQ/Info */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-8 text-brand-accent">
            <Info className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-900">Important Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold mb-3">VAT Clarification</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                All prices listed are exclusive of VAT at the standard UK rate of 20%. VAT will be added to your monthly invoice.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contract Terms</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                We offer flexible 30-day rolling contracts as standard. Annual commitments are available with a 10% discount.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Onboarding Fee</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                A one-time setup and onboarding fee applies to all new contracts to ensure your infrastructure is correctly documented and secured.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Custom Requirements</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Need something different? We can build bespoke packages for complex infrastructure or multi-site organisations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
