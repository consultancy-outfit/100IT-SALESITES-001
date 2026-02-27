import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  History, 
  Users, 
  ShieldCheck, 
  Award, 
  Heart, 
  Lightbulb 
} from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description: 'We believe in honest, transparent communication and ethical business practices in everything we do.',
    icon: ShieldCheck,
  },
  {
    title: 'Innovation',
    description: 'Staying at the forefront of technology to provide our clients with the most advanced solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Excellence',
    description: 'A commitment to delivering high-quality results that exceed expectations and drive real value.',
    icon: Award,
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our priority. We build long-term partnerships based on mutual trust and growth.',
    icon: Heart,
  },
];

const leadership = [
  {
    name: 'James Blessington',
    role: 'Founder & CEO',
    bio: 'With over 20 years in the IT industry, James founded Blessday House to bring enterprise-level technology to UK businesses.',
    image: 'https://picsum.photos/seed/ceo/400/400',
  },
  {
    name: 'Eleanor Vance',
    role: 'Chief Technology Officer',
    bio: 'A specialist in cloud architecture and cybersecurity, Eleanor leads our technical strategy and innovation roadmap.',
    image: 'https://picsum.photos/seed/cto/400/400',
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Managed Services',
    bio: 'Marcus ensures our clients receive world-class support and proactive system management every single day.',
    image: 'https://picsum.photos/seed/ops/400/400',
  },
];

export default function About() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-navy-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">Our Story, Your Success</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Based in the heart of the UK, Blessday House is a premier IT services provider dedicated to empowering businesses through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-brand-600" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To provide innovative, secure, and scalable IT solutions that enable British businesses to thrive in an increasingly digital world. We aim to be the silent engine behind your growth.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-brand-600" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To become the UK's most trusted partner for digital transformation, known for our technical excellence, unwavering integrity, and commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/london-office/800/1000" 
                alt="Our London Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-600 p-8 rounded-2xl text-white shadow-xl">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-brand-600 font-bold uppercase tracking-widest text-sm">
              <History className="w-5 h-5" />
              <span>Our Journey</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900">From a Small Startup to a Leading IT Consultancy</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Blessday House was founded in 2014 with a simple goal: to provide small and medium-sized businesses in the UK with the same level of IT expertise and security usually reserved for large corporations.
              </p>
              <p>
                Over the past decade, we have grown into a full-service IT consultancy, supporting hundreds of clients across various sectors including finance, healthcare, and manufacturing. Our growth has been fueled by our passion for technology and our dedication to our clients.
              </p>
              <p>
                Today, we are proud to be a leading voice in the UK IT landscape, helping businesses navigate the complexities of cloud computing, cybersecurity, and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900">Our Core Values</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">The principles that guide our work and define our culture.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-900">Meet Our Leadership</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">The experts driving our vision and ensuring your success.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {leadership.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-square rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">{member.name}</h3>
              <p className="text-brand-600 font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-50 rounded-3xl p-10 lg:p-16 border border-brand-100">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-24 h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
              <ShieldCheck className="w-12 h-12 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-navy-900 mb-4">Our Commitment to GDPR & Data Privacy</h2>
              <p className="text-slate-600 leading-relaxed">
                As a UK-based company, we take data protection seriously. We are fully committed to GDPR compliance and ensure that all our systems, processes, and client solutions adhere to the highest standards of privacy and security. Your data is your most valuable asset, and we treat it with the respect it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
