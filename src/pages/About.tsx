import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users2, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Pioneering IT Excellence in the Heart of <span className="text-brand-accent">London.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded with a vision to simplify technology for UK businesses, Servoca London has grown from a small consultancy into a leading provider of managed IT services.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that technology should be an enabler, not a barrier. Our mission is to provide the strategic guidance and technical support that allows our clients to focus on what they do best.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/about1/400/500" alt="Office" className="rounded-2xl shadow-lg mt-12" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/about2/400/500" alt="Team" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-900 rounded-3xl text-white">
              <div className="bg-brand-accent/20 p-4 rounded-2xl w-fit mb-8">
                <Target className="w-10 h-10 text-brand-accent" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To empower UK organisations by delivering innovative, secure, and reliable IT solutions that drive efficiency and sustainable growth.
              </p>
            </div>
            <div className="p-10 bg-brand-accent rounded-3xl text-white">
              <div className="bg-white/20 p-4 rounded-2xl w-fit mb-8">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                To be the most trusted technology partner in the UK, recognised for our technical brilliance, integrity, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="w-8 h-8 text-brand-accent" />, title: 'Client Centricity', desc: 'Your success is our success. We build long-term partnerships based on trust and mutual growth.' },
              { icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />, title: 'Integrity & Security', desc: 'We maintain the highest standards of ethics and data protection in all our operations.' },
              { icon: <Award className="w-8 h-8 text-brand-accent" />, title: 'Excellence', desc: 'We never stop learning. We strive for perfection in every ticket we resolve and every project we deliver.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-slate-600">Meet the experts behind Servoca London.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Robert Sterling', role: 'Managing Director', bio: '20+ years of experience in UK enterprise IT strategy.' },
              { name: 'Elena Rossi', role: 'Technical Director', bio: 'Expert in cloud architecture and cyber security compliance.' },
              { name: 'Marcus Thorne', role: 'Operations Manager', bio: 'Dedicated to delivering world-class support and client satisfaction.' }
            ].map((m, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                  <img 
                    src={`https://picsum.photos/seed/leader${i}/600/600`} 
                    alt={m.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold">{m.name}</h3>
                <p className="text-brand-accent font-medium mb-3">{m.role}</p>
                <p className="text-slate-600 text-sm px-4">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex p-4 bg-white/10 rounded-full mb-8">
              <ShieldCheck className="w-12 h-12 text-brand-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to GDPR</h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              As a UK-based IT provider, we take data protection seriously. We are fully committed to GDPR compliance, ensuring that all data we process for ourselves and our clients is handled with the highest level of security and transparency.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-accent rounded-full" />
                <span className="text-sm font-medium">ISO 27001 Aligned</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-accent rounded-full" />
                <span className="text-sm font-medium">Cyber Essentials Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-accent rounded-full" />
                <span className="text-sm font-medium">ICO Registered</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
