import { motion } from 'framer-motion';
import { Users, Target, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">About Us</h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
            We are Tameside Supported Living. A dedicated team of IT professionals committed to empowering UK businesses through technology.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">
              To provide accessible, enterprise-level IT services to UK businesses of all sizes. We strive to remove technical barriers, allowing our clients to focus on what they do best—growing their business.
            </p>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-700 leading-relaxed">
              To be the most trusted IT partner in the UK, known for our integrity, technical excellence, and unwavering commitment to data security and client success.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg prose-slate mx-auto text-slate-600">
            <p>
              Founded with a clear purpose, Tameside Supported Living began as a response to the growing need for reliable, locally-based IT support in the North West of England. We recognised that many businesses were being underserved by generic, impersonal support providers.
            </p>
            <p>
              Over the years, we have grown from a small consultancy into a full-service IT firm, supporting clients across the UK. Despite our growth, we have maintained our core philosophy: treating every client's business with the same care and attention as our own.
            </p>
            <p>
              Today, we are proud to support a diverse range of industries, from healthcare and finance to logistics and retail, providing them with the digital infrastructure they need to compete in a modern economy.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Integrity', desc: 'We believe in honest, transparent advice. We never oversell or recommend unnecessary solutions.' },
            { title: 'Excellence', desc: 'We hold ourselves to the highest technical standards, constantly updating our skills to stay ahead.' },
            { title: 'Security', desc: 'We adopt a security-first approach in everything we do, ensuring your data is always protected.' },
          ].map((value, idx) => (
            <div key={idx} className="text-center p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GDPR Commitment */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Committed to GDPR Compliance</h2>
          <p className="text-lg text-slate-300 mb-8">
            We understand the importance of data privacy. All our processes and solutions are designed with strict adherence to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We help you stay compliant while keeping your data secure.
          </p>
        </div>
      </div>
    </div>
  );
}
