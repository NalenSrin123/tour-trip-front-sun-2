const styles = {
  ACTIVE: "bg-emerald-50 text-emerald-600",
  PENDING: "bg-amber-50 text-amber-600",
  INACTIVE: "bg-slate-100 text-slate-500",
  DEACTIVATED: "bg-slate-100 text-slate-500",
  SUSPENDED: "bg-red-50 text-red-600",
};

const dots = {
  ACTIVE: "bg-emerald-500",
  PENDING: "bg-amber-500",
  INACTIVE: "bg-slate-400",
  DEACTIVATED: "bg-slate-400",
  SUSPENDED: "bg-red-500",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${styles[status] ?? "bg-slate-100 text-slate-500"}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[status] ?? "bg-slate-400"}`} />
      {status}
    </span>
  );
}
