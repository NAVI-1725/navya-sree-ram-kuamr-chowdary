"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { getContributions } from "../lib/githubContributions";
import Head from "next/head";

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
  { title: "Tech Stack🧠", description: "Python, C, JS, HTML, CSS, GenAI tools." },
  { title: "Dev Power⚙️", description: "MERN, REST APIs, MongoDB, Firebase." },
  { title: "Creative🎯", description: "UI/UX enthusiast, minimal & fluid designs." },
];

const profileImages = ["/navi1.jpg", "/navi2.jpg", "/navi3.jpg"];

export default function AboutSection() {
  const router = useRouter();
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [profileIndex, setProfileIndex] = useState(0);
  const CELL_SIZE = 14;

  useEffect(() => {
    getContributions().then((data) => setWeeks(data));
    const interval = setInterval(() => {
      setProfileIndex((prev) => (prev + 1) % profileImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleConnectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/#contact");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ block: "start" });
    }, 100);
  };

  return (
    <>
      <Head>
        <title>About - Penumarthi Navya Sree Ram Kumar Chowdary</title>
        <meta
          name="description"
          content="Explore the journey of Penumarthi Navya Sree Ram Kumar Chowdary, CSE student at IIIT Raichur, showcasing skills, achievements, and GitHub activity."
        />
        <meta property="og:image" content="/navi.jpg" />
      </Head>

      <section
  id="about"
  className="scroll-mt-32 relative overflow-x-hidden bg-gradient-to-br from-indigo-50 via-gray-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 md:px-12 pt-32 pb-24 min-h-screen"
>

        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-300 dark:bg-purple-800 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-cyan-300 dark:bg-cyan-800 opacity-20 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center lg:text-left lg:flex-row gap-16 z-10 relative">
          <motion.div
            className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
            initial={{ rotateY: 180, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-40 group-hover:opacity-70 transition duration-500" />
            <img
              src={profileImages[profileIndex]}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <div className="flex-1 flex flex-col justify-center gap-6">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-white tracking-tight mb-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              👋 About Me
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed max-w-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              I'm <strong className="text-indigo-600 dark:text-indigo-400">Penumarthi Navya Sree Ram Kumar Chowdary</strong>, a <strong>CSE undergraduate at IIIT Raichur</strong>+. I specialize in <strong>GenAI</strong>, the <strong>MERN stack</strong>, and full-stack web systems. Passionate about fusing <span className="text-cyan-600 dark:text-cyan-400 font-semibold">technology and aesthetics</span> to create scalable, modern digital products.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-gray-700 dark:text-gray-400 mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I built an <strong>AI chatbot with BOSCH</strong> using LLMs and LangChain, led the <strong>IIIT Raichur website revamp</strong> , and was a <strong>Top 10 Finalist</strong> at the <strong>Amazon Hackathon</strong> . Currently building a commercial-grade College ERP system.
            </motion.p>

            <motion.p
              className="text-sm md:text-base text-gray-600 dark:text-gray-400 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Blogger • NSS Coordinator • AWS Certified (In Progress)
            </motion.p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24 max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="group p-6 bg-white/90 dark:bg-gray-900 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 border border-gray-200 flex flex-col justify-center items-start gap-2 text-left"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.2, type: "spring" }}
              >
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Section */}
        <section id="github" className="mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
             My GitHub Contributions
          </h2>

          <div className="flex flex-col items-center gap-10">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/90 dark:bg-gray-900 p-6 rounded-3xl shadow-2xl w-full max-w-md border border-gray-200"
            >
              <img
                src="https://github-readme-stats.vercel.app/api?username=NAVI-1725&show_icons=true&theme=radical"
                alt="GitHub Stats"
                className="mx-auto rounded-2xl"
              />
            </motion.div>
          </div>
        </section>

        <motion.button
          onClick={handleConnectClick}
          className="mt-20 px-10 py-4 bg-indigo-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-transform duration-300 mx-auto block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          🔗 Let's Connect!
        </motion.button>
      </section>
    </>
  );
}
