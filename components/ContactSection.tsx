'use client';
import { useRef, useState } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";

export default function ContactSection() {
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const icons = [
    {
      href: "https://wa.me/918074288868",
      icon: <FaWhatsapp />,
      color: "text-green-500",
      shadow: "hover:shadow-green-400",
    },
    {
      href: "mailto:navichowdary1725@gmail.com",
      icon: <FaEnvelope />,
      color: "text-red-500",
      shadow: "hover:shadow-red-400",
    },
    {
      href: "https://www.linkedin.com/in/navya-sree-ram-kumar-chowdary-780157298/",
      icon: <FaLinkedin />,
      color: "text-blue-500",
      shadow: "hover:shadow-blue-400",
    },
    {
      href: "https://github.com/NAVI-1725",
      icon: <FaGithub />,
      color: "text-black dark:text-white",
      shadow: "hover:shadow-gray-600",
    },
  ];

  const handleArrowClick = () => {
    setShowCalendar(true);
    setTimeout(() => calendarRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const handleBackClick = () => {
    setShowCalendar(false);
    setTimeout(() => contactRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <>
      {!showCalendar && (
        <section
          ref={contactRef}
          id="contact"
          className="relative z-10 min-h-screen px-6 py-24 flex flex-col justify-center items-center text-center overflow-hidden bg-white dark:bg-black transition-colors duration-500"
        >
          {/* Background Blobs */}
          <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
            <div className="absolute w-[32rem] h-[32rem] top-10 left-10 bg-blue-300 dark:bg-blue-700 rounded-full blur-[100px] animate-[blob_8s_infinite]" />
            <div className="absolute w-[32rem] h-[32rem] bottom-20 right-10 bg-pink-400 dark:bg-pink-600 rounded-full blur-[100px] animate-[blob_12s_infinite]" />
          </div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-2xl mb-16 md:mb-24"
          >
            🚀 Get In Touch
          </motion.h2>

          {/* Social Icons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 0.2 },
              },
            }}
            className="flex flex-wrap justify-center gap-8 md:gap-10 mb-10 md:mb-14"
          >
            {icons.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileHover={{ scale: 1.2, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                className={`bg-white/40 dark:bg-white/10 backdrop-blur-lg p-5 md:p-6 text-4xl md:text-5xl rounded-full ${link.color} transition-all duration-300 shadow-xl ${link.shadow}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Phone */}
          <motion.p
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="text-base md:text-lg font-medium text-gray-700 dark:text-white"
          >
            📱 +91 80742 88868
          </motion.p>

          {/* Schedule Meeting Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center mt-16"
          >
            <p className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
  Schedule Meeting
</p>

            <motion.button
              onClick={handleArrowClick}
              className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-blue-500 dark:border-blue-400 text-3xl text-blue-600 dark:text-blue-400 animate-bounce hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            >
              <IoIosArrowDown />
            </motion.button>
          </motion.div>
        </section>
      )}

      {/* Calendar Section */}
      {showCalendar && (
        <section
          ref={calendarRef}
          className="min-h-screen flex justify-center items-center bg-white dark:bg-black transition-colors duration-500 px-6 py-24"
        >
          <div className="relative bg-white dark:bg-gray-900 shadow-xl rounded-xl p-8 md:p-10 max-w-3xl w-full text-center">
            {/* Back Arrow */}
            <button
              onClick={handleBackClick}
              className="absolute left-4 top-4 text-2xl md:text-3xl text-gray-600 dark:text-white hover:text-blue-500 transition-all"
              title="Back"
            >
              <IoIosArrowBack />
            </button>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              📅 Schedule a Meeting
            </h2>

            <iframe
              src="https://calendly.com/navichowdary1725/"
              width="100%"
              height="600"
              className="border-none rounded-md"
              title="Calendly"
              allow="fullscreen"
            ></iframe>
          </div>
        </section>
      )}
    </>
  );
}
