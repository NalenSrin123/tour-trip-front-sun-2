import { useEffect, useRef, useState } from "react";
import {
  AlertCircleIcon,
  ArrowRightIcon,
  CompassIcon,
  MailIcon,
} from "../../components/common/Icons";
import { useLocation, useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const OTP_LENGTH = 6;
const RESEND_SECONDS = 30;
const EXPIRY_SECONDS = 5 * 60;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function VerifyOtp({ email = "admin@traveladmin.com", onSuccess, onBack }) {
  const location = useLocation();
  const userEmail = location.state?.email || email;
  const [digits, setDigits] = useState(() => Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [expiryLeft, setExpiryLeft] = useState(EXPIRY_SECONDS);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (secondsLeft <= 0) return undefined;
    const timer = setInterval(() => {
      setSecondsLeft((value) => (value <= 1 ? 0 : value - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  useEffect(() => {
    if (expiryLeft <= 0) return undefined;
    const timer = setInterval(() => {
      setExpiryLeft((value) => {
        if (value <= 1) {
          setDigits(Array(OTP_LENGTH).fill(""));
          setNotice("");
          setError(
            "This verification code has expired. Please request a new one.",
          );
          inputsRef.current.forEach((input) => input?.blur());
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [expiryLeft]);

  const code = digits.join("");
  const isComplete = code.length === OTP_LENGTH;
  const isExpired = expiryLeft <= 0;

  function handleChange(index, value) {
    const sanitized = value.replace(/\D/g, "");
    setError("");
    setNotice("");

    if (!sanitized) {
      setDigits((prev) => {
        const next = [...prev];
        next[index] = "";
        return next;
      });
      return;
    }

    const chars = sanitized.split("");
    setDigits((prev) => {
      const next = [...prev];
      let cursor = index;
      for (const char of chars) {
        if (cursor >= OTP_LENGTH) break;
        next[cursor] = char;
        cursor += 1;
      }
      const focusAt = Math.min(cursor, OTP_LENGTH - 1);
      requestAnimationFrame(() => inputsRef.current[focusAt]?.focus());
      return next;
    });
  }

  function handleKeyDown(index, event) {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      event.preventDefault();
      setDigits((prev) => {
        const next = [...prev];
        next[index - 1] = "";
        return next;
      });
      inputsRef.current[index - 1]?.focus();
    }
    if (event.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handlePaste(event) {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;
    setDigits(() => {
      const next = Array(OTP_LENGTH).fill("");
      for (let i = 0; i < OTP_LENGTH; i += 1) {
        next[i] = pasted[i] || "";
      }
      const focusAt = Math.min(pasted.length, OTP_LENGTH - 1);
      requestAnimationFrame(() => inputsRef.current[focusAt]?.focus());
      return next;
    });
  }

  async  function handleSubmit(event) {
    event.preventDefault();
    if (isExpired) {
      setError("This verification code has expired. Please request a new one.");
      return;
    }
    if (!isComplete) {
      setError("Please enter the complete 6-digit code.");
      return;
    }
    setError("");
    // onSuccess?.({ email: userEmail, code });
    try {
      const response = await fetch(`${BASE_URL}/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          otp: code
        })
      })
      const data = await response.json();
      if(!response.ok){
        setError(data.message || "Invalid verification code.");
        return;
      }
      onSuccess?.(data);
      navigate('/login')
    } catch (error) {
      setError("Cannot connect to the server. Please try again.");
    }
  }
  
  function handleResend() {
    if (secondsLeft > 0 && !isExpired) return;
    setDigits(Array(OTP_LENGTH).fill(""));
    setError("");
    setNotice(`A new code has been sent to ${userEmail}.`);
    setSecondsLeft(RESEND_SECONDS);
    setExpiryLeft(EXPIRY_SECONDS);
    inputsRef.current[0]?.focus();
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f8ff] px-4 py-10">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-87.5">
        <section className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-indigo-500/5 backdrop-blur sm:p-7">
          <header className="flex flex-col items-center text-center">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
              <CompassIcon className="h-6 w-6" />
            </span>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              Verify your email
            </h1>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
              We sent a 6-digit verification code to
            </p>
            <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-indigo-600">
              <MailIcon className="h-3.5 w-3.5" />
              {userEmail}
            </span>
            <p
              className={`mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tabular-nums ${
                isExpired
                  ? "bg-red-50 text-red-500"
                  : expiryLeft <= 60
                    ? "bg-amber-50 text-amber-600"
                    : "bg-slate-100 text-slate-500"
              }`}
            >
              {isExpired ? (
                "Code expired"
              ) : (
                <>
                  Code expires in
                  <span>{formatTime(expiryLeft)}</span>
                </>
              )}
            </p>
          </header>

          {error && (
            <p
              role="alert"
              className="mt-4 flex items-start gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-medium leading-relaxed text-red-600"
            >
              <AlertCircleIcon className="mt-px h-3.5 w-3.5 shrink-0" />
              <span>{error}</span>
            </p>
          )}

          {notice && !error && (
            <p
              role="status"
              className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-[11px] font-medium leading-relaxed text-emerald-600"
            >
              {notice}
            </p>
          )}

          <form className="mt-5" onSubmit={handleSubmit} noValidate>
            <div
              className="flex items-center justify-center gap-2 sm:gap-2.5"
              onPaste={handlePaste}
            >
              {digits.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputsRef.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={OTP_LENGTH}
                  value={digit}
                  onChange={(event) => handleChange(index, event.target.value)}
                  onKeyDown={(event) => handleKeyDown(index, event)}
                  onFocus={(event) => event.target.select()}
                  disabled={isExpired}
                  aria-label={`Digit ${index + 1}`}
                  className={`h-12 w-10 rounded-xl border bg-white text-center text-lg font-bold text-slate-900 outline-none transition duration-150 caret-indigo-600 disabled:cursor-not-allowed disabled:opacity-60 sm:h-13 sm:w-11 ${
                    error
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:shadow-lg focus:shadow-indigo-500/10"
                  } ${digits[index] ? "border-indigo-300 bg-indigo-50/40" : ""}`}
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={!isComplete || isExpired}
              className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition duration-150 hover:from-indigo-700 hover:to-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
            >
              Verify code
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-5 flex items-center justify-center text-[11px] text-slate-500">
            <span>Didn&apos;t receive the code?</span>
            <button
              type="button"
              onClick={handleResend}
              disabled={secondsLeft > 0 && !isExpired}
              className="ml-1.5 font-semibold text-indigo-600 transition duration-150 hover:text-indigo-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 disabled:cursor-not-allowed disabled:text-slate-400 disabled:no-underline"
            >
              {secondsLeft > 0 ? `Resend in ${secondsLeft}s` : "Resend code"}
            </button>
          </div>

          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="mt-3 flex w-full items-center justify-center text-[11px] font-medium text-slate-400 transition duration-150 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
            >
              Back to sign in
            </button>
          )}
        </section>

        <p className="mt-6 text-center text-[11px] text-slate-400">
          © 2024 TravelAdmin. All rights reserved.
        </p>
      </div>
    </div>
  );
}
