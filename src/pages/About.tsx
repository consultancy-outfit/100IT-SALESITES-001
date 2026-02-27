import { ShieldCheck, Target, Eye, Heart, Users2 } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-white py-24 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 mb-8">Pioneering IT Excellence in the UK</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Founded with a vision to bridge the gap between complex technology and business success, Community Recovery has grown into a leading IT partner for British SMEs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-zinc-100">
              <Target className="w-12 h-12 text-emerald-600 mb-6" />
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Mission</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                To empower UK businesses by providing secure, reliable, and innovative IT solutions that foster growth, efficiency, and long-term resilience in an ever-changing digital world.
              </p>
            </div>
            <div className="bg-zinc-900 p-12 rounded-[2rem] text-white">
              <Eye className="w-12 h-12 text-emerald-400 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                To be the most trusted technology partner in the United Kingdom, recognized for our technical expertise, ethical practices, and unwavering commitment to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Integrity', desc: 'We operate with complete transparency and ethical standards in everything we do.' },
              { icon: Heart, title: 'Client-First', desc: 'Your business goals are our priority. We measure our success by your success.' },
              { icon: Users2, title: 'Collaboration', desc: 'We work as an extension of your team, fostering strong, long-term partnerships.' }
            ].map((value) => (
              <div key={value.title} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 text-center">
                <value.icon className="w-10 h-10 text-emerald-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{value.title}</h3>
                <p className="text-zinc-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Our Leadership</h2>
            <p className="text-zinc-600 mt-4">Expert minds driving technical innovation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'James Sterling', role: 'Chief Executive Officer', bio: '20+ years in UK IT infrastructure and strategic management.' },
              { name: 'Emma Radcliffe', role: 'Chief Technology Officer', bio: 'Cybersecurity specialist with a focus on enterprise-grade SME solutions.' },
              { name: 'Robert Hughes', role: 'Director of Operations', bio: 'Expert in managed services and client relationship management.' }
            ].map((leader) => (
              <div key={leader.name} className="bg-white p-8 rounded-3xl border border-zinc-200">
                <div className="w-24 h-24 bg-zinc-100 rounded-2xl mb-6 mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-zinc-400">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 text-center mb-1">{leader.name}</h3>
                <p className="text-emerald-600 font-medium text-center mb-4">{leader.role}</p>
                <p className="text-sm text-zinc-500 text-center leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-8 text-emerald-200" />
          <h2 className="text-3xl font-bold mb-6">Our Commitment to GDPR & Compliance</h2>
          <p className="text-xl text-emerald-100 leading-relaxed mb-8">
            As a UK-based company, we take data protection seriously. We are fully committed to GDPR compliance and help our clients achieve the same through robust security measures and ethical data handling practices.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 rounded-full text-sm font-bold uppercase tracking-widest">
            Cyber Essentials Certified
          </div>
        </div>
      </section>
    </div>
  );
};
