import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Effective Date: {new Date().toLocaleDateString('en-GB')}</p>

        <div className="prose prose-slate max-w-none">
          <p>
            At Swanton Community Services Suffolk ("we", "us", or "our"), we are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h3>1. Data Controller</h3>
          <p>
            Swanton Community Services Suffolk is the data controller responsible for your personal data.<br />
            Registered Office: N/A<br />
            Email: N/A
          </p>

          <h3>2. Information We Collect</h3>
          <p>
            We may collect and process the following data about you:
          </p>
          <ul>
            <li><strong>Identity Data:</strong> Name, username, or similar identifier.</li>
            <li><strong>Contact Data:</strong> Billing address, delivery address, email address, and telephone numbers.</li>
            <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, and location.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
            <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us.</li>
          </ul>

          <h3>3. How We Use Your Personal Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h3>4. Data Security</h3>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>

          <h3>5. Data Retention</h3>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>

          <h3>6. Your Legal Rights</h3>
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
          <p>
            If you wish to exercise any of the rights set out above, please contact us.
          </p>

          <h3>7. Cookies</h3>
          <p>
            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
          </p>

          <h3>8. Third-Party Links</h3>
          <p>
            This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
          </p>

          <h3>9. Changes to the Privacy Policy</h3>
          <p>
            We keep our privacy policy under regular review. This version was last updated on {new Date().toLocaleDateString('en-GB')}.
          </p>

          <h3>10. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Officer at:<br />
            Email: N/A
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
