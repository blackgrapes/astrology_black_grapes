'use client';

import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#3f0d75] to-[#1a1443] px-4">
      <div className="w-full max-w-md bg-[#1A1443] text-white rounded-xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-1">Admin Login Panel</h2>
        <p className="text-center text-sm text-gray-300 mb-6">
          Access the cosmic insights platform
        </p>

        <form>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="admin@example.com"
              className="w-full px-4 py-2 rounded-md bg-[#2a2e3f] text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 rounded-md bg-[#2a2e3f] text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" id="remember" className="accent-violet-600" />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white py-2 rounded-md text-sm font-semibold transition"
          >
            Login
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-[#00bfff] hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
