import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* left Side: Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-sky-400 transition duration-300">
            <FaTwitter />
          </a>
        </div>

        {/* Center: Links or Categories (optional - decorative only) */}
        <div className="flex space-x-6 text-sm">
          <span className="hover:text-gray-400 transition duration-300 cursor-pointer">Home</span>
          <span className="hover:text-gray-400 transition duration-300 cursor-pointer">About</span>
          <span className="hover:text-gray-400 transition duration-300 cursor-pointer">Projects</span>
          <span className="hover:text-gray-400 transition duration-300 cursor-pointer">Blog</span>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-pink-400 transition duration-300">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Navya Sree Ram Kumar Chowdary. All rights reserved.
      </div>
    </footer>
  );
}
