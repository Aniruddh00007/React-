import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-900 text-gray-300 py-6 shadow-mt backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left - Copyright */}
        <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Aniruddh</span>. All Rights Reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex space-x-6 text-lg">
          <a
            href="https://github.com/Aniruddh00007" //  GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://in.linkedin.com/in/aniruddh-kumar-shaw-537570351" //  LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:yourmail@example.com" //  your email
            className="mailto:Aniiiii0007@gmail.com"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
