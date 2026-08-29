"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type PropertyType =
  | "Residential"
  | "Commercial"
  | "Commercial & Residential";

type Project = {
  number: string;
  title: string;
  slug: string;
  image: string;
  location: string;
  propertyType: PropertyType;
  status: string;
  price: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "9 Meraki",
    slug: "9-meraki",
    image:
      "https://emperiaworldprojects.com/images/meraki.webp",
    location: "Shedung, Panvel",
    propertyType: "Residential",
    status: "Booking Open",
    price: "On Request",
  },
  {
    number: "02",
    title: "Emperia Hillcrest",
    slug: "emperia-hillcrest",
    image:
      "https://emperiaworldprojects.com/images/hillcrest.webp",
    location: "Shedung, Panvel",
    propertyType: "Residential",
    status: "Booking Open",
    price: "On Request",
  },
];

const filters = [
  "All",
  "Residential",
  "Commercial",
] as const;

type Filter = (typeof filters)[number];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("All");

  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" ||
        project.propertyType === activeFilter;

      const matchesSearch =
        !searchText ||
        project.title.toLowerCase().includes(searchText) ||
        project.location.toLowerCase().includes(searchText) ||
        project.propertyType
          .toLowerCase()
          .includes(searchText);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <main className="projects-page">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="projects-hero">
        <div className="hero-overlay" />

        <div className="projects-container hero-content">
          <div className="eyebrow">EMPERIA WORLD</div>

          <h1>
            Projects
            <br />
            <span>built for tomorrow.</span>
          </h1>

          <p>
            Explore our residential and commercial destinations across Mumbai,
            Navi Mumbai, Thane, Panvel, and surrounding growth corridors.
          </p>
        </div>

        <div className="hero-bottom">
          <span>01</span>
          <div className="hero-line" />
          <span>Residential & Commercial Real Estate</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="projects-container">
          <div className="intro-grid">
            <div>
              <div className="section-label">OUR PORTFOLIO</div>
              <h2>
                Spaces with
                <br />
                <span>purpose.</span>
              </h2>
            </div>

            <div className="intro-copy">
              <p className="large-copy">
                Discover a growing portfolio of thoughtfully planned residential
                and commercial projects.
              </p>
              <p>
                From homes designed for modern families to commercial destinations
                designed for businesses, explore projects across key growth locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="all-projects" className="projects-section">
        <div className="projects-container">
          <div className="projects-heading">
            <div>
              <div className="section-label">ALL PROJECTS</div>
              <h2>
                Find your
                <br />
                <span>next destination.</span>
              </h2>
            </div>
            <div className="project-count">
              {filteredProjects.length} Projects
            </div>
          </div>

          {/* SEARCH */}
          <div className="search-wrapper">
            <div className="search-box">
              <span className="search-icon">⌕</span>
              <input
                type="text"
                placeholder="Search project or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="clear-search"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* FILTERS */}
          <div className="filter-row">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* GRID */}
          {filteredProjects.length > 0 ? (
            <div className="project-grid">
              {filteredProjects.map((project) => (
                <article className="project-card" key={project.number}>
                  {/* IMAGE */}
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                    <div className="image-overlay" />
                    <div className="project-number">{project.number}</div>
                    <div className="project-status">{project.status}</div>
                    <div className="project-type-badge">
                      {project.propertyType}
                    </div>
                    <div className="image-arrow">↗</div>
                  </div>

                  {/* INFO */}
                  <div className="project-info">
                    <div className="project-title-area">
                      <h3>{project.title}</h3>
                      <p className="project-location">
                        <span>⌖</span>
                        {project.location}
                      </p>
                    </div>

                    <div className="project-meta">
                      <div className="meta-item">
                        <span className="meta-label">TYPE</span>
                        <strong>{project.propertyType}</strong>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">PRICE</span>
                        <strong>{project.price}</strong>
                      </div>
                    </div>

                  <div className="mt-6 flex w-full justify-center">
                    <Link
                      href={`/residential/project/${project.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#151515] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-black hover:shadow-md group/btn"
                    >
                      <span>View Project</span>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                        ↗
                      </span>
                    </Link>
                  </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">×</div>
              <h3>No projects found</h3>
              <p>Try another project name, location, or category.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* STYLES */}
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        
        .projects-page {
          min-height: 100vh;
          background: #ffffff;
          color: #151515;
          overflow: hidden;
        }

        .projects-container {
          width: calc(100% - 48px);
          max-width: 1450px;
          margin: 0 auto;
        }

        .section-label {
          color: #96794f;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.27em;
        }

        .section-label.light {
          color: #b89a6a;
        }

        /* HERO */
        .projects-hero {
          position: relative;
          min-height: 720px;
          display: flex;
          align-items: center;
          background-image: url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90");
          background-size: cover;
          background-position: center;
          color: #ffffff;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.82),
            rgba(0, 0, 0, 0.42),
            rgba(0, 0, 0, 0.18)
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 120px 0;
        }

        .hero-content h1 {
          margin: 25px 0;
          max-width: 950px;
          font-size: clamp(58px, 9vw, 135px);
          line-height: 0.86;
          font-weight: 500;
          letter-spacing: -0.065em;
        }

        .hero-content h1 span {
          color: #bdbdbd;
        }

        .hero-content > p {
          max-width: 680px;
          margin: 0 0 35px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 18px;
          line-height: 1.8;
        }

        .hero-bottom {
          position: absolute;
          z-index: 2;
          left: 50%;
          bottom: 28px;
          width: calc(100% - 48px);
          max-width: 1450px;
          display: flex;
          align-items: center;
          gap: 15px;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.65);
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .hero-line {
          width: 100px;
          height: 1px;
          background: rgba(255, 255, 255, 0.35);
        }

        /* INTRO */
        .intro-section {
          padding: 130px 0 110px;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 100px;
        }

        .intro-grid h2,
        .projects-heading h2 {
          margin: 18px 0 0;
          font-size: clamp(48px, 6vw, 88px);
          line-height: 0.92;
          font-weight: 500;
          letter-spacing: -0.06em;
        }

        .intro-grid h2 span,
        .projects-heading h2 span {
          color: #999999;
        }

        .intro-copy {
          max-width: 760px;
        }

        .intro-copy p {
          margin: 0 0 25px;
          color: #777777;
          font-size: 16px;
          line-height: 1.9;
        }

        .intro-copy .large-copy {
          color: #555555;
          font-size: 25px;
          line-height: 1.55;
        }

        /* PROJECTS */
        .projects-section {
          padding: 120px 0 140px;
          background: #f6f5f2;
        }

        .projects-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
        }

        .project-count {
          color: #888888;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .search-wrapper {
          margin-top: 55px;
        }

        .search-box {
          position: relative;
          max-width: 600px;
        }

        .search-box input {
          width: 100%;
          height: 55px;
          padding: 0 50px;
          border: 1px solid #d9d6cf;
          border-radius: 999px;
          outline: none;
          background: #ffffff;
          color: #151515;
          font-family: inherit;
          font-size: 14px;
        }

        .search-box input:focus {
          border-color: #96794f;
        }

        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          z-index: 2;
          transform: translateY(-50%);
          color: #777777;
          font-size: 21px;
        }

        .clear-search {
          position: absolute;
          right: 12px;
          top: 50%;
          width: 32px;
          height: 32px;
          border: 0;
          border-radius: 50%;
          transform: translateY(-50%);
          background: #eeeeee;
          cursor: pointer;
          font-size: 20px;
        }

        .filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 30px 0 55px;
        }

        .filter-button {
          min-height: 42px;
          padding: 0 17px;
          border: 1px solid #d6d3cc;
          border-radius: 999px;
          background: transparent;
          color: #555555;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          transition: 0.25s ease;
        }

        .filter-button:hover,
        .filter-button.active {
          border-color: #151515;
          background: #151515;
          color: #ffffff;
        }

        .project-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
        }

        .project-card {
          max-width: 420px;
          width: 100%;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          background: #ffffff;
          transition: 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);
        }

        .project-image {
          position: relative;
          height: 300px;
          overflow: hidden;
          background: #dddddd;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.06);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.62)
          );
        }

        .project-number {
          position: absolute;
          top: 14px;
          left: 14px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.25);
          color: #ffffff;
          font-size: 9px;
          font-weight: 700;
        }

        .project-status {
          position: absolute;
          top: 14px;
          right: 14px;
          padding: 6px 10px;
          border-radius: 999px;
          background: #ffffff;
          color: #151515;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .project-type-badge {
          position: absolute;
          left: 14px;
          bottom: 14px;
          max-width: calc(100% - 60px);
          padding: 6px 10px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.35);
          color: #ffffff;
          font-size: 8px;
          font-weight: 600;
          backdrop-filter: blur(8px);
        }

        .image-arrow {
          position: absolute;
          right: 14px;
          bottom: 14px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          color: #151515;
          font-size: 16px;
        }

        .project-info {
          padding: 20px;
        }

        .project-title-area h3 {
          margin: 0;
          min-height: 48px;
          font-size: 19px;
          line-height: 1.2;
          font-weight: 500;
          letter-spacing: -0.025em;
        }

        .project-location {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 8px 0 0;
          color: #777777;
          font-size: 12px;
        }

        .project-location span {
          color: #96794f;
        }

        .project-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 18px;
          padding-top: 15px;
          border-top: 1px solid #eeeeee;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .meta-label {
          color: #999999;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .meta-item strong {
          color: #333333;
          font-size: 11px;
          line-height: 1.45;
          font-weight: 600;
        }

        .project-link {
          width: 100%;
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 18px;
          padding: 0 15px;
          border: 1px solid #151515;
          border-radius: 999px;
          background: #151515;
          color: #ffffff;
          text-decoration: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          transition: 0.3s ease;
        }

        .project-link:hover {
          background: #96794f;
          border-color: #96794f;
        }

        .project-link span {
          font-size: 15px;
        }

        /* EMPTY */
        .no-results {
          padding: 100px 30px;
          border: 1px dashed #d2cec6;
          border-radius: 20px;
          text-align: center;
        }

        .no-results-icon {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #151515;
          color: #ffffff;
          font-size: 25px;
        }

        .no-results h3 {
          margin: 0;
          font-size: 25px;
          font-weight: 500;
        }

        .no-results p {
          color: #777777;
          font-size: 14px;
        }

        .no-results button {
          min-height: 45px;
          padding: 0 20px;
          border: 0;
          border-radius: 999px;
          background: #151515;
          color: #ffffff;
          cursor: pointer;
        }

        /* TABLET */
        @media (max-width: 1050px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }

        /* MOBILE */
        @media (max-width: 700px) {
          .projects-container {
            width: calc(100% - 32px);
          }

          .projects-hero {
            min-height: 650px;
          }

          .hero-content {
            padding: 80px 0;
          }

          .hero-content h1 {
            font-size: clamp(52px, 15vw, 75px);
          }

          .hero-content > p {
            font-size: 15px;
          }

          .hero-bottom {
            width: calc(100% - 32px);
            font-size: 8px;
          }

          .hero-line {
            width: 45px;
          }

          .intro-section {
            padding: 85px 0;
          }

          .intro-grid h2,
          .projects-heading h2 {
            font-size: 52px;
          }

          .projects-section {
            padding: 85px 0 100px;
          }

          .projects-heading {
            display: block;
          }

          .project-count {
            margin-top: 20px;
          }

          .project-grid {
            flex-direction: column;
            align-items: center;
          }

          .project-card {
            max-width: 100%;
          }

          .project-image {
            height: 280px;
          }

          .project-title-area h3 {
            min-height: auto;
          }
        }

        @media (max-width: 420px) {
          .filter-button {
            font-size: 10px;
            padding: 0 13px;
          }

          .project-meta {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}