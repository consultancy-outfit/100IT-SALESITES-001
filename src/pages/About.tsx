import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/london-skyline/1920/1080" 
            alt="London Skyline" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl mb-8"
          >
            Our <span className="text-brand-emerald italic">Story</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Founded in the heart of London, Emma Le Grand Case Management was born from a vision to bridge the gap between complex technology and human-centric business operations.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="p-12 bg-slate-50 rounded-3xl">
              <div className="w-12 h-12 bg-brand-emerald/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-brand-emerald w-6 h-6" />
              </div>
              <h2 className="text-3xl mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To empower UK organisations with innovative, secure, and reliable IT solutions that drive growth, enhance efficiency, and provide a competitive edge in an ever-evolving digital landscape. We strive to be the most trusted technology partner for professional services across Britain.
              </p>
            </div>
            <div className="p-12 bg-brand-navy text-white rounded-3xl">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-white w-6 h-6" />
              </div>
              <h2 className="text-3xl mb-6">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed">
                To redefine the standard of IT consultancy by blending technical excellence with deep industry insight. We envision a future where every British enterprise, regardless of size, has access to the sophisticated technology infrastructure required to thrive globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Core Values</h2>
            <p className="text-slate-500">The principles that guide every decision we make.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Integrity First", desc: "We operate with absolute transparency and honesty in all our client relationships." },
              { icon: Heart, title: "Client Centric", desc: "Your success is our success. We tailor every solution to your specific business goals." },
              { icon: Award, title: "Excellence", desc: "We never settle for 'good enough'. We push the boundaries of what's possible in IT." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-brand-navy w-8 h-8" />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Leadership</h2>
            <p className="text-slate-500">Meet the experts driving our innovation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Emma Le Grand", role: "Founder & CEO", bio: "With 20 years in enterprise IT, Emma leads our strategic vision and commitment to excellence." },
              { name: "David Sterling", role: "Chief Technology Officer", bio: "A veteran systems architect specialising in secure cloud migrations and cybersecurity." },
              { name: "Sophie Miller", role: "Head of Client Success", bio: "Sophie ensures our partners receive world-class support and measurable business value." }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={`https://picsum.photos/seed/leader-${i}/600/800`} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl mb-1">{member.name}</h3>
                <p className="text-brand-emerald font-bold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 bg-brand-emerald rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck className="text-white w-12 h-12" />
            </div>
            <div>
              <h2 className="text-3xl mb-4">Our Commitment to GDPR</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Data privacy is not just a legal requirement for us; it's a core pillar of our service. We are fully committed to GDPR compliance and hold Cyber Essentials Plus certification. Your data, and your clients' data, is handled with the highest level of security and professional care.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">ICO Registered</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Cyber Essentials+</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">ISO 27001 Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
