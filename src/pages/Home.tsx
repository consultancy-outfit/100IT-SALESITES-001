import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Zap, Globe, Users, BarChart3, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-50 text-indigo-600 mb-6">
              Premier IT Services in Luton & Dunstable
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight">
              Powering Your Business with <span className="text-indigo-600">Smarter Technology</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We provide comprehensive managed IT support, cybersecurity, and cloud solutions tailored for UK businesses. Let us handle the tech while you focus on growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 group"
              >
                Explore Services
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all"
              >
                Get a Free Audit
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden"
          >
            <img
              src="https://picsum.photos/seed/it-office/800/600"
              alt="Modern IT Office"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="bg-slate-900 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {[
          { label: "Clients Supported", value: "250+" },
          { label: "Uptime Guarantee", value: "99.9%" },
          { label: "Response Time", value: "< 15m" },
          { label: "Projects Delivered", value: "1.2k" },
        ].map((stat, i) => (
          <div key={i} className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Choose Team24?</h2>
        <p className="mt-4 text-lg text-slate-600">
          We combine local expertise with world-class technology to deliver IT services that actually make a difference.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Shield className="text-indigo-600" size={32} />,
            title: "Security First",
            desc: "Every solution we build has security baked in from the ground up, protecting your data and reputation.",
          },
          {
            icon: <Zap className="text-indigo-600" size={32} />,
            title: "Proactive Support",
            desc: "We don't just fix things when they break; we monitor your systems 24/7 to prevent issues before they occur.",
          },
          {
            icon: <Globe className="text-indigo-600" size={32} />,
            title: "Local Expertise",
            desc: "Based in Luton, we understand the local business landscape and can be on-site whenever you need us.",
          },
        ].map((benefit, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="mb-6">{benefit.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
            <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Success Stories</h2>
          <p className="mt-4 text-lg text-slate-600">
            Real results for real UK businesses. See how we've helped our clients save money and improve efficiency.
          </p>
        </div>
        <Link to="/services" className="text-indigo-600 font-semibold flex items-center hover:underline">
          View all services <ChevronRight size={20} />
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {[
          {
            company: "Luton Logistics Ltd",
            result: "Saved £12,000/year",
            desc: "Optimised cloud infrastructure and consolidated legacy servers, resulting in significant annual savings and 40% faster data access.",
            image: "https://picsum.photos/seed/logistics/600/400",
          },
          {
            company: "Dunstable Legal Associates",
            result: "Zero Downtime in 2 Years",
            desc: "Implemented a robust disaster recovery plan and 24/7 managed support, ensuring continuous operation for critical legal services.",
            image: "https://picsum.photos/seed/legal/600/400",
          },
        ].map((study, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
              <img src={study.image} alt={study.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-bold text-indigo-600 shadow-lg">
                {study.result}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.company}</h3>
            <p className="text-slate-600 leading-relaxed">{study.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "James Harrison", role: "Director, Harrison & Co", text: "Team24 transformed our IT from a constant headache into a strategic asset. Their response times are incredible." },
          { name: "Sarah Miller", role: "Operations Manager, Bedford Tech", text: "The cybersecurity audit they performed was eye-opening. We feel much more secure knowing they are monitoring our systems." },
          { name: "David Thompson", role: "Founder, Luton Creative", text: "Professional, knowledgeable, and local. It's great to have an IT partner who actually understands our business needs." },
        ].map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 italic text-slate-600 relative">
            <p className="mb-6">"{t.text}"</p>
            <div className="flex items-center space-x-3 not-italic">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                {t.name[0]}
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-20 bg-indigo-600">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Modernise Your IT?</h2>
      <p className="text-indigo-100 text-lg mb-10">
        Join hundreds of UK businesses that trust Team24 for their technology needs. Get a free, no-obligation IT audit today.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-full text-indigo-600 bg-white hover:bg-indigo-50 transition-all shadow-2xl"
      >
        Book Your Free Audit
      </Link>
    </div>
  </section>
);

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Stats />
      <Benefits />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};
