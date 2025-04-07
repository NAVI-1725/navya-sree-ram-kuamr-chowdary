"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-cyan-50 p-10 md:p-20 text-center min-h-screen flex flex-col items-center justify-center"
    >
      {/* Background Blurred Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300 opacity-30 rounded-full blur-3xl animate-pulse" />

      <motion.h2
        className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-800 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        🚀 I’m a passionate <span className="font-semibold text-indigo-500">Full-Stack Developer</span> with a strong love for crafting elegant, high-performance web apps.
        Skilled in <span className="font-semibold text-cyan-500">Next.js, React, Node.js, MongoDB, TailwindCSS</span> and modern UI/UX design principles.
        I thrive on building products that are not only functional but also <span className="italic">visually captivating</span>.
      </motion.p>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="p-8 bg-white rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:rotate-1 hover:shadow-3xl hover:bg-gradient-to-tr from-indigo-200 to-cyan-200 backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.2, type: "spring", stiffness: 100 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{skill.title}</h3>
            <p className="text-gray-600">{skill.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Button */}
      <motion.a
        href="#contact"
        className="mt-16 inline-block px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-110 transform transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        Let's Connect
      </motion.a>
    </section>
  );
}

const skills = [
  {
    title: "Frontend Wizard ✨",
    description: "React.js, Next.js, TailwindCSS, Responsive UI/UX, Animations.",
  },
  {
    title: "Backend Architect 🛠️",
    description: "Node.js, Express.js, MongoDB, REST APIs, Authentication.",
  },
  {
    title: "Creative Designer 🎨",
    description: "Modern, clean UI designs, Figma prototypes, Micro-interactions.",
  },
];
