import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, Heart, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white sm:text-6xl mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Building a more resilient, independent digital future for UK businesses since 2013.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-indigo-600 text-white shadow-xl">
              <Target size={48} className="mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-indigo-100 leading-relaxed">
                To empower British enterprises by providing robust, secure, and independent IT infrastructures that foster innovation and sustainable growth. We believe technology should be an enabler, not a barrier.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-slate-900 text-white shadow-xl">
              <Eye size={48} className="mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To be the United Kingdom's most trusted partner for digital transformation, known for our integrity, technical excellence, and unwavering commitment to our clients' long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold mb-6">
                <History size={16} /> Est. 2013
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Decade of Excellence</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in Reading, the heart of the UK's tech corridor, ECL Regaining Independence Service started with a simple goal: to help local businesses navigate the increasingly complex world of IT.
                </p>
                <p>
                  Over the past ten years, we have grown from a small consultancy into a full-service IT provider, supporting hundreds of clients across London, the Midlands, and the South East. Our name reflects our core philosophy—helping businesses regain independence from unreliable systems and restrictive technology debt.
                </p>
                <p>
                  Today, we are a team of 40+ dedicated engineers and strategists, all committed to the same high standards of service and technical proficiency that defined our first day.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://picsum.photos/seed/office-team/800/600"
                alt="ECL Team"
                className="rounded-3xl shadow-2xl border border-white"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="text-indigo-600" />, title: "Integrity", desc: "Honest advice and transparent pricing, always." },
              { icon: <Award className="text-indigo-600" />, title: "Excellence", desc: "Striving for the highest technical standards in every task." },
              { icon: <Heart className="text-indigo-600" />, title: "Client First", desc: "Your business goals are our primary focus." },
              { icon: <ShieldCheck className="text-indigo-600" />, title: "Compliance", desc: "Unwavering commitment to GDPR and UK law." }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm mb-6">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-slate-600">Experienced professionals leading the way.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "James Harrison", role: "Founder & CEO", bio: "20+ years in enterprise IT. Former infrastructure lead at a major UK bank." },
              { name: "Eleanor Wright", role: "CTO", bio: "Cloud architecture specialist with a passion for cybersecurity and digital ethics." },
              { name: "Sanjay Patel", role: "Head of Client Success", bio: "Dedicated to ensuring every ECL client receives world-class support and strategy." }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-square rounded-3xl bg-slate-200 mb-6 overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/leader-${i}/600/600`}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck size={40} className="mx-auto text-emerald-500 mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">GDPR & Security Commitment</h2>
          <p className="text-slate-600">
            As a UK-based service provider, {COMPANY_DETAILS.name} is fully committed to the Data Protection Act 2018 and the UK GDPR. We implement rigorous security protocols and regular audits to ensure your data—and your customers' data—is always protected.
          </p>
        </div>
      </section>
    </div>
  );
};
