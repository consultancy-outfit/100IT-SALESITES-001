import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Heart, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-24 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-zinc-400 uppercase text-xs tracking-widest font-bold mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-8 tracking-tight">
                Bridging the Gap Between <span className="italic text-zinc-500">Business & Tech</span>
              </h1>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Founded in Basildon, Essex, our journey began with a simple mission: to provide high-calibre IT services that were previously only accessible to large corporations.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Today, Basildon IT (operating as Basildon Supported Living Service) stands as a beacon of technical excellence, supporting businesses across the UK with managed services, cybersecurity, and cloud innovation.
              </p>
            </motion.div>
            <div className="relative">
              <div className="aspect-square bg-zinc-100 rounded-[3rem] overflow-hidden border border-zinc-200">
                <img 
                  src="https://picsum.photos/id/201/800/800" 
                  alt="Our Team" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-zinc-900 text-white p-8 rounded-3xl shadow-2xl">
                <div className="text-4xl font-bold mb-1">12+</div>
                <div className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] border border-zinc-200 shadow-sm">
              <Target className="w-12 h-12 text-zinc-900 mb-8" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Our Mission</h3>
              <p className="text-zinc-600 leading-relaxed">
                To empower UK businesses by delivering secure, scalable, and innovative IT solutions that eliminate technical barriers and foster sustainable growth.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] border border-zinc-200 shadow-sm">
              <Eye className="w-12 h-12 text-zinc-900 mb-8" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Our Vision</h3>
              <p className="text-zinc-600 leading-relaxed">
                To be the UK's most trusted partner for digital transformation, recognized for our technical integrity, proactive support, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Leadership Team</h2>
            <p className="text-zinc-500">The minds driving our technical excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "James Harrison", role: "Managing Director", image: "https://i.pravatar.cc/300?u=james" },
              { name: "Sarah Thompson", role: "Technical Director", image: "https://i.pravatar.cc/300?u=sarah" },
              { name: "David Miller", role: "Head of Security", image: "https://i.pravatar.cc/300?u=david" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden mb-6 border border-zinc-200 grayscale group-hover:grayscale-0 transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900">{member.name}</h4>
                <p className="text-zinc-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Values</h2>
            <p className="text-zinc-400">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Integrity", desc: "Honest advice, always." },
              { icon: <Heart />, title: "Client First", desc: "Your success is our priority." },
              { icon: <Award />, title: "Excellence", desc: "Never settling for 'good enough'." },
              { icon: <Globe />, title: "Compliance", desc: "Strict adherence to UK GDPR." }
            ].map((value, i) => (
              <div key={i} className="p-8 border border-zinc-800 rounded-2xl hover:bg-zinc-800 transition-colors">
                <div className="text-white mb-6 w-10 h-10">{value.icon}</div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-zinc-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-100 rounded-full mb-8">
            <ShieldCheck className="text-zinc-900 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">GDPR & Compliance Commitment</h2>
          <p className="text-zinc-600 leading-relaxed mb-8">
            As a UK-based entity, we take data protection seriously. We are fully committed to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Our internal processes, client data handling, and security protocols are audited regularly to ensure the highest standards of privacy and security.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">ICO Registered</div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">Cyber Essentials Plus</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
