import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Heart, Users, Award, Check } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            About SeeAbility IT
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to simplifying IT for British businesses.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-teal-50 p-10 rounded-2xl border border-teal-100"
            >
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                To empower UK organizations with resilient, secure, and scalable technology solutions that drive productivity and foster innovation, removing the complexity from IT management.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-2xl border border-slate-100"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white mb-6">
                <Heart size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                To be the most trusted IT partner in the South of England, known for our integrity, technical excellence, and unwavering commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg prose-slate mx-auto text-slate-600">
            <p>
              Founded in Oxfordshire, SeeAbility Oxfordshire South Support Service began with a simple observation: too many local businesses were being held back by outdated, insecure technology and impersonal support.
            </p>
            <p>
              What started as a small consultancy has grown into a full-service IT provider. Despite our growth, we have maintained our "local partner" ethos. We don't just fix computers; we understand the unique challenges of operating in the UK market—from navigating GDPR complexities to ensuring business continuity during uncertain times.
            </p>
            <p>
              Today, we support clients across the South East and beyond, ranging from healthcare providers to financial institutions, all united by a need for reliable, professional IT support.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Meet The Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Eleanor Sterling',
                role: 'Managing Director',
                bio: 'With 15 years in enterprise IT, Eleanor leads our strategic direction with a focus on client satisfaction.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Marcus Thorne',
                role: 'Technical Director',
                bio: 'A certified cloud architect and security specialist ensuring our solutions are technically sound.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                name: 'Sarah Jenkins',
                role: 'Head of Operations',
                bio: 'Sarah ensures our service delivery is seamless, efficient, and always on time.',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-teal-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We offer honest advice, not just what sells.' },
              { title: 'Excellence', desc: 'We aim for perfection in every line of code and cable laid.' },
              { title: 'Security', desc: 'We prioritize the safety of your data above all else.' },
              { title: 'Partnership', desc: 'We succeed when our clients succeed.' }
            ].map((value, i) => (
              <div key={i} className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700">
                <Award className="w-10 h-10 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-green-50 rounded-full mb-6">
            <ShieldCheck className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment to GDPR</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Data privacy is not just a legal requirement for us; it is a fundamental right. We operate with strict adherence to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. All our processes, from data storage to processing, are designed with privacy by design principles.
          </p>
          <div className="flex justify-center space-x-4 text-sm font-medium text-slate-500">
            <span className="flex items-center"><Check className="w-4 h-4 mr-1 text-green-500" /> ICO Registered</span>
            <span className="flex items-center"><Check className="w-4 h-4 mr-1 text-green-500" /> Cyber Essentials Plus</span>
          </div>
        </div>
      </section>
    </div>
  );
}
