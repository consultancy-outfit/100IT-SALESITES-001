import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Foundation',
    price: '250',
    description: 'Essential IT support for small teams and startups.',
    idealFor: '1-5 Users',
    features: [
      'Remote Helpdesk Support',
      'Antivirus & Endpoint Protection',
      'Basic Cloud Backup (50GB)',
      'Monthly Health Reports',
      'Standard Business Hours'
    ],
    support: 'Next Business Day Response',
    cta: 'Start Foundation',
    popular: false
  },
  {
    name: 'Professional',
    price: '550',
    description: 'Comprehensive management for growing businesses.',
    idealFor: '5-25 Users',
    features: [
      'Priority Helpdesk Support',
      'Advanced Cybersecurity Suite',
      'Cloud Backup (500GB)',
      'Patch Management',
      'Network Monitoring',
      'Quarterly IT Strategy Meetings'
    ],
    support: '4-Hour Response Time',
    cta: 'Go Professional',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '1,200',
    description: 'Full-scale IT department as a service.',
    idealFor: '25+ Users',
    features: [
      'Unlimited 24/7 Support',
      'Managed SIEM & SOC',
      'Unlimited Cloud Backup',
      'Disaster Recovery Planning',
      'Dedicated Account Manager',
      'Monthly Security Audits'
    ],
    support: '1-Hour Critical Response',
    cta: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-zinc-600 text-lg">
              Choose the plan that fits your business needs. All prices are in GBP and exclude VAT.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-white rounded-[2.5rem] p-10 shadow-sm border ${
                  plan.popular ? 'border-indigo-600 ring-4 ring-indigo-50' : 'border-zinc-200'
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-zinc-900">£{plan.price}</span>
                    <span className="text-zinc-400 ml-2">/month</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 font-medium uppercase tracking-wider">Excluding VAT</p>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex items-center text-sm font-bold text-zinc-900">
                    <Info className="h-4 w-4 text-indigo-600 mr-2" />
                    Ideal for {plan.idealFor}
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-zinc-600">
                        <Check className="h-5 w-5 text-indigo-600 mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-zinc-100">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Support Level</p>
                    <p className="text-sm font-semibold text-zinc-900">{plan.support}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-4 rounded-full font-bold transition-all ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-white rounded-3xl p-12 border border-zinc-200 text-center">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Need a Custom Solution?</h2>
            <p className="text-zinc-600 mb-8 max-w-2xl mx-auto">
              For larger organisations or specific project requirements, we offer bespoke pricing models tailored to your unique infrastructure.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-indigo-600 font-bold hover:underline underline-offset-8"
            >
              Speak to our Enterprise Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
