"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getContributions } from "../lib/githubContributions";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}
interface Week {
  contributionDays: ContributionDay[];
}
interface Skill {
  title: string;
  description: string;
}

const skills: Skill[] = [
  { title: "Tech Stack 🧠", description: "Python, C, JS, HTML, CSS, GenAI tools." },
  { title: "Dev Power ⚙️", description: "MERN, REST APIs, MongoDB, Firebase." },
  { title: "Creative Edge 🎯", description: "UI/UX enthusiast, minimal & fluid designs." },
];

export default function AboutSection() {
  const router = useRouter();
  const [weeks, setWeeks] = useState<Week[]>([]);
  const CELL_SIZE = 14;

  useEffect(() => {
    getContributions().then((data) => setWeeks(data));
  }, []);

  const handleConnectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/#contact");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ block: "start" });
    }, 100);
  };

  return (
    <section
      id="about"
      className="scroll-mt-32 relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 md:p-16 min-h-screen flex flex-col items-center justify-center pt-40 pb-20"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-300 dark:bg-purple-800 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-cyan-300 dark:bg-cyan-800 opacity-20 rounded-full blur-3xl animate-pulse" />

      <div className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-between gap-20 relative z-10">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <motion.div
            className="relative group w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-400 blur-2xl opacity-50 group-hover:opacity-80 transition duration-500" />
            <img
              src="/navi1.jpg"
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          <motion.h2
            className="mt-4 text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            👋 About Me
          </motion.h2>

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

        {/* Right Side: Skills + GitHub */}
        <div className="flex-1 flex flex-col items-center gap-12 w-full">
          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="group p-4 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-indigo-500/40 transition-transform transform hover:scale-105 duration-300 text-left flex flex-col justify-between h-44"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6 + idx * 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <h3 className="text-sm md:text-base font-semibold text-indigo-600 dark:text-indigo-400 group-hover:text-xl transition-all duration-300 mb-2">
                  {skill.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 font-medium leading-snug">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* GitHub Contributions */}
          <section id="github" className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              🚀 My GitHub Contributions
            </h2>

            <div className="flex flex-col items-center gap-8">
              {/* Stats */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl w-full max-w-md"
              >
                <img
                  src="https://github-readme-stats.vercel.app/api?username=NAVI-1725&show_icons=true&theme=radical"
                  alt="GitHub Stats"
                  className="mx-auto rounded-2xl"
                />
              </motion.div>

              {/* Heatmap */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl overflow-x-auto w-full max-w-md"
              >
                <div
                  className="inline-block"
                  style={{ padding: `${CELL_SIZE / 2}px 0` }}
                >
                  <div className="grid grid-rows-7 grid-flow-col gap-1">
                    {weeks.map((week, i) =>
                      week.contributionDays.map((day, j) => (
                        <div
                          key={`${i}-${j}`}
                          title={`${day.date}: ${day.contributionCount} contributions`}
                          style={{
                            width: `${CELL_SIZE}px`,
                            height: `${CELL_SIZE}px`,
                            backgroundColor: day.color,
                          }}
                          className="rounded-sm"
                        />
                      ))
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>

      {/* Connect Button */}
      <motion.button
        onClick={handleConnectClick}
        className="mt-12 inline-block px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer z-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        📬 Let's Connect!
      </motion.button>
    </section>
  );
}
