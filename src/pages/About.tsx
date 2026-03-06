import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, Award, CheckCircle2, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 pb-24 bg-indigo-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About CWD Outreach</h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              We are a dedicated team of IT professionals committed to delivering excellence, security, and innovation to the UK business landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-12 rounded-3xl space-y-6 border border-slate-100">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower British enterprises by providing robust, scalable, and secure IT infrastructure that eliminates technical barriers and fosters sustainable growth.
              </p>
            </div>
            <div className="bg-slate-950 p-12 rounded-3xl space-y-6 text-white">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                To be the UK's most trusted partner for digital transformation, known for our technical integrity, proactive support, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Certified Excellence</div>
                    <div className="text-xs text-slate-500">Microsoft & Cisco Partners</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-slate-900">The CWD Story</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Founded in Telford, CWD Outreach Service began with a simple observation: many UK businesses were being underserved by generic IT providers who prioritised tickets over relationships.
                </p>
                <p>
                  We set out to build a different kind of IT company—one that acts as a true extension of our clients' teams. Over the past decade, we have grown from a small local support shop into a nationwide provider of managed services, cybersecurity, and strategic consultancy.
                </p>
                <p>
                  Our journey has been defined by a relentless focus on the "Outreach" part of our name—proactively reaching out to solve problems before they impact our clients' bottom lines.
                </p>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-3 text-indigo-600 font-bold">
                  <Shield size={20} />
                  <span>Fully GDPR Compliant & Cyber Essentials Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Our Values</h2>
            <h3 className="text-4xl font-bold text-slate-900">What Drives Us</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Honest advice and transparent pricing, always." },
              { icon: Zap, title: "Innovation", desc: "Staying ahead of the curve with the latest tech." },
              { icon: Heart, title: "Empathy", desc: "Understanding the human impact of technology." },
              { icon: Award, title: "Excellence", desc: "Never settling for 'good enough' in our work." }
            ].map((value, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all text-center space-y-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto">
                  <value.icon size={24} />
                </div>
                <h4 className="font-bold text-slate-900">{value.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Leadership</h2>
            <h3 className="text-4xl font-bold text-slate-900">The Minds Behind CWD</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "David Wilson", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
              { name: "Sarah Chen", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
              { name: "Marcus Thorne", role: "Head of Cybersecurity", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative rounded-3xl overflow-hidden mb-6 aspect-square">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-indigo-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-emerald-50 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-12 border border-emerald-100">
            <div className="shrink-0 w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
              <Shield size={48} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Our Commitment to GDPR & Compliance</h3>
              <p className="text-slate-600 leading-relaxed">
                As a UK-based service provider, we adhere strictly to the Data Protection Act 2018 and GDPR. We ensure that all client data is handled with the highest levels of security, encryption, and ethical standards. Our internal processes are audited annually to maintain our Cyber Essentials certification.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                  <CheckCircle2 size={16} /> Data Protection Act 2018
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                  <CheckCircle2 size={16} /> GDPR Compliant
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                  <CheckCircle2 size={16} /> Cyber Essentials Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
