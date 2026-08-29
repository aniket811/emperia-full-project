"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!textRef.current) return;
    const words = textRef.current.querySelectorAll(".word");

    gsap.to(words, {
      color: "#111", // Change to black
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-[150px] bg-white flex justify-center items-center min-h-[80vh]"
    >
      <div className="max-w-[1200px] px-10">
        <h2
          ref={textRef}
          className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.2] tracking-tight"
        >
          {"Emperia World is a pioneering real estate developer in Mumbai & Navi Mumbai, dedicated to crafting iconic residential and commercial spaces that redefine luxury, convenience, and modern living."
            .split(" ")
            .map((word, i) => (
              <span key={i}>
                <span className="word text-[#dcdcdc] transition-colors duration-300">
                  {word}
                </span>
                {" "}
              </span>
            ))}
        </h2>
      </div>
    </section>
  );
}
