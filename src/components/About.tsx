import { motion } from 'motion/react';
import { Check, ShieldCheck, Globe, Award, Heart } from 'lucide-react';
import { COMPANY_DETAILS } from '../constants';

export const About = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-950 text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">About Bruntsfield House</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Founded on the principles of integrity and technical excellence, we are a premier IT partner dedicated to the success of British businesses.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 blur-[120px] -mr-20" />
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Bruntsfield House was established in Edinburgh with a singular vision: to bridge the gap between complex enterprise technology and the practical needs of growing UK businesses. 
              </p>
              <p>
                Over the years, we have evolved from a local support desk into a comprehensive technology consultancy, serving clients across the United Kingdom. Our journey is defined by our commitment to staying ahead of the curve, ensuring our clients always have access to the most secure and efficient tools available.
              </p>
              <p>
                Today, we pride ourselves on being more than just a service provider; we are a strategic partner, deeply invested in the operational resilience and digital growth of every business we support.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-4xl font-bold text-brand-600 mb-2">15+</h3>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-4xl font-bold text-brand-600 mb-2">200+</h3>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Clients Supported</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-4xl font-bold text-brand-600 mb-2">99.9%</h3>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Uptime Average</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-4xl font-bold text-brand-600 mb-2">100%</h3>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">UK Based Team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Globe className="text-brand-600" /> Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To empower UK businesses by providing secure, reliable, and innovative IT solutions that drive growth and operational excellence, delivered with a personal, professional touch.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-brand-600" /> Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted IT consultancy in the United Kingdom, recognised for our technical mastery, unwavering integrity, and commitment to our clients' long-term success.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'We provide honest, transparent advice, even when it means recommending a simpler, less expensive solution.' },
              { title: 'Excellence', desc: 'We strive for perfection in every deployment, from simple workstation setups to complex cloud migrations.' },
              { title: 'Security', desc: 'We believe security is a right, not a luxury. It is baked into everything we do, by default.' }
            ].map((value, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6">
                  <Heart size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
            <ShieldCheck className="absolute top-10 right-10 text-brand-500/20" size={120} />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">GDPR & Compliance</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                As a UK-based company, we take data protection seriously. We are fully committed to GDPR compliance and help our clients navigate the complexities of data sovereignty and privacy. Our internal processes are audited regularly to ensure the highest standards of confidentiality and security.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-sm"><Check className="text-brand-400" /> Data Processing Agreements</li>
                <li className="flex items-center gap-3 text-sm"><Check className="text-brand-400" /> UK Data Residency Options</li>
                <li className="flex items-center gap-3 text-sm"><Check className="text-brand-400" /> Regular Security Audits</li>
                <li className="flex items-center gap-3 text-sm"><Check className="text-brand-400" /> Cyber Essentials Certified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
