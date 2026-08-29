export default function Gallery() {
  return (
    <div className="min-h-screen bg-white pt-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight mb-8">Project Gallery</h1>
        <div className="h-[1px] w-full bg-gray-200 mb-12"></div>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl mb-16">
          Take a visual tour of our beautifully crafted spaces, showcasing premium finishes and architectural brilliance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-100 rounded-2xl overflow-hidden aspect-square relative group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-lg font-medium">View Image</span>
              </div>
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Image {i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
