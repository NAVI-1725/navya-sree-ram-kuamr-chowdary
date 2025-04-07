'use client';

import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="p-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-800 mb-12 tracking-wide"
      >
        Get In Touch
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10 mb-8">
        <motion.a
          href="https://wa.me/918074288868"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="text-green-500 text-5xl transition-transform hover:shadow-2xl hover:shadow-green-400 rounded-full p-4 bg-white"
        >
          <FaWhatsapp />
        </motion.a>

        <motion.a
          href="mailto:navichowdary1725@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="text-red-500 text-5xl transition-transform hover:shadow-2xl hover:shadow-red-400 rounded-full p-4 bg-white"
        >
          <FaEnvelope />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/navya-sree-ram-kumar-chowdary-780157298/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="text-blue-500 text-5xl transition-transform hover:shadow-2xl hover:shadow-blue-400 rounded-full p-4 bg-white"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/NAVI-1725"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="text-black text-5xl transition-transform hover:shadow-2xl hover:shadow-gray-600 rounded-full p-4 bg-white"
        >
          <FaGithub />
        </motion.a>
      </div>

      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="text-xl text-gray-700 font-semibold"
      >
        📞 Mobile: <span className="text-blue-600">+91-80742-88868</span>
      </motion.p>
    </section>
  );
}
