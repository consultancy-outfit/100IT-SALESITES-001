import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  Shield,
  Globe,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES, COMPANY_DETAILS } from "../constants";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Trusted UK IT Partner</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Empowering British Business with{" "}
              <span className="text-indigo-600">Smart IT</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              From managed support to cloud transformation, we provide the
              technical backbone your business needs to thrive in the digital
              age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center"
              >
                Book a Consultation
              </Link>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((id) => (
                  <img
                    key={id}
                    src={`https://i.pravatar.cc/96?img=${id + 50}`}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    alt="Client"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-amber-400 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Zap key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-600">
                  Trusted by 200+ UK Companies
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/id/110/800/800.jpg"
                alt="Modern IT Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <div className="text-3xl font-bold text-indigo-600 mb-1">
                99.9%
              </div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Uptime Guaranteed
              </p>
            </div>
            <div className="absolute -top-6 -right-6 bg-indigo-600 p-6 rounded-2xl shadow-xl text-white max-w-[200px]">
              <div className="text-3xl font-bold mb-1">£2.4M</div>
              <p className="text-xs font-semibold text-indigo-100 uppercase tracking-wider">
                Client Savings in 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Shield className="text-indigo-600" />,
      title: "UK GDPR Compliant",
      desc: "Your data stays safe and compliant with UK regulations.",
    },
    {
      icon: <Zap className="text-indigo-600" />,
      title: "Proactive Monitoring",
      desc: "We fix issues before they impact your business operations.",
    },
    {
      icon: <Users className="text-indigo-600" />,
      title: "Dedicated Support",
      desc: "Direct access to senior engineers who know your business.",
    },
    {
      icon: <Globe className="text-indigo-600" />,
      title: "Nationwide Coverage",
      desc: "Remote support and on-site assistance across the UK.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why Choose {COMPANY_DETAILS.name}?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We combine technical excellence with a deep understanding of the
            British business landscape.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {f.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Core IT Solutions
            </h2>
            <p className="text-lg text-slate-600">
              Tailored technology services designed to drive efficiency and
              growth for your organisation.
            </p>
          </div>
          <Link
            to="/services"
            className="text-indigo-600 font-bold flex items-center hover:underline"
          >
            View all services <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-50 rounded-3xl p-8 overflow-hidden transition-all hover:bg-indigo-600 hover:text-white"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 group-hover:text-indigo-50 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-bold">
                  Starting from £{service.startingPrice}{" "}
                  <span className="mx-2 opacity-50">|</span>
                  <Link to="/services" className="underline underline-offset-4">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full group-hover:bg-white/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alistair Graham",
      role: "CEO, Northern Logistics",
      text: `${COMPANY_DETAILS.name} transformed our infrastructure. The migration to the cloud was seamless and saved us over £15,000 in hardware costs in the first year.`,
    },
    {
      name: "Sarah Jenkins",
      role: "Director, Ilkley Creative",
      text: "Their support team is exceptional. Whenever we have an issue, they're on it instantly. It's like having our own in-house IT department.",
    },
    {
      name: "David Thompson",
      role: "Operations Manager, Cumbria Care",
      text: `Security was our main concern. ${COMPANY_DETAILS.name} implemented a robust system that gives us total peace of mind and full GDPR compliance.`,
    },
  ];

  return (
    <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <MessageSquare className="mx-auto mb-6 text-indigo-400" size={48} />
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-indigo-200">
            Real feedback from businesses across the United Kingdom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
            >
              <div className="flex text-amber-400 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Zap key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-sm text-indigo-300">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-400 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Modernise Your IT?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              Contact our team today for a free infrastructure audit and see how
              we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all"
              >
                Contact Us Now
              </Link>
              <Link
                to="/pricing"
                className="bg-indigo-500 text-white border border-indigo-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-400 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
