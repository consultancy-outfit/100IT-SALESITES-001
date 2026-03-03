import React from 'react';

const Terms = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

        <h2>1. Introduction</h2>
        <p>
          These Terms and Conditions ("Terms") govern the provision of IT services by Sefton Supported Living ("we", "us", "our") to the client ("you", "your"). By engaging our services, you agree to be bound by these Terms.
        </p>

        <h2>2. Services</h2>
        <p>
          We shall provide the IT services as described in the relevant Service Agreement or Statement of Work. We will perform the services with reasonable skill and care, in accordance with good industry practice.
        </p>

        <h2>3. Fees and Payment</h2>
        <ul>
          <li>All fees are quoted in Great British Pounds (£) and are exclusive of VAT, which shall be added at the prevailing rate.</li>
          <li>Invoices are payable within 30 days of the invoice date, unless otherwise agreed in writing.</li>
          <li>We reserve the right to charge interest on overdue amounts at the rate of 8% above the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</li>
        </ul>

        <h2>4. Client Obligations</h2>
        <p>
          You agree to provide us with such information, access, and cooperation as we may reasonably require to perform the services. You are responsible for ensuring that your hardware and software meet the minimum requirements for the services provided.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All intellectual property rights in any materials provided by us to you shall remain our property. Upon full payment of fees, we grant you a non-exclusive, non-transferable license to use such materials for your internal business purposes.
        </p>

        <h2>6. Confidentiality</h2>
        <p>
          Both parties agree to keep confidential all information of a confidential nature (including trade secrets and information of commercial value) which may be disclosed to the other party. This obligation shall survive the termination of these Terms.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          Nothing in these Terms shall limit or exclude our liability for death or personal injury caused by our negligence, or for fraud. Subject to this:
        </p>
        <ul>
          <li>Our total liability to you in contract, tort (including negligence), or otherwise, shall be limited to the total fees paid by you in the 12 months preceding the claim.</li>
          <li>We shall not be liable for any loss of profits, loss of business, depletion of goodwill, or any indirect or consequential loss.</li>
        </ul>

        <h2>8. Data Protection</h2>
        <p>
          Both parties will comply with all applicable requirements of the Data Protection Legislation (including the UK GDPR and Data Protection Act 2018). Please refer to our Privacy Policy for details on how we process personal data.
        </p>

        <h2>9. Termination</h2>
        <p>
          Either party may terminate the agreement by giving the notice period specified in the Service Agreement. We may terminate the agreement immediately if you fail to pay any amount due or commit a material breach of these Terms.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the law of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.
        </p>

        <h2>11. Company Information</h2>
        <p>
          <strong>Company Name:</strong> Sefton Supported Living<br />
          <strong>Registered Office:</strong> N/A<br />
          <strong>Company Registration Number:</strong> N/A<br />
          <strong>Email:</strong> N/A
        </p>
      </div>
    </div>
  );
};

export default Terms;
