"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function EducationSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="education"
      className="relative min-h-screen bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#fdf2f8] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 px-4 pb-16 overflow-hidden transition-colors duration-500"
    >
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-72 h-72 bg-purple-300 dark:bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse top-10 left-10" />
        <div className="absolute w-72 h-72 bg-pink-300 dark:bg-pink-700 opacity-20 rounded-full blur-3xl animate-ping right-10 bottom-10" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-md"
      >
        🎓 Education
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Education Cards */}
        {educationList.map((edu, index) => (
          <motion.div
            key={edu.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={
              hoveredIndex === null
                ? { scale: 1, zIndex: 1, opacity: 1 }
                : hoveredIndex === index
                ? { scale: 1.25, zIndex: 10, opacity: 1, rotate: 0 }
                : { scale: 0.85, zIndex: 0, opacity: 0.5, rotate: -2 }
            }
            transition={{ type: "spring", stiffness: 500, damping: 18 }}
            className={`flex flex-col items-center text-center p-6 backdrop-blur-2xl border rounded-2xl shadow-md transition-all duration-500 ${
              hoveredIndex === null
                ? "bg-white/70 dark:bg-white/10 border-white/20 dark:border-white/10"
                : hoveredIndex === index
                ? "bg-white dark:bg-white/10 shadow-lg shadow-purple-300 dark:shadow-purple-700"
                : "bg-white/50 dark:bg-white/5"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Image
              src={edu.image}
              alt={edu.alt}
              width={80}
              height={80}
              className="rounded-xl object-contain shadow-md mb-4 dark:shadow-gray-700"
            />
            <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
              {edu.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              {edu.institution}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const educationList = [
  {
    title: "B.Tech in CSE",
    institution: "IIIT Raichur, Karnataka",
    year: "2022 – 2026 | CGPA: 7.5+",
    image: "/images/iiitr.jpg",
    alt: "IIIT Raichur",
  },
  {
    title: "Intermediate (XII)",
    institution: "Career Point Jr College, Rajahmundry",
    year: "2019 – 2021 | 95.8%",
    image: "/images/careerpoint.jpg",
    alt: "Career Point",
  },
  {
    title: "Secondary School (X)",
    institution: "SSVN High School, Rajahmundry",
    year: "2019 | GPA: 10/10",
    image: "/images/ssvn.png",
    alt: "SSVN High School",
  },
];
