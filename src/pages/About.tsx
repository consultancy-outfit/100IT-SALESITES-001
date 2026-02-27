import { motion } from 'motion/react';
import { Target, Eye, History, ShieldCheck, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Our Mission: To Empower <span className="text-brand-accent">British Innovation</span>.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Founded in London, Monaveen was built on the belief that technology should be an enabler, not a barrier. We bridge the gap between complex IT and business success.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide UK businesses with the most reliable, secure, and innovative IT managed services, allowing them to focus on what they do best while we handle the technical complexity.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To become the UK's most trusted technology partner, recognised for our integrity, technical excellence, and unwavering commitment to our clients' growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img src="https://picsum.photos/seed/london/800/600" alt="London Office" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">
                <History className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl font-bold mb-6">From a Small London Studio to a National IT Leader</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Monaveen began in 2015 with a simple goal: to help local London businesses navigate the rapidly changing digital landscape. Our founders, former enterprise IT directors, saw that SMEs were being underserved by large, impersonal providers.
                </p>
                <p>
                  We started by offering bespoke support and cloud migrations. As our reputation for reliability grew, so did our team and our service offerings. Today, we support hundreds of clients across the UK, from the South Coast to the Scottish Highlands.
                </p>
                <p>
                  Despite our growth, we've never lost our "client-first" mentality. Every business we partner with gets the same level of care and strategic attention as our very first client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-8 h-8" />, title: 'Integrity First', desc: 'We are honest, transparent, and always act in the best interest of our clients, even if it means recommending a cheaper solution.' },
              { icon: <Award className="w-8 h-8" />, title: 'Excellence', desc: 'We don\'t settle for "good enough". Our engineers are constantly training to stay at the cutting edge of technology.' },
              { icon: <Heart className="w-8 h-8" />, title: 'Human-Centric', desc: 'Technology is for people. We speak plain English, avoid jargon, and build relationships based on mutual respect.' }
            ].map((v, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="text-brand-accent mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Robert Monaveen', role: 'Founder & CEO', img: 'https://picsum.photos/seed/p1/300/400' },
              { name: 'Siobhan O\'Reilly', role: 'Chief Technology Officer', img: 'https://picsum.photos/seed/p2/300/400' },
              { name: 'Marcus Thorne', role: 'Director of Operations', img: 'https://picsum.photos/seed/p3/300/400' },
              { name: 'Emma Watson', role: 'Head of Cybersecurity', img: 'https://picsum.photos/seed/p4/300/400' }
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img src={leader.img} alt={leader.name} className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-bold">{leader.name}</h3>
                <p className="text-sm text-slate-500">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-accent/5 border border-brand-accent/20 p-12 rounded-[2.5rem] flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to UK GDPR</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Data protection is at the heart of everything we do. As a UK-based company, we are fully committed to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Data Sovereignty', 'Regular Audits', 'Secure Processing', 'Staff Training'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                  <ShieldCheck className="w-5 h-5 text-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-32 h-32 bg-brand-accent text-slate-900 rounded-full flex items-center justify-center font-black text-2xl">
              GDPR
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
