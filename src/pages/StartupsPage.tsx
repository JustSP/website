import {
  startupFeaturesData,
  statisticsData,
  testimonialsData,
  ratingsData,
  startupFaqItems,
  blogPosts,
} from "../content";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Features from "../components/Features";
import TextContent from "../components/TextContent";
import ImageContent from "../components/ImageContent";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Rating from "../components/Rating";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Divider from "../components/Divider";
export function StartupsPage() {
  return (
    <>
      <Preloader />
      {/* PAGE CONTENT */}
      <div id="page" className="page-content">
        <Header logo="/assets/images/logo-light.png" />

        <Hero
          title="PLAN. BUILD. LAUNCH."
          subtitle="You got idea, we got tech. Talk to us today if you have a world-changing idea — we can help you build the MVP for the same. Launch and grow with us as a trusted partner by your side in the journey."
          ctaText="Get Started"
          ctaLink="mailto:connect@ww-hub.com"
          videoLink="https://www.youtube.com/watch?v=B2-ur-kEej4"
          videoText="Explore the Program"
          imageSrc="/assets/images/img-05.png"
          stats={["MVP in 3–8 weeks", "Technical co-founder"]}
        />

        <Features features={startupFeaturesData} />

        <Divider />

        <TextContent
          badge="Startup Partnership Program"
          title="Build a Successful MVP Showcase"
          description="Our past success and AI-based application templates can help you build your MVP in no time. From exploration to launch, we are the perfect technical co-founder for your startup."
          subheading="Why partner with WISH?"
          items={[
            "Ship a validated MVP in 3–8 weeks using our AI-assisted templates and battle-tested starter kits",
            "Technical expertise that positions WISH as integral to your startup's success",
            "Funding, incubation, digital marketing, and tax & law support — all under one roof",
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
                      <span className="flaticon-idea text-orange-red"></span>
                    </div>
                    <div className="max-lg:mt-4 lg:ml-4 xl:ml-7">
                      <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-25px leading-none">
                        MVP in 3–8 Weeks
                      </span>
                      <p className="2xs:max-lg:text-17px xl:text-18px mt-3 sm:mt-4 xs:max-sm:px-2.5">
                        Our reusable, AI-assisted application templates and past
                        success help you build your MVP in no time — without
                        sacrificing quality.
                      </p>
                    </div>
                  </div>
                  <div className="lg:flex mb-7.5 wow animate__animated animate__fadeInUp animate__delay-3">
                    <div className="text-58px xs:text-60px lg:text-52px xl:text-62px leading-none">
                      <span className="flaticon-growth text-orange-red"></span>
                    </div>
                    <div className="max-lg:mt-4 lg:ml-4 xl:ml-7">
                      <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-25px leading-none">
                        Grow With Us
                      </span>
                      <p className="2xs:max-lg:text-17px xl:text-18px mt-3 sm:mt-4 xs:max-sm:px-2.5">
                        Most founders continue with us long after launch — we
                        scale our engagement as your product, team, and
                        customers grow.
                      </p>
                    </div>
                  </div>
                  <div className="lg:flex wow animate__animated animate__fadeInUp animate__delay-4">
                    <div className="text-58px xs:text-60px lg:text-52px xl:text-62px leading-none">
                      <span className="flaticon-negotiation text-orange-red"></span>
                    </div>
                    <div className="max-lg:mt-4 lg:ml-4 xl:ml-7">
                      <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-25px leading-none">
                        Your Technical Co-founder
                      </span>
                      <p className="2xs:max-lg:text-17px xl:text-18px mt-3 sm:mt-4 xs:max-sm:px-2.5">
                        We offer technical expertise to facilitate your
                        entrepreneurial journey, positioning ourselves as
                        integral to your startup's success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="img-block max-lg:order-1 max-lg:mb-10 wow animate__animated animate__fadeInUp">
                  <img src="/assets/images/img-10g.png" alt="Startup Growth" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ImageContent
          title="The Perfect Technical Co-founder for Your Startup"
          description="We offer technical expertise to facilitate your entrepreneurial journey, positioning ourselves as integral to your startup's success. Launch and grow with us as a trusted partner by your side."
          imageSrc="/assets/images/social-networks.png"
          ctaText="Get Started Now"
          ctaLink="mailto:connect@ww-hub.com"
          stats={["Free consultation", "No credit card"]}
        />

        <Divider />

        <Statistics title={statisticsData.title} stats={statisticsData.stats} />

        <TextContent
          badge="From Exploration to MVP"
          title="A Structured Process Built for Startup Success"
          description="We have a structured process that involves various stakeholders at different stages to help a startup succeed in their endeavour to MVP."
          items={[
            "Discovery & validation — we turn your idea into scope, user stories, and a clear build plan",
            "Design & development sprints — weekly demos keep you in the loop at every stage",
            "Launch & growth — we stay with you after launch, helping you iterate and scale with confidence",
          ]}
          imageSrc="/assets/images/img-08.png"
          reverse={true}
          className="bg-whitesmoke pb-20 md:pb-22 lg:pb-25 xl:pb-30"
        />

        <section
          id="solutions"
          className="px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8"
        >
          <div className="container py-20 md:py-22.5 lg:py-25 xl:py-27.5 text-gray-500">
            <div className="section_title mb-8.5 sm:mb-10 lg:mb-14 xl:mb-16">
              <div className="text-center w-full md:max-w-150 xl:max-w-176 mx-auto">
                <h2 className="text-32px 2xs:text-34px xs:text-36px sm:text-40px md:text-44px lg:text-46px xl:text-54px">
                  Startup Partnership <br className="sm:hidden" />
                  Program
                </h2>
                <p className="2xs:text-17px md:text-18px xl:text-20px mt-2 sm:mt-3 xs:max-sm:px-2.5 xl:px-4">
                  Coming together is a beginning, staying together is progress,
                  and working together is success. Four pillars to take your
                  startup from idea to launch.
                </p>
              </div>
            </div>

            <div className="fbox-wrapper px-4 sm:px-12 md:px-0 xl:px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:gap-y-8 md:gap-7 lg:gap-x-5 xl:gap-x-8">
                {[
                  {
                    img: "f_06.png",
                    title: "Digital Marketing",
                    description:
                      "Don't know where and how to market? We can help you find the right customers for your business.",
                    delay: "animate__delay-2",
                  },
                  {
                    img: "f_07.png",
                    title: "Tech Services",
                    description:
                      "We have just the right tech expertise to help you build your business idea into an MVP or full-blown product.",
                    delay: "animate__delay-3",
                  },
                  {
                    img: "f_08.png",
                    title: "Funding",
                    description:
                      "We work with some of the best incubation hubs around to bring the best support and funding to you.",
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

        <Divider />

        <TextContent
          badge="Business-Ready from Day One"
          title="Launch Fast, Scale Confidently"
          description="Your MVP is built on production-grade architecture — secure, scalable, and ready to grow from 10 to 10,000 users. We engineer for the launch and beyond."
          items={[
            "Scalable architecture that grows with your user base and feature set",
            "Security, performance, and best practices baked in from the first sprint",
            "Ongoing hosting, monitoring, and support from the WISH team",
          ]}
          imageSrc="/assets/images/img-07.png"
          reverse={true}
          className="pb-20 md:pb-22.5 lg:pb-25 xl:pb-30"
        />

        <Divider />

        <TextContent
          badge="Taxation & Law"
          title="Focus on the Business, We Handle the Rest"
          description="Not everyone knows everything. We bring in the domain expertise so that you can focus on the business — including taxation, legal, and compliance support for founders."
          items={[
            "Taxation and compliance guidance tailored to your stage and structure",
            "Legal and regulatory support from our trusted domain partners",
          ]}
          imageSrc="/assets/images/img-03.png"
        />

        <ImageContent
          title="From Exploration to MVP"
          description="We have a structured process that involves various stakeholders at different stages to help a startup succeed in their endeavour to MVP."
          imageSrc="/assets/images/dashboard-04.png"
          videoLink="https://www.youtube.com/watch?v=B2-ur-kEej4"
          className="bg-01 bg-fixed flex px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8"
        />

        <div className="px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 bg-gray-100">
          <div className="container py-16 md:py-22 xl:py-25 text-gray-500">
            <div className="section_title mb-8.5 sm:mb-10 lg:mb-15">
              <div className="text-center w-full md:max-w-150 xl:max-w-176 mx-auto">
                <p className="2xs:text-17px md:text-18px xl:text-20px xs:max-sm:px-2.5 xl:px-4">
                  Four pillars of our Startup Partnership Program — Digital
                  Marketing, Tech Services, Funding, and Taxation & Law — so
                  founders can focus on building while we handle the rest.
                </p>
              </div>
            </div>

            <div className="text-center lg:text-left xl:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 max-md:gap-y-8 md:gap-8 xl:gap-10">
                {[
                  {
                    icon: "flaticon-search-engine",
                    title: "Digital Marketing",
                    description:
                      "Don't know where and how to market? We help you find the right customers for your business.",
                    delay: "animate__delay-2",
                  },
                  {
                    icon: "flaticon-web-programming",
                    title: "Tech Services",
                    description:
                      "We have just the right tech expertise to help you build your business idea into an MVP or full-blown product.",
                    delay: "animate__delay-3",
                  },
                  {
                    icon: "flaticon-money",
                    title: "Funding",
                    description:
                      "We work with some of the best incubation hubs around to bring the best support and funding to you.",
                    delay: "animate__delay-3",
                  },
                  {
                    icon: "flaticon-book",
                    title: "Taxation & Law",
                    description:
                      "Not everyone knows everything. We bring in the domain expertise so that you can focus on the business.",
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

        <Divider />

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
          title="Here's what our amazing clients are saying"
          testimonials={testimonialsData}
        />

        <Rating ratings={ratingsData} />

        <Divider />

        <FAQ
          badge="Startup FAQs"
          title="Have questions? We have answers"
          description="Everything you need to know about building and launching your startup with WISH — from MVP timelines to funding support."
          items={startupFaqItems}
        />

        <Divider />

        <Blog
          title="Articles, Tutorials & More"
          description="Insights on building, launching, and scaling startups — from the team at WISH."
          posts={blogPosts}
        />

        <Banner
          title="Ready to Launch Your Startup?"
          description="Talk to us today if you have a world-changing idea. We can help you build the MVP, then launch and grow with us as a trusted partner by your side in the journey."
          ctaText="Get Started Now"
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
