import { motion } from 'motion/react';
import { ShieldCheck, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Empowering Manchester through Technology
            </h1>
            <p className="text-xl text-slate-300">
              We are Visiting Angels Manchester West. Not your typical IT firm—we are partners in your growth, guardians of your data, and architects of your digital future.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  Founded with a clear vision to bring enterprise-level IT services to the SME market in the North West, Visiting Angels Manchester West has grown from a small consultancy to a full-service managed service provider.
                </p>
                <p className="mb-4">
                  We recognised that many British businesses were underserved by generic, faceless IT support. They needed a local partner who understood the specific challenges of the UK regulatory landscape and the operational needs of modern British industry.
                </p>
                <p>
                  Today, we support hundreds of users across Manchester, ensuring their technology is an asset, not a liability.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <Award className="h-5 w-5 text-indigo-600 mr-2" />
                  Our Mission
                </h3>
                <p className="text-slate-600">
                  To provide reliable, secure, and human-centric IT solutions that enable Manchester businesses to thrive in a digital-first world.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <ShieldCheck className="h-5 w-5 text-indigo-600 mr-2" />
                  Our Vision
                </h3>
                <p className="text-slate-600">
                  To be the most trusted IT partner in the North West, known for our technical excellence and unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-center text-slate-900 mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "We do what we say. No hidden fees, no jargon, just honest advice." },
              { title: "Security First", desc: "We treat your data with the same vigilance as our own. GDPR compliance is in our DNA." },
              { title: "Excellence", desc: "We don't settle for 'good enough'. We aim for 'outstanding' in every ticket we resolve." }
            ].map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h3>
                <p className="text-slate-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Managing Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" },
              { name: "David Thorne", role: "Technical Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
              { name: "Emily Clarke", role: "Head of Operations", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" }
            ].map((person, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
                <p className="text-indigo-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="h-16 w-16 text-indigo-400 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-6">Our Commitment to GDPR</h2>
          <p className="text-indigo-100 text-lg leading-relaxed">
            We understand the critical importance of data privacy in the UK. All our processes, tools, and storage solutions are rigorously vetted to ensure full compliance with the General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. When you partner with us, you partner with a compliant, secure, and responsible data handler.
          </p>
        </div>
      </section>
    </div>
  );
}
