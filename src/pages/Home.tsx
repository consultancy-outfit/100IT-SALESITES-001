import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-6">
                UK's Leading IT Specialists
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
                Regain Your <span className="text-indigo-400">Digital Independence</span>
              </h1>
              <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0">
                ECL provides world-class IT services tailored for British enterprises. From cloud migration to cybersecurity, we help you master your technology stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/services"
                  className="rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-indigo-500 hover:shadow-indigo-500/25 active:scale-95 flex items-center justify-center gap-2"
                >
                  Explore Services <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95 flex items-center justify-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://picsum.photos/seed/tech-uk/800/600"
                  alt="Modern IT Office"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <p className="text-white font-bold">99.9% Uptime Guaranteed</p>
                      <p className="text-slate-300 text-sm">Enterprise-grade reliability for your business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Why British Businesses Choose ECL
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine local expertise with global standards to deliver IT solutions that actually drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-indigo-600" size={32} />,
                title: "GDPR Compliant",
                desc: "Full adherence to UK data protection laws and international security standards."
              },
              {
                icon: <Zap className="text-indigo-600" size={32} />,
                title: "Rapid Response",
                desc: "Average response time of under 15 minutes for critical system issues."
              },
              {
                icon: <Users className="text-indigo-600" size={32} />,
                title: "Local Support",
                desc: "UK-based engineers available 24/7 to support your team onsite or remotely."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-all"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                Specialised Solutions for UK Industries
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We understand the unique regulatory and operational challenges faced by businesses in the United Kingdom.
              </p>
              <ul className="space-y-4">
                {[
                  "Financial Services & Fintech",
                  "Healthcare & NHS Partners",
                  "Legal & Professional Services",
                  "Manufacturing & Logistics",
                  "Retail & E-commerce"
                ].map((industry, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={20} className="text-emerald-500" />
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/finance/400/300" alt="Finance" className="rounded-xl shadow-md" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/health/400/300" alt="Healthcare" className="rounded-xl shadow-md mt-8" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/legal/400/300" alt="Legal" className="rounded-xl shadow-md -mt-8" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/factory/400/300" alt="Manufacturing" className="rounded-xl shadow-md" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Measurable Results
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real impact for real British businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white">
              <div className="relative z-10">
                <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Fintech Case Study</span>
                <h3 className="text-2xl font-bold mt-4 mb-6">Cloud Infrastructure Overhaul</h3>
                <p className="text-slate-300 mb-8">Migrated a London-based fintech firm to a hybrid cloud environment, ensuring FCA compliance.</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-emerald-400">£120k</span>
                  <span className="text-slate-400">Annual Savings</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl group-hover:bg-indigo-600/30 transition-colors"></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-indigo-600 p-8 text-white">
              <div className="relative z-10">
                <span className="text-indigo-200 font-bold uppercase tracking-widest text-xs">Manufacturing Case Study</span>
                <h3 className="text-2xl font-bold mt-4 mb-6">Cybersecurity Transformation</h3>
                <p className="text-indigo-100 mb-8">Implemented a zero-trust architecture for a Midlands manufacturing group after a breach attempt.</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">0</span>
                  <span className="text-indigo-200">Security Breaches Since</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Cook",
                role: "CTO",
                company: "Thames Valley Logistics",
                content: "ECL transformed our IT from a bottleneck into a competitive advantage. Their UK-based support is second to none."
              },
              {
                name: "Sarah Jenkins",
                role: "Operations Director",
                company: "Manchester Creative Hub",
                content: "The transition to remote working was seamless thanks to ECL. They understood our budget and delivered beyond expectations."
              },
              {
                name: "Dr. Robert Sterling",
                role: "Managing Partner",
                company: "Sterling Medical Group",
                content: "GDPR compliance was our biggest worry. ECL provided a clear roadmap and implemented robust security measures that give us peace of mind."
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-slate-600 italic mb-6">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Master Your Technology?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of UK businesses that trust ECL for their IT infrastructure and digital strategy.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-indigo-600 shadow-xl transition-all hover:bg-slate-50 active:scale-95"
          >
            Get a Free IT Audit
          </Link>
        </div>
      </section>
    </div>
  );
};
