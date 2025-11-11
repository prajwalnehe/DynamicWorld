import { Menu, Search } from "lucide-react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { entityByPath } from "../../data/entities";

const TopBar = ({ onMenuClick }) => {
  const location = useLocation();
  const entity = entityByPath[location.pathname];

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-10">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-md border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
            {entity?.name ?? "Dashboard"}
          </h1>
          <p className="text-xs text-slate-500 sm:text-sm">
            {entity?.description ??
              "Monitor content pipelines and data from Dynamic World properties."}
          </p>
        </div>
      </div>
      <div className="hidden items-center gap-2 text-sm text-slate-500 md:flex">
        <Search className="h-4 w-4" />
        API Base:{" "}
        <span className="font-medium text-slate-700">
          {import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5000/api/v1"}
        </span>
      </div>
    </header>
  );
};

TopBar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default TopBar;

