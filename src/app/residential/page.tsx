"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* =========================================================
   PROJECT DATA
   ========================================================= */

const ongoingProjects = [
  {
    name: "9 Meraki",
    location: "Shedung, Panvel",
    image: "/miraki.png",
    slug: "9-meraki",
  },
  {
    name: "Emperia Hillcrest",
    location: "Shedung, Panvel",
    image: "hill.png",
    slug: "emperia-hillcrest",
  },
  /*
  {
    name: "Nova Vista",
    location: "Nerul, Navi Mumbai",
    image: "/images/project-3.jpg",
    slug: "nova-vista",
  },
  {
    name: "Codename Upvan",
    location: "Upper Kharghar, Navi Mumbai",
    image: "/images/project-4.jpg",
    slug: "codename-upvan",
  },
  {
    name: "Codename Elements",
    location: "Panvel, Navi Mumbai",
    image: "/images/project-5.jpg",
    slug: "codename-elements",
  },
  {
    name: "Elara at Codename Cloud City",
    location: "Kharghar, Navi Mumbai",
    image: "/images/project-6.jpg",
    slug: "elara-cloud-city",
  },
  */
];

const completedProject = {
  title: "COMPLETED PROJECTS",
  image: "/images/completed-projects.jpg",
};

const upcomingProject = {
  title: "UPCOMING PROJECTS",
  image: "/images/upcoming-projects.jpg",
};

/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function ResidentialProjectsPage() {
  const [activeTab, setActiveTab] = useState<
    "Ongoing" | "Completed" | "Upcoming"
  >("Ongoing");

  return (
    <main className="min-h-screen bg-white text-[#151515]">

      {/* =====================================================
          HEADER / NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          HERO / OUR LANDMARKS IMAGE
      ===================================================== */}

      <section className="relative h-[500px] w-full overflow-hidden md:h-[650px]">

        {/* Hero Image */}
        <img
          src="/landmark.png"
          alt="Our Landmarks"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />

        {/* Hero Text */}
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1500px] px-6 pb-14 md:px-12 md:pb-20">

          <h1 className="text-5xl font-light tracking-[-2px] text-white md:text-7xl lg:text-[82px]">
            OUR LANDMARKS
          </h1>

          <p className="mt-4 text-xl font-light text-white md:text-3xl">
            Smart living spaces that elevate everyday
          </p>

        </div>

      </section>

      {/* =====================================================
          PROJECT SECTION
      ===================================================== */}

      <section className="bg-white px-6 py-20 md:px-12 md:py-24">

        <div className="mx-auto max-w-[1400px]">

          {/* Section Heading */}
          <div className="text-center">

            <h2 className="text-4xl font-semibold tracking-[-1.5px] md:text-6xl">
              OUR LANDMARKS
            </h2>

            {/* Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-base md:text-xl">

              {/* Ongoing */}
              <button
                type="button"
                onClick={() => setActiveTab("Ongoing")}
                className={`transition ${
                  activeTab === "Ongoing"
                    ? "font-medium italic text-[#e84c3d]"
                    : "text-[#555] hover:text-black"
                }`}
              >
                Ongoing Projects
              </button>

              <span className="px-2 text-[#e84c3d]">
                |
              </span>

              {/* Completed */}
              <button
                type="button"
                onClick={() => setActiveTab("Completed")}
                className={`transition ${
                  activeTab === "Completed"
                    ? "font-medium italic text-[#e84c3d]"
                    : "text-[#555] hover:text-black"
                }`}
              >
                Completed Projects
              </button>

              <span className="px-2 text-[#e84c3d]">
                |
              </span>

              {/* Upcoming */}
              <button
                type="button"
                onClick={() => setActiveTab("Upcoming")}
                className={`transition ${
                  activeTab === "Upcoming"
                    ? "font-medium italic text-[#e84c3d]"
                    : "text-[#555] hover:text-black"
                }`}
              >
                Upcoming Projects
              </button>

            </div>

            <div className="mx-auto mt-6 max-w-[650px] border-t border-[#526477]" />

          </div>

          {/* =================================================
              ONGOING PROJECTS (Centered)
          ================================================= */}

          {activeTab === "Ongoing" && (
            <div className="mt-14 flex flex-wrap justify-center gap-8">

              {ongoingProjects.map((project) => (
                <a
                  key={project.name}
                  href={`/residential/project/${project.slug}`}
                  className="group block w-full max-w-[400px] cursor-pointer sm:w-[calc(50%-1rem)]"
                >

                  {/* Image */}
                  <div className="relative aspect-[1/0.96] overflow-hidden rounded-[22px] bg-[#f3f3f3]">

                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />

                  </div>

                  {/* Details */}
                  <div className="pt-4 text-center">

                    <h3 className="text-xl font-medium tracking-[-0.5px] text-[#344f68] md:text-2xl">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-base text-[#526477]">
                      {project.location}
                    </p>

                  </div>

                </a>
              ))}

            </div>
          )}

          {/* =================================================
              COMPLETED PROJECT
          ================================================= */}

          {activeTab === "Completed" && (
            <div className="mt-14">

              <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[22px]">

                <img
                  src={completedProject.image}
                  alt={completedProject.title}
                  className="block h-auto w-full object-cover"
                />

              </div>

            </div>
          )}

          {/* =================================================
              UPCOMING PROJECT
          ================================================= */}

          {activeTab === "Upcoming" && (
            <div className="mt-14">

              <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[22px]">

                <img
                  src={upcomingProject.image}
                  alt={upcomingProject.title}
                  className="block h-auto w-full object-cover"
                />

              </div>

            </div>
          )}

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}