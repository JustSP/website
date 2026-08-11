import { useEffect, useRef } from "react";

interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  delay?: string;
}

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
  className?: string;
}

export default function Testimonials({
  title,
  testimonials,
  className = "",
}: TestimonialsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el || typeof $ === "undefined") return;

    const $el = $(el);
    // main.js initializes the carousel once on document ready for the initial
    // page (Home). With client-side routing, the element on other pages is
    // mounted after that, so we initialize it here. Guard against double-init.
    if (!$el.hasClass("owl-loaded")) {
      $el.owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        navBy: 1,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        responsive: {
          0: { items: 1 },
          767: { items: 1 },
          768: { items: 2 },
          991: { items: 3 },
          1000: { items: 3 },
        },
      });
    }

    return () => {
      // Destroy the owl instance on unmount so navigating away doesn't leave
      // stale owl-stage nodes or orphaned instances behind.
      if (el && $el.hasClass("owl-loaded")) {
        $el.owlCarousel("destroy");
        $el.removeClass("owl-loaded");
      }
    };
  }, []);

  return (
    <section id="reviews" className={`md:px-5 lg:px-4 xl:px-8 ${className}`}>
      <div className="container pt-20 md:pt-22.5 lg:pt-25 xl:pt-27.5 text-gray-500">
        <div className="section_title mb-12 lg:mb-14 xl:mb-16">
          <div className="text-center w-full md:max-w-150 xl:max-w-160 mx-auto max-sm:px-3.5">
            <h2 className="text-32px 2xs:text-34px xs:text-36px sm:text-40px md:text-44px lg:text-46px xl:text-54px">
              {title}
            </h2>
          </div>
        </div>

        <div className="reviews-1-wrapper relative pt-19 pb-17 md:pt-17 md:pb-14 after:bg-whitesmoke after:rounded-xl px-4 sm:px-5 md:px-0">
          <div
            ref={carouselRef}
            className="owl-carousel reviews-carousel owl-theme"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="review relative bg-white shadow-lg shadow-gray-300/50 rounded-xl mx-2.5 xl:mx-3.5 mb-8"
              >
                <div className="p-6 xs:px-8 sm:px-7 lg:px-5 xl:p-8">
                  <div className="absolute top-0.5 lg:top-1 xl:top-2 right-7">
                    <span className="flaticon-quote text-52px xs:text-56px opacity-12"></span>
                  </div>

                  <div className="text-17px xl:text-18px text-yellow-400 mb-3">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.floor(testimonial.rating)
                            ? "flaticon-star"
                            : i < testimonial.rating
                              ? "flaticon-star-half-empty"
                              : "flaticon-star-1"
                        }
                      ></span>
                    ))}
                  </div>

                  <p className="2xs:max-lg:text-17px xl:text-19px leading-[1.7] mb-6.25">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center">
                    <div className="review-avatar">
                      <img
                        src={testimonial.avatar}
                        className="size-13 rounded-full"
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="review-author ml-3 xs:ml-4">
                      <p className="text-18px text-heading mb-1.25">
                        {testimonial.name}
                      </p>
                      <span className="block text-17px">
                        {testimonial.role}
                      </span>
                    </div>
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
