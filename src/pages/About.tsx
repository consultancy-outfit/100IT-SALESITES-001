import { motion } from 'motion/react';
import { Target, Eye, History, Heart, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl font-bold mb-8 leading-tight"
            >
              Independent Expertise. <br />
              <span className="text-zinc-500">British Values.</span>
            </motion.h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              We started with a simple mission: to provide UK businesses with 
              unbiased, high-quality IT services that prioritise independence 
              over vendor commissions.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img src="https://picsum.photos/seed/london-skyline/1200/1200" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-zinc-900" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                To empower British organisations by delivering innovative, secure, and 
                independent technology solutions that drive sustainable growth and 
                operational excellence.
              </p>
            </div>
            <div className="space-y-8">
              <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-zinc-900" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                To be the UK's most trusted independent IT partner, recognised for our 
                unwavering commitment to technical integrity and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="https://picsum.photos/seed/team-meeting/800/1000" className="rounded-[3rem] grayscale" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-zinc-900">15+</p>
                <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest">Years of Experience</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-zinc-400 font-bold uppercase tracking-widest text-sm">
                <History className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-4xl font-bold leading-tight">Founded on the Principle of <span className="italic text-zinc-500">Independence.</span></h2>
              <p className="text-zinc-600 leading-relaxed">
                Established in London, ATTAINING-INDEPENDENCE was born out of a frustration with the 
                traditional IT consultancy model, where recommendations were often driven by 
                vendor kickbacks rather than client needs.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                We decided to do things differently. By remaining strictly independent, we ensure 
                that every solution we propose is selected solely for its technical merit and 
                its ability to deliver value to our clients. Over the last decade, we've grown 
                from a small team of engineers into a full-service IT partner, serving 
                businesses across the UK.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-2xl mb-1">500+</h4>
                  <p className="text-sm text-zinc-500">Projects Completed</p>
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-1">98%</h4>
                  <p className="text-sm text-zinc-500">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-zinc-600">The experts driving our independent vision forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "James Arkwright", role: "Managing Director", image: "https://picsum.photos/seed/man1/400/500" },
              { name: "Eleanor Sterling", role: "Technical Director", image: "https://picsum.photos/seed/woman1/400/500" },
              { name: "Robert Finch", role: "Director of Cybersecurity", image: "https://picsum.photos/seed/man2/400/500" }
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-zinc-100">
                  <img src={leader.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-zinc-500">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Integrity", desc: "We act with honesty and transparency in all our dealings, ensuring our advice is always in your best interest." },
              { icon: <Users className="w-8 h-8" />, title: "Collaboration", desc: "We work as an extension of your team, building long-term partnerships based on mutual trust and respect." },
              { icon: <Heart className="w-8 h-8" />, title: "Excellence", desc: "We strive for the highest standards in everything we do, from technical implementation to client support." }
            ].map((value, i) => (
              <div key={i} className="p-10 border border-zinc-800 rounded-3xl hover:bg-zinc-800 transition-colors">
                <div className="mb-6 text-zinc-500">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-50 p-12 lg:p-20 rounded-[3rem] border border-zinc-100 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to GDPR</h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                As a UK-based IT company, we take data protection and privacy extremely seriously. 
                We are fully committed to compliance with the UK General Data Protection Regulation (UK GDPR) 
                and the Data Protection Act 2018.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                We implement rigorous technical and organisational measures to ensure the security 
                and confidentiality of all data we process, both for our own operations and on behalf 
                of our clients.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full border-8 border-zinc-200 flex items-center justify-center text-center p-6">
                <span className="font-bold text-zinc-400 uppercase tracking-widest text-xs">GDPR Compliant & Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
