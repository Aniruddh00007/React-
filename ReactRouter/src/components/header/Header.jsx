

import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-3 mx-auto lg:px-6">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        alt="Logo"
                        className="h-12 mr-2"
                    />
                </Link>

                {/* Right buttons */}
                <div className="flex items-center space-x-2 lg:order-2">
                    <Link
                        to="#"
                        className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        Log in
                    </Link>
                    <Link
                        to="#"
                        className="px-4 py-2 text-sm font-medium text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        Get started
                    </Link>
                </div>

                {/* Navigation links */}
                <div className="hidden w-full lg:flex lg:w-auto lg:order-1">
                    <ul className="flex flex-col mt-4 text-sm font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md transition duration-300
                                 ${
                                        isActive
                                            ? "text-orange-700 font-semibold"
                                            : "text-gray-700 hover:text-orange-700"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                       
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md transition duration-300 ${
                                        isActive
                                            ? "text-orange-700 font-semibold"
                                            : "text-gray-700 hover:text-orange-700"
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md transition duration-300 ${
                                        isActive
                                            ? "text-orange-700 font-semibold"
                                            : "text-gray-700 hover:text-orange-700"
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                         <li>
                            <NavLink
                                to="/github"
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md transition duration-300 ${
                                        isActive
                                            ? "text-orange-700 font-semibold"
                                            : "text-gray-700 hover:text-orange-700"
                                    }`
                                }
                            >
                                GitHub
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
