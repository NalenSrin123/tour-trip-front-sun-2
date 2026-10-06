export default function StatusBadge({ status }) {
  const active = status === "ACTIVE";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
        active
          ? "bg-emerald-100 text-emerald-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {status}
    </span>
  );
}