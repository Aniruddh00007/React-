import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-4">
      <h1 className="text-6xl font-bold text-cyan-400">404</h1>
      <p className="mt-4 text-lg text-gray-300">Oops! The page you're looking for doesn't exist.</p>
      
      <Link 
        to="/" 
        className="mt-6 px-6 py-2 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Page404;
