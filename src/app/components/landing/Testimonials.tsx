// components/Testimonials.tsx
import Image from 'next/image';

const testimonials = [
  {
    name: 'Dr. Evelyn Reed',
    title: 'AstroConnect CEO',
    image: '/images/client1.png',
    text: 'Astrology API has revolutionized how we integrate cosmic insights. The data is accurate, reliable, and incredibly easy to use. Our users love the new features!',
  },
  {
    name: 'Arjun Sharma',
    title: 'Celestial Apps Lead Dev',
    image: '/images/client2.png',
    text: 'The documentation is superb, and the variety of features is unmatched. This API is a game-changer for anyone serious about astrology applications.',
  },
  {
    name: 'Sarah Chen',
    title: 'Cosmic Insights Founder',
    image: '/images/client3.png',
    text: 'Their support team is fantastic, and the API uptime is flawless. We’ve built our entire backend on Astrology API and couldn’t be happier.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-[#3f0d75] to-[#1a1443] text-white py-16 px-4 md:px-14">
      <div className="bg-[#0D0D1F] py-16 px-4 md:px-16"> 
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            What Our Clients Say
          </h2>
          <p className="text-gray-400">
            Trusted by 100+ astrology apps and developers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#181828] rounded-lg p-6 border border-[#26263A] hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <p className="text-gray-300 text-sm italic text-center mb-4">
                “{t.text}”
              </p>
              <p className="text-center text-sm text-indigo-300 font-medium">
                - {t.name}, {t.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
