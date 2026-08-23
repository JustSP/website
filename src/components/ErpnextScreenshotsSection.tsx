import ScreenshotTabs from "./ScreenshotTabs";

interface ErpnextScreenshotsSectionProps {
  title?: string;
  description?: string;
}

/**
 * Dark (bg-01) band with heading + horizontal screenshot tabs.
 * Shared by the pages that showcase ERPNext module screenshots
 * (HomePage, ERPNextPage). Tab content lives in src/content/screenshotTabs.ts.
 */
export default function ErpnextScreenshotsSection({
  title = "Custom ERPNext Solutions Tailored to Your Business",
  description = "Transform your business operations with custom ERPNext solutions. We build apps, workflows, and integrations that perfectly align with your unique business processes.",
}: ErpnextScreenshotsSectionProps) {
  return (
    <section className="bg-01 bg-fixed flex px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8">
      <div className="container py-20 md:py-22.5 lg:py-25 xl:py-27.5 text-center text-white">
        <div className="section_title mb-7.5 sm:mb-8.5 lg:mb-10 xl:mb-14">
          <div className="w-full md:max-w-160 xl:max-w-176 mx-auto">
            <h2 className="text-34px 2xs:text-36px sm:text-42px md:text-46px lg:text-50px xl:text-56px xs:max-sm:px-3.5">
              {title}
            </h2>
            <p className="2xs:text-17px md:text-18px xl:text-20px mt-2.5 sm:mt-3.5 xs:px-3 md:px-6">
              {description}
            </p>
          </div>
        </div>

        <div className="wow animate__animated animate__fadeInUp">
          <ScreenshotTabs />
        </div>
      </div>
    </section>
  );
}
