import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, Heart, ShieldCheck, Award, Users, Briefcase } from 'lucide-react';

const values = [
  {
    icon: <ShieldCheck className="text-brand-600" />,
    title: "Integrity First",
    desc: "We provide honest, transparent advice. If you don't need a service, we won't sell it to you."
  },
  {
    icon: <Award className="text-brand-600" />,
    title: "Excellence",
    desc: "We strive for technical perfection in every project, from simple support tickets to complex migrations."
  },
  {
    icon: <Users className="text-brand-600" />,
    title: "Client-Centric",
    desc: "Your success is our success. We build long-term partnerships based on trust and results."
  },
  {
    icon: <Briefcase className="text-brand-600" />,
    title: "Professionalism",
    desc: "We maintain the highest standards of professional conduct and technical expertise."
  }
];

const team = [
  {
    name: "James Jackson",
    role: "Founder & Managing Director",
    bio: "With over 20 years in UK IT consultancy, James founded Jackson Gardens to bring enterprise-level IT to SMEs.",
    image: "https://picsum.photos/seed/leader1/400/400"
  },
  {
    name: "Eleanor Wright",
    role: "Technical Director",
    bio: "A cybersecurity specialist with a background in government-level infrastructure and data protection.",
    image: "https://picsum.photos/seed/leader2/400/400"
  },
  {
    name: "Robert Chen",
    role: "Head of Cloud Services",
    bio: "Expert in AWS and Azure migrations, Robert leads our cloud strategy and infrastructure team.",
    image: "https://picsum.photos/seed/leader3/400/400"
  }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-7xl mb-8">Crafting the Future of <span className="text-brand-600">British IT</span>.</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Jackson Gardens was founded on a simple principle: that every British business deserves access to world-class technology and expert support, regardless of their size.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-bl-[200px]"></div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-brand-600 text-white space-y-6 shadow-2xl shadow-brand-500/20"
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-brand-100 text-lg leading-relaxed">
                To empower UK businesses by providing innovative, secure, and reliable IT solutions that drive growth, efficiency, and competitive advantage in a global market.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-slate-900 text-white space-y-6 shadow-2xl shadow-slate-900/20"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Eye size={24} />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the UK's most trusted IT partner, known for our technical excellence, unwavering integrity, and commitment to the success of our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <img src="https://picsum.photos/seed/office-team/800/1000" alt="Our Team" className="rounded-[40px] shadow-2xl" referrerPolicy="no-referrer" />
                <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-brand-600 mb-1">15+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 text-brand-600 font-bold uppercase tracking-widest text-sm">
                <History size={18} /> Our Story
              </div>
              <h2 className="text-3xl md:text-5xl">From a Small London Office to a National IT Leader</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Jackson Gardens began in 2010 with a team of three engineers in a small office in Shoreditch. We saw that many SMEs were being underserved by large, impersonal IT providers and overcharged for basic services.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We decided to do things differently. By focusing on building real relationships and providing proactive, strategic advice, we quickly grew. Today, we support hundreds of businesses across the UK, from London to Edinburgh, but our core values remain exactly the same.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <Heart size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Built on Trust</h4>
                  <p className="text-slate-500">98% client retention rate over the last decade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide every decision we make and every interaction we have with our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">Meet Our Leadership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A team of dedicated professionals with decades of combined experience in the UK technology sector.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative mb-6 rounded-[32px] overflow-hidden aspect-square">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-brand-600 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold uppercase tracking-widest">
              <ShieldCheck size={18} /> GDPR & Data Protection
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Our Commitment to Your Data</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              As a UK-based IT provider, we take data protection and GDPR compliance extremely seriously. We are registered with the Information Commissioner's Office (ICO) and implement industry-leading security protocols to ensure your data—and your clients' data—is always protected.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-brand-400 mb-2">ICO</div>
                <p className="text-sm text-slate-400">Fully Registered & Compliant</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-brand-400 mb-2">ISO 27001</div>
                <p className="text-sm text-slate-400">Aligned Security Standards</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-brand-400 mb-2">100%</div>
                <p className="text-sm text-slate-400">UK-Based Data Processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
