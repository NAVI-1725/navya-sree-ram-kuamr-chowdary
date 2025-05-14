"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const projects = [
  {
    title: "Car Chatbot for BOSCH",
    description:
      "AI-powered chatbot using GenAI, MongoDB, Node.js, NLP for vehicle troubleshooting.",
    codeLink: "BOSCH_INTERNAL",
    liveLink: "https://bccb-integrated.vercel.app//",
  },
  {
    title: "Library Management System",
    description:
      "Full-stack system using MySQL, HTML, CSS, JavaScript for book tracking & inventory management.",
    codeLink: "#",
    liveLink: "#",
  },
  {
    title: "IIIT Raichur Website Redesign",
    description:
      "Upgraded institute website using modern frameworks, enhancing UX, UI, accessibility & speed by 40%.",
    codeLink: "IIIT_INTERNAL",
    liveLink: "https://iiitr.ac.in/",
  },
  {
    title: "AI-based E-commerce Recommender",
    description:
      "Built for Amazon Hackathon - personalized product recommendation engine using ML & GenAI.",
    codeLink: "#",
    liveLink: "#",
  },
  {
    title: "Satellite Image Classification",
    description:
      "Developed ML model for classifying satellite imagery for Indian Space Center Hackathon.",
    codeLink: "#",
    liveLink: "#",
  },
  {
    title: "AI-driven Business Analytics",
    description:
      "Created analytics dashboard for Stratovate using AI to drive strategic insights from business data.",
    codeLink: "#",
    liveLink: "#",
  },
];

export default function ProjectsSection() {
  const pathname = usePathname();
  const [sectionKey, setSectionKey] = useState(0);

  useEffect(() => {
    setSectionKey(Date.now());
  }, [pathname]);

  const handleInternalClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    type: string
  ) => {
    e.preventDefault();
    if (type === "BOSCH_INTERNAL") {
      alert("Code can't be disclosed due to Company policies.");
    } else if (type === "IIIT_INTERNAL") {
      alert("Code can't be disclosed due to Institute policies.");
    }
  };

  const handleUnavailableClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("Currently updating or under maintenance. Please check back soon.");
  };

  return (
    <section
      key={sectionKey}
      id="projects"
      className="relative pt-28 px-4 pb-16 min-h-screen bg-gradient-to-br from-[#e0f2fe] via-[#f5f3ff] to-[#e0f7fa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-80 h-80 bg-blue-400 opacity-30 rounded-full blur-3xl animate-ping top-0 left-10" />
        <div className="absolute w-80 h-80 bg-purple-400 opacity-30 rounded-full blur-3xl animate-pulse right-10 bottom-0" />
      </div>

      <motion.h2
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-2xl"
      >
        🚀 Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group bg-white/30 dark:bg-white/10 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl shadow-xl p-6 transition-all duration-500 hover:shadow-purple-400 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 bg-gradient-to-br from-purple-300 via-blue-300 to-transparent blur-xl z-0" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4 h-0 group-hover:h-auto overflow-hidden">
                {project.description}
              </p>

              <div className="flex gap-3 mt-auto">
                {/* Code Button */}
                {project.codeLink === "BOSCH_INTERNAL" ||
                project.codeLink === "IIIT_INTERNAL" ? (
                  <a
                    href="#"
                    onClick={(e) => handleInternalClick(e, project.codeLink)}
                    className="px-3 py-2 text-xs font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 shadow-md transition"
                  >
                    Code
                  </a>
                ) : project.codeLink === "#" ? (
                  <a
                    href="#"
                    onClick={handleUnavailableClick}
                    className="px-3 py-2 text-xs font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 shadow-md transition"
                  >
                    Code
                  </a>
                ) : (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-xs font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 shadow-md transition"
                  >
                    Code
                  </a>
                )}

                {/* Live/View Button */}
                {project.liveLink === "#" ? (
                  <a
                    href="#"
                    onClick={handleUnavailableClick}
                    className="px-3 py-2 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow-md transition"
                  >
                    View
                  </a>
                ) : (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow-md transition"
                  >
                    View
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
