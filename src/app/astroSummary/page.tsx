'use client';

import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

type ReportItem = {
  label: string;
  value: string;
};

export default function AstrologySummaryPage() {
  const [reportItems, setReportItems] = useState<ReportItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('astro_result');
console.log("Saved data:", saved);  
    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        console.log("Parsed data:", parsed.data);
        let astro = parsed.data;

        const report: ReportItem[] = [
          { label: 'Ascendant', value: astro.ascendant || 'N/A' },
          { label: 'Ascendant Lord', value: astro.ascendant_lord || 'N/A' },
          { label: 'Sign', value: astro.sign || 'N/A' },
          { label: 'Sign Lord', value: astro.sign_lord || 'N/A' },
          { label: 'Nakshatra', value: astro.nakshatra || 'N/A' },
          { label: 'Nakshatra Lord', value: astro.nakshatra_lord || 'N/A' },
          { label: 'Tithi', value: astro.tithi || 'N/A' },
          { label: 'Yog', value: astro.yog || 'N/A' },
          { label: 'Karan', value: astro.karan || 'N/A' },
          { label: 'Varna', value: astro.varna || 'N/A' },
          { label: 'Vashya', value: astro.vashya || 'N/A' },
          { label: 'Yoni', value: astro.yoni || 'N/A' },
          { label: 'Gana', value: astro.gana || 'N/A' },
          { label: 'Nadi', value: astro.nadi || 'N/A' },
        ];

        setReportItems(report);
      } catch (err) {
        console.error('Invalid JSON:', err);
      }
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
              This is a concise summary of your astrological chart. It includes information about your Ascendant, Sign,
              Nakshatra, and their associated planetary lords. The Ascendant reflects your personality, while your Sign
              influences your emotional nature. The Nakshatra and its lord further clarify your life path and
              characteristics. This information helps you better understand your astrological identity.
            </p>
          </div>

          {/* Hindi Summary */}
          <div className="space-y-2 mt-4">
            <h2 className="font-semibold text-lg">हिंदी स्पष्टीकरण (Hindi Explanation)</h2>
            <p className="text-sm md:text-base text-white/90">
              यह आपके ज्योतिषीय कुंडली का एक संक्षिप्त सारांश है। इसमें आपके लग्न, राशि, नक्षत्र और उनके ग्रहों के बारे में जानकारी
              शामिल है। लग्न आपकी व्यक्तित्व को दर्शाता है, जबकि राशि आपके भावनात्मक पक्ष को प्रभावित करती है। नक्षत्र और उसके
              स्वामी आपके जीवन पथ और विशेषताओं को और स्पष्ट करते हैं। यह जानकारी आपकी ज्योतिषीय पहचान को बेहतर ढंग से समझने
              में मदद करती है।
            </p>
          </div>
        </div>

        {/* Report Cards */}
        <div className="bg-[#2a0e4d] rounded-xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Detailed Astrology Report</h2>
          {reportItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {reportItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1d1236] border border-white/10 rounded-lg p-4 hover:shadow transition"
                >
                  <div className="text-sm text-white/70">{item.label}</div>
                  <div className="text-base font-medium">{item.value}</div>
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
