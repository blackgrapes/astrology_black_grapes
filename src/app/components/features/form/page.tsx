"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
interface AstroFormProps {
    endpoint: string;
}
const formHeadings: Record<string, string> = {
    'astro_details': 'Astro Details Form',
    'basic_astro': 'Basic Astro Form',
    "basic_panchang": "Basic Panchang Form",
    "basic_panchang/sunrise": "Basic Panchang Sunrise Form",
    'current_vdasha': 'Current Vdasha Form',
    'general_ascendant_report': 'General Ascendant Report Form',
    'geo_details': 'Geo Details Form',
    'ghat_chakra': 'Ghat Chakra Form',
    "horo_chart_image/d1": "Horo Chart Image / d1 Form",
    "horo_chart_image/d9": "Horo Chart Image / d9 Form",
    "horo_chart/D1": "Horo Chart / d1 Form",
    "horo_chart_d9": "Horo Chart / d9 Form",
    "kalsarpa_details": "Kalsarpa Details Form",
    "numero_table": "Numero Table Form",
    "panchang_chart": "Panchang Chart Form",
    "panchang_chart_image": "Panchang Chart Image Form",
    "panchang_planet": "Panchang Planet Form",
    "planets": "Planets Form",
    "timezone": "Timezone Form",
    "timezone_with_dst": "Timezone with DST Form",
};
const AstroForm: React.FC<AstroFormProps> = ({ endpoint }) => {
    const heading = formHeadings[endpoint] || "Astrology Form";
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
        place: "",
        max_row: "",
        name : "",
        timezone_Id : "",
        is_dst: false,
    });


    const [loading, setLoading] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload =
  endpoint === "geo_details"
    ? {
        lat: parseFloat(formData.latitude),
        lon: parseFloat(formData.longitude),
        max_row: formData.max_row ? parseInt(formData.max_row) : undefined,
      }
    : endpoint === "horo_chart_image/d1" || endpoint === "horo_chart_image/d9" || endpoint === "panchang_chart_image"
    ? {
        day: parseInt(formData.day),
        month: parseInt(formData.month),
        year: parseInt(formData.year),
        hour: parseInt(formData.hour),
        min: parseInt(formData.minute),
        lat: parseFloat(formData.latitude),
        lon: parseFloat(formData.longitude),
        tzone: parseFloat(formData.timezone),

        // additional horo_chart_image_d1 settings
        chartStyle: "north",
        bgClr: "#FFFEC9",
        lineClr: "#FFC000",
        signClr: "red",
        planetClr: "blue",
        chartSize: 350,
        lineWidth: 2,
        fontSize: 15,
        signSymbol: "N",
        planetSymbol: "N",
      }
      : endpoint === "numero_table"
      ? {
         day: parseInt(formData.day),
        month: parseInt(formData.month),
        year: parseInt(formData.year),
        name: formData.name,
      }
      : endpoint === "timezone"
      ? {
          timezone_Id: formData.timezone_Id,
          is_dst: formData.is_dst,
        }
    : {
        day: parseInt(formData.day),
        month: parseInt(formData.month),
        year: parseInt(formData.year),
        hour: parseInt(formData.hour),
        min: parseInt(formData.minute),
        lat: parseFloat(formData.latitude),
        lon: parseFloat(formData.longitude),
        tzone: parseFloat(formData.timezone),
      };

            const response = await fetch(`/api/${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const text = await response.text();
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
            <h1 className="text-4xl font-extrabold mb-2">{heading}</h1>
            <p className="text-center text-sm max-w-xl mb-8 text-gray-300">
                Unlock comprehensive astrological insights by generating detailed reports based on precise birth information.
            </p>

            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg w-full max-w-2xl">
                <h2 className="text-xl font-bold mb-4">Enter Birth Details</h2>
                {endpoint === "geo_details" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            name="place"
                            required
                            placeholder="Place (e.g., New Delhi)"
                            onChange={handleChange}
                            className="input"
                        />                        
                        <input
                            name="max_row"
                            placeholder="Max Row (Optional)"
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                ) : 
                endpoint === "numero_table" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            name="day"
                            required
                            placeholder="Day "
                            onChange={handleChange}
                            className="input"
                        />
                        <input
                            name="month"
                            required
                            placeholder="Month 01, 12"
                            onChange={handleChange}
                            className="input"
                        />
                        <input
                            name="year"
                            required
                            placeholder="Year Ex 2003"
                            onChange={handleChange}
                            className="input"
                        />
                        <input
                            name="name"
                            required
                            placeholder="Your Name"
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                )
                : endpoint === "timezone" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            name="timezone_Id"
                            required
                            placeholder="Timezone ID (e.g., Asia/Kolkata)"
                            onChange={handleChange}
                            className="input"
                        />
                        <div className="flex items-center">
                            <input
                                type="text"
                                name="is_dst"
                                className="mr-2"
                                onChange={handleChange}
                                placeholder="Is DST (true/false)"
                            />
                        </div>
                    </div> // my code
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="day" required placeholder="Day " onChange={handleChange} className="input" />
                        <input name="month" required placeholder="Month Ex 01 12" onChange={handleChange} className="input" />
                        <input name="year" required placeholder="Year Ex 2010" onChange={handleChange} className="input" />
                        <input name="hour" required placeholder="Hour (24-hour)" onChange={handleChange} className="input" />
                        <input name="minute" required placeholder="Minute Ex 35" onChange={handleChange} className="input" />
                        <input name="latitude" required placeholder="Latitude Ex 28.6139" onChange={handleChange} className="input" />
                        <input name="longitude" required placeholder="Longitude Ex 77.2090" onChange={handleChange} className="input" />
                        <input name="timezone" required placeholder="Timezone Ex 5.5" onChange={handleChange} className="input" />
                    </div>
                )}


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
