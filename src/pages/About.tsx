import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Heart, ShieldCheck, Award, Briefcase } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const values = [
  {
    icon: Target,
    title: "Client-Centric",
    desc: "Your business goals are our primary focus. We tailor every solution to your specific needs."
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "We believe in honest, transparent communication and ethical business practices."
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "In IT, uptime is everything. We pride ourselves on being there when you need us most."
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We never settle for 'good enough'. We strive for technical perfection in every project."
  }
];

const leaders = [
  {
    name: "Alistair Howse",
    role: "Founder & CEO",
    bio: "With over 20 years in enterprise IT, Alistair founded Howse Garden to bring high-level technology solutions to the UK's SME sector.",
    image: "https://picsum.photos/seed/ceo/400/400"
  },
  {
    name: "Eleanor Garden",
    role: "Technical Director",
    bio: "A specialist in cybersecurity and cloud architecture, Eleanor leads our technical strategy and compliance initiatives.",
    image: "https://picsum.photos/seed/cto/400/400"
  }
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-500 via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Our Story
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              Founded in London, Howse Garden was born from a simple observation: British businesses needed IT partners who spoke their language and understood their unique challenges.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To provide UK businesses with the technological foundation they need to innovate, scale, and compete on a global stage, while maintaining the highest standards of security and reliability.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Our Vision</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To be the UK's most trusted IT managed services provider, recognised for our technical excellence, ethical approach, and unwavering commitment to client success.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/team/800/600" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-4xl font-display font-bold">15+</p>
                <p className="text-sm font-medium opacity-80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                  <v.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900">Leadership Team</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leaders.map((l, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <img 
                    src={l.image} 
                    alt={l.name} 
                    className="w-48 h-48 rounded-full object-cover border-4 border-slate-50 group-hover:border-brand-200 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900">{l.name}</h3>
                <p className="text-brand-600 font-semibold mb-4">{l.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-brand-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Commitment to Compliance</h2>
              <p className="text-xl text-brand-100 mb-8">
                As a UK-based company, we are fully committed to GDPR and the highest standards of data protection. We don't just follow the rules; we help you navigate them.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl font-bold">GDPR Compliant</div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl font-bold">Cyber Essentials Plus</div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl font-bold">ISO 27001 Certified</div>
              </div>
            </div>
            <div className="flex justify-center">
              <ShieldCheck size={200} className="text-brand-300 opacity-50" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
