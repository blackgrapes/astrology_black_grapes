'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/login' },
  ];

  const linkClasses = (href: string) =>
    `transition ${
      pathname === href ? 'text-purple-400' : 'hover:text-purple-400'
    }`;

  return (
    <nav className="bg-gradient-to-b from-[#200040] to-[#0f0c29] text-white px-4 sm:px-8 py-4 shadow-md z-50 sticky top-0">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-purple-300">✴ Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
              {link.name}
            </Link>
          ))}
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
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
        <div className="md:hidden flex flex-col px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
              {link.name}
            </Link>
          ))}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#3D0E58] text-white px-3 py-1 rounded-full outline-none pl-8 w-32 focus:w-44 transition-all duration-300"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-200" />
          </div>
        </div>
      )}
    </nav>
  );
}
