"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-10 pt-32 pb-20 px-6 min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute w-96 h-96 top-0 left-10 bg-purple-300 rounded-full blur-3xl animate-ping" />
        <div className="absolute w-96 h-96 bottom-0 right-10 bg-pink-400 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-2xl"
      >
        💼 Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {[
          {
            title: "Software Engineer Intern",
            org: "BOSCH",
            desc: "Built AI chatbot using Python, JavaScript, React, Node.js. Integrated AI models: LLAMA, Langchain, HuggingFace.",
          },
          {
            title: "Web Developer",
            org: "IIIT Raichur",
            desc: "Led institute website redesign using modern frameworks, improving accessibility and performance by 40%.",
          },
          {
            title: "Hackathon - Amazon",
            org: "Finalist",
            desc: "Developed an AI-based e-commerce recommendation system using ML and GenAI.",
          },
          {
            title: "Hackathon - Indian Space Center",
            org: "Participant",
            desc: "Built a machine learning model for satellite image classification.",
          },
          {
            title: "Stratovate",
            org: "AI Business Analyst",
            desc: "Created an AI-driven analytics tool to visualize and extract business insights.",
          },
        ].map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative group bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
          >
            {/* Color Beam */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition duration-700 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 blur-2xl z-0" />

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                {exp.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-300 font-medium mb-2">
                {exp.org}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
