import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Predictable monthly costs designed to scale with your business. No hidden fees, just expert IT support.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <div 
                key={i} 
                className={`relative p-10 rounded-[2rem] border transition-all duration-300 flex flex-col h-full ${
                  plan.isPopular 
                    ? 'border-brand-secondary bg-white shadow-2xl scale-105 z-10' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-secondary text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm">{plan.idealFor}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-400 font-medium">/user/mo</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-wider">Excluding VAT @ 20%</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</div>
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="text-brand-secondary shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-100 mt-auto">
                  <div className="mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Support Level</div>
                    <p className="text-slate-900 font-semibold text-sm">{plan.supportLevel}</p>
                  </div>
                  <Link 
                    to="/contact" 
                    className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                      plan.isPopular 
                        ? 'bg-brand-secondary text-white hover:bg-emerald-700' 
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Select Plan <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <Info size={24} />
              </div>
              <div>
                <h4 className="text-xl font-display font-bold mb-4">Custom Enterprise Solutions</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  For organisations with more than 50 users or complex multi-site infrastructure, we offer bespoke pricing models tailored to your specific operational requirements.
                </p>
                <Link to="/contact" className="text-brand-secondary font-bold flex items-center gap-2 hover:underline">
                  Contact our Enterprise Team <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-display font-bold mb-4">Is there a minimum contract term?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our standard managed services are provided on a 12-month rolling contract. We also offer flexible monthly terms for specific cloud-only services.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-display font-bold mb-4">Are on-site visits included?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Professional and Enterprise plans include scheduled on-site visits. Emergency on-site support is available to all clients, with priority given to Professional and Enterprise tiers.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-display font-bold mb-4">How do you handle VAT?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  All prices listed are exclusive of VAT. A standard 20% UK VAT will be added to your monthly invoice.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-display font-bold mb-4">Can I switch plans later?</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Absolutely. You can upgrade your plan at any time to access higher levels of support or additional security features as your business grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
