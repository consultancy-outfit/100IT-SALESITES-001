import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Award, Users } from 'lucide-react';

const values = [
  {
    title: "Integrity",
    description: "We operate with complete transparency and honesty in every interaction.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in technical delivery and client service.",
    icon: Award,
  },
  {
    title: "Collaboration",
    description: "We work as an extension of your team, not just a third-party vendor.",
    icon: Users,
  },
];

const leadership = [
  {
    name: "David Sterling",
    role: "Managing Director",
    bio: "With over 20 years in IT infrastructure, David leads our strategic vision with a focus on client success.",
  },
  {
    name: "Emma Richardson",
    role: "Technical Director",
    bio: "Emma oversees our service delivery and cybersecurity operations, ensuring technical excellence.",
  },
  {
    name: "Mark Thompson",
    role: "Head of Client Relations",
    bio: "Mark ensures our services are perfectly aligned with our clients' evolving business needs.",
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Your Trusted <span className="text-primary-400">Technology Partner</span> in Greater Manchester
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Founded on the principles of reliability and expertise, we've grown into a leading IT 
              services provider, supporting businesses across the North West and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Greater Manchester Specialist Support Service was established with a clear mission: 
                  to bridge the gap between complex technology and business growth. We saw too many 
                  companies struggling with IT that hindered rather than helped.
                </p>
                <p>
                  Over the years, we've assembled a team of the brightest technical minds in the region. 
                  Our journey has been defined by a commitment to staying ahead of the curve, 
                  investing in the latest cybersecurity tools, and never losing sight of the human 
                  element in IT support.
                </p>
                <p>
                  Today, we are proud to be the backbone of technology for hundreds of UK firms, 
                  providing the stability and innovation they need to thrive in a digital-first world.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/about-team/800/600" 
                className="rounded-3xl shadow-2xl" 
                alt="Our Team"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-primary-100 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <Target className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To provide innovative, reliable, and secure IT solutions that empower our clients 
                to achieve their full potential through the strategic use of technology.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <Eye className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the most trusted IT partner in the UK, recognised for our technical 
                excellence, proactive approach, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-600 mb-6">
                  <v.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-slate-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Leadership</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                <img 
                  src={`https://picsum.photos/seed/leader-${i}/400/400`} 
                  className="w-full h-64 object-cover" 
                  alt={person.name}
                  referrerPolicy="no-referrer"
                />
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-1">{person.name}</h4>
                  <div className="text-primary-600 text-sm font-medium mb-4">{person.role}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-emerald-600 p-4 rounded-2xl">
              <ShieldCheck className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-emerald-900 mb-2">Our GDPR Commitment</h3>
              <p className="text-emerald-800 leading-relaxed">
                We take data privacy seriously. As a UK-based IT provider, we are fully committed to 
                GDPR compliance, ensuring that both our internal processes and the solutions we 
                provide to our clients meet the highest standards of data protection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
