export default function Privacy() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Overview</h2>
          <p>
            Monaveen IT Services Ltd ("we", "us", "our") is committed to protecting the privacy and security of your personal data. This policy explains how we collect, use, and protect your data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
          <p>We may collect and process the following types of personal data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (name, email address, phone number)</li>
            <li>Business details (job title, company name)</li>
            <li>Technical data (IP address, browser type, usage patterns on our website)</li>
            <li>Communication records (emails, support tickets, call logs)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
          <p>We use your data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and manage our IT services</li>
            <li>To respond to enquiries and provide support</li>
            <li>To process payments and manage accounts</li>
            <li>To comply with legal and regulatory obligations</li>
            <li>To improve our website and service offerings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
          <p>Under UK GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access your personal data</li>
            <li>The right to rectification of inaccurate data</li>
            <li>The right to erasure ("right to be forgotten")</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
          <p>
            Our website uses cookies to enhance user experience and analyse traffic. You can manage your cookie preferences through your browser settings. For more information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security</h2>
          <p>
            We implement robust technical and organisational measures to protect your data from unauthorised access, loss, or disclosure. This includes encryption, secure data centres, and regular security audits.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this policy or our data practices, please contact our Data Protection Officer at info@monaveen.co.uk or write to us at: 124 City Road, London, EC1V 2NX.
          </p>
        </section>

        <div className="pt-12 border-t border-slate-100 text-sm italic">
          Last updated: February 2026
        </div>
      </div>
    </div>
  );
}
