import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

// import GlendasLogo from '';

function Navbar() {
    return (
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              {/* LOGO */}
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="logo"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <a
                href="https://www.instagram.com/glenda.mendez.photography/?igshid=ZjE2NGZiNDQ%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center"
              >
                <FaInstagram className="mr-2" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  

export default Navbar;
