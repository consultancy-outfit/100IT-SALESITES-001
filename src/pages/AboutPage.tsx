import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, Users, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const values = [
    { title: 'Integrity', desc: 'Honest, transparent advice that puts your business interests first.', icon: ShieldCheck },
    { title: 'Innovation', desc: 'Constantly evolving our stack to bring you the latest in IT efficiency.', icon: Zap },
    { title: 'Excellence', desc: 'A commitment to the highest standards of technical delivery.', icon: Heart },
    { title: 'Collaboration', desc: 'We act as an extension of your team, not just a vendor.', icon: Users },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">Our Story</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in Cambridge, Isaac Newton House was born from a desire to bring scientific precision to the world of IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 rounded-3xl bg-indigo-600 text-white relative overflow-hidden">
              <Target className="w-12 h-12 mb-8 opacity-50" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-indigo-100 leading-relaxed">
                To empower British enterprises with robust, scalable, and secure technology foundations that catalyze growth and innovation in a global market.
              </p>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target className="w-48 h-48" />
              </div>
            </div>
            <div className="p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
              <Eye className="w-12 h-12 mb-8 opacity-50" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To be the UK's most trusted partner for digital transformation, recognized for our technical excellence and unwavering commitment to client success.
              </p>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Eye className="w-48 h-48" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                <History className="w-3 h-3" /> Since 2012
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Legacy of Innovation</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Isaac Newton House began as a small consultancy in the heart of Cambridge's Silicon Fen. Our founders, a group of systems engineers and cybersecurity experts, saw a gap in the market for IT services that combined high-level technical expertise with a deep understanding of British business culture.
                </p>
                <p>
                  Over the last decade, we have grown into a full-service IT partner, supporting hundreds of businesses across the UK—from London's financial district to the manufacturing hubs of the Midlands.
                </p>
                <p>
                  Our name reflects our philosophy: like Newton, we believe in the power of fundamental principles, rigorous testing, and the pursuit of clarity in complex systems.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://picsum.photos/seed/office/800/800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                  <p className="text-4xl font-bold text-indigo-600 mb-1">12+</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600">
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="w-16 h-16 text-indigo-400 mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-6">Our Commitment to GDPR & Security</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            As a UK-based company, we take data protection seriously. We are fully GDPR compliant and help our clients achieve and maintain the highest standards of data security, including Cyber Essentials and ISO 27001 readiness.
          </p>
          <Link to="/privacy" className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
            Read our Privacy Policy
          </Link>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-slate-600">Expertise driven by experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Dr. Richard Sterling', role: 'CEO & Founder', bio: 'Former systems architect with 20 years in enterprise IT.' },
              { name: 'Elizabeth Howe', role: 'CTO', bio: 'Cybersecurity specialist and advocate for UK tech innovation.' },
              { name: 'James Miller', role: 'Director of Operations', bio: 'Expert in managed services and client success strategies.' },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-3xl bg-slate-100 mb-6 overflow-hidden relative">
                  <img src={`https://picsum.photos/seed/member${i}/600/800`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
