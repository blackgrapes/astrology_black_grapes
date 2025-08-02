import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Left Section */}
        <div>
          <h2 className="text-base font-semibold mb-2">API for cosmic insights and astrological reports.</h2>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaGithub />
            <FaYoutube />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-200">Home</a></li>
            <li><a href="/features" className="hover:text-gray-200">Features</a></li>
            <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
            <li><a href="/admin" className="hover:text-gray-200">Admin Login</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">Company Info</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-gray-200">About</a></li>
            <li><a href="/docs" className="hover:text-gray-200">Docs</a></li>
            <li><a href="/terms" className="hover:text-gray-200">Terms</a></li>
            <li><a href="/privacy" className="hover:text-gray-200">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact</h3>
          <p>Email: <a href="mailto:contact@astrologyapi.com" className="text-blue-100 hover:underline">contact@astrologyapi.com</a></p>
          <p>Phone: +1 234 567 890</p>

          <div className="mt-6">
            <h4 className="mb-2 font-semibold">Get Cosmic Updates</h4>
            <button className="flex items-center px-4 py-2 bg-black rounded hover:bg-gray-800 transition">
              <span className="mr-2">➜</span> Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-white/20 mt-10" />
    </footer>
  );
}
