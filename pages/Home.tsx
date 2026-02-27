import React from 'react';
import { ChevronRight, ArrowRight, ShieldCheck, Zap, Users, BarChart3, Star, CheckCircle2 } from 'lucide-react';
import { FEATURES, TESTIMONIALS, INDUSTRIES, SERVICES } from '../constants';
import { Page } from '../types';
import { motion } from 'framer-motion';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Essex Based IT Support</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]"
              >
                Empowering UK Business with <span className="text-emerald-600 italic serif">Smarter IT.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl"
              >
                Thurrock Essex provides enterprise-grade managed IT, cyber security, and cloud solutions tailored for growing British businesses. Reliable, secure, and locally based.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <button 
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center group"
                >
                  Book a Free Audit
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Our Services
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex items-center space-x-8 grayscale opacity-60"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Trusted By</div>
                <div className="flex space-x-6 items-center font-bold text-slate-400 text-sm">
                  <span>MICROSOFT</span>
                  <span>CISCO</span>
                  <span>DATTO</span>
                  <span>SOPHOS</span>
                </div>
              </motion.div>
            </div>
            <div className="relative hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-[600px] object-cover"
                  alt="IT Professional at work"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="bg-emerald-500 p-3 rounded-lg">
                      <ShieldCheck className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Cyber Essentials Certified</div>
                      <div className="text-white/70 text-sm">Protecting your business data 24/7</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">Local Expertise, Global Standards.</h3>
            <p className="text-slate-600">We combine the personal touch of a local Essex team with the technical capabilities of a global enterprise IT department.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Our Core Services</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Comprehensive IT Solutions for Every Business Need.</h3>
            </div>
            <button 
              onClick={() => onNavigate('services')}
              className="text-emerald-600 font-bold flex items-center hover:text-emerald-700 transition-colors"
            >
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-6">{service.icon}</div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.overview}</p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Starting From</span>
                  <span className="text-lg font-bold text-slate-900">{service.startingPrice}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Industries Served</h2>
              <h3 className="text-4xl font-bold mb-8 tracking-tight">Specialised IT Support for UK Sectors.</h3>
              <p className="text-slate-400 mb-12 leading-relaxed">We understand that every industry has unique challenges. Our team has deep experience in the specific software and compliance requirements of these key UK sectors.</p>
              <div className="grid grid-cols-2 gap-6">
                {INDUSTRIES.map((industry, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-64 bg-slate-800 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-50" alt="Logistics" />
                </div>
                <div className="h-48 bg-emerald-500 rounded-2xl flex items-center justify-center p-8 text-slate-900">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-sm font-bold uppercase tracking-wider">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-slate-800 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-50" alt="Tech" />
                </div>
                <div className="h-64 bg-slate-800 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-50" alt="Office" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Results */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Measurable Results</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Delivering Real Value to Our Clients.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900 mb-4">£12k+</div>
              <div className="text-slate-600 font-medium">Average annual savings per client on cloud infrastructure.</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900 mb-4">99.9%</div>
              <div className="text-slate-600 font-medium">Uptime achieved for our managed services partners.</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-slate-900 mb-4">15min</div>
              <div className="text-slate-600 font-medium">Average response time for critical IT emergencies.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Client Feedback</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Trusted by Essex Business Leaders.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex text-emerald-500 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-xs text-slate-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight">Ready to Secure Your <br />Business Future?</h3>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Join dozens of Essex businesses who trust us with their IT infrastructure. Let's build something resilient together.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-10 py-5 bg-emerald-500 text-slate-900 font-bold rounded-xl hover:bg-emerald-400 transition-all text-lg"
                >
                  Get Started Today
                </button>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-lg backdrop-blur-sm"
                >
                  View Pricing Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;