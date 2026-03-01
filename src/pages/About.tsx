import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  History, 
  Heart, 
  ShieldCheck, 
  Award,
  Users2,
  CheckCircle2
} from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description: 'We believe in honest advice, even if it means recommending a simpler, cheaper solution.',
    icon: Heart,
  },
  {
    title: 'Excellence',
    description: 'We strive for perfection in every server we configure and every ticket we resolve.',
    icon: Award,
  },
  {
    title: 'Security First',
    description: 'In an era of cyber threats, security is never an afterthought; it is our foundation.',
    icon: ShieldCheck,
  },
  {
    title: 'Collaboration',
    description: 'We work as an extension of your team, not just an external vendor.',
    icon: Users2,
  },
];

const leadership = [
  {
    name: 'David Cornwall',
    role: 'Founder & CEO',
    bio: 'With over 20 years in enterprise IT, David founded Cornwall-Place to bring corporate-level technology to British SMEs.',
  },
  {
    name: 'Sarah Miller',
    role: 'Chief Technology Officer',
    bio: 'A cybersecurity specialist with a passion for cloud architecture and digital transformation.',
  },
  {
    name: 'Mark Thompson',
    role: 'Head of Client Success',
    bio: 'Mark ensures that every client receives the proactive support and strategic guidance they deserve.',
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="container-custom mb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-7xl mb-8">A Legacy of <span className="text-primary-600">Technical Excellence</span> in the UK.</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              Founded in London, Cornwall-Place was born from a simple observation: British businesses were being underserved by generic IT providers. We set out to build a company that combines deep technical mastery with a truly personal, local service.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white">
            <Target className="w-12 h-12 text-primary-400 mb-6" />
            <h3 className="text-2xl mb-4">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To empower UK businesses by providing secure, scalable, and strategic IT solutions that drive growth and operational excellence.
            </p>
          </div>
          <div className="bg-primary-600 rounded-[2.5rem] p-12 text-white">
            <Eye className="w-12 h-12 text-primary-200 mb-6" />
            <h3 className="text-2xl mb-4">Our Vision</h3>
            <p className="text-primary-100 text-lg leading-relaxed">
              To be the most trusted IT partner for British enterprises, known for our integrity, innovation, and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-primary-600 font-bold text-sm mb-6">
                <History className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl md:text-5xl mb-8">From a Small Office to a National Presence.</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Cornwall-Place started in 2012 with a team of three engineers and a vision to fix the "broken" IT support model. We saw too many businesses waiting days for critical fixes and paying for services they didn't need.
                </p>
                <p>
                  By focusing on proactive maintenance and strategic consultancy, we helped our first ten clients reduce their IT-related downtime by over 80%. Word spread, and today we support hundreds of businesses across the UK, from London to Edinburgh.
                </p>
                <p>
                  Despite our growth, we remain a privately-owned British company, committed to the same values that started it all: technical excellence and honest relationships.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img
                src="https://picsum.photos/seed/office/800/1000"
                alt="Our Office"
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                <div className="text-4xl font-display font-bold text-primary-600 mb-2">12+</div>
                <div className="text-slate-500 font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide every decision we make and every ticket we resolve.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl mb-4">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">Our Leadership</h2>
            <p className="text-lg text-slate-400">Led by industry veterans with a shared passion for British business success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leadership.map((person, idx) => (
              <div key={idx} className="group">
                <div className="aspect-[4/5] bg-slate-800 rounded-[2.5rem] mb-8 overflow-hidden relative">
                  <img
                    src={`https://picsum.photos/seed/person${idx}/600/800`}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl mb-2">{person.name}</h3>
                <div className="text-primary-400 font-bold mb-4 uppercase tracking-widest text-sm">{person.role}</div>
                <p className="text-slate-400 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-emerald-50 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <div className="w-24 h-24 bg-emerald-600 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
                <ShieldCheck className="w-12 h-12" />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl mb-6 text-emerald-900">Our Commitment to GDPR & Compliance</h2>
              <p className="text-lg text-emerald-800/80 mb-8 leading-relaxed">
                As a UK-based company, we take data protection seriously. We are fully GDPR compliant and help our clients achieve and maintain the highest standards of data security and privacy. Your data never leaves the UK unless explicitly required and secured.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'UK-Based Data Centres',
                  'Regular Compliance Audits',
                  'Data Processing Agreements',
                  'Cyber Essentials Certified',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-emerald-900 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
