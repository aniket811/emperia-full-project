"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NineMerakiPage() {
  const [showForm, setShowForm] = useState(false);

  const [index, setIndex] = useState(0);

const images = [
  "/21.png",
  "/22.png",
  "/23.png",
  "/24.png",
  "/25.png",
];

  return (
    <main className="bg-white text-[#2d4050]">

      {/* =====================================================
          NAVIGATION BAR
      ===================================================== */}
      <Navbar />

      

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section id="home" className="relative h-[650px] overflow-hidden lg:h-[760px]">
        <img
          src="/ca.png"
          alt="9 Meraki Panvel"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-[1450px] px-6 pb-14 lg:px-12">
            <div className="max-w-[750px]">
              <p className="text-sm font-medium uppercase tracking-[5px] text-white">
                PANVEL
              </p>
              <h1 className="mt-4 text-5xl font-light tracking-[5px] text-white md:text-7xl lg:text-8xl">
                9 MERAKI
              </h1>
              <p className="mt-5 text-xl text-white md:text-2xl">
                Your Gateway to Seamless Living &amp; Connectivity
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}
      <section id="about" className="bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* LEFT: ELEVATION IMAGE */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-md lg:col-span-5">
              <img
                src="/miraki.png"
                alt="9 Meraki Panvel Building"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* RIGHT: TEXT & PROJECT HALLMARKS */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#1e293b] md:text-5xl">
                ABOUT 9 MERAKI
              </h2>

              <p className="mt-5 text-[16px] leading-relaxed text-[#64748b]">
                9 Meraki is a thoughtfully designed residential-cum-commercial landmark situated in the thriving locale of Panvel. Strategically located before Shedung Toll Naka along the Old Mumbai-Pune Highway, it connects seamlessly with the upcoming infrastructure of Mumbai 3.0.
              </p>

              <p className="mt-4 text-[16px] leading-relaxed text-[#64748b]">
                Spread across approximately 2 acres, the project features a Ground + 17 Storey tower offering modern residences, ground-floor high-street retail, and an exclusive 10th-floor recreational lifestyle deck.
              </p>

              {/* PROJECT HALLMARKS */}
              <div className="mt-8">
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#1e293b]">
                  PROJECT HALLMARKS
                </h3>

                <ul className="mt-4 space-y-2.5 text-[15px] text-[#334155]">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#e11d48]" />
                    <span>Ground + 17 Storey iconic tower across ~2 Acres</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#e11d48]" />
                    <span>Bespoke 1 &amp; 2 BHK residences with Jodi flat options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#e11d48]" />
                    <span>45+ Curated lifestyle, wellness &amp; fitness amenities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#e11d48]" />
                    <span>Dedicated 10th Floor sky recreation level &amp; clubhouse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#e11d48]" />
                    <span>High-Street retail convenience on the ground floor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#e11d48]" />
                    <span>
                      MahaRERA Registered Project: <strong className="text-[#1e293b]">P52000054448</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT CONFIGURATION
      ===================================================== */}
      <section id="project" className="bg-[#f7f5f1] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-start">
            <SectionLabel text="PROJECT DETAILS" />
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Project Configuration
            </h2>
            <p className="mt-4 max-w-2xl text-left text-[#607284]">
              Thoughtfully planned spaces designed for modern lifestyles, convenience and comfort.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-xl border border-gray-300 bg-white">
            <div className="grid grid-cols-3 bg-[#293d4d] px-6 py-5 text-sm font-semibold uppercase tracking-wide text-white">
              <div>Typology</div>
              <div>Carpet Area</div>
              <div className="text-center">Price</div>
            </div>

            <ConfigRow
              type="1 BHK"
              area="360 | 382 | 395 Sq. Ft."
              onClick={() => setShowForm(true)}
            />
            <ConfigRow
              type="2 BHK"
              area="584 Sq. Ft."
              onClick={() => setShowForm(true)}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PLANS SECTION
      ===================================================== */}
      <section id="plans" className="w-full px-6 py-14 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-left">
            <SectionLabel text="PLANS" />
            <h2 className="mt-2 text-3xl font-semibold uppercase tracking-tight text-[#1e293b] md:text-4xl">
              Floor Plans
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[#607284]">
              Where Smooth Efficiency Meets Meticulous Planning
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* 1 BHK CARD */}
            <div className="group overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative flex h-[240px] items-center justify-center bg-[#f2ede4] p-4">
                <img
                  src="/hill1 bhk.png"
                  alt="1 BHK Floor Plan"
                  className="h-full w-full object-cover filter blur-[3px]"
                />
                <button
                  onClick={() => setShowForm(true)}
                  className="absolute z-10 rounded-full bg-[#293d4d] px-6 py-2 text-xs font-semibold text-white shadow-md transition hover:bg-[#b89058]"
                >
                  Enquire Now
                </button>
              </div>
              <div className="border-t border-gray-100 bg-white py-3 text-center">
                <p className="text-sm font-semibold text-[#293d4d]">
                  1 BHK <span className="mx-1 font-normal text-gray-300">|</span> 360 | 382 | 395 Sq. Ft.
                </p>
              </div>
            </div>

            {/* 2 BHK CARD */}
            <div className="group overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative flex h-[240px] items-center justify-center bg-[#f2ede4] p-4">
                <img
                  src="/hill2 bhk.png"
                  alt="2 BHK Floor Plan"
                  className="h-full w-full object-cover filter blur-[3px]"
                />
                <button
                  onClick={() => setShowForm(true)}
                  className="absolute z-10 rounded-full bg-[#293d4d] px-6 py-2 text-xs font-semibold text-white shadow-md transition hover:bg-[#b89058]"
                >
                  Enquire Now
                </button>
              </div>
              <div className="border-t border-gray-100 bg-white py-3 text-center">
                <p className="text-sm font-semibold text-[#293d4d]">
                  2 BHK <span className="mx-1 font-normal text-gray-300">|</span> 584 Sq. Ft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AMENITIES SECTION
      ===================================================== */}
      <section id="amenities" className="w-full bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-left">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#1e293b] md:text-4xl">
              AMENITIES
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-6">
              <div>
                <h3 className="border-b border-gray-200 pb-3 text-base font-semibold text-[#1e293b]">
                  Health &amp; Fitness
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-[#475569]">
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Swimming Pool</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Gym - Fitness Studio</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Meditation Room / Yoga Room</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Jogging &amp; Walking Track</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Multipurpose Court</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Sauna Room &amp; Steam Room</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Kids Pool</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="border-b border-gray-200 pb-3 text-base font-semibold text-[#1e293b]">
                  10th Floor Recreational
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-[#475569]">
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Modern Clubhouse</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Star Gazing Telescope</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Pool Side Deck</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Zen Garden &amp; Gazebo</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Toddlers Play Area &amp; Play Garden</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Indoor Games (Table Tennis, Carrom, Chess)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d35445]" />
                    <span>Mini Theater</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT: AMENITIES IMAGE */}
                      <div className="relative lg:col-span-6 h-[380px] overflow-hidden rounded-3xl">
            <img
              src={images[index]}
              alt="Amenity"
              className="h-full w-full object-cover"
            />

            {/* Left Arrow */}
            <button
              onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-9 h-9 rounded-full text-lg"
            >
              ❮
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-9 h-9 rounded-full text-lg"
            >
              ❯
            </button>
          </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP SECTION
      ===================================================== */}
      <section className="border-t border-gray-200">
        <iframe
          title="9 Meraki Panvel Location"
          src="https://maps.google.com/maps?q=Chhatrapati%20Shivaji%20Maharaj%20University,%20Panvel&output=embed"
          className="h-[500px] w-full border-0"
          loading="lazy"
        />
        <div className="mx-auto max-w-[1200px] px-6 py-8 text-center">
          <p className="text-[#607284]">
            <strong className="text-[#293d4d]">Site Address:</strong>{" "}
            Before Shedung Toll Naka, Opp. Chhatrapati Shivaji Maharaj University, Old Mumbai-Pune Highway, Panvel.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT / CTA SECTION
      ===================================================== */}
      <section id="contact" className="my-10 bg-[#f8f9fa] border border-gray-100 px-6 py-16 text-slate-800 sm:my-14 lg:px-12 lg:py-20">
  <div className="mx-auto max-w-[1200px]">
    <div className="text-left text-black [&_*]:text-black">
      <SectionLabel text="CONTACT US" />
      <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        Experience 9 Meraki
      </h2>
      <p className="mt-4 max-w-2xl text-left text-sm leading-relaxed text-slate-500 sm:text-base">
        Experience the perfect blend of luxury, convenience and connectivity at 9 Meraki, Panvel.
      </p>
    </div>

    <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <a
        href="tel:+918097515151"
        className="inline-flex items-center justify-center rounded-full bg-[#b89058] px-7 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#a37c45]"
      >
        Call +91 8097 51 51 51
      </a>
      <button
        onClick={() => setShowForm(true)}
        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-800 shadow-sm transition duration-300 hover:bg-slate-50 hover:border-slate-400"
      >
        Book Site Visit
      </button>
    </div>

    <div className="mt-10 border-t border-slate-200 pt-6 text-left">
      <p className="text-xs uppercase tracking-[2px] text-slate-500 font-medium">
        MahaRERA Registration No.
      </p>
      <p className="mt-1 text-base font-semibold tracking-wide text-[#b89058] sm:text-lg">
        P52000054448
      </p>
    </div>
  </div>
</section>
      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />

      {/* =====================================================
          ENQUIRY MODAL
      ===================================================== */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5">
          <div className="relative w-full max-w-[480px] rounded-2xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-5 top-4 text-2xl text-gray-500"
            >
              ×
            </button>
            <div className="text-center">
              <div className="text-xl tracking-[4px] text-[#293d4d]">9 MERAKI</div>
              <p className="mt-1 text-[9px] tracking-[5px] text-[#b89058]">PANVEL</p>
              <h2 className="mt-7 text-3xl font-semibold text-[#293d4d]">Enquire Now</h2>
              <p className="mt-2 text-gray-500">Get project details and arrange a site visit.</p>
            </div>
            <form
              className="mt-7 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our team will contact you shortly.");
                setShowForm(false);
              }}
            >
              <input
                required
                type="text"
                placeholder="First Name*"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#293d4d]"
              />
              <input
                required
                type="tel"
                placeholder="Mobile Number*"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#293d4d]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#293d4d]"
              />
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none">
                <option>Select Requirement</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>Site Visit</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#293d4d] py-4 font-semibold text-white transition hover:bg-[#b89058]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================
          BACK TO TOP
      ===================================================== */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#d35445] text-xl text-white shadow-xl"
      >
        ↑
      </button>

    </main>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <p className={`text-sm font-semibold tracking-[3px] ${light ? "text-[#d2b27e]" : "text-[#b89058]"}`}>
      {text}
    </p>
  );
}

function ConfigRow({ type, area, onClick }: { type: string; area: string; onClick: () => void }) {
  return (
    <div className="grid grid-cols-3 items-center border-t border-gray-200 px-6 py-6">
      <div className="font-medium">{type}</div>
      <div className="text-[#607284]">{area}</div>
      <div className="text-center">
        <button
          onClick={onClick}
          className="rounded-full border border-[#293d4d] px-6 py-2 text-sm transition hover:bg-[#293d4d] hover:text-white"
        >
          View Price
        </button>
      </div>
    </div>
  );
}