import { motion } from 'motion/react';
import { Users, Target, Heart, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Bridging the Gap Between <span className="text-brand-600">Care</span> and <span className="text-brand-600">Technology</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Founded in Cirencester, Support Health Care was born out of a simple observation: healthcare providers were being underserved by generic IT companies. We set out to build a firm that understands the clinical environment as well as the technical one.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold text-brand-600">15+</p>
                  <p className="text-sm text-slate-500 font-medium">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-brand-600">100%</p>
                  <p className="text-sm text-slate-500 font-medium">UK Based Team</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000"
                alt="Our Team"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-brand-600 text-white rounded-3xl">
              <Target className="w-12 h-12 mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-brand-100 leading-relaxed">
                To provide seamless, secure, and innovative IT solutions that allow healthcare professionals to focus on what they do best: caring for their patients. We aim to eliminate technical friction from the clinical workflow.
              </p>
            </div>
            <div className="p-10 bg-slate-900 text-white rounded-3xl">
              <Heart className="w-12 h-12 mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed">
                To be the UK's most trusted technology partner for the healthcare sector, recognized for our integrity, expertise, and commitment to patient data security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Integrity", desc: "We are honest, transparent, and always act in our clients' best interests." },
              { icon: <Users />, title: "Collaboration", desc: "We work as an extension of your team, not just a service provider." },
              { icon: <Target />, title: "Excellence", desc: "We strive for technical perfection in every project we undertake." },
              { icon: <Heart />, title: "Empathy", desc: "We understand the pressures of the healthcare environment." }
            ].map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="inline-flex p-4 bg-white rounded-2xl text-brand-600 shadow-sm mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "James Harrison", role: "Managing Director", bio: "20 years in IT infrastructure with a focus on healthcare systems." },
              { name: "Dr. Emily Chen", role: "Clinical Tech Advisor", bio: "A former GP who ensures our solutions meet clinical needs." },
              { name: "Robert Smith", role: "Technical Director", bio: "Cyber security expert specializing in UK data compliance." }
            ].map((person, i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-slate-200 rounded-2xl mb-6 overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/leader${i}/400/400`}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
                <p className="text-brand-600 font-medium mb-3">{person.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-brand-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-8 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Commitment to GDPR & Compliance</h2>
          <p className="text-brand-100 text-lg leading-relaxed mb-8">
            As a UK-based company, we are fully committed to GDPR compliance. We undergo regular audits to ensure that our internal processes and the solutions we provide to our clients meet the stringent requirements of the Information Commissioner's Office (ICO).
          </p>
          <div className="flex justify-center gap-8">
            <div className="px-6 py-3 bg-white/10 rounded-lg border border-white/20 text-sm font-bold">Cyber Essentials Certified</div>
            <div className="px-6 py-3 bg-white/10 rounded-lg border border-white/20 text-sm font-bold">ICO Registered</div>
          </div>
        </div>
      </section>
    </div>
  );
};
