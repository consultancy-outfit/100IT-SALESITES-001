const Terms = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="container-custom">
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-200 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-sm italic">Last Updated: February 2026</p>
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>These Terms and Conditions govern the use of services provided by Daisy Haye ("the Company"). By engaging our services, you agree to be bound by these terms.</p>
              <p>Company Details: Daisy Haye | Registered Office: info@daisyhaye.co.uk | CRN: Not available.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Services</h2>
              <p>The Company provides IT services, including but not limited to managed support, cybersecurity, cloud infrastructure, and consultancy. The specific scope of work will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW).</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
              <p>All financial references and invoices are in Pounds Sterling (GBP). Prices quoted exclude VAT at the prevailing UK rate unless explicitly stated otherwise.</p>
              <p>Payment is due within 14 days of the invoice date for standard services. Managed services are billed monthly in advance.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
              <p>All intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company until full payment is received, at which point a non-exclusive license is granted to the Client.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
              <p>Both parties agree to keep confidential all non-public information obtained during the course of the engagement. This obligation survives the termination of the agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
              <p>To the maximum extent permitted by UK law, the Company's liability for any claim arising out of the services shall be limited to the total fees paid by the Client in the 12 months preceding the claim.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
              <p>These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
