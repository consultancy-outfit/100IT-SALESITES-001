import React from 'react';
import { SectionHeading, Button, Card, COMPANY_DETAILS } from './Shared';
import { Shield, Target, Eye, Heart, Award, CheckCircle2 } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="section-padding text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Our Story & Mission</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Founded in London, Badminton Gardens has grown from a small consultancy into a leading UK IT services provider, driven by a passion for technology and a commitment to British business.
        </p>
      </section>

      {/* Mission/Vision */}
      <section className="bg-slate-900 text-white py-20">
        <div className="section-padding grid md:grid-cols-2 gap-12">
          <div className="bg-slate-800 p-10 rounded-3xl border border-white/10">
            <Target className="text-emerald-500 mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To empower UK enterprises by providing innovative, secure, and scalable IT solutions that drive efficiency and foster sustainable growth in an ever-evolving digital landscape.
            </p>
          </div>
          <div className="bg-slate-800 p-10 rounded-3xl border border-white/10">
            <Eye className="text-emerald-500 mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To be the most trusted technology partner for British businesses, recognised for our integrity, technical excellence, and unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading title="A Decade of Innovation" />
            <div className="space-y-6 text-slate-600 text-lg">
              <p>
                Badminton Gardens was established in 2014 with a simple goal: to provide high-quality, jargon-free IT support to businesses in the City of London. We saw a gap in the market for a provider that combined technical brilliance with a truly personal, UK-focused service.
              </p>
              <p>
                Over the years, we have expanded our expertise into cybersecurity, cloud transformation, and strategic consultancy. Today, we support hundreds of clients across the UK, from innovative startups in Shoreditch to established manufacturing firms in the Midlands.
              </p>
              <p>
                Our name reflects our heritage—rooted in the tradition of British excellence, yet always looking forward to the next technological frontier.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/london-office/600/800" 
              alt="Our London Office" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
              <p className="text-emerald-600 font-bold text-5xl mb-1">100%</p>
              <p className="text-slate-600 font-medium">UK-Based Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-20">
        <div className="section-padding">
          <SectionHeading centered title="Our Core Values" subtitle="The principles that guide everything we do." />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Integrity", desc: "We are honest, transparent, and always act in our clients' best interests." },
              { icon: Award, title: "Excellence", desc: "We strive for the highest standards in every project and interaction." },
              { icon: Heart, title: "Client-Centric", desc: "Your success is our success. We build long-term partnerships, not just contracts." },
              { icon: Target, title: "Innovation", desc: "We stay ahead of the curve, bringing the latest technology to your business." }
            ].map((v, i) => (
              <Card key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-sm text-slate-600">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <SectionHeading centered title="Our Leadership Team" subtitle="Meet the experts driving our vision forward." />
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "James Badminton", role: "Founder & CEO", bio: "With over 20 years in IT consultancy, James leads our strategic vision with a focus on client growth." },
            { name: "Eleanor Vance", role: "Chief Technology Officer", bio: "A specialist in cloud architecture and cybersecurity, Eleanor ensures our solutions are world-class." },
            { name: "Robert Sterling", role: "Head of Managed Services", bio: "Robert oversees our UK support team, ensuring every client receives exceptional service 24/7." }
          ].map((leader, i) => (
            <div key={i} className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-emerald-500/20">
                <img 
                  src={`https://picsum.photos/seed/leader-${i}/300/300`} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{leader.name}</h4>
              <p className="text-emerald-600 font-medium mb-4">{leader.role}</p>
              <p className="text-slate-600">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="bg-emerald-50 py-16">
        <div className="section-padding flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-emerald-600 text-white flex items-center justify-center">
            <Shield size={48} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to GDPR Compliance</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              At Badminton Gardens, data privacy is not an afterthought. We are fully committed to the UK GDPR and Data Protection Act 2018. All our systems, processes, and client solutions are designed with "Privacy by Design" principles to ensure your business and client data remains secure and compliant at all times.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
