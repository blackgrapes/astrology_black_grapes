import Image from 'next/image';

export default function PopularFeatures() {
  const features = [
    {
      title: 'Astro Details',
      description: 'Comprehensive birth chart analysis with detailed planetary positions.',
      image: '/Features/Features1.png', 
    },
    {
      title: 'Current Vdasha',
      description: 'Get the current planetary period (Vimshottari Dasha) for any given time.',
      image: '/Features/Features2.png', 
    },
    {
      title: 'Horo Chart D1',
      description: 'Generate the main birth chart (Lagna Kundali or D1 Chart) for deep insights.',
      image: '/Features/Features3.png', 
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#3f0d75] to-[#1a1443] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Popular Features Preview
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#181828] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="h-48 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <button className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition px-4 py-1 rounded-full">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
