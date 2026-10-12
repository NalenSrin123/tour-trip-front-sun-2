import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEye,
  faEyeSlash,
  faKey,
  faLock,
  faShieldHalved,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { getSession } from "../../../services/authService";
import { resetPassword } from "../../../services/settingsService";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

const EMPTY_FORM = {
  email: "",
  oldPassword: "",
  newPassword: "",
  newPasswordConfirmation: "",
};

function validateFields(values) {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.oldPassword) {
    errors.oldPassword = "Your current password is required.";
  }

  if (!values.newPassword) {
    errors.newPassword = "A new password is required.";
  } else if (values.newPassword.length < MIN_PASSWORD_LENGTH) {
    errors.newPassword = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
  } else if (values.newPassword === values.oldPassword) {
    errors.newPassword = "Your new password must be different from the current one.";
  }

  if (!values.newPasswordConfirmation) {
    errors.newPasswordConfirmation = "Please confirm your new password.";
  } else if (values.newPasswordConfirmation !== values.newPassword) {
    errors.newPasswordConfirmation = "Passwords do not match.";
  }

  return errors;
}

function inputClassName(hasError) {
  const base =
    "h-10 w-full rounded-lg border bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60";
  const state = hasError
    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/15"
    : "border-slate-300 focus:border-[#5146e5] focus:ring-2 focus:ring-[#5146e5]/15";
  return `${base} ${state}`;
}

function Field({ id, label, icon, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500"
      >
        {label}
      </label>
      <div className="relative">
        <FontAwesomeIcon
          icon={icon}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400"
        />
        {children}
      </div>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}

function PasswordInput({
  id,
  value,
  onChange,
  hasError,
  placeholder,
  autoComplete,
  visible,
  onToggle,
  disabled,
}) {
  return (
    <>
      <input
        id={id}
        name={id}
        type={visible ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
        className={`${inputClassName(hasError)} pr-11`}
      />
      <button
        type="button"
        onClick={onToggle}
        disabled={disabled}
        aria-label={visible ? "Hide password" : "Show password"}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition hover:text-slate-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
      </button>
    </>
  );
}

function Alert({ tone, icon, children }) {
  const tones = {
    error:
      "border-red-200 bg-red-50 text-red-600",
    success:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
  };

  return (
    <p
      role={tone === "error" ? "alert" : "status"}
      className={`flex items-start gap-2 rounded-lg border px-4 py-3 text-sm font-medium ${tones[tone]}`}
    >
      <FontAwesomeIcon icon={icon} className="mt-0.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

export default function SettingsPage() {
  const session = getSession();

  const [values, setValues] = useState({
    ...EMPTY_FORM,
    email: session?.user?.email ?? "",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visible, setVisible] = useState({
    oldPassword: false,
    newPassword: false,
    newPasswordConfirmation: false,
  });

  function handleChange(field, value) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) =>
      previous[field] ? { ...previous, [field]: undefined } : previous,
    );
    setFormError("");
    setSuccessMessage("");
  }

  function toggleVisibility(field) {
    setVisible((previous) => ({ ...previous, [field]: !previous[field] }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateFields(values);
    setErrors(nextErrors);
    setFormError("");
    setSuccessMessage("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      await resetPassword({
        email: values.email,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        newPasswordConfirmation: values.newPasswordConfirmation,
      });

      setValues({ ...EMPTY_FORM, email: values.email.trim() });
      setErrors({});
      setSuccessMessage(
        "Your password has been changed. Use your new password the next time you sign in.",
      );
    } catch (error) {
      setFormError(
        error.message || "Unable to change your password. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f4f6fb] p-6 md:p-8">
      <div className="mx-auto max-w-375">
        <div className="mb-6">
          <h1 className="text-[26px] font-bold tracking-tight text-[#1d2433]">
            Settings
          </h1>
          <p className="mt-1 text-sm text-[#656a78]">
            Manage your account details and sign-in security
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <section className="overflow-hidden rounded-xl border border-[#e1e3ec] bg-white shadow-sm lg:col-span-2">
            <div className="flex flex-col gap-4 border-b border-[#eef0f6] p-5 sm:flex-row sm:items-center">
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[13px] bg-[#e4e2fb] text-[#3930d8]">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#1d2433]">
                  Password &amp; Security
                </h2>
                <p className="mt-0.5 text-sm text-[#656a78]">
                  Choose a strong password you do not use on any other site.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="p-5">
              {formError && (
                <div className="mb-5">
                  <Alert tone="error" icon={faTriangleExclamation}>
                    {formError}
                  </Alert>
                </div>
              )}

              {successMessage && (
                <div className="mb-5">
                  <Alert tone="success" icon={faCircleCheck}>
                    {successMessage}
                  </Alert>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Field
                    id="email"
                    label="Email Address"
                    icon={faKey}
                    error={errors.email}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="admin@traveladmin.com"
                      value={values.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      disabled={isSubmitting}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={inputClassName(Boolean(errors.email))}
                    />
                  </Field>
                </div>

                <Field
                  id="oldPassword"
                  label="Current Password"
                  icon={faLock}
                  error={errors.oldPassword}
                >
                  <PasswordInput
                    id="oldPassword"
                    value={values.oldPassword}
                    onChange={(event) =>
                      handleChange("oldPassword", event.target.value)
                    }
                    hasError={Boolean(errors.oldPassword)}
                    placeholder="Enter your current password"
                    autoComplete="current-password"
                    visible={visible.oldPassword}
                    onToggle={() => toggleVisibility("oldPassword")}
                    disabled={isSubmitting}
                  />
                </Field>

                <Field
                  id="newPassword"
                  label="New Password"
                  icon={faLock}
                  error={errors.newPassword}
                >
                  <PasswordInput
                    id="newPassword"
                    value={values.newPassword}
                    onChange={(event) =>
                      handleChange("newPassword", event.target.value)
                    }
                    hasError={Boolean(errors.newPassword)}
                    placeholder={`At least ${MIN_PASSWORD_LENGTH} characters`}
                    autoComplete="new-password"
                    visible={visible.newPassword}
                    onToggle={() => toggleVisibility("newPassword")}
                    disabled={isSubmitting}
                  />
                </Field>

                <div className="md:col-span-2">
                  <Field
                    id="newPasswordConfirmation"
                    label="Confirm New Password"
                    icon={faLock}
                    error={errors.newPasswordConfirmation}
                  >
                    <PasswordInput
                      id="newPasswordConfirmation"
                      value={values.newPasswordConfirmation}
                      onChange={(event) =>
                        handleChange(
                          "newPasswordConfirmation",
                          event.target.value,
                        )
                      }
                      hasError={Boolean(errors.newPasswordConfirmation)}
                      placeholder="Re-enter your new password"
                      autoComplete="new-password"
                      visible={visible.newPasswordConfirmation}
                      onToggle={() => toggleVisibility("newPasswordConfirmation")}
                      disabled={isSubmitting}
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3 border-t border-[#eef0f6] pt-5">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => {
                    setValues({ ...EMPTY_FORM, email: values.email.trim() });
                    setErrors({});
                    setFormError("");
                    setSuccessMessage("");
                  }}
                  className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#5146e5] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#4338ca] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white"
                      />
                      Updating...
                    </>
                  ) : (
                    "Change password"
                  )}
                </button>
              </div>
            </form>
          </section>

          <aside className="space-y-5">
            <section className="rounded-xl border border-[#e1e3ec] bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[13px] bg-[#e4e2fb] text-[#3930d8]">
                  <FontAwesomeIcon icon={faKey} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#1d2433]">Account</h2>
                  <p className="mt-0.5 text-sm text-[#656a78]">Signed-in user</p>
                </div>
              </div>

              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-slate-500">Name</dt>
                  <dd className="font-medium text-slate-800">
                    {session?.user?.name ?? "Administrator"}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-slate-500">Email</dt>
                  <dd className="truncate font-medium text-slate-800">
                    {session?.user?.email ?? "Not signed in"}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-slate-500">Role</dt>
                  <dd className="font-medium text-slate-800">
                    {session?.user?.role ?? "admin"}
                  </dd>
                </div>
              </dl>
            </section>

            <section className="rounded-xl border border-[#e1e3ec] bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-[#1d2433]">
                Password tips
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[#656a78]">
                {[
                  `Use at least ${MIN_PASSWORD_LENGTH} characters.`,
                  "Mix upper case, lower case, numbers and symbols.",
                  "Avoid names, birthdays and reused passwords.",
                  "Sign out of shared devices after changing it.",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5146e5]"
                    />
                    {tip}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}