import { motion } from "motion/react";
import { 
  Target, 
  Eye, 
  History, 
  Users2, 
  Heart, 
  ShieldCheck,
  Award,
  CheckCircle2
} from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Your Local IT Experts with a <span className="text-brand-accent">Global Vision.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Founded in the heart of West London, Walfinch IT was born from a simple observation: small and medium businesses were being underserved by traditional IT providers.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We set out to bridge the gap between enterprise-grade technology and the personal, proactive service that local businesses deserve. Today, we are proud to be the trusted technology partner for hundreds of companies across Ealing, Uxbridge, and beyond.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/team-meeting/800/800"
                alt="Our Team"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <div className="text-4xl font-display font-bold text-brand-accent mb-1">15+</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years of Excellence</div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="bg-brand-primary text-white p-12 rounded-[3rem] relative overflow-hidden">
            <Target className="w-16 h-16 text-brand-accent mb-8 opacity-50" />
            <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              To empower UK businesses by providing innovative, secure, and reliable IT solutions that eliminate technical barriers and drive sustainable growth.
            </p>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          </div>
          <div className="bg-slate-100 p-12 rounded-[3rem] relative overflow-hidden">
            <Eye className="w-16 h-16 text-brand-accent mb-8 opacity-50" />
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To be the most respected IT managed services provider in West London, recognized for our technical excellence, integrity, and unwavering commitment to client success.
            </p>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent/5 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">The principles that guide every decision we make and every interaction we have.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Integrity",
                desc: "We believe in honest advice and transparent pricing. We only recommend solutions that truly benefit your business."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                desc: "We strive for technical perfection in everything we do, from simple helpdesk tickets to complex cloud migrations."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Partnership",
                desc: "We don't just work for you; we work with you. Your success is our success, and we take that responsibility seriously."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-accent mb-8 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Meet the experts driving our commitment to excellence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "James Walfinch",
                role: "Founder & Managing Director",
                image: "https://picsum.photos/seed/leader1/400/400",
                bio: "With over 20 years in enterprise IT, James founded the company to bring high-level strategy to local SMEs."
              },
              {
                name: "Eleanor Rigby",
                role: "Technical Director",
                image: "https://picsum.photos/seed/leader2/400/400",
                bio: "A cybersecurity specialist with a passion for cloud architecture and digital transformation."
              },
              {
                name: "Robert Harrison",
                role: "Head of Client Success",
                image: "https://picsum.photos/seed/leader3/400/400",
                bio: "Robert ensures that every client receives the proactive support and strategic guidance they need to thrive."
              }
            ].map((leader, idx) => (
              <div key={idx} className="group">
                <div className="rounded-[2.5rem] overflow-hidden mb-6 relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-1">{leader.name}</h3>
                <div className="text-brand-accent font-bold text-sm mb-4 uppercase tracking-wider">{leader.role}</div>
                <p className="text-slate-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GDPR Commitment */}
        <div className="bg-slate-900 text-white p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Our Commitment to GDPR & Security</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                As a UK-based IT provider, we take data protection and GDPR compliance with the utmost seriousness. It's not just a legal requirement; it's a core part of our service promise.
              </p>
              <ul className="space-y-4">
                {[
                  "Strict data processing agreements in place",
                  "Regular security audits and vulnerability scans",
                  "Employee training on data protection best practices",
                  "ISO 27001 aligned security frameworks"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-white/5 rounded-full border border-white/10 flex items-center justify-center relative">
                <ShieldCheck className="w-32 h-32 text-brand-accent opacity-80" />
                <div className="absolute inset-0 animate-pulse bg-brand-accent/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}
