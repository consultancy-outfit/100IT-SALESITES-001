import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: "Essential Support",
    price: "£35",
    period: "per user / month",
    features: [
      "Remote IT Support (9-5)",
      "Antivirus & Endpoint Protection",
      "Cloud Backup (50GB/user)",
      "Patch Management",
      "Email Security Filtering",
      "Quarterly Health Checks"
    ],
    supportLevel: "Standard Business Hours",
    idealFor: "Small businesses needing reliable day-to-day IT maintenance.",
    isPopular: false
  },
  {
    name: "Professional Managed",
    price: "£75",
    period: "per user / month",
    features: [
      "24/7 Remote IT Support",
      "Advanced Cyber Security Suite",
      "Cloud Backup (250GB/user)",
      "Mobile Device Management",
      "Strategic IT Roadmap",
      "On-site Support Included",
      "Priority SLA Response"
    ],
    supportLevel: "24/7 Critical Support",
    idealFor: "Growing companies requiring comprehensive IT management.",
    isPopular: true
  },
  {
    name: "Enterprise Secure",
    price: "£145",
    period: "per user / month",
    features: [
      "Full Managed Infrastructure",
      "Dedicated Security Officer",
      "Unlimited Cloud Storage",
      "SIEM & SOC Monitoring",
      "Disaster Recovery as a Service",
      "Compliance Management",
      "Monthly Strategy Reviews"
    ],
    supportLevel: "Dedicated Account Team",
    idealFor: "Large organisations with complex security and compliance needs.",
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Simple, predictable pricing designed to scale with your business. 
            All prices are in GBP and exclude VAT.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-10 rounded-[2.5rem] border ${
                  tier.isPopular 
                    ? 'border-zinc-900 bg-zinc-900 text-white shadow-2xl scale-105 z-10' 
                    : 'border-zinc-100 bg-zinc-50 text-zinc-900'
                }`}
              >
                {tier.isPopular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}
                
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    <span className={`text-sm ${tier.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {tier.period}
                    </span>
                  </div>
                </div>

                <div className="mb-10 space-y-4">
                  <p className={`text-sm font-bold uppercase tracking-widest ${tier.isPopular ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Key Features
                  </p>
                  <ul className="space-y-4">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <Check className={`w-5 h-5 shrink-0 ${tier.isPopular ? 'text-zinc-500' : 'text-zinc-900'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`pt-8 border-t ${tier.isPopular ? 'border-zinc-800' : 'border-zinc-200'} mb-10 space-y-4`}>
                  <div>
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${tier.isPopular ? 'text-zinc-500' : 'text-zinc-400'}`}>Support Level</p>
                    <p className="text-sm font-medium">{tier.supportLevel}</p>
                  </div>
                  <div>
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${tier.isPopular ? 'text-zinc-500' : 'text-zinc-400'}`}>Ideal For</p>
                    <p className="text-sm leading-relaxed opacity-80">{tier.idealFor}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full py-4 rounded-full font-bold text-center transition-all ${
                    tier.isPopular
                      ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-zinc-50 border border-zinc-100 flex items-start gap-4 max-w-3xl mx-auto">
            <Info className="w-6 h-6 text-zinc-400 shrink-0 mt-1" />
            <div className="text-sm text-zinc-500 leading-relaxed">
              <p className="font-bold text-zinc-900 mb-2">Important Information:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>All prices are subject to VAT at the prevailing UK rate.</li>
                <li>Minimum contract term is 12 months unless otherwise agreed.</li>
                <li>On-site support outside of London may incur travel expenses.</li>
                <li>Custom enterprise quotes are available for organisations with 100+ users.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Have specific requirements?</h2>
          <p className="text-zinc-600 mb-10">We offer bespoke pricing for projects and specialised consultancy.</p>
          <Link to="/contact" className="text-zinc-900 font-bold underline underline-offset-8 hover:text-zinc-600">
            Contact our sales team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
