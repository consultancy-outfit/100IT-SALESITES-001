import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Bridging the Gap Between Technology and Human Support.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              SSD IT Solutions (Support Services for Disabled Children) was founded with a unique mission: 
              to provide enterprise-grade IT infrastructure to organisations that make a difference in the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Started in London, our journey began when we noticed that many essential services—particularly those in the care and non-profit sectors—were being left behind by the rapid pace of technological change.
                </p>
                <p>
                  We saw a need for an IT partner that didn't just speak "tech," but understood the operational pressures of UK organisations. We rebranded our expertise to focus on reliability, security, and accessibility.
                </p>
                <p>
                  Today, we support hundreds of businesses across the UK, ensuring their systems are as resilient as the people who run them.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/team/800/600" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl text-white shadow-xl">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm font-medium opacity-80">Years of UK Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <Target className="text-accent mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To empower UK organisations with secure, reliable, and innovative IT solutions that enable them to focus on their core purpose without technical friction.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <Eye className="text-emerald-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be the UK's most trusted IT partner for mission-driven organisations, setting the standard for accessible and secure technology infrastructure.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <Heart className="text-rose-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Core Values</h3>
              <ul className="space-y-3">
                {["Integrity First", "Human-Centric Tech", "Uncompromising Security", "Local Accountability"].map((v, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-accent mr-2" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-slate-600">The experts driving our commitment to UK IT excellence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "James Sterling", role: "Managing Director", bio: "20 years in UK enterprise IT and infrastructure." },
              { name: "Eleanor Vance", role: "Head of Cybersecurity", bio: "Former government security consultant and GDPR expert." },
              { name: "Marcus Thorne", role: "Operations Director", bio: "Specialist in non-profit and care sector digital transformation." }
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden">
                  <img src={`https://picsum.photos/seed/leader${i}/200/200`} referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-accent text-sm font-semibold mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm px-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 flex flex-col lg:flex-row items-center gap-12">
            <div className="shrink-0">
              <Shield size={80} className="text-accent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Commitment to GDPR & Privacy</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                As a UK-based company, we take data protection seriously. We are fully committed to GDPR compliance, ensuring that all data we manage for our clients is handled with the highest levels of security and confidentiality. Our systems are audited regularly to maintain UK security standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award size={18} className="text-accent" />
                  <span className="text-sm font-medium">Cyber Essentials Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award size={18} className="text-accent" />
                  <span className="text-sm font-medium">ICO Registered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
