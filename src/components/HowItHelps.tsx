import React from "react";

export default function HowItHelps() {
  const services = [
    {
      num: "1",
      title: "Buy",
      desc: "Buy smarter with expert agents backed by mortgage, legal, and appraisal pros—dialed in to get you the best deal, fast. We've done this over 10,000 times, and we know what wins.",
      bgImage: "url('/city_street.png')",
      active: true,
    },
    {
      num: "2",
      title: "Sell",
      desc: "Sell fast, sell high. Your listing gets pro staging, strategic pricing, constant open houses, and agents who never stop working until the right buyer signs.",
      bgImage: "none",
      active: false,
    },
    {
      num: "3",
      title: "Rent",
      desc: "Access hidden rentals before they hit the market through agents who know every landlord in town. With decades of experience, we unlock the best deals you won't find online.",
      bgImage: "none",
      active: false,
    },
  ];

  return (
    <section className="bg-[#111] text-white overflow-hidden py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-12">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-[-1px]">
          HOW EMPERIA
          <br />
          <span className="text-gray-400">Can Help You</span>
        </h2>
      </div>

      <div className="w-full flex flex-col border-t border-[#333]">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full border-b border-[#333] relative group cursor-pointer overflow-hidden transition-all duration-500"
          >
            {/* Background Image with Zoom Effect */}
            {service.bgImage !== "none" && (
              <>
                <div 
                  className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  style={{
                    backgroundImage: service.bgImage,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                {/* Dark overlay for background image */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-500"></div>
              </>
            )}

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              <div className="flex gap-8 md:w-1/3">
                <div className="w-8 h-8 rounded-full border border-gray-500 flex justify-center items-center shrink-0 text-sm mt-1">
                  {service.num}
                </div>
                <p className="text-sm md:text-base leading-relaxed text-gray-300 font-medium max-w-[300px]">
                  {service.desc}
                </p>
              </div>

              <div className="md:w-1/3 flex justify-center">
                <h3 className={`text-[clamp(3rem,6vw,6.5rem)] font-medium leading-none tracking-tight transition-all duration-300 ${service.active ? 'border-b-4 border-white' : 'group-hover:text-gray-300'}`}>
                  {service.title}
                </h3>
              </div>

              <div className="md:w-1/3 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
