import { motion } from "motion/react";
import { Shield, Target, Eye, Heart, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Story & <span className="text-emerald-600">Mission</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Founded in London, Vibrance Outreach was born from a simple observation: British businesses needed IT partners who combined technical excellence with genuine commercial understanding.
          </p>
        </div>

        {/* Vision/Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] relative overflow-hidden">
            <Target className="w-12 h-12 text-emerald-400 mb-8" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              To empower UK enterprises by providing secure, scalable, and strategic technology solutions that drive real business growth and operational resilience.
            </p>
          </div>
          <div className="bg-emerald-600 text-white p-12 rounded-[3rem] relative overflow-hidden">
            <Eye className="w-12 h-12 text-white mb-8 opacity-80" />
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-emerald-50 leading-relaxed">
              To be the most trusted technology partner for the British mid-market, known for our integrity, innovation, and unwavering commitment to client success.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Integrity First", desc: "We provide honest advice, even when it's not the easiest path. Your trust is our most valuable asset." },
              { icon: Award, title: "Excellence", desc: "We don't just fix problems; we engineer solutions that exceed industry standards and expectations." },
              { icon: Heart, title: "Client Centric", desc: "Your business goals are our technology goals. We measure our success by your growth." },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GDPR Commitment */}
        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 flex flex-col lg:flex-row gap-12 items-center mb-32">
          <div className="lg:w-1/3">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <Shield className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">GDPR & Security Commitment</h2>
          </div>
          <div className="lg:w-2/3 space-y-6">
            <p className="text-lg text-slate-600">
              As a UK-based company, we are fully committed to the Data Protection Act 2018 and the UK GDPR. We treat your data with the highest level of confidentiality and security.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Data Sovereignty", "Encryption at Rest", "Regular Security Audits", "Staff Training", "DPO Oversight", "Incident Response"].map(item => (
                <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-16">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "James Sterling", role: "Managing Director", img: "https://picsum.photos/seed/p1/400/500" },
              { name: "Eleanor Vance", role: "Technical Director", img: "https://picsum.photos/seed/p2/400/500" },
              { name: "Robert Hughes", role: "Head of Cyber Security", img: "https://picsum.photos/seed/p3/400/500" },
              { name: "Sophie Clarke", role: "Client Success Manager", img: "https://picsum.photos/seed/p4/400/500" },
            ].map((person, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{person.name}</h4>
                <p className="text-slate-500 text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
