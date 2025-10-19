import React from "react";

const UniversitySkeleton = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 animate-pulse">
      {/* University Header */}
      <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="w-full sm:w-48 h-28 bg-gray-200 rounded-lg" />
          <div className="flex-1 space-y-3">
            <div className="h-6 sm:h-7 w-2/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6 space-y-3">
        <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Online Education */}
      <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6 space-y-3">
        <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Programs Table */}
      <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
          <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex justify-between gap-6 bg-gray-50 p-3 rounded-lg"
              >
                <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rankings */}
      <div className="rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-6 space-y-3">
        <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default UniversitySkeleton;
