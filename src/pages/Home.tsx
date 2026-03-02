import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Zap, Globe, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full">
                UK-Based IT Excellence
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
                Empowering British Business Through <span className="text-indigo-600">Smart Technology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                St Anne's IT provides enterprise-grade managed services, cybersecurity, and cloud solutions tailored for the unique needs of UK SMEs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Explore Services
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-white border-2 border-gray-100 rounded-full hover:border-indigo-600 transition-all"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern IT Office" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose St Anne's IT?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with a personal, UK-focused approach to help your business thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: 'Security First', desc: 'Every solution we build has security baked in from the ground up.' },
              { icon: Zap, title: 'Rapid Response', desc: 'Our UK-based helpdesk is ready to resolve your issues in minutes, not days.' },
              { icon: Globe, title: 'Local Expertise', desc: 'We understand the UK business landscape and regulatory requirements like GDPR.' }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 transition-all"
              >
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Core IT Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive technology solutions designed to scale with your business goals.
              </p>
            </div>
            <Link to="/services" className="text-indigo-600 font-bold flex items-center hover:underline">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-400">Starting from £{service.startingPrice}</span>
                  <Link to={`/services#${service.id}`} className="p-2 bg-gray-50 rounded-full group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Measurable Results</h2>
            <p className="text-xl text-gray-600">See how we've helped other UK businesses save money and increase efficiency.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {CASE_STUDIES.map((study) => (
              <div key={study.id} className="relative group overflow-hidden rounded-3xl bg-gray-900 text-white p-10">
                <div className="absolute top-0 right-0 p-6">
                  <span className="text-4xl font-black text-indigo-500/30">ROI</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-indigo-400 font-semibold mb-6">{study.client}</p>
                <div className="space-y-4 mb-8">
                  <p><span className="text-gray-400 font-medium">Challenge:</span> {study.challenge}</p>
                  <p><span className="text-gray-400 font-medium">Result:</span> {study.result}</p>
                </div>
                <div className="inline-block px-6 py-3 bg-indigo-600 rounded-xl font-bold text-xl">
                  {study.roi} Saved
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Trusted by Leaders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-lg italic mb-8">"{t.content}"</p>
                <div>
                  <p className="font-bold text-xl">{t.name}</p>
                  <p className="text-indigo-200 text-sm">{t.role}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 relative z-10">Ready to Future-Proof Your Business?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
              Join hundreds of UK businesses that trust St Anne's IT for their technology needs. Let's build something great together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-2xl relative z-10"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
