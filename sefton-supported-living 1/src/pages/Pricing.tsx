import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Essential',
      price: '25',
      frequency: 'per user/month',
      description: 'Core IT support and security for small teams getting started.',
      idealFor: 'Startups & Small Offices (1-10 users)',
      features: [
        'Remote Helpdesk Support (9am-5pm)',
        'Basic Antivirus & Firewall Management',
        'Microsoft 365 Management',
        'Patch Management',
        'Quarterly IT Review'
      ],
      notIncluded: [
        '24/7 Emergency Support',
        'On-site Visits',
        'Advanced Threat Protection',
        'Dedicated Account Manager'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '45',
      frequency: 'per user/month',
      description: 'Comprehensive managed services for growing businesses requiring robust security.',
      idealFor: 'SMEs (10-50 users)',
      features: [
        'Unlimited Remote Support (8am-6pm)',
        'Advanced Endpoint Protection (EDR)',
        'Email Security & Anti-Phishing',
        'Cloud Backup Solutions',
        'Monthly IT Strategy Review',
        'Priority Response SLA'
      ],
      notIncluded: [
        '24/7 Emergency Support',
        'Dedicated Account Manager'
      ],
      cta: 'Choose Professional',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      frequency: 'tailored quote',
      description: 'Full-scale IT partnership with strategic consultancy and round-the-clock coverage.',
      idealFor: 'Large Organisations (50+ users)',
      features: [
        '24/7/365 Support Coverage',
        'Dedicated Technical Account Manager',
        'On-site Support Days',
        'Disaster Recovery Planning',
        'Compliance Management (GDPR/ISO)',
        'Strategic CIO Services',
        'Network Infrastructure Management'
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Transparent Pricing for UK Businesses</h1>
          <p className="text-xl text-slate-600">
            Choose the right level of support for your organisation. No hidden fees, just clear, predictable monthly costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-sm border ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' : 'border-slate-200'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-sm">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{plan.idealFor}</p>
                <div className="flex items-baseline mb-6">
                  {plan.price !== 'Custom' && <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>}
                  {plan.price === 'Custom' && <span className="text-4xl font-bold text-slate-900">Custom</span>}
                  <span className="text-slate-500 ml-2 text-sm">{plan.frequency}</span>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed border-b border-slate-100 pb-8">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700">
                      <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-400">
                      <X className="h-5 w-5 text-slate-300 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-slate-50 border-t border-slate-100 rounded-b-2xl">
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                      : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                  }`}
                >
                  {plan.cta}
                </Link>
                <p className="text-xs text-center text-slate-400 mt-4">
                  * All prices exclude VAT at 20%. Minimum 12-month contract.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Need a Custom Project Quote?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            For specific projects like office moves, cloud migrations, or security audits, we provide tailored fixed-price quotes.
          </p>
          <Link to="/contact" className="text-blue-600 font-semibold hover:text-blue-800 underline">
            Contact us for a project estimate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
