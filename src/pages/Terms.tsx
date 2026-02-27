export default function Terms() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

          <h3>1. Introduction</h3>
          <p>
            These Terms and Conditions govern the provision of IT services by Visiting Angels Manchester West ("we", "us", "our") to you ("the Client"). By engaging our services, you agree to be bound by these terms.
          </p>

          <h3>2. Definitions</h3>
          <p>
            "Services" means the IT support, consultancy, and managed services provided by us.<br/>
            "Fees" means the charges for the Services as agreed in the Service Agreement.<br/>
            "Confidential Information" means any non-public information disclosed by one party to the other.
          </p>

          <h3>3. Services</h3>
          <p>
            We shall provide the Services with reasonable skill and care, in accordance with the Service Level Agreement (SLA) where applicable. We reserve the right to suspend services for maintenance or due to circumstances beyond our control.
          </p>

          <h3>4. Payment Terms</h3>
          <p>
            All invoices are quoted in Great British Pounds (£) and are exclusive of VAT. Invoices are payable within 30 days of the invoice date. Late payments may incur interest at 8% above the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
          </p>

          <h3>5. Client Obligations</h3>
          <p>
            The Client agrees to provide us with access to their premises and systems as reasonably required to perform the Services. The Client is responsible for maintaining valid software licenses unless otherwise agreed.
          </p>

          <h3>6. Intellectual Property</h3>
          <p>
            All Intellectual Property Rights in any materials provided by us shall remain our property. We grant the Client a non-exclusive license to use such materials for the purpose of receiving the Services.
          </p>

          <h3>7. Limitation of Liability</h3>
          <p>
            Nothing in these terms limits our liability for death or personal injury caused by negligence. Our total liability to the Client in contract, tort, or otherwise shall be limited to the total Fees paid by the Client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profit or data.
          </p>

          <h3>8. Confidentiality</h3>
          <p>
            Both parties agree to keep all Confidential Information strictly confidential and not to disclose it to any third party without prior written consent, except as required by law.
          </p>

          <h3>9. Termination</h3>
          <p>
            Either party may terminate the agreement by giving 30 days' written notice, subject to any minimum term specified in the Service Agreement. Immediate termination may occur in the event of a material breach.
          </p>

          <h3>10. Governing Law</h3>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.
          </p>

          <h3>11. Company Details</h3>
          <p>
            Visiting Angels Manchester West<br/>
            Registered Office Address (UK): N/A<br/>
            Company Registration Number: N/A<br/>
            Official Business Email: N/A
          </p>
        </div>
      </div>
    </div>
  );
}
