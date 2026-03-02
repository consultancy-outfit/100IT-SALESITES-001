import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Server,
  Cloud,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
                Lincolnshire's Leading Care Partner
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Empowering Care Through <span className="text-emerald-600">Smart Technology</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Sense supported living services Lincolnshire provides enterprise-grade managed services and technology solutions tailored for the UK's care and supported living sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern IT Office" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">99.9% Uptime</p>
                    <p className="text-xs text-slate-500">Guaranteed SLA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/5 -skew-x-12 transform origin-top-right" />
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Sense supported living services Lincolnshire?</h2>
            <p className="text-slate-600">We combine local Lincolnshire values with world-class technical expertise to deliver solutions that actually work for the care sector.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-emerald-600" size={32} />,
                title: "Cyber Resilience",
                desc: "Advanced threat protection and GDPR-compliant security frameworks to keep your data safe."
              },
              {
                icon: <Zap className="text-emerald-600" size={32} />,
                title: "Proactive Support",
                desc: "We fix issues before they impact your business with 24/7 monitoring and rapid response."
              },
              {
                icon: <BarChart3 className="text-emerald-600" size={32} />,
                title: "Strategic Growth",
                desc: "IT roadmaps designed to scale with your business, ensuring technology is an asset, not a cost."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Specialised IT Support for UK Industries</h2>
              <p className="text-slate-400 mb-10 text-lg">We understand the unique regulatory and operational challenges of British business sectors.</p>
              <div className="space-y-6">
                {[
                  "Healthcare & Social Care (CQC Compliant)",
                  "Legal & Professional Services",
                  "Manufacturing & Logistics",
                  "Education & Public Sector",
                  "Finance & FinTech"
                ].map((industry, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-lg">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-xl bg-slate-800 flex items-center justify-center p-6 text-center">
                  <div>
                    <Server className="mx-auto mb-3 text-emerald-500" size={40} />
                    <p className="font-bold">Managed Infrastructure</p>
                  </div>
                </div>
                <div className="h-64 rounded-xl bg-emerald-600 flex items-center justify-center p-6 text-center">
                  <div>
                    <Cloud className="mx-auto mb-3 text-white" size={40} />
                    <p className="font-bold">Cloud Migration</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-xl bg-slate-800 flex items-center justify-center p-6 text-center border border-slate-700">
                  <div>
                    <Lock className="mx-auto mb-3 text-emerald-500" size={40} />
                    <p className="font-bold">Security Audits</p>
                  </div>
                </div>
                <div className="h-48 rounded-xl bg-slate-800 flex items-center justify-center p-6 text-center">
                  <div>
                    <Users className="mx-auto mb-3 text-emerald-500" size={40} />
                    <p className="font-bold">Helpdesk Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Measurable Results</h2>
            <p className="text-slate-600">Real impact for real British businesses.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                  alt="Case Study 1" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Manufacturing
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Lincoln Precision Engineering</h3>
              <p className="text-slate-600 mb-4">Modernised legacy server infrastructure and implemented cloud-first disaster recovery.</p>
              <div className="flex items-center text-emerald-600 font-bold">
                <span className="text-3xl mr-2">£42,000</span>
                <span className="text-sm text-slate-500 font-normal">Annual savings in maintenance costs</span>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800" 
                  alt="Case Study 2" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Healthcare
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">East Midlands Care Group</h3>
              <p className="text-slate-600 mb-4">Deployed secure, GDPR-compliant mobile working solutions for 150+ field staff.</p>
              <div className="flex items-center text-emerald-600 font-bold">
                <span className="text-3xl mr-2">25%</span>
                <span className="text-sm text-slate-500 font-normal">Increase in staff productivity worth £110k/year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Graham",
                role: "Managing Director, Graham & Sons",
                quote: "Sense supported living services Lincolnshire transformed our chaotic systems into a streamlined engine. Their response time is second to none."
              },
              {
                name: "Sarah Pemberton",
                role: "Operations Manager, Lincoln Health",
                quote: "The peace of mind knowing our patient data is secure and GDPR compliant is invaluable. Sense supported living services Lincolnshire is highly recommended."
              },
              {
                name: "James Whittaker",
                role: "Founder, TechLincoln",
                quote: "Professional, knowledgeable, and local. Sense supported living services Lincolnshire speak plain English and deliver on their promises every time."
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 italic text-slate-600 relative">
                <div className="text-emerald-600 text-5xl absolute top-4 left-4 opacity-10">"</div>
                <p className="mb-6 relative z-10">{t.quote}</p>
                <div className="not-italic">
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Business Future?</h2>
          <p className="text-emerald-100 text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of Lincolnshire organisations who trust Sense supported living services Lincolnshire for their technology and support needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
          >
            Get a Free IT Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
