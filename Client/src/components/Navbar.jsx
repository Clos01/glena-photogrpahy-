import React from 'react'
import { Link } from 'react-router-dom'; 
import { FaInstagram } from "react-icons/fa"; 

// import GlendasLogo from '';

function Navbar() {
  return (
    <nav className='bg-gray-800'>

        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px8'>
            <div className='relative flex items-center justify-between h-16'>
                <div className='flex items-center justify-center'>
                    <div className='flex-shrink-0'>
                        {/* LOGO */}
                        <img className='h-8 w-8' src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg' alt='logo'/>
                    </div>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default Navbar