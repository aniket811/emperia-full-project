"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    name: "ONE BCC",
    location: "Turbhe, Navi Mumbai",
    image: "/property.png",
    path: "/commercial/one-bcc",
  },
];

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-white text-[#111]">

      {/* =====================================================
          HEADER / NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[550px] overflow-hidden md:h-[680px]">

        <img
          src="/commercial.png"
          alt="Commercial Avenues"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/30" />

        {/* Bottom Gradient */}

        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 to-transparent" />

        {/* HERO TEXT */}

        <div className="absolute bottom-0 left-0 z-10 px-8 pb-12 md:px-[7%] md:pb-16">

          <h1 className="text-5xl font-normal uppercase tracking-[-2px] text-white md:text-7xl">
            COMMERCIAL AVENUES
          </h1>

          <p className="mt-4 text-xl font-normal text-white md:text-3xl">
            Spaces designed to empower businesses
          </p>

        </div>

      </section>

      {/* =====================================================
          OUR LANDMARKS
      ===================================================== */}

      <section className="bg-white px-6 py-20 md:px-12 md:py-24">

        <div className="mx-auto max-w-[1400px]">

          {/* HEADING */}

          <div className="text-center">

            <h2 className="text-4xl font-semibold uppercase tracking-[-1px] text-[#26394b] md:text-6xl">
              OUR LANDMARKS
            </h2>

            <p className="mt-6 text-xl italic text-[#e5483b] md:text-2xl">
              Ongoing Projects
            </p>

            <div className="mx-auto mt-5 h-[2px] w-[165px] bg-[#34495a]" />

          </div>

          {/* =================================================
              PROJECTS 
          ================================================= */}

          <div className="mt-14 mx-auto max-w-[450px]">

            {projects.slice(0, 1).map((project, index) => (

              <Link
                key={index}
                href="/commercial/one-bcc"
                className="group block cursor-pointer text-center"
              >

                {/* PROJECT IMAGE */}

                <div className="aspect-[1/0.96] overflow-hidden rounded-[22px] bg-gray-100">

                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                {/* PROJECT NAME */}

                <h3 className="mt-5 text-2xl font-normal text-[#38536b] md:text-[30px]">
                  {project.name}
                </h3>

                {/* LOCATION */}

                <p className="mt-1 text-lg text-[#526477] md:text-xl">
                  {project.location}
                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

      {/* =====================================================
          BACK TO TOP
      ===================================================== */}

      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
        className="fixed bottom-7 right-7 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white text-xl text-black shadow-lg transition hover:bg-black hover:text-white"
      >
        ↑
      </button>

    </main>
  );
}