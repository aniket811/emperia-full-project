export default function Amenities() {
  return (
    <div className="min-h-screen bg-white pt-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight mb-8">World-Class Amenities</h1>
        <div className="h-[1px] w-full bg-gray-200 mb-12"></div>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl mb-16">
          Experience a lifestyle of unparalleled luxury. Our projects feature state-of-the-art facilities designed for comfort, health, and recreation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Swimming Pool", "Fully Equipped Gym", "Clubhouse",
            "Landscaped Gardens", "Kids Play Area", "24/7 Security",
            "Jogging Track", "Indoor Games", "Multipurpose Hall"
          ].map((amenity, i) => (
            <div key={i} className="bg-[#f8f8f8] p-8 rounded-2xl flex items-center gap-4">
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <h3 className="text-2xl font-medium">{amenity}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
