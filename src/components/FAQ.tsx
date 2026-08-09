"use client";

import { useState } from "react";

interface FAQItem {
  id: string | number;
  question: string;
  answer: string;
  delay?: string;
}

interface FAQProps {
  badge?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  items: FAQItem[];
  className?: string;
}

export default function FAQ({
  badge = "Questions & Answers",
  title,
  description,
  buttonText = "Talk to an Expert",
  buttonLink = "mailto:connect@ww-hub.com",
  items,
  className = "",
}: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className={`px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 ${className}`}
    >
      <div className="container pt-20 pb-15 md:pt-22.5 md:pb-17.5 lg:pt-25 lg:pb-20 xl:pt-30 xl:pb-25 text-gray-500">
        <div className="grid grid-cols-12 max-lg:gap-y-5 lg:gap-x-5 xl:gap-7">
          <div className="col-span-12 lg:col-span-5">
            <span className="section_badge text-14px md:text-15px mb-7 xl:mb-9.5">
              {badge}
            </span>
            <h2 className="text-30px xs:text-32px sm:text-36px md:text-38px lg:text-42px xl:text-50px leading-[1.3]">
              {title}
            </h2>
            <p className="2xs:text-17px xl:text-19px mt-3 xl:pr-8">
              {description}
            </p>
            <a
              href={buttonLink}
              className="btn btn-tra-black hover:btn-orange-red rounded-lg mt-5.5"
            >
              {buttonText}
            </a>
          </div>

          <div className="txt-accordion col-span-12 lg:col-span-7">
            <div className="accordion-wrapper lg:pl-18 xl:pl-20">
              <ul className="accordion">
                {items.map((item, index) => (
                  <li
                    key={item.id}
                    className={`accordion-item ${activeIndex === index ? "is-active" : ""} border-b border-gray-300 wow animate__animated animate__fadeInUp ${item.delay || ""}`}
                  >
                    <div
                      className="accordion-thumb py-3.5 sm:py-4 cursor-pointer"
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                    >
                      <span className="font-main text-22px xs:text-23px xl:text-24px">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={`accordion-panel ${activeIndex === index ? "block" : "hidden"} pb-4.5 xl:pb-5`}
                    >
                      <p className="2xs:max-lg:text-17px xl:text-18px">
                        {item.answer}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
