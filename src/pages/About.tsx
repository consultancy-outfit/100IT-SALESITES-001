import { motion } from 'motion/react';
import { Target, Eye, Users, Shield, Heart, Zap } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function About() {
  const values = [
    { icon: Shield, title: 'Integrity', desc: 'We operate with complete transparency and honesty in all our technical recommendations.' },
    { icon: Heart, title: 'Client-First', desc: 'Your business goals drive our technology choices, not the other way around.' },
    { icon: Zap, title: 'Innovation', desc: 'We constantly evaluate new technologies to keep our UK clients ahead of the curve.' },
    { icon: Users, title: 'Collaboration', desc: 'We act as an extension of your team, not just a third-party vendor.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-brand-navy py-24 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Founded in the heart of the Wirral, Croft House and Cottages began with a simple mission: 
              to provide enterprise-grade IT services to the UK's SME community with a personal, local touch.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-3xl">
              <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center mb-6">
                <Target className="text-brand-emerald" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To empower British businesses through reliable, secure, and innovative technology solutions 
                that drive growth and operational efficiency.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl">
              <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-brand-emerald" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted IT partner in the UK, recognised for our technical excellence 
                and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-slate-600">Meet the experts behind Croft House and Cottages.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'James Croft', role: 'Founder & CEO', bio: '20+ years in enterprise IT architecture.' },
              { name: 'Eleanor Vance', role: 'Technical Director', bio: 'Cyber security specialist and GDPR consultant.' },
              { name: 'Robert Miller', role: 'Head of Support', bio: 'Expert in managed services and client relations.' },
            ].map((leader, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden">
                  <img src={`https://picsum.photos/seed/leader${i}/200/200`} alt={leader.name} referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-brand-emerald font-medium mb-4">{leader.role}</p>
                <p className="text-slate-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-brand-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <v.icon className="text-brand-emerald w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-brand-emerald mx-auto mb-8" />
            <h2 className="text-3xl font-bold mb-6">Commitment to GDPR & Security</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              As a UK-based company, we take data protection seriously. We are fully compliant with the UK GDPR 
              and the Data Protection Act 2018. Our internal processes are audited regularly to ensure that 
              both our data and our clients' data remain secure at all times.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="px-6 py-3 border border-slate-700 rounded-lg text-sm font-mono">Cyber Essentials Certified</div>
              <div className="px-6 py-3 border border-slate-700 rounded-lg text-sm font-mono">UK GDPR Compliant</div>
              <div className="px-6 py-3 border border-slate-700 rounded-lg text-sm font-mono">ISO 27001 Aligned</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
