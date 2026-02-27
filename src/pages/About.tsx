import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Users, Heart, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Driving Digital Excellence Across the <span className="text-brand-secondary">United Kingdom</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Founded with a vision to bridge the gap between complex technology and business growth, Swanton IT has become a trusted partner for enterprises seeking reliable, UK-based technical expertise.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/10 skew-x-12 translate-x-1/4" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary text-white rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower UK businesses by providing seamless, secure, and scalable IT solutions that eliminate technical barriers and foster sustainable commercial growth.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-emerald-50 border border-emerald-100">
              <div className="w-14 h-14 bg-brand-secondary text-white rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the United Kingdom's most trusted IT partner, recognised for our technical integrity, innovative spirit, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">The Swanton IT Story</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Established in Buckinghamshire, Swanton Community Services Buckinghamshire (trading as Swanton IT) began as a small team of dedicated engineers with a single goal: to provide high-quality IT support that actually understands the needs of British business owners.
                </p>
                <p>
                  Over the years, we have evolved from a local support desk into a comprehensive IT consultancy. Our growth has been driven by a simple philosophy: treat every client's infrastructure as if it were our own.
                </p>
                <p>
                  Today, we support hundreds of organisations across various sectors, from legal and finance to manufacturing and healthcare, providing the technical backbone that allows them to compete on a global stage.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-slate-100 rounded-3xl" />
              <div className="aspect-square bg-emerald-100 rounded-3xl mt-8" />
              <div className="aspect-square bg-slate-900 rounded-3xl -mt-8" />
              <div className="aspect-square bg-slate-200 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide every decision we make and every solution we deploy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity First', desc: 'We provide honest, transparent advice, even when it means recommending a simpler, less expensive solution.', icon: Shield },
              { title: 'Technical Excellence', desc: 'Our team is committed to continuous learning, ensuring we always deploy the most effective modern technologies.', icon: Award },
              { title: 'Client Centricity', desc: 'We don\'t just fix computers; we support people. Your business goals are the primary driver of our technical strategy.', icon: Heart },
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-slate-50 text-brand-primary rounded-xl flex items-center justify-center mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Compliance */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-emerald-600 rounded-[2rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Unwavering Commitment to GDPR</h2>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                In an era of increasing data regulation, we take our responsibility as a data processor seriously. Our systems and processes are fully aligned with UK GDPR requirements.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'ISO 27001 Aligned Processes',
                  'Regular Security Audits',
                  'Data Encryption at Rest & Transit',
                  'Comprehensive Staff Training',
                  'Secure Data Disposal Protocols',
                  'Transparent Privacy Practices'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-emerald-300" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
                <Shield size={80} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Meet the experts driving our technical vision and client success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Robert Swanton', role: 'Chief Executive Officer', bio: 'Over 20 years of experience in enterprise IT infrastructure and strategic management.' },
              { name: 'Elizabeth Thorne', role: 'Chief Technology Officer', bio: 'A specialist in cloud architecture and cybersecurity with a background in government systems.' },
              { name: 'Marcus Sterling', role: 'Director of Client Success', bio: 'Dedicated to ensuring that our technical solutions deliver measurable commercial value for every client.' },
            ].map((leader, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 bg-slate-100 rounded-full mx-auto mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="w-full h-full bg-slate-200" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{leader.name}</h3>
                <div className="text-brand-secondary font-bold text-sm uppercase tracking-widest mb-4">{leader.role}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
