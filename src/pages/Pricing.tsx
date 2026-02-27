import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Essential',
    price: '35',
    description: 'Core IT support and security for small teams.',
    idealFor: 'Startups and small offices (1-10 users)',
    features: [
      'Remote Helpdesk Support (9am - 5pm)',
      'Basic Endpoint Antivirus',
      'Microsoft 365 License Management',
      'Monthly System Patching',
      'Standard SLA (8-hour response)'
    ]
  },
  {
    name: 'Professional',
    price: '65',
    popular: true,
    description: 'Comprehensive managed IT for growing businesses.',
    idealFor: 'Established SMEs (11-50 users)',
    features: [
      'Unlimited Remote & Onsite Support',
      'Next-Gen EDR Security',
      'Automated Cloud Backups',
      'Proactive Network Monitoring',
      'Priority SLA (2-hour response)',
      'Quarterly IT Strategy Reviews'
    ]
  },
  {
    name: 'Enterprise',
    price: '95',
    description: 'Advanced infrastructure management and compliance.',
    idealFor: 'Regulated industries & larger firms (50+ users)',
    features: [
      '24/7/365 Support Coverage',
      'Advanced Threat Hunting & SOC',
      'Disaster Recovery & Business Continuity',
      'Dedicated Account Manager',
      'Critical SLA (1-hour response)',
      'Cyber Essentials Compliance Support',
      'Custom Security Policies'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-slate-900 mb-4"
          >
            Transparent Pricing Plans
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Predictable, per-user monthly billing with no hidden fees. Choose the level of support that fits your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-2xl shadow-sm border ${
                tier.popular ? 'border-indigo-500 shadow-md ring-1 ring-indigo-500' : 'border-slate-200'
              } flex flex-col p-8`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-slate-500 text-sm h-10">{tier.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline text-slate-900">
                  <span className="text-3xl font-extrabold tracking-tight">£</span>
                  <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                  <span className="ml-1 text-xl font-medium text-slate-500">/user</span>
                </div>
                <div className="text-sm text-slate-500 mt-1">per month</div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-100">
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1">Ideal For</div>
                <div className="text-sm text-slate-600">{tier.idealFor}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-500 shrink-0 mr-3" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg transition-colors ${
                  tier.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto flex items-start p-4 bg-blue-50 rounded-lg border border-blue-100 text-blue-800">
          <Info className="h-5 w-5 mr-3 shrink-0 mt-0.5" />
          <p className="text-sm">
            <strong>VAT Notice:</strong> All prices quoted are exclusive of Value Added Tax (VAT) at the standard UK rate of 20%. A minimum commitment of 12 months applies to all managed service contracts.
          </p>
        </div>
      </div>
    </div>
  );
}
