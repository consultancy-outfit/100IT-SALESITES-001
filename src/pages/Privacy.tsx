export default function Privacy() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="lead text-lg">
            At Attaining Independence, we are committed to protecting and respecting your privacy. This policy explains how we process personal data in accordance with the UK General Data Protection Regulation (UK GDPR).
          </p>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Data We Collect</h2>
            <p>We may collect and process the following data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (Name, Email, Phone Number, Company Name)</li>
              <li>Technical data (IP address, browser type, operating system)</li>
              <li>Usage data (How you use our website and services)</li>
              <li>Marketing preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Purpose of Processing</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage our IT services</li>
              <li>Respond to enquiries and provide support</li>
              <li>Send service updates and marketing communications (where consented)</li>
              <li>Improve our website and user experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Your Rights</h2>
            <p>Under the UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction or erasure of your data</li>
              <li>Object to or restrict processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and partners who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Officer at:<br />
              <strong>Email:</strong> Info@attainingindependence.co.uk<br />
              <strong>Address:</strong> 15 Queens Road, Donnington, Telford, England, TF2 8DB
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <p className="text-sm italic">Last updated: March 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
}
