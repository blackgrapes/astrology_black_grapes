'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <Image
        src="/hero-bg.png" 
        alt="Cosmic Background"
        fill
        quality={100}
        className="z-0 opacity-70 object-cover w-70"
      />

      {/* Overlay Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Unlock the Secrets of the <br />
          <span className="text-white">Cosmos</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Generate powerful astrology reports with our API, crafted for developers and cosmic enthusiasts.
        </p>
        <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 transition rounded-full font-semibold">
          Explore Features
        </button>
      </div>
    </main>
  );
}
