import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Eye, Users, Heart, Award, CheckCircle2 } from 'lucide-react';

const VALUES = [
  {
    title: 'Integrity',
    description: 'We believe in honest, transparent communication and ethical business practices.',
    icon: Heart,
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, from support to strategy.',
    icon: Award,
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve, bringing the latest technology to our clients.',
    icon: Target,
  },
  {
    title: 'Collaboration',
    description: 'We work as an extension of your team, not just an external vendor.',
    icon: Users,
  },
];

const LEADERSHIP = [
  {
    name: 'James Harrison',
    role: 'Managing Director',
    bio: 'With over 20 years in the UK IT sector, James leads Siete Care with a vision for accessible, enterprise-grade technology for all.',
    image: 'https://picsum.photos/seed/james/400/400',
  },
  {
    name: 'Emma Radcliffe',
    role: 'Technical Director',
    bio: 'Emma oversees our technical operations, ensuring our infrastructure and security protocols are world-class.',
    image: 'https://picsum.photos/seed/emma/400/400',
  },
  {
    name: 'Robert Smith',
    role: 'Head of Cybersecurity',
    bio: 'A certified security expert, Robert leads our threat intelligence and data protection initiatives.',
    image: 'https://picsum.photos/seed/robert/400/400',
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              A Legacy of <span className="text-indigo-600">Technical Excellence</span> in the UK
            </h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Founded in Sheffield, Siete Care Services was born from a simple observation: mid-sized British businesses were being underserved by traditional IT providers.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We set out to create a different kind of IT company—one that combines deep technical expertise with a genuine commitment to client success. Today, we support hundreds of businesses across the UK, providing the technology backbone they need to compete on a global stage.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/team/800/600" alt="Our Team" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-indigo-100 font-medium">Years of Experience</p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To empower UK businesses through innovative, reliable, and secure IT solutions that drive growth, efficiency, and peace of mind.
            </p>
          </div>
          <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To be the UK's most trusted technology partner, recognized for our technical excellence, human-centric approach, and unwavering commitment to security.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide every decision we make and every solution we build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center p-8">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-slate-600">The experts driving our technical strategy and client success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {LEADERSHIP.map((leader) => (
              <div key={leader.name} className="group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{leader.role}</p>
                <p className="text-slate-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GDPR Commitment */}
        <div className="bg-indigo-600 rounded-3xl p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <ShieldCheck className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to GDPR & Data Privacy</h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              As a UK-based IT provider, we take data protection seriously. We are fully committed to GDPR compliance and help our clients navigate the complexities of data privacy in the digital age.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Data Processing Agreements (DPA)',
                'Regular Security Audits',
                'Employee Data Privacy Training',
                'Secure Data Retention Policies',
                'Subject Access Request (SAR) Support',
                'Encryption by Default',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-300 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
