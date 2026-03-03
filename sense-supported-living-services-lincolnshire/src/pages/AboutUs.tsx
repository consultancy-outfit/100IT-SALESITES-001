import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  History, 
  Heart, 
  ShieldCheck, 
  Award,
  Users2
} from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-bold text-slate-900 mb-6"
            >
              British Heritage, <span className="text-emerald-600">Compassionate Care.</span>
            </motion.h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Based in the heart of Lincolnshire, Sense supported living services Lincolnshire has been a trusted partner for the community for over a decade. We bridge the gap between professional care and modern technology.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-600 fill-current">
            <path d="M0 0 L100 0 L100 100 Z" />
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 bg-emerald-600 rounded-3xl text-white">
              <Target className="mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-emerald-100 text-lg leading-relaxed">
                To empower the Lincolnshire community with professional supported living and technology solutions that drive quality of life, ensure security, and foster sustainable growth.
              </p>
            </div>
            <div className="p-10 bg-slate-900 rounded-3xl text-white">
              <Eye className="mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the UK's most respected supported living and technology provider, known for our excellence, unwavering integrity, and commitment to local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-2 text-emerald-600 font-bold mb-4">
                <History size={20} />
                <span className="uppercase tracking-widest text-sm">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">A Decade of Excellence in Lincolnshire</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2014, Sense supported living services Lincolnshire started with a simple goal: to provide the Lincolnshire community with the highest standard of care and support.
                </p>
                <p>
                  What began as a small local initiative in Lincoln has grown into a comprehensive service provider serving clients across the East Midlands. We've navigated the evolving landscape of social care and technology alongside our clients.
                </p>
                <p>
                  Today, we support numerous individuals and protect their well-being with modern solutions, but our core philosophy remains the same: care is about people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="text-red-500" />, title: "Integrity", desc: "We do what's right for the client, always." },
              { icon: <ShieldCheck className="text-emerald-500" />, title: "Security First", desc: "Protection is baked into every solution we build." },
              { icon: <Award className="text-amber-500" />, title: "Excellence", desc: "We never settle for 'good enough' in our technical standards." },
              { icon: <Users2 className="text-emerald-500" />, title: "Partnership", desc: "We succeed only when our clients succeed." }
            ].map((v, i) => (
              <div key={i} className="text-center p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {v.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="mx-auto mb-6 text-emerald-400" size={64} />
            <h2 className="text-3xl font-bold mb-6">Our Commitment to GDPR</h2>
            <p className="text-emerald-100 text-lg leading-relaxed mb-8">
              Data privacy isn't just a legal requirement; it's a fundamental right. Sense supported living services Lincolnshire is fully committed to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We implement rigorous technical and organisational measures to ensure all personal data we process—and the data we manage for our clients—is handled with the highest level of security and transparency.
            </p>
            <div className="inline-flex items-center space-x-4 px-6 py-3 bg-white/10 rounded-full text-sm font-semibold">
              <span>ICO Registered</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>Cyber Essentials Certified</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>ISO 27001 Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-slate-600">The experts driving our technical vision.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Robert Harrison", role: "Chief Executive Officer", bio: "20+ years in enterprise IT strategy and business leadership." },
              { name: "Eleanor Vance", role: "Chief Technical Officer", bio: "Cybersecurity specialist and former lead architect for national infrastructure." },
              { name: "David Thorne", role: "Head of Managed Services", bio: "Operational excellence expert focused on client satisfaction and SLA delivery." }
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="aspect-square rounded-3xl bg-slate-100 mb-6 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1560250097-0b93528c311a',
                      '1573496359142-b8d87734a5a2',
                      '1519085360753-af0119f7cbe7'
                    ][i]}?auto=format&fit=crop&q=80&w=600`} 
                    alt={leader.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{leader.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
