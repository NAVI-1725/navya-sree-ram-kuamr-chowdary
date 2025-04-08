"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollY = window.scrollY;
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 flex flex-col md:flex-row items-center justify-center px-4 overflow-hidden 
      bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Animated Gradient Circles */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none"
      >
        <div className="absolute w-[600px] h-[600px] bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-blue-200 opacity-20 rounded-full blur-2xl animate-bounce delay-1000" />
      </div>

      {/* Left Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight flex flex-wrap justify-center md:justify-start">
          Hi, I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400 ml-2">
            Navya Sree Ram Kumar Chowdary
          </span> 👋
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
          I'm a{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            <Typewriter
              words={[
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Engineer",
                "UI/UX Designer",
                "NLP Engineer",
                "AI Enthusiast",
                "Machine Learning Developer",
                "Deep Learning Specialist",
                "Computer Vision Engineer",
                "Data Scientist",
                "Prompt Engineer",
                "MLOps Engineer",
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

        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
          I create modern, responsive, and beautiful web applications tailored for your needs.
        </p>

        <a href="#projects">
          <button className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-2xl shadow-lg hover:scale-105 transition-transform">
            View My Work
          </button>
        </a>
      </motion.div>

      {/* Right Image with animation */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src="/navi2.jpg"
            alt="Navi Profile"
            width={420}
            height={420}
            className="rounded-full shadow-2xl object-cover border-4 border-indigo-200 dark:border-indigo-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
