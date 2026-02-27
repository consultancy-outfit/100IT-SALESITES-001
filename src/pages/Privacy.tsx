import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Privacy Policy</h1>
        <p className="lead">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <h2>1. Introduction</h2>
        <p>
          Tameside Supported Living ("we", "us") is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>

        <h2>2. Data We Collect</h2>
        <p>We may collect the following types of personal data:</p>
        <ul>
          <li><strong>Contact Data:</strong> Name, email address, phone number, and business address.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, and usage data when you visit our website.</li>
          <li><strong>Transaction Data:</strong> Details of payments and services purchased.</li>
        </ul>

        <h2>3. How We Use Your Data</h2>
        <p>We use your data for the following purposes:</p>
        <ul>
          <li>To provide and manage our IT services.</li>
          <li>To process payments and manage your account.</li>
          <li>To communicate with you regarding service updates or enquiries.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>
          We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </p>

        <h2>5. Your Rights</h2>
        <p>Under the UK GDPR, you have the right to:</p>
        <ul>
          <li>Request access to your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request restriction of processing your personal data.</li>
        </ul>

        <h2>6. Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way.
        </p>

        <h2>7. Cookies</h2>
        <p>
          Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our data protection practices, please contact us at:
        </p>
        <p>
          <strong>Company Name:</strong> Tameside Supported Living<br />
          <strong>Email:</strong> N/A<br />
          <strong>Address:</strong> N/A
        </p>
      </div>
    </div>
  );
}
