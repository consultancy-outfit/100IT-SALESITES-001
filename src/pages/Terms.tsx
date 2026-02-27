import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-display font-bold text-navy-900 mb-8">Terms and Conditions</h1>
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Introduction</h2>
          <p>
            These Terms and Conditions govern your use of the services provided by Blessday House ("the Company", "we", "us", "our"). By accessing our website or using our IT services, you agree to be bound by these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Company Details</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Company Name:</strong> Blessday House</li>
            <li><strong>Registered Office:</strong> N/A</li>
            <li><strong>Company Registration Number:</strong> N/A</li>
            <li><strong>Official Email:</strong> info@blessdayhouse.co.uk</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Services</h2>
          <p>
            We provide IT consultancy, managed services, cybersecurity, and software development. The specific scope of work for any project will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Payment Terms</h2>
          <p>
            All fees are quoted in Great British Pounds (GBP) and are exclusive of VAT unless otherwise stated. Invoices are payable within 30 days of the invoice date. We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Intellectual Property</h2>
          <p>
            Unless otherwise agreed in writing, all intellectual property rights in the materials, software, and documentation created by us during the provision of services shall remain our property. The client is granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential all information obtained from the other party that is designated as confidential or which by its nature should be considered confidential. This obligation shall survive the termination of any agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client for the specific service giving rise to the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section className="pt-8 border-t border-slate-200">
          <p className="text-sm italic">Last updated: February 2026</p>
        </section>
      </div>
    </div>
  );
}
