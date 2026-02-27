import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users2, Award } from 'lucide-react';

export const AboutUs = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
              The Technology Partner <br />
              <span className="text-brand-600">London Trusts</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in the heart of the City, City Gate House was born from a simple observation: UK businesses needed IT support that was as professional and ambitious as they are.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-600/5 -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://picsum.photos/seed/london/800/600" alt="London Office" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  City Gate House started as a small consultancy in 2015, focusing on the high-pressure environment of London's financial district. We quickly learned that in business, technology isn't just a tool—it's the lifeblood of operations.
                </p>
                <p>
                  As we grew, we expanded our reach across the UK, bringing enterprise-level expertise to small and medium-sized enterprises. Today, we manage thousands of endpoints and support hundreds of businesses in their journey toward digital excellence.
                </p>
                <p>
                  Our name reflects our heritage: a gateway to modern technology, rooted in the historic strength of the City.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-800 rounded-3xl border border-slate-700">
              <Target className="text-brand-400 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To empower UK businesses by providing secure, scalable, and innovative IT solutions that drive commercial success and operational efficiency.
              </p>
            </div>
            <div className="p-10 bg-slate-800 rounded-3xl border border-slate-700">
              <Eye className="text-emerald-400 mb-6" size={40} />
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To be the most respected IT partner in the United Kingdom, known for our technical excellence, unwavering integrity, and commitment to our clients' growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck className="text-brand-600" />, title: 'Integrity', desc: 'Honest advice, always. We only recommend what you truly need.' },
              { icon: <Award className="text-brand-600" />, title: 'Excellence', desc: 'We strive for perfection in every line of code and every support ticket.' },
              { icon: <Users2 className="text-brand-600" />, title: 'Partnership', desc: 'We view ourselves as an extension of your team, not just a vendor.' },
              { icon: <Heart className="text-brand-600" />, title: 'Responsibility', desc: 'We take ownership of your tech, so you can focus on your business.' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex p-4 bg-brand-50 rounded-2xl mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Our Leadership</h2>
            <p className="text-slate-600">Expert minds steering the ship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'James Sterling', role: 'CEO & Founder', image: 'https://picsum.photos/seed/ceo/400/400' },
              { name: 'Dr. Elena Rossi', role: 'Chief Technology Officer', image: 'https://picsum.photos/seed/cto/400/400' },
              { name: 'Mark Henderson', role: 'Head of Cybersecurity', image: 'https://picsum.photos/seed/cs/400/400' }
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img src={leader.image} alt={leader.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{leader.name}</h4>
                <p className="text-brand-600 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-emerald-50 text-emerald-600 rounded-full mb-6">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl font-display font-bold mb-6">Our Commitment to GDPR</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            As a UK-based company, we take data privacy and GDPR compliance with the utmost seriousness. We don't just secure your systems; we ensure that all data processing activities meet the highest standards of the UK Data Protection Act.
          </p>
          <div className="flex justify-center gap-4">
            <span className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-600">ICO Registered</span>
            <span className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-bold text-slate-600">Cyber Essentials Plus</span>
          </div>
        </div>
      </section>
    </main>
  );
};
