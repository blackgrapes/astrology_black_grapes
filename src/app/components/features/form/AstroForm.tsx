"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AstroForm = () => {
  const router = useRouter();
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

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/astro-details', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({
          day: parseInt(formData.day),
          month: parseInt(formData.month),
          year: parseInt(formData.year),
          hour: parseInt(formData.hour),
          min: parseInt(formData.minute),
          lat: parseFloat(formData.latitude),
          lon: parseFloat(formData.longitude),
          tzone: parseFloat(formData.timezone),
        }),
      });


      console.log("Response status:", response);
      const text = await response.text();
      console.log("Response text:", text);
      if (!text) {
        console.error("Empty response from backend");
        return;
      }

      const data = JSON.parse(text);
      localStorage.setItem("astro_result", JSON.stringify(data.data));
      router.push("/astroSummary");
    } catch (err) {
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 text-white px-4">
      <h1 className="text-4xl font-extrabold mb-2">Astro Details Report</h1>
      <p className="text-center text-sm max-w-xl mb-8 text-gray-300">
        Unlock comprehensive astrological insights by generating detailed reports based on precise birth information.
      </p>

      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Enter Birth Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="day" placeholder="DD" onChange={handleChange} className="input" />
          <input name="month" placeholder="MM" onChange={handleChange} className="input" />
          <input name="year" placeholder="YYYY" onChange={handleChange} className="input" />
          <input name="hour" placeholder="HH (24-hour)" onChange={handleChange} className="input" />
          <input name="minute" placeholder="MM" onChange={handleChange} className="input" />
          <input name="latitude" placeholder="e.g., 28.6139" onChange={handleChange} className="input" />
          <input name="longitude" placeholder="e.g., 77.2090" onChange={handleChange} className="input" />
          <input name="timezone" placeholder="e.g., 5.5" onChange={handleChange} className="input" />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-violet-500 hover:bg-violet-600 text-white font-semibold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Report"}
        </button>
      </form>
    </div>
  );
};

export default AstroForm;
