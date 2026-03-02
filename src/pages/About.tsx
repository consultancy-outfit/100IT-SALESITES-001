import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users, Award } from 'lucide-react';

const values = [
  {
    title: "Integrity",
    description: "We operate with total transparency and honesty in all our technical recommendations.",
    icon: ShieldCheck
  },
  {
    title: "Excellence",
    description: "We strive for technical perfection and unmatched service quality in every project.",
    icon: Award
  },
  {
    title: "Client-Centric",
    description: "Your business goals drive our technology decisions, not the other way around.",
    icon: Users
  },
  {
    title: "Innovation",
    description: "We stay at the forefront of the IT landscape to bring you the latest secure solutions.",
    icon: Target
  }
];

const leaders = [
  {
    name: "Shauna Henderson",
    role: "Founder & CEO",
    bio: "With over 20 years in healthcare technology, Shauna founded SHS Solutions to bring enterprise-grade IT to the North East.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "David Miller",
    role: "Technical Director",
    bio: "A cyber security specialist with a passion for building resilient, cloud-native infrastructures for UK businesses.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            alt="Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Empowering the North East Through Technology</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Shauna HealthCare Services Solutions North East (SHS Solutions) was born from a vision to bridge the gap between complex technology and practical business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Founded in the heart of the North East, SHS Solutions began as a specialist consultancy for healthcare providers. We recognised that the stringent security and reliability requirements of the medical sector were exactly what modern businesses in every industry needed.
                </p>
                <p>
                  Today, we have grown into a full-service IT partner, supporting hundreds of organisations across the UK. Our name remains a testament to our roots in high-stakes healthcare technology, where downtime isn't just an inconvenience—it's critical.
                </p>
                <p>
                  We are proud to be a British company, committed to supporting the local economy and providing world-class technical expertise to our neighbours in Durham, Newcastle, Sunderland, and beyond.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" alt="Meeting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="pt-12 space-y-6">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" alt="Collaboration" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" alt="Success" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide secure, reliable, and innovative IT solutions that empower UK businesses to reach their full potential, ensuring technology is always an asset, never a barrier.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted IT partner in the North East, recognised for our technical excellence, integrity, and commitment to the success of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every decision we make and every solution we deliver.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="text-center p-8">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6">
                  <v.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="section-padding bg-brand-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck size={64} className="mx-auto mb-8 text-brand-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Commitment to GDPR & Compliance</h2>
            <p className="text-xl text-brand-100 leading-relaxed mb-10">
              As a company with deep roots in healthcare IT, data protection is in our DNA. We are fully committed to GDPR compliance and help our clients achieve the same through secure infrastructure, robust encryption, and rigorous data handling policies.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-brand-200" />
                <span className="font-semibold">Cyber Essentials Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-brand-200" />
                <span className="font-semibold">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-brand-200" />
                <span className="font-semibold">ISO 27001 Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-6">Meet Our Leadership</h2>
            <p className="text-slate-600">The experts driving our technical vision and client success.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leaders.map((leader, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-8 shadow-xl">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                <div className="text-brand-600 font-semibold mb-4">{leader.role}</div>
                <p className="text-slate-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircle({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
