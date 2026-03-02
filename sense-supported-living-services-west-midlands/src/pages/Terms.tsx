import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '../constants';

export default function Terms() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms and Conditions</h1>
          <p className="text-slate-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms and Conditions govern the use of services provided by {COMPANY_DETAILS.name} ("the Company", "we", "us", "our"). By engaging our services, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
            <p className="text-slate-600 leading-relaxed">
              We provide IT support, cloud solutions, cyber security, and consultancy services as detailed in our service agreements. All services are provided with reasonable skill and care in accordance with industry standards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              All prices are quoted in Great British Pounds (GBP) and are exclusive of VAT unless otherwise stated. Invoices are payable within 14 days of the invoice date. Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All intellectual property rights in materials created by us during the provision of services remain our property unless otherwise agreed in writing. The client is granted a non-exclusive license to use such materials for their internal business purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Confidentiality</h2>
            <p className="text-slate-600 leading-relaxed">
              Both parties agree to keep confidential all information obtained from the other party that is designated as confidential or which ought reasonably to be considered confidential.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              Our total liability for any claim arising out of or in connection with our services shall be limited to the total fees paid by the client for the specific service giving rise to the claim in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <div className="mt-20 pt-10 border-t border-slate-200">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Company Information</p>
            <p className="text-sm text-slate-600">{COMPANY_DETAILS.name}</p>
            <p className="text-sm text-slate-600">Registered Office: {COMPANY_DETAILS.address}</p>
            <p className="text-sm text-slate-600">CRN: {COMPANY_DETAILS.crn}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
