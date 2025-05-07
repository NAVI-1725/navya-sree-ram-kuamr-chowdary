"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import { FaDownload, FaEye } from "react-icons/fa";

const Typewriter = dynamic(
  () => import("react-simple-typewriter").then((mod) => mod.Typewriter),
  { ssr: false }
);

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  // Enable client-only rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent background scroll when resume modal is open
  useEffect(() => {
    document.body.style.overflow = showResume ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [showResume]);

  const handleViewResume = () => setShowResume(true);
  const handleCloseResume = () => setShowResume(false);
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (resumeRef.current && !resumeRef.current.contains(e.target as Node)) {
      handleCloseResume();
    }
  };

  if (!isClient) return null;

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

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-20 gap-12 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-1000"
    >
      {/* 3D Animated Background */}
      <div className="bg-3d-anim" />
      <div
        ref={backgroundRef}
        className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none"
      >
        {/* Mobile-optimized animated circles */}
        <div
          className="
            absolute
            w-[200px] h-[200px]
            sm:w-[500px] sm:h-[500px]
            bg-purple-300 opacity-20
            rounded-full blur-3xl
            animate-pulse
          "
        />
        <div
          className="
            hidden sm:block
            absolute
            w-[200px] h-[200px]
            md:w-[400px] md:h-[400px]
            bg-blue-200 opacity-20
            rounded-full blur-2xl
            animate-bounce delay-1000
          "
        />
      </div>

      {/* Left Text Section */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-snug">
          Hi, I&apos;m{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            Navya Sree Ram Kumar Chowdary
          </span>{' '}
          👋
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300">
          I&apos;m a{' '}
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
          <button className="flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full shadow-lg transition-all duration-300">
            View My Work
            <ArrowRight className="w-5 h-5" />
          </button>
        </a>
        <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 mt-10">
          {[
            { title: "5+", desc: "Projects" },
            { title: "2+", desc: "Years Experience" },
            { title: "10+", desc: "Technologies" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                {stat.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-6 mt-8 justify-center md:justify-start">
          <a href="https://github.com/NAVI-1725" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <Github className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
          </a>
          <a href="https://www.linkedin.com/in/navya-sree-ram-kumar-chowdary-780157298/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
          </a>
          <a href="mailto:navichowdary1725@gmail.com" className="hover:scale-110 transition">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" />
          </a>
        </div>
      </motion.div>

      {/* Right Image & Resume */}
      <motion.div className="flex-1 flex flex-col items-center" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
        {/* Profile Photo */}
        <div className="relative group w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <Image
            src="/navi.jpg"
            alt="Penumarthi Navya Sree Ram Kumar Chowdary - Portfolio Photo"
            fill
            className="object-cover rounded-3xl shadow-2xl border-4 border-indigo-400 dark:border-indigo-600 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-3xl"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-all duration-500" />
        </div>

        {/* Curved Resume Box Below Image */}
        <div
          className="mt-6 w-60 sm:w-72 bg-white dark:bg-gray-800 rounded-b-[2rem] rounded-t-[1rem] shadow-lg flex flex-col items-center justify-center gap-3 p-4 cursor-pointer"
          onClick={handleViewResume}
        >
          <p className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">Resume</p>
          <FileText className="w-7 h-7 text-indigo-600 dark:text-indigo-400 mb-2" />
          <div className="flex items-center gap-4">
            <button
              onClick={handleViewResume}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition text-sm sm:text-base"
            >
              <FaEye className="w-5 h-5" />
              View
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition text-sm sm:text-base"
            >
              <FaDownload className="w-5 h-5" />
              Download
            </a>
          </div>
        </div>
      </motion.div>

      {/* Resume Modal Instance */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
            onClick={handleBackdropClick}
          >
            <motion.div
              ref={resumeRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full p-8 overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-indigo-400 dark:scrollbar-thumb-indigo-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                  👩‍💻 Penumarthi Navya Sree Ram Kumar Chowdary
                </h3>
                <button onClick={handleCloseResume} className="text-gray-500 hover:text-red-500 text-2xl font-bold">
                  ×
                </button>
              </div>
              <div className="grid gap-6">
                {[
                  { title: "🎯 Objective", content: "Results-driven CSE student at IIIT Raichur skilled in Python, C, Full-Stack Dev, ML & GenAI. Seeking an internship to apply technical expertise & problem-solving in real-world projects." },
                  { title: "🎓 Education", content: "B.Tech in Computer Science & Engineering – IIIT Raichur (2022 – 2026 Expected)" },
                  { title: "🛠️ Skills", content: "Python, C, JavaScript, HTML, CSS, SQL, MERN Stack, Node.js, GenAI, NLP, ML, MySQL, MongoDB, Firebase" },
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm transition-all">
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                ))}
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold mb-2">💼 Experience</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Software Engineer Intern @ BOSCH – Built AI chatbot using Python, JavaScript, React, Node.js with AI models like LLAMA, Langchain, Hugging Face.</li>
                    <li>Web Developer @ IIIT Raichur – Led website redesign, improved accessibility & performance by 40%.</li>
                    <li>Hackathons – Developed e-commerce recommendation system (Amazon Hackathon), Satellite image classifier (Indian Space Center), AI business analytics tool (Stratovate).</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold mb-2">🚀 Projects</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Personal Portfolio Website – Built a dynamic, responsive portfolio using React.js, TailwindCSS, Framer Motion.</li>
                    <li>AI-Powered Resume Builder – Designed a resume generator app leveraging OpenAI APIs.</li>
                    <li>Chat App – Real-time chat application using Node.js, Socket.io, and MongoDB.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
