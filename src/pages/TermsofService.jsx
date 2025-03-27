import React from "react";
import LoginHeader from "../components/LoginHeader";
import Announcement from "../components/Announcement";
import { MdOutlineSimCardDownload } from "react-icons/md";
import file from '../assets/files/BizSolutions_LLC-TermsOfService(TOS).pdf';

const TermsOfService = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "BizSolutions_LLC-TermsOfService(TOS).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Announcement />
      <LoginHeader />

      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-16">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <div className="flex items-center justify-between py-5">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                  BizSolutions LLC
              </h1>

              <MdOutlineSimCardDownload
                className="text-3xl cursor-pointer hover:text-orange-500"
                onClick={handleDownload}
                title="Download Terms of Service"
              />
            </div>


            <a href="#" className="hover:underline">
              <h3 className="font-bold uppercase text-gray-900">Terms of Service (TOS)</h3>
            </a>

            <p className="my-3 text-xs font-medium text-gray-600">Last Updated: March 2025</p>

            <hr className="my-4" />

            <div className="text-justify">

                {/* Section 1 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  I. Introduction & Acceptance
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                  By accessing or using any services provided by BizSolutions LLC, including
                  website development, business listing, bookkeeping, outsourcing support, and IT support,
                  you agree to comply with and be bound by these Terms of Service (TOS).
                  These terms apply to all users, including browsers, vendors, customers, merchants, and content contributors.
                </p>
                </div>

                {/* Section 2 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  II. Scope and Nature of Services/Solutions
                </h4>

                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">Business Listing Services:</p>
                <p className="mt-2 ms-5 text-sm text-gray-700">
                  We offer digital platforms tailored for business listings to enhance your online presence. Our services include optimizing listings for search engines (SEO), managing customer reviews, and providing detailed analytics reports.
                </p>

                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">Mobile Development Solutions:</p>
                <p className="mt-2 ms-5 text-sm text-gray-700">
                  We specialize in developing cross-platform and native mobile applications designed to meet diverse business needs. From conceptualization and UI/UX design to testing and deployment, our team ensures that your mobile solution is both user-friendly and performance-optimized, helping you stay competitive in an ever-evolving mobile landscape.
                </p>

                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">SEO Solutions:</p>
                <p className="mt-2 ms-5 text-sm text-gray-700">
                  We provide comprehensive SEO services aimed at improving your online visibility and search engine rankings. Our approach includes keyword research, on-page and technical optimization, link-building strategies, and performance tracking to help drive organic traffic and increase conversions.
                </p>

                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">Social Media Management Solutions:</p>
                <p className="mt-2 ms-5 text-sm text-gray-700">
                  Our social media management services help you build and maintain a consistent online presence. We handle content creation, scheduling, community engagement, and performance analysis across major social platforms, ensuring your brand message remains unified and impactful.
                </p>

                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">Website Development Solutions:</p>
                <p className="mt-2 ms-5 text-sm text-gray-700">
                  We offer comprehensive web design and development services, including custom programming, e-commerce solutions, integration of content management systems (CMS), mobile application development, and ongoing website maintenance.
                </p>

                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">Website Revamp Solutions:</p>
                <p className="mt-2 ms-5 text-sm text-gray-700">
                  Our website revamp solutions address design updates, improved user experience (UX), content restructuring, and technical enhancements. Whether you need a full redesign or targeted improvements, we work to modernize and optimize your site to meet current web standards and business objectives.
                </p>

                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">Bookkeeping Services:</p>
                <p className="mt-2 ms-5 text-sm text-gray-700">
                  Our financial record management includes comprehensive services such as general ledger maintenance, managing accounts payable and receivable, payroll processing, and generating financial reports, ensuring your financial records are accurate and up-to-date.
                </p>

                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">Customer Support Services:</p>
                <p className="mt-2 ms-5 text-sm text-gray-700">
                  We provide a range of administrative, technical, and specialized support services for various business processes that our clients choose to outsource, ensuring efficiency and quality in outsourced operations.
                </p>

                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">Sales & Collection Solutions:</p>
                <p className="mt-2 ms-5 text-sm text-gray-700">
                  We offer end-to-end sales and collection support, which includes prospecting, customer onboarding, invoicing, and following up on outstanding payments. Our goal is to help you streamline revenue cycles, improve cash flow, and maintain strong customer relationships.
                </p>

                <p className="mt-2 ms-1 text-sm text-gray-700 font-semibold">Technical & IT Support Services:</p>
                <p className="mt-2 ms-5 text-sm text-gray-700">
                  Our IT support encompasses a wide range of services, including system setup, network configuration, implementing cybersecurity solutions, managing data backup and recovery, and offering ongoing IT consultations to keep your technology infrastructure robust and secure.
                </p>
                </div>

                {/* Section 3 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  III. Registration, User Accounts, and Responsibilities
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                  To access specific services, users are required to register and create an account. By doing so, users commit to providing current, complete, and accurate information for all purchases and account activities. It is the responsibility of the user to promptly update their account and other relevant information, including email addresses and credit card numbers, to facilitate seamless transactions and enable efficient communication when necessary.
                </p>
                </div>

                {/* Section 4 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                    IV. Privacy Policy and Data Protection
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                    Respect for user privacy is a cornerstone of our operations. Our Privacy Policy outlines our practices concerning the collection, use, and sharing of personal data. By utilizing our services, you acknowledge and consent to the processing of your data in accordance with these practices. Additionally, you affirm that all data provided by you is accurate and up-to-date.
                </p>
                </div>

                {/* Section 5 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                    V. User Conduct and Compliance with Laws
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                    Users are strictly prohibited from using our services for any unlawful purposes or engaging in activities that violate any local, state, national, or international laws or regulations. This prohibition includes, but is not limited to, adherence to data privacy laws, intellectual property laws, and export control laws. It is the responsibility of the user to ensure their activities conform to all applicable legal standards.
                </p>
                </div>

                {/* Section 6 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                    VI. Intellectual Property Rights and Content Ownership
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                    All content provided on or through the services, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the service, is the property of BizSolutions LLC or its suppliers and protected by copyright and other intellectual property laws.
                </p>
                </div>

                {/* Section 7 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                    VII. Service Modifications, Interruptions, and Termination
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                    We reserve the right to modify, suspend, or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the service. Accounts that are found to be in violation of these Terms of Service (TOS) may be terminated or suspended.
                </p>
                </div>

                {/* Section 8 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                    VIII. Warranties and Limitation of Liability
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                    We do not guarantee, represent, or warrant that your use of our service will be uninterrupted, timely, secure, or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
                </p>
                </div>

                {/* Section 9 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                    IX. Indemnification
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                    You agree to indemnify, defend, and hold harmless BizSolutions LLC and our partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service (TOS) or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
                </p>
                </div>

                {/* Section 10 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                    X. Fees, Payments, and Billing
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                    Certain services may require payment of fees. Users agree to pay all fees and charges on time, and BizSolutions LLC reserves the right to suspend or terminate access to services for any accounts with overdue balances.
                </p>
                </div>

                {/* Section 11 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                    XI. Cancellation, Refund, and Return Policy
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                    Users may cancel services under certain conditions outlined in our cancellation policy. We will issue refunds in accordance with our refund policy, which is detailed on our website.
                </p>
                </div>


                {/* Section 12 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                    XII. Governing Law and Dispute Resolution
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                    These Terms of Service (TOS) and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of California. Any disputes or claims arising out of or in connection with these Terms of Service (TOS) will be subject to the exclusive jurisdiction of the state and federal courts located in California.
                </p>
                </div>

                {/* Section 13 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                    XIII. Entire Agreement and Severability
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                    These Terms of Service (TOS) and any policies or operating rules posted by us on this site or in respect to the service constitute the entire agreement and understanding between you and us. If any provision of these Terms of Service (TOS) is determined to be unlawful, void, or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed severed from these Terms of Service (TOS).
                </p>
                </div>

                {/* Section 14 */}
                <div>
                <h4 className="pt-4 text-lg font-semibold text-gray-900">
                  XIV. Contact Information and Notices
                </h4>
                <p className="mt-2 text-sm text-gray-700">
                  Questions about these Terms of Service should be directed to us at <a href="tel:+18332497418" className="underline">+1 833-249-7418</a>. All notices to users will be posted on our website or sent via email.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;


