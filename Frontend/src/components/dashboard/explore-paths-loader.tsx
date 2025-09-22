
"use client";

export default function ExplorePathsLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[70vh] bg-[#F8F9FA] animate-in fade-in-50 duration-500">
      <div className="relative flex items-center justify-center">
        <div 
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-60 animate-pulse-loader"
          style={{
            background: 'radial-gradient(circle, #A9D6E5 0%, #A8DAB5 100%)',
          }}
        />
        <div className="relative flex flex-col items-center text-center">
          <p className="text-base font-medium text-[#5f6368]">Supplementing with AI results...</p>
        </div>
      </div>
    </div>
  );
}
