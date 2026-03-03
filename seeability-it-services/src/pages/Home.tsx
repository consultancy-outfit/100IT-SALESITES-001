import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Server, Code, Users, BarChart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Empowering UK Businesses with <span className="text-teal-400">Intelligent IT Solutions</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              We deliver secure, scalable, and strategic technology services tailored for the modern British enterprise. From cloud migration to cybersecurity, we are your trusted local partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1">
                Explore Our Services
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-lg font-bold rounded-full text-white bg-slate-800 hover:bg-slate-700 transition-all hover:border-slate-500">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Innovative IT for a Digital Britain</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                SeeAbility Oxfordshire South Support Service is a premier IT consultancy dedicated to transforming how UK organizations operate. We combine deep technical expertise with a clear understanding of British business challenges.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you are a startup in Shoreditch or an established firm in Oxfordshire, our bespoke solutions ensure your infrastructure is robust, compliant, and ready for growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium text-slate-900">GDPR Compliant</h3>
                    <p className="mt-1 text-sm text-slate-500">Fully aligned with UK data laws.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium text-slate-900">24/7 UK Support</h3>
                    <p className="mt-1 text-sm text-slate-500">Local experts, always available.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="absolute inset-0 bg-teal-100 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Team working on IT solutions" 
                className="relative rounded-2xl shadow-xl w-full object-cover h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose SeeAbility IT?</h2>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              We deliver measurable value through technology, focusing on security, efficiency, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Cyber Security First',
                desc: 'Protecting your assets with enterprise-grade security protocols and continuous monitoring.'
              },
              {
                icon: Server,
                title: 'Cloud Optimization',
                desc: 'Seamless migration and management of cloud infrastructure to reduce costs and boost agility.'
              },
              {
                icon: BarChart,
                title: 'Strategic Growth',
                desc: 'IT roadmaps aligned with your business goals to drive long-term profitability.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-6">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Industries We Serve Across the UK</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Finance & Banking', 'Healthcare (NHS)', 'Legal Services', 'Retail & E-commerce', 'Manufacturing', 'Education', 'Real Estate', 'Non-Profit'].map((industry, i) => (
              <div key={i} className="flex items-center justify-center p-6 bg-slate-50 rounded-lg border border-slate-100 text-slate-700 font-medium text-center hover:bg-teal-50 hover:text-teal-700 hover:border-teal-100 transition-colors cursor-default">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
              <p className="text-slate-400 max-w-xl">Real-world examples of how we've helped British businesses succeed.</p>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center text-teal-400 hover:text-teal-300 font-medium mt-4 md:mt-0">
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <div className="h-48 bg-slate-700 relative">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Office meeting" className="w-full h-full object-cover opacity-80" />
                <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Case Study</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">London FinTech Migration</h3>
                <p className="text-slate-400 mb-6 text-sm">Secure cloud migration for a regulated financial services firm.</p>
                <div className="grid grid-cols-2 gap-4 border-t border-slate-700 pt-6">
                  <div>
                    <div className="text-2xl font-bold text-white">£45k</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99.99%</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Uptime Achieved</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <div className="h-48 bg-slate-700 relative">
                <img src="https://images.unsplash.com/photo-1504384308090-c54be3852f33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Warehouse technology" className="w-full h-full object-cover opacity-80" />
                <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Case Study</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Oxfordshire Manufacturing IoT</h3>
                <p className="text-slate-400 mb-6 text-sm">Implementation of IoT sensors for predictive maintenance.</p>
                <div className="grid grid-cols-2 gap-4 border-t border-slate-700 pt-6">
                  <div>
                    <div className="text-2xl font-bold text-white">30%</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Efficiency Boost</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">£120k</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Revenue Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The team at SeeAbility IT transformed our legacy systems completely. We are now faster, safer, and more competitive.",
                author: "James Harrington",
                role: "CEO, Harrington Logistics",
                location: "Reading"
              },
              {
                quote: "Exceptional service and deep technical knowledge. They understood our compliance needs perfectly.",
                author: "Sarah Penrose",
                role: "Director, Penrose Legal",
                location: "Oxford"
              },
              {
                quote: "Their proactive approach to cybersecurity gives us peace of mind. Highly recommended for any UK SME.",
                author: "David Thorne",
                role: "Founder, TechStart UK",
                location: "London"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative">
                <div className="text-teal-200 absolute top-4 left-4 text-6xl font-serif leading-none">"</div>
                <p className="text-slate-600 relative z-10 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                  <div className="text-xs text-teal-600 mt-1">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business IT?</h2>
          <p className="text-teal-100 text-lg mb-8">
            Get in touch today for a free consultation and discover how we can help you achieve your technology goals.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-teal-600 bg-white hover:bg-teal-50 transition-colors shadow-lg">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
