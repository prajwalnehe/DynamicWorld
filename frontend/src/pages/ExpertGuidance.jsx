import {
  Award,
  Clock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

const BRAND = {
  blue: "#3E96F4",
  text: "#31393C",
  chip: "#EDEEEB",
  card: "#FFF",
  accent: "#CCC7BF",
};

const fallbackExperts = [
  {
    name: "Priyesh",
    experience: "15+ Years Experience",
    phone: "7738846286",
    specialty: "Admissions Strategy",
    rating: 4.9,
  },
  {
    name: "Amit",
    experience: "10+ Years Experience",
    phone: "7887881060",
    specialty: "UGC Online & Distance",
    rating: 4.8,
  },
  {
    name: "Supriya",
    experience: "11+ Years Experience",
    phone: "976965807",
    specialty: "Career Counselling",
    rating: 4.7,
  },
  {
    name: "Amar",
    experience: "12+ Years Experience",
    phone: "7887881060",
    specialty: "Placements & Internships",
    rating: 4.8,
  },
];

function normalizePhone(p = "") {
  const digits = (p.match(/\d/g) || []).join("");
  return digits.slice(-10);
}

function Stars({ value = 4.8 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < full ? "fill-current" : half && i === full ? "fill-current" : ""
          }`}
        />
      ))}
      <span className="ml-1 text-xs text-gray-600">{value.toFixed(1)}</span>
    </div>
  );
}

export default function ExpertGuidance({
  experts = fallbackExperts,
  showHeader = true,
  title = "Receive Expert Guidance To Make Right Decisions.",
  subtitle = "We are a team of top leading education counseling experts.",
}) {
  const safeExperts = (experts?.length ? experts : fallbackExperts).map(
    (e) => ({
      ...e,
      phoneNorm: normalizePhone(e.phone),
    })
  );

  return (
    <section
      className="w-full bg-gray-50 text-[color:var(--text)]"
      style={{
        "--brand": BRAND.blue,
        "--text": BRAND.text,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 md:py-14">
        {showHeader && (
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-black/5">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-xs font-medium text-gray-700">
                Verified Counsellors
              </span>
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#31393C] leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm md:text-base text-[#31393C]/90 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Clock className="h-4 w-4" />
            <span>Mon–Sat, 9:00 AM – 8:00 PM</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-black/5">
              <Award className="h-4 w-4" />
              <span>UGC • NAAC • AICTE guidance</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {safeExperts.map((expert, idx) => {
            const tel = expert.phoneNorm
              ? `tel:+91${expert.phoneNorm}`
              : undefined;
            const wa = expert.phoneNorm
              ? `https://wa.me/91${expert.phoneNorm}`
              : undefined;

            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-5 md:p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="mx-auto h-16 w-16 rounded-2xl bg-[color:var(--brand)]/90 text-white grid place-items-center text-2xl font-semibold shadow-sm">
                  {expert?.name?.[0] ?? "E"}
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-[#31393C]">
                    {expert.name}
                  </h3>
                  {expert.specialty && (
                    <p className="text-sm text-gray-700 mt-0.5">
                      {expert.specialty}
                    </p>
                  )}
                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    {expert.experience}
                  </p>
                  <div className="mt-2 flex justify-center">
                    <Stars value={expert.rating ?? 4.8} />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-3">
                  <a
                    href={tel ?? "#"}
                    aria-label={`Call ${expert.name}`}
                    className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium text-white ${
                      tel
                        ? "bg-[color:var(--brand)] hover:brightness-110"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (!tel) e.preventDefault();
                    }}
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={wa ?? "#"}
                    aria-label={`WhatsApp ${expert.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium ring-1 ring-black/10 ${
                      wa
                        ? "bg-white hover:bg-gray-50"
                        : "bg-gray-100 cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (!wa) e.preventDefault();
                    }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>

                <div className="mt-4 flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand)] px-3 py-1 text-xs font-medium">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Free Counselling
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 md:mt-10 grid place-items-center">
          <a
            href="#dynamic-form"
            className="inline-flex items-center justify-center rounded-2xl bg-[color:var(--brand)] px-5 py-3 text-white text-sm md:text-base font-semibold shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--brand)]"
          >
            Get Personalised Guidance
          </a>
          <p className="mt-2 text-xs text-gray-600">
            No fees. Quick call in 5–10 minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
