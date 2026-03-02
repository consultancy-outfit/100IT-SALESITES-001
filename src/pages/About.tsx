import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, Heart, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-extrabold mb-6"
          >
            Our Story & Mission
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-indigo-100 max-w-3xl mx-auto"
          >
            A dedicated team of UK technology experts committed to delivering excellence and integrity in every project.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower UK businesses by providing reliable, secure, and innovative IT solutions that remove technical barriers to growth and foster long-term success.
              </p>
            </div>
            <div className="bg-gray-900 p-12 rounded-[3rem] text-white">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                To be the most trusted technology partner for SMEs across the United Kingdom, recognised for our technical brilliance, ethical approach, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative mb-12 lg:mb-0">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Our Team" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-50"></div>
            </div>
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-indigo-600 font-bold uppercase tracking-widest text-sm">
                <History className="h-5 w-5" />
                <span>Established Excellence</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Built on Trust and Technical Rigour</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a simple goal—to bring enterprise-level IT support to the businesses that form the backbone of the UK economy. We saw too many SMEs struggling with unreliable systems and opaque pricing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, St Anne's IT stands as a beacon of reliability. We've grown from a small local support desk to a comprehensive managed services provider, serving clients from London to Leeds and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Heart, title: 'Integrity', desc: 'We do what is right for the client, always. No hidden costs, no unnecessary upsells.' },
              { icon: ShieldCheck, title: 'Security', desc: 'In a digital world, security is not an option—it is the foundation of everything we do.' },
              { icon: Users, title: 'Partnership', desc: 'We don\'t just work for you; we work with you as an extension of your own team.' }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6 p-8">
                <div className="inline-flex w-20 h-20 bg-indigo-50 rounded-full items-center justify-center text-indigo-600 mb-4">
                  <value.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="h-16 w-16 text-indigo-500 mx-auto mb-8" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Commitment to GDPR & Privacy</h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            As a UK-based company, we take data protection seriously. We are fully committed to GDPR compliance, ensuring that both our internal processes and the solutions we provide for our clients meet the highest standards of data security and privacy.
          </p>
          <div className="inline-block px-6 py-2 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium">
            ICO Registered & Compliant
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
