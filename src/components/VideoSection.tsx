"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 7, suffix: "+", label: "Completed Projects" },
  { value: 7, suffix: "+", label: "Ongoing Projects" },
  { value: 1800, suffix: "+", label: "Happy Families" },
];

const principles = [
  {
    number: "01",
    title: "Trusted Expertise",
    text: "A disciplined approach to real estate, built around transparency, experience, and dependable execution.",
  },
  {
    number: "02",
    title: "Quality Projects",
    text: "Thoughtfully planned spaces with strong focus on design, construction quality, and lasting value.",
  },
  {
    number: "03",
    title: "Customer First",
    text: "Every decision is shaped around a smoother buying journey, clear communication, and long-term relationships.",
  },
  {
    number: "04",
    title: "Future Focused",
    text: "Creating contemporary residential and commercial destinations designed for the way people live and work next.",
  },
];

function CountUp({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1500;

    let startTime: number | null = null;
    let frame = 0;

    const animate = (time: number) => {
      if (startTime === null) {
        startTime = time;
      }

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page">

      <Navbar />

      {/* =========================
          ABOUT HERO
      ========================== */}

      <section className="about-reference-hero">

        <div className="about-reference-grid">

          {/* IMAGE */}

          <div className="about-reference-image-wrap">

            <img
              src="/property.png"
              alt="Emperia residential development"
              className="about-reference-image"
            />

          </div>


          {/* CONTENT */}

          <div className="about-reference-copy">

            <p className="about-kicker">
              ABOUT US
            </p>

            <h1>
              More than real estate.
              <br />
              A standard you can trust.
            </h1>

            <p className="about-lead">
              Emperia World is a real estate developer
              focused on creating considered residential
              and commercial destinations across Mumbai
              and Navi Mumbai, bringing together thoughtful
              design, dependable quality, and a
              customer-first approach.
            </p>

            <Link
              href="/about"
              className="about-know-more inline-block mb-6"
            >
              Know More
              <span>→</span>
            </Link>
          </div>

        </div>

      </section>


      {/* =========================
          NUMBERS
      ========================== */}

      <section className="about-numbers">

        <div className="about-section-container">

          <div className="numbers-card">

            <img
              src="/city_street.png"
              alt="Mumbai city"
              className="numbers-image"
            />

            <div className="numbers-overlay" />

            <div className="numbers-content">

              <p className="numbers-kicker">
                EMPERIA BY THE NUMBERS
              </p>

              <div className="numbers-grid">

                {stats.map((stat) => (

                  <div
                    className="number-item"
                    key={stat.label}
                  >

                    <div className="number-value">

                      <CountUp
                        value={stat.value}
                        suffix={stat.suffix}
                      />

                    </div>

                    <div className="number-rule" />

                    <p>
                      {stat.label}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          STYLES
      ========================== */}

      <style jsx global>{`

        .about-page {
          min-height: 100vh;
          background: #ffffff;
          color: #151515;
          overflow: hidden;
        }


        /* =========================
           HERO
        ========================== */

        .about-reference-hero {
          padding: 75px 0 40px;
          background: #ffffff;
        }

        .about-reference-grid {
          width: min(
            1400px,
            calc(100% - 64px)
          );

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(0, 1.02fr)
            minmax(0, 0.98fr);

          align-items: center;

          gap: clamp(
            40px,
            5vw,
            90px
          );
        }


        /* IMAGE */

        .about-reference-image-wrap {
          height: min(
            520px,
            55vw
          );

          min-height: 380px;

          overflow: hidden;

          border-radius: 28px;

          background: #eeeeee;
        }

        .about-reference-image {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;

          filter: saturate(0.9);

          transition:
            transform 700ms ease;
        }

        .about-reference-image-wrap:hover
        .about-reference-image {
          transform: scale(1.03);
        }


        /* CONTENT */

        .about-reference-copy {
          max-width: 650px;
          padding: 10px 0 0;
        }

        .about-kicker,
        .section-kicker,
        .numbers-kicker {
          margin: 0 0 16px;

          color: #6c7780;

          font-size: 13px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: 0.16em;
        }


        .about-reference-copy h1 {
          margin: 0 0 20px;

          max-width: 620px;

          font-size:
            clamp(
              36px,
              4.5vw,
              64px
            );

          line-height: 1.02;

          letter-spacing: -0.045em;

          font-weight: 500;
        }


        .about-lead {
          margin: 0;

          max-width: 650px;

          color: #536777;

          font-size:
            clamp(
              16px,
              1.4vw,
              22px
            );

          line-height: 1.5;

          letter-spacing: -0.015em;
        }


        .about-know-more {
          display: inline-flex;

          align-items: center;

          gap: 13px;

          margin-top: 22px;

          color: #536777;

          text-decoration: none;

          font-size: 17px;

          font-weight: 500;

          transition:
            gap 220ms ease,
            color 220ms ease;
        }

        .about-know-more:hover {
          gap: 20px;
          color: #151515;
        }


        .about-section-container {
          width: min(
            1400px,
            calc(100% - 64px)
          );

          margin: 0 auto;
        }


        /* =========================
           NUMBERS
        ========================== */

        .about-numbers {
          padding: 20px 0 0;
          background: #ffffff;
        }

        .numbers-card {
          position: relative;
          min-height: 200px;
          overflow: hidden;
          border-radius: 28px;
          background: #1c1c1c;
          color: #ffffff;
        }

        .numbers-image,
        .numbers-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .numbers-image {
          object-fit: cover;
          opacity: 0.45;
        }

        .numbers-overlay {
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.86),
            rgba(0, 0, 0, 0.5)
          );
        }

        .numbers-content {
          position: relative;
          z-index: 1;
          padding: 28px 45px;
        }

        .numbers-kicker {
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          letter-spacing: 3px;
        }

        .numbers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 25px;
        }

        .number-value {
          font-size: clamp(34px, 3.5vw, 48px);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .number-rule {
          width: 42px;
          height: 1px;
          margin: 10px 0 8px;
          background: rgba(255, 255, 255, 0.55);
        }

        .number-item p {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          line-height: 1.4;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .about-reference-hero {
            padding: 60px 0 30px;
          }

          .about-reference-grid {
            grid-template-columns: 1fr;
          }

          .about-reference-image-wrap {
            height: 420px;
            min-height: 0;
          }

          .about-numbers {
            padding: 15px 0 0;
          }

          .numbers-grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 35px;
            margin-top: 30px;
          }
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .about-reference-grid,
          .about-section-container {
            width: min(100% - 36px, 1400px);
          }

          .about-reference-image-wrap {
            height: 320px;
            border-radius: 20px;
          }

          .about-reference-copy h1 {
            font-size: 38px;
          }

          .about-lead {
            font-size: 18px;
          }

          .about-numbers {
            padding: 10px 0 0;
          }

          .numbers-card {
            min-height: 340px;
            border-radius: 20px;
          }

          .numbers-content {
            padding: 24px 20px;
          }

          .numbers-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

      `}</style>

    </main>
  );
}