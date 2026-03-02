import React from 'react';
import Markdown from 'react-markdown';
import { Section } from '../components/UI';
import { COMPANY_DETAILS } from '../constants';

const Terms = () => {
  const content = `
# Terms and Conditions

**Last Updated: March 2026**

Welcome to the website of **${COMPANY_DETAILS.name}**. These terms and conditions outline the rules and regulations for the use of our website and services.

By accessing this website, we assume you accept these terms and conditions. Do not continue to use the website if you do not agree to all of the terms and conditions stated on this page.

## 1. Definitions
- **"Company"**, **"We"**, **"Our"**, **"Us"** refers to ${COMPANY_DETAILS.name}.
- **"Client"**, **"You"**, **"Your"** refers to the person or entity using our services.
- **"Services"** refers to the IT consultancy, managed support, and technology solutions provided by the Company.

## 2. Use of Services
The Client agrees to use the Services only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use and enjoyment of the Services by, any third party.

## 3. Payment Terms
- All financial references and payments are in **Pounds Sterling (£ / GBP)**.
- Invoices are payable within 30 days of the invoice date unless otherwise specified in a separate Service Level Agreement (SLA).
- We reserve the right to charge interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.

## 4. Intellectual Property
Unless otherwise stated, ${COMPANY_DETAILS.name} and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.

## 5. Confidentiality
Both parties agree to maintain the confidentiality of any proprietary information shared during the course of business. This includes technical data, business plans, and client information.

## 6. Limitation of Liability
To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. We will not be liable for any loss or damage of any nature.

## 7. Governing Law
These terms and conditions are governed by and construed in accordance with the laws of **England and Wales**, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.

## 8. Contact Information
If you have any questions about these Terms, please contact us at:
- **Email:** ${COMPANY_DETAILS.email}
- **Address:** ${COMPANY_DETAILS.address}
  `;

  return (
    <div className="pt-20">
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100">
          <div className="markdown-body prose prose-slate max-w-none">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Terms;
