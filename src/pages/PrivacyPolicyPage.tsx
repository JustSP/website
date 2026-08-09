import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface PolicySection {
  heading: string;
  body: string;
  points?: string[];
}

const sections: PolicySection[] = [
  {
    heading: "1. Introduction",
    body: "WISH — Winworld Innovative Solutions Hub ('WISH', 'we', 'us', or 'our') operates the website at https://www.ww-hub.com and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing ww-hub.com, you agree to the practices described in this policy.",
  },
  {
    heading: "2. Information We Collect",
    body: "We collect information you provide directly to us and information we gather automatically when you use our site:",
    points: [
      "Contact details you submit through our forms, such as your name, email address, phone number, and company name.",
      "Information you provide when you contact us by email at connect@ww-hub.com or book a consultation.",
      "Usage data collected automatically, including your IP address, browser type, device information, pages visited, and referring URLs.",
      "Cookies and similar tracking technologies, as described in our Cookie Policy.",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: "We use the information we collect to operate, maintain, and improve our website and services, including to:",
    points: [
      "Respond to your enquiries, requests, and support needs.",
      "Provide, deliver, and improve our ERPNext, startup, Web3, and software development services.",
      "Send you relevant information about our services, where you have opted in to receive it.",
      "Analyse site usage and trends to improve user experience and website performance.",
      "Meet legal, regulatory, and security obligations.",
    ],
  },
  {
    heading: "4. Legal Basis for Processing",
    body: "Where applicable data protection law (such as the UK GDPR and the Data Protection Act 2018) applies, we process personal data on the following legal bases: contract performance (to deliver services you request), legitimate interests (to operate and improve our website and communicate with prospective clients), consent (where you have opted in to marketing), and legal obligation (where required by law).",
  },
  {
    heading: "5. Sharing and Disclosure",
    body: "We do not sell your personal data. We may share information with trusted third parties only as necessary to operate our business and provide our services, including:",
    points: [
      "Service providers who host our website, process payments, or support our operations.",
      "Professional advisers, such as legal, accounting, or consulting partners, where reasonably required.",
      "Authorities or other parties where we are required to do so by law or to protect our legal rights.",
    ],
  },
  {
    heading: "6. Data Retention",
    body: "We retain personal data only for as long as necessary to fulfil the purposes described in this policy, comply with our legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we delete or anonymise it securely.",
  },
  {
    heading: "7. Your Rights",
    body: "Subject to applicable law, you have the right to access, correct, update, or delete your personal data, and to object to or restrict certain processing. You may also request a copy of the data we hold about you. To exercise any of these rights, contact us at connect@ww-hub.com. You also have the right to lodge a complaint with your local supervisory authority (in the UK, the Information Commissioner's Office).",
  },
  {
    heading: "8. Data Security",
    body: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    heading: "9. International Transfers",
    body: "Where we transfer personal data outside the UK or the EEA, we take appropriate safeguards to ensure that your data receives an equivalent level of protection, in accordance with applicable data protection law.",
  },
  {
    heading: "10. Third-Party Links",
    body: "Our website may contain links to third-party websites, including client projects and external platforms. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party site you visit.",
  },
  {
    heading: "11. Children's Privacy",
    body: "Our website and services are not directed to children under the age of 16, and we do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us so we can delete it.",
  },
  {
    heading: "12. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.",
  },
  {
    heading: "13. Contact Us",
    body: "If you have any questions about this Privacy Policy or our privacy practices, please contact us at:",
    points: [
      "WISH — Winworld Innovative Solutions Hub",
      "Website: https://www.ww-hub.com",
      "Email: connect@ww-hub.com",
    ],
  },
];

export function PrivacyPolicyPage() {
  return (
    <>
      <Preloader />
      {/* PAGE CONTENT */}
      <div id="page" className="page-content">
        <Header logo="/assets/images/logo-light.png" variant="solid" />

        <div className="px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 bg-whitesmoke">
          <div className="container pt-20 md:pt-22.5 lg:pt-25 xl:pt-27.5 pb-20 md:pb-22.5 lg:pb-25 xl:pb-30 text-gray-500">
            <div className="text-center md:max-w-150 xl:max-w-176 mx-auto mb-10 md:mb-14 xl:mb-16">
              <span className="text-18px 2xs:text-19px xl:text-20px text-gray-500">
                ww-hub.com — Privacy Policy
              </span>
              <h1 className="font-main text-32px 2xs:text-34px xs:text-36px sm:text-40px md:text-44px lg:text-46px xl:text-54px mt-3 text-heading leading-tight">
                Privacy Policy
              </h1>
              <p className="2xs:max-lg:text-17px xl:text-18px mt-4">
                Last updated: 9 August 2026
              </p>
            </div>

            <div className="md:max-w-150 xl:max-w-176 mx-auto space-y-5">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-25px text-heading mb-2.5">
                    {section.heading}
                  </h2>
                  <p className="2xs:max-lg:text-17px xl:text-18px">
                    {section.body}
                  </p>
                  {section.points && (
                    <ul className="list-disc pl-4 mt-3 space-y-2">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="2xs:max-lg:text-17px xl:text-18px"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer
          logo="/assets/images/logo-light.png"
          description="WISH — Winworld Innovative Solutions Hub. We build, deploy, host, audit, and support software applications — from ERPs and websites to crypto wallets and Web3 products. You got idea, we got tech."
          footerSections={[
            {
              title: "About",
              links: [
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ],
            },
            {
              title: "Discover",
              links: [
                { label: "ERPNext", href: "/erpnext" },
                { label: "Startups", href: "/startups" },
                { label: "WISH Wallet", href: "/wallet" },
                { label: "Blog & Insights", href: "/#blog" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Blog & Insights", href: "/#blog" },
                { label: "Help & Support", href: "/#faqs" },
                { label: "Startup Program", href: "/startups" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Terms of Use", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Cookie Policy", href: "/cookies" },
              ],
            },
          ]}
          socialLinks={[
            { label: "Facebook", href: "https://www.facebook.com/wwhub" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/ww-hub",
            },
            { label: "Dribbble", href: "#" },
          ]}
          copyright="&copy; 2026 WISH — Winworld Innovative Solutions Hub. All Rights Reserved"
        />
      </div>
      {/* END PAGE CONTENT */}
    </>
  );
}
