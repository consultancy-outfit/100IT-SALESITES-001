import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, BarChart3, Users2, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-bold tracking-widest uppercase mb-6">
                Independent IT Excellence
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Attaining Independence Through <span className="text-zinc-500 italic">Technology.</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                We provide bespoke IT services, cybersecurity, and cloud infrastructure 
                tailored for the unique demands of British enterprises. No vendor lock-in, 
                just pure technical expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-zinc-200 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-50 transition-all"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-zinc-100 to-transparent" />
          <img 
            src="https://picsum.photos/seed/it-office/1200/1200" 
            alt="Modern Office" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why British Businesses Trust Us</h2>
            <p className="text-zinc-600">We combine local expertise with global standards to deliver unmatched IT value.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "UK-Centric Security",
                desc: "GDPR compliant and Cyber Essentials focused protection for your data."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Rapid Response",
                desc: "On-site and remote support with industry-leading SLAs for UK timezones."
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Cost Efficiency",
                desc: "Optimised infrastructure that reduces overheads and improves ROI in £."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 border border-zinc-100 rounded-3xl bg-zinc-50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="mb-6 text-zinc-900">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                Specialised Solutions for <br />
                <span className="text-zinc-500 italic">Diverse UK Sectors.</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Financial Services & Fintech",
                  "Legal & Professional Services",
                  "Healthcare & Life Sciences",
                  "Manufacturing & Logistics",
                  "Public Sector & Education"
                ].map((industry, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-zinc-500 w-6 h-6" />
                    <span className="text-lg font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/london1/600/800" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/london2/600/800" className="rounded-2xl mt-8 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Measurable Success</h2>
              <p className="text-zinc-600">Real results delivered to our partners across the United Kingdom.</p>
            </div>
            <Link to="/services" className="text-zinc-900 font-bold flex items-center gap-2 hover:underline">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                client: "London Legal Group",
                title: "Cloud Migration & Security Overhaul",
                result: "£45,000 Annual Savings",
                desc: "Migrated 200+ users to a secure private cloud environment, reducing hardware costs and improving remote accessibility."
              },
              {
                client: "Midlands Manufacturing",
                title: "Network Infrastructure Modernisation",
                result: "40% Productivity Increase",
                desc: "Implemented a high-speed fibre network and IoT monitoring systems across three factory sites."
              }
            ].map((study, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={`https://picsum.photos/seed/case${i}/800/450`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{study.client}</span>
                  <span className="text-sm font-bold text-zinc-900">{study.result}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-zinc-600 transition-colors">{study.title}</h3>
                <p className="text-zinc-600">{study.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Graham",
                role: "CTO",
                company: "Graham & Co",
                content: "Attaining Independence transformed our IT from a bottleneck into a competitive advantage. Their UK-based team is exceptional."
              },
              {
                name: "Sarah Jenkins",
                role: "Operations Director",
                company: "Nexus Logistics",
                content: "The cybersecurity audit they performed was eye-opening. We now feel completely secure and compliant with all UK regulations."
              },
              {
                name: "David Thompson",
                role: "Founder",
                company: "TechStart London",
                content: "As a growing startup, we needed a partner who could scale with us. Their flexible pricing and expert advice have been invaluable."
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
                <p className="text-zinc-600 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-200" />
                  <div>
                    <h4 className="font-bold text-zinc-900">{t.name}</h4>
                    <p className="text-xs text-zinc-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Secure Your Digital Future?</h2>
              <p className="text-zinc-400 text-xl mb-12">
                Join hundreds of British businesses that have attained technical independence with our expert services.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all"
              >
                Get a Free Quote
              </Link>
            </div>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-500 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
