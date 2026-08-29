export default function Location() {
  return (
    <div className="min-h-screen bg-white pt-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight mb-8">Prime Locations</h1>
        <div className="h-[1px] w-full bg-gray-200 mb-12"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 mb-10">
              Strategically located in the heart of the city&apos;s most rapidly developing areas, ensuring excellent connectivity, high ROI, and convenience.
            </p>
            <div className="flex flex-col gap-8">
              {[
                { label: "Railway Station", time: "5 Mins" },
                { label: "Upcoming Metro", time: "2 Mins" },
                { label: "Shopping Mall", time: "10 Mins" },
                { label: "International Airport", time: "45 Mins" },
                { label: "Top Schools & Hospitals", time: "Within 5km radius" }
              ].map((loc, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="text-xl font-medium">{loc.label}</span>
                  <span className="text-lg text-gray-500">{loc.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-[2rem] w-full h-[500px] flex items-center justify-center text-gray-400 text-xl font-medium">
            Interactive Map Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}