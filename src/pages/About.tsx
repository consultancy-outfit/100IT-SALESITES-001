import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  History, 
  Award, 
  ShieldCheck, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 blur-3xl rounded-full -mr-64"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Your Local IT Partner with <span className="text-brand-400">Global Standards</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              Based in Eastbourne, we've spent over a decade helping British businesses navigate the complexities of modern technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600 mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide British SMEs with enterprise-grade IT solutions that are accessible, secure, and strategically aligned with their growth objectives. We aim to be the invisible engine behind our clients' success.
              </p>
            </div>
            <div className="p-12 bg-brand-600 rounded-[3rem] text-white">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-brand-100 leading-relaxed">
                To become the UK's most trusted managed IT services provider, recognized for our technical excellence, unwavering integrity, and commitment to local business communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/history/800/1000" 
                alt="Our History" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-brand-600">12+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years of <br />Excellence</div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
                <History className="w-4 h-4" />
                Our Journey
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">A Legacy of <span className="text-brand-600">Innovation</span></h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 2014 by a group of senior systems engineers, Walfinch Eastbourne began with a simple observation: small and medium-sized businesses in East Sussex were being underserved by traditional IT providers.
                </p>
                <p>
                  We saw a gap for a provider that could offer the technical depth of a global consultancy with the personal touch and responsiveness of a local partner.
                </p>
                <p>
                  Today, we support over 200 businesses across the UK, managing thousands of endpoints and securing millions of pounds worth of digital assets. While we've grown, our core philosophy remains unchanged: technology should serve people, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every decision we make.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                desc: "We don't settle for 'good enough'. We strive for technical perfection in every project and support ticket."
              },
              {
                icon: <HeartHandshake className="w-8 h-8" />,
                title: "Integrity",
                desc: "Transparent pricing, honest advice, and a commitment to doing what's right for the client, always."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Security",
                desc: "Security isn't an add-on; it's the foundation of everything we build and manage."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-[3rem] p-12 lg:p-20 border border-emerald-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Commitment to GDPR & Data Privacy</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  As a UK-based IT provider, we take data protection seriously. We are fully compliant with the UK GDPR and the Data Protection Act 2018. Our internal processes are audited regularly to ensure the highest standards of confidentiality and security.
                </p>
                <div className="space-y-4">
                  {[
                    "ISO 27001 Aligned Processes",
                    "Cyber Essentials Plus Certified",
                    "Regular Staff Security Training",
                    "Encrypted Data Handling Protocols"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center p-8">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/GDPR_Logo.svg/1200px-GDPR_Logo.svg.png" 
                    alt="GDPR Compliant" 
                    className="w-full h-auto grayscale opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
