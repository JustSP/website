"use client";

import { useEffect, useRef } from "react";

interface Rating {
  platform: string;
  logo: string;
  rating?: string;
  stars?: number;
  delay?: string;
}

interface RatingProps {
  title?: string;
  ratings: Rating[];
  className?: string;
  speed?: number;
}

export default function Rating({
  title = "Backed by leading technologies and platforms",
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
          <div
            className="absolute left-0 top-0 h-full z-10 pointer-events-none"
            style={{
              width: 56,
              background:
                "linear-gradient(to right, #ffffff, rgba(255,255,255,0))",
            }}
          ></div>
          <div
            className="absolute right-0 top-0 h-full z-10 pointer-events-none"
            style={{
              width: 56,
              background:
                "linear-gradient(to left, #ffffff, rgba(255,255,255,0))",
            }}
          ></div>

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
                style={{
                  flex: "0 0 auto",
                  width: 176,
                  paddingLeft: 16,
                  paddingRight: 16,
                }}
              >
                <div className="flex items-center justify-center">
                  <img
                    src={rating.logo}
                    alt={rating.platform}
                    style={{
                      maxHeight: 40,
                      width: "auto",
                      height: "auto",
                      display: "block",
                    }}
                  />
                  {rating.stars ? (
                    <div className="text-yellow-400 mt-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className={
                            i < Math.floor(rating.stars!)
                              ? "flaticon-star"
                              : i < rating.stars!
                                ? "flaticon-star-half-empty"
                                : "flaticon-star-1"
                          }
                        ></span>
                      ))}
                      {rating.rating && (
                        <span className="text-gray-500 ml-1">
                          {rating.rating}
                        </span>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
