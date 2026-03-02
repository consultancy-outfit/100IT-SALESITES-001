import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl font-bold mb-8 tracking-tight">About SENSE IT</h1>
              <p className="text-xl text-indigo-100 leading-relaxed">
                We are a Birmingham-based technology partner dedicated to helping UK businesses thrive through intelligent, reliable, and secure IT services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Our Story</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">A decade of technical excellence in the West Midlands.</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Founded in Birmingham, SENSE IT began with a simple mission: to provide enterprise-grade technology support to small and medium-sized businesses that were being underserved by traditional IT providers.
                </p>
                <p>
                  Over the years, we have grown into a full-service technology partner, supporting hundreds of clients across logistics, healthcare, and professional services. Our name, SENSE, reflects our approach—making sense of complex technology and providing sensible, ROI-driven solutions.
                </p>
                <p>
                  Today, we are proud to be a leading IT provider in the West Midlands, known for our technical expertise, British reliability, and commitment to our clients' success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                  alt="SENSE Supported Living Office" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 max-w-xs">
                <p className="text-5xl font-bold text-indigo-600 mb-2">10+</p>
                <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
                <Target size={28} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h4>
              <p className="text-slate-600 leading-relaxed">
                To empower UK businesses by delivering innovative, secure, and reliable IT solutions that drive efficiency and foster sustainable growth. We aim to be the invisible engine behind our clients' success.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
                <Eye size={28} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Our Vision</h4>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted technology partner in the UK, recognized for our technical brilliance, ethical approach, and unwavering commitment to client satisfaction in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Our Values</h2>
            <h3 className="text-4xl font-bold text-slate-900">The principles that guide us.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h5 className="text-xl font-bold text-slate-900 mb-4">Integrity First</h5>
              <p className="text-slate-600 text-sm leading-relaxed">We provide honest advice, even if it means recommending a simpler, lower-cost solution. Your trust is our most valuable asset.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-6">
                <Award size={32} />
              </div>
              <h5 className="text-xl font-bold text-slate-900 mb-4">Technical Excellence</h5>
              <p className="text-slate-600 text-sm leading-relaxed">We never stop learning. Our team stays at the forefront of technology to ensure you always have the best tools for the job.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h5 className="text-xl font-bold text-slate-900 mb-4">Client Centricity</h5>
              <p className="text-slate-600 text-sm leading-relaxed">We don't just support systems; we support people. We take the time to understand your business goals and align our services accordingly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Leadership</h2>
              <h3 className="text-4xl font-bold">The experts behind SENSE IT.</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "James Harrison", role: "Chief Executive Officer", bio: "20+ years in IT infrastructure and strategic consultancy." },
              { name: "Eleanor Wright", role: "Chief Technology Officer", bio: "Specialist in cloud architecture and cyber security compliance." },
              { name: "Robert Palmer", role: "Director of Operations", bio: "Ensuring world-class support delivery across all client accounts." }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-slate-800 rounded-3xl mb-6 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1560250097-0b93528c311a' : i === 1 ? '1573496359142-b8d87734a5a2' : '1519085360753-af0119f7cbe7'}?auto=format&fit=crop&w=600&q=80`} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h5 className="text-xl font-bold mb-1">{member.name}</h5>
                <p className="text-indigo-400 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-indigo-600 mx-auto mb-8 shadow-xl shadow-indigo-200">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment to GDPR & Security</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            As a UK-based company, we take data protection seriously. We are fully GDPR compliant and help our clients achieve and maintain Cyber Essentials certification. Your data security is integrated into every service we provide.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              Cyber Essentials Certified
            </div>
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              ICO Registered
            </div>
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              ISO 27001 Aligned
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
