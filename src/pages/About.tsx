import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, Users, Award } from 'lucide-react';

const values = [
  {
    title: "Integrity",
    description: "We operate with absolute transparency and honesty in every client interaction.",
    icon: <Shield className="text-brand-600" />
  },
  {
    title: "Excellence",
    description: "We strive for technical perfection and superior service delivery in all we do.",
    icon: <Award className="text-brand-600" />
  },
  {
    title: "Innovation",
    description: "We continuously evolve our solutions to stay ahead of the technology curve.",
    icon: <Target className="text-brand-600" />
  },
  {
    title: "Client-Centric",
    description: "Your business goals are our primary driver. We succeed when you succeed.",
    icon: <Users className="text-brand-600" />
  }
];

const leaders = [
  {
    name: "James St Martin",
    role: "Founder & CEO",
    bio: "With over 20 years in enterprise IT, James founded the company to bring premium consultancy to the UK mid-market."
  },
  {
    name: "Eleanor Vance",
    role: "Chief Technology Officer",
    bio: "A cybersecurity expert and cloud architect, Eleanor leads our technical strategy and service innovation."
  },
  {
    name: "Robert Hughes",
    role: "Head of Client Success",
    bio: "Robert ensures our service delivery exceeds expectations and maintains our 98% client retention rate."
  }
];

export default function About() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                A Legacy of <span className="text-brand-600">Technical Excellence</span> in the UK
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Founded in London, House of St Martin was born from a vision to provide high-calibre IT services that combine British reliability with global innovation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that technology should be an enabler, not a barrier. Our mission is to empower UK businesses by removing technical complexity and providing secure, scalable foundations for growth.
              </p>
            </motion.div>
            <div className="relative">
              <div className="aspect-square bg-brand-100 rounded-[3rem] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/office/800/800" 
                  alt="Our Office" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-3xl font-bold text-brand-600 mb-1">15+</p>
                <p className="text-sm font-semibold text-slate-600">Years of Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
              <Eye className="text-brand-400 mb-6" size={40} />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the most trusted technology partner for UK enterprises, recognised for our integrity, technical prowess, and commitment to client success.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
              <Target className="text-brand-400 mb-6" size={40} />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To deliver intelligent, secure, and resilient IT infrastructure that enables our clients to innovate and scale without technical limitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide every decision we make and every service we deliver.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Meet the experts driving our vision forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leaders.map((l, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="w-20 h-20 bg-brand-100 rounded-2xl mb-6 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${l.name}/200/200`} alt={l.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold mb-1">{l.name}</h3>
                <p className="text-brand-600 font-semibold text-sm mb-4">{l.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Shield className="text-brand-600 mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-bold mb-6">Our GDPR Commitment</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            As a UK-based company, we take data privacy seriously. We are fully committed to GDPR compliance, not just for our own operations, but as a core component of the security solutions we provide to our clients. Your data sovereignty is our priority.
          </p>
        </div>
      </section>
    </main>
  );
}
