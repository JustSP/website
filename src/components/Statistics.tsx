interface Statistic {
  value: string;
  label: string;
  delay?: string;
}

interface StatisticsProps {
  title: string;
  stats: Statistic[];
  className?: string;
}

export default function Statistics({
  title,
  stats,
  className = "",
}: StatisticsProps) {
  return (
    <section className={`px-3 2xs:px-4 sm:px-5 xl:px-8 ${className}`}>
      <div className="container py-20 md:py-22.5 xl:py-25 text-gray-500 text-center lg:text-left">
        <div className="sm:max-md:max-w-110 md:max-lg:max-w-150 grid grid-cols-12 lg:gap-x-10 mx-auto">
          <div className="col-span-12 lg:col-span-7 xl:col-span-6 lg:pl-4 xl:pl-6 wow animate__animated animate__fadeInUp">
            <h2 className="text-26px xs:text-27px sm:text-34px md:text-40px lg:text-40px xl:text-45px leading-[1.3]">
              {title}
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-5 xl:col-span-6 max-lg:mt-8">
            <div className="grid grid-cols-12 xl:gap-x-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`col-span-6 ${index === 0 ? "lg:col-start-1 xl:col-start-4 lg:col-span-5 xl:col-span-4" : "lg:col-start-8 xl:col-start-9 lg:col-span-5 xl:col-span-4"} wow animate__animated animate__fadeInUp ${stat.delay || ""}`}
                >
                  <h2 className="text-46px 2xs:text-48px sm:text-54px md:text-50px xl:text-56px leading-none">
                    {stat.value}
                  </h2>
                  {index === 1 && (
                    <div className="text-17px sm:text-18px text-yellow-400 mt-3.5">
                      <span className="flaticon-star"></span>
                      <span className="flaticon-star"></span>
                      <span className="flaticon-star"></span>
                      <span className="flaticon-star"></span>
                      <span className="flaticon-star-half-empty"></span>
                    </div>
                  )}
                  <p className="2xs:max-lg:text-17px xl:text-18px mt-3.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
