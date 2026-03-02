import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="pt-20">
      <section className="bg-zinc-50 py-24 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-zinc-900 mb-6"
          >
            Terms & Conditions
          </motion.h1>
          <p className="text-zinc-600">Last Updated: March 2026</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-zinc max-w-none">
          <div className="space-y-12 text-zinc-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
              <p>
                These terms and conditions govern your use of the website and services provided by Sterling Standard Care Group Liverpool ("the Company", "we", "us", "our"). By accessing this website or engaging our services, you agree to be bound by these terms in full.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Company Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Company Name:</strong> Sterling Standard Care Group Liverpool</li>
                <li><strong>Registered Office:</strong> Not Available</li>
                <li><strong>Company Registration Number:</strong> Not Available</li>
                <li><strong>Business Email:</strong> sterlingstandardcaregroupliverpool.co.uk</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Services & Payment</h2>
              <p>
                All services provided are subject to a separate Service Level Agreement (SLA) or Statement of Work (SOW).
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>All financial transactions and quotes are in British Pounds Sterling (£).</li>
                <li>Invoices are subject to UK VAT at the prevailing rate (currently 20%) unless otherwise stated.</li>
                <li>Payment terms are strictly 14 days from the date of invoice unless otherwise agreed in writing.</li>
                <li>Late payments may incur interest charges in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
              <p>
                Unless otherwise stated, we or our licensors own the intellectual property rights for all material on the website and all deliverables produced during the course of our services. All intellectual property rights are reserved.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which by its nature is clearly confidential. This obligation survives the termination of any agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of our services. We will not be liable for any loss or damage of any nature arising from the use of our services beyond the fees paid for those specific services in the 12 months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
