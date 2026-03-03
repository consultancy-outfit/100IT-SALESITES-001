import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

        <h2>1. Introduction</h2>
        <p>
          Sefton Supported Living ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, and share your personal data when you use our website or services, in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>

        <h2>2. Data Controller</h2>
        <p>
          For the purposes of the Data Protection Legislation, the Data Controller is Sefton Supported Living.
          <br />
          <strong>Registered Office:</strong> N/A
          <br />
          <strong>Email:</strong> N/A
        </p>

        <h2>3. Information We Collect</h2>
        <p>We may collect and process the following data about you:</p>
        <ul>
          <li><strong>Identity Data:</strong> Name, username, or similar identifier.</li>
          <li><strong>Contact Data:</strong> Email address, telephone numbers, and billing address.</li>
          <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, and operating system.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
          <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us.</li>
        </ul>

        <h2>4. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li><strong>Performance of Contract:</strong> Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li><strong>Legitimate Interests:</strong> Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li><strong>Legal Obligation:</strong> Where we need to comply with a legal or regulatory obligation.</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>
          We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
        </p>

        <h2>7. Your Legal Rights</h2>
        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
        <ul>
          <li>Request access to your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request restriction of processing your personal data.</li>
          <li>Request transfer of your personal data.</li>
          <li>Withdraw consent at any time.</li>
        </ul>
        <p>
          If you wish to exercise any of the rights set out above, please contact us at the email address provided above.
        </p>

        <h2>8. Cookies</h2>
        <p>
          Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. The latest version will always be posted on this page.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at the details provided in Section 2.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
