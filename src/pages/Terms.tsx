import { motion } from 'framer-motion';

const COMPANY_DETAILS = {
  name: "Khalid Mehmood Khattak",
  brand: "Khattak IT Solutions",
  address: "160a Croydon Road, Caterham, England, CR3 6QE",
  crn: "17046244",
  phone: "0189 564 6130",
  email: "Info@mavyllodge.co.uk"
};

export default function Terms() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-24 text-center text-white">
        <div className="section-padding">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Terms & <span className="text-indigo-400">Conditions</span></h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        </div>
      </section>

      <section className="section-padding max-w-4xl mx-auto bg-white rounded-[3rem] -mt-16 relative z-20 shadow-xl border border-slate-200 p-12 md:p-20">
        <div className="prose prose-slate max-w-none space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms and Conditions ("Terms") govern your use of the services provided by {COMPANY_DETAILS.name}, trading as {COMPANY_DETAILS.brand} ("we", "us", "our"). By accessing our website or using our services, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">2. Company Information</h2>
            <ul className="text-slate-600 space-y-2 list-disc pl-6">
              <li><strong>Company Name:</strong> {COMPANY_DETAILS.name}</li>
              <li><strong>Registered Office:</strong> {COMPANY_DETAILS.address}</li>
              <li><strong>Company Registration Number:</strong> {COMPANY_DETAILS.crn}</li>
              <li><strong>Official Business Email:</strong> {COMPANY_DETAILS.email}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">3. Services</h2>
            <p className="text-slate-600 leading-relaxed">
              We provide various IT services, including managed support, cybersecurity, cloud solutions, and consultancy. The specific scope of services will be outlined in a separate Service Level Agreement (SLA) or proposal provided to each client.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">4. Payment Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              All prices are quoted in Great British Pounds (GBP) and exclude VAT unless otherwise stated. Invoices are payable within 14 days of the invoice date. We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">5. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All intellectual property rights in the materials provided as part of our services remain our property or the property of our licensors. Clients are granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">6. Confidentiality</h2>
            <p className="text-slate-600 leading-relaxed">
              Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which ought reasonably to be treated as confidential. This obligation survives the termination of any agreement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">7. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, our liability for any loss or damage arising out of or in connection with our services is limited to the total fees paid by the client in the 12 months preceding the claim. We are not liable for any indirect or consequential loss.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">8. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
