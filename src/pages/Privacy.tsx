import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Overview</h2>
            <p>
              Basildon Supported Living Service ("we", "us", "our") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Data Controller</h2>
            <p>
              For the purpose of the UK GDPR, the data controller is Basildon Supported Living Service, Unit 14, Basildon Business Centre, Bentalls, Basildon, Essex, SS14 3BT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Types of Data We Collect</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (Name, Email, Phone Number, Company Name).</li>
              <li>Technical data (IP address, browser type, operating system).</li>
              <li>Usage data (How you use our website and services).</li>
              <li>Communication data (Records of correspondence with us).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Purposes of Processing</h2>
            <p>We use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our IT services.</li>
              <li>To respond to enquiries and provide customer support.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our website and service offerings.</li>
              <li>To send marketing communications (where you have consented).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Your Rights</h2>
            <p>Under the UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of inaccurate data.</li>
              <li>The right to erasure ('right to be forgotten').</li>
              <li>The right to restrict processing.</li>
              <li>The right to data portability.</li>
              <li>The right to object to processing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Security Measures</h2>
            <p>
              We have implemented appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction. This includes encryption, secure servers, and regular security audits.
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-200">
            <p className="text-sm italic">Last Updated: February 27, 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
