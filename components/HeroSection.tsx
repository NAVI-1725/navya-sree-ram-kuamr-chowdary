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
        <h1 className="text-[clamp(1.8rem,5vw,3rem)] font-extrabold font-extrabold text-gray-800 dark:text-white leading-snug">
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
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-8">
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
          <a href="https://www.linkedin.com/in/navya-sree-ram-kumar-chowdary-penumarthi-780157298/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
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
        <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[384px] aspect-square">
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
            {
              title: "🎯 Professional Summary",
              content:
                "Motivated CSE undergraduate at IIIT Raichur (CGPA: 7.6) with experience in GenAI chatbot development, MERN-stack & SQL systems. Completed projects with BOSCH and academic capstones. Seeking an internship to apply full-stack and AI skills in real-world applications.",
            },
            {
              title: "🎓 Education",
              content: "B.Tech in Computer Science & Engineering – IIIT Raichur (2022 – 2026 Expected)",
            },
            {
              title: "🛠️ Technical Skills",
              content:
                "Languages: JavaScript (ES6+), Python, SQL, C, R\nFrameworks: React, Next.js (App Router), Node.js, Express, MERN, LangChain, Framer Motion\nDatabases: MongoDB, MySQL, Firebase\nTools: Git, Docker, Vercel, Linux, Google Analytics",
            },
          ].map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm transition-all">
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="whitespace-pre-line">{item.content}</p>
            </div>
          ))}
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
            <h4 className="text-xl font-semibold mb-2">💼 Experience</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>
                GenAI Chatbot Developer @ BOSCH – Developed vehicle diagnostics chatbot using Python, LangChain, LLAMA. Integrated GenAI models with MERN stack.
              </li>
              <li>
                Web Developer @ IIIT Raichur – Redesigned institute website using React; improved performance by 40% and met accessibility standards. Awarded Best UI/UX.
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
            <h4 className="text-xl font-semibold mb-2">🚀 Projects</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Library Management System – Full-stack app using MERN & MySQL; implemented DB normalization and reduced query latency by 25%.</li>
              <li>College ERP System – Modular ERP (Next.js, Node.js, MongoDB) for academics, finance, hostel & analytics. Deployed with Vercel CI/CD.</li>
              <li>Personal Portfolio – Built with React, TailwindCSS, Framer Motion. Showcases projects, blogs, and resume.</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
            <h4 className="text-xl font-semibold mb-2">📜 Certifications</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>AWS Certified Cloud Practitioner – (In Progress, expected May 2025)</li>
              <li>Data Science & Statistical Analysis (R & Python) – NIT Surat, May–Jun 2024</li>
              <li>BOSCH Project Excellence Certificate – Aug 2023</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
            <h4 className="text-xl font-semibold mb-2">🏆 Achievements</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Top 10 Finalist – Amazon Hackathon 2023</li>
              <li>Best UI/UX Design – IIITR Website Redesign</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
            <h4 className="text-xl font-semibold mb-2">📌 Leadership & Extracurriculars</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>NSS Coordinator & EBSB Head – Led social outreach and cultural exchange programs</li>
              <li>Event Organizer – Managed logistics & PR for tech and cultural fests</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
            <h4 className="text-xl font-semibold mb-2">🔗 Links</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><a href="https://www.linkedin.com/in/navya-sree-ram-kumar-chowdary-penumarthi-780157298/" className="text-blue-500 underline">LinkedIn</a></li>
              <li><a href="https://github.com/NAVI-1725" className="text-blue-500 underline">GitHub</a></li>
              <li><a href="https://navya-sree-ram-kumar-chowdary.vercel.app/#home" className="text-blue-500 underline">Portfolio</a></li>
              <li><a href="https://medium.com/@navichowdary1725" className="text-blue-500 underline">Medium Blog</a></li>
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
