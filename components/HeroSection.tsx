"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "next-themes";

// Dynamic import without SSR
const Typewriter = dynamic(
  () => import("react-simple-typewriter").then((mod) => mod.Typewriter),
  { ssr: false }
);

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set true only after client-side mount
  }, []);

  const titles = [
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
  ];

  if (!isClient) return null; // Avoid rendering on server

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 flex flex-col md:flex-row items-center justify-center px-4 gap-8 overflow-hidden 
      bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-1000"
    >
      {/* Background Circles */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none"
      >
        <div className="absolute w-[600px] h-[600px] bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-blue-200 opacity-20 rounded-full blur-2xl animate-bounce delay-1000" />
      </div>

      {/* Left Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left md:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight flex flex-wrap justify-center md:justify-start">
          Hi, I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400 ml-2">
            Navya Sree Ram Kumar Chowdary
          </span>{" "}
          👋
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
          I'm a{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            <Typewriter
              words={titles}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        {/* <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
          I create modern, responsive, and beautiful web applications tailored for your needs.
        </p> */}

        <a href="#projects">
          <button className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-transform duration-300">
            View My Work{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </a>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">5+</h3>
            <p className="text-gray-600 dark:text-gray-400">Projects</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">2+</h3>
            <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">10+</h3>
            <p className="text-gray-600 dark:text-gray-400">Technologies</p>
          </div>
        </div>

        {/* Social Icons (optional) */}
        <div className="flex gap-4 mt-8 justify-center md:justify-start">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" />
          </a>
          <a href="mailto:yourmail@example.com">
            <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition" />
          </a>
        </div>

      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="flex-1 md:order-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/navi.jpg"
          alt="Navya Sree Ram Kumar Chowdary"
          width={400}
          height={400}
          className="rounded-3xl shadow-xl border-4 border-indigo-400 dark:border-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
