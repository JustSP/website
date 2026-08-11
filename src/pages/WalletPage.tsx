import {
  walletFeaturesData,
  statisticsData,
  testimonialsData,
  ratingsData,
  walletFaqItems,
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
import SEO from "../components/SEO";
export function WalletPage() {
  return (
    <>
      <SEO
        title="WISH Wallet — Crypto & Web3"
        description="The WISH Wallet unlocks a universe of decentralised applications (dApps). Explore DeFi, NFTs, and the metaverse seamlessly. Send and receive cryptocurrencies globally with ease."
        path="/wallet"
      />
      <Preloader />
      {/* PAGE CONTENT */}
      <div id="page" className="page-content">
        <Header logo="/assets/images/logo-light.png" />

        <Hero
          title="WISH Wallet — Your Crypto & Blockchain Journey Starts Here"
          subtitle="The WISH Wallet unlocks a universe of decentralised applications (dApps). Explore DeFi, NFTs, and the metaverse seamlessly. Send and receive cryptocurrencies globally with ease. Experience the freedom and innovation of Web3.0 with the WISH Wallet."
          ctaText="Get Started Now"
          ctaLink="#banner"
          videoLink="https://www.youtube.com/watch?v=Riz8G9Y4kWQ"
          videoText="Explore the Wallet"
          imageSrc="/assets/images/img-05.png"
          stats={["Web3.0 ready", "Send & receive globally"]}
        />

        <Features features={walletFeaturesData} />

        <Divider />

        <TextContent
          badge="One Wallet for Web3"
          title="Your Gateway to DeFi, NFTs & the Metaverse"
          description="From DeFi protocols to NFT marketplaces and the metaverse, WISH Wallet is your single gateway to the decentralised web. Built in-house by WISH, it combines a simple, beautiful experience with the security your digital assets deserve."
          subheading="Why choose the WISH Wallet?"
          items={[
            "Send and receive cryptocurrencies globally with ease — your funds, your control",
            "Explore DeFi, NFTs, and the metaverse seamlessly through an integrated dApp experience",
            "A perfect companion for your Stripe — segregated payment info with fast, accurate reconciliation",
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
                      <span className="flaticon-currency-exchange text-orange-red"></span>
                    </div>
                    <div className="max-lg:mt-4 lg:ml-4 xl:ml-7">
                      <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-25px leading-none">
                        Send & Receive Globally
                      </span>
                      <p className="2xs:max-lg:text-17px xl:text-18px mt-3 sm:mt-4 xs:max-sm:px-2.5">
                        Send and receive cryptocurrencies across borders in
                        minutes — no intermediaries, no waiting for banking
                        hours. Your funds stay under your control.
                      </p>
                    </div>
                  </div>
                  <div className="lg:flex mb-7.5 wow animate__animated animate__fadeInUp animate__delay-3">
                    <div className="text-58px xs:text-60px lg:text-52px xl:text-62px leading-none">
                      <span className="flaticon-cube text-orange-red"></span>
                    </div>
                    <div className="max-lg:mt-4 lg:ml-4 xl:ml-7">
                      <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-25px leading-none">
                        Explore DeFi & NFTs
                      </span>
                      <p className="2xs:max-lg:text-17px xl:text-18px mt-3 sm:mt-4 xs:max-sm:px-2.5">
                        Unlock a universe of decentralised applications — lend,
                        stake, trade NFTs, and step into the metaverse, all from
                        one wallet.
                      </p>
                    </div>
                  </div>
                  <div className="lg:flex wow animate__animated animate__fadeInUp animate__delay-4">
                    <div className="text-58px xs:text-60px lg:text-52px xl:text-62px leading-none">
                      <span className="flaticon-shield text-orange-red"></span>
                    </div>
                    <div className="max-lg:mt-4 lg:ml-4 xl:ml-7">
                      <span className="font-main text-22px 2xs:text-23px sm:max-lg:text-24px xl:text-25px leading-none">
                        Bank-Grade Security
                      </span>
                      <p className="2xs:max-lg:text-17px xl:text-18px mt-3 sm:mt-4 xs:max-sm:px-2.5">
                        Your private keys are protected with encryption,
                        multi-factor authentication, and continuous security
                        audits — built in-house by the WISH team.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="img-block max-lg:order-1 max-lg:mb-10 wow animate__animated animate__fadeInUp">
                  <img src="/assets/images/img-10g.png" alt="WISH Wallet" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ImageContent
          title="A Perfect Companion for Your Stripe"
          description="Now manage those third-party payments and reconciliations with ease. WISH Wallet allows for a quick and easy integration with your Stripe tenant and segregates payment info."
          imageSrc="/assets/images/social-networks.png"
          ctaText="Connect for a 14-Day Free Trial"
          ctaLink="mailto:connect@ww-hub.com"
          stats={["Free 14-day trial", "Quick integration"]}
        />

        <Divider />

        <Statistics title={statisticsData.title} stats={statisticsData.stats} />

        <TextContent
          badge="Built In-House by WISH"
          title="Secure, Simple, and Always in Your Control"
          description="WISH Wallet is developed in-house by the WISH team, so you get a product backed by a technology partner who builds, deploys, hosts, audits, and supports it. Your crypto journey is in safe, expert hands."
          items={[
            "Self-custody design — your private keys and assets stay under your control",
            "Continuous security audits, encryption, and multi-factor authentication on every transaction",
            "Backed by a dedicated WISH engineering team that builds, hosts, and supports the product",
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
                  Explore the Web3 <br className="sm:hidden" />
                  Universe
                </h2>
                <p className="2xs:text-17px md:text-18px xl:text-20px mt-2 sm:mt-3 xs:max-sm:px-2.5 xl:px-4">
                  Send and receive crypto globally, explore DeFi, NFTs, and the
                  metaverse, and keep your payments reconciled — all from one
                  secure WISH Wallet built in-house.
                </p>
              </div>
            </div>

            <div className="fbox-wrapper px-4 sm:px-12 md:px-0 xl:px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:gap-y-8 md:gap-7 lg:gap-x-5 xl:gap-x-8">
                {[
                  {
                    img: "f_06.png",
                    title: "Send & Receive Crypto",
                    description:
                      "Move cryptocurrencies across borders in minutes, with full control over your funds and no intermediaries.",
                    delay: "animate__delay-2",
                  },
                  {
                    img: "f_07.png",
                    title: "DeFi, NFTs & the Metaverse",
                    description:
                      "Connect to decentralised apps, stake, lend, trade NFTs, and explore the metaverse — all in one wallet.",
                    delay: "animate__delay-3",
                  },
                  {
                    img: "f_08.png",
                    title: "Automated Payment Reconciliation",
                    description:
                      "A perfect companion for your Stripe — segregated payment info and accurate reconciliation without manual effort.",
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
          badge="Privacy First"
          title="Your Keys. Your Crypto. Your Control."
          description="WISH Wallet is built on a self-custody model — your private keys never leave your control. Every transaction is protected by encryption and multi-factor authentication."
          items={[
            "Self-custody architecture — you always hold your private keys",
            "Multi-factor authentication and biometric unlock on every device",
            "Continuous security audits and monitoring by the WISH engineering team",
          ]}
          imageSrc="/assets/images/img-07.png"
          reverse={true}
          className="pb-20 md:pb-22.5 lg:pb-25 xl:pb-30"
        />

        <Divider />

        <TextContent
          badge="Built for Business"
          title="Automate Stripe Payments & Reconciliation"
          description="Now manage those third-party payments and reconciliations with ease. WISH Wallet integrates quickly with your Stripe tenant and segregates payment info for accurate, audit-ready books."
          items={[
            "Quick and easy integration with your Stripe tenant — connect in minutes",
            "Segregated payment information with accurate, automated reconciliation",
          ]}
          imageSrc="/assets/images/img-03.png"
        />

        <ImageContent
          title="Experience the Freedom and Innovation of Web3.0"
          description="Unlock a universe of decentralised applications with the WISH Wallet. Explore DeFi, NFTs, and the metaverse seamlessly — your crypto and blockchain journey starts here."
          imageSrc="/assets/images/dashboard-04.png"
          videoLink="https://www.youtube.com/watch?v=Riz8G9Y4kWQ"
          className="bg-01 bg-fixed flex px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8"
        />

        <div className="px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 bg-gray-100">
          <div className="container py-16 md:py-22 xl:py-25 text-gray-500">
            <div className="section_title mb-8.5 sm:mb-10 lg:mb-15">
              <div className="text-center w-full md:max-w-150 xl:max-w-176 mx-auto">
                <p className="2xs:text-17px md:text-18px xl:text-20px xs:max-sm:px-2.5 xl:px-4">
                  One wallet for the entire Web3 universe — secure, simple, and
                  built in-house by WISH. Send, stake, explore, and reconcile
                  from a single trusted place.
                </p>
              </div>
            </div>

            <div className="text-center lg:text-left xl:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 max-md:gap-y-8 md:gap-8 xl:gap-10">
                {[
                  {
                    icon: "flaticon-shield",
                    title: "Private & Self-Custody",
                    description:
                      "Your keys, your crypto. WISH Wallet keeps your private keys under your control at all times.",
                    delay: "animate__delay-2",
                  },
                  {
                    icon: "flaticon-fingerprint-scan",
                    title: "Multi-Layer Security",
                    description:
                      "Encryption, multi-factor authentication, and continuous audits protect every transaction.",
                    delay: "animate__delay-3",
                  },
                  {
                    icon: "flaticon-cube",
                    title: "dApps & DeFi Access",
                    description:
                      "A seamless dApp experience unlocks DeFi protocols, NFTs, and metaverse applications.",
                    delay: "animate__delay-3",
                  },
                  {
                    icon: "flaticon-payment",
                    title: "Stripe Reconciliation",
                    description:
                      "Effortless integration with Stripe for accurate, segregated payment reconciliation.",
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
          badge="WISH Wallet FAQs"
          title="Have questions? We have answers"
          description="Everything you need to know about securing, sending, and growing your crypto with the WISH Wallet."
          items={walletFaqItems}
        />

        <Divider />

        <Blog
          title="Articles, Tutorials & More"
          description="Insights on crypto, Web3, and building for the future — from the team behind the WISH Wallet."
          posts={blogPosts}
        />

        <Banner
          title="Start Your Crypto Journey with WISH Wallet"
          description="Unlock the universe of decentralised applications. Send and receive crypto globally, explore DeFi, NFTs, and the metaverse — all from one secure wallet built in-house by WISH."
          ctaText="Get the WISH Wallet"
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
