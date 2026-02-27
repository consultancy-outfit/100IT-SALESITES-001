export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-zinc max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Information We Collect</h2>
          <p className="text-zinc-600 leading-relaxed">
            Kanmore House ("we", "us") is committed to protecting your privacy. We collect personal data such as your name, email address, phone number, and company details when you contact us or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Purpose of Processing</h2>
          <p className="text-zinc-600 leading-relaxed">
            We process your data to:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 space-y-2">
            <li>Provide and manage our IT services.</li>
            <li>Respond to your enquiries and provide quotes.</li>
            <li>Comply with our legal and regulatory obligations in the UK.</li>
            <li>Improve our website and service offerings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Data Retention</h2>
          <p className="text-zinc-600 leading-relaxed">
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Your Rights (GDPR)</h2>
          <p className="text-zinc-600 leading-relaxed">
            Under the UK General Data Protection Regulation (GDPR), you have the following rights:
          </p>
          <ul className="list-disc pl-6 text-zinc-600 space-y-2">
            <li>The right to access your personal data.</li>
            <li>The right to rectification of inaccurate data.</li>
            <li>The right to erasure ("right to be forgotten").</li>
            <li>The right to restrict processing.</li>
            <li>The right to data portability.</li>
            <li>The right to object to processing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Cookies</h2>
          <p className="text-zinc-600 leading-relaxed">
            Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Security Measures</h2>
          <p className="text-zinc-600 leading-relaxed">
            We implement robust technical and organizational measures to protect your data, including encryption, access controls, and regular security audits.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Contact Us</h2>
          <p className="text-zinc-600 leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at info@kanmorehouse.co.uk or by post at our registered office.
          </p>
        </section>
      </div>
    </div>
  );
}
