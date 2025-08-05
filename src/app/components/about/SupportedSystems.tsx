// components/SupportedSystems.jsx
import React from "react";
import { Globe, BookOpen, Lightbulb, Link } from "lucide-react";

const systems = [
  {
    name: "Vedic Astrology",
    icon: <BookOpen className="h-8 w-8 text-purple-400" />,
  },
  {
    name: "KP System",
    icon: <Globe className="h-8 w-8 text-purple-400" />,
  },
  {
    name: "Lal Kitab",
    icon: <Lightbulb className="h-8 w-8 text-purple-400" />,
  },
  {
    name: "Western Astrology",
    icon: <Link className="h-8 w-8 text-purple-400" />,
  },
];

export default function SupportedSystems() {
  return (
    <section className="bg-gradient-to-b from-[#381a64] to-[#2c0e4e] py-12 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Supported Systems</h2>
        <p className="text-base text-gray-300 mb-10">
          Our API is built to accommodate various astrological traditions,
          providing flexibility and depth for diverse applications.
          <br />
          Explore the systems we support:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {systems.map((system, index) => (
            <div
              key={index}
              className="bg-black/80 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center py-10 space-y-4"
            >
              {system.icon}
              <h3 className="text-lg font-semibold">{system.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
