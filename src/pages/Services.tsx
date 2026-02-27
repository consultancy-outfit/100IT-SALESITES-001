import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Our <span className="text-emerald-600">IT Services</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We provide a comprehensive suite of IT solutions designed to help British businesses scale securely and efficiently.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-16 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <div className="inline-block px-4 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  Service {index + 1}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8">{service.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-slate-900 mb-3">Ideal For:</h4>
                  <p className="text-slate-600">{service.target}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Starting From</p>
                    <p className="text-3xl font-bold text-slate-900">{service.price}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all text-center"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="relative">
                  <div className="absolute -inset-4 bg-emerald-100 rounded-[2rem] -z-10 rotate-2" />
                  <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-8">Our Process</h4>
                    <div className="space-y-8">
                      {service.process.map((step, i) => (
                        <div key={step} className="flex gap-6 relative">
                          {i < service.process.length - 1 && (
                            <div className="absolute left-4 top-8 bottom-[-2rem] w-0.5 bg-slate-100" />
                          )}
                          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 z-10">
                            {i + 1}
                          </div>
                          <div>
                            <h5 className="font-bold text-slate-900 mb-1">{step}</h5>
                            <p className="text-sm text-slate-500">
                              Methodical approach ensuring consistent quality and measurable results.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
