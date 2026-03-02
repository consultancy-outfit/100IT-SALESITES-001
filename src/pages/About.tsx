import { motion } from 'framer-motion';
import { Shield, Target, Eye, Users, Heart, CheckCircle2, Award } from 'lucide-react';

const values = [
  {
    title: "Integrity",
    desc: "We believe in honest, transparent communication and ethical business practices.",
    icon: <Shield className="text-indigo-600" size={24} />
  },
  {
    title: "Innovation",
    desc: "Constantly exploring new technologies to provide the best solutions for our clients.",
    icon: <Target className="text-indigo-600" size={24} />
  },
  {
    title: "Client-Centric",
    desc: "Your success is our success. We tailor our services to meet your unique needs.",
    icon: <Users className="text-indigo-600" size={24} />
  },
  {
    title: "Excellence",
    desc: "We strive for the highest standards in everything we do, from support to security.",
    icon: <Award className="text-indigo-600" size={24} />
  }
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#4f46e5,transparent_50%)]"></div>
        </div>
        <div className="section-padding relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            About <span className="text-indigo-400">Khattak IT</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            A dedicated team of technology experts committed to empowering UK businesses through digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Story</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Founded with a vision to simplify technology for UK businesses, Khattak IT Solutions has grown from a small consultancy to a full-service IT partner. We understand the challenges faced by modern enterprises and provide the tools and support needed to thrive in a digital-first world.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-indigo-50 border border-indigo-100">
              <Target className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm text-slate-600">To provide reliable, secure, and scalable IT solutions that drive growth and innovation for our clients.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <Eye className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm text-slate-600">To be the most trusted IT partner in the UK, known for our technical excellence and client-centric approach.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Our Team" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-indigo-600">10+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years of<br />Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-24">
        <div className="section-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Core Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">The principles that guide our decisions and define our culture.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="mb-6 p-4 bg-indigo-50 rounded-2xl w-fit mx-auto">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Meet Our Leadership</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">The experts behind Khattak IT Solutions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              name: "Khalid Mehmood Khattak",
              role: "Founder & Managing Director",
              bio: "With over 15 years in the IT industry, Khalid leads the company with a focus on strategic growth and technical excellence.",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
            },
            {
              name: "Emma Thompson",
              role: "Head of Cybersecurity",
              bio: "Emma is a certified security expert dedicated to protecting our clients from evolving digital threats.",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
            },
            {
              name: "David Wilson",
              role: "Technical Director",
              bio: "David oversees our technical operations, ensuring that we deliver the most reliable and efficient solutions.",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
            }
          ].map((leader, i) => (
            <div key={i} className="space-y-6 text-center">
              <div className="rounded-[2.5rem] overflow-hidden aspect-square border border-slate-200 shadow-sm">
                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-indigo-600 font-bold text-sm uppercase tracking-wider mb-4">{leader.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="section-padding bg-indigo-600 text-white rounded-[3rem] mb-24 mx-6 md:mx-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Shield size={64} className="mx-auto text-indigo-200" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our GDPR Commitment</h2>
          <p className="text-indigo-100 text-lg leading-relaxed">
            At Khattak IT Solutions, we take data protection seriously. We are fully committed to GDPR compliance, ensuring that all client data is handled with the highest level of security and confidentiality. Our processes are regularly audited to maintain the strictest standards of data privacy.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-indigo-300" size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Data Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-indigo-300" size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Regular Audits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-indigo-300" size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Secure Storage</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
