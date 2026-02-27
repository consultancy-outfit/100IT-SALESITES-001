import { COMPANY_DETAILS } from '../constants';

export default function Privacy() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-indigo">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
          <p className="text-slate-700 mb-4">
            {COMPANY_DETAILS.name} ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, process, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
          <p className="text-slate-700">
            <strong>Data Controller:</strong><br />
            {COMPANY_DETAILS.name}<br />
            {COMPANY_DETAILS.address}<br />
            Email: {COMPANY_DETAILS.email}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Data We Collect</h2>
          <p className="text-slate-700 mb-4">We may collect, use, store and transfer different kinds of personal data about you, including:</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li><strong>Identity Data:</strong> First name, last name, title.</li>
            <li><strong>Contact Data:</strong> Billing address, email address, and telephone numbers.</li>
            <li><strong>Financial Data:</strong> Bank account and payment card details (processed securely via third-party gateways).</li>
            <li><strong>Technical Data:</strong> IP address, browser type, time zone setting, operating system, and platform.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Purposes of Processing</h2>
          <p className="text-slate-700 mb-4">We process your personal data for the following purposes:</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>To register you as a new client and provide our IT services.</li>
            <li>To manage payments, fees, and charges.</li>
            <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
            <li>To administer and protect our business and this website (including troubleshooting, data analysis, and system maintenance).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Data Retention</h2>
          <p className="text-slate-700 mb-4">
            We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. By law, we have to keep basic information about our clients for six years for tax purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Data Security</h2>
          <p className="text-slate-700 mb-4">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. Access to your personal data is limited to those employees, agents, and contractors who have a business need to know.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Your Legal Rights</h2>
          <p className="text-slate-700 mb-4">Under data protection laws, you have rights including:</p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Cookies</h2>
          <p className="text-slate-700 mb-4">
            Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and allows us to improve our site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
          </p>
        </section>
      </div>
    </div>
  );
}
