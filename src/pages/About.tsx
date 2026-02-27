import { motion } from "motion/react";
import { Shield, Target, Eye, Award, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-24">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl mb-8">Our Story</h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Founded in the heart of the UK, Westcliff on Sea was born from a simple mission: to make enterprise-grade IT accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                Over the past decade, we have grown from a small local support team into a nationwide IT partner, trusted by hundreds of organizations to manage their most critical digital assets.
              </p>
            </motion.div>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="https://picsum.photos/seed/team/800/1000"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="section-padding grid md:grid-cols-2 gap-12">
          <div className="p-12 rounded-3xl bg-primary text-white space-y-6">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              To empower British businesses with innovative, secure, and reliable technology solutions that drive sustainable growth and operational excellence.
            </p>
          </div>
          <div className="p-12 rounded-3xl bg-slate-100 space-y-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
              <Eye size={32} className="text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              To be the UK's most trusted IT partner, recognized for our technical brilliance, unwavering security standards, and human-centric approach to technology.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="section-padding">
          <h2 className="text-3xl md:text-5xl text-center mb-20">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We believe in transparent communication and honest advice, even when it's not the easiest path."
              },
              {
                title: "Excellence",
                desc: "We strive for perfection in every line of code, every server setup, and every support ticket."
              },
              {
                title: "Security",
                desc: "In an era of digital threats, security is not an option—it's the foundation of everything we do."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl mb-4 text-primary">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <h2 className="text-3xl md:text-5xl text-center mb-20">Our Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "James Westcliff", role: "Founder & CEO" },
              { name: "Sarah O'Neill", role: "Chief Technology Officer" },
              { name: "Michael Brooks", role: "Head of Cyber Security" },
              { name: "Emma Richardson", role: "Director of Operations" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img
                    src={`https://picsum.photos/seed/leader${i}/400/400`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                <p className="text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-primary text-white">
        <div className="section-padding text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 mb-8">
            <Shield size={20} className="text-accent" />
            <span className="font-bold">GDPR & Cyber Essentials Certified</span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-8">Committed to UK Data Standards</h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-12">
            We take data protection seriously. Our processes are fully aligned with the UK Data Protection Act 2018 and GDPR. We undergo regular independent audits to ensure your business remains compliant and secure.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-emerald-400" />
              <span>ISO 27001 Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-emerald-400" />
              <span>Cyber Essentials Plus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-emerald-400" />
              <span>ICO Registered</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
