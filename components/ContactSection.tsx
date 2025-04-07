import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="p-10 text-center bg-white">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="flex justify-center gap-8 text-3xl mb-4">
        <a href="https://wa.me/918074288868" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:scale-110 transition-transform">
          <FaWhatsapp />
        </a>
        <a href="mailto:navichowdary1725@gmail.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:scale-110 transition-transform">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/navya-sree-ram-kumar-chowdary-780157298/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transition-transform">
          <FaLinkedin />
        </a>
        <a href="https://github.com/NAVI-1725" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition-transform">
          <FaGithub />
        </a>
      </div>
      <p className="text-lg">📞 Mobile: +91-80742-88868</p>
    </section>
  );
}
