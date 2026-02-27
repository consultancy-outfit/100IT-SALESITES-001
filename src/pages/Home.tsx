import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Users, BarChart3, Shield, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../constants";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
              <Zap size={16} />
              <span>Leading UK IT Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-primary mb-8">
              Empowering British Business Through <span className="text-accent">Technology</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              From managed support to strategic consultancy, we provide the technical foundation your business needs to scale securely in the digital age.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-primary/20"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-primary border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/it-office/800/600"
                alt="Modern IT Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-slate-500">Uptime Guaranteed</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-slate-300">Clients Supported</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-24">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl mb-6">Why Choose Westcliff on Sea?</h2>
            <p className="text-lg text-slate-600">
              We combine local British expertise with global technology standards to deliver results that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-accent" />,
                title: "Security First",
                desc: "Every solution we build has security baked in from the start, ensuring your data remains yours."
              },
              {
                icon: <Zap className="text-accent" />,
                title: "Rapid Response",
                desc: "Our UK-based helpdesk is ready to resolve your issues within minutes, not days."
              },
              {
                icon: <Globe className="text-accent" />,
                title: "Strategic Growth",
                desc: "We don't just fix computers; we help you leverage technology to reach your business goals."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-slate-50 border border-slate-100 transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-slate-50 py-24">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl mb-6">Our Core Expertise</h2>
              <p className="text-lg text-slate-600">
                Tailored IT services designed to support the unique needs of UK businesses across various sectors.
              </p>
            </div>
            <Link to="/services" className="text-accent font-bold flex items-center gap-2 hover:underline">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-accent transition-all hover:shadow-xl">
                <h3 className="text-xl mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-slate-500 mb-6 line-clamp-2">{service.overview}</p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <span className="text-sm font-semibold text-slate-400">Starting from</span>
                  <span className="text-xl font-bold text-primary">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />
        <div className="section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl mb-8">Measurable Results for UK Enterprises</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-accent">£120k</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Annual Savings</h4>
                    <p className="text-slate-400">Achieved for a London-based law firm through cloud optimization.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-accent">40%</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Efficiency Boost</h4>
                    <p className="text-slate-400">Delivered to a manufacturing plant in Essex via automated workflows.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-accent">0</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Security Breaches</h4>
                    <p className="text-slate-400">For all clients under our Managed Security plan over the last 5 years.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/success/800/600"
                alt="Business Success"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <h2 className="text-3xl md:text-5xl text-center mb-20">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Graham",
                role: "CEO, Graham & Partners",
                text: "Westcliff on Sea transformed our IT from a constant headache into a strategic asset. Their response times are unmatched."
              },
              {
                name: "Sarah Jenkins",
                role: "Operations Director, Essex Logistics",
                text: "The migration to Azure was seamless. We didn't experience a single minute of downtime. Highly recommended."
              },
              {
                name: "David Thompson",
                role: "Founder, TechStart UK",
                text: "As a startup, we needed scalability. Their Professional plan gave us exactly what we needed at a predictable cost."
              }
            ].map((t, i) => (
              <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 italic relative">
                <p className="text-slate-600 mb-8 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-bold text-primary not-italic">{t.name}</p>
                    <p className="text-sm text-slate-500 not-italic">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent">
        <div className="section-padding text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to Future-Proof Your IT?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join hundreds of UK businesses that trust Westcliff on Sea for their technology needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-accent px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-2xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
