import PropTypes from "prop-types";
import clsx from "clsx";

const DataTable = ({ columns, rows, isLoading, emptyMessage }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50 text-left">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.label}
                  scope="col"
                  className={clsx(
                    "px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm",
                    column.align === "center" && "text-center",
                    column.align === "right" && "text-right"
                  )}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {isLoading ? (
              <TableRowSkeleton columns={columns.length} />
            ) : rows.length > 0 ? (
              rows.map((row, rowIndex) => (
                <tr key={row._id ?? row.id ?? rowIndex} className="hover:bg-slate-50/80">
                  {columns.map((column) => (
                    <td
                      key={column.label}
                      className={clsx(
                        "px-5 py-3 align-top",
                        column.align === "center" && "text-center",
                        column.align === "right" && "text-right"
                      )}
                    >
                      {column.render ? column.render(row) : row[column.key] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-sm text-slate-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableRowSkeleton = ({ columns }) => (
  <>
    {Array.from({ length: 6 }).map((_, rowIndex) => (
      <tr key={rowIndex} className="animate-pulse">
        {Array.from({ length: columns }).map((__, colIndex) => (
          <td key={colIndex} className="px-5 py-4">
            <div className="h-3 rounded bg-slate-100" />
          </td>
        ))}
      </tr>
    ))}
  </>
);

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string,
      render: PropTypes.func,
      align: PropTypes.oneOf(["left", "center", "right"]),
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  emptyMessage: PropTypes.string,
};

DataTable.defaultProps = {
  rows: [],
  isLoading: false,
  emptyMessage: "Nothing to display just yet.",
};

TableRowSkeleton.propTypes = {
  columns: PropTypes.number.isRequired,
};

export default DataTable;

