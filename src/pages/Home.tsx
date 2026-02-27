import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Zap, BarChart, Users, ArrowRight, CheckCircle2, Star, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-32">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Leading UK IT Consultancy
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-slate-900">
                Future-Proof Your <span className="text-brand-600">Business</span> with Expert IT.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Jackson Gardens provides bespoke managed IT services, cybersecurity, and cloud solutions tailored for the unique needs of British enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 group"
                >
                  Book a Free Audit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/services" 
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-500 font-medium">Trusted by 500+ UK Businesses</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
                <img 
                  src="https://picsum.photos/seed/tech-office/800/600" 
                  alt="Modern IT Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 z-20 glass p-6 rounded-2xl shadow-xl max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                    <Zap size={18} />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Uptime</span>
                </div>
                <div className="text-3xl font-bold text-slate-900">99.9%</div>
                <p className="text-[10px] text-slate-500 mt-1">Guaranteed service availability for all clients.</p>
              </motion.div>

              {/* Floating Security Card */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 z-20 glass p-6 rounded-2xl shadow-xl max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center">
                    <Shield size={18} />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Security</span>
                </div>
                <div className="text-sm font-bold text-slate-900">GDPR Compliant</div>
                <p className="text-[10px] text-slate-500 mt-1">Advanced threat protection & data encryption.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-50/50 rounded-bl-[100px]"></div>
        <div className="absolute top-1/4 left-10 -z-10 w-64 h-64 bg-brand-200/20 blur-3xl rounded-full"></div>
      </section>

      {/* Partners/Logos */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/30">
        <div className="container-custom">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Empowering Industry Leaders Across Britain</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['Microsoft', 'Cisco', 'AWS', 'Google Cloud', 'Dell', 'HP'].map((name) => (
              <span key={name} className="text-2xl font-display font-bold text-slate-400">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">Why UK Businesses Choose Jackson Gardens</h2>
            <p className="text-lg text-slate-600">We combine technical excellence with a deep understanding of the British business landscape, providing support that actually makes a difference.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Zap className="text-brand-600" />,
                title: "Rapid Response Support",
                desc: "Our London-based helpdesk ensures you're never left waiting. Average response time under 15 minutes."
              },
              {
                icon: <Shield className="text-emerald-600" />,
                title: "Cybersecurity First",
                desc: "We build security into every layer of your infrastructure, ensuring full GDPR and Cyber Essentials compliance."
              },
              {
                icon: <BarChart className="text-indigo-600" />,
                title: "Cost-Effective Scaling",
                desc: "Predictable monthly billing in GBP with no hidden costs. Scale your IT as your business grows."
              }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-slate-900 text-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl mb-6">Measurable Success for Our Clients</h2>
              <p className="text-slate-400 text-lg">Real results delivered to real British companies. We focus on ROI and operational efficiency.</p>
            </div>
            <Link to="/services" className="text-brand-400 font-bold flex items-center gap-2 hover:text-brand-300 transition-colors">
              View All Case Studies <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto"
            >
              <img 
                src="https://picsum.photos/seed/case1/800/600" 
                alt="Financial District" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-brand-600 text-xs font-bold uppercase tracking-wider">Finance Sector</div>
                <h3 className="text-2xl md:text-3xl font-bold">City Wealth Management</h3>
                <p className="text-slate-300 max-w-md">Implemented a zero-trust architecture saving the firm over £45,000 in potential breach costs annually.</p>
                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-brand-400">£45k+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-400">100%</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Compliance Score</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto"
            >
              <img 
                src="https://picsum.photos/seed/case2/800/600" 
                alt="Logistics Hub" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-brand-600 text-xs font-bold uppercase tracking-wider">Logistics</div>
                <h3 className="text-2xl md:text-3xl font-bold">Midlands Express Ltd</h3>
                <p className="text-slate-300 max-w-md">Cloud migration project reduced server maintenance costs by 35% and improved remote access speed by 2x.</p>
                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-brand-400">35%</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-400">24/7</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Monitoring</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl">Specialised Support for UK Industries</h2>
              <p className="text-lg text-slate-600">We don't believe in one-size-fits-all. Our engineers specialise in the specific compliance and operational requirements of key British sectors.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Globe size={20} />, title: "Legal & Professional" },
                  { icon: <Lock size={20} />, title: "Finance & Fintech" },
                  { icon: <Users size={20} />, title: "Healthcare & NHS" },
                  { icon: <Zap size={20} />, title: "Manufacturing" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-slate-900">{item.title}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all">
                  Learn about our industry expertise <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/ind1/400/500" alt="Industry" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/ind2/400/300" alt="Industry" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/ind3/400/300" alt="Industry" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/ind4/400/500" alt="Industry" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">What Our Clients Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Don't just take our word for it. Hear from the business owners and IT managers we support every day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Thompson",
                role: "CEO, Thompson & Co Legal",
                content: "Jackson Gardens transformed our remote working setup. Their attention to security and GDPR compliance gave us the confidence to scale our firm during the pandemic.",
                rating: 5
              },
              {
                name: "Sarah Jenkins",
                role: "IT Manager, Midlands Logistics",
                content: "The best IT partner we've ever had. Their response times are incredible, and they always explain technical issues in plain English. Highly recommended.",
                rating: 5
              },
              {
                name: "David Miller",
                role: "Founder, Miller Fintech",
                content: "Professional, reliable, and forward-thinking. They helped us migrate to AWS seamlessly and have been instrumental in our recent growth phase.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 italic mb-8 leading-relaxed">"{testimonial.content}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/face${idx}/100/100`} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-brand-600 rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-500/40">
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Ready to Elevate Your Business Technology?</h2>
              <p className="text-xl text-brand-100">Join hundreds of successful UK companies who trust Jackson Gardens for their IT needs. Get your free infrastructure audit today.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-brand-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-50 transition-all shadow-lg shadow-black/10 active:scale-95"
                >
                  Book Your Free Audit
                </Link>
                <Link 
                  to="/pricing" 
                  className="bg-brand-700 text-white border border-brand-500 px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-800 transition-all active:scale-95"
                >
                  View Pricing Plans
                </Link>
              </div>
              <div className="flex items-center justify-center gap-8 pt-8 text-brand-100 text-sm font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 size={18} /> No Commitment</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={18} /> Expert Advice</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={18} /> UK-Based Support</div>
              </div>
            </div>
            
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-900/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
