/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COMPANY_DETAILS } from '../constants';

export default function Cookies() {
  return (
    <div className="pt-20 pb-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Cookie Policy</h1>
      <div className="prose prose-slate prose-indigo max-w-none space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Cookies</h2>
          <p>
            {COMPANY_DETAILS.name} uses cookies for several reasons:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</li>
            <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works.</li>
            <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Managing Cookies</h2>
          <p>
            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" className="text-indigo-600 hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" className="text-indigo-600 hover:underline">www.allaboutcookies.org</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Changes to This Policy</h2>
          <p>
            We may update our Cookie Policy from time to time. Any changes we make to our Cookie Policy in the future will be posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at {COMPANY_DETAILS.email}.
          </p>
        </section>
      </div>
    </div>
  );
}
