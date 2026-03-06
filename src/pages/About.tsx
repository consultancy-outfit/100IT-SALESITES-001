import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, Users, Award, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-primary mb-8 leading-tight">
                Building the <span className="text-brand-accent">Digital Backbone</span> of British Business
              </h1>
              <p className="text-xl text-brand-primary/80 leading-relaxed mb-8">
                Founded in London, Penstone Farm IT Services was born from a simple mission: to provide enterprise-grade technology solutions to SMEs with the care and attention of a local partner.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-brand-primary/20 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Shield className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-brand-primary">
                  Committed to full GDPR compliance and the highest standards of UK data sovereignty.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/team/800/1000"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand-primary text-white p-10 rounded-[2rem] shadow-2xl hidden md:block">
                <div className="text-5xl font-bold text-brand-accent mb-2">15+</div>
                <div className="text-sm uppercase tracking-widest font-bold text-white/70">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[3rem] bg-brand-accent text-white relative overflow-hidden">
              <Target className="w-12 h-12 text-white/80 mb-8" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                To empower UK businesses by delivering innovative, secure, and reliable IT solutions that drive growth, enhance productivity, and provide a competitive edge in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="p-12 rounded-[3rem] bg-brand-primary text-white relative overflow-hidden">
              <Eye className="w-12 h-12 text-brand-accent mb-8" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To be the most trusted IT partner in the United Kingdom, recognised for our technical excellence, ethical practices, and unwavering commitment to our clients' long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Our Core Values</h2>
            <p className="text-4xl font-bold text-brand-primary">The Principles That Guide Us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-brand-accent" />,
                title: "Integrity First",
                desc: "We believe in honest advice, transparent pricing, and always doing what's right for the client."
              },
              {
                icon: <Award className="w-8 h-8 text-brand-accent" />,
                title: "Technical Excellence",
                desc: "Our team stays at the forefront of technology to ensure you always have the best tools for the job."
              },
              {
                icon: <Heart className="w-8 h-8 text-brand-accent" />,
                title: "Client Centricity",
                desc: "Your business goals are our goals. We listen, adapt, and deliver results that matter to you."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-brand-primary/10 shadow-sm">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-brand-primary mb-4">{value.title}</h3>
                <p className="text-brand-primary/80 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Our Leadership</h2>
            <p className="text-4xl font-bold text-brand-primary">Meet the Experts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Robert Penstone", role: "Founder & CEO", img: "https://picsum.photos/seed/ceo/400/500" },
              { name: "Sarah Miller", role: "Technical Director", img: "https://picsum.photos/seed/cto/400/500" },
              { name: "David Hughes", role: "Head of Cyber Security", img: "https://picsum.photos/seed/sec/400/500" },
              { name: "Emma Watson", role: "Client Success Manager", img: "https://picsum.photos/seed/success/400/500" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary">{member.name}</h3>
                <p className="text-brand-primary/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-brand-accent/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-brand-accent mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-brand-primary mb-6">Our Commitment to GDPR</h2>
          <p className="text-lg text-brand-primary/80 leading-relaxed mb-10">
            As a UK-based company, we take data protection seriously. We are fully compliant with the UK GDPR and the Data Protection Act 2018. We ensure that all client data is processed securely, with strict access controls and regular audits.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-brand-accent/30 text-sm font-bold text-brand-accent">
              <CheckCircle2 className="w-4 h-4" /> ICO Registered
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-brand-accent/30 text-sm font-bold text-brand-accent">
              <CheckCircle2 className="w-4 h-4" /> Cyber Essentials Certified
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-brand-accent/30 text-sm font-bold text-brand-accent">
              <CheckCircle2 className="w-4 h-4" /> UK Data Sovereignty
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
