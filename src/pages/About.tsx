import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Users, Award, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">
              Our Mission is to <span className="text-brand-accent">Simplify Technology</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Rosewood Lodge was founded on a simple principle: technology should be an enabler, not a barrier. We help UK businesses navigate the complex digital landscape with clarity and confidence.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/2" />
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/team1/400/500" alt="Team" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/office1/400/300" alt="Office" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4 pt-12">
                  <img src="https://picsum.photos/seed/meeting1/400/300" alt="Meeting" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/team2/400/500" alt="Team" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Our Story</h2>
              <h3 className="text-4xl font-bold mb-8">A Decade of IT Excellence</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2014 in Reading, Rosewood Lodge began as a small team of passionate engineers dedicated to providing high-quality IT support to local Berkshire businesses.
                </p>
                <p>
                  Over the years, we have grown into a leading UK IT services provider, supporting hundreds of users across diverse industries including legal, finance, manufacturing, and creative sectors.
                </p>
                <p>
                  Our growth has been driven by our commitment to building long-term partnerships with our clients. We don't just provide a service; we become an extension of your team.
                </p>
              </div>
              <div className="mt-10 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="text-brand-accent" size={32} />
                  <h4 className="text-xl font-bold">Award-Winning Service</h4>
                </div>
                <p className="text-sm text-slate-500">Recognised as a leading Managed Service Provider (MSP) in the South East for three consecutive years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
              <Target className="text-brand-accent mb-6" size={40} />
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                To provide innovative, secure, and reliable IT solutions that empower UK businesses to achieve their full potential through the strategic use of technology.
              </p>
            </div>
            <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
              <Eye className="text-brand-accent mb-6" size={40} />
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                To be the most trusted technology partner for SMEs in the United Kingdom, known for our technical expertise, proactive approach, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: 'Integrity First', desc: 'We are honest, transparent, and always act in the best interest of our clients.' },
              { icon: Users, title: 'Client Centric', desc: 'Your success is our success. We listen, understand, and deliver tailored solutions.' },
              { icon: Heart, title: 'Passion for Tech', desc: 'We love what we do and are constantly exploring new ways to innovate.' }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-brand-accent">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-bold">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Leadership</h2>
            <p className="text-lg text-slate-600">Meet the experts behind Rosewood Lodge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Robert Sterling', role: 'Chief Executive Officer', image: 'https://i.pravatar.cc/300?u=robert' },
              { name: 'Eleanor Vance', role: 'Chief Technology Officer', image: 'https://i.pravatar.cc/300?u=eleanor' },
              { name: 'Marcus Thorne', role: 'Director of Operations', image: 'https://i.pravatar.cc/300?u=marcus' }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm font-medium">Over 15 years of industry experience.</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-brand-accent font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-slate-900 rounded-3xl text-white">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-4">Commitment to GDPR & Security</h3>
              <p className="text-slate-400">
                We take data protection seriously. Rosewood Lodge is fully GDPR compliant and maintains Cyber Essentials Plus certification to ensure the highest standards of security.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20 text-sm font-bold">Cyber Essentials+</div>
              <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20 text-sm font-bold">GDPR Ready</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
