"use client";
import React from "react";
import { useRouter } from 'next/navigation';

const features = [
    {
        id: "astro_details",
        title: "astro details",
        description:
            "Get comprehensive planetary details, house cusps, and ascendant information for any birth chart. This includes precise astrological positions.",
        image: "https://images.playground.com/f243bed3c1804585a652e87e0684945c.jpeg",
    },
    {
        id: "basic_astro",
        title: "basic astro",
        description:
            "Provides fundamental astrological readings, including planetary positions and basic chart interpretations. Essential for a quick overview.",
        image: "https://tse2.mm.bing.net/th/id/OIP.aGNIgx9pH7slzYHQIUArrwHaHa?pid=Api&P=0&h=220",
    },
    {
        id: "basic_panchang",
        title: "basic panchang",
        description:
            "Daily Vedic calendar details: Tithi, Nakshatra, Yoga, Karana, and auspicious times. Crucial for daily rituals.",
        image: "https://tse1.mm.bing.net/th/id/OIP.OGi47Y6RhjIniAQfTxSFiQHaHa?pid=Api&P=0&h=220",
    },
    {
        id: "basic_panchang/sunrise",
        title: "basic panchang / sunrise",
        description:
            "Retrieve sunrise and sunset times for a specific location on any given day. Perfect for planning.",
        image: "https://tse3.mm.bing.net/th/id/OIP.jGFOjHT08vU5O0xMdQ2NXAHaEj?pid=Api&P=0&h=220",
    },
    {
        id: "current_vdasha",
        title: "current vdasha",
        description:
            "Calculates the current Vimshottari Dasha period and sub-periods for a birth chart. A key feature for predictive astrology.",
        image: "https://tse4.mm.bing.net/th/id/OIP.YBYWTilp8MhCFIxDHNG8wQHaDX?pid=Api&P=0&h=220",
    },
    {
        id: "general_ascendant_report",
        title: "general ascendant report",
        description:
            "A detailed report on the influence of the ascendant (lagna) in a birth chart. Provides insights into personality.",
        image: "https://tse3.mm.bing.net/th/id/OIP.mmlDtGHHp-lHwNiUPn_grQHaI6?pid=Api&P=0&h=220",
    },
    {
        id: "geo_details",
        title: "geo details",
        description:
            "Provides precise geographical details including coordinates and timezone for a given location. Essential for accurate calculations.",
        image: "https://img.freepik.com/premium-psd/geokinetics-controlling-earth-design-is-celtic-inspired-inco-flat-illustration-festival-theme-art_1020495-715207.jpg",
    },
    {
        id: "ghat_chakra",
        title: "ghat chakra",
        description:
            "Calculates the auspicious and inauspicious directions and timings for an individual. Guides on favorable actions.",
        image: "https://www.pngitem.com/pimgs/m/780-7806345_chakra-astrology-hd-png-download.png",
    },
    {
        id: "horo_chart_image/d1",
        title: "horo chart image / d1",
        description:
            "Generates a visual image of the D1 (Natal) birth chart. Easy to understand visual representation.",
        image: "https://www.wikihow.com/images/thumb/e/ec/Read-an-Astrology-Chart-Step-1-Version-6.jpg/aid1402250-v4-728px-Read-an-Astrology-Chart-Step-1-Version-6.jpg",
    },
    {
        id: "horo_chart_image/d9",
        title: "horo chart image / d9",
        description:
            "Generates a visual image of the D9 (Navamsa) divisional chart. Offers deeper insights into destiny.",
        image: "https://i.etsystatic.com/35572831/r/il/c9244f/3931024840/il_fullxfull.3931024840_jbn4.jpg",
    },
    {
        id: "horo_chart/D1",
        title: "horo chart / d1",
        description:
            "Provides raw data for the D1 (Natal) birth chart, including house and sign positions. For advanced analysis.",
        image: "https://cdn.pixabay.com/photo/2018/06/07/11/37/astrology-3459916_1280.png",
    },
    {
        id: "horo_chart/d9",
        title: "horo chart / d9",
        description:
            "Provides raw data for the D9 (Navamsa) divisional chart. Crucial for detailed astrological studies.",
        image: "https://media1.thehungryjpeg.com/thumbs2/ori_3833280_ajzt98qcf9awxnv10drmocr1kinztjtodm5wzapt_zodiac-astrology-circle-astrological-constellation-wheel-zodiac-horo.jpg",
    },
    {
        id: "kalsarpa_details",
        title: "kalsarpa details",
        description:
            "Detects and provides details about the Kalsarpa Dosha in a birth chart. Important for karmic implications.",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/9/AB/SC/FI/121039764/astrology-for-kal-sarpa-dosha-500x500.jpg",
    },
    {
        id: "numero_table",
        title: "numero table",
        description:
            "Generates a comprehensive numerology table based on birth details. Discover personal number influences.",
        image: "https://i.pinimg.com/originals/a8/15/11/a8151145fd84dc19bc5f404216fd4956.jpg",
    },
    {
        id: "panchang_chart",
        title: "panchang chart",
        description:
            "Provides detailed Panchang data for a specific date and location in a structured format. For auspicious timings.",
        image: "https://tse1.mm.bing.net/th/id/OIP.wi0lRP7IHyH_47dK84QO6wHaHD?pid=Api&P=0&h=220",
    },
    {
        id: "panchang_chart_image",
        title: "panchang chart image",
        description:
            "Generates a visual image of the Panchang chart. Offers a clear visual overview.",
        image: "https://i.pinimg.com/originals/77/3d/5b/773d5ba369ef2da39ccbbb1dcbeacbe2.gif",
    },
    {
        id: "panchang_planet",
        title: "panchang planet",
        description:
            "Provides planetary positions for a given date and time according to Panchang calculations. Accurate celestial data.",
        image: "https://tse3.mm.bing.net/th/id/OIP.CWHKEucSi1vfjYQAevEDbQHaEK?pid=Api&P=0&h=220",
    },
    {
        id: "planets",
        title: "planets",
        description:
            "Lists the positions of all major planets for a given birth chart. Fundamental astrological data.",
        image: "https://nypost.com/wp-content/uploads/sites/2/2021/11/astrology-planets-meanings-2-copy.jpg?quality=75&strip=all&w=1488",
    },
    {
        id: "timezone",
        title: "timezone",
        description:
            "Retrieves timezone information for a specific geographical location. Essential for accurate birth data.",
        image: "https://thumbs.dreamstime.com/z/horoscope-time-23468583.jpg",
    },
    {
        id: "timezone_with_dst",
        title: "timezone with dst",
        description:
            "Provides timezone details including Daylight Saving Time (DST) adjustments. Ensures precise time calculations.",
        image: "https://tse3.mm.bing.net/th/id/OIP.Rs7tGr73vPVlTJzynt3wTQHaHn?pid=Api&P=0&h=220",
    },
];

export default function AstrologyFeatures() {

    const router = useRouter();

    const handleClick = (id: string) => {
    router.push(`/form/${encodeURIComponent(id)}`);
};



    return (
        <section className="bg-[#2e0066] py-16 px-4 text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Available Astrology Features</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-black/80 rounded-xl shadow-xl overflow-hidden flex flex-col"
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="flex-1 flex flex-col justify-between p-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 capitalize">{feature.title}</h3>
                                    <p className="text-sm text-gray-300">{feature.description}</p>
                                </div>
                                <button
                                    onClick={() => handleClick(feature.id)}
                                    className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm py-2 px-4 rounded-md transition"
                                >
                                    Generate
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
