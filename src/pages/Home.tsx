import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, BarChart3, Users, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">UK Managed IT Services</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6">
              Empowering British Business through <span className="text-indigo-600">IT Excellence.</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-xl">
              Supremacy Care IT delivers enterprise-grade technology solutions tailored for the UK market. From cybersecurity to cloud migration, we ensure your infrastructure is resilient, scalable, and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={ROUTES.SERVICES}
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={ROUTES.CONTACT}
                className="inline-flex items-center justify-center bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-all"
              >
                Book a Consultation
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-8 grayscale opacity-50">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Trusted By</span>
              <div className="flex space-x-6 items-center">
                <div className="h-6 w-24 bg-zinc-200 rounded animate-pulse"></div>
                <div className="h-6 w-20 bg-zinc-200 rounded animate-pulse"></div>
                <div className="h-6 w-28 bg-zinc-200 rounded animate-pulse"></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 lg:mt-0 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200">
              <img
                src="https://picsum.photos/seed/it-office/1200/800"
                alt="Modern IT Infrastructure"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 hidden sm:block">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <Zap className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-zinc-900">99.9%</p>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Uptime Guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Cyber Security First",
      description: "Enterprise-grade protection including threat detection and GDPR compliance auditing.",
      icon: Shield,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Optimised Performance",
      description: "Cloud-native solutions that scale with your business while reducing operational overhead.",
      icon: Zap,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Data-Driven Insights",
      description: "Advanced analytics and reporting to help you make informed decisions about your IT spend.",
      icon: BarChart3,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "24/7 Expert Support",
      description: "Dedicated UK-based engineers ready to resolve issues before they impact your business.",
      icon: Users,
      color: "text-rose-600",
      bg: "bg-rose-50"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Why Choose Us</h2>
          <p className="text-4xl font-bold text-zinc-900 tracking-tight mb-6">Strategic IT solutions designed for the British market.</p>
          <p className="text-lg text-zinc-600">We don't just fix computers; we build the technological foundation for your company's future growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${benefit.bg} rounded-xl flex items-center justify-center mb-6`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      client: "Hampshire Logistics Ltd",
      result: "£45k Annual Savings",
      description: "Complete migration to Azure cloud infrastructure, reducing hardware maintenance costs by 60%.",
      tag: "Cloud Migration"
    },
    {
      client: "Winchester Legal Partners",
      result: "Zero Downtime",
      description: "Implementation of a robust disaster recovery plan and 24/7 security monitoring system.",
      tag: "Cyber Security"
    }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Case Studies</h2>
            <p className="text-4xl font-bold text-zinc-900 tracking-tight">Real results for real British businesses.</p>
          </div>
          <Link to={ROUTES.SERVICES} className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
            View all projects <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((item, idx) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900 rounded-3xl overflow-hidden p-10 lg:p-16 text-white"
            >
              <div className="absolute top-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                  {item.tag}
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-zinc-400 font-medium mb-4">{item.client}</h3>
                <p className="text-4xl font-bold mb-6 group-hover:text-indigo-400 transition-colors">{item.result}</p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">{item.description}</p>
                <button className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors">
                  Read Full Story <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <BarChart3 className="w-64 h-64 -mb-16 -mr-16" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Alistair Graham",
      role: "CEO, Graham & Sons",
      text: "Supremacy Care transformed our outdated IT systems into a modern powerhouse. Their team is professional, responsive, and truly understands the UK business landscape.",
      image: "https://i.pravatar.cc/150?u=alistair"
    },
    {
      name: "Sarah Jenkins",
      role: "Operations Director, South Coast Retail",
      text: "Since partnering with Supremacy Care, our IT issues have dropped by 80%. Their proactive monitoring gives us peace of mind to focus on our customers.",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "David Miller",
      role: "Founder, Miller Tech Solutions",
      text: "Expert advice and flawless execution. They helped us navigate complex GDPR requirements with ease. Highly recommended for any growing business.",
      image: "https://i.pravatar.cc/150?u=david"
    }
  ];

  return (
    <section className="py-24 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-indigo-300 mx-auto mb-6 opacity-50" />
          <h2 className="text-4xl font-bold tracking-tight">What our clients say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl"
            >
              <p className="text-lg italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center space-x-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border-2 border-white/20" />
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-indigo-200">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.indigo.500/0.1),transparent)]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-8">Ready to secure your business future?</h2>
            <p className="text-xl text-zinc-400 mb-12">
              Join hundreds of British companies who trust Supremacy Care for their IT needs. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to={ROUTES.CONTACT}
                className="bg-indigo-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20"
              >
                Contact Us Today
              </Link>
              <Link
                to={ROUTES.PRICING}
                className="bg-white text-zinc-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all"
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

export const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  );
};
