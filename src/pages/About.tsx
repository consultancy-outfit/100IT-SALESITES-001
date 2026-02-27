import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Empowering Care Through <span className="text-brand-accent">Technology</span>.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Worksop Supported Living Service was founded on the belief that technology should be an enabler, not a barrier, for those providing essential care and services in the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Started in the heart of Nottinghamshire, we noticed a significant gap in the IT market: care providers were being served by generalist IT firms who didn't understand the unique regulatory and operational pressures of the supported living sector.
                </p>
                <p>
                  We pivoted our expertise to focus exclusively on this niche, combining deep technical knowledge with a genuine understanding of the CQC (Care Quality Commission) requirements and GDPR data protection standards.
                </p>
                <p>
                  Today, we support dozens of organizations across the UK, from small independent care homes to large regional supported living providers, ensuring their digital infrastructure is secure, compliant, and efficient.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/team1/400/500" alt="Team" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/team2/400/500" alt="Office" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <Target className="w-12 h-12 text-brand-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide world-class, secure, and reliable IT solutions that allow care providers to focus on what they do best: delivering exceptional support to their clients.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <Eye className="w-12 h-12 text-brand-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the UK's leading technology partner for the supported living sector, recognized for our integrity, expertise, and commitment to social value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Integrity First', desc: 'We are transparent about costs, risks, and capabilities. We never oversell.' },
              { icon: Heart, title: 'Care-Centric', desc: 'We understand the impact of our work on vulnerable individuals and act accordingly.' },
              { icon: CheckCircle2, title: 'Excellence', desc: 'We strive for NHS-grade standards in every network we build and every server we secure.' }
            ].map((v, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-brand-accent mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Commitment to GDPR & Compliance</h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Data protection isn't just a legal requirement; it's a moral one. We implement rigorous security protocols, regular audits, and staff training to ensure that every byte of sensitive data is protected against evolving threats.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <span className="font-bold">Cyber Essentials Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <span className="font-bold">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <span className="font-bold">ICO Registered</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
