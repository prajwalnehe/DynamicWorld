import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs05 = () => {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#31393C] via-[#31393C] to-[#3E96F4] px-6 sm:px-10 md:px-16 py-20">
      <div className="absolute inset-0 bg-[#31393C]/60 mix-blend-multiply" />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white text-center mb-10 max-w-4xl leading-snug">
        Join us to make a difference in people's lives.
        </h1>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <NavLink
            to={"/career"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold text-[#31393C] shadow-[0_18px_40px_rgba(15,23,42,0.35)] transition-all duration-300 hover:scale-[1.04] hover:bg-[#EDEEEB] hover:text-[#31393C]"
          >
            Our Careers
          </NavLink>
        </button>
      </div>
    </section>
  );
};

export default AboutUs05;
