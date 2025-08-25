import React from "react";
import { FaGithub, FaLinkedin , FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImg from "../assets/Ani.jpg";
import ResumeButton from "./Resume_Button";



function Hero() {
  const logos = [
    {
      icon: <FaGithub className="text-3xl" />,
      link: "https://github.com/Aniruddh00007",
    },
    {
      icon: <FaLinkedin className="text-3xl text-blue-500" />,
      link: "https://in.linkedin.com/in/aniruddh-kumar-shaw-537570351",
    },
    {
      icon: <FaEnvelope className="text-3xl text-blue-500" />,
      link: "mailto:Aniiiii0007@gmail.com",
    }
  ];


  return (
    <div className="min-h-screen flex items-center justify-between px-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-1/2"
      >
        <h3 className="text-xl text-gray-400 mb-2">Hello, It's Me</h3>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Aniruddh Kumar Shaw
        </h1>
        <h2 className="text-2xl mt-3 text-gray-300">
          And I'm a <span className="text-cyan-400">Full Stack Developer</span>
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          {logos.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-3 rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-6">
          <a
            href="/project"
            className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transition"
          >
            View Projects
          </a>
           
          <a
            href="/contact"
            className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition"
          >
            Contact Me
          </a>
           <ResumeButton/>
        </div>
      </motion.div>

      {/* Right Section (Profile Image) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-1/2 flex justify-center"
      >
        <div className="w-72 h-72 rounded-full border-4 border-cyan-400 shadow-[0px_0px_60px_-15px_cyan] overflow-hidden">
          <img
            src={profileImg} 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
