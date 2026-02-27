import { motion } from 'motion/react';
import { Check, X, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Essential',
    price: '35',
    description: 'Core IT support and monitoring for small teams.',
    features: [
      'Remote Helpdesk (9am-5pm)',
      'Proactive Monitoring',
      'Antivirus Management',
      'Patch Management',
      'Microsoft 365 Support',
      'Quarterly Reports'
    ],
    notIncluded: [
      'Onsite Support',
      'Cyber Essentials Certification',
      '24/7 Emergency Support',
      'Strategic Consulting'
    ],
    idealFor: 'Startups & Micro Businesses (1-10 users)',
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '55',
    description: 'Comprehensive support with enhanced security for growing SMEs.',
    features: [
      'Unlimited Remote Support',
      'Onsite Support (Suffolk area)',
      'Advanced Threat Protection',
      'Email Security & Backup',
      'Cyber Essentials Assistance',
      'Monthly Strategy Calls',
      'Vendor Management'
    ],
    notIncluded: [
      '24/7 Emergency Support',
      'Dedicated Account Manager'
    ],
    idealFor: 'Growing SMEs (10-50 users)',
    cta: 'Choose Professional',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '85',
    description: 'Strategic partnership and round-the-clock coverage for critical operations.',
    features: [
      '24/7/365 Support Desk',
      'Unlimited Onsite Support (UK)',
      'Dedicated Account Manager',
      'Virtual CIO Service',
      'Disaster Recovery Planning',
      'Compliance Management (GDPR)',
      'Annual Penetration Testing'
    ],
    notIncluded: [],
    idealFor: 'Established Enterprises (50+ users)',
    cta: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Transparent Pricing for UK Businesses</h1>
          <p className="text-xl text-slate-600">
            Choose the support level that matches your business needs. No hidden fees, just clear value.
          </p>
          <div className="mt-4 inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full">
            All prices exclude VAT
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Decorative background element */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent -z-10 rounded-3xl transform scale-105"></div>
          
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-xl border ${plan.popular ? 'border-indigo-500 ring-2 ring-indigo-500 ring-opacity-50' : 'border-slate-200'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">£{plan.price}</span>
                  <span className="text-slate-500">/user/month</span>
                </div>
                <div className="mt-2 text-xs text-slate-400 font-medium">Billed monthly • Excludes VAT</div>
              </div>

              <div className="p-8 flex-grow">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">What's Included</div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400 line-through decoration-slate-300">
                      <X className="w-5 h-5 text-slate-300 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-100">
                    <div className="text-xs font-bold text-indigo-600 uppercase mb-1">Ideal For</div>
                    <div className="text-sm text-slate-700 font-medium">{plan.idealFor}</div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 bg-indigo-100 p-4 rounded-full">
              <HelpCircle className="w-8 h-8 text-indigo-600" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Need a Custom Solution?</h3>
              <p className="text-slate-600">
                We understand that every business is unique. If these plans don't fit your specific requirements, we can build a bespoke package just for you.
              </p>
            </div>
            <Link to="/contact" className="flex-shrink-0 px-8 py-3 bg-white border border-slate-300 hover:border-indigo-600 hover:text-indigo-600 text-slate-700 font-semibold rounded-lg transition-colors">
              Contact Sales Team
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-slate-500 max-w-2xl mx-auto">
          <p>
            * All prices are subject to VAT at the prevailing rate. Minimum contract terms apply. 
            Onsite support is subject to geographical availability. Fair usage policy applies to unlimited support plans.
          </p>
        </div>
      </div>
    </div>
  );
}
