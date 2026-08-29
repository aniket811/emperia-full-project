"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesHorizontal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
      });

      return () => {
        tl.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#111] text-white overflow-hidden min-h-screen flex items-center py-20 md:py-0"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-12 md:gap-[50px]">
        {/* Left fixed content */}
        <div className="flex-none w-full md:w-[350px]">
          <p className="text-[#888] text-[1.2rem] mb-3 md:mb-5">Our Values</p>
          <h2 className="text-[clamp(2.5rem,8vw,4rem)] font-medium leading-[1.1] tracking-[-1px]">
            A Developer
            <br />
            You Can Trust
          </h2>
        </div>

        {/* Right scrollable content */}
        <div className="flex-1 overflow-hidden">
          <div ref={trackRef} className="flex flex-col md:flex-row gap-12 md:gap-[100px] w-full md:w-[200%]">
            <div className="w-full md:w-1/3 flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="text-[1.5rem] text-[#888] border border-[#333] w-10 h-10 rounded-full flex justify-center items-center shrink-0">
                1
              </div>
              <div>
                <h3 className="text-[clamp(3rem,8vw,8rem)] font-medium leading-none tracking-[-2px] mb-4 md:mb-8">
                  Trust &rarr;
                </h3>
                <p className="text-xl md:text-[1.5rem] leading-relaxed text-[#aaa]">
                  With an unwavering commitment to quality, innovation, and customer satisfaction, we have established ourselves as a trusted name in the real estate industry.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="text-[1.5rem] text-[#888] border border-[#333] w-10 h-10 rounded-full flex justify-center items-center shrink-0">
                2
              </div>
              <div>
                <h3 className="text-[clamp(3rem,8vw,8rem)] font-medium leading-none tracking-[-2px] mb-4 md:mb-8">
                  Excellence &rarr;
                </h3>
                <p className="text-xl md:text-[1.5rem] leading-relaxed text-[#aaa]">
                  Our projects reflect a harmonious blend of aesthetic brilliance, superior craftsmanship, and world-class amenities.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="text-[1.5rem] text-[#888] border border-[#333] w-10 h-10 rounded-full flex justify-center items-center shrink-0">
                3
              </div>
              <div>
                <h3 className="text-[clamp(3rem,8vw,8rem)] font-medium leading-none tracking-[-2px] mb-4 md:mb-8">
                  Innovation &rarr;
                </h3>
                <p className="text-xl md:text-[1.5rem] leading-relaxed text-[#aaa]">
                  From elegant high-rise apartments to cutting-edge commercial spaces, Emperia World develops properties that stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
