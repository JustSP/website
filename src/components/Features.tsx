interface Feature {
  id: string | number;
  icon: string;
  title: string;
  description: string;
  delay?: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  className?: string;
  variant?: "grid-4" | "grid-3" | "list";
}

const defaultFeatures: Feature[] = [
  {
    id: 1,
    icon: "flaticon-smartphone-1",
    title: "Expert Implementation",
    description:
      "End-to-end ERPNext deployment with seamless data migration, configuration, and go-live support tailored to your business",
    delay: "animate__delay-2",
  },
  {
    id: 2,
    icon: "flaticon-wireframe",
    title: "Custom ERP Solutions",
    description:
      "Flexible customization with custom fields, scripts, workflows, and reports to match your unique business requirements",
    delay: "animate__delay-3",
  },
  {
    id: 3,
    icon: "flaticon-interface",
    title: "Dedicated Resourcing",
    description:
      "Access to skilled ERPNext developers and consultants for project-based or long-term engagement",
    delay: "animate__delay-4",
  },
  {
    id: 4,
    icon: "flaticon-fingerprint-scan",
    title: "Seamless Integration",
    description:
      "Connect ERPNext with your existing systems including e-commerce, payment gateways, attendance systems and CRM tools",
    delay: "animate__delay-5",
  },
];

export default function Features({
  title,
  subtitle = "",
  features = defaultFeatures,
  className = "",
  variant = "grid-4",
}: FeaturesProps) {
  const gridClasses = {
    "grid-4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "grid-3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    list: "grid-cols-1",
  };

  return (
    <div
      id="benefits"
      className={`px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 ${className}`}
    >
      {title && (
        <h2 className="text-34px 2xs:text-36px sm:text-42px md:text-46px lg:text-50px xl:text-56px xs:max-sm:px-3.5 text-center">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-center text-gray-500 text-lg mt-2 mb-8">
          {subtitle}
        </p>
      )}
      <div className="container py-20 md:py-22.5 lg:py-25 xl:py-27.5 text-gray-500">
        <div className="fbox-wrapper text-center lg:text-left">
          <div className={`grid ${gridClasses[variant]}`}>
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`${index < features.length - 1 ? "max-lg:border-b lg:border-l" : "md:border-l"} border-gray-300 wow animate__animated animate__fadeInUp ${feature.delay || ""}`}
              >
                <div className="pb-8 md:pb-10 lg:pb-0 xs:px-4 sm:px-8 md:px-6 lg:px-3 xl:px-7.5">
                  <span
                    className={`${feature.icon} text-56px 2xs:text-58px lg:text-54px xl:text-62px text-orange-red leading-none`}
                  ></span>
                  <span className="font-main text-22px 2xs:text-23px lg:text-20px xl:text-24px mt-3 block">
                    {feature.title}
                  </span>
                  <p className="2xs:max-lg:text-17px xl:text-18px mt-2 xl:mt-2.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
