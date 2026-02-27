import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users, Award } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty in all our dealings.',
    icon: ShieldCheck,
  },
  {
    title: 'Innovation',
    description: 'We constantly explore new technologies to provide the best solutions.',
    icon: Award,
  },
  {
    title: 'Client-Centric',
    description: 'Our success is measured by the success of our clients.',
    icon: Users,
  },
];

const leaders = [
  {
    name: 'David Richardson',
    role: 'Managing Director',
    bio: 'With over 20 years of experience in UK IT infrastructure, David leads our strategic vision.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Technical Director',
    bio: 'A cybersecurity expert with a passion for building resilient digital environments.',
  },
  {
    name: 'Michael Owen',
    role: 'Operations Manager',
    bio: 'Ensuring our support teams deliver excellence to every client, every day.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-8 tracking-tight">Our Story</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Founded in Uxbridge, Supported Living Services was born from a simple mission: 
              to provide British businesses with the high-calibre IT support they deserve. 
              We've grown from a local consultancy to a nationwide technology partner, 
              but our core values remain unchanged.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-zinc-50 border border-zinc-100">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                To empower UK organisations through innovative, secure, and reliable technology 
                solutions that drive growth and operational excellence.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-zinc-50 border border-zinc-100">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Vision</h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                To be the most trusted IT services provider in the United Kingdom, 
                recognised for our technical brilliance and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-indigo-600">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{value.title}</h3>
                <p className="text-zinc-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Our Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leaders.map((leader) => (
              <div key={leader.name} className="group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-zinc-100">
                  <img
                    src={`https://picsum.photos/seed/${leader.name.replace(' ', '')}/600/750`}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{leader.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{leader.role}</p>
                <p className="text-zinc-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl mb-8 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Commitment to GDPR</h2>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Data privacy is at the heart of everything we do. We are fully committed to 
            maintaining the highest standards of data protection in accordance with the 
            UK GDPR and Data Protection Act 2018. Your security is our priority.
          </p>
        </div>
      </section>
    </div>
  );
}
