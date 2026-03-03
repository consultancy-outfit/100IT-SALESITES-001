import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, Award, Users } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const values = [
  { title: "Integrity", desc: "We believe in honest, transparent advice that puts your business needs first.", icon: Shield },
  { title: "Excellence", desc: "We strive for technical perfection in every project we undertake.", icon: Award },
  { title: "Partnership", desc: "We don't just work for you; we work with you as an extension of your team.", icon: Users },
  { title: "Innovation", desc: "Staying ahead of the curve to bring you the best technology has to offer.", icon: Target },
];

export const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-5xl font-bold text-zinc-900 mb-8 leading-tight">
                  A Decade of Delivering <span className="text-indigo-600">Technical Excellence</span> in Lancashire
                </h1>
                <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                  Founded in 2013, West Lancs Domiciliary Service (IT Division) began with a simple mission: to provide local businesses with the same level of IT expertise usually reserved for large corporations.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Today, we are one of the North West's most trusted IT partners, supporting hundreds of users across diverse sectors including legal, healthcare, and manufacturing.
                </p>
              </motion.div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/office/800/800" alt="Our Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-indigo-600 p-8 rounded-2xl text-white shadow-xl hidden sm:block">
                <span className="block text-4xl font-bold mb-1">10+</span>
                <span className="text-sm uppercase tracking-wider opacity-80">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-indigo-600 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Mission</h2>
              <p className="text-zinc-600 leading-relaxed">
                To empower UK businesses by providing innovative, reliable, and secure IT solutions that drive growth and operational efficiency. We aim to be the silent engine behind our clients' success.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-emerald-600 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Vision</h2>
              <p className="text-zinc-600 leading-relaxed">
                To become the leading provider of managed IT services in the North West, recognised for our technical prowess, unwavering integrity, and commitment to client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Core Values</h2>
            <p className="text-zinc-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-100">
                  <v.icon className="text-indigo-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{v.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Leadership</h2>
            <p className="text-zinc-600">Meet the experts behind West Lancs IT.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "David Thompson", role: "Managing Director", bio: "20+ years in enterprise IT architecture." },
              { name: "Eleanor Rigby", role: "Technical Director", bio: "Cybersecurity specialist and Microsoft Certified Expert." },
              { name: "Simon Cowell", role: "Head of Support", bio: "Dedicated to delivering world-class client experiences." }
            ].map((person, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm group">
                <div className="aspect-[4/5] bg-zinc-200 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={`https://picsum.photos/seed/person${i}/600/800`} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-zinc-900">{person.name}</h4>
                  <p className="text-indigo-600 font-medium mb-4">{person.role}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-full mb-8">
            <Shield className="text-emerald-600 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Commitment to GDPR</h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            As a UK-based IT provider, we take data protection seriously. We are fully compliant with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We help our clients implement robust data handling procedures and secure infrastructure to ensure their compliance as well.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-4 py-2 bg-zinc-100 rounded-full text-xs font-bold text-zinc-600 uppercase tracking-widest">ICO Registered</span>
            <span className="px-4 py-2 bg-zinc-100 rounded-full text-xs font-bold text-zinc-600 uppercase tracking-widest">Cyber Essentials Certified</span>
          </div>
        </div>
      </section>
    </div>
  );
};
