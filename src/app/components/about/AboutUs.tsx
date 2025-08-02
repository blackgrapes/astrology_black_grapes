'use client';

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <>
    <section className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-left">
        <h2 className="text-4xl font-bold text-purple-300 mb-8">About the Platform</h2>
        <p className="text-lg leading-relaxed mb-6">
          The Astrology API is your definitive gateway to comprehensive astrological insights, designed for developers and astrologers alike.
          Our robust API empowers you to integrate detailed birth charts, planetary positions, astrological reports, and various ancient
          systems into your applications with ease. We believe in providing accurate, reliable, and accessible astrological data, enabling
          a new generation of cosmic-aware platforms.
        </p>
        <p className="text-lg leading-relaxed">
          Our mission is to bridge the gap between ancient wisdom and modern technology, making the profound knowledge of astrology available
          to a wider audience through intuitive and powerful tools. Whether you're building a personal astrology app, a spiritual wellness platform,
          or a research tool, the Astrology API provides the backbone for your cosmic explorations.
        </p>
      </div>
    </section>
     {/* Add the WHY section */}
    </>
  );
};

export default AboutUs;
