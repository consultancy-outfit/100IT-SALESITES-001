export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-slate-500 italic">Last Updated: February 27, 2026</p>
      </div>

      <section className="space-y-6 text-slate-700 leading-relaxed">
        <p>
          Sylvian Care Newbury ("we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">1. Data Controller</h2>
          <p>
            Sylvian Care Newbury is the data controller for the personal data we collect through this website and our services.
            <br />Company Name: Sylvian Care Newbury
            <br />CRN: 00000
            <br />Email: 0000
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">2. Types of Data We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> Name, job title, company name.</li>
            <li><strong>Contact Data:</strong> Email address, phone number, business address.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage data via cookies.</li>
            <li><strong>Service Data:</strong> Information related to the IT support and services we provide to you.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">3. Purposes of Processing</h2>
          <p>We process your data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your enquiries via our contact form.</li>
            <li>To provide and manage our IT services to you.</li>
            <li>To comply with legal and regulatory obligations.</li>
            <li>To improve our website and service offerings.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">4. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, client data is retained for 7 years after the end of the business relationship.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">5. Your Rights</h2>
          <p>Under the UK GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access your personal data.</li>
            <li>The right to rectification of inaccurate data.</li>
            <li>The right to erasure ("right to be forgotten").</li>
            <li>The right to restrict processing.</li>
            <li>The right to data portability.</li>
            <li>The right to object to processing.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">6. Cookies</h2>
          <p>
            Our website uses cookies to distinguish you from other users and to provide a better browsing experience. You can manage your cookie preferences through your browser settings.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">7. Security Measures</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and third parties who have a business need to know.
          </p>
        </div>
      </section>
    </div>
  );
}
