import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Globe, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-emerald-500"></span>
                Trusted IT Partner in Plymouth
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-7xl">
                Modern IT Solutions for <span className="text-emerald-600">British Business</span>
              </h1>
              <p className="max-w-[600px] text-lg text-slate-600 md:text-xl leading-relaxed">
                From managed support to advanced cyber security, we provide the technology foundation your company needs to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-8 text-base font-semibold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all">
                  Get a Free Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/services" className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-all">
                  Explore Services
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-office/800/600" 
                  alt="Modern IT Office" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="h-10 w-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">500+ Users Supported</p>
                    <p className="text-xs text-slate-500">Across the South West</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Overview Section */}
      <section className="py-20 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Uptime Guarantee", value: "99.9%" },
              { label: "Response Time", value: "< 15m" },
              { label: "Client Retention", value: "98%" },
              { label: "Annual Savings", value: "£12k+" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <p className="text-4xl font-bold text-emerald-600">{stat.value}</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Choose Hillside IT?</h2>
            <p className="text-lg text-slate-600">We don't just fix computers; we build resilient technology ecosystems that drive growth.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Shield, title: "Enterprise Security", desc: "Military-grade encryption and threat detection for businesses of all sizes." },
              { icon: Zap, title: "Proactive Support", desc: "We identify and resolve issues before they impact your operations." },
              { icon: Globe, title: "Cloud Native", desc: "Expertise in Microsoft 365 and Azure to enable secure remote working." },
            ].map((benefit, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Specialised IT Support for UK Industries</h2>
              <p className="text-lg text-slate-400">Our team understands the unique regulatory and operational requirements of key British sectors.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Legal & Professional", "Manufacturing", "Healthcare", "Education", "Retail & E-commerce", "Construction"].map((industry, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/industry1/400/400" className="rounded-2xl" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/industry2/400/400" className="rounded-2xl mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Success Stories</h2>
              <p className="text-lg text-slate-600">Real results delivered to businesses across Devon and Cornwall.</p>
            </div>
            <Link to="/services" className="text-emerald-600 font-semibold flex items-center gap-2 hover:underline">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { 
                title: "Cloud Migration for Law Firm", 
                result: "£15,000 annual savings", 
                desc: "Migrated a 40-user practice to Azure, eliminating server costs and enabling secure remote work.",
                img: "https://picsum.photos/seed/case1/600/400"
              },
              { 
                title: "Cyber Security Overhaul", 
                result: "Zero breaches in 24 months", 
                desc: "Implemented multi-layer defense and staff training for a regional manufacturing group.",
                img: "https://picsum.photos/seed/case2/600/400"
              },
            ].map((caseStudy, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all">
                <img src={caseStudy.img} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="p-8 space-y-4">
                  <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider">{caseStudy.result}</div>
                  <h3 className="text-2xl font-bold text-slate-900">{caseStudy.title}</h3>
                  <p className="text-slate-600">{caseStudy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "James Harrison", role: "Director, West Country Legal", text: "Hillside IT transformed our workflow. Their response time is incredible, and they actually speak plain English." },
              { name: "Sarah Miller", role: "Operations Manager, Plymouth Tech", text: "The cloud migration was seamless. We didn't lose a single hour of productivity. Highly recommended." },
              { name: "Robert Davies", role: "Founder, Coastal Logistics", text: "Finally, an IT company that understands business goals. They've saved us thousands in unnecessary hardware costs." },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white shadow-sm border border-slate-100 space-y-6">
                <div className="flex gap-1 text-emerald-500">
                  {[1, 2, 3, 4, 5].map((s) => <Zap key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-3xl bg-emerald-600 p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Ready to Secure Your Business Future?</h2>
              <p className="text-xl text-emerald-50">Join hundreds of Plymouth businesses who trust Hillside IT for their technology needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-emerald-600 hover:bg-emerald-50 transition-all">
                  Book a Consultation
                </Link>
                <Link to="/pricing" className="inline-flex h-14 items-center justify-center rounded-full border border-emerald-400 bg-transparent px-10 text-lg font-bold text-white hover:bg-emerald-500 transition-all">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-emerald-700/20 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
