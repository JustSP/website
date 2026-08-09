"use client";

import { Fragment } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  videoLink?: string;
  videoText?: string;
  imageSrc?: string;
  stats?: string[];
  className?: string;
}

export default function Hero({
  title = "ERPNext Implementation & Technology Solutions",
  subtitle = "End-to-end ERPNext implementation, customization, and resourcing services. We help businesses streamline operations with open-source ERP solutions.",
  ctaText = "Our Services",
  ctaLink = "#banner",
  videoLink = "https://www.youtube.com/watch?v=B2-ur-kEej4",
  videoText = "Explore ERPNext",
  imageSrc = "/assets/images/img-02p.png",
  stats = ["Trusted ERPNext Partners", "50+ Successful Implementations"],
  className = "",
}: HeroProps) {
  return (
    <section
      id="hero"
      className={`relative hero-1 bg-fixed flex max-lg:mt-20 px-3 2xs:px-4 sm:px-5 xl:px-8 ${className}`}
    >
      <div className="container pt-22.5 pb-20 sm:pt-25 md:pt-28 lg:pt-38 lg:pb-28 xl:pt-45 xl:pb-32 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5 xl:gap-x-16 items-center">
          <div className="text-center lg:text-left md:max-lg:px-14 wow animate__animated animate__fadeInRight">
            <h1 className="text-36px 2xs:text-38px xs:text-40px sm:text-48px md:text-54px lg:text-48px xl:text-58px leading-tight sm:px-5 lg:px-0">
              {title}
            </h1>

            <p className="text-17px 2xs:text-18px md:text-19px lg:max-xl:text-17px mt-3 sm:mt-4.5 xl:mt-5.5 xl:mr-4">
              {subtitle}
            </p>

            <div className="sm:flex items-center max-lg:justify-center mt-5 sm:mt-6 xl:mt-7 max-sm:px-8">
              <a
                href={ctaLink}
                className="btn btn-orange-red hover:btn-tra-white rounded-lg"
              >
                {ctaText}
              </a>

              <a
                href={videoLink}
                className="video-popup inline-block sm:ml-5.5 lg:max-xl:ml-5 max-sm:mt-4.5"
              >
                <div className="flex items-center gap-x-3">
                  <span className="flaticon-play text-34px leading-0"></span>
                  <span className="text-18px sm:max-lg:text-19px xl:text-19px leading-none">
                    {videoText}
                  </span>
                </div>
              </a>
            </div>

            <div className="flex max-lg:justify-center text-base 2xs:text-17px xl:text-18px leading-none mt-5 md:mt-7">
              {stats.map((stat, index) => (
                <Fragment key={index}>
                  <span>{stat}</span>
                  {index < stats.length - 1 && <span className="px-4">|</span>}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="mt-8 xs:mt-10 md:mt-12 lg:mt-0 md:max-lg:px-12 wow animate__animated animate__fadeInLeft">
            <img src={imageSrc} alt="hero-image" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 135">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
