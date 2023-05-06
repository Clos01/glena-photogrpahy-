import React from 'react'

function Footer() {
  return (
   <>
    <footer className="bg-white mt-8 pt-8 border-gray-300 shadow-inner" style={{ height: "300px" }}>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 p-4 sm:p-8">
        <img
          src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          alt=""
          className="col-span-2 object-cover w-full h-70 rounded-md"
        />
        <div className="col-span-3 grid grid-cols-2 gap-4 sm:gap-8">
          <div>
            <p className="font-medium">Call us</p>
            {/* <a href="#" className="block text-2xl font-medium">0123456789</a> */}
            <ul className="mt-4 space-y-1 text-sm text-gray-700">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>
            {/* Social media icons */}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            <div>
              <p className="font-medium">Services</p>
              {/* Services list */}
            </div>
            <div>
              <p className="font-medium">Company</p>
              {/* Company list */}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 mt-8 pt-8">
        <div className="text-center sm:text-right flex flex-wrap justify-between items-center text-xs ">
          <nav>
            <ul className="flex flex-wrap gap-4">
              {/* <li><a href="#" className="text-gray-500">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500">Cookies</a></li> */}
            </ul>
          </nav>
          <p className="mt-4 text-gray-500">
            &copy; 2023. Glenda Mendez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
   </>
  )
}


export default Footer;
