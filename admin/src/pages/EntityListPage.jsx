import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import DataTable from "../components/ui/DataTable";
import SearchInput from "../components/ui/SearchInput";
import { entityByPath } from "../data/entities";
import { useEntityQuery } from "../hooks/useEntityQuery";

const EntityListPage = () => {
  const location = useLocation();
  const path =
    location.pathname.replace(/\/$/, "") || "/";
  const entity = entityByPath[path];

  const {
    data = [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useEntityQuery(entity, { enabled: Boolean(entity) });
  const [search, setSearch] = useState("");

  const filteredRows = useMemo(() => {
    if (!search.trim()) return data;
    const lower = search.toLowerCase();
    return data.filter((row) =>
      entity.searchKeys.some((key) => {
        const value = getNestedValue(row, key);
        return value?.toString().toLowerCase().includes(lower);
      })
    );
  }, [data, search, entity.searchKeys]);

  if (!entity) {
    return (
      <div className="rounded-2xl border border-rose-200 bg-white p-6 text-rose-700 shadow-sm">
        <h2 className="text-lg font-semibold">Unknown collection</h2>
        <p className="mt-2 text-sm">
          We couldn’t find a configuration for{" "}
          <code className="rounded bg-rose-100 px-1.5 py-0.5 text-xs text-rose-600">
            {path}
          </code>
          . Please check your navigation settings.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            {entity.name}
          </h2>
          <p className="text-sm text-slate-500">{entity.description}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder={`Search ${entity.name.toLowerCase()}…`}
          />
          <button
            type="button"
            onClick={() => refetch()}
            className="rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 focus:outline-none focus:ring"
            disabled={isFetching}
          >
            {isFetching ? "Refreshing…" : "Refresh"}
          </button>
        </div>
      </div>

      {isError ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
          <h3 className="text-base font-semibold">Unable to load data</h3>
          <p className="mt-2 text-sm">
            {error?.response?.data?.message ?? error?.message ?? "Unknown error"}
          </p>
          <button
            type="button"
            onClick={() => refetch()}
            className="mt-4 rounded-full border border-rose-200 bg-white px-5 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-100 focus:outline-none focus:ring"
          >
            Try again
          </button>
        </div>
      ) : (
        <DataTable
          columns={entity.columns}
          rows={filteredRows}
          isLoading={isLoading}
          emptyMessage={
            search
              ? "No matches found for your search terms."
              : "No records available yet."
          }
        />
      )}
    </div>
  );
};

const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

export default EntityListPage;

