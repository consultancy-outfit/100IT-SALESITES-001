import React from 'react';
import { COMPANY_DETAILS } from '../constants';
import { Shield, Target, Heart, Users, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Pioneering IT Excellence in the <span className="text-emerald-600">Heart of London</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Founded with a vision to bridge the gap between complex technology and practical business needs, Soma IT Solutions has grown into a leading provider of managed services and healthcare technology in the UK.
              </p>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-4xl font-bold text-slate-900">10+</p>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                  <p className="text-4xl font-bold text-slate-900">500+</p>
                  <p className="text-sm text-slate-500">Clients Served</p>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                  <p className="text-4xl font-bold text-slate-900">24/7</p>
                  <p className="text-sm text-slate-500">Support Availability</p>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <img src="https://picsum.photos/seed/london-office/800/1000" alt="Our London Office" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-lg font-bold mb-2">Our Mission</p>
                <p className="text-sm text-emerald-50">To provide secure, scalable, and innovative technology solutions that empower UK businesses to reach their full potential.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Our Core Values</h2>
            <h3 className="text-4xl font-bold text-slate-900">The Principles That Drive Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Integrity & Trust", desc: "We act as a transparent partner, ensuring your data and interests are always protected." },
              { icon: Target, title: "Innovation", desc: "We stay ahead of the curve, bringing the latest technology to solve your business challenges." },
              { icon: Heart, title: "Client Success", desc: "Your growth is our success. We are deeply committed to the long-term prosperity of our clients." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Our Leadership</h2>
              <h3 className="text-4xl font-bold text-slate-900">Expert Minds Behind Soma IT</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "James Sterling", role: "Chief Executive Officer", img: "https://picsum.photos/seed/james/400/500" },
              { name: "Dr. Elena Rossi", role: "Head of Healthcare Tech", img: "https://picsum.photos/seed/elena/400/500" },
              { name: "Marcus Thorne", role: "Chief Technology Officer", img: "https://picsum.photos/seed/marcus/400/500" },
              { name: "Sophie Bennett", role: "Head of Client Relations", img: "https://picsum.photos/seed/sophie/400/500" }
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img src={leader.img} alt={leader.name} className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{leader.name}</h4>
                <p className="text-slate-500">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR & Compliance */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-emerald-800 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4" />
                <span>Regulatory Excellence</span>
              </div>
              <h2 className="text-4xl font-bold">Our Commitment to GDPR & Data Privacy</h2>
              <p className="text-lg text-emerald-100 leading-relaxed">
                As a UK-based IT firm, we adhere to the highest standards of data protection. We are fully compliant with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <ul className="space-y-4">
                {[
                  "Regular data protection impact assessments (DPIAs)",
                  "End-to-end encryption for all client data",
                  "Strict access controls and audit logging",
                  "Continuous staff training on privacy standards"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Compliance Roadmap</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center font-bold shrink-0">01</div>
                  <div>
                    <p className="font-bold">Data Mapping</p>
                    <p className="text-sm text-emerald-200">Identifying all data flows and storage locations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center font-bold shrink-0">02</div>
                  <div>
                    <p className="font-bold">Risk Mitigation</p>
                    <p className="text-sm text-emerald-200">Implementing technical and organizational measures.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center font-bold shrink-0">03</div>
                  <div>
                    <p className="font-bold">Ongoing Auditing</p>
                    <p className="text-sm text-emerald-200">Continuous monitoring and regular compliance reviews.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
