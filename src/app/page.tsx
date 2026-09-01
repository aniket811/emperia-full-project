import Navbar from "@/components/Navbar";
import HeroParallax from "@/components/HeroParallax";
import VideoSection from "@/components/VideoSection";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <HeroParallax />

      {/* ================= VIDEO ================= */}
      <VideoSection />

      {/* =========================================================
          OUR LANDMARKS
      ========================================================= */}
     {/* =========================================================
          OUR LANDMARKS SECTION
      ========================================================= */}
      <section className="bg-white py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">

          {/* SECTION HEADER */}
          <div className="text-center mb-8 md:mb-12">
          <p className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-[4px] text-black mb-3">
              OUR LANDMARKS
          </p>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#151515] max-w-3xl mx-auto leading-tight">
              Spaces built for every ambition.
            </h2>
          </div>

          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* RESIDENTIAL */}
            <a
              href="/residential"
              className="group relative block h-[360px] md:h-[440px] overflow-hidden rounded-[24px] bg-gray-100 shadow-sm transition hover:shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90"
                alt="Residential"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute top-6 md:top-8 left-6 md:left-8">
                <h3 className="text-white text-3xl md:text-4xl font-bold tracking-wide drop-shadow-md">
                  Residential
                </h3>
              </div>

              <div className="absolute right-6 md:right-8 bottom-6 md:bottom-8 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/60 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white text-xl md:text-2xl transition duration-300 group-hover:bg-white group-hover:text-black">
                →
              </div>
            </a>

            {/* COMMERCIAL */}
            <a
              href="/commercial"
              className="group relative block h-[360px] md:h-[440px] overflow-hidden rounded-[24px] bg-gray-100 shadow-sm transition hover:shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
                alt="Commercial"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute top-6 md:top-8 left-6 md:left-8">
                <h3 className="text-white text-3xl md:text-4xl font-bold tracking-wide drop-shadow-md">
                  Commercial
                </h3>
              </div>

              <div className="absolute right-6 md:right-8 bottom-6 md:bottom-8 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/60 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white text-xl md:text-2xl transition duration-300 group-hover:bg-white group-hover:text-black">
                →
              </div>
            </a>

          </div>
        </div>
      </section>
      {/* =========================================================
          MAKE AN ENQUIRY
      ========================================================= */}
      
      <section
      id="enquiry"
      className="relative bg-light md:pt-6 pb-6  px-6 md:px-10"
    >
      <div className="mx-auto max-w-3xl">
        <EnquiryForm />
      </div>
    </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />

    </main>
  );
}