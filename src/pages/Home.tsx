import { motion } from 'motion/react';
import { ArrowRight, Shield, Cloud, Cpu, Users, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: "Proactive Monitoring",
    description: "We identify and resolve issues before they impact your business operations.",
    icon: Shield,
  },
  {
    title: "Cloud Excellence",
    description: "Seamless migration and management of your cloud infrastructure.",
    icon: Cloud,
  },
  {
    title: "Strategic Consulting",
    description: "Technology roadmaps aligned with your long-term business goals.",
    icon: BarChart3,
  },
];

const industries = [
  "Legal & Professional Services",
  "Manufacturing & Logistics",
  "Healthcare & Life Sciences",
  "Education & Non-Profit",
  "Finance & FinTech",
  "Retail & E-commerce",
];

const testimonials = [
  {
    name: "James Harrison",
    role: "Operations Director, Northern Logistics",
    content: "The team at GM Specialist Support transformed our legacy infrastructure. Their proactive approach saved us thousands in potential downtime.",
  },
  {
    name: "Sarah Jenkins",
    role: "Partner, Jenkins & Co Solicitors",
    content: "Cybersecurity was our biggest worry. Now, we have complete peace of mind knowing our clients' data is protected by the best in the business.",
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6">
                Greater Manchester's Premier IT Partner
              </span>
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                Reliable IT Support for <span className="text-primary-600">Ambitious Businesses</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                We provide specialist IT services that empower UK businesses to scale securely, 
                innovate faster, and operate without technical friction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary group">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Book a Free Audit
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/it-office/800/800" 
                  alt="Modern IT Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="font-bold text-slate-900">99.9% Uptime</span>
                </div>
                <p className="text-sm text-slate-500">Guaranteed service levels for all our managed clients across the UK.</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl -z-0" />
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Businesses Trust Us</h2>
            <p className="text-lg text-slate-600">We don't just fix computers; we build resilient technology foundations that drive growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Specialist Support Across UK Industries</h2>
              <p className="text-slate-400 text-lg mb-8">
                Our expertise spans multiple sectors, allowing us to provide tailored solutions that meet 
                specific regulatory and operational requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                    <span className="text-slate-300">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/ind1/400/500" className="rounded-2xl w-full h-64 object-cover" alt="Industry 1" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/ind2/400/300" className="rounded-2xl w-full h-40 object-cover" alt="Industry 2" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="https://picsum.photos/seed/ind3/400/300" className="rounded-2xl w-full h-40 object-cover" alt="Industry 3" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/ind4/400/500" className="rounded-2xl w-full h-64 object-cover" alt="Industry 4" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study / Results */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Measurable Impact</h2>
                <p className="text-primary-100 text-lg mb-8">
                  We recently helped a Manchester-based manufacturing firm migrate to a hybrid cloud model, 
                  resulting in significant operational savings.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold mb-1">£42,000</div>
                    <div className="text-primary-200 text-sm">Annual IT Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">35%</div>
                    <div className="text-primary-200 text-sm">Increase in Staff Productivity</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl">
                <blockquote className="text-xl italic mb-6">
                  "The transition was seamless. We saw an immediate ROI and our team can now work securely from anywhere."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-400 overflow-hidden">
                    <img src="https://picsum.photos/seed/ceo/100/100" alt="CEO" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold">Robert Thompson</div>
                    <div className="text-primary-200 text-sm">CEO, Precision Engineering Ltd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-slate-600 text-lg mb-6 italic">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200" />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-slate-500 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Modernise Your IT?</h2>
            <p className="text-xl text-slate-600 mb-10">
              Join hundreds of UK businesses that rely on GM Specialist Support for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-10">
                Get a Quote
              </Link>
              <Link to="/services" className="btn-secondary px-10">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
