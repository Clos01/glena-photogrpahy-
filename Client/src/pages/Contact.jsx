import React, { useState } from "react";
import GlendaInsta from "../images/GlendaInsta.png"
function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    inquiryType: "",
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic goes here
    console.log(formState);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className="md:w-1/2">
          <h1 className="text-2xl mb-4 text-center">Get in Contact</h1>
          <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-darkBlue via-lightGreen to-darkGreen shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-lightGreen focus:border-lightGreen sm:text-sm"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-lightGreen focus:border-lightGreen sm:text-sm"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formState.phoneNumber}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-lightGreen focus:border-lightGreen sm:text-sm"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formState.inquiryType}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-lightGreen focus:border-lightGreen sm:text-sm"
                    >
                      <option value="">Select...</option>
                      <option value="portrait">Portrait Photography</option>
                      <option value="commercial">Commercial Photography</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows="3"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-lightGreen focus:border-lightGreen sm:text-sm"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-lightGreen via-darkGreen to-darkBlue  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:darkBlue"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
        <div className="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 className="text-3xl font-bold text-[#498054c0] sm:text-4xl">Thanks for visiting!</h2>

            <p className="mt-4 text-gray-500 text-lg">
              If you have any questions or comments, please don't hesitate to get in touch with me.
            </p>
          </header>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4 ">
          <li className="w-[25rem] h-[25rem]">
            <a href="https://www.instagram.com/glenda.mendez.photography/" className="block group">
              <img
                src={GlendaInsta}
                alt=""
                className="object-cover w-full h-auto  rounded aspect-square"
              />

              <div className="mt-3 text-center">
                <h3 className="text-2xl font-medium text-[#498054] group-hover:underline group-hover:underline-offset-4">
                  Join me on Instagram
                </h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


      </div>
    </>
  );
}

export default ContactForm;
