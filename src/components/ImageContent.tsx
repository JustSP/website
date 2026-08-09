interface ImageContentProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  stats?: string[];
  videoLink?: string;
  className?: string;
  textColor?: string;
}

export default function ImageContent({
  title,
  description,
  imageSrc,
  imageAlt = "content-image",
  ctaText,
  ctaLink,
  stats = [],
  videoLink,
  className = "",
  textColor = "text-white",
}: ImageContentProps) {
  return (
    <section
      className={`flex px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 ${className}`}
    >
      <div
        className={`container py-20 md:py-22.5 lg:py-25 xl:py-27.5 text-center ${textColor}`}
      >
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
          {videoLink ? (
            <div className="relative inline-block">
              <a href={videoLink} className="video-popup">
                <div className="video-btn justify-center bg-orange-red absolute inset-0 m-auto z-10 flex items-center justify-center rounded-full w-20 h-20">
                  <span className="flaticon-play-button text-white text-3xl"></span>
                </div>
              </a>
              <img src={imageSrc} className="inline-block" alt={imageAlt} />
            </div>
          ) : (
            <img src={imageSrc} className="inline-block" alt={imageAlt} />
          )}
        </div>

        {(ctaText || stats.length > 0) && (
          <div className="w-full text-center mt-8 sm:mt-10 lg:mt-12 xl:mt-15 wow animate__animated animate__fadeInUp">
            {ctaText && ctaLink && (
              <a
                href={ctaLink}
                className="btn btn-orange-red hover:btn-tra-black rounded-lg"
              >
                {ctaText}
              </a>
            )}

            {stats.length > 0 && (
              <div className="flex justify-center text-base 2xs:text-17px xl:text-18px leading-none mt-4 md:mt-5">
                {stats.map((stat, index) => (
                  <span key={index}>
                    {stat}
                    {index < stats.length - 1 && (
                      <span className="flaticon-vertical-line text-20px xl:text-19px relative -top-0.5 -xs:top-[0.5px] xl:top-0 mx-px xl:mx-0.5"></span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
