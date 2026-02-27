import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Users, 
  CheckCircle2, 
  BarChart3,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-200/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-100/20 blur-[120px] rounded-full" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-brand-50 text-brand-700 border border-brand-100 mb-8">
            <Zap size={16} className="mr-2" />
            Leading UK IT Managed Services
          </span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
            Empowering British Business with <span className="text-brand-600">Intelligent IT</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            House of St Martin provides premium managed IT support, cybersecurity, and cloud solutions tailored for the UK's most ambitious enterprises.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg shadow-brand-200"
            >
              Get a Free Audit
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      title: "Proactive Support",
      description: "24/7 monitoring and maintenance to resolve issues before they impact your operations.",
      icon: <Zap className="text-brand-600" />,
    },
    {
      title: "Cyber Resilience",
      description: "Advanced threat protection and GDPR-compliant security frameworks for total peace of mind.",
      icon: <ShieldCheck className="text-brand-600" />,
    },
    {
      title: "Cloud Excellence",
      description: "Seamless migration and management of Azure, AWS, and private cloud environments.",
      icon: <Globe className="text-brand-600" />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.description}</p>
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
      client: "London Financial Group",
      result: "£120k Annual Savings",
      description: "Optimised cloud infrastructure and automated security protocols.",
      tag: "Finance",
    },
    {
      client: "Manchester Logistics",
      result: "99.99% Uptime Achieved",
      description: "Implemented redundant network architecture and 24/7 monitoring.",
      tag: "Logistics",
    },
    {
      client: "Bristol Creative Hub",
      result: "40% Productivity Boost",
      description: "Modernised legacy systems with high-performance VDI solutions.",
      tag: "Creative",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Measurable Results for UK Business</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We don't just provide IT; we deliver commercial value that impacts your bottom line.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-4 block">{c.tag}</span>
                <h3 className="text-2xl font-bold mb-2">{c.client}</h3>
                <p className="text-brand-700 font-display font-bold text-xl mb-4">{c.result}</p>
                <p className="text-slate-600">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alistair Graham",
      role: "CTO, Sterling Assets",
      content: "House of St Martin transformed our security posture. Their team is professional, responsive, and truly understands the UK regulatory landscape.",
    },
    {
      name: "Sarah Jenkins",
      role: "Operations Director, Peak Health",
      content: "The transition to managed services was seamless. We've seen a significant reduction in downtime and our staff are much happier with the support.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 rounded-3xl bg-brand-50 relative">
              <Quote className="absolute top-6 right-6 text-brand-200" size={48} />
              <p className="text-xl italic text-slate-800 mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-600 rounded-[2rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-200">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32" />
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Modernise Your IT?</h2>
          <p className="text-xl text-brand-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of UK businesses that trust House of St Martin for their technology needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full bg-white text-brand-600 hover:bg-brand-50 transition-all"
          >
            Book Your Consultation
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </main>
  );
}
