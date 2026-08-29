export default function Price() {
  return (
    <div className="min-h-screen bg-white pt-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight mb-8">Pricing</h1>
        <div className="h-[1px] w-full bg-gray-200 mb-12"></div>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl mb-16">
          Transparent pricing and flexible payment plans designed to make your dream property a reality.
        </p>
        <div className="bg-[#111] text-white p-10 md:p-16 rounded-[2rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <p className="text-gray-400 text-lg uppercase tracking-wider mb-2">Starting From</p>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight">₹ 65 Lakhs*</h2>
            <p className="text-gray-400 mt-2">*T&C Apply. Government taxes and registration extra.</p>
          </div>
          <button className="bg-white text-black px-10 py-5 rounded-full text-xl font-medium hover:bg-gray-200 transition-colors">
            Get Detailed Costing
          </button>
        </div>
      </div>
    </div>
  );
}
