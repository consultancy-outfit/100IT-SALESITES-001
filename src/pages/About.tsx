import { motion } from 'motion/react';
import { Target, Eye, History, Users, Heart, ShieldCheck, Award, Globe } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Integrity', description: 'Honest advice and transparent pricing in every interaction.' },
  { icon: ShieldCheck, title: 'Security First', description: 'Protecting your data is at the core of everything we build.' },
  { icon: Award, title: 'Excellence', description: 'Striving for the highest standards in technical delivery.' },
  { icon: Globe, title: 'Sustainability', description: 'Promoting energy-efficient IT infrastructure solutions.' },
];

const leaders = [
  { name: 'David Sylvian', role: 'Founder & CEO', image: 'https://i.pravatar.cc/300?u=david' },
  { name: 'Sarah Newbury', role: 'Technical Director', image: 'https://i.pravatar.cc/300?u=sarah' },
  { name: 'Michael Chen', role: 'Head of Cybersecurity', image: 'https://i.pravatar.cc/300?u=michael' },
];

export default function About() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Our Story. <br /><span className="text-indigo-600">Our Mission.</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in the heart of the UK, Sylvian Care Newbury started with a simple vision: to make enterprise-grade IT accessible to businesses of all sizes.
            </p>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/team/800/600" className="rounded-3xl shadow-2xl" alt="Our Team" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <p className="text-4xl font-bold text-indigo-600">15+</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm space-y-6 border border-slate-100">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To empower British organisations by providing innovative, secure, and reliable technology solutions that drive sustainable growth and operational efficiency.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm space-y-6 border border-slate-100">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              To be the UK's most trusted IT partner, recognised for our technical expertise, human-centric approach, and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <p className="text-slate-600">The principles that guide every decision we make.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <v.icon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold">{v.title}</h3>
              <p className="text-slate-600 text-sm">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slate-900 py-32 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Meet Our Leadership</h2>
              <p className="text-slate-400">The experts driving our technical strategy.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {leaders.map((l, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="space-y-6 group"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={l.image} alt={l.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{l.name}</h3>
                  <p className="text-indigo-400 font-medium">{l.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="max-w-4xl mx-auto py-32 px-6">
        <div className="bg-indigo-50 p-12 rounded-[2.5rem] border border-indigo-100 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-sm">
            <ShieldCheck className="w-12 h-12 text-indigo-600" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">GDPR & Data Compliance</h2>
            <p className="text-slate-600 leading-relaxed">
              As a UK-based company, we take data protection seriously. We are fully committed to GDPR compliance and ensure that all IT solutions we implement for our clients adhere to the strictest security standards. Your data privacy is our top priority.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
