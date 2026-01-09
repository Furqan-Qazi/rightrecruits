"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import CustomButton from "@/components/global/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validate = () => {
    const nextErrors: { email?: string; password?: string } = {};
    if (!email || !/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (!password || password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-lime-500 to-lime-900">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="hidden lg:flex flex-col justify-between rounded-3xl overflow-hidden bg-black/10 border border-white/20">
            <div className="p-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center">
                  <Mail className="text-white" size={18} />
                </div>
                <h1 className="text-2xl font-bold text-white">
                  Right <span className="text-lime-200">Recruits</span>
                </h1>
              </div>
              <p className="mt-4 text-white/90">
                Sign in to continue your journey. Track applications, manage
                jobs, and connect faster.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-sm text-white/90">Trusted Employers</p>
                  <p className="text-xl font-bold text-white">10K+</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-sm text-white/90">Active Jobs</p>
                  <p className="text-xl font-bold text-white">2,500+</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-black/20">
              <div className="flex items-center justify-between">
                <p className="text-white/80">New here?</p>
                <Link
                  href="/register"
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-lime-200 transition"
                >
                  Create Account
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
              <p className="text-sm text-gray-600 mt-2">
                Please sign in to your account
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-2 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 pl-11 text-gray-800 rounded-xl border outline-none transition focus:ring-2 focus:ring-lime-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="you@example.com"
                  />
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-3 pl-11 pr-11 text-gray-800 rounded-xl border outline-none transition focus:ring-2 focus:ring-lime-500 ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your password"
                  />
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-lime-600 focus:ring-lime-500"
                  />
                  Remember me
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-lime-700 hover:text-lime-900"
                >
                  Forgot password?
                </Link>
              </div>

              <CustomButton
                text="Sign In"
                bgColor="bg-lime-500 w-full"
                textColor="text-white"
                hoverColor="hover:bg-lime-600"
                className="py-3 rounded-xl"
              />

              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-200 flex-1" />
                <span className="text-xs text-gray-500">or continue with</span>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button className="w-full border border-gray-300 rounded-xl py-2 text-sm hover:bg-gray-50 transition">
                  Google
                </button>
                <button className="w-full border border-gray-300 rounded-xl py-2 text-sm hover:bg-gray-50 transition">
                  GitHub
                </button>
                <button className="w-full border border-gray-300 rounded-xl py-2 text-sm hover:bg-gray-50 transition">
                  LinkedIn
                </button>
              </div>

              <p className="text-center text-sm text-gray-600">
                Don’t have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-lime-700 hover:text-lime-900"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
