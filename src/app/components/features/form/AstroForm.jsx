"use client";
import React, { useState } from "react";

const AstroForm = () => {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    latitude: "",
    longitude: "",
    timezone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // TODO: API call
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 text-white px-4">
      <h1 className="text-4xl font-extrabold mb-2">Astro Details Report</h1>
      <p className="text-center text-sm max-w-xl mb-8 text-gray-300">
        Unlock comprehensive astrological insights by generating detailed reports based on precise birth information.
        Discover planetary positions, house placements, and key astrological yogas.
      </p>

      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Enter Birth Details</h2>
        <p className="text-sm text-gray-400 mb-6">Provide the necessary information to generate your astrological report.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="day" placeholder="DD" onChange={handleChange} className="input" />
          <input name="month" placeholder="MM" onChange={handleChange} className="input" />
          <input name="year" placeholder="YYYY" onChange={handleChange} className="input" />
          <input name="hour" placeholder="HH (24-hour)" onChange={handleChange} className="input" />
          <input name="minute" placeholder="MM" onChange={handleChange} className="input" />
          <input name="latitude" placeholder="e.g., 28.6139" onChange={handleChange} className="input" />
          <input name="longitude" placeholder="e.g., 77.2090" onChange={handleChange} className="input" />
          <input name="timezone" placeholder="e.g., 5.5 (for IST)" onChange={handleChange} className="input" />
        </div>

        <button type="submit" className="w-full mt-6 bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded">
          Generate Report
        </button>
      </form>
    </div>
  );
};

export default AstroForm;
