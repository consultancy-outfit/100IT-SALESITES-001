import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users, Award, CheckCircle2 } from 'lucide-react';

const VALUES = [
  {
    icon: <ShieldCheck className="text-indigo-600" />,
    title: "Integrity",
    description: "We operate with total transparency, ensuring our clients always know exactly what they are paying for."
  },
  {
    icon: <Users className="text-indigo-600" />,
    title: "Partnership",
    description: "We don't just fix computers; we become an extension of your team, dedicated to your long-term success."
  },
  {
    icon: <Award className="text-indigo-600" />,
    title: "Excellence",
    description: "We hold ourselves to the highest technical standards, constantly evolving to stay ahead of the curve."
  }
];

const LEADERSHIP = [
  {
    name: "James Harrison",
    role: "Founder & CEO",
    bio: "With over 20 years in UK enterprise IT, James founded HCF The Springs to bring high-level technology strategy to SMEs.",
    image: "https://picsum.photos/seed/ceo/400/400"
  },
  {
    name: "Dr. Elena Rossi",
    role: "Chief Technology Officer",
    bio: "A specialist in cybersecurity and cloud architecture, Elena leads our technical roadmap and security protocols.",
    image: "https://picsum.photos/seed/cto/400/400"
  },
  {
    name: "Mark Thompson",
    role: "Head of Managed Services",
    bio: "Mark ensures our support desk delivers world-class responsiveness and resolution for every client.",
    image: "https://picsum.photos/seed/ops/400/400"
  }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">Our Story</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in Leeds, HCF The Springs was born from a simple observation: UK small and medium businesses were being underserved by traditional IT providers.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 -z-0 hidden lg:block skew-x-12 translate-x-1/2" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="p-10 bg-slate-900 rounded-[40px] text-white relative overflow-hidden">
              <Target className="text-indigo-400 mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                To empower British businesses through innovative, secure, and reliable technology solutions that drive sustainable growth and operational excellence.
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
            </div>
            <div className="p-10 bg-indigo-600 rounded-[40px] text-white relative overflow-hidden">
              <Eye className="text-indigo-200 mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-indigo-100 leading-relaxed">
                To be the UK's most trusted IT partner, recognized for our technical brilliance, unwavering integrity, and commitment to client success.
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">A Legacy of Technical Excellence</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  HCF The Springs began as a boutique consultancy in 2012, helping local Yorkshire firms navigate the early days of cloud computing. As technology evolved, so did we, expanding our services to include comprehensive managed IT and enterprise-grade cybersecurity.
                </p>
                <p>
                  Today, we support hundreds of businesses across the UK, from London startups to established manufacturing firms in the North. Our growth has been fueled by one thing: the success of our clients.
                </p>
                <p>
                  We remain headquartered in Leeds, staying true to our roots while delivering world-class technology solutions that compete on a global scale.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/team1/400/600" className="rounded-3xl shadow-lg" alt="Team 1" referrerPolicy="no-referrer" />
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/team2/400/400" className="rounded-3xl shadow-lg" alt="Team 2" referrerPolicy="no-referrer" />
                <div className="bg-indigo-600 p-8 rounded-3xl text-white">
                  <p className="text-4xl font-bold mb-2">12+</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
            <p className="text-slate-600">The experts driving our mission forward.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {LEADERSHIP.map((person, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[32px] mb-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{person.name}</h3>
                <p className="text-indigo-600 font-bold mb-4">{person.role}</p>
                <p className="text-slate-600 leading-relaxed">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400">The principles that guide every decision we make.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-slate-800/50 border border-slate-700">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Compliance */}
      <section className="py-24 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <ShieldCheck className="text-indigo-600" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Commitment to GDPR Compliance</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            As a UK-based IT provider, data privacy is at the core of everything we do. We are fully committed to GDPR compliance and hold our partners to the same rigorous standards. We help our clients navigate the complexities of UK data protection laws, ensuring their business remains secure and compliant.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["ICO Registered", "Cyber Essentials Certified", "ISO 27001 Aligned"].map((cert, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-indigo-100 text-sm font-bold text-indigo-700">
                <CheckCircle2 size={16} />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
