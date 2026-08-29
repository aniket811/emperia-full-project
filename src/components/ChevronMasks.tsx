"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ChevronMasks() {
  const images = [
    "/agent_forest.png",
    "/property.png",
    "/construction.png",
    "/city_street.png",
  ];

  const getClipPath = (index: number, length: number) => {
    // First item: flat on the left
    if (index === 0) {
      return "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)";
    }
    // Last item: flat on the right
    if (index === length - 1) {
      return "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 25% 50%)";
    }
    // Middle items: chevron cut on both sides
    return "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%)";
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 max-w-[1400px] mx-auto bg-white text-center flex flex-col items-center overflow-hidden">
      <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-medium text-[#111] leading-tight tracking-tight mb-10 md:mb-16">
        This isn&apos;t just <span className="text-gray-400">about real estate.</span>
      </h2>

      <div className="flex gap-1 md:gap-2 justify-center items-center w-full max-w-[1200px] mb-10 md:mb-16 h-[300px] md:h-[500px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px 0px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 h-full relative overflow-hidden bg-gray-200 group"
            style={{
              clipPath: getClipPath(i, images.length),
            }}
          >
            <img
              src={img}
              alt="Lifestyle"
              className="w-full h-full object-cover scale-125 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl text-center">
        <p className="text-lg md:text-xl font-medium text-[#111] mb-2">
          It&apos;s about identity. Progress. Getting unstuck.
        </p>
        <p className="text-lg md:text-xl font-medium text-gray-400">
          You&apos;re not just looking for a place. You&apos;re looking for alignment. That&apos;s what we help you find.
        </p>
      </div>
    </section>
  );
}