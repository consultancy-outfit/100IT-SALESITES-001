import { Target, Eye, Heart, ShieldCheck, Award, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 mb-8 tracking-tight">
              Pioneering IT for the <span className="text-indigo-600">Care Generation</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Social & Care IT was founded with a single mission: to ensure that those who care for our society have the very best technology at their fingertips.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-zinc-900">Our Story</h2>
              <p className="text-zinc-600 leading-relaxed">
                Founded in 2012, Social & Care IT began as a small team of engineers dedicated to helping local care homes in the Midlands. We saw first-hand the challenges faced by care providers—outdated systems, security concerns, and the overwhelming complexity of digital transformation.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Today, we support over 200 care organisations across the UK, from independent residential homes to national healthcare groups. Our growth has been driven by our deep sector knowledge and our unwavering commitment to the people who use our systems every day.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">12+</div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest">Active Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-zinc-100">
                <img 
                  src="https://images.unsplash.com/photo-1573161158332-554e1d2e5ca7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Office" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-lg font-bold">"Technology should empower care, not hinder it."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-[2rem] bg-zinc-900 border border-zinc-800">
              <Target className="w-12 h-12 text-indigo-500 mb-8" />
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-zinc-400 leading-relaxed">
                To provide the UK care sector with secure, reliable, and innovative IT solutions that enhance operational efficiency and improve the quality of care delivered to residents and patients.
              </p>
            </div>
            <div className="p-10 rounded-[2rem] bg-zinc-900 border border-zinc-800">
              <Eye className="w-12 h-12 text-indigo-500 mb-8" />
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-zinc-400 leading-relaxed">
                To be the UK's most trusted digital partner for social care, leading the way in ethical technology use and setting the standard for cyber security in healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-zinc-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart className="w-8 h-8 text-indigo-600" />,
                title: 'Care-First Approach',
                desc: 'We never forget that behind every screen is a person providing or receiving care.'
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
                title: 'Integrity & Security',
                desc: 'We handle sensitive data with the highest level of ethical and technical rigour.'
              },
              {
                icon: <Award className="w-8 h-8 text-indigo-600" />,
                title: 'Excellence in Support',
                desc: 'We strive for perfection in every ticket we resolve and every system we build.'
              }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="inline-block p-6 rounded-3xl bg-zinc-50 mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{value.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-zinc-900">Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'David Sterling',
                role: 'Founder & CEO',
                bio: '20 years in healthcare IT, former NHS systems consultant.'
              },
              {
                name: 'Sarah Jenkins',
                role: 'Chief Technology Officer',
                bio: 'Expert in cyber security and cloud architecture for regulated sectors.'
              },
              {
                name: 'Michael O\'Connor',
                role: 'Head of Client Success',
                bio: 'Dedicated to ensuring our care partners get the most from their technology.'
              }
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-200 mb-6">
                  <img 
                    src={`https://picsum.photos/seed/leader${i}/600/800`} 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-zinc-900">{leader.name}</h4>
                <div className="text-indigo-600 font-medium mb-4">{leader.role}</div>
                <p className="text-zinc-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 rounded-2xl bg-emerald-50 text-emerald-600 mb-8">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Commitment to GDPR</h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            As a specialist IT provider for the care sector, we take data protection with the utmost seriousness. We are fully GDPR compliant and help our clients achieve and maintain compliance through robust technical controls, regular audits, and staff training.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 text-sm font-bold">Cyber Essentials Plus</span>
            <span className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 text-sm font-bold">ISO 27001 Certified</span>
            <span className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 text-sm font-bold">ICO Registered</span>
          </div>
        </div>
      </section>
    </div>
  );
}
