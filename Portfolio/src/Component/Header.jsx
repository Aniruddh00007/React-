import React from 'react'
import { NavLink } from "react-router-dom";
import profileImg from "../assets/Ani.jpg";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-900 shadow-md backdrop-blur-md">
      <nav className="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto">

        {/* Logo / Profile Pic + Name */}
        <div className="flex items-center space-x-3">
          <img 
            src={profileImg} 
           alt="Aniruddh Logo" 
            className="w-10 h-10 rounded-full border-2 border-cyan-400 shadow-md hover:scale-105 transition-transform duration-300"
/>

          <span className="text-lg font-semibold text-cyan-400 tracking-wide hover:text-cyan-300 transition-colors duration-300">
            Aniruddh
          </span>
        </div>

        {/* Portfolio Title
        <div className="hidden md:block text-xl font-bold text-cyan-400 tracking-wide hover:text-cyan-300 transition-colors duration-300">
          MyPortfolio
        </div> */}

        {/* Navigation */}
        <div className="hidden lg:flex space-x-8">
          <NavLink 
            to="/"
            className={({isActive}) =>
              `relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300
               ${isActive 
                 ? "text-cyan-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:rounded-full" 
                 : "text-gray-300 hover:text-cyan-300"}`
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/about_me"
            className={({isActive}) =>
              `relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300
               ${isActive 
                 ? "text-cyan-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:rounded-full" 
                 : "text-gray-300 hover:text-cyan-300"}`
            }
          >
            About
          </NavLink>

                
          <NavLink 
            to="/Project"
            className={({isActive}) =>
              `relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300
               ${isActive 
                 ? "text-cyan-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:rounded-full" 
                 : "text-gray-300 hover:text-cyan-300"}`
            }
          >
            Projects
          </NavLink>

                   
          <NavLink 
            to="/Skills"
            className={({isActive}) =>
              `relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300
               ${isActive 
                 ? "text-cyan-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:rounded-full" 
                 : "text-gray-300 hover:text-cyan-300"}`
            }
          >
            Skills
          </NavLink>

          <NavLink 
            to="/Contact"
            className={({isActive}) =>
              `relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300
               ${isActive 
                 ? "text-cyan-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:rounded-full" 
                 : "text-gray-300 hover:text-cyan-300"}`
            }
          >
            Contact
          </NavLink>
          <NavLink 
            to="/Service"
            className={({isActive}) =>
              `relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300
               ${isActive 
                 ? "text-cyan-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:rounded-full" 
                 : "text-gray-300 hover:text-cyan-300"}`
            }
          >
            Services
          </NavLink>

        </div>
      </nav>
    </header>
  )
}

export default Header;
