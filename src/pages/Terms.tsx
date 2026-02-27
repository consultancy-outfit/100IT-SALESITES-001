import React from 'react';

const Terms = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the website and services provided by Basildon Supported Living Service ("the Company", "we", "us", "our"). By accessing our website or engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Company Information</h2>
            <ul className="list-none space-y-2">
              <li><strong>Company Name:</strong> Basildon Supported Living Service</li>
              <li><strong>Registered Office:</strong> Unit 14, Basildon Business Centre, Bentalls, Basildon, Essex, SS14 3BT</li>
              <li><strong>Company Registration Number:</strong> 08421932</li>
              <li><strong>Official Email:</strong> info@basildonsupportedlivingservice.co.uk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Services and Payments</h2>
            <p>
              All service descriptions and pricing are subject to change. All financial transactions are conducted in Great British Pounds (GBP). Prices quoted on the website are exclusive of VAT unless otherwise stated. Payment terms for managed services are typically 30 days from the date of invoice unless specified otherwise in a separate Service Level Agreement (SLA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of Basildon Supported Living Service or its content suppliers and is protected by UK and international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client data and business operations. Both parties agree not to disclose any proprietary or confidential information obtained during the course of our professional relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the Company shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or website. Our total liability for any claim arising out of our services shall not exceed the total amount paid by the client for those services in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-200">
            <p className="text-sm italic">Last Updated: February 27, 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
