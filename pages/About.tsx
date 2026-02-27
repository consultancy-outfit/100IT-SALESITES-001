import React from 'react';
import { Target, Eye, History, ShieldCheck, Heart, Users, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';
import { motion } from 'framer-motion';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Integrity',
      description: 'We operate with absolute transparency and honesty in every client interaction.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve, bringing the latest enterprise tech to local businesses.',
      icon: <Target className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Reliability',
      description: 'When things go wrong, we are there. No excuses, just solutions.',
      icon: <Heart className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Local Focus',
      description: 'We are proud to support the Essex business community and its growth.',
      icon: <Users className="w-6 h-6 text-emerald-600" />
    }
  ];

  const leadership = [
    {
      name: 'James Harrison',
      role: 'Technical Director',
      bio: 'With over 20 years in enterprise infrastructure, James leads our engineering team with a focus on security and scalability.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Sarah Miller',
      role: 'Operations Manager',
      bio: 'Sarah ensures our service delivery is seamless and our client satisfaction remains at the highest level.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
            >
              Our Story & <br /><span className="text-emerald-400 italic serif">Mission.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              Born in the heart of Essex, we've spent the last decade helping local businesses navigate the ever-changing digital landscape.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-8">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To provide UK small and medium enterprises with the same level of IT security, reliability, and strategic guidance usually reserved for global corporations. We believe that local businesses are the backbone of the UK economy and deserve world-class technical support.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-8">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be the leading IT partner in the South East, recognised for our technical excellence, unwavering integrity, and commitment to the success of our clients. We aim to build a future where technology is an accelerator for every business, not a hurdle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                className="rounded-3xl shadow-2xl"
                alt="Our Team"
              />
              <div className="absolute -bottom-10 -right-10 bg-emerald-500 p-12 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-slate-900 mb-2">10+</div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-900/70">Years of Growth</div>
              </div>
            </div>
            <div>
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">How We Started</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">A Decade of Technical Excellence.</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Thurrock Essex IT Solutions was founded in 2014 by a group of senior engineers who saw a gap in the market for high-quality, local IT support. We started with just three clients in Grays and a commitment to never use technical jargon to hide simple problems.
                </p>
                <p>
                  Today, we support over 150 businesses across Essex and London, ranging from small creative agencies to large-scale logistics firms. While we've grown, our core philosophy remains the same: provide honest, expert advice and build systems that just work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Our Values</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">The Principles That Guide Us.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Our Leadership</h2>
            <h3 className="text-4xl font-bold tracking-tight">Meet the Experts Behind the Tech.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, idx) => (
              <div key={idx} className="text-center">
                <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-slate-800">
                  <img src={leader.image} className="w-full h-full object-cover" alt={leader.name} />
                </div>
                <h4 className="text-2xl font-bold mb-2">{leader.name}</h4>
                <div className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4">{leader.role}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-3xl p-12 lg:p-16 border border-emerald-100">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <ShieldCheck className="w-16 h-16 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment to GDPR & Data Privacy</h3>
                <p className="text-slate-700 leading-relaxed mb-8">
                  Data privacy isn't just a legal requirement for us; it's a core value. We are fully GDPR compliant and help our clients achieve the same standards. Every system we design has privacy-by-design at its heart.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Regular Data Protection Audits',
                    'Secure Data Processing Agreements',
                    'Staff GDPR Training',
                    'Encrypted Data Storage'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center text-slate-800 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;