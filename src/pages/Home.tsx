import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Zap, Users, BarChart3, Globe, CheckCircle2, ArrowRight, Quote, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const BENEFITS = [
  {
    icon: <Shield className="text-indigo-600" />,
    title: "Cybersecurity First",
    description: "Enterprise-grade protection for your business data and digital assets."
  },
  {
    icon: <Zap className="text-indigo-600" />,
    title: "Rapid Response",
    description: "Our UK-based helpdesk resolves 95% of issues within the first 30 minutes."
  },
  {
    icon: <BarChart3 className="text-indigo-600" />,
    title: "Strategic Growth",
    description: "IT roadmaps designed to scale with your business ambitions."
  }
];

const INDUSTRIES = [
  "Legal & Professional Services",
  "Financial Technology",
  "Healthcare & Life Sciences",
  "Manufacturing & Logistics",
  "Retail & E-commerce",
  "Education & Non-Profit"
];

const CASE_STUDIES = [
  {
    client: "Yorkshire Legal Group",
    result: "£45k Annual Savings",
    description: "Complete cloud migration and infrastructure optimization.",
    image: "https://picsum.photos/seed/legal/800/600"
  },
  {
    client: "Midlands Manufacturing",
    result: "40% Productivity Boost",
    description: "Implementation of custom ERP and secure remote working solutions.",
    image: "https://picsum.photos/seed/factory/800/600"
  }
];

const TESTIMONIALS = [
  {
    name: "Alistair Graham",
    role: "Managing Director, Graham & Co",
    content: "HCF The Springs transformed our IT from a constant headache into a competitive advantage. Their UK team is exceptional."
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager, BioTech UK",
    content: "The level of expertise and responsiveness is unmatched. They truly understand the needs of growing British businesses."
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                Leading UK IT Services Provider
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Future-Proof Your <span className="text-indigo-600">Business Technology</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                HCF The Springs delivers managed IT support, cloud solutions, and cybersecurity tailored for the unique challenges of the UK market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group"
                >
                  Book a Free Audit
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-0 hidden lg:block rounded-l-[100px]">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Cpu size={400} className="text-indigo-600" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/office/800/800"
                alt="Modern UK Office"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-slate-100">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">99.9%</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Uptime Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Your Strategic IT Partner in the Heart of the UK
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Based in Leeds, HCF The Springs provides comprehensive IT management that goes beyond just fixing computers. We act as your outsourced CTO, ensuring your technology infrastructure is a robust foundation for growth.
              </p>
              <ul className="space-y-4 mb-10">
                {["Proactive 24/7 Monitoring", "GDPR & Cyber Essentials Compliance", "Strategic IT Roadmap Planning", "Dedicated UK Account Management"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={20} className="text-indigo-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn more about our story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose HCF The Springs?</h2>
            <p className="text-slate-600">We combine technical excellence with a deep understanding of the British business landscape.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Specialist Support for UK Industries</h2>
              <p className="text-slate-400 text-lg mb-10">
                We don't believe in one-size-fits-all. Our solutions are tailored to meet the regulatory and operational requirements of key British sectors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INDUSTRIES.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                    <Globe size={18} className="text-indigo-400" />
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/tech1/400/500" className="rounded-2xl w-full h-64 object-cover" alt="Industry 1" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/tech2/400/300" className="rounded-2xl w-full h-48 object-cover" alt="Industry 2" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/tech3/400/300" className="rounded-2xl w-full h-48 object-cover" alt="Industry 3" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/tech4/400/500" className="rounded-2xl w-full h-64 object-cover" alt="Industry 4" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Measurable Results</h2>
              <p className="text-slate-600">See how we've helped British businesses optimize their operations and save on IT costs.</p>
            </div>
            <Link to="/services" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
              View All Services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-indigo-600 font-bold text-sm">
                    {study.result}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.client}</h3>
                <p className="text-slate-600 mb-4">{study.description}</p>
                <span className="text-indigo-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Case Study <ArrowRight size={18} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative">
                <Quote className="absolute top-8 right-8 text-indigo-100" size={60} />
                <p className="text-lg text-slate-600 italic mb-8 relative z-10">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
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
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-indigo-600 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Ready to Elevate Your IT?</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto relative z-10">
              Join hundreds of UK businesses that trust HCF The Springs for their technology needs. Let's build a secure, scalable future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-lg"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/pricing"
                className="bg-indigo-700 text-white border border-indigo-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-800 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
