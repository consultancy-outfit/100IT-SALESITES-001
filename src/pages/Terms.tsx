import { COMPANY_DETAILS } from '@/src/constants';

export default function Terms() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to the website of {COMPANY_DETAILS.name}. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions in full.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Company Details</h2>
            <p>
              <strong>Company Name:</strong> {COMPANY_DETAILS.name}<br />
              <strong>Registered Office:</strong> {COMPANY_DETAILS.address}<br />
              <strong>Company Registration Number (CRN):</strong> {COMPANY_DETAILS.crn}<br />
              <strong>Governing Law:</strong> England & Wales
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Payment Terms</h2>
            <p>
              All financial references and quotes provided by {COMPANY_DETAILS.name} are in Great British Pounds (£). Unless otherwise stated, all prices are exclusive of VAT. Payment terms are strictly 30 days from the date of invoice unless a separate service level agreement (SLA) specifies otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, {COMPANY_DETAILS.name} and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from our website for your own personal use subject to restrictions set in these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information obtained from the other party that is marked as confidential or which by its nature is clearly confidential. This includes technical data, business plans, and client information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, {COMPANY_DETAILS.name} shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of England and Wales and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
