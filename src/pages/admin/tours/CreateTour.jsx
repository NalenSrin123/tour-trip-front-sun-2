import { useEffect, useState } from "react";
import { ChevronDown, SaveCheck, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getSession } from "../../../services/authService";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "").replace(
  /\/+$/,
  "",
);
const apiUrl = (resource) => {
  const apiRoot = API_BASE_URL.endsWith("/api")
    ? API_BASE_URL
    : `${API_BASE_URL}/api`;
  return `${apiRoot}/${resource}`;
};
const sampleCategories = [
  { id: 1, name: "Adventure" },
  { id: 2, name: "Cultural" },
  { id: 3, name: "Beach" },
  { id: 4, name: "Family" },
  { id: 5, name: "Luxury" },
];
const sampleDestinations = [
  { id: 1, name: "Siem Reap, Cambodia" },
  { id: 2, name: "Kyoto, Japan" },
  { id: 3, name: "Tokyo, Japan" },
  { id: 4, name: "Phnom Penh, Cambodia" },
];

function getRecords(payload) {
  const candidates = [
    payload?.data?.data,
    payload?.data,
    payload?.categories,
    payload?.destinations,
    payload,
  ];
  return candidates.find(Array.isArray) ?? [];
}

function getToken() {
  try {
    return localStorage.getItem("admin_token") || getSession()?.token || "";
  } catch {
    return "";
  }
}

function CreateTour() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(sampleCategories);
  const [destinations, setDestinations] = useState(sampleDestinations);
  const [form, setForm] = useState({
    category_id: "",
    destination_id: "",
    title: "",
    duration_days: "",
    duration_nights: "",
    base_price: "",
    price_override: "",
    status: "draft",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    const controller = new AbortController();

    const loadOptions = async (resource, fallback, setOptions) => {
      try {
        const token = getToken();
        const response = await fetch(apiUrl(resource), {
          headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Unable to load options");

        const options = getRecords(await response.json())
          .filter((item) => item?.id != null)
          .map((item) => ({
            id: item.id,
            name: item.name ?? item.title ?? item.label ?? `Option ${item.id}`,
          }));
        setOptions(options.length ? options : fallback);
      } catch {
        if (!controller.signal.aborted) setOptions(fallback);
      }
    };

    loadOptions("categories", sampleCategories, setCategories);
    loadOptions("destinations", sampleDestinations, setDestinations);
    return () => controller.abort();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => ({ ...current, [name]: "" }));
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setFieldErrors({});

    const errors = {};
    if (!form.category_id) errors.category_id = "Select a category.";
    if (!form.destination_id) errors.destination_id = "Select a destination.";
    if (!form.title.trim()) errors.title = "Enter a tour title.";
    if (
      !form.duration_days ||
      !Number.isInteger(Number(form.duration_days)) ||
      Number(form.duration_days) < 1
    ) {
      errors.duration_days = "Enter a whole number of at least 1.";
    }
    if (
      form.duration_nights === "" ||
      !Number.isInteger(Number(form.duration_nights)) ||
      Number(form.duration_nights) < 0
    ) {
      errors.duration_nights = "Enter a whole number of 0 or more.";
    }
    if (
      form.base_price === "" ||
      !Number.isFinite(Number(form.base_price)) ||
      Number(form.base_price) < 0
    ) {
      errors.base_price = "Enter a valid base price.";
    }
    if (
      form.price_override !== "" &&
      (!Number.isFinite(Number(form.price_override)) ||
        Number(form.price_override) < 0)
    ) {
      errors.price_override = "Enter a valid price or leave this blank.";
    }
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      return;
    }

    const token = getToken();
    if (!token) {
      setErrorMessage(
        'No admin token found. Sign in first or set localStorage key "admin_token".',
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(apiUrl("tours"), {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category_id: Number(form.category_id),
          destination_id: Number(form.destination_id),
          title: form.title.trim(),
          duration_days: Number(form.duration_days),
          duration_nights: Number(form.duration_nights),
          base_price: Number(form.base_price),
          price_override:
            form.price_override === "" ? null : Number(form.price_override),
          status: form.status || "draft",
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        const serverErrors = Object.fromEntries(
          Object.entries(result.errors ?? {}).map(([field, messages]) => [
            field,
            Array.isArray(messages) ? messages[0] : String(messages),
          ]),
        );
        setFieldErrors(serverErrors);
        throw new Error(
          result.message ??
            "Unable to create tour. Please check the form and try again.",
        );
      }

      navigate("/tourlist", {
        replace: true,
        state: {
          successMessage: result.message ?? "Tour created successfully.",
        },
      });
    } catch (error) {
      setErrorMessage(
        error.message || "The API request failed. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen bg-[#f8f8fc] px-5 py-7">
          {/* Header */}
          <div className="mb-5 flex items-start justify-between">
            <div>
              <div className="mb-1 text-[13px] text-[#8b8fa8]">
                <button
                  type="button"
                  onClick={() => navigate("/tours")}
                  className="hover:text-indigo-600"
                >
                  Back to Tours
                </button>
                <span className="mx-1">›</span> Create Tour
              </div>

              <h1 className="text-[24px] font-bold text-[#111827]">
                Create Tour
              </h1>

              <p className="mt-1 text-[13px] text-[#737993]">
                Create a new tour package for your destination.
              </p>
            </div>

            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => navigate("/tours")}
                disabled={isSubmitting}
                className="h-10 rounded-md border border-[#d3d7e2] bg-white px-3 text-[13px] font-semibold text-[#344054] hover:bg-[#f8f9fc] disabled:opacity-60 sm:px-5"
              >
                <X size={16} className="inline-block sm:mr-2" />
                <span className="hidden sm:inline">Cancel</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-10 rounded-md bg-[#5146e5] px-5 text-[13px] font-semibold text-white hover:bg-[#453bd1] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <SaveCheck size={16} className="inline-block" />
                <span className="ml-2">
                  {isSubmitting ? "Creating..." : "Create Tour"}
                </span>
              </button>
            </div>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
            >
              {errorMessage}
            </div>
          )}

          {/* Basic Information */}
          <div className="mb-4 rounded-lg border border-[#dcdfea] bg-white p-5 shadow-sm">
            <div className="mb-4 border-b border-[#e1e3eb] pb-3">
              <h2 className="text-[14px] font-bold text-[#17233d]">
                Basic Information
              </h2>
            </div>

            {/* Tour Title */}
            <div className="mb-4">
              <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                Tour Title<span className="text-red-500">*</span>
              </label>

              <input
                id="title"
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="e.g., Kyoto Cultural Experience"
                className="h-11 w-full rounded-md border border-[#d5d9e3] bg-white px-4 text-[13px] text-[#26324a] outline-none placeholder:text-[#9ba3b8] focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
              />
              {fieldErrors.title && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.title}</p>
              )}
            </div>

            {/* Category + Destination */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                  Category<span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <select
                    id="category_id"
                    name="category_id"
                    value={form.category_id}
                    onChange={handleChange}
                    required
                    className="h-11 w-full appearance-none rounded-md border border-[#d5d9e3] bg-white px-4 pr-10 text-[13px] text-[#344054] outline-none focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#7c8499]"
                  />
                </div>
                {fieldErrors.category_id && (
                  <p className="mt-1 text-xs text-red-600">
                    {fieldErrors.category_id}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                  Destination<span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <select
                    id="destination_id"
                    name="destination_id"
                    value={form.destination_id}
                    onChange={handleChange}
                    required
                    className="h-11 w-full appearance-none rounded-md border border-[#d5d9e3] bg-white px-4 pr-10 text-[13px] text-[#344054] outline-none focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                  >
                    <option value="">Select a destination</option>
                    {destinations.map((destination) => (
                      <option key={destination.id} value={destination.id}>
                        {destination.name}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#7c8499]"
                  />
                </div>
                {fieldErrors.destination_id && (
                  <p className="mt-1 text-xs text-red-600">
                    {fieldErrors.destination_id}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Tour Details */}
          <div className="mb-4 rounded-lg border border-[#dcdfea] bg-white p-5 shadow-sm">
            <div className="mb-4 border-b border-[#e1e3eb] pb-3">
              <h2 className="text-[14px] font-bold text-[#17233d]">
                Tour Details
              </h2>
            </div>

            {/* Duration */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                  Duration (Days)<span className="text-red-500">*</span>
                </label>

                <input
                  id="duration_days"
                  name="duration_days"
                  type="number"
                  min="1"
                  step="1"
                  value={form.duration_days}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 5"
                  className="h-11 w-full rounded-md border border-[#d5d9e3] px-4 text-[13px] outline-none placeholder:text-[#9ba3b8] focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                />
                {fieldErrors.duration_days && (
                  <p className="mt-1 text-xs text-red-600">
                    {fieldErrors.duration_days}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                  Duration (Nights)<span className="text-red-500">*</span>
                </label>

                <input
                  id="duration_nights"
                  name="duration_nights"
                  type="number"
                  min="0"
                  step="1"
                  value={form.duration_nights}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 4"
                  className="h-11 w-full rounded-md border border-[#d5d9e3] px-4 text-[13px] outline-none placeholder:text-[#9ba3b8] focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                />
                {fieldErrors.duration_nights && (
                  <p className="mt-1 text-xs text-red-600">
                    {fieldErrors.duration_nights}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-4 rounded-lg border border-[#dcdfea] bg-white p-5 shadow-sm">
            <div className="mb-4 border-b border-[#e1e3eb] pb-3">
              <h2 className="text-[14px] font-bold text-[#17233d]">Pricing</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Base Price */}
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                  Base Price<span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[13px] text-[#7c8499]">
                    $
                  </span>

                  <input
                    id="base_price"
                    name="base_price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.base_price}
                    onChange={handleChange}
                    required
                    placeholder="0.00"
                    className="h-11 w-full rounded-md border border-[#d5d9e3] pl-8 pr-4 text-[13px] outline-none placeholder:text-[#9ba3b8] focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                  />
                </div>
                {fieldErrors.base_price && (
                  <p className="mt-1 text-xs text-red-600">
                    {fieldErrors.base_price}
                  </p>
                )}

                <p className="mt-1 text-[10px] text-[#8b92a6]">
                  Standard price for this tour.
                </p>
              </div>

              {/* Price Override */}
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]">
                  Price Override
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[13px] text-[#7c8499]">
                    $
                  </span>

                  <input
                    id="price_override"
                    name="price_override"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price_override}
                    onChange={handleChange}
                    placeholder="Optional"
                    className="h-11 w-full rounded-md border border-[#d5d9e3] pl-8 pr-4 text-[13px] outline-none placeholder:text-[#9ba3b8] focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
                  />
                </div>
                {fieldErrors.price_override && (
                  <p className="mt-1 text-xs text-red-600">
                    {fieldErrors.price_override}
                  </p>
                )}

                <p className="mt-1 text-[10px] text-[#8b92a6]">
                  Leave empty to use the base price.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[#dcdfea] bg-white p-5 shadow-sm">
            <label
              htmlFor="status"
              className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-[#586078]"
            >
              Tour Status
            </label>
            <div className="relative max-w-md">
              <select
                id="status"
                name="status"
                value={form.status}
                onChange={handleChange}
                className="h-11 w-full appearance-none rounded-md border border-[#d5d9e3] bg-white px-4 pr-10 text-[13px] text-[#344054] outline-none focus:border-[#5146e5] focus:ring-1 focus:ring-[#5146e5]"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#7c8499]"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default CreateTour;
