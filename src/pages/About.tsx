import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Award, Users2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Story & Mission</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded in Middlesbrough, Teesside Supported Living was born from a simple observation: the UK care sector was being underserved by generic IT providers who didn't understand the critical nature of care delivery.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We bridged that gap by combining deep technical expertise with a genuine passion for social care. Today, we support providers across the UK, ensuring their digital foundations are as strong as the care they provide.
            </p>
          </motion.div>
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <img 
              src="https://picsum.photos/seed/team/800/600" 
              alt="Our Team" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl bg-brand-600 text-white">
            <Target className="w-12 h-12 mb-6 opacity-80" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-brand-100 leading-relaxed">
              To empower care providers through innovative, secure, and reliable technology solutions that enhance the quality of life for residents and the efficiency of staff.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-slate-900 text-white">
            <Eye className="w-12 h-12 mb-6 opacity-80" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              To be the UK's most trusted technology partner for the supported living sector, setting the standard for digital excellence and care compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-brand-600" />,
                title: "Care-Centric",
                desc: "We put the needs of care staff and residents at the heart of every technical decision."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-brand-600" />,
                title: "Integrity First",
                desc: "Transparent pricing, honest advice, and a commitment to doing the right thing for our partners."
              },
              {
                icon: <Award className="w-8 h-8 text-brand-600" />,
                title: "Excellence",
                desc: "We strive for perfection in our infrastructure and responsiveness in our support."
              }
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-16">Our Leadership</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "James Harrison", role: "Managing Director", img: "https://i.pravatar.cc/150?u=james" },
              { name: "Eleanor Rigby", role: "Technical Director", img: "https://i.pravatar.cc/150?u=eleanor" },
              { name: "Marcus Thorne", role: "Compliance Lead", img: "https://i.pravatar.cc/150?u=marcus" },
              { name: "Sarah Bentley", role: "Client Relations", img: "https://i.pravatar.cc/150?u=sarah" }
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-slate-900">{member.name}</h4>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-brand-400 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-6">Our Commitment to GDPR</h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            As a technology provider to the healthcare sector, we hold ourselves to the highest standards of data protection. We are fully GDPR compliant and help our clients achieve the same through robust encryption, secure data handling, and regular auditing. Your data security is our absolute priority.
          </p>
          <div className="inline-flex gap-4">
            <div className="px-4 py-2 border border-slate-700 rounded-lg text-xs font-mono">ISO 27001</div>
            <div className="px-4 py-2 border border-slate-700 rounded-lg text-xs font-mono">Cyber Essentials Plus</div>
            <div className="px-4 py-2 border border-slate-700 rounded-lg text-xs font-mono">ICO Registered</div>
          </div>
        </div>
      </section>
    </div>
  );
}
