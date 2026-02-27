export default function Privacy() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

          <h3>1. Introduction</h3>
          <p>
            Visiting Angels Manchester West ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h3>2. Data Controller</h3>
          <p>
            Visiting Angels Manchester West is the data controller for the personal information we process, unless otherwise stated.
          </p>

          <h3>3. Information We Collect</h3>
          <p>
            We may collect and process the following data about you:
          </p>
          <ul>
            <li><strong>Identity Data:</strong> Name, username, or similar identifier.</li>
            <li><strong>Contact Data:</strong> Billing address, delivery address, email address, and telephone numbers.</li>
            <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, and operating system.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
          </ul>

          <h3>4. How We Use Your Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>To perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>To comply with a legal or regulatory obligation.</li>
          </ul>

          <h3>5. Data Retention</h3>
          <p>
            We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>

          <h3>6. Data Security</h3>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>

          <h3>7. Your Legal Rights</h3>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          </p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>

          <h3>8. Cookies</h3>
          <p>
            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
          </p>

          <h3>9. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:<br/>
            Visiting Angels Manchester West<br/>
            Registered Office Address (UK): N/A<br/>
            Official Business Email: N/A
          </p>
        </div>
      </div>
    </div>
  );
}
