"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedImageReveal({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px 0px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden w-full h-full ${className}`}
    >
      <img src={src} alt={alt} className="absolute top-0 left-0 w-full h-full object-cover" />
    </motion.div>
  );
}
