"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLImageElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLImageElement>(null);
  
  const outlineLayerRef = useRef<HTMLDivElement>(null);
  const emperiaOutlineRef = useRef<SVGTextElement>(null);
  const realEstateOutlineRef = useRef<SVGTextElement>(null);

  const maskLayerRef = useRef<HTMLDivElement>(null);
  const maskTextRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=120%", // Reduced pin distance to eliminate blank space
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      timelineRef.current = tl;

      // Phase 1: Background & Intro Text move up slowly, Intro Text fades out
      tl.to(skyRef.current, { yPercent: -15, duration: 1, ease: "none" }, 0);
      tl.to(
        introTextRef.current,
        { yPercent: -20, opacity: 0, duration: 0.2, ease: "power1.out" },
        0
      );

      // Phase 1.5: Building moves up
      tl.to(
        buildingRef.current,
        { yPercent: -80, scale: 1.1, duration: 0.8, ease: "none" },
        0
      );

      // Phase 2: Outline text animation
      tl.to(
        emperiaOutlineRef.current,
        { strokeDashoffset: 0, duration: 0.25, ease: "power1.inOut" },
        0.15
      );
      tl.to(
        realEstateOutlineRef.current,
        { strokeDashoffset: 0, duration: 0.25, ease: "power1.inOut" },
        0.15
      );

      // Phase 3: Outline fades out, and Mask fades in
      tl.to(
        outlineLayerRef.current,
        { opacity: 0, duration: 0.1, ease: "none" },
        0.4
      );
      tl.fromTo(
        maskLayerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.1, ease: "none" },
        0.4
      );
    }, containerRef);

    const handlePageShow = () => {
      if (!timelineRef.current) return;

      timelineRef.current.progress(0).pause();
      ScrollTrigger.refresh();
      ScrollTrigger.update();
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      timelineRef.current = null;
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#e5eef5]"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Layer 1: Sky */}
        <div className="absolute top-0 left-0 w-full h-[120%] flex justify-center items-end z-0 pointer-events-none">
          <img
            ref={skyRef}
            src="/sky.png"
            alt="Sky"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Layer 2: Intro Text */}
        <div
          ref={introTextRef}
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center text-center z-10 pt-[25vh]"
        >
          <div className="text-center mb-6 md:mb-10 px-4">
            <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-[-1px] md:tracking-[-2px] leading-[1.1] text-[#111] mb-3">
              Emperia World Projects
            </h2>
            <p className="text-[clamp(1rem,3vw,1.4rem)] font-medium text-gray-700 max-w-3xl mx-auto opacity-90">
              A Legacy of Excellence in Real Estate
            </p>
          </div>
          <Link
            href="/projects"
            className="bg-[#111] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#333] transition-colors flex items-center gap-2 md:gap-3"
          >
            Find Properties <span>&rarr;</span>
          </Link>
        </div>

        {/* Layer 3: Building */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-20 pointer-events-none">
          <img
            ref={buildingRef}
            src="/building.png"
            alt="Building"
            className="w-full min-w-[480px] md:min-w-[1200px] h-auto object-contain max-w-none transform translate-y-[20%] md:translate-y-[85%]"
          />
        </div>

        {/* Layer 3.5: Outline Layer */}
        <div
          ref={outlineLayerRef}
          className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-25 pointer-events-none"
        >
          <div className="w-full max-w-[1400px] px-4 text-center">
            <svg viewBox="0 0 1000 300" className="w-full h-auto overflow-visible">
              <text
                ref={emperiaOutlineRef}
                x="50%"
                y="180"
                textAnchor="middle"
                className="fill-transparent stroke-white"
                style={{
                  fontSize: "180px",
                  fontWeight: 900,
                  letterSpacing: "-5px",
                  strokeWidth: "3px",
                  strokeDasharray: "4000",
                  strokeDashoffset: "4000",
                }}
              >
                EMPERIA
              </text>
              <text
                ref={realEstateOutlineRef}
                x="50%"
                y="260"
                textAnchor="middle"
                className="fill-transparent stroke-white"
                style={{
                  fontSize: "50px",
                  fontWeight: 700,
                  letterSpacing: "4px",
                  strokeWidth: "1.5px",
                  strokeDasharray: "2000",
                  strokeDashoffset: "2000",
                }}
              >
                Real Estate
              </text>
            </svg>
          </div>
        </div>

        {/* Layer 4: Mask Layer */}
        <div
          ref={maskLayerRef}
          className="absolute top-0 left-0 w-full h-screen bg-white z-30 pointer-events-none overflow-hidden opacity-0"
          style={{ mixBlendMode: "screen" }}
        >
          <div
            ref={maskTextRef}
            className="w-full h-screen flex flex-col justify-center items-center"
          >
            <div className="w-full max-w-[1400px] px-4 text-center">
              <svg viewBox="0 0 1000 300" className="w-full h-auto overflow-visible">
                <text
                  x="50%"
                  y="180"
                  textAnchor="middle"
                  className="fill-black stroke-black"
                  style={{
                    fontSize: "180px",
                    fontWeight: 900,
                    letterSpacing: "-5px",
                    strokeWidth: "3px",
                  }}
                >
                  EMPERIA
                </text>
                <text
                  x="50%"
                  y="260"
                  textAnchor="middle"
                  className="fill-black stroke-black"
                  style={{
                    fontSize: "50px",
                    fontWeight: 700,
                    letterSpacing: "4px",
                    strokeWidth: "1.5px",
                  }}
                >
                  Real Estate
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Layer 5: Cloud Divider */}
        <div className="absolute bottom-0 left-0 w-full h-[40vh] z-40 pointer-events-none overflow-visible flex items-end transform translate-y-0 md:translate-y-[25vh]">
          <img
            src="/cloud.png"
            alt="Cloud Divider"
            className="absolute bottom-[-10%] md:bottom-[-20%] left-[-50%] md:left-[-10%] min-w-[800px] md:min-w-0 md:w-[70%] max-w-none opacity-100"
          />
          <img
            src="/cloud.png"
            alt="Cloud Divider"
            className="absolute bottom-[-15%] md:bottom-[-25%] right-[-50%] md:right-[-15%] min-w-[900px] md:min-w-0 md:w-[80%] max-w-none opacity-100"
          />
          <img
            src="/cloud.png"
            alt="Cloud Divider"
            className="absolute bottom-[-20%] md:bottom-[-40%] left-[-20%] md:left-[5%] min-w-[1000px] md:min-w-0 md:w-[100%] max-w-none opacity-90"
          />
        </div>
      </div>
    </section>
  );
}