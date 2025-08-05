'use client';

import { Bolt, Grid, Star } from 'lucide-react'; // or any icons you prefer

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-r from-[#3f0d75] to-[#1a1443] py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-[#181828] rounded-lg p-6 shadow-md hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <Bolt className="w-10 h-10 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enter Birth Details</h3>
            <p className="text-gray-300 text-sm">
              Provide accurate birth date, time, and location to generate precise astrological data. Our API handles all calculations.
            </p>
          </div>

          <div className="bg-[#181828] rounded-lg p-6 shadow-md hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <Grid className="w-10 h-10 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose Feature</h3>
            <p className="text-gray-300 text-sm">
              Select from a wide range of astrological features, from comprehensive birth charts to daily planetary positions.
            </p>
          </div>

          <div className="bg-[#181828] rounded-lg p-6 shadow-md hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <Star className="w-10 h-10 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">View Result</h3>
            <p className="text-gray-300 text-sm">
              Instantly receive detailed astrological reports in JSON format, ready for integration into your applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
