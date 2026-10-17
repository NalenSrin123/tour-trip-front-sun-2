import { useState } from "react";
import { AlertCircleIcon, ArrowRightIcon, CompassIcon,  EyeIcon,  EyeOffIcon, LockIcon, MailIcon,} from "../../components/common/Icons";
import { forgetRememberedEmail, getRememberedEmail, login, rememberEmail,} from "../../services/authService";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFields({ email, password }) {
  const errors = {};
  if (!email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!password) {
    errors.password = "Password is required.";
  }
  return errors;
}

function inputClassName(hasError, paddingClass) {
  const base =
    "w-full rounded-lg border py-3.5 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition disabled:cursor-not-allowed disabled:opacity-60";
  const state = hasError
    ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500";
  return `${base} ${paddingClass} ${state}`;
}

export default function LoginPage({ onSuccess }) {
  const rememberedEmail = getRememberedEmail();
  const [values, setValues] = useState({
    email: rememberedEmail,
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [notice, setNotice] = useState("");
  const [remember, setRemember] = useState(Boolean(rememberedEmail));
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  function handleChange(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    setAuthError("");
    setNotice("");
  }

  function handleForgotPassword() {
    setAuthError("");
    setNotice(
      "Password reset is not configured yet. Contact the system administrator.",
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateFields(values);
    setErrors(nextErrors);
    setAuthError("");
    setNotice("");
    setSuccess("");
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    setIsSubmitting(true);
    try {
      const session = await login({
        email: values.email.trim(),
        password: values.password,
      });
      if (remember) {
        rememberEmail(values.email.trim());
      } else {
        forgetRememberedEmail();
      }
      onSuccess?.(session);
      setSuccess("Login Successfully!!")
    } catch (error) {
      setAuthError(error.message || "Unable to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f8ff]">
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="mx-auto w-full max-w-md">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <header className="border-b border-slate-200 pb-5 text-center">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                <CompassIcon className="h-7 w-7" />
              </span>
              <h1 className="text-2xl font-bold text-slate-900">
                TravelAdmin
              </h1>
              <p className="mt-1 text-sm text-slate-500">Management System</p>
            </header>

            <form className="pt-5" onSubmit={handleSubmit} noValidate>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Admin Login
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  Enter your credentials to access the dashboard.
                </p>
              </div>

              {authError && (
                <p
                  role="alert"
                  className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm font-medium leading-relaxed text-red-600"
                >
                  <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{authError}</span>
                </p>
              )}
              {success && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-600">{success}</p>
                </div>
              )}

              {notice && !authError && (
                <p
                  role="status"
                  className="mt-4 rounded-lg border border-indigo-100 bg-indigo-50 px-3.5 py-2.5 text-sm font-medium leading-relaxed text-indigo-600"
                >
                  {notice}
                </p>
              )}

              <div className="mt-5">
                <label
                  htmlFor="login-email"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Email Address
                </label>
                <div className="relative mt-2">
                  <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="admin@traveladmin.com"
                    value={values.email}
                    onChange={(event) =>
                      handleChange("email", event.target.value)
                    }
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "login-email-error" : undefined
                    }
                    className={inputClassName(
                      Boolean(errors.email),
                      "pl-11 pr-4",
                    )}
                  />
                </div>
                {errors.email && (
                  <p
                    id="login-email-error"
                    className="mt-1.5 text-xs font-medium text-red-500"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="login-password"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-500"
                >
                  Password
                </label>
                <div className="relative mt-2">
                  <LockIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={values.password}
                    onChange={(event) =>
                      handleChange("password", event.target.value)
                    }
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={
                      errors.password ? "login-password-error" : undefined
                    }
                    className={inputClassName(
                      Boolean(errors.password),
                      "pl-11 pr-12",
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1.5 text-slate-400 transition duration-150 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p
                    id="login-password-error"
                    className="mt-1.5 text-xs font-medium text-red-500"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <label className="flex cursor-pointer select-none items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(event) => setRemember(event.target.checked)}
                    className="h-4 w-4 accent-indigo-600"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm font-medium text-indigo-600 transition duration-150 hover:text-indigo-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 text-base font-semibold text-white transition duration-150 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                      aria-hidden="true"
                    />
                    Logging in...
                  </>
                ) : (
                  <>
                    Login
                    <ArrowRightIcon className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-sm text-indigo-600">
                Create an account?{' '}
                {/* <span className="font-medium text-indigo-600 hover:text-indigo-700">Register</span> */}
              </p>
            </form>
          </section>

          <p className="mt-5 text-center text-xs text-slate-400">
            © 2024 TravelAdmin. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
