import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/Logo.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Menu toggled, isOpen = ', isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = (
    <>
      <Link
        to="/"
        onClick={closeMenu}
        className="mobileNavCss mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-[#6bc489d2] hover:text-white"
      >
        Home
      </Link>
      <Link
        to="/About"
        onClick={closeMenu}
        className="mobileNavCss mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium"
      >
        About
      </Link>
      <Link
        to="/gallery"
        onClick={closeMenu}
        className="mobileNavCss mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium"
      >
        Gallery
      </Link>
      <Link
        to="/contact"
        onClick={closeMenu}
        className="mobileNavCss mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium"
      >
        Contact
      </Link>
      <Link
        to="/Polices"
        onClick={closeMenu}
        className="mobileNavCss mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-[#6bc489d2] hover:text-white"
      >
        Polices
      </Link>
      <Link
        to="/services"
        onClick={closeMenu}
        className="mobileNavCss mobilebHover mobileBtn px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-[#6bc489d2] hover:text-white"
      >
        Services
      </Link>
    </>
  );

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-24 w-24" src={logo} alt="logo" />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 hover:text-green focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks}
          </div>
          <div className={`mobileNavCss w-full absolute top-16 right-0 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col items-center space-y-4">
              {navLinks}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
