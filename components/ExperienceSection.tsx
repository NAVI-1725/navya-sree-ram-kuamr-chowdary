"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Project for BOSCH",
      org: "BOSCH",
      desc: "Collaborated on Mobility Aftermarket marketplace project for BGSW, implementing full-stack features and presenting to leadership.",
      logo: "/experience/bosch.png",
      certificatePath: "/experience/bosch_certificate.jpg",
      linkedinUrl:
        "https://www.linkedin.com/posts/navya-sree-ram-kumar-chowdary-780157298_genai-innovation-gratitude-activity-7319348936240963584-JGB_?utm_source=share&utm_medium=member_android"
    },
    {
      title: "Web Developer",
      org: "IIIT Raichur",
      desc: "Led institute website redesign using modern frameworks, improving accessibility and performance by 40%.",
      logo: "/experience/iiitr.png",
    },
    {
      title: "Hackathon - Amazon",
      org: "Finalist",
      desc: "Developed an AI-based e-commerce recommendation system using ML and GenAI.",
      logo: "/experience/amazon.png",
    },
    {
      title: "Hackathon - Indian Space Center",
      org: "Participant",
      desc: "Built a machine learning model for satellite image classification.",
      logo: "/experience/isc.png",
    },
    {
      title: "Blog Publisher",
      org: "Hashnode & Medium",
      desc: "Published complete guides on building modern responsive portfolios using Next.js and Tailwind CSS.",
      logo: "/experience/blog.png",
      links: [
        {
          name: "Hashnode",
          url: "https://createportfoliowithnavi.hashnode.dev/building-a-modern-responsive-portfolio-using-nextjs-and-tailwind-css",
        },
        {
          name: "Medium",
          url: "https://medium.com/@navichowdary1725/in-todays-digital-era-having-a-personal-portfolio-is-more-important-than-ever-9038c419dafc",
        },
      ],
    },
    {
      title: "Frontend Intern",
      org: "CodSoft",
      desc: "Worked on responsive UI components using React and Tailwind, enhancing usability across various screen sizes.",
      logo: "/experience/codsoft.png",
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-10 pt-32 pb-20 px-6 min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute w-96 h-96 top-0 left-10 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl animate-ping" />
        <div className="absolute w-96 h-96 bottom-0 right-10 bg-pink-400 dark:bg-pink-700 rounded-full blur-3xl animate-pulse" />
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
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative group bg-white/70 dark:bg-white/10 backdrop-blur-2xl border border-gray-200 dark:border-white/20 rounded-3xl shadow-lg p-6 md:p-8 transition-all duration-500 scale-90 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
          >
            {/* Color Beam */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition duration-700 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 dark:from-pink-600 dark:via-purple-600 dark:to-blue-600 blur-2xl z-0" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Logo */}
              {exp.logo && (
                <div className="mb-4">
                  <Image
                    src={exp.logo}
                    alt={`${exp.org} logo`}
                    width={80}
                    height={80}
                    className="object-contain h-20 w-20 mx-auto drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
                  />
                </div>
              )}

              {/* Title & Org always visible */}
              <h3 className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                {exp.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-300 font-medium mb-2">
                {exp.org}
              </p>

              {/* Hidden content wrapper */}
              <div className="w-full overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {exp.desc}
                </p>

                {/* Centered Certificate & LinkedIn */}
                {exp.certificatePath && exp.linkedinUrl && (
                  <div className="flex justify-center gap-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={exp.certificatePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-500 text-white rounded-full text-sm shadow hover:bg-indigo-600"
                    >
                      View Certificate
                    </a>
                    <Link
                      href={exp.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm shadow hover:bg-blue-600"
                    >
                      LinkedIn
                    </Link>
                  </div>
                )}

                {/* Blog/Project Links */}
                {exp.links && (
                  <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {exp.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        className="text-indigo-500 underline text-sm hover:text-indigo-700 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
