import React from "react";
import glenda from "../images/Glenda.png";

function Hero() {
  return (
    <>
      <div className="relative h-[600px]">
        {/* Background image with transparent overlay */}
        <div className="absolute inset-0">
        <img
  className="w-full h-full object-cover object-center custom-object-position custom-object-scale"
  src={glenda}
  alt="Background"
/>

          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
        </div>

        {/* Text content on the left side */}
        <div className="relative flex items-center justify-start h-full px-8">
          <div className="text-white max-w-lg space-y-4">
            <h1 className="text-5xl font-semibold mb-4">Hello,</h1>
            <p className="text-2xl font-semibold pb-4">
              I'm Glenda
            </p>
            <p className="text-lg">
              Feel free to look around here and explore the captivating moments
              captured through Glenda's lens. If you have any questions about
              the services offered or the photography process, don't hesitate to
              check out the FAQ section for helpful answers and insights.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
