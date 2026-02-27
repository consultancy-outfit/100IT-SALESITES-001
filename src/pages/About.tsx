import { motion } from 'motion/react';
import { Shield, Users, Target, Heart, Award, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Swanton Community Services Suffolk
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            We are a Suffolk-based technology partner dedicated to empowering UK businesses through secure, scalable, and human-centric IT solutions.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-indigo-50 p-10 rounded-2xl border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-700 leading-relaxed">
                To demystify technology for British SMEs, providing enterprise-grade security and infrastructure that is accessible, affordable, and aligned with business goals. We strive to be more than a service provider; we are your strategic partner in growth.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-700 leading-relaxed">
                A future where every UK business, regardless of size, can leverage the power of cloud computing and advanced cybersecurity to compete on a global stage, supported by a local team that cares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Journey</h2>
          <div className="space-y-12 relative before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200">
            {[
              { year: '2015', title: 'Founded in Suffolk', desc: 'Started as a small consultancy helping local charities modernise their IT systems.' },
              { year: '2018', title: 'Expansion to East Anglia', desc: 'Opened our second office and launched our 24/7 managed support desk.' },
              { year: '2021', title: 'Cyber Essentials Partner', desc: 'Achieved certification to help clients navigate increasing cyber threats.' },
              { year: '2024', title: 'National Reach', desc: 'Now supporting clients across the UK with a team of 25+ certified engineers.' }
            ].map((milestone, index) => (
              <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-sm transform -translate-x-1/2 z-10"></div>
                <div className="ml-16 md:ml-0 w-full md:w-5/12 bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <span className="text-indigo-600 font-bold text-sm tracking-wider">{milestone.year}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600 text-sm">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Meet The Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', role: 'Managing Director', bio: '15+ years in IT strategy. Passionate about digital transformation for non-profits.' },
              { name: 'Michael Thorne', role: 'Technical Director', bio: 'Certified Ethical Hacker and Cloud Architect. Leads our cybersecurity initiatives.' },
              { name: 'Emma Wood', role: 'Head of Operations', bio: 'Ensures our service delivery meets the highest standards of efficiency and care.' }
            ].map((leader, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 text-center hover:border-indigo-100 transition-colors group">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden">
                   <img src={`https://ui-avatars.com/api/?name=${leader.name}&background=random`} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                <div className="text-indigo-600 font-medium text-sm mb-4">{leader.role}</div>
                <p className="text-slate-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Integrity', desc: 'We do what is right, not what is easy. Transparent pricing and honest advice.' },
              { icon: Users, title: 'Partnership', desc: 'We work with you, not just for you. Your success is our success.' },
              { icon: Award, title: 'Excellence', desc: 'Commitment to the highest technical standards and continuous learning.' },
              { icon: Heart, title: 'Community', desc: 'Deeply rooted in Suffolk, we give back to local causes and initiatives.' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment to GDPR</h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Data privacy is at the heart of everything we do. As a UK-based company, we strictly adhere to the General Data Protection Regulation (GDPR) and the Data Protection Act 2018. We ensure that all client data is processed lawfully, transparently, and securely, with robust technical measures in place to prevent unauthorised access.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-indigo-700 border border-indigo-100 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            ICO Registered
          </div>
        </div>
      </section>
    </div>
  );
}
