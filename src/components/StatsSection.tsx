"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "20+",
    label: "Years of Experience",
  },
  {
    number: "7+",
    label: "Completed Projects",
  },
  {
    number: "6+",
    label: "Ongoing Projects",
  },
  {
    number: "1,800+",
    label: "Happy Families",
  },
];

export default function StatsSection() {
  return (
    <section className="relative min-h-[300px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/stats-bg.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex min-h-[300px] items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className={`
                  flex min-h-[150px]
                  flex-col items-center justify-center
                  px-4 text-center
                  ${
                    index !== 3
                      ? "lg:border-r lg:border-white/40"
                      : ""
                  }
                  ${
                    index < 2
                      ? "border-b border-white/25 lg:border-b-0"
                      : ""
                  }
                  ${
                    index % 2 === 0
                      ? "border-r border-white/25 lg:border-r"
                      : ""
                  }
                `}
              >
                <h3 className="
                  text-4xl font-light
                  tracking-tight text-white
                  sm:text-5xl
                  md:text-6xl
                ">
                  {stat.number}
                </h3>

                <div className="mt-3 mb-3 h-px w-20 bg-white/70" />

                <p className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-white/90
                  sm:text-sm
                ">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}