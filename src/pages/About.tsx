import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Award, Heart, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">Our Story</h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded with a vision to simplify technology for British businesses, {COMPANY_DETAILS.name} has grown into a trusted IT partner for SMEs across the UK.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We believe that IT should be an enabler, not a hurdle. Our journey began in the heart of the Midlands, driven by a passion for technical excellence and a commitment to genuine customer care. Today, we manage thousands of endpoints and secure critical data for firms in every major UK sector.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-indigo-600">10+</div>
                  <div className="text-sm text-slate-500 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">200+</div>
                  <div className="text-sm text-slate-500 font-medium">Clients Supported</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">15m</div>
                  <div className="text-sm text-slate-500 font-medium">Avg Response</div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                <Target className="text-white w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To provide world-class, proactive IT managed services that empower UK businesses to innovate, scale, and remain secure in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-white w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted technology partner in the UK, recognized for our integrity, technical mastery, and unwavering focus on client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Integrity', desc: 'We do what is right, even when no one is watching.' },
              { icon: Award, title: 'Excellence', desc: 'We strive for perfection in every ticket we close.' },
              { icon: Heart, title: 'Empathy', desc: 'We understand the human impact of technical issues.' },
              { icon: Target, title: 'Innovation', desc: 'We constantly evolve to stay ahead of threats.' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600">
                  <value.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR & Compliance */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Commitment to GDPR & Compliance</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              In the UK, data protection is paramount. We are fully committed to GDPR compliance, ensuring that all client data we manage is handled with the highest levels of security and confidentiality.
            </p>
            <ul className="space-y-4">
              {['ISO 27001 Aligned Processes', 'Cyber Essentials Certified Partner', 'Regular Security Audits', 'Encrypted Data Management'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-indigo-400 w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Leadership Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'James Harrison', role: 'Chief Executive Officer', image: 'https://i.pravatar.cc/300?u=james' },
              { name: 'Eleanor Vance', role: 'Chief Technology Officer', image: 'https://i.pravatar.cc/300?u=eleanor' },
              { name: 'Robert Sterling', role: 'Head of Cyber Security', image: 'https://i.pravatar.cc/300?u=robert' }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-indigo-600 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
