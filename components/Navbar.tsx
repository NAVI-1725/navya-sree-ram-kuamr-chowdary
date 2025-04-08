"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#techstack" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="#home" className="flex items-center space-x-3 ml-[-12px] md:ml-0">
          <img
            src="/navi.jpg"
            alt="Navya Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md border-2 border-purple-400 hover:scale-110 transition-transform duration-300"
          />
          <motion.span
            className="text-base sm:text-lg md:text-xl font-bold font-montserrat 
            bg-gradient-to-r from-purple-700 via-pink-500 to-indigo-500 
            bg-clip-text text-transparent tracking-tight whitespace-nowrap"
            animate={{ x: [0, -1.5, 1.5, -1.5, 1.5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" }}
          >
            Navya Sree Ram Kumar Chowdary
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-md"
                      : "text-gray-800 hover:text-indigo-600 hover:bg-indigo-100"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-indigo-700"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/70 backdrop-blur-xl shadow-xl rounded-b-2xl flex flex-col items-center space-y-6 py-6"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-md"
                      : "text-gray-800 hover:text-indigo-600 hover:bg-indigo-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

