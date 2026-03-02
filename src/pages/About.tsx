import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users2, History } from 'lucide-react';
import { Section, Card } from '../components/UI';
import { COMPANY_DETAILS } from '../constants';

const About = () => {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-brand-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Story</p>
              <h1 className="text-5xl md:text-6xl mb-8">Pioneering IT Excellence in the Midlands.</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Founded with a vision to bridge the gap between complex technology and practical business needs, {COMPANY_DETAILS.name} has grown into a leading IT partner for healthcare and SMEs across the United Kingdom.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our journey began with a simple mission: to provide reliable, secure, and innovative IT solutions that allow our clients to focus on what they do best—providing care and driving business success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-accent p-8 rounded-2xl text-white shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm font-medium opacity-80">Years of Innovation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white border-none shadow-lg">
            <div className="p-4 bg-brand-accent/10 text-brand-accent rounded-2xl w-fit mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower organizations with seamless technology integrations that enhance productivity, ensure data integrity, and foster sustainable growth through expert-led IT management.
            </p>
          </Card>
          <Card className="bg-white border-none shadow-lg">
            <div className="p-4 bg-brand-accent/10 text-brand-accent rounded-2xl w-fit mb-6">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the UK's most trusted technology partner, recognized for our specialized expertise in healthcare IT and our commitment to digital security and operational excellence.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Our Core Values" subtitle="What Drives Us">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Heart className="text-brand-accent" />, title: "Client First", desc: "We build long-term relationships based on trust, transparency, and shared success." },
            { icon: <ShieldCheck className="text-brand-accent" />, title: "Integrity", desc: "Honesty and ethical practices are at the heart of everything we do, especially with sensitive data." },
            { icon: <Users2 className="text-brand-accent" />, title: "Collaboration", desc: "We work as an extension of your team, aligning our goals with your business objectives." },
          ].map((value, i) => (
            <div key={i} className="text-center p-8">
              <div className="mx-auto p-4 bg-slate-50 rounded-full w-fit mb-6">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{value.title}</h4>
              <p className="text-slate-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark title="Leadership" subtitle="The Team">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Shauna Miller", role: "Founder & CEO", bio: "With over 20 years in healthcare IT, Shauna leads our strategic vision and commitment to clinical excellence." },
            { name: "David Harrison", role: "Chief Technology Officer", bio: "A cyber security veteran, David oversees our infrastructure hardening and cloud strategy." },
            { name: "James Wilson", role: "Head of Client Services", bio: "James ensures our managed support teams deliver world-class service to every partner." },
          ].map((leader, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src={`https://picsum.photos/seed/leader${i}/600/600`} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold">{leader.name}</h4>
              <p className="text-brand-accent font-medium text-sm">{leader.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-4 bg-emerald-50 text-emerald-600 rounded-full w-fit mx-auto mb-8">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl mb-6">GDPR & Compliance Commitment</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            As a UK-based IT provider handling sensitive healthcare data, we maintain the highest standards of data protection. We are fully GDPR compliant and assist our clients in achieving and maintaining their own regulatory requirements through rigorous auditing and security implementation.
          </p>
          <div className="flex justify-center gap-8 opacity-50">
            <span className="font-bold border-2 border-slate-200 px-4 py-2 rounded">Cyber Essentials</span>
            <span className="font-bold border-2 border-slate-200 px-4 py-2 rounded">ISO 27001</span>
            <span className="font-bold border-2 border-slate-200 px-4 py-2 rounded">NHS DSPT</span>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
