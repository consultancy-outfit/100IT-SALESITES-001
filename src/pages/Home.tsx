import { ArrowRight, CheckCircle2, Shield, Zap, Users, BarChart3, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mb-6">
                Trusted by 200+ UK Care Providers
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-8">
                Digital Excellence for the <span className="text-indigo-600">Care Sector</span>
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-2xl">
                We provide bespoke IT infrastructure, robust cyber security, and digital transformation strategies designed specifically for UK social and healthcare organisations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-zinc-900 font-semibold border border-zinc-200 hover:bg-zinc-50 transition-all"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-indigo-50 to-transparent" />
          <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Uptime Guarantee', value: '99.9%' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'UK Support', value: '24/7' },
              { label: 'Security Audits', value: '500+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">Why Choose Our IT Solutions?</h2>
            <p className="text-lg text-zinc-600">We understand the unique pressures of the social care sector, from GDPR compliance to the need for 24/7 reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="w-8 h-8 text-indigo-600" />,
                title: 'Healthcare-Grade Security',
                desc: 'Bespoke cyber security frameworks aligned with NHS Data Security and Protection Toolkit (DSPT) standards.'
              },
              {
                icon: <Zap className="w-8 h-8 text-indigo-600" />,
                title: 'Rapid Response Support',
                desc: 'UK-based engineers available around the clock to ensure your critical care systems never go offline.'
              },
              {
                icon: <Users className="w-8 h-8 text-indigo-600" />,
                title: 'Sector Expertise',
                desc: 'Over a decade of experience supporting care homes, domiciliary care agencies, and private clinics.'
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:shadow-xl hover:shadow-indigo-50 transition-all"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Measurable Results in Care</h2>
              <p className="text-zinc-400 text-lg">Our digital interventions don't just improve tech; they improve lives and business outcomes.</p>
            </div>
            <Link to="/services" className="text-indigo-400 font-semibold flex items-center hover:text-indigo-300 transition-colors">
              View all services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                client: 'Midlands Care Group',
                result: '£45,000 Annual Savings',
                desc: 'Implemented a cloud-first infrastructure across 12 sites, reducing hardware maintenance costs by 40%.',
                tags: ['Cloud Migration', 'Managed IT']
              },
              {
                client: 'London Domiciliary Care',
                result: '100% DSPT Compliance',
                desc: 'Secured mobile workforce devices and implemented encrypted communication channels for patient data.',
                tags: ['Cyber Security', 'Mobile Device Management']
              }
            ].map((study, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-zinc-900 p-10 border border-zinc-800 hover:border-indigo-500/50 transition-all">
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded bg-zinc-800 text-zinc-400">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                <div className="text-indigo-400 font-bold text-xl mb-6">{study.result}</div>
                <p className="text-zinc-400 leading-relaxed mb-8">{study.desc}</p>
                <div className="h-1 w-12 bg-indigo-600 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Thompson',
                role: 'Director, Heritage Care',
                quote: 'The transition to Social & Care IT was seamless. Their understanding of our regulatory requirements is unmatched in the industry.'
              },
              {
                name: 'James Harrison',
                role: 'Operations Manager, Bluebird Health',
                quote: 'Having 24/7 UK-based support gives us peace of mind. They are proactive, often fixing issues before we even notice them.'
              },
              {
                name: 'Eleanor Wright',
                role: 'CEO, Community First',
                quote: 'They transformed our legacy systems into a modern, secure environment. The ROI was evident within the first six months.'
              }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 italic relative">
                <Quote className="absolute top-6 right-8 w-10 h-10 text-indigo-100" />
                <p className="text-zinc-600 mb-8 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 not-italic">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900">{testimonial.name}</div>
                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">Ready to Secure Your Digital Future?</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">Join hundreds of UK care providers who trust us with their critical IT infrastructure.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all shadow-xl"
            >
              Get a Free Audit
            </Link>
            <Link
              to="/services"
              className="bg-indigo-700 text-white px-10 py-4 rounded-full font-bold hover:bg-indigo-800 transition-all border border-indigo-500"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
