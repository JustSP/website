import {
  featuresData,
  featureBoxesData,
  solutionFeaturesData,
  additionalFeaturesData,
  statisticsData,
  testimonialsData,
  ratingsData,
  faqItems,
  blogPosts,
  footerSections,
  socialLinks,
  footerData,
} from "../content";
import { menuItems } from "../content/menu";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Features from "../components/Features";
import TextContent from "../components/TextContent";
import ImageContent from "../components/ImageContent";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Rating from "../components/Rating";
import Blog from "../components/Blog";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
export function StartupsPage() {
  return (
    <>
      <Preloader />
      {/* PAGE CONTENT */}
      <div id="page" className="page-content">
        <Header logo="/assets/images/logo-light.png" />

        <Hero
          title="ERPNext Implementation & Technology Solutions"
          subtitle="End-to-end ERPNext implementation, customization, and resourcing services. We help businesses streamline operations with open-source ERP solutions."
          ctaText="Our Services"
          ctaLink="#banner"
          videoLink="https://www.youtube.com/watch?v=B2-ur-kEej4"
          videoText="Explore ERPNext"
          imageSrc="/assets/images/img-01.png"
          stats={["Trusted ERPNext Partners", "50+ Successful Implementations"]}
        />

        <Features features={featuresData} />

        <hr className="divider" />

        <TextContent
          badge="ERPNext Implementation"
          title="Streamline Your Business with Expert ERPNext Solutions"
          description="Transform your business operations with our end-to-end ERPNext implementation services. We help you leverage the power of open-source ERP to automate workflows, improve efficiency, and drive growth. Our certified experts ensure seamless deployment with minimal disruption to your daily operations."
          subheading="Why choose our ERPNext services?"
          items={[
            "Complete ERPNext setup with customized modules tailored to your industry and business processes",
            "Seamless data migration from legacy systems with zero data loss and minimal downtime",
            "Custom workflow automation, reports, and dashboards to match your unique business requirements",
          ]}
          imageSrc="/assets/images/img-06.png"
        />

        <div className="md:px-5 lg:px-4 xl:px-8">
          <div className="container pt-20 md:pt-22.5 lg:pt-25 xl:pt-27.5 text-gray-500">
            <div className="bg-whitesmoke text-center lg:text-left md:rounded-2xl py-20 px-4.5 2xs:px-5.5 sm:px-10 lg:py-20 lg:px-8 xl:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5 xl:gap-x-12 items-center">
                <div className="max-lg:order-2">
                  <div className="lg:flex mb-7.5 wow animate__animated animate__fadeInUp animate__delay-2">
                    <div className="text-58px xs:text-60px lg:text-52px xl:text-62px leading-none">
                      <span className="flaticon-cube text-orange-red"></span>
                    </div>
                    <div className="max-lg:mt-4 lg:ml-4 xl:ml-7">
                      <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-25px leading-none">
                        40% Faster Operations
                      </span>
                      <p className="2xs:max-lg:text-17px xl:text-18px mt-3 sm:mt-4 xs:max-sm:px-2.5">
                        Manufacturing client reduced order processing time from
                        3 days to 4 hours after ERPNext implementation.
                        Real-time inventory tracking eliminated stockouts.
                      </p>
                    </div>
                  </div>
                  <div className="lg:flex mb-7.5 wow animate__animated animate__fadeInUp animate__delay-3">
                    <div className="text-58px xs:text-60px lg:text-52px xl:text-62px leading-none">
                      <span className="flaticon-push-pin text-orange-red"></span>
                    </div>
                    <div className="max-lg:mt-4 lg:ml-4 xl:ml-7">
                      <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-25px leading-none">
                        3x Revenue Growth
                      </span>
                      <p className="2xs:max-lg:text-17px xl:text-18px mt-3 sm:mt-4 xs:max-sm:px-2.5">
                        Online retailer tripled revenue within 18 months after
                        integrating ERPNext with their eCommerce platform.
                        Real-time inventory sync, automated order fulfillment,
                        and unified customer data across 5 sales channels.
                      </p>
                    </div>
                  </div>
                  <div className="lg:flex wow animate__animated animate__fadeInUp animate__delay-4">
                    <div className="text-58px xs:text-60px lg:text-52px xl:text-62px leading-none">
                      <span className="flaticon-audio text-orange-red"></span>
                    </div>
                    <div className="max-lg:mt-4 lg:ml-4 xl:ml-7">
                      <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-25px leading-none">
                        98% Client Retention
                      </span>
                      <p className="2xs:max-lg:text-17px xl:text-18px mt-3 sm:mt-4 xs:max-sm:px-2.5">
                        Our 98% retention rate reflects our commitment to client
                        success. We're not just implementers — we're long-term
                        partners in your digital transformation journey.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="img-block max-lg:order-1 max-lg:mb-10 wow animate__animated animate__fadeInUp">
                  <img src="/assets/images/img-10g.png" alt="Success Stories" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ImageContent
          title="Share Moments. Share Life"
          description="Ligula risus auctor tempus magna fusce feugiat lacinia blandit and varius convallis the hendrerit litora varius turpis molestie"
          imageSrc="/assets/images/social-networks.png"
          ctaText="Get started - it's free"
          ctaLink="signup-simple.html"
          stats={["Free 30 days trial", "Exclusive Support"]}
        />

        <hr className="divider" />

        <Statistics title={statisticsData.title} stats={statisticsData.stats} />

        <hr className="divider" />

        <TextContent
          badge="Seamless Integration"
          title="Connect Everything with ERPNext Integration"
          description="Break down data silos and create a unified business ecosystem. Our integration services connect ERPNext with your existing systems, enabling seamless data flow across your entire organization."
          items={[
            "Connect ERPNext with payment gateways (Stripe, PayPal, Razorpay) for automated billing and reconciliation",
            "Integrate with e-commerce platforms (Shopify, WooCommerce, Magento) for real-time inventory and order sync",
          ]}
          imageSrc="/assets/images/img-08.png"
          reverse={true}
        />

        <section
          id="solutions"
          className="px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8"
        >
          <div className="container py-20 md:py-22.5 lg:py-25 xl:py-27.5 text-gray-500">
            <div className="section_title mb-8.5 sm:mb-10 lg:mb-14 xl:mb-16">
              <div className="text-center w-full md:max-w-150 xl:max-w-176 mx-auto">
                <h2 className="text-32px 2xs:text-34px xs:text-36px sm:text-40px md:text-44px lg:text-46px xl:text-54px">
                  End-to-End Development <br className="sm:hidden" />
                  Services
                </h2>
                <p className="2xs:text-17px md:text-18px xl:text-20px mt-2 sm:mt-3 xs:max-sm:px-2.5 xl:px-4">
                  From custom web applications to mobile apps and ERPNext
                  development, we deliver high-quality, scalable solutions that
                  drive business growth and operational efficiency.
                </p>
              </div>
            </div>

            <div className="fbox-wrapper px-4 sm:px-12 md:px-0 xl:px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:gap-y-8 md:gap-7 lg:gap-x-5 xl:gap-x-8">
                {[
                  {
                    img: "f_06.png",
                    title: "Web Application Development",
                    description:
                      "Custom web applications built with modern frameworks like React, Next.js, and Python. Scalable, secure, and responsive solutions for your business needs.",
                    delay: "animate__delay-2",
                  },
                  {
                    img: "f_07.png",
                    title: "Mobile App Development",
                    description:
                      "Cross-platform mobile applications for iOS and Android using React Native and Flutter. Deliver exceptional user experiences on every device.",
                    delay: "animate__delay-3",
                  },
                  {
                    img: "f_08.png",
                    title: "Custom Development & Integration",
                    description:
                      "Bespoke development services including ERPNext customization, API integration, and third-party system connectivity.",
                    delay: "animate__delay-4",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`text-center wow animate__animated animate__fadeInUp ${feature.delay}`}
                  >
                    <div className="gr-whitesmoke rounded-t-xl pt-8 px-8 xs:px-9 sm:max-md:pt-9 sm:max-md:px-10 xl:pt-11 xl:px-10 sm:max-md:mx-9">
                      <img
                        src={`/assets/images/${feature.img}`}
                        alt={feature.title}
                      />
                    </div>
                    <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px lg:text-22px xl:text-25px mt-7 xs:mt-8 block">
                      {feature.title}
                    </span>
                    <p className="2xs:max-lg:text-17px xl:text-18px mt-2">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <TextContent
          badge="Business Continuity"
          title="Secure, Reliable, and Always Available"
          description="Ensure business continuity with robust security, automated backups, and high-availability infrastructure. Your business data is protected and accessible when you need it most."
          items={[
            "Automated backups and disaster recovery with point-in-time restoration capabilities",
            "99.9% uptime SLA with redundant infrastructure and failover protection",
          ]}
          imageSrc="/assets/images/img-07.png"
          reverse={true}
        />

        <TextContent
          badge="Expert Consulting"
          title="Strategic ERPNext Consulting for Business Success"
          description="Navigate your digital transformation journey with our expert consulting services. From strategy development to implementation and optimization, we guide you through every step of your ERPNext adoption."
          items={[
            "Comprehensive needs assessment and roadmap development aligned with your business goals and budget",
            "Expert guidance on implementation strategy, customization decisions, and best practices for maximum ROI",
          ]}
          imageSrc="/assets/images/img-03.png"
        />

        <ImageContent
          title="Custom ERPNext Solutions Tailored to Your Business"
          description="Transform your business operations with custom ERPNext solutions. We build apps, workflows, and integrations that perfectly align with your unique business processes."
          imageSrc="/assets/images/dashboard-04.png"
          videoLink="https://www.youtube.com/watch?v=Riz8G9Y4kWQ"
          className="bg-01 bg-fixed flex px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8"
        />

        <div className="px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 bg-gray-100">
          <div className="container py-16 md:py-22 xl:py-25 text-gray-500">
            <div className="section_title mb-8.5 sm:mb-10 lg:mb-15">
              <div className="text-center w-full md:max-w-150 xl:max-w-176 mx-auto">
                <p className="2xs:text-17px md:text-18px xl:text-20px xs:max-sm:px-2.5 xl:px-4">
                  Comprehensive ERPNext consulting and resourcing services to
                  help you implement, customize, and optimize your ERP system
                  for maximum business value.
                </p>
              </div>
            </div>

            <div className="text-center lg:text-left xl:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 max-md:gap-y-8 md:gap-8 xl:gap-10">
                {[
                  {
                    icon: "flaticon-cube",
                    title: "Functional Consulting",
                    description:
                      "Expert guidance on ERPNext modules, workflows, and best practices. We help you align your business processes with ERP capabilities for optimal efficiency.",
                    delay: "animate__delay-2",
                  },
                  {
                    icon: "flaticon-combine",
                    title: "Technical Consulting",
                    description:
                      "Deep technical expertise in ERPNext architecture, customization, and integration. Build scalable solutions that meet your unique business requirements.",
                    delay: "animate__delay-3",
                  },
                  {
                    icon: "flaticon-group",
                    title: "Dedicated Resourcing",
                    description:
                      "Access skilled ERPNext professionals for project-based or long-term engagements. Developers, consultants, and support specialists ready to join your team.",
                    delay: "animate__delay-3",
                  },
                  {
                    icon: "flaticon-security",
                    title: "Implementation Support",
                    description:
                      "End-to-end implementation support from planning to go-live. Ensure smooth deployment with minimal disruption to your business operations.",
                    delay: "animate__delay-4",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`lg:flex wow animate__animated animate__fadeInUp ${feature.delay}`}
                  >
                    <div className="text-58px xs:text-60px lg:text-52px xl:text-64px leading-none">
                      <span
                        className={`${feature.icon} text-orange-red`}
                      ></span>
                    </div>
                    <div className="max-lg:mt-5 lg:ml-5 xl:ml-7">
                      <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-26px leading-none">
                        {feature.title}
                      </span>
                      <p className="2xs:max-lg:text-17px xl:text-18px mt-4 xs:px-2.5 sm:px-6 md:px-0">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="divider" />

        {/* <TextContent
          badge="Intuitive Files Manager"
          title="Fast access to all your media content"
          description="Sapien tempor sodales mollis sappien sorales the malesuada lorem volutpat mauris laoreet dictun bibendum and dignisim posure fusce diam sodales imperdiet magna sorales curus in vitae dollores tellum hendrerit elementum totor volutpate"
          items={[
            "Tempor sapien sodales mollis sappien sorales the malesuada lorem volutpat mauris laoreet dictun bibendum and dignisim",
          ]}
          imageSrc="/assets/images/img-13.png"
          featureBox={{
            icon: "flaticon-combine",
            title: "Control Data Access",
            description: "Multi-Device Syncing",
          }}
        /> */}

        <Testimonials
          title="Here's what our amazing customers are saying"
          testimonials={testimonialsData}
        />

        <Rating ratings={ratingsData} />

        <hr className="divider" />

        {/* <FAQ
          title="Have questions? We have answers"
          description="Some questions about the OLMO are asked frequently. We have compiled a list of the most common questions people usually ask us!"
          items={faqItems}
        />

        <hr className="divider" /> */}

        <Blog
          title="Articles, Tutorials & More"
          description="Ligula risus auctor tempus dolores inceptos fusce lacinia blandit varius habitant convallis hendrerit litora varius undo turpis molestie"
          posts={blogPosts}
        />

        <Banner
          title="Ready to Transform Your Business with ERPNext?"
          description="Join 50+ businesses that have streamlined operations, reduced costs, and accelerated growth with our expert ERPNext implementation services."
          ctaText="Schedule a Free Consultation"
          ctaLink="#contact"
          stats={[
            "50+ Successful Implementations",
            "98% Client Satisfaction",
            "15+ Countries Served",
          ]}
        />

        <Footer
          logo="/assets/images/logo-light.png"
          description="Your trusted partner for ERPNext implementation, custom development, and technology consulting. We help businesses streamline operations and achieve digital transformation with open-source solutions."
          footerSections={[
            {
              title: "About",
              links: [
                { label: "About Us", href: "about.html" },
                { label: "Contact Us", href: "contacts.html" },
              ],
            },
            {
              title: "Discover",
              links: [
                { label: "ERPNext", href: "features.html" },
                { label: "Startups", href: "integrations.html" },
                { label: "Wallet", href: "pricing.html" },
                { label: "Free Tools", href: "download.html" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Blog & Insights", href: "blog-page.html" },
                { label: "Help & Support", href: "faqs.html" },
                { label: "Press & Media", href: "#" },
              ],
            },
            {
              title: "Support",
              links: [
                { label: "Terms of Use", href: "terms.html" },
                { label: "Privacy Policy", href: "privacy.html" },
                { label: "Cookie Policy", href: "cookies.html" },
              ],
            },
          ]}
          socialLinks={[
            { label: "Facebook", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Dribbble", href: "#" },
          ]}
          copyright="&copy; 2026 WISH. All Rights Reserved"
        />
      </div>
      {/* END PAGE CONTENT */}
    </>
  );
}
