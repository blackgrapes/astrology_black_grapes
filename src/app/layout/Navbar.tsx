'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#29013F] text-white px-4 sm:px-8 py-4 shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-purple-300">✴ Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <Link href="/about" className="hover:text-purple-400 transition">About</Link>
          <Link href="/features" className="hover:text-purple-400 transition">Features</Link>
          <Link href="/contact" className="hover:text-purple-400 transition">Contact</Link>
          <Link href="/admin" className="hover:text-purple-400 transition">Admin Login</Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#3D0E58] text-white px-3 py-1 rounded-full outline-none pl-8 w-32 focus:w-44 transition-all duration-300"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-200" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d={isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-[#3D0E58] px-4 py-3 space-y-3">
          <Link href="/" className="hover:text-purple-400">Home</Link>
          <Link href="/features" className="hover:text-purple-400">Features</Link>
          <Link href="/contact" className="hover:text-purple-400">Contact</Link>
          <Link href="/admin" className="hover:text-purple-400">Admin Login</Link>
        </div>
      )}
    </nav>
  );
}
