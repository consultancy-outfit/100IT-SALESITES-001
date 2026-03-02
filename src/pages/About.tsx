import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Award, Users2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const About = () => {
  const values = [
    { icon: <ShieldCheck className="text-indigo-600" />, title: "Integrity", desc: "We operate with total transparency and honesty in all our technical recommendations." },
    { icon: <Award className="text-indigo-600" />, title: "Excellence", desc: "We strive for the highest standards of technical proficiency and customer service." },
    { icon: <Users2 className="text-indigo-600" />, title: "Partnership", desc: "We don't just provide IT; we become an integral part of your business growth team." },
    { icon: <Heart className="text-indigo-600" />, title: "Care", desc: "We genuinely care about the success and security of the British businesses we serve." },
  ];

  const leaders = [
    { name: "James Harrison", role: "Managing Director", image: "https://picsum.photos/seed/leader1/400/400" },
    { name: "Eleanor Wright", role: "Technical Director", image: "https://picsum.photos/seed/leader2/400/400" },
    { name: "Robert Smith", role: "Head of Security", image: "https://picsum.photos/seed/leader3/400/400" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Our Story: Driving <span className="text-indigo-600">Innovation</span> in the UK
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Founded in the heart of England, {COMPANY_DETAILS.name} began with a simple mission: to provide world-class IT services that are accessible, reliable, and tailored to the unique needs of British businesses.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we are proud to support hundreds of organisations across the country, from small local startups to large national enterprises, ensuring their technology is a catalyst for growth rather than a hurdle.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/about-team/800/600"
                alt="Our Team"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-indigo-600 p-12 rounded-[3rem] text-white">
              <Target size={48} className="mb-8 text-indigo-200" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-indigo-100 leading-relaxed">
                To empower UK businesses through innovative, secure, and reliable technology solutions, fostering a digital environment where our clients can thrive without technical limitations.
              </p>
            </div>
            <div className="bg-slate-900 p-12 rounded-[3rem] text-white">
              <Eye size={48} className="mb-8 text-indigo-400" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To be the most trusted IT partner in the United Kingdom, recognised for our technical excellence, proactive approach, and unwavering commitment to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Leadership</h2>
            <p className="text-slate-600">The experts behind our technical strategy.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {leaders.map((l, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square">
                  <img
                    src={l.image}
                    alt={l.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{l.name}</h3>
                <p className="text-indigo-600 font-medium">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck size={64} className="mx-auto mb-8 text-emerald-400" />
          <h2 className="text-3xl font-bold mb-6">Commitment to GDPR & Security</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            As a UK-based company, we take data protection seriously. We are fully GDPR compliant and help our clients achieve and maintain Cyber Essentials certification. Your data security is our top priority.
          </p>
          <div className="inline-flex items-center space-x-4 bg-slate-800 px-6 py-3 rounded-full border border-slate-700">
            <span className="text-emerald-400 font-bold">✓</span>
            <span className="text-sm font-semibold uppercase tracking-wider">ISO 27001 Aligned Processes</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
