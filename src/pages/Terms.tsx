import React from 'react';

export default function Terms() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Terms and Conditions</h1>
        <p className="lead">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <h2>1. Introduction</h2>
        <p>
          These Terms and Conditions govern the provision of IT services by Tameside Supported Living ("the Company", "we", "us") to the client ("you"). By engaging our services, you agree to be bound by these terms.
        </p>

        <h2>2. Services</h2>
        <p>
          We will provide the IT services described in the service agreement or quote provided to you. We will use reasonable skill and care in providing these services.
        </p>

        <h2>3. Fees and Payment</h2>
        <ul>
          <li>All fees are quoted in Great British Pounds (£) and are exclusive of VAT unless otherwise stated.</li>
          <li>Invoices are payable within 30 days of the invoice date.</li>
          <li>We reserve the right to charge interest on late payments at the statutory rate under the Late Payment of Commercial Debts (Interest) Act 1998.</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          All intellectual property rights in any materials provided by us remain our property. Upon full payment of fees, we grant you a non-exclusive license to use such materials for your internal business purposes.
        </p>

        <h2>5. Confidentiality</h2>
        <p>
          Both parties agree to keep confidential any information obtained from the other party that is marked confidential or would reasonably be considered confidential.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          Nothing in these terms limits our liability for death or personal injury caused by our negligence. Subject to this, our total liability to you shall not exceed the total fees paid by you in the 12 months preceding the claim. We are not liable for any indirect or consequential loss, including loss of profit or data.
        </p>

        <h2>7. Termination</h2>
        <p>
          Either party may terminate the agreement by giving 30 days' written notice. We may terminate immediately if you fail to pay any fees due or commit a material breach of these terms.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>

        <h2>9. Company Details</h2>
        <p>
          <strong>Company Name:</strong> Tameside Supported Living<br />
          <strong>Registered Office:</strong> N/A<br />
          <strong>Company Registration Number:</strong> N/A<br />
          <strong>Email:</strong> N/A
        </p>
      </div>
    </div>
  );
}
