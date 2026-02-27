import React from 'react';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Expert IT Services for the <span className="text-emerald-600">Digital Age.</span></h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            From day-to-day support to long-term strategic planning, we provide the technical expertise you need to thrive in a competitive market.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="inline-block px-4 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6">
                  Service 0{index + 1}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-zinc-400 mb-4">Target Audience</h4>
                    <p className="text-zinc-600">{service.target}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-zinc-400 mb-4">Starting From</h4>
                    <p className="text-2xl font-bold text-emerald-600">{service.price}<span className="text-sm text-zinc-400 font-normal"> / month</span></p>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-zinc-400">Key Benefits</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-zinc-700">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all"
                >
                  Enquire about this service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex-1 w-full">
                <div className="bg-zinc-50 rounded-3xl p-8 lg:p-12 border border-black/5">
                  <h4 className="font-bold mb-8 text-center text-zinc-400 uppercase tracking-widest text-xs">Our Process</h4>
                  <div className="relative">
                    {service.process.map((step, sIndex) => (
                      <div key={step} className="flex items-start gap-6 mb-8 last:mb-0">
                        <div className="w-10 h-10 rounded-full bg-white border border-emerald-100 flex items-center justify-center font-bold text-emerald-600 shrink-0 shadow-sm">
                          {sIndex + 1}
                        </div>
                        <div>
                          <h5 className="font-bold text-zinc-900 mb-1">{step}</h5>
                          <p className="text-sm text-zinc-500">Standardised excellence at every stage of the engagement.</p>
                        </div>
                      </div>
                    ))}
                    {/* Vertical Line */}
                    <div className="absolute top-10 bottom-0 left-5 w-px bg-emerald-100 -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="mt-32 py-20 bg-zinc-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Not sure what you need?</h2>
          <p className="text-zinc-600 mb-10 max-w-xl mx-auto">
            Our experts can perform a free IT audit to identify gaps in your current infrastructure and recommend the best path forward.
          </p>
          <Link
            to="/contact"
            className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all shadow-lg"
          >
            Request Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};
