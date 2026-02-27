import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Heart, Users, Award, CheckCircle } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We operate with complete transparency and honesty in every interaction.' },
  { icon: Target, title: 'Precision', desc: 'Our solutions are engineered for accuracy and long-term reliability.' },
  { icon: Heart, title: 'Client-First', desc: 'Your business goals are the primary driver of our technology strategy.' },
  { icon: Users, title: 'Collaboration', desc: 'We act as an extension of your internal team, not just a vendor.' },
];

const team = [
  { name: 'James Thompson', role: 'Managing Director', bio: '20+ years in enterprise IT architecture.' },
  { name: 'Sarah Jenkins', role: 'Head of Cybersecurity', bio: 'Certified Ethical Hacker and compliance expert.' },
  { name: 'David Miller', role: 'Cloud Strategy Lead', bio: 'Azure & AWS specialist with a focus on scalability.' },
];

export function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl sm:text-6xl font-bold text-slate-900 mb-8 leading-tight"
            >
              Building the Future of <span className="text-indigo-600">British Business IT</span>
            </motion.h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in London, Telegraph House was born from a simple mission: to provide SMEs with the same level of IT excellence typically reserved for global corporations.
            </p>
          </div>
        </div>
      </section>

      {/* Vision/Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To empower UK businesses through resilient, secure, and innovative technology solutions that drive measurable commercial success and operational excellence.
              </p>
            </div>
            <div className="bg-indigo-600 p-12 rounded-3xl shadow-xl text-white">
              <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
              <p className="text-indigo-100 leading-relaxed">
                To be the most trusted technology partner in the UK, recognised for our technical precision, unwavering integrity, and commitment to client growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                  <value.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Leadership Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={`https://picsum.photos/seed/${member.name}/400/500`} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-12 lg:p-20 text-center text-white">
            <Award className="w-16 h-16 text-indigo-400 mx-auto mb-8" />
            <h2 className="text-3xl font-bold mb-6">Commitment to GDPR & Security</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
              Data privacy is not just a legal requirement for us; it's a fundamental promise. We are fully GDPR compliant and maintain the highest standards of cybersecurity for ourselves and our clients.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-indigo-400 w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">ISO 27001 Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-indigo-400 w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Cyber Essentials Plus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-indigo-400 w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
