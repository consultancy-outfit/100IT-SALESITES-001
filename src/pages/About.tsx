import { motion } from "motion/react";
import { Target, Eye, History, Heart, ShieldCheck, Users } from "lucide-react";

export function About() {
  const values = [
    { title: "Integrity", desc: "We operate with complete transparency and honesty in all our dealings.", icon: ShieldCheck },
    { title: "Innovation", desc: "We constantly explore new technologies to keep our clients ahead.", icon: Target },
    { title: "Client-Centric", desc: "Your business goals are the primary driver of our technology solutions.", icon: Heart },
    { title: "Expertise", desc: "Our team consists of highly certified and experienced UK engineers.", icon: Users },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">About Aspire IT</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Founded in Luton, we have grown into a leading provider of IT services for businesses across the South East and the wider UK.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="p-10 rounded-3xl bg-indigo-600 text-white">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-indigo-100 leading-relaxed">
              To empower UK businesses by providing reliable, secure, and innovative technology solutions that drive growth and efficiency.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-slate-900 text-white">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              To be the most trusted technology partner in the UK, recognized for our technical excellence and commitment to client success.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
              <History className="w-4 h-4" />
              Our Story
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">A Decade of Technical Excellence</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Aspire IT began with a simple goal: to provide high-quality IT support that small businesses could rely on. We noticed that many SMEs were underserved by large providers and lacked the internal expertise to manage complex systems.
              </p>
              <p>
                Over the years, we have expanded our team and our capabilities, becoming experts in cloud migration, cybersecurity, and strategic IT consultancy. Today, we support hundreds of users across various sectors, always maintaining the personal touch that our clients value.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/team/800/600"
              alt="Our Team"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="text-4xl font-bold text-indigo-600 mb-1">10+</div>
              <div className="text-sm font-bold text-slate-900">Years of Experience</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 text-center">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GDPR */}
        <div className="p-10 lg:p-16 rounded-[3rem] bg-slate-50 border border-slate-100">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Commitment to GDPR</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Data privacy is at the heart of our operations. We are fully committed to GDPR compliance, ensuring that all client data is handled with the highest level of security and transparency. Our internal processes and the solutions we provide are designed to meet and exceed UK data protection standards.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Regular Security Audits",
                "Encrypted Data Storage",
                "Staff Privacy Training",
                "Secure UK Data Centers",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
