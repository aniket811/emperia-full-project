"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <Image
          src="/about.jpeg"
          alt="Emperia About Us"
          fill
          priority
          className="hero-img"
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>ABOUT US</h1>
          <p>
            Building spaces that inspire, connect and create lasting value
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="overview">
        <div className="overview-inner">
          <h2>OVERVIEW</h2>

          <p>
            Emperia is a real estate development brand focused on creating
            thoughtfully designed residential and commercial spaces that
            elevate everyday living and working experiences.
          </p>

          <p>
            Our approach combines contemporary architecture, quality
            construction, strategic locations and customer-focused planning
            to create developments that stand the test of time.
          </p>

          <p>
            From modern homes to dynamic commercial destinations, every
            Emperia project is designed with a clear focus on quality,
            functionality and long-term value.
          </p>

          <p>
            We believe that great spaces are more than buildings. They are
            places where people live, work, grow and build their future.
          </p>

          <div className="promise">
            <span>OUR PROMISE</span>
            <h3>Designed for today. Built for tomorrow.</h3>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* BACK TO TOP */}
      <button
        className="top-button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        ↑
      </button>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .about-page {
          background: #fff;
          color: #171717;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* HERO */

        .hero {
          position: relative;
          height: 610px;
          overflow: hidden;
        }

        .hero-img {
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.72),
            rgba(0, 0, 0, 0.22)
          );
        }

        .hero-content {
          position: absolute;
          left: 13%;
          bottom: 70px;
          color: white;
          max-width: 900px;
        }

        .hero-content h1 {
          font-size: 62px;
          font-weight: 400;
          margin: 0 0 20px;
          letter-spacing: 1px;
        }

        .hero-content p {
          margin: 0;
          font-size: 27px;
          line-height: 1.4;
          font-weight: 300;
        }

        /* OVERVIEW */

        .overview {
          padding: 90px 0 110px;
          background: #fff;
        }

        .overview-inner {
          width: min(1200px, 90%);
          margin: auto;
        }

        .overview h2 {
          font-size: 42px;
          margin: 0 0 30px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .overview p {
          color: #526b83;
          font-size: 18px;
          line-height: 1.7;
          margin: 0 0 25px;
        }

        .promise {
          margin-top: 55px;
          padding-top: 35px;
          border-top: 1px solid #dddddd;
        }

        .promise span {
          font-size: 13px;
          letter-spacing: 3px;
          color: #777;
          font-weight: 700;
        }

        .promise h3 {
          margin: 12px 0 0;
          font-size: 30px;
          font-weight: 500;
        }

        /* TOP BUTTON */

        .top-button {
          position: fixed;
          right: 28px;
          bottom: 28px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #ddd;
          background: white;
          font-size: 20px;
          cursor: pointer;
          z-index: 50;
        }

        /* MOBILE */

        @media (max-width: 900px) {
          .hero {
            height: 500px;
          }

          .hero-content {
            left: 7%;
            bottom: 45px;
            right: 25px;
          }

          .hero-content h1 {
            font-size: 44px;
          }

          .hero-content p {
            font-size: 20px;
          }

          .overview {
            padding: 65px 0;
          }

          .overview h2 {
            font-size: 32px;
          }

          .overview p {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}