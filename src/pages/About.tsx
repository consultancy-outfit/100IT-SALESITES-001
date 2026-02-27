import { motion } from 'motion/react';
import { Shield, Target, Eye, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Integrity",
      description: "We operate with absolute transparency and honesty in every interaction.",
      icon: Shield
    },
    {
      title: "Innovation",
      description: "Constantly exploring new technologies to give our clients a competitive edge.",
      icon: Target
    },
    {
      title: "Excellence",
      description: "Committed to the highest standards of technical delivery and customer service.",
      icon: Award
    },
    {
      title: "Reliability",
      description: "Being there when it matters most, with systems that simply work.",
      icon: Eye
    }
  ];

  const leadership = [
    {
      name: "Edward Wickham",
      role: "Founder & Managing Director",
      bio: "With over 20 years in UK enterprise IT, Edward founded Wickham Hall to bring high-end consultancy to British SMEs.",
      image: "https://picsum.photos/seed/leader1/400/400"
    },
    {
      name: "Victoria Hall",
      role: "Technical Director",
      bio: "A cybersecurity expert and former lead architect for major UK financial institutions.",
      image: "https://picsum.photos/seed/leader2/400/400"
    },
    {
      name: "James Sterling",
      role: "Head of Operations",
      bio: "Specialises in service delivery and ensuring our UK-wide support network operates at peak efficiency.",
      image: "https://picsum.photos/seed/leader3/400/400"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8"
            >
              Our Story: Technology <span className="text-indigo-600">Built on Trust.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Founded in the heart of Hertfordshire, Wickham Hall was established with a single mission: to provide British businesses with the enterprise-grade IT support they deserve.
            </motion.p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-indigo-600/5 hidden lg:block"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-slate-900 p-12 rounded-[2rem] text-white">
              <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                To empower UK organisations by delivering innovative, secure, and reliable technology solutions that drive sustainable growth and operational excellence.
              </p>
              <div className="space-y-4">
                {["Client-First Approach", "Uncompromising Security", "Continuous Improvement"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-indigo-400 w-5 h-5" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-indigo-600 p-12 rounded-[2rem] text-white">
              <h2 className="text-3xl font-display font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-indigo-100 leading-relaxed mb-8">
                To be the most trusted IT partner for British businesses, recognised for our technical brilliance, strategic insight, and unwavering commitment to our clients' success.
              </p>
              <div className="space-y-4">
                {["Innovation Leader", "UK Tech Champion", "Trusted Strategic Partner"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-white w-5 h-5" />
                    <span className="text-indigo-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                  <v.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Our Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leadership.map((person, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{person.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{person.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-indigo-400 mx-auto mb-8" />
          <h2 className="text-3xl font-display font-bold mb-6">Our Commitment to GDPR & Compliance</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            As a UK-based organisation, we take data protection seriously. We are fully compliant with the UK GDPR and Data Protection Act 2018. Our internal processes are ISO 27001 certified, ensuring that your data—and your clients' data—is handled with the highest level of security and care.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="bg-slate-800 px-6 py-3 rounded-lg border border-slate-700">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Certified</span>
              <p className="font-bold">ISO 27001</p>
            </div>
            <div className="bg-slate-800 px-6 py-3 rounded-lg border border-slate-700">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Compliant</span>
              <p className="font-bold">UK GDPR</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
