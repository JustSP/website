interface BannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  stats?: string[];
  className?: string;
}

export default function Banner({
  title,
  description,
  ctaText,
  ctaLink,
  stats = [],
  className = "",
}: BannerProps) {
  return (
    <section
      id="banner"
      className={`bg-02 lg:bg-none bg-fixed md:px-5 xl:px-9 ${className}`}
    >
      <div className="container text-white">
        <div className="bg-02 bg-scroll pt-18 pb-20 md:pt-20 md:pb-22 md:rounded-2xl px-3 2xs:px-4">
          <div className="w-full sm:max-w-130 md:max-w-135 xl:max-w-170 mx-auto text-center">
            <h2 className="text-30px 2xs:text-32px xs:text-34px sm:text-40px md:text-44px lg:text-46px xl:text-54px">
              {title}
            </h2>

            <p className="2xs:text-17px md:text-18px xl:text-20px mt-2.5 xl:px-10">
              {description}
            </p>

            <a
              href={ctaLink}
              className="btn btn-orange-red hover:btn-tra-white rounded-lg mt-5.5 xs:mt-6"
            >
              {ctaText}
            </a>

            {stats.length > 0 && (
              <div className="flex justify-center items-center text-base sm:text-17px xl:text-18px leading-none mt-5 text-center">
                {stats.map((stat, index) => (
                  <span key={index} className="flex items-center">
                    {stat}
                    {index < stats.length - 1 && (
                      <span className="flaticon-vertical-line text-20px xl:text-19px mx-2 opacity-50"></span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
