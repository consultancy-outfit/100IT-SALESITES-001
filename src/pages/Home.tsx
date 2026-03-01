import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Users, 
  BarChart3, 
  CheckCircle2, 
  Quote,
  Building2,
  Stethoscope,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { COMPANY_DETAILS } from "../constants";

export function Home() {
  const industries = [
    { name: "Legal & Professional", icon: Briefcase },
    { name: "Healthcare", icon: Stethoscope },
    { name: "Education", icon: GraduationCap },
    { name: "Construction", icon: Building2 },
  ];

  const caseStudies = [
    {
      title: "Cloud Migration for London Law Firm",
      result: "Saved £12,000/year in server maintenance costs",
      description: "Transitioned a 50-user firm to a secure cloud environment, improving remote access and data security.",
    },
    {
      title: "Cybersecurity Overhaul for Retail Group",
      result: "100% reduction in security incidents",
      description: "Implemented advanced threat detection and staff training across 12 UK locations.",
    },
  ];

  const testimonials = [
    {
      name: "James Harrison",
      role: "Director, Harrison & Co",
      text: "Aspire IT transformed our infrastructure. Their response time is exceptional, and they truly understand the UK business landscape.",
    },
    {
      name: "Sarah Jenkins",
      role: "Operations Manager, EduTech UK",
      text: "Reliable, professional, and forward-thinking. They are more than just a service provider; they are a strategic partner.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Trusted IT Partner in the UK
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Future-Proof Your <span className="text-indigo-600">Business</span> with Expert IT.
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                From managed support to advanced cybersecurity, we provide the technology foundation your UK business needs to scale securely and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95 group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-900 border border-slate-200 font-bold hover:bg-slate-50 transition-all active:scale-95"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <img
                src="https://picsum.photos/seed/it-office/800/600"
                alt="Modern IT Office"
                className="rounded-3xl shadow-2xl relative z-10 border border-white/20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-bold text-slate-900">99.9% Uptime</span>
                </div>
                <p className="text-xs text-slate-500">Guaranteed service levels for all our managed clients.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Aspire IT?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We combine technical excellence with a deep understanding of the British business environment.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Monitoring",
                desc: "We watch your systems around the clock so you don't have to.",
                icon: Zap,
                color: "bg-amber-50 text-amber-600",
              },
              {
                title: "UK-Based Support",
                desc: "Expert engineers based in the UK, ready to help when you need it.",
                icon: Users,
                color: "bg-indigo-50 text-indigo-600",
              },
              {
                title: "Security First",
                desc: "Advanced cybersecurity built into every solution we provide.",
                icon: ShieldCheck,
                color: "bg-emerald-50 text-emerald-600",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl ${benefit.color} flex items-center justify-center mb-6`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Industries We Serve Across the UK</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Every sector has unique technology requirements. We provide tailored IT strategies for diverse industries, ensuring compliance and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {industries.map((industry, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                    <industry.icon className="w-6 h-6 text-indigo-400" />
                    <span className="font-medium">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              {caseStudies.map((study, i) => (
                <div key={i} className="p-8 rounded-3xl bg-indigo-600 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-24 h-24" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2 block">Case Study</span>
                    <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                    <p className="text-indigo-100 text-sm mb-6">{study.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 font-bold text-white">
                      Result: {study.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 relative">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-indigo-100" />
                <p className="text-lg text-slate-700 italic mb-8 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative z-10">Ready to Elevate Your IT?</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join hundreds of UK businesses that trust Aspire IT for their technology needs. Let's build something great together.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-all shadow-xl active:scale-95"
              >
                Contact Us Now
              </Link>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="px-10 py-4 bg-indigo-500 text-white font-bold rounded-full border border-indigo-400 hover:bg-indigo-400 transition-all active:scale-95"
              >
                Call {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
