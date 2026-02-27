import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms and Conditions</h1>
        <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

        <div className="prose prose-slate max-w-none">
          <p>
            These Terms and Conditions ("Terms") govern the provision of IT services by Swanton Community Services Suffolk ("Company", "we", "us", or "our") to the client ("Client", "you"). By engaging our services, you agree to be bound by these Terms.
          </p>

          <h3>1. Definitions</h3>
          <p>
            "Services" means the IT support, consultancy, and managed services provided by the Company as detailed in the Service Agreement or Quote.<br />
            "Fees" means the charges for the Services in Great British Pounds (GBP).
          </p>

          <h3>2. Services</h3>
          <p>
            2.1. We shall provide the Services with reasonable skill and care, in accordance with good industry practice.<br />
            2.2. We reserve the right to modify the Services if necessary to comply with any applicable law or safety requirement, or which do not materially affect the nature or quality of the Services.
          </p>

          <h3>3. Client Obligations</h3>
          <p>
            3.1. You shall provide us with access to your premises, office accommodation, and other facilities as reasonably required.<br />
            3.2. You are responsible for ensuring that your hardware and software are licensed and compliant with third-party agreements.
          </p>

          <h3>4. Payment Terms</h3>
          <p>
            4.1. All invoices are quoted and payable in GBP (£).<br />
            4.2. Invoices are due for payment within 30 days of the invoice date, unless otherwise agreed in writing.<br />
            4.3. We reserve the right to charge interest on overdue amounts at the rate of 8% above the Bank of England base rate, calculated daily.<br />
            4.4. All prices are exclusive of Value Added Tax (VAT), which shall be added at the prevailing rate.
          </p>

          <h3>5. Intellectual Property</h3>
          <p>
            5.1. All Intellectual Property Rights in or arising out of or in connection with the Services (other than Intellectual Property Rights in any materials provided by you) shall be owned by us.<br />
            5.2. We grant you a non-exclusive, royalty-free licence to use any deliverables for your internal business purposes.
          </p>

          <h3>6. Confidentiality</h3>
          <p>
            6.1. Each party undertakes that it shall not at any time disclose to any person any confidential information concerning the business, affairs, customers, clients, or suppliers of the other party, except as permitted by law.<br />
            6.2. We implement strict data security measures in compliance with GDPR.
          </p>

          <h3>7. Limitation of Liability</h3>
          <p>
            7.1. Nothing in these Terms shall limit or exclude our liability for death or personal injury caused by our negligence, or for fraud.<br />
            7.2. Subject to clause 7.1, we shall not be liable to you, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, for any loss of profit, or for any indirect or consequential loss arising under or in connection with the Contract.<br />
            7.3. Our total liability to you shall be limited to the total Fees paid by you in the 12 months preceding the claim.
          </p>

          <h3>8. Termination</h3>
          <p>
            8.1. Either party may terminate the Contract by giving the other party not less than 30 days' written notice.<br />
            8.2. We may terminate the Contract immediately if you fail to pay any amount due under the Contract on the due date for payment.
          </p>

          <h3>9. Governing Law</h3>
          <p>
            These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the law of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.
          </p>

          <h3>10. Contact Information</h3>
          <p>
            For any questions regarding these Terms, please contact us at:<br />
            <strong>Swanton Community Services Suffolk</strong><br />
            Registered Office: N/A<br />
            Email: N/A
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
