"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "next-themes";

const Typewriter = dynamic(
  () => import("react-simple-typewriter").then((mod) => mod.Typewriter),
  { ssr: false }
);

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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

  if (!isClient) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-20 gap-12 overflow-hidden
      bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-1000"
    >
      {/* Background Circles */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none"
      >
        <div className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-blue-200 opacity-20 rounded-full blur-2xl animate-bounce delay-1000" />
      </div>

      {/* Left Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-snug">
          Hi, I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Navya Sree Ram Kumar Chowdary
          </span>{" "}
          👋
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300">
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

        <a href="#projects">
          <button className="group flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300">
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </a>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 mt-10">
          {[
            { title: "5+", desc: "Projects" },
            { title: "2+", desc: "Years Experience" },
            { title: "10+", desc: "Technologies" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400">{stat.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-8 justify-center md:justify-start">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <Github className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
          </a>
          <a href="mailto:yourmail@example.com" className="hover:scale-110 transition">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
          </a>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <Image
            src="/navi.jpg"
            alt="Navya Sree Ram Kumar Chowdary"
            fill
            className="object-cover rounded-3xl shadow-2xl border-4 border-indigo-400 dark:border-indigo-600 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-3xl"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-all duration-500" />
        </div>
      </motion.div>
    </section>
  );
}
