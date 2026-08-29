export default function FloorPlan() {
  return (
    <div className="min-h-screen bg-white pt-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight mb-8">Floor Plans</h1>
        <div className="h-[1px] w-full bg-gray-200 mb-12"></div>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl mb-16">
          Intelligently designed layouts that maximize space, natural light, and ventilation. Discover the perfect configuration for your lifestyle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { title: "1 BHK Premium", size: "450 - 550 Sq.Ft." },
            { title: "2 BHK Luxury", size: "750 - 850 Sq.Ft." },
            { title: "3 BHK Ultra Luxury", size: "1100 - 1350 Sq.Ft." },
            { title: "Commercial Spaces", size: "Customizable" }
          ].map((plan, i) => (
            <div key={i} className="border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-medium mb-4">{plan.title}</h3>
              <p className="text-xl text-gray-500 mb-8">{plan.size}</p>
              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
                Download Brochure
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
