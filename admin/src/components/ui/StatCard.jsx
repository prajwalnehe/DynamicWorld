import PropTypes from "prop-types";

const StatCard = ({ icon: Icon, title, value, subtitle, tone = "slate" }) => {
  const tones = {
    slate: "bg-slate-100 text-slate-900",
    blue: "bg-blue-100 text-blue-900",
    emerald: "bg-emerald-100 text-emerald-900",
    violet: "bg-violet-100 text-violet-900",
    amber: "bg-amber-100 text-amber-900",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
          {Icon ? <Icon className="h-5 w-5" /> : null}
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tones[tone] ?? tones.slate}`}>
          {subtitle}
        </span>
      </div>
      <h3 className="mt-6 text-sm font-medium text-slate-500">{title}</h3>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  );
};

StatCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subtitle: PropTypes.string,
  tone: PropTypes.oneOf(["slate", "blue", "emerald", "violet", "amber"]),
};

StatCard.defaultProps = {
  icon: null,
  subtitle: "",
  tone: "slate",
};

export default StatCard;

