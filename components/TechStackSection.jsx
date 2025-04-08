"use client";

import { motion } from "framer-motion";
import { techStack } from "../constants/TechStack";

export default function TechStackSection() {
  return (
    <section
      id="techstack"
      className="pt-32 pb-20 px-6 min-h-screen bg-gradient-to-br from-[#ecf0f3] via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-16 font-montserrat tracking-tight"
      >
        💻 Tech Stack & Tools
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {techStack.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.07, rotate: -3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group flex flex-col items-center justify-center text-center 
              bg-gradient-to-br from-pink-100 via-blue-100 to-violet-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800
              backdrop-blur-xl border border-white/30 dark:border-gray-700 rounded-3xl p-6 
              shadow-xl hover:shadow-pink-300 dark:hover:shadow-purple-700 transform transition-all duration-700 
              cursor-pointer hover:-translate-y-2 
              hover:bg-gradient-to-br hover:from-pink-200 hover:via-blue-200 hover:to-violet-200 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-700"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
