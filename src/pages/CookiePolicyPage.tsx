import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

interface CookieSection {
  heading: string;
  body: string;
  points?: string[];
}

const sections: CookieSection[] = [
  {
    heading: "1. Introduction",
    body: "This Cookie Policy explains how WISH — Winworld Innovative Solutions Hub ('WISH', 'we', 'us', or 'our') uses cookies and similar technologies on our website at https://www.ww-hub.com. By continuing to browse ww-hub.com, you consent to our use of cookies as described in this policy, except where we are required to obtain your prior consent.",
  },
  {
    heading: "2. What Are Cookies?",
    body: "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide information to the owners of the site. Cookies can be 'session' cookies (deleted when you close your browser) or 'persistent' cookies (which remain on your device for a set period).",
  },
  {
    heading: "3. How We Use Cookies",
    body: "We use cookies for a number of purposes, including to:",
    points: [
      "Ensure the website functions correctly and securely.",
      "Remember your preferences and settings.",
      "Understand how visitors use the site so we can improve it.",
      "Deliver relevant content and measure the effectiveness of our marketing.",
    ],
  },
  {
    heading: "4. Types of Cookies We Use",
    body: "The cookies we use fall into the following categories:",
    points: [
      "Strictly necessary cookies — required for the website to operate, such as security and load-balancing cookies.",
      "Performance and analytics cookies — help us understand how visitors interact with the site (for example, page visits and referral sources).",
      "Functional cookies — remember choices you make, such as language or region preferences.",
      "Marketing cookies — used to deliver more relevant advertising and measure campaign performance, where you have consented.",
    ],
  },
  {
    heading: "5. Third-Party Cookies",
    body: "Some cookies are placed by third-party services we use, including analytics providers and embedded content (such as video platforms or social media buttons). These third parties may use cookies to track your online activity across different websites. We encourage you to review the cookie and privacy policies of these providers for more information.",
  },
  {
    heading: "6. Managing and Deleting Cookies",
    body: "You can control and manage cookies in a number of ways. Most browsers allow you to block or delete cookies through their settings. You can also use your browser's 'incognito' or 'private' mode to limit the data stored on your device. Please note that if you disable certain cookies, some parts of ww-hub.com may not function properly.",
  },
  {
    heading: "7. Consent",
    body: "Where required by law, we ask for your consent before placing non-essential cookies, typically via a cookie banner on your first visit. You can change your preferences at any time by clearing cookies in your browser or adjusting the settings of our consent tool, where available.",
  },
  {
    heading: "8. Changes to This Policy",
    body: "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. Any changes will be posted on this page with an updated revision date.",
  },
  {
    heading: "9. Contact Us",
    body: "If you have any questions about our use of cookies, please contact us at:",
    points: [
      "WISH — Winworld Innovative Solutions Hub",
      "Website: https://www.ww-hub.com",
      "Email: connect@ww-hub.com",
    ],
  },
];

export function CookiePolicyPage() {
  return (
    <>
      <SEO title="Cookie Policy" path="/cookies" />
      <Preloader />
      {/* PAGE CONTENT */}
      <div id="page" className="page-content">
        <Header logo="/assets/images/logo-light.png" variant="solid" />

        <div className="px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 bg-whitesmoke">
          <div className="container pt-20 md:pt-22.5 lg:pt-25 xl:pt-27.5 pb-20 md:pb-22.5 lg:pb-25 xl:pb-30 text-gray-500">
            <div className="text-center md:max-w-150 xl:max-w-176 mx-auto mb-10 md:mb-14 xl:mb-16">
              <span className="text-18px 2xs:text-19px xl:text-20px text-gray-500">
                ww-hub.com — Cookie Policy
              </span>
              <h1 className="font-main text-32px 2xs:text-34px xs:text-36px sm:text-40px md:text-44px lg:text-46px xl:text-54px mt-3 text-heading leading-tight">
                Cookie Policy
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
