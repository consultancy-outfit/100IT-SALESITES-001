import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Award, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 tracking-tight"
            >
              The <span className="text-indigo-600">Oaklands</span> Story
            </motion.h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Founded in London, Oaklands Respite was born from a simple observation: British SMEs were being underserved by generic, overseas IT providers. We set out to build a local partner that combines enterprise-grade expertise with a personal, UK-focused approach.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900">Our Mission</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                To empower UK businesses through innovative, reliable, and secure technology solutions that drive growth and operational excellence. We strive to be the most trusted IT partner in the country, known for our integrity and technical brilliance.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                <Eye size={24} />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900">Our Vision</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                To define the standard for IT services in the digital age, creating a future where technology is a seamless enabler for every British entrepreneur and established enterprise alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">The principles that guide every decision we make and every service we deliver.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: 'Integrity First', desc: 'We operate with absolute transparency and honesty in all our client relationships.' },
              { icon: Award, title: 'Excellence', desc: 'We never settle for "good enough". We strive for technical and service perfection.' },
              { icon: Heart, title: 'Client Centric', desc: 'Your success is our success. We listen, adapt, and deliver what you truly need.' },
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center text-indigo-400">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 tracking-tight mb-4">Our Leadership</h2>
            <p className="text-lg text-zinc-600">Meet the experts driving our technical vision forward.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'James Oaklands', role: 'Managing Director', bio: 'With 20 years in UK tech, James leads our strategic direction and client relations.' },
              { name: 'Dr. Emily Chen', role: 'Chief Technology Officer', bio: 'A cybersecurity specialist with a PhD in Network Security, Emily oversees our technical architecture.' },
              { name: 'Robert Smith', role: 'Head of Managed Services', bio: 'Robert ensures our support teams deliver the rapid, high-quality service our clients expect.' },
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 mb-6">
                  <img src={`https://picsum.photos/seed/leader${i}/600/750`} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{leader.name}</h3>
                <p className="text-indigo-600 font-medium mb-4">{leader.role}</p>
                <p className="text-zinc-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-indigo-600 font-bold mb-6">
            <ShieldCheck size={24} />
            <span className="uppercase tracking-widest text-sm">GDPR Compliance</span>
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Your Data, Protected by British Standards</h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            At Oaklands Respite, we take data protection seriously. We are fully committed to GDPR compliance and hold ourselves to the highest security standards. All our staff undergo regular data protection training, and our systems are audited annually to ensure your information remains secure.
          </p>
          <div className="flex justify-center space-x-8 grayscale opacity-50">
            <div className="font-bold text-zinc-900">Cyber Essentials Plus</div>
            <div className="font-bold text-zinc-900">ISO 27001 Certified</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
