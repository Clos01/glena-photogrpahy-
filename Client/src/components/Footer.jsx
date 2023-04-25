import React from 'react'

function Footer() {
  return (
   <>
  <footer class="bg-white">
  <div class="grid grid-cols-5 gap-8 p-8">
    <img
      src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
      alt=""
      class="col-span-2 object-cover w-full h-70 rounded-md"
    />
    <div class="col-span-3 grid grid-cols-2 gap-8">
      <div>
        <p class="font-medium">Call us</p>
        <a href="#" class="block text-2xl font-medium">0123456789</a>
        <ul class="mt-4 space-y-1 text-sm text-gray-700">
          <li>Monday to Friday: 10am - 5pm</li>
          <li>Weekend: 10am - 3pm</li>
        </ul>
        {/* Social media icons */}
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div>
          <p class="font-medium">Services</p>
          {/* Services list */}
        </div>
        <div>
          <p class="font-medium">Company</p>
          {/* Company list */}
        </div>
      </div>
    </div>
  </div>
  <div class="border-t border-gray-100 mt-8 pt-8">
    <div class=" text-right flex flex-wrap justify-between items-center text-xs ">
      <nav>
        <ul class="flex flex-wrap gap-4">
          <li><a href="#" class="text-gray-500">Terms & Conditions</a></li>
          <li><a href="#" class="text-gray-500">Privacy Policy</a></li>
          <li><a href="#" class="text-gray-500">Cookies</a></li>
        </ul>
      </nav>
      <p class="  mt-4 text-gray-500 ">
        &copy; 2023. Glenda Mendez. All rights reserved.
      </p>
    </div>
  </div>
</footer>

   
   </>
  )
}

export default Footer