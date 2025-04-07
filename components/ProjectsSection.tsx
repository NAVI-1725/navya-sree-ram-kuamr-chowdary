'use client';

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio using Next.js, Tailwind CSS, and Framer Motion animations.",
  },
  {
    title: "E-commerce Store",
    description: "Full-stack MERN e-commerce store with payment gateway integration and admin dashboard.",
  },
  {
    title: "Blog Platform",
    description: "Markdown based blog platform with user authentication and SEO optimization.",
  },
  {
    title: "3D Product Showcase",
    description: "Interactive 3D product displays using Three.js and React Three Fiber.",
  },
  {
    title: "AI Chatbot",
    description: "Built an AI chatbot using OpenAI's GPT APIs, integrated into a customer service portal.",
  },
  {
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency price tracker app with interactive charts and animations.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="pt-32 p-10 bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 min-h-screen flex flex-col items-center">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-5xl font-extrabold text-gray-800 mb-16 tracking-wide"
      >
        🚀 My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-500 cursor-pointer hover:shadow-purple-400"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
