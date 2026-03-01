import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Shield, Users, Heart, Globe, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-6xl mb-6">
              Founded on Trust, <br />
              <span className="text-sky-400">Driven by Excellence.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Fradel Lodge was established with a single mission: to provide British businesses with the high-calibre IT infrastructure and support they deserve. We believe technology should be an enabler, not a hurdle.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Fradel Lodge began in London as a small consultancy focused on helping local SMEs navigate the early days of cloud computing. We saw first-hand how many businesses were being left behind by rapid technological shifts or underserved by generic, impersonal IT providers.
                </p>
                <p>
                  We decided to build something different: an IT partner that combines enterprise-level technical capability with the personal touch of a local business. Today, we support hundreds of clients across the UK, from legal firms in the City to logistics hubs in the Midlands.
                </p>
                <p>
                  Our growth has been organic, fueled by a reputation for reliability and a commitment to "Plain English" communication. We don't hide behind jargon; we provide clear, actionable solutions that drive real business value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/office/800/800" 
                  alt="Fradel Lodge Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-sky-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm font-medium uppercase tracking-wider opacity-80">Years of UK Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="h-12 w-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower UK businesses by providing secure, scalable, and innovative IT solutions that eliminate technical friction and foster sustainable growth.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="h-12 w-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted IT partner in the United Kingdom, recognized for our technical integrity, proactive service, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="text-sky-600" />,
                title: 'Integrity',
                desc: 'We do what is right, even when no one is looking. Our recommendations are always based on what is best for your business.'
              },
              {
                icon: <Users className="text-sky-600" />,
                title: 'Collaboration',
                desc: 'We view ourselves as an extension of your team. Your challenges are our challenges, and your wins are our wins.'
              },
              {
                icon: <Heart className="text-sky-600" />,
                title: 'Excellence',
                desc: 'We never settle for "good enough." We continuously refine our processes and skills to stay at the forefront of the industry.'
              }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 mb-6">
                  {React.cloneElement(value.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'David Fradel', role: 'Founder & CEO', bio: '20+ years in enterprise IT architecture.' },
              { name: 'Emma Lodge', role: 'Operations Director', bio: 'Specialist in service delivery and client relations.' },
              { name: 'Marcus Thorne', role: 'Technical Director', bio: 'Expert in cloud infrastructure and cybersecurity.' }
            ].map((leader, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <div className="aspect-[4/5] bg-slate-200 relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/leader${i}/400/500`} 
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-sky-600 text-sm font-medium mb-3">{leader.role}</p>
                  <p className="text-slate-600 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 mb-6">
              <Globe size={24} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Commitment to GDPR & Compliance</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              As a UK-based company, we take data protection seriously. We are fully committed to the UK GDPR and the Data Protection Act 2018. All our internal processes and client solutions are designed with "Privacy by Design" principles, ensuring your business remains compliant and your data remains secure.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-sky-400" size={20} />
                <span className="text-sm font-medium">Cyber Essentials Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-sky-400" size={20} />
                <span className="text-sm font-medium">ICO Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-sky-400" size={20} />
                <span className="text-sm font-medium">ISO 27001 Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
