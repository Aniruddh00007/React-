import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Logo */}
                    <div>
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Resources */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <Link to="/" className="hover:underline">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:underline">About</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Follow Us</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <a
                                    href="https://github.com/hiteshchoudhary"
                                    className="hover:underline"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <Link to="/" className="hover:underline">Discord</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <Link to="#" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-8 border-gray-300" />

                {/* Footer Bottom */}
                <div className="flex flex-col items-center justify-between space-y-4 text-sm text-gray-500 sm:flex-row sm:space-y-0">
                    <span>
                        © 2023 <a href="https://hiteshchoudhary.com" className="hover:underline">Aniruddh</a>. All Rights Reserved.
                    </span>
                    <div className="flex space-x-4">
                        {/* Social Icons */}
                        {[
                            { href: "#", label: "Facebook" },
                            { href: "#", label: "Discord" },
                            { href: "#", label: "Twitter" },
                            { href: "#", label: "GitHub" },
                            { href: "#", label: "Dribbble" },
                        ].map((item, index) => (
                            <Link key={index} to={item.href} className="text-gray-400 hover:text-gray-900" aria-label={item.label}>
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="10" cy="10" r="10" /> {/* Placeholder icon */}
                                </svg>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
