import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, ShieldCheck, Heart, Users2, Building2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-24 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold text-zinc-900 mb-8">Our Story</h1>
              <p className="text-xl text-zinc-600 leading-relaxed mb-6">
                Founded in the heart of Hertfordshire, {COMPANY_DETAILS.name} began with a simple mission: 
                to bring enterprise-level IT expertise to the local business community.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                We recognized that while large corporations had dedicated IT departments, 
                SMEs in Barnet and surrounding areas were often left struggling with reactive support 
                and outdated systems. We stepped in to bridge that gap.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/office-uk/800/800" 
                  alt="Our Office"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-indigo-600 p-8 rounded-2xl text-white hidden sm:block">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-indigo-100 text-sm uppercase tracking-wider font-semibold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-zinc-100">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-7 h-7 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-zinc-600 leading-relaxed">
                To empower local businesses by providing reliable, secure, and innovative technology 
                solutions that foster growth and resilience in an ever-changing digital landscape.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-zinc-100">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-7 h-7 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-zinc-600 leading-relaxed">
                To be the most trusted IT partner in the South East, known for our technical excellence, 
                unwavering integrity, and commitment to our clients' long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Core Values</h2>
            <p className="text-zinc-600">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Integrity", desc: "Honest advice, even if it means a smaller project for us." },
              { icon: Heart, title: "Client Focus", desc: "Your business goals are our primary technical drivers." },
              { icon: Users2, title: "Collaboration", desc: "We work as an extension of your own team." },
              { icon: Building2, title: "Local Pride", desc: "Supporting the growth of the Hertfordshire economy." }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-zinc-900" />
                </div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 border-4 border-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">GDPR</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Data Privacy</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                As a UK-based IT company, we take GDPR compliance seriously. We don't just secure your data; 
                we ensure your business processes align with the latest UK data protection regulations.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-indigo-500" /> Regular Security Audits
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-indigo-500" /> Data Processing Agreements
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-indigo-500" /> Encrypted Backups
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-indigo-500" /> Staff Privacy Training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default About;
