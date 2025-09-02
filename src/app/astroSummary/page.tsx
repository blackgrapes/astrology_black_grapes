"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

type ReportItem = {
  label: string;
  value: string;
};

type AstroData = {
  ascendant?: string;
  sign?: string;
  nakshatra?: string;
  svg?: string;
  // plus anything else your API may include:
  [key: string]: any;
};

function getRandom(arr: string[]) {
  if (!arr || arr.length === 0) return "";
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSummary(astro?: AstroData) {
  const ascendantSummaries: Record<string, string[]> = {
    Leo: [
      "You're a natural-born leader with immense charisma.",
      "Your presence is powerful, and your confidence inspires others.",
      "Leo ascendant grants you boldness and a shining personality.",
    ],
    Cancer: [
      "You are deeply emotional and care for others like family.",
      "Sensitivity and compassion define your personality.",
      "Your nurturing nature shines through your Cancer ascendant.",
    ],
    Scorpio: [
      "Mystery and depth define your personality.",
      "You possess powerful emotional insight and resilience.",
      "Scorpio rising gives you intensity and a transformative aura.",
    ],
    // Add more Ascendants if needed
  };

  const signSummaries: Record<string, string[]> = {
    Scorpio: [
      "As a Scorpio, you're driven by passion and transformation.",
      "Scorpio energy gives you unmatched focus and intensity.",
      "You are emotionally deep and fiercely loyal.",
    ],
    Leo: [
      "Leo signs are proud, expressive, and fearless.",
      "You shine naturally and command attention.",
      "Leadership and creativity define your sign.",
    ],
    Cancer: [
      "Cancer signs are emotional, loyal, and deeply intuitive.",
      "You are guided by heart and protect your close ones fiercely.",
      "Emotions run deep in your Cancerian soul.",
    ],
    // Add more Signs if needed
  };

  const nakshatraSummaries: Record<string, string[]> = {
    Rohini: [
      "Rohini brings beauty, charm, and creativity.",
      "You're drawn to luxury and emotional depth.",
      "You radiate attractiveness and a peaceful aura.",
    ],
    Ashwini: [
      "Ashwini Nakshatra makes you fast, ambitious, and energetic.",
      "You are pioneering and love taking initiative.",
      "Ashwini brings vitality, speed, and curiosity.",
    ],
    Magha: [
      "Magha gives royal lineage and deep ancestral connection.",
      "You value tradition and hold strong leadership qualities.",
      "You're born with a sense of pride and purpose.",
    ],
    // Add more Nakshatras if needed
  };

  // Use optional chaining so missing astro doesn't crash anything
  const ascendant = getRandom(
    ascendantSummaries[astro?.ascendant ?? ""] || ["Your ascendant shapes your personality."]
  );
  const sign = getRandom(
    signSummaries[astro?.sign ?? ""] || ["Your sign reflects your emotional nature."]
  );
  const nakshatra = getRandom(
    nakshatraSummaries[astro?.nakshatra ?? ""] || ["Nakshatra adds uniqueness to your path."]
  );

  const englishSummary = `${ascendant} ${sign} ${nakshatra}`.trim();

  const hindiSummary = `लग्न: ${astro?.ascendant ?? "N/A"} आपके व्यक्तित्व को प्रभावित करता है। राशि: ${
    astro?.sign ?? "N/A"
  } आपकी भावनाओं को दर्शाती है। नक्षत्र: ${
    astro?.nakshatra ?? "N/A"
  } आपके स्वभाव और सोच को परिभाषित करता है।`;

  return { englishSummary, hindiSummary };
}

export default function AstrologySummaryPage() {
  const [reportItems, setReportItems] = useState<ReportItem[]>([]);
  const [englishSummary, setEnglishSummary] = useState("");
  const [hindiSummary, setHindiSummary] = useState("");
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    // localStorage only on client — this effect is fine
    const saved = localStorage.getItem("astro_result");
    if (!saved) {
      // no data — set friendly defaults
      const { englishSummary, hindiSummary } = generateSummary(undefined);
      setEnglishSummary(englishSummary);
      setHindiSummary(hindiSummary);
      return;
    }

    try {
      const parsed = JSON.parse(saved);
      // Common API shapes: { data: {...} } or { data: { data: {...} } } or already the object
      let astro: AstroData | undefined =
        (parsed?.data?.data as AstroData) ??
        (parsed?.data as AstroData) ??
        (parsed as AstroData);

      // Ensure it's actually an object
      if (!astro || typeof astro !== "object") {
        astro = undefined;
      }

      if (astro?.svg && typeof astro.svg === "string") {
        setSvgContent(astro.svg);
      }

      // Build report items safely from astro (or leave empty if none)
      if (astro) {
        const report: ReportItem[] = Object.entries(astro).map(([key, value]) => {
          const label = key
            .replace(/_/g, " ")
            .replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));

          let displayValue = "N/A";

          if (value && typeof value === "object" && !Array.isArray(value)) {
            displayValue = Object.entries(value)
              .map(
                ([k, v]) =>
                  `${k.charAt(0).toUpperCase() + k.slice(1)}: ${
                    v === undefined || v === null ? "N/A" : String(v)
                  }`
              )
              .join("\n");
          } else if (Array.isArray(value)) {
            displayValue = value.length ? value.join(", ") : "N/A";
          } else if (value !== undefined && value !== null) {
            displayValue = String(value);
          }

          return { label, value: displayValue };
        });

        setReportItems(report);
      } else {
        setReportItems([]);
      }

      const { englishSummary, hindiSummary } = generateSummary(astro);
      setEnglishSummary(englishSummary);
      setHindiSummary(hindiSummary);
    } catch (err) {
      console.error("Invalid JSON:", err);
      // Fallback summaries on JSON parse error
      const { englishSummary, hindiSummary } = generateSummary(undefined);
      setEnglishSummary(englishSummary);
      setHindiSummary(hindiSummary);
      setReportItems([]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#3f0d75] to-[#1a1443] text-white px-4 md:px-8 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="bg-[#2a0e4d] rounded-xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-semibold">Astrology Summary Report</h1>
            <button className="bg-purple-600 hover:bg-purple-700 text-white gap-2 flex items-center px-4 py-2 rounded-md transition">
              <Download size={18} />
              Download as PDF
            </button>
          </div>

          {/* English Summary */}
          <div className="space-y-2">
            <h2 className="font-semibold text-lg">English Summary</h2>
            <p className="text-sm md:text-base text-white/90">
              {englishSummary || "Summary will appear here once data is available."}
            </p>
          </div>

          {/* Hindi Summary */}
          <div className="space-y-2 mt-4">
            <h2 className="font-semibold text-lg">हिंदी स्पष्टीकरण (Hindi Explanation)</h2>
            <p className="text-sm md:text-base text-white/90">
              {hindiSummary || "सारांश डेटा उपलब्ध होने पर यहाँ दिखाई देगा।"}
            </p>
          </div>
        </div>

        {/* SVG Chart (if provided) */}
        {svgContent && (
          <div className="bg-[#2a0e4d] rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Horo Chart (Visual Representation)</h2>
            <div
              className="w-full overflow-auto rounded-lg p-4 bg-[#1d1236]/50 bg-white"
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          </div>
        )}

        {/* Report Cards */}
        <div className="bg-[#2a0e4d] rounded-xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Detailed Astrology Report</h2>
          {reportItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {reportItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1d1236] border border-white/10 rounded-lg p-4 hover:shadow transition"
                >
                  <div className="text-sm text-white/70">{item.label}</div>
                  <pre className="whitespace-pre-wrap break-words text-sm mx-6">{item.value}</pre>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/70">No report data found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
