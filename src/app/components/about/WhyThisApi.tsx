'use client';

import { Lightbulb, Globe, FileText } from 'lucide-react';
import React from 'react';

const WhyThisAPI: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-12">Why this API?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="border border-purple-500 rounded-lg p-6 bg-gray-800 hover:shadow-xl transition">
            <Lightbulb className="text-purple-400 mb-4 mx-auto" size={36} />
            <h3 className="text-xl font-semibold mb-2">Unparalleled Accuracy</h3>
            <p className="text-gray-300">
              Our calculations are based on meticulously verified astrological algorithms, ensuring precise planetary positions and chart interpretations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border border-purple-500 rounded-lg p-6 bg-gray-800 hover:shadow-xl transition">
            <Globe className="text-blue-400 mb-4 mx-auto" size={36} />
            <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
            <p className="text-gray-300">
              Supports geographical coordinates and timezones from virtually anywhere on Earth, delivering relevant data for a worldwide audience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border border-purple-500 rounded-lg p-6 bg-gray-800 hover:shadow-xl transition">
            <FileText className="text-cyan-400 mb-4 mx-auto" size={36} />
            <h3 className="text-xl font-semibold mb-2">Extensive Features</h3>
            <p className="text-gray-300">
              Access a wide array of astrological features, from basic planetary details to complex divisional charts and specialized reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisAPI;
