import { motion } from 'motion/react';

const COMPANY_DETAILS = {
  name: "Island Business Centre",
  address: "15 Queens Road, Donnington, Telford, England, TF2 8DB",
  crn: "17049338",
  phone: "0208 088 5943",
  email: "info@islandbusinesscentre.co.uk"
};

const Terms = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Terms and Conditions
          </motion.h1>
          <p className="text-slate-500">Last Updated: March 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl mx-auto prose prose-slate prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p>
                These Terms and Conditions govern the use of the services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"), a company registered in England and Wales under company number {COMPANY_DETAILS.crn}, with its registered office at {COMPANY_DETAILS.address}.
              </p>
              <p>
                By accessing our website or engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Services</h2>
              <p>
                The Company provides various IT services, including but not limited to managed IT support, cybersecurity, cloud solutions, and consultancy. The specific scope of services for each client will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
              <p>
                All prices quoted are in Great British Pounds (GBP) and are subject to VAT at the prevailing rate.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Managed service fees are invoiced monthly in advance.</li>
                <li>Project-based work may require a deposit before commencement.</li>
                <li>Invoices are payable within 14 days of the invoice date unless otherwise agreed in writing.</li>
                <li>We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p>
                All intellectual property rights in the materials, software, and documentation provided by the Company remain the property of the Company or its licensors. Clients are granted a non-exclusive, non-transferable licence to use such materials solely for their internal business purposes during the term of the engagement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential all information obtained from the other party that is designated as confidential or which by its nature should be treated as confidential. This obligation survives the termination of any agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or business opportunities. Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client in the 12 months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
              <p>
                Either party may terminate a service agreement by providing the notice period specified in the relevant SLA (typically 30 or 90 days). We reserve the right to suspend or terminate services immediately if the client breaches these terms or fails to make payments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
              <p>
                These Terms and Conditions and any dispute or claim arising out of them shall be governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.
              </p>
            </div>

            <div className="pt-10 border-t border-slate-200">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="font-bold">
                {COMPANY_DETAILS.name}<br />
                {COMPANY_DETAILS.address}<br />
                Email: {COMPANY_DETAILS.email}<br />
                Phone: {COMPANY_DETAILS.phone}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
