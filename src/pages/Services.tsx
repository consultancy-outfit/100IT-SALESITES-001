import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../constants";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      {/* Header */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Our IT Services</h1>
          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto">
            Tailored technology solutions designed to drive efficiency, security, and growth for your UK business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col lg:items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
                    <img
                      src={`https://picsum.photos/seed/${service.id}/800/600`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-indigo-600/10" />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-indigo-50 text-indigo-600">
                    Starting from {service.price}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-slate-600 text-sm">
                            <CheckCircle2 size={16} className="text-emerald-500 mr-2 shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Our Process</h4>
                      <ul className="space-y-2">
                        {service.process.map((step, i) => (
                          <li key={i} className="flex items-center text-slate-600 text-sm">
                            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold mr-2 shrink-0">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-indigo-600 font-bold hover:translate-x-1 transition-transform"
                    >
                      Enquire about this service <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Not sure what you need?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Our experts can provide a comprehensive IT audit to identify gaps in your current infrastructure and recommend the best path forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </motion.div>
  );
};
