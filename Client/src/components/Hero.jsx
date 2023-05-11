import React from "react";
import glenda from "../images/Glenda.png";

function Hero() {
  return (
    <>
      <div className="relative h-[600px]">
        {/* Background image with transparent overlay */}
        <div className="absolute inset-0 ">

          <img
            className="w-full h-full object-cover object-center custom-object-position custom-object-scale bg-gradient-to-r from-black via-transparent to-black opacity-100"
            src={glenda}
            alt="Background"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
        </div>

        {/* Text content on the left side */}
        <div className="relative flex items-center justify-start h-full px-8 md:items-end md:justify-start">

        <div className="text-white max-w-lg space-y-4 bg-black bg-opacity-50 p-4 rounded-md">


        <h1 className="text-5xl md:text-4xl font-semibold mb-4">Hello,</h1>
<p className="text-2xl md:text-xl font-semibold pb-4">I'm Glenda</p>
<p className="text-lg md:text-base">

              Feel free to take a look around here and immerse yourself in the
              captivating moments captured through my lens. If you have any
              questions about the services I offer or the photography process,
              don't hesitate to explore the FAQ section for helpful answers and
              insights. I'm here to provide any assistance you may need along
              the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
