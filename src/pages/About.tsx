import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

const values = [
  {
    title: 'Integrity',
    description: 'We operate with absolute transparency in our pricing, advice, and service delivery.',
    icon: Heart,
  },
  {
    title: 'Excellence',
    description: 'We strive for technical perfection in every project, no matter the scale.',
    icon: Target,
  },
  {
    title: 'Security First',
    description: 'Security is not an add-on; it is the foundation of everything we build.',
    icon: Shield,
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-8 leading-tight">
                Empowering the UK's <span className="text-indigo-600">Digital Backbone</span>
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Founded with a vision to bridge the gap between enterprise-grade technology and the British SME market, Assure IT has grown into a leading provider of managed IT services.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Based in Luton, we serve a diverse range of industries, providing the technical expertise and proactive support necessary for businesses to thrive in an increasingly digital world.
              </p>
            </motion.div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="modern-it-about.png"
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h2>
              <p className="text-zinc-600 leading-relaxed">
                To provide reliable, secure, and innovative IT solutions that enable our clients to achieve their business objectives with confidence and efficiency.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Vision</h2>
              <p className="text-zinc-600 leading-relaxed">
                To be the most trusted IT partner for SMEs across the United Kingdom, recognised for our technical excellence and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Core Values</h2>
            <p className="text-zinc-600">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center p-8">
                <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{value.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-indigo-400 mx-auto mb-8" />
            <h2 className="text-3xl font-bold mb-6">Commitment to GDPR & Privacy</h2>
            <p className="text-indigo-100 text-lg leading-relaxed mb-8">
              At Assure IT, we understand that data is your most valuable asset. We are fully committed to GDPR compliance, ensuring that all systems we manage adhere to the highest standards of data protection and privacy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                <span className="text-sm">ISO 27001 Aligned</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                <span className="text-sm">Cyber Essentials Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                <span className="text-sm">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Leadership</h2>
            <p className="text-zinc-600">Expertise driven by decades of industry experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'James Thompson', role: 'Chief Executive Officer', bio: '20+ years in IT infrastructure and strategic management.' },
              { name: 'Eleanor Rigby', role: 'Chief Technical Officer', bio: 'Expert in cybersecurity and cloud architecture.' },
              { name: 'Robert Wilson', role: 'Head of Client Success', bio: 'Dedicated to ensuring our clients receive world-class support.' }
            ].map((leader, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 mb-6">
                  <img 
                    src={`https://i.pravatar.cc/400?u=${leader.name}`}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{leader.name}</h3>
                <p className="text-indigo-600 text-sm font-medium mb-3">{leader.role}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
