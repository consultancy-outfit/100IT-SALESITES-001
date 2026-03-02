import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Globe,
  Quote
} from 'lucide-react';

const benefits = [
  {
    title: "24/7 Proactive Monitoring",
    description: "We watch your systems while you sleep, catching issues before they impact your business.",
    icon: Zap
  },
  {
    title: "Cyber Security First",
    description: "Enterprise-grade security protocols integrated into every solution we deploy.",
    icon: Shield
  },
  {
    title: "Cloud-Native Solutions",
    description: "Scalable infrastructure that grows with your business, hosted in UK-based data centres.",
    icon: Cloud
  }
];

const caseStudies = [
  {
    client: "North East Health Trust",
    result: "£120k Annual Savings",
    description: "Modernised legacy infrastructure and implemented secure remote access for 500+ staff.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    client: "Durham Logistics Ltd",
    result: "99.99% Uptime Achieved",
    description: "Full cloud migration and disaster recovery implementation for a multi-site operation.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  }
];

const testimonials = [
  {
    name: "Alistair Graham",
    role: "Director, Graham & Sons",
    content: "SHS Solutions transformed our IT from a daily headache into a strategic asset. Their response times are unmatched in the North East."
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager, VitalCare UK",
    content: "As a healthcare provider, security is paramount. SHS delivered a GDPR-compliant infrastructure that gives us total peace of mind."
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-100/50 blur-3xl rounded-full opacity-50" />
        </div>
        
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-brand-700 bg-brand-50 rounded-full border border-brand-100">
                Leading IT Partner in the North East
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Future-Proof Your <span className="text-brand-600">Business Technology</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Shauna HealthCare Services Solutions North East provides enterprise-grade managed IT services, cyber security, and cloud infrastructure tailored for UK businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 text-center"
                >
                  Book a Free Audit
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all text-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Logos Placeholder */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50 grayscale">
            <div className="flex justify-center font-bold text-2xl text-slate-400 italic">TECH-CORP</div>
            <div className="flex justify-center font-bold text-2xl text-slate-400 italic">GLOBAL-SYS</div>
            <div className="flex justify-center font-bold text-2xl text-slate-400 italic">UK-NETWORKS</div>
            <div className="flex justify-center font-bold text-2xl text-slate-400 italic">NORTH-DATA</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose SHS Solutions?</h2>
            <p className="text-slate-600">We combine technical excellence with a deep understanding of the UK business landscape, ensuring your IT infrastructure is a catalyst for growth.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 blur-[120px] rounded-full" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Specialised IT Support for UK Industries</h2>
              <p className="text-slate-400 text-lg mb-12">
                While our name reflects our deep roots in Healthcare IT, we provide comprehensive technology solutions across various sectors in the North East and beyond.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Healthcare & Life Sciences", desc: "GDPR & NHS compliant data management and secure networks." },
                  { title: "Professional Services", desc: "Secure infrastructure for legal, financial, and accounting firms." },
                  { title: "Manufacturing & Logistics", desc: "Real-time monitoring and robust industrial network solutions." },
                  { title: "Public Sector", desc: "Cost-effective, scalable IT for local government and education." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 bg-brand-600 rounded-full p-1">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Technology Background" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-8 bg-brand-600 rounded-3xl shadow-2xl hidden md:block">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-brand-100 text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Measurable Results</h2>
              <p className="text-slate-600">We don't just provide IT; we deliver business outcomes. See how we've helped UK organisations thrive.</p>
            </div>
            <Link to="/services" className="text-brand-600 font-bold flex items-center hover:underline">
              View All Services <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-8 relative">
                  <img 
                    src={study.image} 
                    alt={study.client} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-brand-700 font-bold shadow-sm">
                    {study.result}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{study.client}</h3>
                <p className="text-slate-600 mb-6">{study.description}</p>
                <div className="flex items-center text-brand-600 font-semibold">
                  Read Full Case Study <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Trusted by Leaders</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm relative">
                <Quote className="absolute top-8 right-8 text-slate-100" size={60} />
                <p className="text-lg text-slate-700 mb-8 relative z-10 italic">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-brand-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Optimise Your IT?</h2>
              <p className="text-brand-100 text-xl mb-12">Join hundreds of UK businesses that trust SHS Solutions for their technology needs. Let's build something great together.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-10 py-4 bg-white text-brand-600 rounded-full font-bold text-lg hover:bg-brand-50 transition-all"
                >
                  Contact Us Today
                </Link>
                <Link
                  to="/pricing"
                  className="px-10 py-4 bg-brand-700 text-white rounded-full font-bold text-lg hover:bg-brand-800 transition-all border border-brand-500"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
