"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-10 md:p-20 text-center min-h-screen flex flex-col items-center justify-center"
    >
      {/* Animated Blurred Background Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-300 dark:bg-purple-800 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300 dark:bg-cyan-800 opacity-20 rounded-full blur-3xl animate-pulse" />

      {/* Section Heading */}
      <motion.h2
        className="text-5xl md:text-7xl font-extrabold mb-8 text-gray-800 dark:text-white drop-shadow-xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        👋 About Me
      </motion.h2>

      {/* Introduction */}
      <motion.p
        className="text-lg md:text-2xl max-w-4xl mx-auto text-gray-700 dark:text-gray-300 leading-loose font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        I’m <span className="text-indigo-600 dark:text-indigo-400 font-bold">Penumarthi Navya Sree Ram Kumar Chowdary</span>, a results-driven CSE student at <strong>IIIT Raichur</strong> 🇮🇳, passionate about blending code and creativity. With a strong foundation in{" "}
        <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Python, Full-Stack Web Dev, GenAI, and ML</span>, I love building practical, impactful solutions—from chatbots to recommendation engines.
      </motion.p>

      {/* Experience Highlights */}
      <motion.p
        className="text-base md:text-xl max-w-4xl mx-auto text-gray-600 dark:text-gray-400 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I've interned as a Software Engineer at <strong>BOSCH</strong> 🔧, developed award-winning projects like the{" "}
        <span className="font-semibold text-pink-600 dark:text-pink-400">Amazon Hackathon Finalist</span> recommendation system, and led the redesign of the{" "}
        <strong>IIIT Raichur website</strong>—earning the <em>Best UI/UX</em> award.
      </motion.p>

      {/* Skills Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="p-6 bg-white dark:bg-gray-800 backdrop-blur-lg bg-opacity-60 dark:bg-opacity-60 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 100 }}
          >
            <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">{skill.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.a
        href="#contact"
        className="mt-14 inline-block px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-md hover:bg-indigo-700 hover:scale-110 transition duration-300"
        initial={{ opacity: 0, y: 50 }}
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
    description: "Proficient in Python, C, JavaScript, HTML, CSS, and GenAI tools like LLAMA & Langchain.",
  },
  {
    title: "Dev Power ⚙️",
    description: "Hands-on experience with the MERN stack, REST APIs, MongoDB, and Firebase integration.",
  },
  {
    title: "Creative Edge 🎯",
    description: "UI/UX enthusiast with a passion for clean design, animations, and immersive user experiences.",
  },
];
