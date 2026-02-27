import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Our Story: Excellence in <span className="text-indigo-600">British IT.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in 2010, William and Patrica Venton Centre has grown from a local Northampton support desk to a premier national IT services provider.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-indigo-600 p-12 rounded-3xl text-white">
              <Target className="w-12 h-12 mb-8 opacity-80" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-indigo-100 leading-relaxed">
                To provide British businesses with the technological foundation they need to compete globally, ensuring security, reliability, and innovation are accessible to all SMEs.
              </p>
            </div>
            <div className="bg-slate-900 p-12 rounded-3xl text-white">
              <Eye className="w-12 h-12 mb-8 opacity-80" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                To be the most trusted IT partner in the UK, recognised for our technical excellence, ethical business practices, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="text-indigo-600" />, title: "Integrity", desc: "We operate with complete transparency, providing honest advice even when it's not the easiest path." },
              { icon: <Award className="text-indigo-600" />, title: "Excellence", desc: "We strive for technical perfection in every project, from simple helpdesk tickets to complex migrations." },
              { icon: <Heart className="text-indigo-600" />, title: "Client-Centric", desc: "Your business goals are our goals. We measure our success by the growth and stability of our clients." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Leadership</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Robert Venton", role: "Chief Executive Officer", bio: "With over 25 years in enterprise IT, Robert leads our strategic vision." },
              { name: "Patrica Venton", role: "Operations Director", bio: "Patrica ensures our service delivery meets the highest standards of excellence." },
              { name: "James Sterling", role: "Technical Director", bio: "A cybersecurity expert who oversees our infrastructure and security protocols." }
            ].map((leader, i) => (
              <div key={i} className="text-center">
                <div className="mb-6 relative inline-block">
                  <img 
                    src={`https://picsum.photos/seed/${leader.name}/400/400`} 
                    className="w-48 h-48 rounded-full object-cover border-4 border-indigo-50 mx-auto" 
                    alt={leader.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                <p className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-4">{leader.role}</p>
                <p className="text-slate-600 max-w-xs mx-auto">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Commitment */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-2xl mb-8">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Our Commitment to GDPR</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            As a UK-based provider, we are deeply committed to the principles of the Data Protection Act 2018 and UK GDPR. We implement "Privacy by Design" in every solution we deploy, ensuring your data—and your clients' data—is handled with the utmost care and legal compliance.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-slate-800 px-6 py-3 rounded-lg border border-slate-700 text-sm font-bold">ICO Registered</div>
            <div className="bg-slate-800 px-6 py-3 rounded-lg border border-slate-700 text-sm font-bold">Cyber Essentials Plus</div>
          </div>
        </div>
      </section>
    </div>
  );
}
