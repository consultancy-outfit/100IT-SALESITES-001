import { motion } from 'motion/react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-24 pb-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Transparent Pricing</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              No hidden fees. No complex contracts. Just reliable IT support tailored to your business scale. All prices exclude VAT.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-slate-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <div 
                key={i} 
                className={`flex flex-col p-10 rounded-[2.5rem] border ${
                  plan.highlight 
                    ? 'bg-white border-indigo-600 shadow-2xl shadow-indigo-200 ring-4 ring-indigo-50 scale-105 z-10' 
                    : 'bg-white border-slate-200'
                }`}
              >
                {plan.highlight && (
                  <span className="self-start px-4 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-8">{plan.idealFor}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium ml-2">/user/month</span>
                </div>

                <div className="space-y-6 mb-10 flex-grow">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-600 text-sm">
                          <Check size={18} className="text-indigo-600 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Support Level</p>
                    <p className="text-slate-900 font-semibold text-sm">{plan.supportLevel}</p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-full font-bold text-center transition-all ${
                    plan.highlight
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / VAT Disclaimer */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-12 rounded-[3rem] border border-slate-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                <HelpCircle size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Is there a minimum contract term?</h4>
                <p className="text-slate-600 text-sm">Our standard contracts are 12 months, but we offer flexible monthly rolling options for an additional 15% surcharge.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Does the price include VAT?</h4>
                <p className="text-slate-600 text-sm">No, all prices listed are exclusive of VAT at the standard UK rate of 20%.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Can we mix and match plans?</h4>
                <p className="text-slate-600 text-sm">Yes, we can tailor a hybrid solution if different departments in your organization have varying support requirements.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">What happens if we need on-site support?</h4>
                <p className="text-slate-600 text-sm">Business Pro and Enterprise plans include on-site support within the West Midlands. For Essential plans, on-site visits are charged at a discounted hourly rate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-white mb-6">Need a custom enterprise solution?</h2>
              <p className="text-slate-400 text-lg">
                For organizations with over 100 users or complex multi-site requirements, we offer bespoke pricing and dedicated infrastructure management.
              </p>
            </div>
            <Link to="/contact" className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold hover:bg-slate-100 transition-all flex items-center gap-2 shrink-0">
              Request Custom Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
