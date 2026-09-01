"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#293d4d]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        id="home"
        className="relative min-h-[650px] overflow-hidden md:min-h-[750px]"
      >
        <img
          src="/one.png"
          alt="ONE BCC Business Corporate Center"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex min-h-[650px] items-end md:min-h-[750px]">
          <div className="mx-auto w-full max-w-[1450px] px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
            <div className="max-w-[850px]">
              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#d4ad68]">
                D2 - TURBHE, NAVI MUMBAI
              </p>

              <h1 className="mt-4 text-5xl font-light tracking-[3px] text-white sm:text-6xl md:text-8xl">
                ONE BCC
              </h1>

              <h2 className="mt-2 text-2xl font-light text-white sm:text-3xl md:text-4xl">
                Business Corporate Center
              </h2>

              <p className="mt-6 max-w-[700px] text-lg leading-8 text-white/90 md:text-xl">
                The Next Chapter of Commercial Success
              </p>

              <p className="mt-4 max-w-[700px] text-sm leading-7 text-white/75 md:text-base">
                A premium commercial destination designed for modern
                businesses, productivity, convenience and long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT ONE BCC
      ========================================================= */}
      <section
        id="about"
        className="bg-white px-6 py-20 md:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1350px]">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="/onebcc.png"
                alt="ONE BCC Commercial Building"
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[550px]"
              />
            </div>

            {/* Content */}
            <div>
              <SectionLabel text="ABOUT ONE BCC" />

              <h2 className="mt-4 text-4xl font-bold uppercase leading-tight tracking-tight text-[#1e293b] md:text-5xl">
                The Next Chapter of
                <br />
                Commercial Success
              </h2>

              <p className="mt-7 text-[16px] leading-8 text-[#64748b]">
                ONE BCC is a premium commercial destination created for
                modern businesses. It brings together contemporary
                architecture, thoughtfully designed office spaces and a
                professional business environment.
              </p>

              <p className="mt-5 text-[16px] leading-8 text-[#64748b]">
                Strategically located in Turbhe, Navi Mumbai, the project is
                designed to provide businesses with convenience, connectivity
                and a sophisticated address.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <StatCard
                  number="445–1328"
                  label="SQ. FT. Office Spaces"
                />

                <StatCard
                  number="3 Lakh+"
                  label="SQ. FT. Approx. Podium"
                />

                <StatCard
                  number="1000+"
                  label="Parking Spaces"
                />

                <StatCard
                  number="Premium"
                  label="Business Environment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OFFICE SPACES
      ========================================================= */}
      <section
        id="office-spaces"
        className="bg-[#f7f5f1] px-6 py-20 md:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1250px]">
          <SectionLabel text="OFFICE SPACES" />

          <h2 className="mt-4 text-4xl font-bold uppercase leading-tight text-[#1e293b] md:text-5xl">
            Designed Around
            <br />
            Your Business
          </h2>

          <p className="mt-5 max-w-[750px] text-[16px] leading-8 text-[#64748b]">
            Flexible commercial spaces designed to support businesses of
            different sizes and requirements.
          </p>

          {/* Configuration Table */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Header */}
            <div className="hidden grid-cols-3 bg-[#293d4d] px-6 py-5 text-sm font-semibold uppercase tracking-wide text-white md:grid">
              <div>Configuration</div>
              <div>Carpet Area</div>
              <div className="text-center">Details</div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-4 border-b border-gray-200 px-6 py-6 md:grid-cols-3 md:items-center md:gap-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#b89058] md:hidden">
                  Configuration
                </p>

                <p className="mt-1 font-semibold text-[#293d4d]">
                  Commercial Office
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#b89058] md:hidden">
                  Carpet Area
                </p>

                <p className="mt-1 text-[#607284]">
                  445 Sq. Ft.
                </p>
              </div>

              <div className="md:text-center">
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="rounded-full border border-[#293d4d] px-6 py-2.5 text-sm transition-all duration-300 hover:bg-[#293d4d] hover:text-white"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 gap-4 px-6 py-6 md:grid-cols-3 md:items-center md:gap-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#b89058] md:hidden">
                  Configuration
                </p>

                <p className="mt-1 font-semibold text-[#293d4d]">
                  Commercial Office
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#b89058] md:hidden">
                  Carpet Area
                </p>

                <p className="mt-1 text-[#607284]">
                  1328 Sq. Ft.
                </p>
              </div>

              <div className="md:text-center">
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="rounded-full border border-[#293d4d] px-6 py-2.5 text-sm transition-all duration-300 hover:bg-[#293d4d] hover:text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PLANS
      ========================================================= */}
      <section
        id="plans"
        className="bg-white px-6 py-20 md:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1250px]">
          <div className="text-center">
            <SectionLabel text="PLANS" />

            <h2 className="mt-4 text-4xl font-bold uppercase text-[#1e293b] md:text-5xl">
              Floor Plans
            </h2>

            <p className="mx-auto mt-4 max-w-[700px] text-[#64748b]">
              Thoughtfully planned spaces created around modern business
              requirements.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-[900px] gap-8 md:grid-cols-2">
            {/* Plan 1 */}
            <PlanCard
              image="/Hill1 bhk.png"
              title="Office Floor Plan"
              onEnquire={() => setShowForm(true)}
            />

            {/* Plan 2 */}
            <PlanCard
              image="/Hill2 bhk.png"
              title="Office Floor Plan"
              onEnquire={() => setShowForm(true)}
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          MAP
      ========================================================= */}
      <section
        id="location"
        className="border-t border-gray-200 bg-[#f7f5f1]"
      >
        <div className="mx-auto max-w-[1450px] px-6 pt-20 text-center md:px-10 lg:px-16">
          <SectionLabel text="LOCATION" />

          <h2 className="mt-4 text-4xl font-bold uppercase text-[#1e293b] md:text-5xl">
            Find ONE BCC
          </h2>

          <p className="mx-auto mt-4 max-w-[750px] text-[#64748b]">
            A strategically located commercial address in Turbhe, Navi
            Mumbai.
          </p>
        </div>

        <div className="mt-10">
          <iframe
            title="ONE BCC Location Map"
            src="https://maps.google.com/maps?q=D2%20MIDC%20Main%20Road%20Turbhe%20Navi%20Mumbai&output=embed"
            className="h-[450px] w-full border-0 md:h-[550px]"
            loading="lazy"
          />
        </div>

        <div className="mx-auto max-w-[1200px] px-6 py-8 text-center">
          <p className="text-sm leading-7 text-[#607284] md:text-base">
            <strong className="text-[#293d4d]">
              Site Address:
            </strong>{" "}
            D2, MIDC Main Road, near Turbhe, Indira Nagar,
            MIDC Industrial Area, Turbhe, Navi Mumbai,
            Maharashtra 400703
          </p>
        </div>
      </section>

      {/* =========================================================
          CONTACT / CTA
      ========================================================= */}
      <section
  id="contact"
  className="mx-4 my-10 overflow-hidden rounded-[30px] border border-gray-100 bg-[#f8f9fa] px-6 py-16 text-slate-800 md:mx-6 md:px-10 lg:mx-10 lg:px-16 lg:py-20"
>
  <div className="mx-auto max-w-[1250px]text-black [&_*]:text-black">
    <SectionLabel
      text="CONTACT US"
      
    />

    <h2 className="mt-4 max-w-[850px] text-4xl font-bold uppercase leading-tight text-slate-900 md:text-6xl">
      Experience
      <br />
      ONE BCC
    </h2>

    <p className="mt-6 max-w-[650px] text-base leading-8 text-slate-600 md:text-lg">
      Discover a premium commercial destination created for ambitious
      businesses and modern workspaces.
    </p>

    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
      <a
        href="tel:+919167406060"
        className="inline-flex items-center justify-center rounded-full bg-[#b89058] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#a37c45]"
      >
        Call +91 9167 406 060
      </a>

      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-slate-400 hover:bg-slate-50"
      >
        Book a Site Visit
      </button>
    </div>
  </div>
</section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />

      {/* =========================================================
          ENQUIRY MODAL
      ========================================================= */}
      {showForm && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-5 py-8">
          <div className="relative max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-[28px] bg-white p-7 shadow-2xl md:p-9">
            {/* Close */}
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute right-5 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-400 transition hover:bg-gray-100 hover:text-black"
              aria-label="Close enquiry form"
            >
              ×
            </button>

            <div className="pr-8">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b89058]">
                ONE BCC
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#293d4d]">
                Enquire Now
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill in your details and our team will contact you shortly.
              </p>
            </div>

            <form
              className="mt-7 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();

                alert(
                  "Thank you! Our team will contact you shortly."
                );

                setShowForm(false);
              }}
            >
              {/* First Name */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#293d4d]">
                  First Name *
                </label>

                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#293d4d] focus:ring-1 focus:ring-[#293d4d]"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#293d4d]">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#293d4d] focus:ring-1 focus:ring-[#293d4d]"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#293d4d]">
                  Mobile Number *
                </label>

                <input
                  required
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#293d4d] focus:ring-1 focus:ring-[#293d4d]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#293d4d]">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#293d4d] focus:ring-1 focus:ring-[#293d4d]"
                />
              </div>

              {/* Requirement */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#293d4d]">
                  Requirement
                </label>

                <select
                  name="requirement"
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#293d4d] focus:ring-1 focus:ring-[#293d4d]"
                >
                  <option value="" disabled>
                    Select requirement
                  </option>

                  <option value="445">
                    445 Sq. Ft. Office
                  </option>

                  <option value="1328">
                    1328 Sq. Ft. Office
                  </option>

                  <option value="investment">
                    Investment
                  </option>

                  <option value="site-visit">
                    Site Visit
                  </option>

                  <option value="project-details">
                    Project Details
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#293d4d]">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#293d4d] focus:ring-1 focus:ring-[#293d4d]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#293d4d] py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b89058]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================
          BACK TO TOP
      ========================================================= */}
      <button
        type="button"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#d35445] text-xl text-white shadow-xl transition hover:scale-110"
        aria-label="Back to top"
      >
        ↑
      </button>
    </main>
  );
}

/* =============================================================
   SECTION LABEL
============================================================= */

function SectionLabel({
  text,
  light = false,
}: {
  text: string;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[3px] ${
        light ? "text-[#d4ad68]" : "text-[#b89058]"
      }`}
    >
      {text}
    </p>
  );
}

/* =============================================================
   STAT CARD
============================================================= */

function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-2xl font-bold text-[#293d4d] md:text-3xl">
        {number}
      </p>

      <p className="mt-2 text-[11px] font-medium uppercase tracking-[1px] text-[#64748b]">
        {label}
      </p>
    </div>
  );
}

/* =============================================================
   PLAN CARD (Compact Size)
============================================================= */

function PlanCard({
  image,
  title,
  onEnquire,
}: {
  image: string;
  title: string;
  onEnquire: () => void;
}) {
  return (
    <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Plan Image */}
      <div className="relative h-[280px] overflow-hidden bg-[#f8f8f8] md:h-[320px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-3"
        />

        {/* Enquire Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 hover:bg-black/20">
          <button
            type="button"
            onClick={onEnquire}
            className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#293d4d] shadow-md transition hover:bg-[#293d4d] hover:text-white"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100 p-4 text-center">
        <h3 className="text-base font-semibold text-[#293d4d]">
          {title}
        </h3>

        <button
          type="button"
          onClick={onEnquire}
          className="mt-3 rounded-full border border-[#293d4d] px-5 py-2 text-xs font-medium text-[#293d4d] transition hover:bg-[#293d4d] hover:text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
}