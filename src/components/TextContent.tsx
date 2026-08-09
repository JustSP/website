interface TextContentProps {
  badge?: string;
  title: string;
  description?: string;
  subheading?: string;
  items?: string[];
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
  className?: string;
  featureBox?: {
    icon: string;
    title: string;
    description: string;
  };
}

export default function TextContent({
  badge,
  title,
  description,
  subheading,
  items = [],
  imageSrc,
  imageAlt = "content-image",
  reverse = false,
  className = "",
  featureBox,
}: TextContentProps) {
  return (
    <section className={`px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 ${className}`}>
      <div className="container pt-20 md:pt-22.5 lg:pt-25 xl:pt-30 text-gray-500">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 lg:gap-x-9 xl:gap-x-20 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}
        >
          <div
            className={`img-block max-lg:mb-12 ${reverse ? "xl:pr-4" : "xl:pl-4"} wow animate__animated animate__fadeIn${reverse ? "Left" : "Right"}`}
          >
            <img src={imageSrc} alt={imageAlt} />
          </div>

          <div
            className={`txt-block ${reverse ? "xl:pr-7 xl:pl-5" : "xl:pl-7 xl:pr-5"} wow animate__animated animate__fadeIn${reverse ? "Right" : "Left"}`}
          >
            {badge && (
              <span className="section_badge text-14px md:text-15px mb-7 xl:mb-9.5">
                {badge}
              </span>
            )}

            <h2 className="text-30px xs:text-32px sm:text-36px md:text-38px lg:text-42px xl:text-50px">
              {title}
            </h2>

            {description && (
              <p className="2xs:max-lg:text-17px xl:text-18px mt-3 sm:mt-4 xl:mt-5">
                {description}
              </p>
            )}

            {subheading && (
              <span className="font-main text-22px xs:text-23px sm:text-24px xl:text-27px mt-3.5 block">
                {subheading}
              </span>
            )}

            {items.length > 0 && (
              <ul className="list-disc space-y-3 xs:space-y-4 ml-4 mt-4">
                {items.map((item, index) => (
                  <li key={index} className="list-item">
                    <p className="2xs:max-lg:text-17px xl:text-18px">{item}</p>
                  </li>
                ))}
              </ul>
            )}

            {featureBox && (
              <div className="max-w-75 lg:max-w-80 mt-5.5 lg:mt-6">
                <div className="flex bg-white items-center gap-x-5 border border-gray-200 shadow-lg shadow-gray-300/70 py-3.5 px-4.5 sm:py-4 sm:px-5 rounded-xl">
                  <span
                    className={`${featureBox.icon} text-orange-red text-44px sm:text-48px relative top-1 leading-none`}
                  ></span>
                  <p className="flex-1 text-18px sm:text-19px lg:text-20px font-medium text-heading leading-none">
                    {featureBox.title}
                    <span className="block text-17px lg:text-18px font-normal text-gray-500 mt-2">
                      {featureBox.description}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
