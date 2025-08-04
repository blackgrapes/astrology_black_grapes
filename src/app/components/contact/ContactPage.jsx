// components/ContactPage.jsx

import Image from 'next/image';

export default function ContactPage() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-2">Get in Touch</h2>
          <p className="text-sm text-gray-400 mb-6">
            We'd love to hear from you. Send us a message!
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded bg-gray-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full rounded bg-gray-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full rounded bg-gray-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Location Section */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col items-center justify-between">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              className="w-full h-[300px] md:h-[400px] rounded"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-sm text-gray-300 text-center">
            Reach out to integrate astrology into your platform.
          </p>
        </div>
      </div>
    </section>
  );
}
