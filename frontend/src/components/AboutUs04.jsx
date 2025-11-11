import React from "react";
import FounderImage from "../assets/FounderImage.jpg"; // Replace with actual image path

const AboutUs04 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] py-16 text-[#0f172a]">
      <div className="absolute inset-y-0 left-0 w-1/3 -translate-x-1/4 bg-gradient-to-r from-white to-transparent blur-3xl" />
      <div className="absolute inset-y-0 right-0 w-1/4 translate-x-1/3 bg-gradient-to-l from-[#e0f2fe]/60 to-transparent blur-2xl" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 sm:px-10">
        
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            {/* SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-[#1d4ed8]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422a12 12 0 0 1 0 6.844L12 14z"
              />
            </svg>
            <h2 className="text-2xl md:text-3xl font-bold">
              Founder's Message For Students
            </h2>
          </div>

          <p className="text-[#475569] leading-relaxed">
            "As a founder, I wholeheartedly believe that education is the cornerstone of personal growth, 
            the key to unlocking professional opportunities, a driving force behind the pursuit of ambitious goals, 
            and the legacy we leave in our rapidly evolving world. It's my mission to enlighten individuals about 
            the often underestimated significance of education and encourage a collective awakening to its pivotal role 
            in our lives, unveiling the countless benefits it holds for all of us."
          </p>

          <div>
            <p className="text-[#0f172a] font-semibold mt-4">Vinod Chaurasia</p>
            <p className="text-[#475569]">Founder & CEO</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={FounderImage}
            alt="Founder"
            className="w-full max-w-sm rounded-3xl border border-white shadow-[0_25px_60px_rgba(15,23,42,0.12)] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs04;
