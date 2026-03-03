import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Award, Users } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function About() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
              Reliable IT Partners for <span className="text-indigo-600">British Innovation</span>
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in London, Lumina IT Systems was born from a simple observation: many businesses were being left behind by rapid technological shifts because they lacked a partner who spoke their language.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we serve hundreds of clients across the UK, from high-growth startups in Shoreditch to established manufacturing firms in the Midlands. We don't just fix computers; we build the digital foundations for the next generation of British success stories.
            </p>
          </motion.div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/office/800/800"
                alt="Our Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-indigo-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-sm font-medium opacity-80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-900 py-24 text-white mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                <Target className="text-indigo-400 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To provide seamless, secure, and scalable IT solutions that empower British businesses to focus on what they do best, knowing their technology is in expert hands.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Eye className="text-emerald-400 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the UK's most trusted managed IT provider, recognized for our technical integrity, rapid response, and commitment to client growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: 'Integrity', desc: 'We provide honest advice, even if it means a smaller sale. Your trust is our most valuable asset.' },
            { icon: Heart, title: 'Client-Centric', desc: 'We don\'t believe in one-size-fits-all. Every solution is tailored to your specific business goals.' },
            { icon: Award, title: 'Excellence', desc: 'We never stop learning. Our engineers are constantly certified in the latest technologies.' },
          ].map((v, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                <v.icon className="text-indigo-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{v.title}</h3>
              <p className="text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Our Leadership</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: 'James Arkwright', role: 'CEO & Founder', img: 'https://picsum.photos/seed/ceo/400/400' },
            { name: 'Dr. Elena Rossi', role: 'Chief Technology Officer', img: 'https://picsum.photos/seed/cto/400/400' },
            { name: 'Mark Sterling', role: 'Head of Cybersecurity', img: 'https://picsum.photos/seed/security/400/400' },
          ].map((person, i) => (
            <div key={i} className="text-center group">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 shadow-lg">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
              <p className="text-indigo-600 font-medium">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 md:p-12 text-center">
          <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to GDPR</h2>
          <p className="text-slate-600 leading-relaxed">
            As a UK-based company, we take data protection seriously. We are fully compliant with the UK GDPR and the Data Protection Act 2018. Our internal processes and the solutions we provide for our clients are designed with "Privacy by Design" at their core.
          </p>
        </div>
      </section>
    </div>
  );
}
