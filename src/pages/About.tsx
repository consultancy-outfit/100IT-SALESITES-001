import { motion } from "motion/react";
import { Target, Eye, Heart, ShieldCheck, Award, Users2 } from "lucide-react";

export default function About() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              Our Story
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">Rooted in Plymouth, <span className="text-emerald-600">Focused on Your Future.</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in 2015, Hillside IT Solutions began with a simple mission: to provide enterprise-level IT support to small and medium-sized businesses in the South West. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We noticed that many local companies were being underserved by large, impersonal national providers. We decided to build a firm that combines deep technical expertise with a personal, local touch. Today, we support over 50 businesses across Devon and Cornwall, helping them navigate the complexities of modern technology.
            </p>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/about-team/800/800" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-medium opacity-80">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Mission/Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="p-12 rounded-3xl bg-slate-50 border border-slate-100 space-y-6">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To empower UK businesses through innovative, reliable, and secure technology solutions that drive efficiency and growth.
            </p>
          </div>
          <div className="p-12 rounded-3xl bg-slate-900 text-white space-y-6">
            <div className="h-12 w-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              To be the most trusted technology partner in the South West, known for our integrity, technical excellence, and commitment to client success.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Integrity First", desc: "We provide honest advice, even if it means recommending a lower-cost solution." },
              { icon: Heart, title: "Client Obsessed", desc: "Your success is our success. We go the extra mile to ensure your IT works perfectly." },
              { icon: Award, title: "Technical Excellence", desc: "We stay at the forefront of technology to provide you with the best solutions." },
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4 p-8">
                <div className="mx-auto h-16 w-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">Our Leadership</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { name: "David Hill", role: "Managing Director", img: "https://picsum.photos/seed/leader1/400/500" },
              { name: "Sarah Jenkins", role: "Technical Director", img: "https://picsum.photos/seed/leader2/400/500" },
              { name: "Mark Thompson", role: "Head of Security", img: "https://picsum.photos/seed/leader3/400/500" },
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img src={leader.img} className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-slate-500">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="p-12 rounded-3xl border border-emerald-100 bg-emerald-50/50 flex flex-col md:flex-row items-center gap-8">
          <div className="h-20 w-20 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
            <ShieldCheck className="h-10 w-10 text-emerald-600" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">GDPR & Security Commitment</h3>
            <p className="text-slate-600 leading-relaxed">
              As a UK-based company, we are fully committed to GDPR compliance and the highest standards of data security. We help our clients achieve and maintain Cyber Essentials certification, ensuring their data—and their customers' data—is always protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
