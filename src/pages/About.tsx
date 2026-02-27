import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

const values = [
  {
    title: "Integrity",
    description: "We believe in honest, transparent communication with our clients and partners.",
    icon: ShieldCheck
  },
  {
    title: "Innovation",
    description: "Constantly exploring new technologies to provide the best solutions for our clients.",
    icon: Target
  },
  {
    title: "Excellence",
    description: "We strive for perfection in every project, no matter the size or complexity.",
    icon: Award
  },
  {
    title: "Client-Centric",
    description: "Your business goals are our priority. We build solutions that work for you.",
    icon: Heart
  }
];

const team = [
  {
    name: "James Harrison",
    role: "Managing Director",
    bio: "With over 20 years of experience in the UK IT sector, James leads our strategic vision.",
    image: "https://i.pravatar.cc/150?u=james"
  },
  {
    name: "Eleanor Wright",
    role: "Technical Director",
    bio: "A specialist in cloud architecture and cybersecurity, Eleanor ensures our technical excellence.",
    image: "https://i.pravatar.cc/150?u=eleanor"
  },
  {
    name: "Robert Smith",
    role: "Head of Support",
    bio: "Robert manages our Winchester-based support team, ensuring fast and effective resolutions.",
    image: "https://i.pravatar.cc/150?u=robert"
  }
];

export const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.indigo.500/0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              Pioneering IT Excellence in <span className="text-indigo-400">Hampshire.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Founded with a mission to bridge the gap between complex technology and business success, Supremacy Care IT has grown into a leading provider of managed services across the UK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                <Target className="text-indigo-600 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Our Mission</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                To empower British businesses by providing reliable, secure, and innovative IT solutions that drive growth and operational efficiency. We aim to be the most trusted technology partner in the South of England.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                <Eye className="text-emerald-600 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Our Vision</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                To create a future where technology is a seamless enabler for every business, regardless of size. We envision a digital landscape where security and performance are accessible to all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/winchester/800/1000"
                alt="Winchester Office"
                className="rounded-3xl shadow-2xl border border-zinc-200"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 hidden lg:block">
                <div className="flex items-center space-x-4">
                  <History className="text-indigo-600 w-8 h-8" />
                  <div>
                    <p className="text-2xl font-bold text-zinc-900">Est. 2012</p>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Over a decade of service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 lg:mt-0">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our Story</h2>
              <h3 className="text-4xl font-bold text-zinc-900 tracking-tight mb-8">A decade of British IT innovation.</h3>
              <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
                <p>
                  Supremacy Care IT started in a small office in Winchester with a simple idea: that IT support should be about people, not just machines. Our founders saw that many businesses were struggling with technology that was supposed to help them.
                </p>
                <p>
                  Over the last 12 years, we have expanded our team and our expertise, but our core philosophy remains the same. We pride ourselves on our deep understanding of the UK business environment and our commitment to local service.
                </p>
                <p>
                  Today, we support hundreds of clients across various sectors, from logistics to professional services, helping them navigate the complexities of the modern digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">Our Core Values</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">The principles that guide everything we do, from daily support to long-term strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl border border-zinc-100 bg-white shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-indigo-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{value.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">Our Leadership</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">Meet the experts behind our success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                <p className="text-zinc-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-3xl p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Our Commitment to GDPR & Compliance</h2>
              <p className="text-lg text-indigo-100 leading-relaxed mb-8">
                As a UK-based company, we take data protection seriously. We are fully committed to GDPR compliance and help our clients achieve the same level of security and transparency.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Data Encryption', 'Regular Audits', 'Privacy by Design', 'Secure Storage'].map(item => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-300" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                <ShieldCheck className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
