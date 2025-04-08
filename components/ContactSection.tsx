'use client';

import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  const icons = [
    {
      href: "https://wa.me/918074288868",
      icon: <FaWhatsapp />,
      color: "text-green-500",
      shadow: "hover:shadow-green-400"
    },
    {
      href: "mailto:navichowdary1725@gmail.com",
      icon: <FaEnvelope />,
      color: "text-red-500",
      shadow: "hover:shadow-red-400"
    },
    {
      href: "https://www.linkedin.com/in/navya-sree-ram-kumar-chowdary-780157298/",
      icon: <FaLinkedin />,
      color: "text-blue-500",
      shadow: "hover:shadow-blue-400"
    },
    {
      href: "https://github.com/NAVI-1725",
      icon: <FaGithub />,
      color: "text-black dark:text-white",
      shadow: "hover:shadow-gray-600"
    }
  ];

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen px-6 py-20 flex flex-col justify-center items-center text-center overflow-hidden bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute w-[32rem] h-[32rem] top-10 left-10 bg-blue-300 dark:bg-blue-700 rounded-full blur-[100px] animate-[blob_8s_infinite]" />
        <div className="absolute w-[32rem] h-[32rem] bottom-20 right-10 bg-pink-400 dark:bg-pink-600 rounded-full blur-[100px] animate-[blob_12s_infinite]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-2xl mb-16"
      >
        🚀 Get In Touch
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            }
          }
        }}
        className="flex flex-wrap justify-center gap-10 mb-14"
      >
        {icons.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
            className={`bg-white/40 dark:bg-white/10 backdrop-blur-lg p-6 text-5xl rounded-full ${link.color} transition-all duration-300 shadow-xl ${link.shadow}`}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium"
      >
        📞 :{" "}
        <span className="text-blue-600 dark:text-blue-400 font-bold">+91-80742-88868</span>
      </motion.p>
    </section>
  );
}
