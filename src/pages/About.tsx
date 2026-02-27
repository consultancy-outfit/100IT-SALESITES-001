import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, CheckCircle2, Award, Briefcase, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-950 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 blur-[120px] rounded-full" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
              Our Story & <span className="text-brand-500">Commitment</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Centenary Close was founded on a simple principle: providing enterprise-grade IT solutions with the personal touch of a local partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-12 rounded-3xl border border-slate-100"
            >
              <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white mb-8">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower UK businesses through innovative, secure, and reliable technology solutions, enabling them to achieve their full potential in an increasingly digital world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-12 rounded-3xl text-white"
            >
              <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center text-white mb-8">
                <Eye size={24} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                To be the most trusted IT partner for SMEs across the United Kingdom, recognised for our technical excellence, proactive support, and unwavering integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-8">The Centenary Close Journey</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Established in the heart of the UK, Centenary Close began as a small consultancy focused on helping local businesses navigate the early challenges of digital transformation.
                </p>
                <p>
                  As the technology landscape evolved, so did we. We expanded our expertise into cloud infrastructure, advanced cyber security, and managed services, always keeping our clients' success at the forefront of everything we do.
                </p>
                <p>
                  Today, we are proud to support a diverse range of industries, providing the technical backbone that allows British enterprises to compete on a global scale.
                </p>
              </div>
              <div className="mt-10 flex gap-8">
                <div>
                  <div className="text-3xl font-display font-bold text-brand-600">10+</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-brand-600">200+</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-brand-600">50+</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Active Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-office/800/800" 
                  alt="Centenary Close Office" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-600 p-8 rounded-2xl text-white shadow-xl max-w-xs">
                <p className="text-lg font-bold mb-2">"Technology is the tool, but people are the priority."</p>
                <p className="text-sm text-brand-100">— Founder, Centenary Close</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide our decisions and define our culture.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We are honest, transparent, and always act in our clients\' best interests.', icon: Shield },
              { title: 'Excellence', desc: 'We strive for technical perfection and exceptional service in every task.', icon: Award },
              { title: 'Innovation', desc: 'We embrace new technologies and find creative solutions to complex problems.', icon: Target },
              { title: 'Partnership', desc: 'We view ourselves as an extension of our clients\' teams, not just a vendor.', icon: Users },
            ].map((value, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-600 mb-6 shadow-sm">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Our Leadership</h2>
            <p className="text-lg text-slate-600">Meet the experts driving our technical vision and client success.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'David Thompson', role: 'Managing Director', bio: '20+ years in IT infrastructure and business strategy.' },
              { name: 'Emma Richards', role: 'Technical Director', bio: 'Expert in cloud architecture and cyber security compliance.' },
              { name: 'Marcus Chen', role: 'Head of Support', bio: 'Dedicated to delivering exceptional client experiences and rapid response.' },
            ].map((leader, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 bg-slate-300 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={`https://picsum.photos/seed/leader-${i}/400/400`} 
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{leader.name}</h3>
                <div className="text-brand-600 font-semibold text-sm mb-4">{leader.role}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Compliance */}
      <section className="section-padding bg-brand-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="mx-auto mb-8 opacity-50" size={64} />
            <h2 className="text-4xl font-display font-bold mb-8">Commitment to GDPR Compliance</h2>
            <p className="text-xl text-brand-100 mb-10 leading-relaxed">
              As a UK-based IT provider, we take data protection seriously. We are fully committed to GDPR compliance, ensuring that all data we process for ourselves and our clients is handled with the highest standards of security and confidentiality.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-brand-700/50 p-6 rounded-xl border border-brand-500/30">
                <CheckCircle2 className="mx-auto mb-3 text-brand-300" size={24} />
                <div className="text-sm font-bold">Data Encryption</div>
              </div>
              <div className="bg-brand-700/50 p-6 rounded-xl border border-brand-500/30">
                <CheckCircle2 className="mx-auto mb-3 text-brand-300" size={24} />
                <div className="text-sm font-bold">Secure Processing</div>
              </div>
              <div className="bg-brand-700/50 p-6 rounded-xl border border-brand-500/30">
                <CheckCircle2 className="mx-auto mb-3 text-brand-300" size={24} />
                <div className="text-sm font-bold">Regular Audits</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
