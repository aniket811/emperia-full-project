"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const positions = [
  "Sourcing Manager",
  "Closing Manager",
  "Telecaller",
  "Sourcing Manager TL",
  "Site Head",
];

export default function CareerPage() {
  return (
    <main className="career-page">

      {/* NAVBAR */}
      <Navbar />


      {/* HERO */}
      <section className="hero">
        <img src="/career.jpg" alt="Career at Emperia" />

        <div className="heroOverlay" />

        <div className="heroText">
          <p>CAREER</p>
          <h1>Build your career<br />with Emperia.</h1>
        </div>
      </section>


      {/* CAREER INTRO */}
      <section className="intro">
        <div className="container">
          <p className="label">JOIN OUR TEAM</p>

          <h2>
            Grow with a team that
            <br />
            builds meaningful spaces.
          </h2>

          <p className="description">
            At Emperia, we believe great projects are built by great people.
            Join our growing team and build your career with us.
          </p>
        </div>
      </section>


      {/* OPEN POSITIONS */}
      <section className="positions">
        <div className="container">

          <div className="heading">
            <div>
              <p className="label">OPEN POSITIONS</p>
              <h2>Current Opportunities</h2>
            </div>

            <p>
              We are looking for motivated and talented professionals
              to join our team.
            </p>
          </div>


          <div className="positionList">

            {positions.map((position, index) => (
              <div className="position" key={position}>

                <span className="number">
                  0{index + 1}
                </span>

                <h3>{position}</h3>

                <a
                  href="mailto:careers@emperiaworld.com?subject=Application for "
                  className="apply"
                >
                  Apply Now →
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* EMAIL */}
      <section className="emailSection">
        <div className="container emailBox">

          <div>
            <p className="label">GET IN TOUCH</p>

            <h2>
              Interested in
              <br />
              joining us?
            </h2>

            <p>
              Send us your CV and a short introduction.
              Our team will get in touch with you.
            </p>
          </div>

          <div className="emailRight">

            <span>Send your CV to</span>

            <a href="mailto:careers@emperiaworld.com">
              careers@emperiaworld.com
            </a>

            <a
              href="mailto:careers@emperiaworld.com"
              className="emailButton"
            >
              Connect With Us →
            </a>

          </div>

        </div>
      </section>


      {/* FOOTER */}
      <Footer />


      <style jsx global>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: #293b4b;
        }

        .career-page {
          background: #fff;
        }

        .container {
          width: min(1350px, calc(100% - 70px));
          margin: auto;
        }


        /* HERO */

        .hero {
          height: 570px;
          position: relative;
          overflow: hidden;
        }

        .hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,.75),
            rgba(0,0,0,.05)
          );
        }

        .heroText {
          position: absolute;
          left: 7%;
          bottom: 55px;
          color: #fff;
        }

        .heroText p {
          font-size: 12px;
          letter-spacing: 4px;
        }

        .heroText h1 {
          margin: 15px 0 0;
          font-size: clamp(45px,6vw,80px);
          line-height: .95;
          font-weight: 400;
        }


        /* INTRO */

        .intro {
          padding: 110px 0;
        }

        .label {
          margin: 0 0 20px;
          color: #777;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .intro h2 {
          margin: 0;
          font-size: clamp(45px,6vw,78px);
          line-height: .95;
          font-weight: 400;
          letter-spacing: -4px;
        }

        .description {
          max-width: 650px;
          margin: 35px 0 0;
          color: #687781;
          font-size: 19px;
          line-height: 1.7;
        }


        /* POSITIONS */

        .positions {
          padding: 100px 0;
          background: #f5f5f3;
        }

        .heading {
          display: flex;
          justify-content: space-between;
          gap: 50px;
          align-items: end;
        }

        .heading h2 {
          margin: 0;
          font-size: 48px;
          font-weight: 400;
        }

        .heading > p {
          max-width: 400px;
          color: #707b82;
          line-height: 1.6;
        }

        .positionList {
          margin-top: 60px;
          border-top: 1px solid #ccc;
        }

        .position {
          display: grid;
          grid-template-columns: 70px 1fr auto;
          align-items: center;
          gap: 25px;
          padding: 30px 0;
          border-bottom: 1px solid #ccc;
        }

        .number {
          color: #888;
          font-size: 12px;
        }

        .position h3 {
          margin: 0;
          font-size: 25px;
          font-weight: 400;
        }

        .apply {
          color: #293b4b;
          text-decoration: none;
          font-weight: 600;
        }


        /* EMAIL */

        .emailSection {
          padding: 110px 0;
        }

        .emailBox {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .emailBox h2 {
          margin: 0;
          font-size: clamp(48px,6vw,80px);
          line-height: .95;
          font-weight: 400;
          letter-spacing: -4px;
        }

        .emailBox p:not(.label) {
          max-width: 500px;
          margin-top: 30px;
          color: #707b82;
          line-height: 1.7;
        }

        .emailRight {
          padding-left: 40px;
        }

        .emailRight span {
          display: block;
          color: #777;
          margin-bottom: 15px;
        }

        .emailRight > a:not(.emailButton) {
          display: block;
          color: #293b4b;
          font-size: clamp(22px,3vw,35px);
          text-decoration: none;
        }

        .emailButton {
          display: inline-block;
          margin-top: 30px;
          padding: 16px 28px;
          border-radius: 30px;
          background: #293b4b;
          color: #fff;
          text-decoration: none;
        }


        /* MOBILE */

        @media(max-width:800px) {

          .container {
            width: calc(100% - 36px);
          }

          .hero {
            height: 480px;
          }

          .intro,
          .positions,
          .emailSection {
            padding: 70px 0;
          }

          .heading,
          .emailBox {
            grid-template-columns: 1fr;
            display: grid;
          }

          .position {
            grid-template-columns: 40px 1fr;
          }

          .apply {
            grid-column: 2;
          }

          .emailRight {
            padding-left: 0;
          }
        }

        @media(max-width:500px) {

          .heroText {
            left: 20px;
          }

          .heroText h1 {
            font-size: 48px;
          }

          .intro h2,
          .emailBox h2 {
            letter-spacing: -2px;
          }

          .position {
            gap: 12px;
          }

          .position h3 {
            font-size: 20px;
          }
        }

      `}</style>
    </main>
  );
}