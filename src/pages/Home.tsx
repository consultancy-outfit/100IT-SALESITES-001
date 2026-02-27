import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Globe, Users, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#10b981_0,transparent_50%)]"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 rounded-full border border-brand-accent/20">
                UK-Based Managed IT Experts
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8">
                Future-Proofing <span className="text-brand-accent">British Business</span> Through Technology.
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Monaveen provides enterprise-grade IT services, cybersecurity, and cloud solutions tailored for the unique challenges of the UK market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-slate-900 font-bold rounded-xl hover:bg-white transition-all group"
                >
                  Book a Free Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Uptime Guarantee', value: '99.99%' },
              { label: 'Response Time', value: '< 15m' },
              { label: 'Client Retention', value: '98%' },
              { label: 'Cost Savings', value: '£2.4M+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Monaveen is the Preferred Choice for UK SMEs</h2>
            <p className="text-slate-600">We combine local expertise with global standards to deliver IT that actually drives growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'UK GDPR Compliant',
                desc: 'Full data sovereignty and compliance with British data protection laws, keeping your business safe and legal.'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Proactive Monitoring',
                desc: 'We fix issues before they impact your operations. 24/7 monitoring ensures your business never stops.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Dedicated Support',
                desc: 'No overseas call centres. Speak directly to our London-based engineers who understand your business context.'
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="text-brand-accent mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Specialised IT Solutions for British Industries</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Financial Services', 'Legal & Professional', 'Healthcare & Biotech', 
                  'Manufacturing', 'Retail & E-commerce', 'Non-Profit Sector'
                ].map((industry, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                    <span className="font-semibold text-slate-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/it1/400/500" alt="IT Infrastructure" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/it2/400/500" alt="Cybersecurity" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Results</h2>
            <p className="text-slate-400">Real impact for real British businesses.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">London Legal Firm</h3>
                  <p className="text-brand-accent font-mono text-sm uppercase tracking-widest">Cloud Migration</p>
                </div>
                <div className="bg-brand-accent/20 text-brand-accent px-4 py-2 rounded-full text-sm font-bold">
                  £45,000 Annual Saving
                </div>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                "Monaveen migrated our entire legacy infrastructure to a secure Azure environment. The transition was seamless, and we've seen a 40% increase in remote work efficiency."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <div className="font-bold">James Harrington</div>
                  <div className="text-xs text-slate-500">Managing Partner</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Midlands Manufacturing</h3>
                  <p className="text-brand-accent font-mono text-sm uppercase tracking-widest">Cyber Resilience</p>
                </div>
                <div className="bg-brand-accent/20 text-brand-accent px-4 py-2 rounded-full text-sm font-bold">
                  Zero Downtime Incidents
                </div>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                "After a series of phishing attempts, we partnered with Monaveen for a full security overhaul. Their proactive threat hunting has blocked over 1,200 malicious attempts this quarter alone."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <div className="font-bold">Sarah Jenkins</div>
                  <div className="text-xs text-slate-500">Operations Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'David Thompson', role: 'CEO, TechFlow UK', quote: 'The most reliable IT partner we have ever worked with. Their response times are unmatched.' },
              { name: 'Eleanor Rigby', role: 'Director, Creative Hub', quote: 'Monaveen understood our creative workflow and built a system that supports our growth perfectly.' },
              { name: 'Alistair Cook', role: 'IT Manager, Global Logistics', quote: 'Professional, knowledgeable, and always one step ahead. They are an extension of our team.' }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-600">
                <p className="mb-6">"{t.quote}"</p>
                <div className="not-italic">
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-slate-800 mb-10 max-w-2xl mx-auto">
            Join hundreds of British companies that trust Monaveen for their technology needs. Get your free consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl"
          >
            Contact Our London Office
          </Link>
        </div>
      </section>
    </div>
  );
}
