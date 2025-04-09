import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Center: Copyright */}
        <div className="text-center text-xs text-gray-400 order-2 md:order-1 w-full md:w-auto">
          &copy; {new Date().getFullYear()} Navya Sree Ram Kumar Chowdary. All rights reserved.
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4 order-1 md:order-2">
          <a 
            href="https://x.com/navi__chowdary?t=ARWiyBj18_-sHlYNBI_UFQ&s=08" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-sky-400 transition duration-300"
          >
            <FaXTwitter />
          </a>
          <a 
            href="https://www.instagram.com/navi__1725?igsh=eXN3aGZrcWU0dmNr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-pink-400 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
