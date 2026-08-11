import { useCallback, useEffect, useRef, useState } from "react";

interface ImageSliderProps {
  title: string;
  description: string;
  images: string[];
  imageAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  stats?: string[];
  className?: string;
  textColor?: string;
}

export default function ImageSlider({
  title,
  description,
  images,
  imageAlt = "slide",
  ctaText,
  ctaLink,
  stats = [],
  className = "",
  textColor = "text-gray-500",
}: ImageSliderProps) {
  const count = images.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return;
      setCurrent(((index % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay — pause while hovered.
  useEffect(() => {
    if (count <= 1 || paused) return;
    timerRef.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % count);
    }, 5000);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [count, paused]);

  if (count === 0) return null;

  return (
    <section className={`px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 ${className}`}>
      <style>{`
        .erp-slider-arrow { transition: background 300ms ease, color 300ms ease; }
        .erp-slider-arrow:hover { background: #f83e0f !important; color: #fff !important; }
        .erp-slider-dot { transition: width 300ms ease, background 300ms ease; }
        .erp-slider-dot.is-active { background: #f83e0f !important; }
      `}</style>

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

        <div
          className="relative mx-auto wow animate__animated animate__fadeInUp"
          style={{ maxWidth: 960 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
            <div
              className="flex"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: "transform 600ms ease",
              }}
            >
              {images.map((src, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center"
                  style={{ flex: "0 0 100%", minWidth: "100%" }}
                >
                  <img
                    src={src}
                    alt={`${imageAlt} ${i + 1}`}
                    className="w-full inline-block"
                  />
                </div>
              ))}
            </div>
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous slide"
                onClick={prev}
                className="erp-slider-arrow absolute z-10 flex items-center justify-center rounded-full cursor-pointer"
                style={{
                  top: "50%",
                  left: "0.75rem",
                  transform: "translateY(-50%)",
                  width: 44,
                  height: 44,
                  background: "rgba(255,255,255,0.92)",
                  color: "#f83e0f",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                }}
              >
                <span className="flaticon-left-arrow-1 text-18px leading-none"></span>
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={next}
                className="erp-slider-arrow absolute z-10 flex items-center justify-center rounded-full cursor-pointer"
                style={{
                  top: "50%",
                  right: "0.75rem",
                  transform: "translateY(-50%)",
                  width: 44,
                  height: 44,
                  background: "rgba(255,255,255,0.92)",
                  color: "#f83e0f",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                }}
              >
                <span className="flaticon-arrow-right text-18px leading-none"></span>
              </button>

              <div
                className="flex justify-center items-center mt-5"
                style={{ gap: 8 }}
              >
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`erp-slider-dot rounded-full cursor-pointer ${
                      i === current ? "is-active" : ""
                    }`}
                    style={{
                      width: i === current ? 26 : 10,
                      height: 10,
                      background: i === current ? "#f83e0f" : "rgba(0,0,0,0.2)",
                    }}
                  />
                ))}
              </div>
            </>
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
