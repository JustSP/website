import Hero from "../components/Hero";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import SEO from "../components/SEO";

interface Office {
  name: string;
  country: string;
  address: string;
  mapQuery: string;
  directionsUrl: string;
}

const offices: Office[] = [
  {
    name: "WISH — India Office",
    country: "Udaipur, Rajasthan",
    address: "Toshani Villa, Udaipur, 313001 Rajasthan, India",
    mapQuery: "Toshani Villa, Udaipur, Rajasthan 313001, India",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Toshani%20Villa%2C%20Udaipur%2C%20Rajasthan%20313001%2C%20India",
  },
  {
    name: "WISH — United Kingdom Office",
    country: "Sheffield",
    address: "Cooper Buildings, Sheffield, S12LB United Kingdom",
    mapQuery: "Cooper Buildings, Sheffield, United Kingdom",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Cooper%20Buildings%2C%20Sheffield%2C%20United%20Kingdom",
  },
];

const contactCards = [
  {
    icon: "flaticon-mail",
    title: "Email Us",
    line1: "connect@ww-hub.com",
    line2: "We reply within one business day.",
  },
  {
    icon: "flaticon-location-pin",
    title: "Our Offices",
    line1: "Udaipur, India",
    line2: "Sheffield, United Kingdom",
  },
  {
    icon: "flaticon-time",
    title: "Quick Response",
    line1: "Mon – Fri, 9:00 – 18:00 IST",
    line2: "Mon – Fri, 9:00 – 18:00 BST",
  },
];

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Have a project in mind — a website, an ERP, a crypto wallet, or a startup MVP? Send us a message and we'll get back within one business day."
        path="/contact"
      />
      <Preloader />
      {/* PAGE CONTENT */}
      <div id="page" className="page-content">
        <Header logo="/assets/images/logo-light.png" />

        <Hero
          title="Let's Talk. We'd Love to Hear From You."
          subtitle="Have a project in mind — a website, an ERP, a crypto wallet, or a startup MVP? Our team is ready to help. Send us a message and we'll get back to you within one business day."
          ctaText="Email Us"
          ctaLink="mailto:connect@ww-hub.com"
          videoLink="https://www.youtube.com/watch?v=B2-ur-kEej4"
          videoText="Explore Our Work"
          imageSrc="/assets/images/img-01.png"
          stats={["Udaipur, India", "Sheffield, UK"]}
        />

        {/* CONTACT INFO */}
        <section className="px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8">
          <div className="container py-20 md:py-22.5 lg:py-25 xl:py-27.5 text-gray-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-md:gap-y-8 md:gap-7 lg:gap-x-5 xl:gap-x-8">
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className={`text-center wow animate__animated animate__fadeInUp ${
                    index === 0
                      ? ""
                      : index === 1
                        ? "animate__delay-2"
                        : "animate__delay-3"
                  }`}
                >
                  <div className="bg-whitesmoke rounded-2xl py-10 px-7 xs:px-8 xl:py-12 xl:px-10 h-full">
                    <div className="text-58px xs:text-60px lg:text-52px xl:text-64px leading-none">
                      <span className={`${card.icon} text-orange-red`}></span>
                    </div>
                    <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-25px mt-6 block">
                      {card.title}
                    </span>
                    <p className="2xs:max-lg:text-17px xl:text-18px mt-2">
                      {card.line1}
                    </p>
                    <p className="2xs:max-lg:text-17px xl:text-18px mt-0.5">
                      {card.line2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OFFICES WITH GOOGLE MAPS */}
        <section className="px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 bg-whitesmoke">
          <div className="container py-20 md:py-22.5 lg:py-25 xl:py-27.5 text-gray-500">
            <div className="section_title mb-8.5 sm:mb-10 lg:mb-14 xl:mb-16">
              <div className="text-center w-full md:max-w-150 xl:max-w-176 mx-auto">
                <h2 className="text-32px 2xs:text-34px xs:text-36px sm:text-40px md:text-44px lg:text-46px xl:text-54px">
                  Our Offices
                </h2>
                <p className="2xs:text-17px md:text-18px xl:text-20px mt-2 sm:mt-3 xs:max-sm:px-2.5 xl:px-4">
                  Visit us at either of our two locations — or drop us a line
                  and we'll come to you.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:gap-y-8 lg:gap-x-6 xl:gap-x-10">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg wow animate__animated animate__fadeInUp ${
                    index === 0 ? "" : "animate__delay-2"
                  }`}
                >
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      office.mapQuery,
                    )}&output=embed`}
                    className="w-full h-60 xs:h-72 lg:h-64 xl:h-80 border-0 block"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Google Map — ${office.name}`}
                  />
                  <div className="p-7 xs:p-8 xl:p-10">
                    <div className="flex items-start">
                      <div className="text-40px xs:text-44px lg:text-40px xl:text-48px leading-none">
                        <span className="flaticon-push-pin text-orange-red"></span>
                      </div>
                      <div className="max-lg:ml-3 lg:ml-4">
                        <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-26px leading-none block text-heading">
                          {office.name}
                        </span>
                        <p className="2xs:max-lg:text-17px xl:text-18px mt-1 text-orange-red">
                          {office.country}
                        </p>
                      </div>
                    </div>
                    <p className="2xs:max-lg:text-17px xl:text-18px mt-4">
                      {office.address}
                    </p>
                    <a
                      href={office.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-orange-red hover:btn-tra-white rounded-lg mt-6 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Banner
          title="Ready to Start a Project?"
          description="From WordPress websites to complex ERPs and Web3 products, we build, deploy, host, audit, and support software applications. Consider us your partner."
          ctaText="Contact Us Today"
          ctaLink="mailto:connect@ww-hub.com"
          stats={[
            "10+ ERPNext Implementations",
            "98% Client Satisfaction",
            "5+ Countries Served",
            "30+ Products & Apps Built",
          ]}
        />

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
