const Privacy = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container-custom">
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-200 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-sm italic">Last Updated: February 2026</p>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Overview</h2>
              <p>Daisy Haye ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal data in compliance with the UK General Data Protection Regulation (UK GDPR).</p>
              <p>Data Controller: Daisy Haye | Registered Office: info@daisyhaye.co.uk.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identity Data: Name, title.</li>
                <li>Contact Data: Email address, phone number, company name.</li>
                <li>Technical Data: IP address, browser type, usage data via cookies.</li>
                <li>Service Data: Details about IT systems we manage for you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Purposes of Processing</h2>
              <p>We process your data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and manage IT services.</li>
                <li>Respond to enquiries and provide quotes.</li>
                <li>Comply with legal and regulatory obligations.</li>
                <li>Improve our website and service offerings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
              <p>We retain personal data only for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, this is 7 years following the end of a contract.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction or erasure of your data.</li>
                <li>Object to or restrict processing.</li>
                <li>Request data portability.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. Cookies</h2>
              <p>Our website uses cookies to distinguish you from other users and improve your experience. You can manage cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">7. Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and partners who have a business need to know.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
