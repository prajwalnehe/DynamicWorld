import React from "react";
import { CheckSquare, ArrowRight } from "lucide-react";

const COLORS = {
  brand: "#3E96F4",
  text: "#31393C",
  white: "#FFFFFF",
  chip: "#EDEEEB",
};

// Reusable Action Button
const ActionButton = ({ text, as: As = "button", href, type = "primary", className = "" }) => {
  const base =
    "group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-medium text-base sm:text-lg md:text-xl transition-all duration-200 ease-in-out w-full sm:w-auto";
  const primary = `bg-[${COLORS.brand}] hover:bg-blue-600 text-white shadow-lg shadow-blue-600/30`;
  const ghost = "bg-white text-[#31393C] border border-gray-200 hover:bg-gray-50";
  const styles = type === "primary" ? primary : ghost;

  if (As === "a" && href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        <span>{text}</span>
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`}>
      <span>{text}</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
};

// Reusable Feature Item
const FeatureItem = ({ text }) => (
  <div className="flex items-start text-sm sm:text-base text-[#31393C]">
    <CheckSquare className="w-5 h-5 mr-2 mt-0.5" style={{ color: COLORS.brand }} />
    <span className="font-medium">{text}</span>
  </div>
);

// Reusable Stat Card
const StatCard = ({ count, description }) => (
  <div className="p-4 flex flex-col items-center justify-center text-center rounded-xl">
    <div
      className="text-3xl md:text-4xl lg:text-5xl font-semibold px-6 py-3 rounded-xl mb-2"
      style={{ backgroundColor: COLORS.brand, color: COLORS.white }}
    >
      {count}
    </div>
    <p className="text-xs sm:text-sm md:text-base font-medium leading-tight text-[#31393C]">
      {description}
    </p>
  </div>
);

// === SECTION 1 ===
 export const BusinessPartner01 = () => {
  const courses = [
    { label: "BA", value: "BCom" },
    { label: "MBA", value: "MCA" },
    { label: "BTech", value: "BEd" },
    { label: "BBA", value: "MSc" },
    { label: "BCA", value: "MCom" },
    { label: "LLB", value: "DPHarm" },
    { label: "BPharm", value: "PH.D" },
    { label: "BSc", value: "MA" },
  ];

  return (
    <section className="text-sm lg:text-base">
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-8 mt">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative p-6 sm:p-10 md:p-14 lg:p-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-3 text-white">
              Become Our <span className="text-[#3E96F4]">Business Partner</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 text-white">
              Or Just Refer &amp; Earn — Start Earning in Lakhs
            </p>

            <div className="inline-flex items-center gap-3 rounded-2xl bg-white shadow-xl border border-gray-200 px-5 md:px-6 py-3">
              <span className="font-semibold text-[#3E96F4]">Earn ₹10,000 – ₹50,000</span>
              <span className="text-gray-700">per admission</span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <ActionButton
                as="a"
                href="https://wa.me/917887881060"
                text="Partner With Us"
                type="primary"
              />
              <ActionButton
                as="a"
                href="#edu-business"
                text="Explore Opportunities"
                type="ghost"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Business in Education Sector */}
      <div id="edu-business" className="rounded-2xl shadow-xl p-5 sm:p-8 md:p-10 mb-8 bg-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[#31393C]">
          Business in Education Sector
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
          <div className="space-y-2">
            <FeatureItem text="Online Education" />
            <FeatureItem text="Distance Education" />
            <FeatureItem text="Regular Education" />
            <FeatureItem text="Overseas Education" />
          </div>
          <div className="space-y-2">
            <FeatureItem text="College Admissions" />
            <FeatureItem text="Immigration & Visa Services" />
            <FeatureItem text="Attestation & Apostille Services" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-gray-200 py-6 mb-8">
          <StatCard
            count="1000+"
            description="Graduation, Post-Graduation, Diploma & Certificate Courses"
          />
          <StatCard
            count="100+"
            description="UGC-entitled top ranked Indian universities"
          />
          <StatCard count="4000+" description="Top ranked global universities" />
        </div>

        {/* Courses Table */}
        <div className="rounded-2xl overflow-hidden border border-gray-200">
          <div className="p-3 text-center font-semibold text-white" style={{ backgroundColor: COLORS.brand }}>
            X–XII Science | Commerce | Arts
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 divide-x divide-gray-200 bg-gray-50 text-[#31393C]">
            {courses.map((c, i) => (
              <div key={i} className="p-2 text-center hover:bg-white transition-colors">
                <p className="font-semibold">{c.label}</p>
                <p className="opacity-80">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// === SECTION 2 ===
export const BusinessPartner02 = () => {
  const points = [
    "Access 100+ UGC-entitled top ranked Indian universities.",
    "Access 4000+ top ranked international universities.",
    "Guide admissions for Medical, Engineering, Management & more (India & abroad).",
    "Training and marketing support provided.",
    "Complete counselling material + 24×7 support.",
    "Work full-time, part-time, or just Refer & Earn (no investment).",
    "Earn industry-leading incentives with DYNAMIC WORLD.",
  ];

  const why = [
    "~20 years of experience & goodwill.",
    "12,000+ candidates enrolled since 2005.",
    "Authorised Admission Partner of 100+ UGC-approved universities.",
    "Authorised Admission Partner of 4000+ international universities.",
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6" style={{ color: COLORS.brand }}>
            Become Our Business Partner
          </h2>

          <ul className="space-y-4 text-gray-700 mb-8 text-sm lg:text-base leading-relaxed">
            {points.map((t, i) => (
              <li key={i} className="flex items-start">
                <span className="text-xl font-medium mr-3 -mt-0.5" style={{ color: COLORS.brand }}>
                  •
                </span>
                <p>{t}</p>
              </li>
            ))}
          </ul>

          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-10 mb-3 text-gray-800">
            Why DYNAMIC WORLD?
          </h3>
          <ul className="text-sm lg:text-base text-gray-600 space-y-2 mb-8 leading-relaxed list-disc list-inside">
            {why.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>

          <ActionButton
            as="a"
            href="https://wa.me/917887881060"
            text="Partner With Us"
            type="primary"
            className="mt-2"
          />
        </div>
      </div>
    </section>
  );
};
