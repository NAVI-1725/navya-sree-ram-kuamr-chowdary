"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative min-h-screen bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#fdf2f8] pt-32 px-6 pb-20 overflow-hidden"
    >
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-96 h-96 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse top-0 left-10" />
        <div className="absolute w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl animate-ping right-10 bottom-0" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-md">
          🎓 Education
        </h2>

        <div className="grid grid-cols-1 gap-16">
          {/* B.Tech */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white/60 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-lg hover:shadow-purple-300 transition duration-500"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/iiitr.jpg"
              alt="IIIT Raichur"
              width={120}
              height={120}
              className="rounded-xl object-contain shadow-md"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-600">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="text-gray-700 mt-1">
                Indian Institute of Information Technology, Raichur, Karnataka
              </p>
              <p className="text-sm text-gray-500">
                2022 – 2026 | CGPA: 7.5+
              </p>
            </div>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white/60 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-lg hover:shadow-indigo-300 transition duration-500"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Image
              src="/images/careerpoint.jpg"
              alt="Career Point"
              width={120}
              height={120}
              className="rounded-xl object-contain shadow-md"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-600">
                Intermediate (Class XII)
              </h3>
              <p className="text-gray-700 mt-1">
                Career Point Junior College, Rajahmundry, Andhra Pradesh
              </p>
              <p className="text-sm text-gray-500">
                2019 – 2021 | Percentage: 95.8%
              </p>
            </div>
          </motion.div>

          {/* SSC */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white/60 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-lg hover:shadow-pink-300 transition duration-500"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/ssvn.png"
              alt="SSVN High School"
              width={120}
              height={120}
              className="rounded-xl object-contain shadow-md"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-600">
                Secondary School (Class X)
              </h3>
              <p className="text-gray-700 mt-1">
                SSVN High School, Rajahmundry, Andhra Pradesh
              </p>
              <p className="text-sm text-gray-500">
                2019 | GPA: 10/10
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}