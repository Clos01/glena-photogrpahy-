import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/Logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled, isOpen = ", isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = (
    <>
      <Link
        to="/"
        onClick={closeMenu}
        className="mobileNavLink mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-[#6bc489d2] hover:text-white"
      >
        Home
      </Link>
      <Link
        to="/about"
        onClick={closeMenu}
        className="mobileNavLink mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium  text-gray-900 hover:bg-[#6bc489d2] hover:text-white"
      >
        About
      </Link>
      <Link
        to="/gallery"
        onClick={closeMenu}
        className="mobileNavLink mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium  text-gray-900 hover:bg-[#6bc489d2] hover:text-white"
      >
        Gallery
      </Link>
      <Link
        to="/contact"
        onClick={closeMenu}
        className="mobileNavLink mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium  text-gray-900 hover:bg-[#6bc489d2] hover:text-white"
      >
        Contact
      </Link>
      <Link
        to="/polices"
        onClick={closeMenu}
        className="mobileNavLink mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-[#6bc489d2] hover:text-white"
      >
        Polices
      </Link>
      <Link
        to="/services"
        onClick={closeMenu}
        className="mobileNavLink mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-[#6bc489d2] hover:text-white"
      >
        Services
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-22">
          <div className="flex-shrink-0 flex items-center">
          <Link to="/" >
            <img className="h-22 w-24" src={logo} alt="logo" />
            </Link>
          </div> 
         
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-green focus:outline-none h-15"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="hidden md:flex   md:space-x-4">{navLinks}</div>

          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-[#faf9f9] z-50 md:hidden">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={closeMenu}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-[#6bc489d2] hover:text-white"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center mt-[50%]">
                {navLinks}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
  
  
}

export default Navbar;
