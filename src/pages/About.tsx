import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, Users, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-500 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              A Legacy of <span className="text-zinc-500 italic">Excellence</span> in IT.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Draycombe House was founded on the principle that technology should be an enabler, not a hurdle. We provide the strategic backbone for UK businesses to thrive in a digital-first world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6 p-10 bg-zinc-50 rounded-3xl border border-zinc-100">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-white mb-4">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900">Our Mission</h2>
              <p className="text-zinc-600 leading-relaxed">
                To deliver reliable, secure, and innovative IT solutions that empower UK businesses to achieve their full potential through technology.
              </p>
            </div>
            <div className="space-y-6 p-10 bg-zinc-50 rounded-3xl border border-zinc-100">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-white mb-4">
                <Eye size={24} />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900">Our Vision</h2>
              <p className="text-zinc-600 leading-relaxed">
                To be the most trusted technology partner for British enterprises, known for our integrity, expertise, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img
                src="https://picsum.photos/seed/office/1200/1200"
                alt="Our Office"
                className="rounded-3xl shadow-2xl grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-3 text-zinc-400 font-bold uppercase tracking-widest text-xs">
                <History size={16} />
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">From Local Support to National Infrastructure.</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Founded in London over a decade ago, Draycombe House started as a small team of passionate engineers helping local businesses navigate the early days of cloud computing.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Today, we manage complex IT infrastructures for hundreds of clients across the UK, maintaining the same personal touch and dedication to quality that defined our early years.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="text-zinc-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Join our journey <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Our Leadership</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Meet the experts driving innovation and excellence at Draycombe House.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "James Draycombe", role: "Founder & CEO", bio: "20+ years in IT infrastructure and strategic consultancy." },
              { name: "Eleanor Vance", role: "Head of Cybersecurity", bio: "Former government security consultant specializing in threat mitigation." },
              { name: "Robert Sterling", role: "Director of Operations", bio: "Expert in scaling managed services and client success management." }
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-zinc-200">
                  <img
                    src={`https://picsum.photos/seed/leader${i}/800/800`}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{leader.name}</h3>
                <p className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-widest">{leader.role}</p>
                <p className="text-sm text-zinc-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Core Values</h2>
            <p className="text-zinc-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Heart, title: "Client First", desc: "Your success is our primary metric of achievement." },
              { icon: ShieldCheck, title: "Integrity", desc: "Honest advice and transparent pricing, always." },
              { icon: Users, title: "Collaboration", desc: "Working as an extension of your internal team." }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 mx-auto">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{value.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <ShieldCheck size={64} className="mx-auto text-zinc-500" />
            <h2 className="text-3xl font-bold">Our Commitment to GDPR</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              As a UK-based company, we take data protection seriously. We are fully committed to GDPR compliance in all our operations and help our clients achieve the same level of security and regulatory adherence.
            </p>
            <div className="pt-4">
              <Link to="/privacy" className="inline-block border border-white/20 px-8 py-3 rounded-full hover:bg-white/5 transition-colors">
                Read our Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
