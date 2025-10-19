import React from "react";

const RegularAdmissionSkeleton = () => {
  return (
    <div className="min-h-screen w-full bg-white text-[#31393C] animate-pulse">
      {/* Header Section */}
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Logo Placeholder */}
            <div className="h-20 w-20 bg-white/20 rounded-lg" />

            {/* Text Placeholder */}
            <div className="flex-1 space-y-3">
              <div className="h-6 w-3/4 bg-white/30 rounded-md"></div>
              <div className="h-4 w-1/2 bg-white/30 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="px-8 py-5 space-y-4">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className="h-5 w-24 bg-gray-200 rounded-md"></div>
              <div className="h-5 w-12 bg-gray-200 rounded-md"></div>
              <div className="h-5 w-32 bg-gray-200 rounded-md"></div>
            </div>

            {/* Paragraph Lines */}
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded-md"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded-md"></div>
              <div className="h-4 w-4/5 bg-gray-200 rounded-md"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded-md"></div>
            </div>

            {/* Button Placeholder */}
            <div className="h-10 w-40 bg-[#3E96F4]/20 rounded-md mt-6"></div>
          </div>

          {/* Right Column (Form) */}
          <div className="px-8 py-5">
            <div className="h-[500px] w-full bg-gray-100 rounded-2xl shadow-inner"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularAdmissionSkeleton;
