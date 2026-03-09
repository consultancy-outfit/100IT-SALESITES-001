import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Users,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import { TESTIMONIALS, CASE_STUDIES } from "../constants";

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full text-orange-700 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span>Trusted IT Partner in Greater Manchester</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1]">
                Future-Proofing <br />
                <span className="text-orange-600">British Business</span> <br />
                Through Technology.
              </h1>
              <p className="text-xl text-stone-600 max-w-lg leading-relaxed">
                We provide enterprise-grade IT support, robust cybersecurity,
                and strategic cloud solutions tailored for the UK's most
                ambitious SMEs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-stone-900 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:bg-orange-600 transition-all group"
                >
                  Explore Services
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-stone-900 border border-stone-200 px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:bg-stone-50 transition-all"
                >
                  Book a Free Audit
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt="Client"
                      className="w-10 h-10 rounded-full border-2 border-white"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-stone-900">
                    500+ Businesses Supported
                  </p>
                  <p className="text-stone-500">
                    Across the North West & London
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 lg:mt-0 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&h=600&q=80"
                  alt="IT professionals collaborating in a modern office"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/40 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden sm:block">
                <p className="text-3xl font-bold text-orange-600">99.9%</p>
                <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">
                  Uptime Guaranteed
                </p>
              </div>
              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden sm:block">
                <p className="text-3xl font-bold text-stone-900">15m</p>
                <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">
                  Avg. Response Time
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-stone-200/50 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em]">
            Why Greater Manchester?
          </h2>
          <p className="text-4xl font-bold text-stone-900">
            The IT Partner You Can Trust
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="text-orange-600" size={32} />,
              title: "Security First",
              desc: "We build security into every layer of your IT, not as an afterthought. GDPR compliant by design.",
            },
            {
              icon: <Zap className="text-orange-600" size={32} />,
              title: "Rapid Response",
              desc: "Our UK-based helpdesk is ready to solve your issues in minutes, not days. Local engineers on standby.",
            },
            {
              icon: <Globe className="text-orange-600" size={32} />,
              title: "Scalable Solutions",
              desc: "Whether you're a team of 5 or 500, our solutions grow with your business goals.",
            },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-stone-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold text-orange-500 uppercase tracking-[0.2em]">
                Industries We Serve
              </h2>
              <p className="text-4xl font-bold text-white">
                Specialised IT for British Sectors
              </p>
              <p className="text-stone-400 text-lg leading-relaxed">
                We understand the unique regulatory and operational challenges
                faced by UK businesses across various industries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Legal & Finance",
                  "Manufacturing",
                  "Retail & E-commerce",
                  "Healthcare",
                  "Architecture",
                  "Education",
                ].map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center space-x-3 text-stone-300"
                  >
                    <CheckCircle2 className="text-orange-500" size={20} />
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://picsum.photos/seed/legal/400/500"
                  alt="Legal"
                  className="rounded-2xl w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://picsum.photos/seed/factory/400/300"
                  alt="Manufacturing"
                  className="rounded-2xl w-full h-40 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://picsum.photos/seed/retail/400/300"
                  alt="Retail"
                  className="rounded-2xl w-full h-40 object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://picsum.photos/seed/health/400/500"
                  alt="Healthcare"
                  className="rounded-2xl w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em]">
              Measurable Results
            </h2>
            <p className="text-4xl font-bold text-stone-900">Success Stories</p>
          </div>
          <Link
            to="/services"
            className="text-orange-600 font-bold flex items-center hover:underline"
          >
            View all services <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CASE_STUDIES.map((study, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video">
                <img
                  src={`https://picsum.photos/seed/case${idx}/800/450`}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-900 uppercase tracking-wider">
                  {study.industry}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                {study.title}
              </h3>
              <p className="text-stone-600 mb-6 line-clamp-2">
                {study.challenge}
              </p>
              <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                <p className="text-sm font-bold text-orange-800 uppercase tracking-wider mb-2">
                  The Result
                </p>
                <p className="text-orange-900 font-medium">{study.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone-50 py-24 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.2em]">
              Client Testimonials
            </h2>
            <p className="text-4xl font-bold text-stone-900 mt-4">
              What Our Clients Say
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 relative"
              >
                <Quote
                  className="absolute top-8 right-8 text-orange-100"
                  size={48}
                />
                <p className="text-lg text-stone-700 italic mb-8 relative z-10 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={`https://picsum.photos/seed/person${idx}/100/100`}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-stone-900">{t.name}</p>
                    <p className="text-sm text-stone-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready to Optimise Your IT?
            </h2>
            <p className="text-xl text-orange-50 text-center max-w-2xl mx-auto">
              Join hundreds of UK businesses who trust Greater Manchester for
              their technology needs. Let's build your roadmap to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-stone-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="bg-orange-700 text-white border border-orange-500 px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-800 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
          {/* Abstract circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-orange-700 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
