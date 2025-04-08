'use client';

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Library Management System",
    description:
      "Full-stack system using MySQL, HTML, CSS, JavaScript for book tracking & inventory management.",
    codeLink: "#",
    liveLink: "#",
  },
  {
    title: "Car Chatbot for BOSCH",
    description:
      "AI-powered chatbot using GenAI, MongoDB, Node.js, NLP for vehicle troubleshooting.",
    codeLink: "#",
    liveLink: "#",
  },
  {
    title: "IIIT Raichur Website Redesign",
    description:
      "Upgraded institute website using modern frameworks, enhancing UX, UI, accessibility & speed by 40%.",
    codeLink: "#",
    liveLink: "#",
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
    setSectionKey(Date.now()); // re-trigger animation when path changes
  }, [pathname]);

  return (
    <section
      key={sectionKey}
      id="projects"
      className="relative pt-32 px-6 pb-20 min-h-screen bg-gradient-to-br from-[#e0f2fe] via-[#f5f3ff] to-[#e0f7fa] overflow-hidden"
    >
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl animate-ping top-0 left-10" />
        <div className="absolute w-96 h-96 bg-purple-400 opacity-30 rounded-full blur-3xl animate-pulse right-10 bottom-0" />
      </div>

      <motion.h2
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16"
      >
        🚀 Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group bg-white/30 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-xl p-6 md:p-8 transition-all duration-500 hover:shadow-purple-400 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
          >
            {/* Color Beam */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-all duration-700 bg-gradient-to-br from-purple-300 via-blue-300 to-transparent blur-xl z-0" />

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 text-white hover:bg-purple-700 shadow-md transition"
                >
                  Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md transition"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
