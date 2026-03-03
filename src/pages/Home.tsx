import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, Building2, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  { name: 'Legal & Professional', icon: Building2 },
  { name: 'Healthcare & NHS', icon: Shield },
  { name: 'Manufacturing', icon: Zap },
  { name: 'Education', icon: Users },
];

const testimonials = [
  {
    name: "James Harrington",
    role: "Director, Harrington Legal",
    content: "West Lancs IT transformed our legacy systems into a modern, cloud-based infrastructure. Their support is second to none.",
    location: "Preston"
  },
  {
    name: "Sarah Jenkins",
    role: "IT Manager, North West Logistics",
    content: "The cybersecurity audit they performed saved us from a potential ransomware attack. Highly professional and knowledgeable.",
    location: "Liverpool"
  },
  {
    name: "Dr. Robert Smith",
    role: "Practice Manager, Ormskirk Health",
    content: "Reliable, local, and always available. They understand the unique pressures of the healthcare sector in the UK.",
    location: "Ormskirk"
  }
];

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
                UK-Based Managed IT Experts
              </span>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Empowering British Business through <span className="text-indigo-600">Smart Technology</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                From managed services to advanced cybersecurity, we provide the IT infrastructure that drives growth for companies across Lancashire and the North West.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-zinc-900 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-all"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10" />
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Why Choose West Lancs IT?</h2>
            <p className="text-zinc-600">We combine local expertise with world-class technology to deliver results that matter.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Local UK Support', desc: 'Our team is based in Lancashire, providing rapid on-site and remote support when you need it most.' },
              { title: 'GDPR Compliant', desc: 'All our solutions are built with UK data protection laws at their core, ensuring your business stays compliant.' },
              { title: 'Fixed-Price Peace of Mind', desc: 'No hidden costs. Our transparent pricing models help you budget effectively for your IT needs.' }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-indigo-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-zinc-900 mb-6 leading-tight">Specialist IT Support for Diverse UK Industries</h2>
              <p className="text-lg text-zinc-600 mb-8">
                We don't believe in one-size-fits-all. Our solutions are tailored to the specific regulatory and operational requirements of your sector.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {industries.map((industry, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center">
                      <industry.icon className="text-zinc-600 w-5 h-5" />
                    </div>
                    <span className="font-medium text-zinc-900">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-zinc-100 rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/it1/600/400" alt="IT Infrastructure" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="h-64 bg-indigo-600 rounded-2xl p-8 flex flex-col justify-end text-white">
                  <span className="text-4xl font-bold mb-2">99.9%</span>
                  <span className="text-sm opacity-80 uppercase tracking-wider">Uptime Guaranteed</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-zinc-900 rounded-2xl p-8 flex flex-col justify-end text-white">
                  <span className="text-4xl font-bold mb-2">£2.4M+</span>
                  <span className="text-sm opacity-80 uppercase tracking-wider">Client Savings in 2024</span>
                </div>
                <div className="h-48 bg-zinc-100 rounded-2xl overflow-hidden">
                  <img src="https://picsum.photos/seed/it2/600/400" alt="Server Room" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Testimonials */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Trusted by Businesses Across the North West</h2>
            <p className="text-zinc-600">Don't just take our word for it. Here's what our clients say.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 relative"
              >
                <Quote className="absolute top-6 right-8 text-zinc-100 w-12 h-12" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-zinc-700 mb-8 italic leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-zinc-900">{t.name}</h4>
                  <p className="text-sm text-zinc-500">{t.role} • {t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[2.5rem] p-12 sm:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Ready to Modernise Your IT Infrastructure?</h2>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                Join hundreds of UK businesses that trust West Lancs IT for their technology needs. Let's build your future together.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-indigo-600 bg-white rounded-full hover:bg-zinc-50 transition-all shadow-xl"
              >
                Get Started Today
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[40px] border-white/10 rounded-full" />
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 border-[60px] border-white/10 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
};
