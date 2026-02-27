import React from "react";
import { motion } from "framer-motion";
import { COMPANY_DETAILS } from "../constants";

export const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              {COMPANY_DETAILS.name} is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
            <p>We may collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business details (company name, job title)</li>
              <li>Technical data (IP address, browser type, usage patterns via cookies)</li>
              <li>Any information you provide via our contact forms or during service engagement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purpose of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage the IT services you have requested</li>
              <li>To respond to enquiries and provide customer support</li>
              <li>To send administrative information and service updates</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To improve our website and service offerings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure ('right to be forgotten')</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can set your browser to refuse all or some browser cookies, but this may affect the functionality of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security Measures</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data protection practices, please contact our Data Protection Officer at {COMPANY_DETAILS.email}.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <p className="text-sm">
              Last Updated: {new Date().toLocaleDateString('en-GB')}
            </p>
            <p className="text-sm mt-2">
              {COMPANY_DETAILS.name} is registered with the Information Commissioner's Office (ICO).
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
