"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      
      {/* Left Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-indigo-600">Navi</span> 👋
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-600 mb-6">
          I'm a{" "}
          <span className="text-indigo-600">
            <Typewriter
              words={[
                'Frontend Developer',
                'Backend Developer',
                'Fullstack Engineer',
                'UI/UX Designer',
                'NLP Engineer',
                'AI Enthusiast',
                'Machine Learning Developer',
                'Deep Learning Specialist',
                'Computer Vision Engineer',
                'Data Scientist',
                'Prompt Engineer',
                'MLOps Engineer',
              ]}              
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="text-gray-600 mb-8">
          I create modern, responsive, and beautiful web applications tailored for your needs.
        </p>

        <a href="#projects">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow-lg hover:scale-105 transition-transform">
            View My Work
          </button>
        </a>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
  src="/navi.jpg" // ✅ Corrected path
  alt="Navi Profile"
  width={400}
  height={400}
  className="rounded-full shadow-2xl object-cover"
/>

      </motion.div>

    </section>
  );
}
