import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { blogPosts } from "../content";

export function BlogIndexPage() {
  return (
    <>
      <SEO title="Blog & Insights" path="/blog" />
      <Preloader />
      <div id="page" className="page-content">
        <Header logo="/assets/images/logo-light.png" variant="solid" />

        <section className="px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 bg-whitesmoke">
          <div className="container pt-20 md:pt-22.5 lg:pt-25 xl:pt-27.5 pb-20 md:pb-22.5 lg:pb-25 xl:pb-30 text-gray-500">
            <div className="section_title mb-8.5 sm:mb-10 lg:mb-14 xl:mb-16">
              <div className="text-center w-full md:max-w-150 xl:max-w-176 mx-auto">
                <h1 className="text-32px 2xs:text-34px xs:text-36px sm:text-40px md:text-44px lg:text-46px xl:text-54px text-heading">
                  Blog & Insights
                </h1>
                <p className="2xs:text-17px md:text-18px xl:text-20px mt-2 sm:mt-3 xs:max-sm:px-2.5 xl:px-4">
                  Articles, tutorials, and updates from the WISH team — from
                  ERPNext and startups to crypto and Web3.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:gap-y-8 md:gap-9 lg:gap-x-5 xl:gap-x-9">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-post group">
                  <div className="blog-post-img relative mb-6">
                    <div className="hover-overlay rounded-xl">
                      <img
                        src={post.image}
                        className="scale-100 group-hover:scale-110"
                        alt={post.title}
                      />
                    </div>
                  </div>
                  <div className="blog-post-txt sm:px-4 lg:px-2 xl:px-5">
                    <div className="flex text-base sm:text-17px xl:text-18px mb-2.5">
                      <span>{post.category}</span>
                      <span className="flaticon-vertical-line text-20px relative top-px mx-0.5 2xs:mx-1"></span>
                      <span>{post.date}</span>
                    </div>
                    <span className="font-main text-21px 2xs:text-22px xs:max-lg:text-23px xl:text-25px leading-[1.3]">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </span>
                    <p className="2xs:max-lg:text-17px xl:text-18px mt-3.5">
                      {post.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                { label: "Blog & Insights", href: "/blog" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Blog & Insights", href: "/blog" },
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
    </>
  );
}
