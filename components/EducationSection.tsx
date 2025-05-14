"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative min-h-screen bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#fdf2f8] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 px-6 pb-20 overflow-hidden transition-colors duration-500"
    >
      {/* Blurred Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-80 h-80 bg-purple-300 dark:bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse top-10 left-10" />
        <div className="absolute w-80 h-80 bg-pink-300 dark:bg-pink-700 opacity-20 rounded-full blur-3xl animate-ping right-10 bottom-10" />
      </div>

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
      >
        🎓 My Educational Journey
      </motion.h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        {educationList.map((edu, index) => (
          <motion.div
            key={edu.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/60 dark:bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 relative flex-shrink-0">
              <Image
                src={edu.image}
                alt={edu.alt}
                fill
                className="object-contain rounded-2xl shadow-md dark:shadow-gray-700"
                sizes="(max-width: 768px) 100px, 200px"
              />
            </div>

            <div className="flex flex-col text-center md:text-left">
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                {edu.title}
              </h3>
              <p className="text-base text-gray-800 dark:text-gray-200 mt-1">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {edu.year}
              </p>
            </div>
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
