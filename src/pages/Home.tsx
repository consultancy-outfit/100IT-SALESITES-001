import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Globe, Users, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Uptime Guarantee', value: '99.9%' },
  { label: 'Client Retention', value: '98%' },
  { label: 'Support Response', value: '< 15m' },
  { label: 'Managed Assets', value: '5k+' },
];

const industries = [
  'Financial Services', 'Legal & Professional', 'Healthcare', 'Manufacturing', 'Education', 'Retail'
];

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mb-6">
                Leading IT Managed Services in London
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                Future-Proof Your Business with <span className="text-indigo-600">Expert IT Solutions</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Telegraph House provides enterprise-grade IT support, cybersecurity, and cloud strategy tailored for UK businesses. We handle the technology, so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                >
                  Book a Free Audit
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Why British Businesses Trust Telegraph House
              </h2>
              <p className="text-lg text-slate-600">
                We don't just fix computers; we build resilient digital foundations. Our approach is proactive, strategic, and deeply rooted in the UK business landscape.
              </p>
              <div className="grid gap-6">
                {[
                  { icon: Shield, title: 'GDPR Compliant', desc: 'Full adherence to UK data protection laws.' },
                  { icon: Zap, title: 'Rapid Response', desc: 'Average response time of under 15 minutes.' },
                  { icon: Globe, title: 'Local Expertise', desc: 'On-site support across London and the South East.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square bg-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-office/800/800" 
                  alt="Modern IT Office" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">500+ Happy Clients</span>
                </div>
                <p className="text-sm text-slate-500 italic">"The most reliable IT partner we've ever had in London."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div key={industry} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors">
                <span className="text-sm font-semibold text-slate-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 space-y-8">
              <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Case Study</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Saving a London Law Firm £45,000 Annually
              </h2>
              <p className="text-slate-400 text-lg">
                By migrating legacy servers to a secure Azure environment and implementing automated workflows, we reduced operational overhead and eliminated costly hardware maintenance.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-bold text-white">£45k</div>
                  <div className="text-sm text-slate-500">Annual Savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-slate-500">Uptime Post-Migration</div>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2 bg-slate-800">
              <img 
                src="https://picsum.photos/seed/legal-it/800/600" 
                alt="Law Firm IT" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Optimise Your IT?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of UK businesses that trust Telegraph House for their technology needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-xl"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
