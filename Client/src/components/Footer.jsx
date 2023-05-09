import React from 'react'
import Cameralogo from "../images/Cameralogo.jpeg"

function Footer() {

  const handlePhoneClick = (e) => {
    e.preventDefault();
    const confirmCall = window.confirm("Are you sure you want to call?");
    if(confirmCall) {
      window.location.href = "tel:9197714223";
    }
  }

  return (
   <>
    <footer className="bg-white mt-8 pt-8 border-gray-300 shadow-inner">
      <div className="flex flex-col md:flex-row lg:p-8">
        <img
          src={Cameralogo}
          alt=""
          className="md:w-[25rem] object-cover h-60 rounded-md md:mr-4"
        />
        <div className="flex flex-col md:flex-row flex-grow">
          <div className="flex flex-col border-r border-gray-300 pr-4 lg:pr-8 md:w-1/2">
            <div className=''>
              <p className="font-medium text-lg md:text-2xl ">Call us</p>
              <a href="tel:9197714223" onClick={handlePhoneClick} className="text-[#c2a03a] text-md md:text-lg font-bold ">(919)-771-4223</a>
              <h1 className='text-lg md:text-2xl pt-2'>Shooting Hours</h1>
              <ul className="mt-4  text-xs md:text-sm text-gray-700 flex-grow">
                <li className='py-2'><span className='text-md md:text-lg font-bold'>Monday to Friday:</span> 10am - 4pm</li>
                <li className='py-2'><span className='text-md md:text-lg font-bold '> Saturday </span> 3pm - 4pm</li>
                <li className='py-2'><span className='text-md md:text-lg font-bold '> Sunday </span> 10am - 3pm</li>
              </ul>
              <p className="font-medium text-xs md:text-sm">glenda.mendez.photography@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-start  lg:pl-8 md:w-1/2">
            <p className="font-medium text-lg md:text-2xl mt-4 md:mt-0">Office Hours</p>
            <ul className="mt-4 text-xs md:text-sm text-gray-700">
              <li className='py-2'><span className='text-md md:text-lg font-bold'>Monday to Friday:</span></li>
              <li className='py-2'><span className='text-md md:text-lg font-bold '> Saturday </span> 9am - 12pm</li>
              <li className='py-2'><span className='text-md md:text-lg font-bold '> Sunday </span> 1pm - 5pm</li>
            </ul>
            <p className="font-medium text-xs md:text-sm">Raleigh,Nc</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 text-gray-500">
        &copy; 2023. Glenda Mendez. All rights reserved.
      </div>
    </footer>
   </>
  )
}

export default Footer;
