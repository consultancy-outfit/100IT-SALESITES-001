import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            About Highfields House
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            We are a premier UK IT services provider, dedicated to transforming technology from a business challenge into a strategic advantage.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in London, Highfields House was established with a singular vision: to provide British enterprises with IT support that is as reliable and professional as the businesses we serve.
                </p>
                <p>
                  We recognised a gap in the market for an IT partner that spoke plain English, understood commercial realities, and delivered on its promises. Over the years, we have grown from a small consultancy into a comprehensive managed services provider, supporting clients across finance, manufacturing, legal, and retail sectors.
                </p>
                <p>
                  Today, our team of certified engineers and strategic consultants work tirelessly to ensure our clients' infrastructure is secure, compliant, and primed for growth.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/office1/400/500" alt="Office" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/office2/400/500" alt="Team" className="rounded-2xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <Target className="h-10 w-10 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower UK businesses by delivering secure, scalable, and innovative IT solutions. We strive to eliminate technical friction, allowing our clients to focus entirely on their core commercial objectives.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <Eye className="h-10 w-10 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted and respected managed IT services provider in the United Kingdom, renowned for our technical excellence, uncompromising security standards, and exceptional client service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values & GDPR */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Values & Compliance</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Integrity', desc: 'We recommend solutions based on your business needs, not our margins. Honest, transparent advice always.' },
              { title: 'Excellence', desc: 'We hold ourselves to the highest technical standards, continuously investing in our team\'s certifications and skills.' },
              { title: 'Partnership', desc: 'We view ourselves as an extension of your team, deeply invested in your long-term success.' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="h-16 w-16 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-10 text-white flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <ShieldCheck className="h-8 w-8 text-emerald-400 mr-3" />
                <h3 className="text-2xl font-bold">Commitment to GDPR & Data Security</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                As a UK-based company, we understand the critical importance of data sovereignty and privacy. Highfields House operates in strict accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We implement privacy-by-design in all our solutions, ensuring your sensitive corporate data remains secure, compliant, and entirely within your control.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-center">
                <div className="text-emerald-400 font-bold text-xl mb-1">100%</div>
                <div className="text-sm text-slate-300 uppercase tracking-wider">UK Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
