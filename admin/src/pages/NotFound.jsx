import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
      404
    </p>
    <h2 className="mt-3 text-2xl font-semibold text-slate-900">
      This page wandered off.
    </h2>
    <p className="mt-2 text-sm text-slate-500">
      We couldn’t find the collection you were trying to reach. Double-check the
      URL or hop back to the dashboard to continue exploring.
    </p>
    <Link
      to="/"
      className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
    >
      Return to dashboard
    </Link>
  </div>
);

export default NotFound;

