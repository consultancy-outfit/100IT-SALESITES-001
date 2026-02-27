import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cloud, Users, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/it-office/1920/1080?blur=2')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Empowering British Businesses with <span className="text-indigo-400">Robust IT Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              From secure cloud migrations to 24/7 managed support, Highfields House delivers enterprise-grade technology services tailored for the UK market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                Explore Services
              </Link>
              <Link to="/contact" className="inline-flex justify-center items-center px-6 py-3 border border-slate-600 text-base font-medium rounded-lg text-white hover:bg-slate-800 transition-colors">
                Get a Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Strategic Technology Partner</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                At Highfields House, we understand that reliable IT infrastructure is the backbone of modern British enterprise. We specialise in aligning technology with your business objectives, ensuring seamless operations, robust security, and scalable growth.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Whether you're a burgeoning startup in London or an established manufacturer in the Midlands, our tailored IT strategies mitigate risk and drive operational efficiency.
              </p>
              <ul className="space-y-3">
                {['UK-based support desk', 'Proactive system monitoring', 'ISO 27001 compliant processes'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img src="https://picsum.photos/seed/server-room/800/600" alt="Server Room" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Highfields House?</h2>
            <p className="text-slate-600">We deliver measurable value through technical excellence and uncompromising service standards.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Uncompromising Security', desc: 'Advanced threat protection and GDPR-compliant data handling to safeguard your digital assets.' },
              { icon: Cloud, title: 'Cloud Agility', desc: 'Seamless migration and management of Microsoft 365 and AWS environments for modern workspaces.' },
              { icon: Users, title: 'Dedicated Experts', desc: 'Direct access to certified engineers who understand your business context, not just a ticketing system.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Results */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Delivering Measurable ROI</h2>
              <p className="text-indigo-200">Real results for British enterprises through strategic IT transformation.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                client: 'Financial Services Firm, City of London',
                metric: '£120,000',
                metricLabel: 'Annual Savings',
                desc: 'Consolidated legacy on-premise servers into a secure, scalable Azure cloud environment, reducing hardware maintenance and energy costs.'
              },
              {
                client: 'Manufacturing Business, Birmingham',
                metric: '99.99%',
                metricLabel: 'Uptime Achieved',
                desc: 'Implemented redundant network architecture and proactive monitoring, preventing costly production halts that previously cost £45k per hour.'
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-indigo-800/50 p-8 rounded-2xl border border-indigo-700"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-indigo-600 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{study.metric}</div>
                    <div className="text-sm text-indigo-300 font-medium uppercase tracking-wider">{study.metricLabel}</div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{study.client}</h4>
                <p className="text-indigo-200 leading-relaxed">{study.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Trusted by UK Business Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Highfields House completely overhauled our network security. Their team is responsive, highly knowledgeable, and explains complex issues in plain English.", name: "Eleanor Hughes", role: "Operations Director, Retail Group" },
              { quote: "Since moving to their managed IT service, our downtime has practically vanished. It's refreshing to work with an IT partner that genuinely cares about our bottom line.", name: "James Sterling", role: "CEO, Sterling Logistics" },
              { quote: "The cloud migration was seamless. They handled everything over the weekend, and our staff were up and running on Monday morning without a hitch.", name: "Sarah Jenkins", role: "Managing Partner, Legal Practice" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl relative"
              >
                <div className="text-indigo-200 text-6xl absolute top-4 left-4 opacity-50 font-serif">"</div>
                <p className="text-slate-700 relative z-10 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Modernise Your IT Infrastructure?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Book a free, no-obligation IT assessment with our senior engineers today.
          </p>
          <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-slate-900 bg-white hover:bg-slate-100 transition-colors">
            Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
