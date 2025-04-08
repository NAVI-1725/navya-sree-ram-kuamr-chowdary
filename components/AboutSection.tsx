"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const images = ["navi1.jpg", "navi2.jpg", "navi3.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 md:p-10 min-h-[100vh] flex flex-col items-center justify-start text-center pt-20" // <-- pt-20 to push everything slightly down
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-purple-300 dark:bg-purple-800 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-300 dark:bg-cyan-800 opacity-20 rounded-full blur-3xl animate-pulse" />

      {/* Profile Image */}
      <motion.img
        src={images[currentImage]}
        alt="Navi Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl mb-8 mt-10 transition-all duration-700" // <-- mb-8 and mt-10 for extra top and bottom space
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        👋 About Me
      </motion.h2>

      {/* Main Intro */}
      <motion.p
        className="text-base md:text-lg max-w-2xl text-gray-700 dark:text-gray-300 font-medium leading-normal mb-4 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        I’m{" "}
        <span className="text-indigo-600 dark:text-indigo-400 font-bold">
          Penumarthi Navya Sree Ram Kumar Chowdary
        </span>
        , a CSE student at <strong>IIIT Raichur</strong> 🇮🇳. I merge{" "}
        <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
          coding
        </span>{" "}
        and{" "}
        <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
          creativity
        </span>{" "}
        to build impactful solutions.
      </motion.p>

      {/* Achievements */}
      <motion.p
        className="text-sm md:text-base max-w-2xl text-gray-600 dark:text-gray-400 mb-8 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Ex-Intern at <strong>BOSCH</strong> 🔧,{" "}
        <span className="text-pink-600 dark:text-pink-400 font-semibold">
          Amazon Hackathon Finalist
        </span>{" "}
        🚀, led <strong>IIIT Raichur Website Redesign</strong> 🎨.
      </motion.p>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8 + index * 0.2,
              type: "spring",
              stiffness: 150,
            }}
          >
            <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400 mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Button */}
      <motion.a
        href="#contact"
        className="mt-10 inline-block px-6 py-3 bg-indigo-600 text-white rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-indigo-700 hover:scale-110 transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        📬 Let’s Connect!
      </motion.a>
    </section>
  );
}

const skills = [
  {
    title: "Tech Stack 🧠",
    description:
      "Python, C, JavaScript, HTML, CSS, GenAI tools (LLAMA, Langchain).",
  },
  {
    title: "Dev Power ⚙️",
    description:
      "MERN Stack, REST APIs, MongoDB, Firebase, scalable systems.",
  },
  {
    title: "Creative Edge 🎯",
    description:
      "UI/UX lover focusing on minimal designs, fluid animations.",
  },
];
