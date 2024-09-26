import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Text aligned to the left */}
          <div className="flex items-center">
            <img
              className="h-10 w-10"
              src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_1280.png"
              alt="Logo"
            />
            <span className="ml-3 text-2xl font-bold text-white">
              PNP Technologies
            </span>
          </div>

          {/* Navigation Buttons aligned to the right */}
          <div className="hidden md:flex space-x-4">
            <a
              href="/"
              className="text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Home
            </a>
            <a
              href="/contact"
              className="text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex justify-between px-4 py-2 bg-gray-900">
        <a
          href="/"
          className="text-white bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Home
        </a>
        <a
          href="/contact"
          className="text-white bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
