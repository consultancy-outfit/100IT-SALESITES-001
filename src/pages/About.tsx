import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, Award, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-zinc-900 text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-8 tracking-tight">Crafting the Future of <span className="text-zinc-400">British IT.</span></h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Kanmore House was founded on a simple principle: that UK businesses deserve IT support that is as ambitious and reliable as they are.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Our Story</h2>
              <h3 className="text-4xl font-bold text-zinc-900 mb-8 leading-tight">From a London Startup to a National IT Powerhouse.</h3>
              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Established in 2015, Kanmore House began as a small consultancy in London, helping local firms navigate the early complexities of cloud computing and digital security.
                </p>
                <p>
                  Today, we have grown into a multi-disciplinary IT services provider, supporting hundreds of clients across the United Kingdom. Our growth has been fueled by a relentless commitment to technical excellence and a deep understanding of the commercial pressures facing modern businesses.
                </p>
                <p>
                  We believe that technology should be an enabler, not a hurdle. Our mission is to strip away the complexity of IT, providing clear, secure, and scalable solutions that drive real business value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-zinc-100 rounded-[3rem] overflow-hidden border border-zinc-200">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=1000" 
                  alt="Kanmore House Office"
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-zinc-900 text-white p-10 rounded-3xl shadow-xl hidden md:block">
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] border border-zinc-200 shadow-sm">
              <div className="inline-flex p-4 bg-zinc-100 rounded-2xl mb-8">
                <Target className="h-8 w-8 text-zinc-900" />
              </div>
              <h3 className="text-3xl font-bold text-zinc-900 mb-6">Our Mission</h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                To empower UK enterprises by providing world-class IT infrastructure and security that enables them to compete on a global stage without technical friction.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] border border-zinc-200 shadow-sm">
              <div className="inline-flex p-4 bg-zinc-100 rounded-2xl mb-8">
                <Eye className="h-8 w-8 text-zinc-900" />
              </div>
              <h3 className="text-3xl font-bold text-zinc-900 mb-6">Our Vision</h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                To be the most trusted technology partner in the UK, recognized for our integrity, innovation, and unwavering commitment to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Our Values</h2>
            <h3 className="text-4xl font-bold text-zinc-900">The Principles That Guide Us</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Integrity', desc: 'We operate with complete transparency in every client interaction.' },
              { icon: Award, title: 'Excellence', desc: 'We never settle for "good enough" in our technical implementations.' },
              { icon: Heart, title: 'Partnership', desc: 'We view ourselves as an extension of your business, not just a vendor.' },
              { icon: Globe, title: 'Responsibility', desc: 'We take our role in the UK digital economy seriously, focusing on security and compliance.' }
            ].map((value, i) => (
              <div key={i} className="text-center p-8">
                <div className="inline-flex p-4 bg-zinc-50 rounded-2xl mb-6">
                  <value.icon className="h-6 w-6 text-zinc-900" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{value.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Leadership</h2>
            <h3 className="text-4xl font-bold text-zinc-900">The Minds Behind Kanmore House</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                name: 'David Kanmore', 
                role: 'Founder & CEO', 
                bio: 'With 20 years in enterprise IT, David leads our strategic vision.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600'
              },
              { 
                name: 'Alistair Reed', 
                role: 'Chief Technical Officer', 
                bio: 'A cybersecurity specialist with a passion for cloud architecture.',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600'
              },
              { 
                name: 'Eleanor Smith', 
                role: 'Director of Operations', 
                bio: 'Ensuring our support desk delivers world-class service every single day.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600'
              }
            ].map((leader, i) => (
              <div key={i} className="bg-white rounded-3xl border border-zinc-200 overflow-hidden group">
                <div className="aspect-square bg-zinc-100 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-zinc-900 mb-1">{leader.name}</h4>
                  <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">{leader.role}</div>
                  <p className="text-zinc-500 text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-4 bg-emerald-50 rounded-2xl mb-8">
            <Shield className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Commitment to GDPR & Data Privacy</h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            As a UK-based IT provider, we understand the critical importance of data protection. We are fully committed to GDPR compliance and hold ourselves to the highest standards of data security. Every solution we design is built with "privacy by design" at its core.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Cyber Essentials Plus</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm font-bold text-zinc-900 uppercase tracking-widest">ISO 27001 Aligned</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
