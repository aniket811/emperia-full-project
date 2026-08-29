"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CityReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    // Zoom out the city background slightly
    tl.to(bgRef.current, { scale: 1, ease: "none" }, 0);

    // Fade in the cards and move them up
    tl.to(
      cardsRef.current,
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out",
      },
      0.2
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          ref={bgRef}
          src="/city_street.png"
          alt="City Street"
          className="w-full h-full object-cover transform scale-125 origin-center"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-between items-center py-6 md:py-16 px-4 md:px-10 bg-white/85 text-center">
        <h2 className="text-[clamp(1.8rem,6vw,3.5rem)] font-semibold tracking-tight mt-12 md:mt-10 px-4">
          Strategic Locations for an Unmatched Lifestyle
        </h2>

        <div className="flex gap-4 md:gap-8 justify-start md:justify-center items-center flex-1 w-full max-w-[100vw] overflow-x-auto snap-x snap-mandatory px-6 md:px-0 py-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { src: "/mortgage.png", alt: "Location 1" },
            { src: "/property.png", alt: "Location 2" },
            { src: "/construction.png", alt: "Location 3" },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="w-[260px] h-[360px] md:w-[280px] md:h-[400px] shrink-0 snap-center bg-gray-200 relative overflow-hidden rounded-[2rem] shadow-2xl transform translate-y-24 opacity-0 border-[4px] border-white/50"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-[clamp(1.1rem,3.5vw,1.5rem)] font-medium text-gray-800 mb-8 px-4 md:px-0 leading-snug">
          <span className="block">
            Our projects reflect a harmonious blend of aesthetic brilliance,
          </span>
          <span className="block">
            superior craftsmanship, and world-class amenities, ensuring an
          </span>
          <span className="block">
            unparalleled experience for homeowners and investors alike.
          </span>
        </p>
      </div>
    </section>
  );
}
