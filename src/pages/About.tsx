import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Briefcase,
  Award,
} from "lucide-react";
import { COMPANY_DETAILS } from "../constants";

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative py-24 bg-stone-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-6"
            >
              Our Story & <span className="text-orange-500">Mission</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-stone-400 leading-relaxed"
            >
              Founded in the heart of the North West, Greater Manchester IT
              Services was born from a simple observation: British SMEs deserve
              better technology partners.
            </motion.p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Mission/Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 z-20">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-stone-100 z-20"
          >
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              To empower UK businesses by providing innovative, secure, and
              reliable IT solutions that drive growth, efficiency, and
              competitive advantage in an ever-evolving digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-stone-100 z-20"
          >
            <div className="w-14 h-14 bg-stone-50 text-stone-900 rounded-2xl flex items-center justify-center mb-8">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              To be the most trusted and respected IT service provider in the
              UK, known for our technical excellence, unwavering integrity, and
              commitment to our clients' long-term success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em]">
            Our DNA
          </h2>
          <p className="text-4xl font-bold text-stone-900 mt-4">Core Values</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <ShieldCheck size={24} />,
              title: "Integrity",
              desc: "Honest advice, even if it means a smaller sale. We do what's right for you.",
            },
            {
              icon: <Users size={24} />,
              title: "Collaboration",
              desc: "We act as an extension of your team, not just a third-party vendor.",
            },
            {
              icon: <Award size={24} />,
              title: "Excellence",
              desc: "We strive for technical perfection in every deployment and support ticket.",
            },
            {
              icon: <Heart size={24} />,
              title: "Empathy",
              desc: "We understand the stress of IT issues and respond with care and urgency.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="text-orange-600 mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-stone-50 py-24 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em]">
                Our Team
              </h2>
              <p className="text-4xl font-bold text-stone-900">
                Leadership Profiles
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Michael Carter",
                role: "Founder & CEO",
                bio: "20+ years in enterprise IT architecture. Passionate about SME growth.",
                image:
                  "https://images.unsplash.com/photo-1718900109613-457f76a456b2?fm=jpg&q=80&w=900&auto=format&fit=crop",
              },
              {
                name: "Jason Brooks",
                role: "Head of Operations",
                bio: "Expert in service delivery and client relationship management.",
                image:
                  "https://images.unsplash.com/photo-1618568949779-895d81686151?fm=jpg&q=80&w=900&auto=format&fit=crop",
              },
              {
                name: "Anthony Reed",
                role: "Chief Security Officer",
                bio: "Certified Ethical Hacker with a focus on UK compliance standards.",
                image:
                  "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?fm=jpg&q=80&w=900&auto=format&fit=crop",
              },
            ].map((leader, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                <p className="text-orange-600 font-semibold mb-4">
                  {leader.role}
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-stone-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/3 space-y-8">
            <h2 className="text-4xl font-bold">
              Commitment to{" "}
              <span className="text-orange-500">GDPR Compliance</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed">
              As a UK-based company, we take data protection seriously. We are
              fully committed to the UK GDPR and the Data Protection Act 2018.
              All our processes, from data storage to remote support, are
              designed with privacy and security at their core.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-stone-800 px-6 py-3 rounded-full text-sm font-bold border border-stone-700">
                ICO Registered
              </div>
              <div className="bg-stone-800 px-6 py-3 rounded-full text-sm font-bold border border-stone-700">
                Cyber Essentials Plus
              </div>
              <div className="bg-stone-800 px-6 py-3 rounded-full text-sm font-bold border border-stone-700">
                ISO 27001 Aligned
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-48 h-48 bg-orange-600/20 rounded-full flex items-center justify-center border border-orange-500/30 relative">
              <ShieldCheck size={80} className="text-orange-500" />
              <div className="absolute inset-0 animate-pulse bg-orange-500/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
