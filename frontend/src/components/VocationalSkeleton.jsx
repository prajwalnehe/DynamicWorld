import React from "react";

const VocationalSkeleton = () => {
  return (
    <div className="min-h-screen w-full bg-white animate-pulse">
      {/* Header Section */}
      <div className="bg-[#3E96F4] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          {/* Chip */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 h-5 w-28"></div>

          {/* Title + Subtitle */}
          <div className="mt-3 space-y-2">
            <div className="h-6 w-64 bg-white/30 rounded"></div>
            <div className="h-4 w-80 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div className="max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 shadow-sm bg-white rounded-2xl overflow-hidden">
          {/* Left Skeleton */}
          <div className="px-4 lg:px-8 py-6 space-y-4">
            <div className="space-y-3">
              <div className="h-3.5 w-full bg-gray-200 rounded"></div>
              <div className="h-3.5 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-3.5 w-4/5 bg-gray-200 rounded"></div>
              <div className="h-3.5 w-3/4 bg-gray-200 rounded"></div>
            </div>

            {/* Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300"></span>
                  <div className="h-3 w-32 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>

            {/* CTA Button Placeholder */}
            <div className="mt-6 h-10 w-40 bg-gray-300 rounded-full"></div>
          </div>

          {/* Right Skeleton (DynamicForm) */}
          <div className="p-5 bg-gray-50 border-l border-gray-200 space-y-4">
            <div className="h-5 w-56 bg-gray-300 rounded"></div>
            <div className="space-y-3 mt-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 rounded-md"></div>
              ))}
              <div className="h-12 w-full bg-gray-300 rounded-lg mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocationalSkeleton;
