import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

import logo from '../images/Logo.jpg'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = (
    <>
      <Link
        to="/"
        onClick={closeMenu}
        className=" text-gray-900 hover:bg-[#6bc489d2] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Home
      </Link>
      <Link
        to="/About"
        onClick={closeMenu}
        className="text-gray-900 hover:bg-[#6bc489d2] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        About 
      </Link>
      <Link
        to="/gallery"
        onClick={closeMenu}
        className="text-gray-900 hover:bg-[#6bc489d2] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Gallery
      </Link>
      <Link
        to="/contact"
        onClick={closeMenu}
        className="text-gray-900 hover:bg-[#6bc489d2] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Contact
      </Link>
      <Link
        to="/Polices"
        onClick={closeMenu}
        className="text-gray-900 hover:bg-[#6bc489d2] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Polices
      </Link>
    </>
  );

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* LOGO */}
            <img
              className="h-32 w-32"
              src={logo}
              alt="logo"
            />
          </div>
          {/* Hamburger Icon (visible on small screens) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 hover:text-white focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* Links (visible on larger screens) */}
          <div className="hidden md:flex space-x-8">
            {navLinks}
          </div>
          {/* Mobile Navigation Menu */}
          <div className={`absolute top-16 right-0 w-full md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-gray-700 p-4 flex flex-col items-center space-y-4">
              {navLinks}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}



export default Navbar;