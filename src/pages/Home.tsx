import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Server, Shield, Cloud, Users, BarChart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-16 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
           <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600 blur-[100px]" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900 blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:leading-tight">
                <span className="block">Enterprise-Grade IT</span>
                <span className="block text-blue-500">For UK Businesses</span>
              </h1>
              <p className="mt-4 text-lg text-slate-300 sm:mt-6 max-w-2xl mx-auto lg:mx-0">
                Tameside Supported Living delivers robust, secure, and scalable technology solutions. We empower British organisations to thrive in the digital economy with managed services, cloud migration, and cyber security.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-lg hover:shadow-blue-500/25"
                >
                  Get a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-200 bg-transparent hover:bg-slate-800 md:text-lg transition-all"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm p-6">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-xl">
                        <Server className="h-8 w-8 text-blue-400 mb-2" />
                        <div className="text-2xl font-bold text-white">99.9%</div>
                        <div className="text-xs text-slate-400">Uptime Guarantee</div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-xl">
                        <Shield className="h-8 w-8 text-emerald-400 mb-2" />
                        <div className="text-2xl font-bold text-white">24/7</div>
                        <div className="text-xs text-slate-400">Cyber Monitoring</div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-xl col-span-2">
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-sm text-slate-300">System Status</div>
                            <div className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                <span className="text-xs text-emerald-400">Operational</span>
                            </div>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              IT Solutions That Drive Growth
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              We don't just fix computers; we engineer the infrastructure that powers your business success.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: 'Cyber Security First',
                desc: 'GDPR-compliant security protocols protecting your data from modern threats.'
              },
              {
                icon: Cloud,
                title: 'Cloud Native',
                desc: 'Seamless migration and management of Azure, AWS, and Google Cloud environments.'
              },
              {
                icon: Users,
                title: 'UK-Based Support',
                desc: 'Local helpdesk support available during your business hours, not an overseas call centre.'
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
                Delivering Measurable ROI
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We helped a Manchester-based logistics firm modernise their legacy infrastructure, resulting in significant cost savings and efficiency gains.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-emerald-100 rounded-md p-3">
                    <BarChart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">£45,000 Saved Annually</h4>
                    <p className="text-slate-500">Reduced server maintenance and energy costs.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">300% Speed Increase</h4>
                    <p className="text-slate-500">Faster data processing and order fulfilment.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
               <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                  <blockquote className="relative z-10">
                    <div className="text-4xl text-blue-400 font-serif mb-4">"</div>
                    <p className="text-xl leading-relaxed font-medium">
                      Tameside Supported Living transformed our IT infrastructure. Their team was professional, knowledgeable, and the transition was seamless. We've seen a direct impact on our bottom line.
                    </p>
                    <footer className="mt-8 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold">JD</div>
                      <div className="ml-4">
                        <div className="font-bold">James Davies</div>
                        <div className="text-slate-400 text-sm">Operations Director, Mancunian Logistics</div>
                      </div>
                    </footer>
                  </blockquote>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to upgrade your IT infrastructure?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Join hundreds of UK businesses trusting Tameside Supported Living with their technology needs.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:text-lg transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
