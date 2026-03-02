import { motion } from 'motion/react';
import { Shield, Target, Eye, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-zinc-950 text-white py-24 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.3),transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Crafting the Future of <span className="text-emerald-500">UK Technology.</span></h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Sterling Standard IT was founded with a single mission: to provide British businesses with the same level of IT excellence usually reserved for global enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-zinc-900">Our Story</h2>
              <p className="text-zinc-600 leading-relaxed">
                Based in the heart of Liverpool, Sterling Standard Care Group Liverpool expanded its horizons to meet the growing digital demands of the modern era. What started as a dedicated support team for healthcare infrastructure has evolved into a premier IT services provider serving multiple sectors across the United Kingdom.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                We believe that technology should be an enabler, not a barrier. Our journey has been defined by a commitment to reliability, security, and a "people-first" approach to technical support.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <span className="block text-4xl font-bold text-emerald-600 mb-1">10+</span>
                  <span className="text-sm text-zinc-500 uppercase tracking-wider">Years Experience</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-emerald-600 mb-1">500+</span>
                  <span className="text-sm text-zinc-500 uppercase tracking-wider">Projects Delivered</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <Award className="h-10 w-10 mb-4" />
                <p className="font-bold text-lg">ISO 27001 Certified</p>
                <p className="text-emerald-100 text-sm">Security is in our DNA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-zinc-100">
              <Target className="h-12 w-12 text-emerald-600 mb-8" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h3>
              <p className="text-zinc-600 leading-relaxed">
                To empower UK businesses through innovative, secure, and reliable technology solutions that drive growth and operational excellence.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-zinc-100">
              <Eye className="h-12 w-12 text-emerald-600 mb-8" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Vision</h3>
              <p className="text-zinc-600 leading-relaxed">
                To be the United Kingdom's most trusted partner for digital transformation, known for our integrity, expertise, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'Honest advice and transparent pricing, always.' },
              { title: 'Excellence', desc: 'Striving for perfection in every line of code and every support ticket.' },
              { title: 'Security', desc: 'A non-negotiable foundation for everything we build.' },
              { title: 'Innovation', desc: 'Constantly evolving to stay ahead of the technology curve.' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">{value.title}</h4>
                <p className="text-zinc-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0">
              <Shield className="h-24 w-24 text-emerald-200" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">GDPR & Compliance Commitment</h2>
              <p className="text-emerald-100 text-lg leading-relaxed">
                As a UK-based entity, we take data protection seriously. We are fully committed to GDPR compliance and hold our partners to the same high standards. Your data security is our top priority, backed by continuous auditing and enterprise-grade encryption.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
