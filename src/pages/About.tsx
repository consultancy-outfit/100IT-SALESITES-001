import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Award, Briefcase } from 'lucide-react';

const VALUES = [
  {
    title: "Integrity",
    description: "We provide honest advice, even if it means recommending a simpler, cheaper solution.",
    icon: ShieldCheck
  },
  {
    title: "Innovation",
    description: "We stay ahead of the curve so your business never falls behind.",
    icon: Award
  },
  {
    title: "Partnership",
    description: "We don't just work for you; we work with you as an extension of your team.",
    icon: Briefcase
  }
];

const LEADERSHIP = [
  {
    name: "James Harrison",
    role: "Founder & CEO",
    bio: "With 20 years in enterprise IT, James founded Wigan IT to bring high-level tech to local businesses.",
    image: "https://picsum.photos/seed/james/400/400"
  },
  {
    name: "Eleanor Wright",
    role: "Technical Director",
    bio: "A cybersecurity specialist with a passion for building resilient cloud infrastructures.",
    image: "https://picsum.photos/seed/eleanor/400/400"
  }
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-primary mb-6"
            >
              Our Story & <span className="text-accent">Mission</span>
            </motion.h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in the heart of Wigan, we've spent over a decade bridging the gap 
              between complex technology and practical business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary p-12 rounded-[3rem] text-white">
              <Target className="h-12 w-12 text-accent mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                To empower UK businesses through reliable, secure, and innovative 
                IT solutions that drive growth and operational excellence. We aim 
                to be the most trusted IT partner in the North West.
              </p>
            </div>
            <div className="bg-accent p-12 rounded-[3rem] text-white">
              <Eye className="h-12 w-12 text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                To create a digital landscape where technology is an enabler, not 
                a barrier, allowing every British business to compete on a 
                global stage with enterprise-grade infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every decision we make.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm">
                <value.icon className="h-10 w-10 text-accent mb-6" />
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet the Leadership</h2>
            <p className="text-slate-600">The experts behind our technical excellence.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {LEADERSHIP.map((person, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-64 h-64 rounded-full object-cover shadow-xl group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-accent/20 scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{person.name}</h3>
                <p className="text-accent font-semibold mb-4">{person.role}</p>
                <p className="text-slate-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white/5 p-12 rounded-[3rem] border border-white/10 text-center">
            <ShieldCheck className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our GDPR Commitment</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Data privacy isn't just a legal requirement; it's a cornerstone of 
              our client relationships. We are fully committed to GDPR compliance 
              and implement rigorous data protection measures across all our 
              managed services and internal processes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">ISO 27001 Aligned</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Cyber Essentials Plus</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">ICO Registered</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
