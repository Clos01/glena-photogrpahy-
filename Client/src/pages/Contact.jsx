import React, { useState } from "react";
import GlendaInsta from "../images/GlendaInsta.png";
import { a as animated, useSpring } from '@react-spring/web';


function ContactForm() {
  const formAnimation = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
  });
  
  const instaAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });
  
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
      <div className="flex flex-col md:flex-row justify-center items-center border-black ">
            <animated.div style={formAnimation} className="w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-5xl mt-[2rem]  pb-[3rem] text-center text-[#0f3649]">Get in Contact</h1>
                <div className="flex flex-col justify-center ">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-darkBlue via-lightGreen to-darkGreen shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 max-w-xl">
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
            </animated.div>
            <animated.div style={instaAnimation} className="md:w-1/2 lg:w-1/3">
                <section>
                    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                            <div className="grid p-2 rounded place-content-center sm:p-8">
                                <div className="max-w-md mx-auto text-center lg:text-left">
                                    <header className="lg:w-[15rem]  text-left   ">
                                        <h2 className="text-3xl font-bold text-[#498054c0] sm:text-4xl text-center ">
                                            Thanks for visiting!
                                        </h2>
                                        <p className=" text-gray-500 text-lg mt-5 text-center ">
                                            If you have any questions or concerns, please don't hesitate to get in touch with me.
                                        </p>
                                    </header>
                                </div>
                            </div>
                            <div className="lg:col-span-2 lg:py-8 w-full">
                                <ul className="grid grid-cols-1 gap-4 w-full">
                                    <li className="w-full h-auto object-cover">
                                        <a href="https://www.instagram.com/glenda.mendez.photography/" target="_blank" rel="noopener noreferrer" className="block group w-full">
                                            <img src={GlendaInsta} alt="img for insta" className="object-cover w-full h-[15rem] rounded aspect-square" />
                                            <div className="mt-3 text-center">
                                                <h3 className="text-2xl font-medium text-[#498054] group-hover:underline group-hover:underline-offset-4 mt-[2rem]">
                                                    Follow my Instagram 😁
                                                </h3>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </animated.div>
        </div>
    </>
  );
}

export default ContactForm;
