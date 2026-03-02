import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Server, Shield, Users, BarChart, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Empowering UK Businesses with <span className="text-blue-500">Intelligent IT Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              From robust cybersecurity to seamless cloud migration, Sefton Supported Living delivers enterprise-grade IT infrastructure tailored for the modern British economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25">
                Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-all">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Strategic IT Partner in the UK</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Sefton Supported Living, we don't just fix computers; we architect digital ecosystems. Based in the heart of the UK, we understand the unique challenges British businesses face—from GDPR compliance to navigating the post-Brexit digital landscape.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our team of certified engineers and consultants brings decades of combined experience in delivering bespoke IT strategies that drive efficiency, security, and growth.
              </p>
              <ul className="space-y-4">
                {[
                  '24/7 UK-based Support Desk',
                  'Cyber Essentials Plus Certified',
                  'GDPR & Data Protection Experts',
                  'Proactive Network Monitoring'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="IT Team Collaboration" 
                className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Sefton Supported Living?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We deliver measurable value through technology, ensuring your IT investment translates directly to business success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Uncompromised Security',
                description: 'Bank-grade encryption and advanced threat detection to protect your sensitive data.'
              },
              {
                icon: Zap,
                title: 'High Availability',
                description: '99.99% uptime guarantees with redundant systems and failover protocols.'
              },
              {
                icon: Users,
                title: 'User-Centric Support',
                description: 'Friendly, jargon-free support from our UK team, resolving 90% of issues on the first call.'
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve Across the UK</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Healthcare & NHS', icon: '🏥' },
              { name: 'Legal & Finance', icon: '⚖️' },
              { name: 'Manufacturing', icon: '🏭' },
              { name: 'Retail & E-commerce', icon: '🛍️' },
              { name: 'Education', icon: '🎓' },
              { name: 'Real Estate', icon: '🏠' },
              { name: 'Non-Profit', icon: '🤝' },
              { name: 'Logistics', icon: '🚚' }
            ].map((industry, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-slate-800 rounded-lg text-center border border-slate-700 hover:border-blue-500 transition-colors cursor-default"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-lg">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Proven Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Cost Reduction</span>
                <BarChart className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Manchester Logistics Firm</h3>
              <p className="text-slate-600 mb-6">
                Migrated legacy on-premise servers to a hybrid cloud solution, reducing hardware maintenance costs and improving remote access speeds.
              </p>
              <div className="border-t border-slate-100 pt-6 flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-500">Annual Savings</p>
                  <p className="text-2xl font-bold text-blue-600">£45,000</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Efficiency Gain</p>
                  <p className="text-2xl font-bold text-blue-600">35%</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Cybersecurity</span>
                <Shield className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">London Legal Practice</h3>
              <p className="text-slate-600 mb-6">
                Implemented a zero-trust security architecture and automated compliance reporting to meet strict SRA regulations.
              </p>
              <div className="border-t border-slate-100 pt-6 flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-500">Risk Reduction</p>
                  <p className="text-2xl font-bold text-blue-600">98%</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Compliance Audit</p>
                  <p className="text-2xl font-bold text-blue-600">100% Pass</p>
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
                quote: "Sefton Supported Living transformed our IT infrastructure. Their proactive approach means we rarely see downtime anymore.",
                author: "James Hemmings",
                role: "Operations Director, Hemmings Transport Ltd"
              },
              {
                quote: "The migration to the cloud was seamless. The team was professional, knowledgeable, and kept us informed every step of the way.",
                author: "Sarah Jenkins",
                role: "CEO, BrightSpark Creative"
              },
              {
                quote: "Finally, an IT partner that speaks plain English. Their support team is fantastic and always resolves issues quickly.",
                author: "David Thorne",
                role: "Managing Partner, Thorne & Co Solicitors"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl relative">
                <div className="text-blue-200 absolute top-4 left-4 text-6xl font-serif leading-none">"</div>
                <p className="text-slate-700 italic mb-6 relative z-10 pt-4">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IT?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of UK businesses who trust Sefton Supported Living with their technology needs.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
