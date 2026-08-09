"use client";

import { useEffect, useRef } from "react";

interface Rating {
  platform: string;
  logo: string;
  rating: string;
  stars: number;
  delay?: string;
}

interface RatingProps {
  title?: string;
  ratings: Rating[];
  className?: string;
  speed?: number;
}

export default function Rating({
  title = "Our users love us as much as we love them",
  ratings,
  className = "",
  speed = 0.5,
}: RatingProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const container = containerRef.current;
    if (!scrollContainer || !container) return;

    let animationId: number;
    let position = 0;

    // Calculate the width of all items
    const itemWidth = scrollContainer.scrollWidth / 3; // Since we duplicated 3 times
    const containerWidth = container.offsetWidth;

    const scroll = () => {
      position += speed;

      // Reset when one full set has scrolled
      if (position >= itemWidth) {
        position = 0;
      }

      scrollContainer.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    // Pause on hover
    let isPaused = false;
    const pauseScroll = () => {
      isPaused = true;
    };
    const resumeScroll = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener("mouseenter", pauseScroll);
    scrollContainer.addEventListener("mouseleave", resumeScroll);

    // Start scrolling
    const startScroll = () => {
      if (!isPaused) {
        animationId = requestAnimationFrame(scroll);
      }
    };

    startScroll();

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", pauseScroll);
      scrollContainer.removeEventListener("mouseleave", resumeScroll);
    };
  }, [speed]);

  // Duplicate ratings 3 times for seamless scrolling
  const duplicatedRatings = [...ratings, ...ratings, ...ratings];

  return (
    <section className={`px-3 2xs:px-4 sm:max-lg:px-5 xl:px-8 ${className}`}>
      <div className="container pt-15 pb-20 md:pt-18 md:pb-22.5 lg:pt-20 lg:pb-25 xl:pt-25 text-center">
        <div className="mb-7.5 2xs:mb-8 lg:mb-9 xl:mb-10">
          <span className="text-18px 2xs:text-19px xl:text-20px text-gray-500">
            {title}
          </span>
        </div>

        <div
          ref={containerRef}
          className="relative w-full lg:max-w-210 xl:max-w-230 mx-auto overflow-hidden"
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex"
            style={{
              width: "auto",
              willChange: "transform",
            }}
          >
            {duplicatedRatings.map((rating, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 sm:w-56 md:w-64 px-4"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={rating.logo}
                    className="max-h-7 2xs:max-h-8 lg:max-h-8.5 xl:max-h-10"
                    alt={rating.platform}
                  />
                  <div className="text-14px xs:text-15px lg:text-base text-yellow-400 mt-2 sm:mt-2.5 whitespace-nowrap">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.floor(rating.stars)
                            ? "flaticon-star"
                            : i < rating.stars
                              ? "flaticon-star-half-empty"
                              : "flaticon-star-1"
                        }
                      ></span>
                    ))}
                    <span className="text-gray-500 ml-1">{rating.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
