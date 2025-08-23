import React from 'react'
import { GiFruitTree } from "react-icons/gi";
import { FaGasPump, FaBurn } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Projects() {

  const Project = [
    {
      title: "🌿 Plants & Ayurveda Service",
      proj: [
        { 
          name: "Go-Green Plantation", 
          icon: <GiFruitTree className="text-green-600" />, 
          link: "https://plants-and-aryuveda-service.onrender.com/" 
        },
      ],
    },
    {
      title: "⛽ Fuel Pump Services",
      proj: [
        { 
          name: "Fuel Services", 
          icon: <FaGasPump className="text-orange-500" />, 
          link: "https://live-13w7.onrender.com" 
        },
        { 
          name: "Vehicle Mileage", 
          icon: <FaBurn className="text-red-500" />, 
          link: "https://live-13w7.onrender.com/Average.html" 
        },
      ],
    },
  ];

  return (
    <section id="Projects" className="py-16 bg-gradient-to-b from-cyan-950 to-gray-900 rounded-xl">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-14 text-white tracking-wide">
          🚀 My Projects
        </h1>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Project.map((pro, index) => (
            <div 
              key={index}
              className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl rounded-2xl p-8 text-center 
              transform hover:scale-110 hover:shadow-cyan-400/50 transition duration-300 ease-in-out border border-gray-700"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-6 text-cyan-300">{pro.title}</h3>
              
              {/* Project Icons */}
              <div className="flex flex-wrap justify-center gap-6">
                {pro.proj.map((pr, idx) => (
                  <a 
                    key={idx}
                    href={pr.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-sm font-medium hover:text-cyan-300 transition"
                  >
                    <div className="text-5xl mb-2">{pr.icon}</div>
                    <span className="mt-2">{pr.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
