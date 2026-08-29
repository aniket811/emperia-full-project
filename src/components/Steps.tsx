"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Steps() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    stepRefs.current.forEach((step) => {
      if (!step) return;
      gsap.to(step, {
        opacity: 1,
        scrollTrigger: {
          trigger: step,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="py-16 md:py-[120px] px-6 md:px-10 bg-[#f8f8f8]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[100px]">
        {/* Sticky Left Content */}
        <div className="md:sticky top-[150px] h-fit mb-10 md:mb-0">
          <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight mb-8 md:mb-10">
            Why Choose Emperia World Projects?
          </h2>
          <button className="bg-[#1a1a1a] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
            Enquire Now &rarr;
          </button>
        </div>

        {/* Scrolling Right Content */}
        <div className="flex flex-col gap-10 md:gap-16">
          <p className="text-xl md:text-2xl font-semibold -mb-2 md:-mb-5">Our Strengths:</p>

          {[
            {
              num: "01",
              title: "Exceptional Design.",
              desc: "Harmonious blend of aesthetic brilliance and modern architecture.",
            },
            {
              num: "02",
              title: "Unparalleled Amenities.",
              desc: "World-class facilities that elevate your lifestyle.",
            },
            {
              num: "03",
              title: "Prime Locations.",
              desc: "Strategically located for maximum convenience and value.",
            },
          ].map((step, index) => (
            <div
              key={index}
              ref={(el) => { stepRefs.current[index] = el; }}
              className="flex gap-6 md:gap-8 items-start opacity-30 transition-opacity duration-500"
            >
              <div className="text-lg md:text-xl font-medium text-gray-500 pt-1 md:pt-2 shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-2 md:mb-4">
                  {step.title}
                </h3>
                <p className="text-lg md:text-2xl text-gray-600 font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
