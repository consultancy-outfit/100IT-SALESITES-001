import React from 'react';

export default function Terms() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of services provided by Supported Living Services Uxbridge 
              ("the Company"). By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Company Details</h2>
            <ul className="list-none space-y-2">
              <li><strong>Company Name:</strong> Supported Living Services Uxbridge</li>
              <li><strong>Registered Office Address:</strong> not available</li>
              <li><strong>Company Registration Number:</strong> not available</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Payment Terms</h2>
            <p>
              All fees are quoted in Pounds Sterling (£) and are subject to VAT at the prevailing UK rate. 
              Invoices are payable within 14 days of the invoice date unless otherwise agreed in writing. 
              Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, all intellectual property rights in the materials provided as part of our services 
              remain the property of Supported Living Services Uxbridge. Clients are granted a non-exclusive, 
              non-transferable license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is marked 
              as confidential or which by its nature should be considered confidential. This obligation survives 
              the termination of any service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Supported Living Services Uxbridge shall not be liable for any 
              indirect, incidental, or consequential damages, including loss of profits or data, arising out of 
              the provision of services. Our total liability shall not exceed the fees paid for the specific 
              service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of 
              England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the English courts.
            </p>
          </section>

          <p className="text-sm text-zinc-400 pt-8 border-t border-zinc-100">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>
        </div>
      </div>
    </div>
  );
}
