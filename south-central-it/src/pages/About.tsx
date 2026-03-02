import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Heart, Award, Users2, Building2 } from 'lucide-react';

const values = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-600" />,
    title: "Integrity",
    description: "We operate with total transparency and honesty in every client interaction."
  },
  {
    icon: <Target className="w-8 h-8 text-brand-600" />,
    title: "Excellence",
    description: "We strive for technical perfection and enterprise-grade reliability."
  },
  {
    icon: <Heart className="w-8 h-8 text-brand-600" />,
    title: "Client Focus",
    description: "Your business goals are the primary driver of our technical strategy."
  }
];

const leadership = [
  {
    name: "Robert Sterling",
    role: "Managing Director",
    bio: "20+ years of experience in UK enterprise IT infrastructure and strategic management."
  },
  {
    name: "Elena Vance",
    role: "Technical Director",
    bio: "Expert in cybersecurity and cloud architecture with a focus on GDPR compliance."
  },
  {
    name: "David Miller",
    role: "Head of Operations",
    bio: "Specialises in service delivery and proactive maintenance for multi-site organisations."
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-8">
              Our Story: <br />
              <span className="text-brand-600">Technology</span> with Purpose.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Founded in the heart of the South Coast, South Central IT was established with a clear mission: to provide UK businesses with the high-level IT expertise typically reserved for global corporations.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe that technology should be an enabler, not a barrier. Our team of certified engineers and strategic consultants work tirelessly to ensure your infrastructure is secure, scalable, and efficient.
            </p>
          </motion.div>
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/it-office/800/800" 
                alt="Our Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-600 p-8 rounded-2xl text-white shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Years of Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-900 py-24 text-white mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
              <Award className="w-12 h-12 text-brand-500 mb-6" />
              <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To empower British SMEs through innovative, secure, and reliable IT solutions that drive growth and operational excellence.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
              <Building2 className="w-12 h-12 text-brand-500 mb-6" />
              <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the UK's most trusted partner for managed IT services, known for our technical integrity and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-slate-600">The principles that guide every decision we make.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
              <p className="text-slate-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-4">Leadership Team</h2>
          <p className="text-lg text-slate-600">Expert minds driving our technical excellence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {leadership.map((person, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={`https://picsum.photos/seed/leader-${idx}/600/800`} 
                  alt={person.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">{person.name}</h3>
              <div className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-4">{person.role}</div>
              <p className="text-slate-600 leading-relaxed">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GDPR Compliance */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Commitment to GDPR</h2>
            <p className="text-slate-600 leading-relaxed">
              As a UK-based IT provider, we are fully committed to the UK General Data Protection Regulation (UK GDPR). We maintain rigorous data processing standards and assist our clients in achieving and maintaining their own compliance through secure infrastructure and policy guidance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
