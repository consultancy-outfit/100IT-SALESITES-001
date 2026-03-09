import { motion } from 'motion/react';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    name: "Essential",
    price: "499",
    description: "Core IT support for small businesses needing reliable maintenance.",
    features: [
      "Remote Support (9-5)",
      "Proactive Monitoring",
      "Endpoint Security",
      "Cloud Backup (500GB)",
      "Monthly Health Reports"
    ],
    support: "Next Business Day",
    ideal: "Startups & Small Offices",
    cta: "Start Essential",
    highlight: false
  },
  {
    name: "Professional",
    price: "999",
    description: "Comprehensive management for growing teams with security focus.",
    features: [
      "Priority Remote Support",
      "On-site Support Included",
      "Advanced Threat Protection",
      "Cloud Backup (2TB)",
      "Quarterly Strategy Reviews",
      "Vulnerability Scanning"
    ],
    support: "4-Hour Response",
    ideal: "Growing SMEs (20-50 staff)",
    cta: "Go Professional",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "2,499",
    description: "Full-scale technology partnership for complex organizations.",
    features: [
      "24/7 Global Support",
      "Dedicated Account Manager",
      "SIEM & SOC Monitoring",
      "Unlimited Cloud Backup",
      "Monthly Strategy Reviews",
      "Compliance Management"
    ],
    support: "1-Hour Response",
    ideal: "Large Enterprises & Multi-site",
    cta: "Contact Sales",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 mb-8">
              Transparent <span className="text-violet-600">Pricing</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Choose the plan that best fits your business needs. All plans are billed monthly and include our commitment to excellence.
            </p>
            <p className="mt-6 text-sm font-bold text-stone-400 uppercase tracking-widest">
              All prices exclude VAT at the prevailing rate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PLANS.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-10 rounded-[2.5rem] flex flex-col ${
                  plan.highlight 
                    ? 'bg-stone-900 text-white shadow-2xl scale-105 z-10' 
                    : 'bg-white text-stone-900 border border-stone-200 shadow-sm'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm ${plan.highlight ? 'text-stone-400' : 'text-stone-500'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">£{plan.price}</span>
                    <span className={`ml-2 text-sm font-medium ${plan.highlight ? 'text-stone-400' : 'text-stone-500'}`}>
                      / month
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.highlight ? 'text-violet-400' : 'text-violet-600'}`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`pt-8 border-t mb-10 ${plan.highlight ? 'border-stone-800' : 'border-stone-100'}`}>
                  <div className="mb-4">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? 'text-stone-500' : 'text-stone-400'}`}>Support Level</p>
                    <p className="text-sm font-bold">{plan.support}</p>
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? 'text-stone-500' : 'text-stone-400'}`}>Ideal For</p>
                    <p className="text-sm font-bold">{plan.ideal}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-full font-bold text-center transition-all ${
                    plan.highlight
                      ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-900/20'
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-stone-600">Everything you need to know about our pricing and plans.</p>
          </div>
          <div className="space-y-8">
            {[
              {
                q: "Are there any hidden costs?",
                a: "No. Our pricing is transparent. Any additional project-based work outside your plan will be quoted and agreed upon in advance."
              },
              {
                q: "Can I change my plan later?",
                a: "Yes, you can upgrade or downgrade your plan at any time with a 30-day notice period."
              },
              {
                q: "Do you offer discounts for non-profits?",
                a: "Yes, we have special pricing for registered UK charities. Please contact our sales team for more information."
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-2xl bg-stone-50 border border-stone-100">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-violet-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-stone-900 mb-2">{faq.q}</h4>
                    <p className="text-stone-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900 rounded-[3rem] p-12 lg:p-24 text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Need a Custom Enterprise Quote?</h2>
            <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto">
              For organizations with more than 100 users or complex multi-site requirements, we offer bespoke pricing models.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-violet-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-violet-700 transition-all shadow-xl"
            >
              Request Custom Quote
              <ArrowRight className="ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
