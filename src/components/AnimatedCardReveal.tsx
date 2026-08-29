"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedCardReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-[500px] rounded-xl overflow-hidden cursor-pointer group"
    >
      {children}
    </motion.div>
  );
}
