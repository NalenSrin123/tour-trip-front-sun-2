import React, { useState } from "react";
import { Mail, Search, User, Lock, ArrowBigRight, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, seterror] = useState("");

  const [SuccessMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password_hash: "",
    password_hash_confirmation: "",
  });
  const handlechange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
      
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: FormData.name,
          email: FormData.email,
          password_hash: FormData.password_hash,
          password_hash_confirmation: FormData.password_hash_confirmation,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Fail Register!");
      }
      navigate("/verify", {
        state: {
          email: FormData.email,
        },
      });
      
      setSuccessMessage("Register Successfully!");
    } catch (error) {
      seterror(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex justify-center items-center">
      <div className="w-full bg-white border rounded-2xl border-gray-200  max-w-md shadow-sm p-8">
        <div className="flex flex-col  items-center mb-8  ">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl mb-5 shadow-sm flex justify-center items-center">
            <Search className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            TravelAdmin
          </h1>
          <p className="text-sm text-gray-500 mt-1">Management System</p>
        </div>
        <h1 className="text-xl font-bold text-gray-900">Create Account</h1>
        <p className="text-sm text-gray-500 mt-1 mb-6">
          Enter your information for create account.
        </p>
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {SuccessMessage && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-600">{SuccessMessage}</p>
          </div>
        )}
        <form action="" onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold tracking-wide text-gray-700 uppercase mb-2"
            >
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                name="name"
                value={FormData.name}
                id="name"
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="name"
                onChange={handlechange}
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold tracking-wide text-gray-700 uppercase mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                value={FormData.email}
                name="email"
                id="email"
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="saray@gmail.com"
                onChange={handlechange}
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold tracking-wide text-gray-700 uppercase mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={FormData.password_hash}
                name="password_hash"
                id="password_hash"
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="••••••••"
                onChange={handlechange}
              />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 rounded transition hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="confirm_password"
              className="block text-xs font-semibold tracking-wide text-gray-700 uppercase mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={FormData.password_hash_confirmation}
                name="password_hash_confirmation"
                id="password_hash_confirmation"
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="••••••••"
                onChange={handlechange}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((visible) => !visible)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 rounded transition hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm py-3 rounded-lg transition shadow-sm"
          >
            {loading ? "Registering..." : "Register"}
            <ArrowBigRight className="w-4 h-4" />
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-6">
          © 2024 TravelAdmin. All rights reserved.
        </p>
      </div>
    </div>
  );
};
