'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-purple-800 via-indigo-900 to-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400 tracking-wide">
          🔮 AstroGuide
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li className="hover:text-yellow-400 transition"><a href="#">Home</a></li>
          <li className="hover:text-yellow-400 transition"><a href="#">Horoscope</a></li>
          <li className="hover:text-yellow-400 transition"><a href="#">Kundli</a></li>
          <li className="hover:text-yellow-400 transition"><a href="#">Astrologers</a></li>
          <li className="hover:text-yellow-400 transition"><a href="#">Contact</a></li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-yellow-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-black bg-opacity-80 text-sm font-medium space-y-2">
          <a href="#" className="block hover:text-yellow-400">Home</a>
          <a href="#" className="block hover:text-yellow-400">Horoscope</a>
          <a href="#" className="block hover:text-yellow-400">Kundli</a>
          <a href="#" className="block hover:text-yellow-400">Astrologers</a>
          <a href="#" className="block hover:text-yellow-400">Contact</a>
        </div>
      )}
    </header>
  );
}
