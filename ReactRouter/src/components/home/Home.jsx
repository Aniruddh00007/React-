import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="w-full min-h-screen overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative flex flex-col-reverse items-center justify-between w-full px-4 py-12 sm:px-16 sm:py-24 sm:flex-row">
                {/* Left content */}
                <div className="z-10 w-full text-center sm:text-left sm:w-1/2">
                    <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-5xl">
                        Download Now
                        <span className="block text-orange-700 sm:inline sm:ml-2">Lorem Ipsum</span>
                    </h2>

                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 text-white transition duration-300 bg-orange-600 rounded-lg shadow-md hover:bg-orange-700"
                    >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            className="mr-2"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        Download now
                    </Link>
                </div>

                {/* Right image */}
                <div className="flex justify-center w-full sm:w-1/2 sm:absolute sm:right-0 sm:top-10">
                    <img
                        className="object-contain w-60 sm:w-96"
                        src="https://i.ibb.co/5BCcDYB/Remote2.png"
                        alt="Remote"
                    />
                </div>
            </section>

            {/* Centered image */}
            <div className="flex justify-center w-full mt-10 sm:mt-32">
                <img
                    className="object-contain w-40 sm:w-80"
                    src="https://i.ibb.co/2M7rtLk/Remote1.png"
                    alt="Remote Image"
                />
            </div>

            {/* Heading */}
            <h1 className="w-full py-12 text-3xl font-semibold text-center text-gray-800 sm:text-5xl">
                Lorem Ipsum Yojo
            </h1>
        </div>
    );
}
