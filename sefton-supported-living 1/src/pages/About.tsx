import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Users, Award, Lock } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Sefton Supported Living
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building resilient digital futures for UK organisations through integrity, innovation, and technical excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-2xl border border-blue-100"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-700 leading-relaxed">
                To empower British businesses with enterprise-grade IT solutions that are secure, scalable, and simple to manage. We strive to remove the complexity from technology, allowing our clients to focus on their core objectives while we handle the digital infrastructure.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-700 leading-relaxed">
                To be the UK's most trusted IT partner for regulated and high-compliance sectors. We envision a digital landscape where security and efficiency go hand-in-hand, fostering a safer and more productive environment for all organisations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg text-slate-600 mx-auto">
            <p className="mb-6">
              Founded in the North West of England, Sefton Supported Living began with a distinct focus: providing robust, fail-safe IT systems for the care and supported living sector—an industry where downtime isn't just an inconvenience, but a critical risk.
            </p>
            <p className="mb-6">
              Our early success in this high-stakes environment taught us the value of absolute reliability, rigorous data protection, and 24/7 responsiveness. As word of our meticulous approach spread, we began receiving enquiries from law firms, financial consultancies, and logistics companies facing similar challenges: the need for unshakeable security and compliance.
            </p>
            <p>
              Today, we have evolved into a full-service IT consultancy serving a diverse range of UK industries. While our portfolio has expanded, our core philosophy remains rooted in that original commitment: treating every client's data and infrastructure with the care and precision of a critical service.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Meet The Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Managing Director',
                bio: 'With over 15 years in enterprise IT architecture, Sarah leads our strategic direction with a focus on sustainable growth and client partnership.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
              },
              {
                name: 'David O\'Connor',
                role: 'Technical Director',
                bio: 'A certified CISSP and cloud architect, David oversees all technical operations, ensuring our solutions remain at the cutting edge of security.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
              },
              {
                name: 'Elena Rostova',
                role: 'Head of Operations',
                bio: 'Elena ensures our service delivery is seamless, managing our UK-based support teams and maintaining our ISO 9001 quality standards.',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80'
              }
            ].map((leader, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100"
              >
                <img src={leader.image} alt={leader.name} className="w-full h-64 object-cover object-top" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-blue-600 rounded-full mb-8">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Our Commitment to GDPR & Data Privacy</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            We understand that data privacy is paramount. As a UK-based entity, we are fully compliant with the Data Protection Act 2018 and UK GDPR. We design all our systems with 'Privacy by Design' principles, ensuring your data—and your customers' data—remains sovereign, secure, and strictly controlled.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-sm font-medium">ICO Registered</span>
            <span className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-sm font-medium">Cyber Essentials Plus</span>
            <span className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-sm font-medium">ISO 27001 Aligned</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
