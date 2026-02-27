import { motion } from "motion/react";
import { ArrowRight, Shield, Zap, Globe, Users, BarChart3, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 rounded-full">
                UK'S Leading IT Consultancy
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
                Future-Proof Your <span className="text-emerald-600">Business</span> Technology
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Vibrance Outreach provides world-class managed IT services, cyber security, and cloud strategy tailored for the British market.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  Explore Services <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Secure by Design", desc: "GDPR compliant and Cyber Essentials focused security protocols." },
              { icon: Zap, title: "99.9% Uptime", desc: "Proactive monitoring to ensure your operations never stop." },
              { icon: Globe, title: "UK Wide Support", desc: "Local expertise with national reach across the United Kingdom." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <item.icon className="w-10 h-10 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Specialised IT Solutions for UK Industries
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We understand the unique regulatory and operational challenges of the British business landscape.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Financial Services",
                  "Legal & Professional",
                  "Healthcare & NHS Trusts",
                  "Manufacturing",
                  "Education",
                  "Retail & E-commerce",
                ].map((industry) => (
                  <div key={industry} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="font-medium text-slate-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/it1/600/800" alt="Tech" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/it2/600/400" alt="Office" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/it3/600/400" alt="Data" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Measurable Results</h2>
            <p className="text-slate-400">How we've helped British businesses thrive.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
              <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs">Legal Sector</span>
              <h3 className="text-2xl font-bold mt-4 mb-6">Cloud Migration for London Law Firm</h3>
              <p className="text-slate-300 mb-8">
                Successfully migrated a 150-user firm to a secure private cloud, ensuring full SRA compliance.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold text-emerald-400">£45,000</p>
                  <p className="text-sm text-slate-400">Annual Savings</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-400">100%</p>
                  <p className="text-sm text-slate-400">Uptime Achieved</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
              <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs">Manufacturing</span>
              <h3 className="text-2xl font-bold mt-4 mb-6">Infrastructure Overhaul in Manchester</h3>
              <p className="text-slate-300 mb-8">
                Modernised legacy server rooms with high-performance virtualised clusters.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold text-emerald-400">35%</p>
                  <p className="text-sm text-slate-400">Efficiency Boost</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-400">£12,000</p>
                  <p className="text-sm text-slate-400">IT Budget Reclaimed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Trusted by British Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alistair Thompson", role: "CEO, Thompson Logistics", quote: "Vibrance Outreach transformed our chaotic IT into a streamlined engine. Their response time is unmatched." },
              { name: "Sarah Jenkins", role: "Partner, Jenkins & Co Solicitors", quote: "Security was our biggest concern. Their Cyber Essentials guidance was invaluable for our firm's reputation." },
              { name: "David Miller", role: "Director, Northern Manufacturing", quote: "A truly professional British company. They speak our language and understand our local market needs." },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}
                </div>
                <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your IT?</h2>
            <p className="text-xl text-emerald-50 text-balance mb-10">
              Join hundreds of UK businesses that trust Vibrance Outreach for their technology needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-white text-emerald-600 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-xl"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
