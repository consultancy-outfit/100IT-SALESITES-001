import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Eye, Heart, Award, CheckCircle2, Users } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              A Legacy of <span className="text-brand-600">Technical Excellence</span> in the Heart of the UK.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Founded with a vision to simplify technology for British businesses, Bridlington IT Solutions has grown into a leading managed services provider known for reliability and innovation.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-600/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Story & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
                <p className="text-slate-600 leading-relaxed">
                  Established in Kings Langley, we started as a small team of passionate engineers who believed that IT support should be more than just a reactive helpdesk. We saw a gap in the market for a proactive, strategic partner that truly understands the business goals of UK SMEs.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Over the years, we have expanded our expertise into cloud architecture, advanced cybersecurity, and strategic consultancy, helping hundreds of businesses navigate the complexities of digital transformation.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Target className="w-10 h-10 text-brand-600 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
                  <p className="text-sm text-slate-600">To empower UK businesses by providing secure, scalable, and innovative IT solutions that drive growth and efficiency.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Eye className="w-10 h-10 text-brand-600 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Our Vision</h4>
                  <p className="text-sm text-slate-600">To be the most trusted technology partner in the UK, recognised for our technical excellence and client-first approach.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/office/800/600"
                alt="Our Office"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-brand-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-sm font-medium uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
            <p className="text-slate-600">Meet the experts driving our technical strategy and client success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Robert Bridlington", role: "Founder & CEO", bio: "With over 20 years in enterprise IT, Robert leads our strategic vision and business growth.", image: "https://picsum.photos/seed/robert/400/500" },
              { name: "Eleanor Vance", role: "Chief Technology Officer", bio: "A cloud architecture specialist, Eleanor ensures our solutions are at the cutting edge of innovation.", image: "https://picsum.photos/seed/eleanor/400/500" },
              { name: "Marcus Thorne", role: "Head of Cybersecurity", bio: "Marcus leads our security operations, protecting our clients from the most sophisticated threats.", image: "https://picsum.photos/seed/marcus/400/500" },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-brand-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Core Values</h2>
              <div className="space-y-6">
                {[
                  { title: "Integrity First", desc: "We are honest, transparent, and always act in the best interest of our clients.", icon: Heart },
                  { title: "Technical Excellence", desc: "We never stop learning and always strive for the highest standards of engineering.", icon: Award },
                  { title: "Client Partnership", desc: "We don't just have clients; we have partners. Your success is our success.", icon: Users },
                  { title: "Security by Design", desc: "Security isn't an afterthought; it's built into everything we do.", icon: ShieldCheck },
                ].map((value, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{value.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 p-12 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-6">GDPR & Compliance Commitment</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                As a UK-based company, we take data protection seriously. We are fully committed to GDPR compliance and help our clients achieve the same.
              </p>
              <ul className="space-y-4">
                {[
                  "Cyber Essentials Certified",
                  "Regular Compliance Audits",
                  "Data Protection Officer Oversight",
                  "Secure UK-Based Data Centres",
                  "Employee GDPR Training"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
