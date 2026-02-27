import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Heart, Eye, Award, CheckCircle2 } from 'lucide-react';
import { Section } from './components/Layout';

const AboutUs = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-gradient-to-l from-indigo-500 to-transparent"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Built on Trust, <br />Driven by <span className="text-indigo-400">Excellence.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            SureCare Batley & Wakefield was founded with a simple mission: to provide world-class IT services that feel local, personal, and professional.
          </p>
        </div>
      </Section>

      {/* Mission/Vision */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100">
            <Target className="w-12 h-12 text-indigo-600 mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To empower British businesses by providing reliable, secure, and innovative IT infrastructure that eliminates technical barriers and fosters sustainable growth.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-indigo-600 text-white">
            <Eye className="w-12 h-12 text-indigo-200 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-indigo-100 leading-relaxed">
              To be the UK's most trusted partner for managed IT services, recognised for our technical expertise, local commitment, and unwavering focus on client success.
            </p>
          </div>
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">The SureCare Story</h2>
            <div className="space-y-6 text-slate-600">
              <p>
                Starting as a small consultancy in West Yorkshire, SureCare has grown into a regional powerhouse for IT solutions. We noticed a gap in the market: businesses were either dealing with overpriced global giants or unreliable local freelancers.
              </p>
              <p>
                We built SureCare to bridge that gap. By combining the technical capabilities of a major firm with the personal touch of a local business, we've helped hundreds of UK companies navigate the complexities of digital transformation.
              </p>
              <p>
                Today, we operate from our hub in Batley, serving clients across the North and beyond, maintaining the same core values that we started with over a decade ago.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/office/800/600"
              alt="Our Batley Office"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <Award className="w-10 h-10 text-indigo-600 mb-2" />
              <div className="font-bold text-slate-900">10+ Years</div>
              <div className="text-xs text-slate-500">Of IT Excellence</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-white">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-slate-600">The principles that guide every decision we make.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Integrity First", desc: "We provide honest advice, even if it means recommending a cheaper solution." },
            { title: "Local Commitment", desc: "We are proud of our Yorkshire roots and actively support the local business community." },
            { title: "Technical Mastery", desc: "We never stop learning. Our engineers are constantly certified in the latest tech." }
          ].map((v, i) => (
            <div key={i} className="text-center p-8">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
              <p className="text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* GDPR Compliance */}
      <Section className="bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-emerald-400 mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">Commitment to Data Privacy</h2>
          <p className="text-xl text-slate-400 mb-10">
            As a UK-based company, we take GDPR and the Data Protection Act 2018 extremely seriously. Your data security is not just a service—it's our responsibility.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>ISO 27001 Aligned</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Cyber Essentials Certified</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutUs;
