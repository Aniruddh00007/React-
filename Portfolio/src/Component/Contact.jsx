import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-gray-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          Feel free to reach out for collaborations, opportunities, or just to say hi 👋
        </p>

        {/* Contact Links */}
        <div className="flex justify-center gap-8 text-3xl">
          {/* Email */}
          <a
            href="mailto:Aniiiii0007@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaEnvelope />
          </a>
           
          {/* WhatsApp */}
          <a
            href="https://wa.me/918146432981" // Replace with your number
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaWhatsapp />
          </a>

          {/* LinkedIn */}
          <a
            href="https://in.linkedin.com/in/aniruddh-kumar-shaw-537570351"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </a>
         

          {/* GitHub */}
          <a
            href="https://github.com/Aniruddh00007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </a>
        </div>

        {/* Extra - CTA Button */}
        <div className="mt-10">
          <a
            href="mailto:Aniiiii0007@gmail.com"
            className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transition"
          >
            Say Hello ✉️
          </a>
        </div>
      </div>
    </section>
  );
}
