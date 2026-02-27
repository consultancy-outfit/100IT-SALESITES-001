import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Commitment to Privacy</h2>
            <p>
              Supported Living Services Uxbridge is committed to protecting the privacy and security of your personal data. 
              This policy explains how we collect, use, and protect your information in accordance with the 
              UK General Data Protection Regulation (UK GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Data Controller</h2>
            <p>
              Supported Living Services Uxbridge is the data controller for the personal data we process. 
              Our registered office is: not available.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Types of Data Collected</h2>
            <p>We may collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business details (company name, job title)</li>
              <li>Technical data (IP address, browser type, usage patterns via cookies)</li>
              <li>Communication history and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Purposes of Processing</h2>
            <p>We process your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services</li>
              <li>To respond to enquiries and provide support</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To improve our website and service offerings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Your Rights</h2>
            <p>Under the UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure ('right to be forgotten')</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Security Measures</h2>
            <p>
              We have implemented appropriate technical and organisational measures to prevent your personal data 
              from being accidentally lost, used, or accessed in an unauthorised way.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences 
              through your browser settings at any time.
            </p>
          </section>

          <p className="text-sm text-zinc-400 pt-8 border-t border-zinc-100">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>
        </div>
      </div>
    </div>
  );
}
