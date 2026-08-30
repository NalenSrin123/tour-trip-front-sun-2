import React, { useState } from "react";
import airplaneIcon from "../../pages/public/airplane.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    console.log("Reset link sent to:", email);
  };

  return (
    <div className="min-h-screen bg-[#f8f8ff] text-gray-900">
      {/* Top Pattern */}
      {/* <div className="relative h-[75px] overflow-hidden bg-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #dbeafe 0px, #dbeafe 2px, transparent 2px, transparent 6px)",
          }}
        />

      //   {/* Small center line */}
      {/* // </div> */} 
      {/* <img
  src={airplaneIcon}
  alt="TravelAdmin"
  className="
    w-[20px]
    h-[20px]
    object-contain
    brightness-0
    saturate-100
    invert-[32%]
    sepia-[98%]
    saturate-[3500%]
    hue-rotate-[225deg]
    brightness-[95%]
    contrast-[105%]
  "
/> */}


        <div className="absolute top-2 left-1/2 h-[2px] w-4 -translate-x-1/2 bg-sky-400" />

      {/* Logo */}
      <div className="flex justify-center pt-1">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-800">
          {/* Logo icon */}
          {/* <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            className="text-indigo-600"
          >
            <path
              d="M4 17.5L14.5 12L4 6.5V17.5Z"
              fill="currentColor"
            />
            <path
              d="M8 20L20 14L20 10L8 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
 <div className="flex items-center justify-center gap-1.5 mb-6">
        <div
  className="
    w-[20px]
    h-[20px]
    bg-[#4f46e5]
    mask-contain
    mask-no-repeat
    mask-center
  "
  style={{
    maskImage: `url(${airplaneIcon})`,
    WebkitMaskImage: `url(${airplaneIcon})`,
  }}
/>

          <span className="text-[14px] font-bold text-[#202534]">
            TravelAdmin
          </span>
        </div>

          

          {/* <span>TravelAdmin</span> */}
        </div>
      </div>

      {/* Card */}
      <div className="mx-auto  w-[202px] rounded-lg border border-gray-200 bg-white px-4 py-4 shadow-sm">
        {/* Back */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mb-3 flex items-center gap-1 text-[8px] text-gray-500 transition hover:text-gray-800"
        >
          <span>←</span>
          <span>Back to login</span>
        </button>

        {/* Title */}
        <h1 className="text-[16px] font-bold tracking-tight text-gray-900">
          Forgot your password?
        </h1>

        {/* Description */}
        <p className="mt-2 text-[8px] leading-[13px] text-gray-500">
          Enter the email address associated with your account and we'll send a
          link to reset your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4">
          <label
            htmlFor="email"
            className="mb-1 block text-[7px] font-semibold uppercase tracking-wide text-gray-600"
          >
            Email Address
          </label>

          <div className="relative">
            {/* Email icon */}
            <svg
              className="absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="h-[25px] w-full rounded-[5px] border border-gray-300 bg-white pl-7 pr-2 text-[8px] text-gray-700 outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-100"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-3 h-[22px] w-full rounded-[5px] bg-indigo-600 text-[7px] font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
          >
            Send reset link
          </button>
        </form>

        {/* Login */}
        <p className="mt-4 text-center text-[7px] text-gray-500">
          Remember your password?{" "}
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-700"
          >
            Log in
          </button>
        </p>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-2 left-1/2 h-[1px] w-4 -translate-x-1/2 bg-sky-400" />
    </div>
  );
}