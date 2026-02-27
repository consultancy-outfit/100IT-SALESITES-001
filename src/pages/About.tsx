import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#0ea5e9,transparent_50%)]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6">Our Story</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Founded in Middlesbrough, Support Health Care was born from a vision to bridge the gap between complex technology and the critical needs of the healthcare sector.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-accent w-6 h-6" />
              </div>
              <h2 className="text-3xl mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To provide reliable, secure, and innovative IT solutions that empower UK organisations to focus on what they do best—delivering exceptional care and services to their communities.
              </p>
            </div>
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-emerald-600 w-6 h-6" />
              </div>
              <h2 className="text-3xl mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be the UK's most trusted technology partner for healthcare providers, recognised for our integrity, technical excellence, and commitment to patient data security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <p className="text-slate-500">The principles that guide every decision we make.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "We act with honesty and transparency in all our client relationships." },
              { icon: Heart, title: "Care", desc: "We understand the critical nature of healthcare IT and treat every issue with urgency." },
              { icon: CheckCircle2, title: "Excellence", desc: "We strive for technical perfection and continuous improvement." },
              { icon: Shield, title: "Security", desc: "Data protection is at the heart of everything we build and maintain." }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-accent w-8 h-8" />
                </div>
                <h3 className="text-xl mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our Leadership</h2>
            <p className="text-slate-500">Meet the experts driving our technical strategy.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Robert Harrison", role: "Managing Director", image: "https://picsum.photos/seed/leader1/400/400" },
              { name: "Dr. Emily Thorne", role: "Chief Technology Officer", image: "https://picsum.photos/seed/leader2/400/400" },
              { name: "Mark Sutherland", role: "Head of Operations", image: "https://picsum.photos/seed/leader3/400/400" }
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-slate-500">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="section-padding bg-emerald-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-emerald-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Shield className="text-emerald-600 w-6 h-6" />
              </div>
              <h2 className="text-3xl">GDPR & Compliance Commitment</h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At Support Health Care Middlesbrough, we take data protection seriously. As a UK-based company, we are fully committed to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Regular security audits and vulnerability assessments.",
                "Staff training on data handling and privacy protocols.",
                "Implementation of NHS-grade encryption standards.",
                "Strict access controls and data minimisation practices."
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-1" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-400 italic">
              Our processes are designed to ensure your organisation remains compliant while benefiting from modern technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
