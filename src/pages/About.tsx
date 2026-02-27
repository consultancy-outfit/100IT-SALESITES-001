import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Award, Heart, Zap } from 'lucide-react';

export const About = () => {
  const values = [
    { icon: Shield, title: 'Integrity', desc: 'We operate with absolute transparency and honesty in all our client relationships.' },
    { icon: Target, title: 'Precision', desc: 'Our solutions are engineered to the highest standards of technical excellence.' },
    { icon: Award, title: 'Excellence', desc: 'We strive for perfection in every support ticket and strategic project.' },
    { icon: Heart, title: 'Client-Centric', desc: 'Your business goals are the primary driver of our technology recommendations.' },
    { icon: Zap, title: 'Innovation', desc: 'We constantly evaluate emerging technologies to keep our clients ahead of the curve.' },
    { icon: Eye, title: 'Vision', desc: 'We look beyond the immediate fix to build sustainable technical foundations.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-zinc-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold mb-6">Our Story & Mission</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Founded in the heart of the West Midlands, Walsall Domiciliary Care Service was born from a simple observation: the care sector and UK SMEs were being underserved by generic IT providers. We set out to build a firm that combines enterprise capability with local accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 rounded-3xl bg-indigo-50 border border-indigo-100">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Our Mission</h2>
              <p className="text-indigo-700 text-lg leading-relaxed">
                To empower British businesses by providing world-class IT infrastructure and strategic guidance, ensuring technology is an accelerator for growth rather than a hurdle.
              </p>
            </div>
            <div className="p-12 rounded-3xl bg-zinc-900 text-white">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                To be the most trusted technology partner in the UK, recognised for our technical integrity, rapid response, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Our Leadership</h2>
            <p className="text-zinc-600 mt-4">The experts driving our technical strategy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'James Wilson', role: 'CEO & Founder', bio: '20+ years in enterprise IT architecture.' },
              { name: 'Sarah Thompson', role: 'CTO', bio: 'Former head of infrastructure for a major UK bank.' },
              { name: 'Michael O\'Connor', role: 'Head of Support', bio: 'Dedicated to maintaining our 15-minute response guarantee.' },
            ].map((leader, i) => (
              <div key={i} className="text-center">
                <div className="mb-6 relative inline-block">
                  <img
                    src={`https://picsum.photos/seed/leader-${i}/300/300`}
                    alt={leader.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{leader.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{leader.role}</p>
                <p className="text-zinc-500 text-sm max-w-xs mx-auto">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl border border-zinc-100 hover:shadow-lg transition-shadow">
                <v.icon className="h-8 w-8 text-indigo-600 mb-6" />
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{v.title}</h3>
                <p className="text-zinc-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Compliance */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Commitment to GDPR</h2>
              <p className="text-zinc-400 text-lg mb-6">
                Data privacy isn't just a legal requirement for us; it's a core component of our technical philosophy. We ensure all systems we manage are fully compliant with UK GDPR regulations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-zinc-300">
                  <Shield className="h-5 w-5 text-emerald-500 mr-3" />
                  Regular data protection impact assessments
                </li>
                <li className="flex items-center text-zinc-300">
                  <Shield className="h-5 w-5 text-emerald-500 mr-3" />
                  Encrypted data-at-rest and in-transit
                </li>
                <li className="flex items-center text-zinc-300">
                  <Shield className="h-5 w-5 text-emerald-500 mr-3" />
                  Staff training on data handling protocols
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="p-8 rounded-3xl bg-zinc-800 border border-zinc-700">
                <img
                  src="https://picsum.photos/seed/gdpr/600/400"
                  alt="Security"
                  className="rounded-xl mb-6"
                  referrerPolicy="no-referrer"
                />
                <p className="text-sm text-zinc-500 italic text-center">
                  "Security is not a product, but a process."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
