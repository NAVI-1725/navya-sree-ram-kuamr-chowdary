"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();
  const images = ["navi1.jpg", "navi2.jpg", "navi3.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Function to handle direct navigation to contact section
  const handleConnectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/#contact");
    // For immediate navigation without scroll animation
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ block: "start" });
      }
    }, 100);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 md:p-16 min-h-[110vh] flex flex-col items-center justify-center pt-32 pb-20"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-300 dark:bg-purple-800 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-cyan-300 dark:bg-cyan-800 opacity-20 rounded-full blur-3xl animate-pulse" />

      {/* Layout */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-between gap-20 relative z-10">
        {/* Left - Profile & About */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          {/* Profile Image with Glow */}
          <motion.div
            className="relative group w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-400 blur-2xl opacity-50 group-hover:opacity-80 transition duration-500" />
            {/* Image */}
            <img
              src={images[currentImage]}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="mt-4 text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            👋 About Me
          </motion.h2>

          {/* Intro */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">
              Penumarthi Navya Sree Ram Kumar Chowdary
            </span>
            , a CSE student at <strong>IIIT Raichur</strong> 🇮🇳. I blend{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
              coding
            </span>{" "}
            and{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
              creativity
            </span>{" "}
            to build cool things.
          </motion.p>

          {/* Achievements */}
          <motion.p
            className="text-base text-gray-600 dark:text-gray-400 max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Former intern at <strong>BOSCH</strong> 🔧,{" "}
            <span className="text-pink-600 dark:text-pink-400 font-semibold">
              Amazon Hackathon Finalist
            </span>{" "}
            🚀, and lead of <strong>IIIT Raichur Website Redesign</strong> 🎨.
          </motion.p>
        </div>

        {/* Right - Skills & GitHub */}
        <div className="flex-1 flex flex-col items-center gap-12">
          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-indigo-500/40 transition-shadow transform hover:scale-105 duration-300 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* GitHub Section */}
          <section id="github" className="text-center w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              🚀 My GitHub Contributions
            </h2>
            <img
              src="https://github-readme-stats.vercel.app/api?username=NAVI-1725&show_icons=true&theme=radical"
              alt="GitHub Stats"
              className="mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </section>
        </div>
      </div>

      {/* Connect Button - FIXED FOR MOBILE */}
      <motion.button
        onClick={handleConnectClick}
        className="mt-12 inline-block px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer z-20 w-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        📬 Let's Connect!
      </motion.button>
    </section>
  );
}

interface Skill {
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    title: "Tech Stack 🧠",
    description: "Python, C, JavaScript, HTML, CSS, GenAI tools (LLAMA, Langchain).",
  },
  {
    title: "Dev Power ⚙️",
    description: "MERN Stack, REST APIs, MongoDB, Firebase, scalable systems.",
  },
  {
    title: "Creative Edge 🎯",
    description: "UI/UX enthusiast passionate about minimal and fluid designs.",
  },
];