"use client";

import { FaDownload, FaEye } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ResumeSection() {
  const [showResume, setShowResume] = useState(false);

  const handleViewResume = () => setShowResume(true);
  const handleCloseResume = () => setShowResume(false);

  return (
    <section
      id="resume"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden px-6"
    >
      {/* Floating Background Blobs */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-indigo-300 opacity-30 rounded-full blur-3xl dark:bg-indigo-700"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-pink-300 opacity-30 rounded-full blur-3xl dark:bg-pink-700"
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
          View my interactive resume or download the PDF version.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* View Resume Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewResume}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white bg-gradient-to-r from-green-400 to-teal-500 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:from-green-500 hover:to-teal-600 dark:from-green-600 dark:to-teal-700"
          >
            <FaEye className="text-xl" />
            <span className="text-base font-semibold">View Resume</span>
          </motion.button>

          {/* Download Resume Button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:from-indigo-600 hover:to-pink-500 dark:from-purple-700 dark:to-indigo-700"
          >
            <FaDownload className="text-xl animate-bounce-slow" />
            <span className="text-base font-semibold">Download Resume</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Interactive Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full p-8 overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-indigo-400 dark:scrollbar-thumb-indigo-700"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                  👩‍💻 Penumarthi Navya Sree Ram Kumar Chowdary
                </h3>
                <button
                  onClick={handleCloseResume}
                  className="text-gray-500 hover:text-red-500 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="grid gap-6">
                {/* Section */}
                {[
                  {
                    title: "🎯 Objective",
                    content:
                      "Results-driven CSE student at IIIT Raichur skilled in Python, C, Full-Stack Dev, ML & GenAI. Seeking an internship to apply technical expertise & problem-solving in real-world projects.",
                  },
                  {
                    title: "🎓 Education",
                    content:
                      "B.Tech in Computer Science & Engineering – IIIT Raichur (2022 – 2026 Expected)",
                  },
                  {
                    title: "🛠️ Skills",
                    content:
                      "Python, C, JavaScript, HTML, CSS, SQL, MERN Stack, Node.js, GenAI, NLP, ML, MySQL, MongoDB, Firebase",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm transition-all"
                  >
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p>{item.content}</p>
                  </motion.div>
                ))}

                {/* Experience */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm"
                >
                  <h4 className="text-xl font-semibold mb-2">💼 Experience</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Software Engineer Intern @ BOSCH – Built AI chatbot using Python, JavaScript, React, Node.js with AI models: LLAMA, Langchain, Hugging Face.</li>
                    <li>Web Developer @ IIIT Raichur – Led website redesign, enhanced accessibility & speed by 40%.</li>
                    <li>Hackathons – Developed e-commerce recommendation system (Amazon Hackathon), Satellite image classifier (Indian Space Center), AI business analytics tool (Stratovate).</li>
                  </ul>
                </motion.div>

                {/* Projects */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm"
                >
                  <h4 className="text-xl font-semibold mb-2">🚀 Projects</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Library Management System – Full-stack system for book tracking.</li>
                    <li>Car Chatbot for Bosch – AI-powered vehicle troubleshooting chatbot.</li>
                    <li>IIIT Raichur Website Redesign – Improved UX/UI and functionality.</li>
                  </ul>
                </motion.div>

                {/* Certifications */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm"
                >
                  <h4 className="text-xl font-semibold mb-2">🏅 Certifications & Achievements</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>AWS Certified Cloud Practitioner (In Progress)</li>
                    <li>Top 10 Finalist – Amazon Hackathon</li>
                    <li>Best UI/UX Award – IIIT Raichur Website Redesign</li>
                  </ul>
                </motion.div>

                {/* Languages */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm"
                >
                  <h4 className="text-xl font-semibold mb-2">🌐 Languages</h4>
                  <p>English, Telugu, Hindi</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
