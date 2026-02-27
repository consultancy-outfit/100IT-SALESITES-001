import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: "Essential Support",
    price: "£25",
    period: "per user/month",
    description: "Ideal for small businesses needing reliable helpdesk support.",
    client: "Startups & Small Offices",
    features: [
      "Remote Helpdesk (9am - 5pm)",
      "Basic Endpoint Security",
      "Microsoft 365 Management",
      "Monthly Health Reports",
      "4-Hour Response SLA"
    ],
    support: "Remote Only",
    cta: "Start Essential",
    popular: false
  },
  {
    name: "Professional Managed",
    price: "£45",
    period: "per user/month",
    description: "Complete IT management for growing companies with complex needs.",
    client: "Growing SMEs",
    features: [
      "24/7 Remote & On-site Support",
      "Advanced Cyber Security Suite",
      "Cloud Backup (50GB/user)",
      "Quarterly Strategic Reviews",
      "1-Hour Critical Response SLA",
      "Mobile Device Management"
    ],
    support: "Priority Remote & On-site",
    cta: "Go Professional",
    popular: true
  },
  {
    name: "Enterprise Solutions",
    price: "Custom",
    period: "tailored pricing",
    description: "Bespoke infrastructure and security for large-scale operations.",
    client: "Large Enterprises",
    features: [
      "Dedicated Account Manager",
      "Full Infrastructure Monitoring",
      "Disaster Recovery Planning",
      "Unlimited Cloud Storage",
      "15-Min Critical Response SLA",
      "Compliance Auditing"
    ],
    support: "Dedicated 24/7 Support",
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="pt-20">
      <section className="relative bg-zinc-50 py-32 lg:py-48 overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0 opacity-10 grayscale">
          <img 
            src="https://picsum.photos/id/2/1920/1080" 
            alt="Pricing Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-zinc-900 uppercase bg-zinc-200 rounded-full">
              Investment
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-zinc-900 mb-6 tracking-tight">Transparent Pricing</h1>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto leading-relaxed">
              No hidden fees. Just enterprise-grade IT support scaled to your business needs. All prices are subject to VAT at the prevailing rate.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-10 rounded-[2.5rem] border ${
                  tier.popular ? 'border-zinc-900 shadow-2xl scale-105 z-10 bg-white' : 'border-zinc-200 bg-zinc-50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{tier.name}</h3>
                  <p className="text-zinc-500 text-sm mb-6">{tier.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-zinc-900">{tier.price}</span>
                    <span className="text-zinc-500 text-sm">{tier.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    <Info size={14} /> Ideal For: {tier.client}
                  </div>
                  <div className="h-px bg-zinc-200 w-full" />
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                        <Check size={18} className="text-zinc-900 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Support Level</div>
                  <div className="text-zinc-900 font-semibold">{tier.support}</div>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-full font-bold transition-all ${
                    tier.popular 
                    ? 'bg-zinc-900 text-white hover:bg-zinc-800' 
                    : 'bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-100'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VAT Disclaimer */}
      <section className="py-12 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-zinc-400 text-xs leading-relaxed">
            * All prices quoted are in Great British Pounds (GBP) and are exclusive of VAT. Contracts are typically 12 months in duration unless otherwise agreed. On-site support availability depends on geographical location within the UK. Full terms and conditions apply.
          </p>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { q: "Is there a setup fee?", a: "Setup fees vary based on the complexity of your current infrastructure. We provide a full quote after our initial audit." },
              { q: "Can I change plans later?", a: "Yes, you can upgrade your plan at any time. Downgrades are subject to your contract terms." },
              { q: "Do you offer discounts for non-profits?", a: "We are proud to support UK charities with discounted rates. Please contact us for details." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                <h4 className="font-bold text-zinc-900 mb-3">{faq.q}</h4>
                <p className="text-zinc-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
