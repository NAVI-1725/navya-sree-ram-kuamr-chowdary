import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import TechStackSection from "@/components/TechStackSection"; 
import ResumeSection from "@/components/ResumeSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="techstack"> {/* ✅ Corrected section ID and component */}
          <TechStackSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="resume">
          <ResumeSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
