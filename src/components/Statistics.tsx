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
    <section className={`px-3 sm:px-5 xl:px-8 ${className}`}>
      <div className="container py-20 md:py-22.5 xl:py-25 text-gray-500">
        <div className="section_title mb-12 lg:mb-14 xl:mb-16">
          <div className="text-center w-full md:max-w-150 xl:max-w-160 mx-auto max-sm:px-3.5">
            <h2 className="text-32px xs:text-36px sm:text-40px md:text-44px lg:text-46px xl:text-54px">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-y-10 lg:gap-x-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`wow animate__animated animate__fadeInUp ${stat.delay || ""}`}
            >
              <h3 className="text-46px sm:text-54px xl:text-56px leading-none text-orange-red">
                {stat.value}
              </h3>
              <p className="text-17px xl:text-18px mt-3.5 mx-auto max-w-75">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
