"use client";

import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden px-6"
    >
      {/* Floating Background Blobs */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-indigo-300 opacity-30 rounded-full blur-3xl dark:bg-indigo-700"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full blur-3xl dark:bg-purple-700"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Resume Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-2xl rounded-3xl p-12 max-w-xl w-full text-center border border-white/20 dark:border-gray-700/50"
      >
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 dark:text-white mb-6 tracking-wide"
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Download or view my resume to explore my experience, projects, and qualifications.
        </motion.p>

        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:from-purple-600 hover:to-pink-500 dark:from-purple-700 dark:to-indigo-700 dark:hover:from-pink-600 dark:hover:to-purple-600"
        >
          <FaDownload className="text-xl animate-bounce-slow" />
          <span className="text-base font-semibold">View / Download Resume</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
