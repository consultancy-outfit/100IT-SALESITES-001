import React from "react";
import { motion } from "framer-motion";
import { COMPANY_DETAILS } from "../constants";

export const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to the website of {COMPANY_DETAILS.name}. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions in full.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Professional Services</h2>
            <p>
              {COMPANY_DETAILS.name} provides IT services including managed support, cybersecurity, and cloud solutions. All services are subject to a separate Service Level Agreement (SLA) or contract which will be provided upon engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
            <p>
              All financial references and quotes are in Pounds Sterling (£/GBP). Invoices are typically issued monthly in advance for managed services and upon completion for project work. VAT will be applied at the prevailing UK rate unless otherwise stated. Payment is due within 14 days of the invoice date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, {COMPANY_DETAILS.name} and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from our website for your own personal use subject to restrictions set in these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p>
              We acknowledge that in the course of providing services, we may have access to confidential information. We commit to maintaining the highest levels of confidentiality and will not disclose any sensitive information to third parties without prior written consent, except as required by UK law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable UK law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. {COMPANY_DETAILS.name} will not be liable for any indirect or consequential loss or damage arising under these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <p className="text-sm">
              Last Updated: {new Date().toLocaleDateString('en-GB')}
            </p>
            <p className="text-sm mt-2">
              Company Name: {COMPANY_DETAILS.name}<br />
              Registration Number: {COMPANY_DETAILS.crn}
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
