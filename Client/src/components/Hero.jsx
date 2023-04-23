import React from "react";
import glenda from "../images/Glenda.png";

function Hero() {
  return (
    <>
      <div className="relative h-[600px]">
        {/* Background image with transparent overlay */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full  object-cover  custom-object-position custom-object-scale" // Use object-center to center the face
            src={glenda}
            alt="Background"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>

        {/* Text content on the left side */}
        <div className="relative flex items-center justify-start h-full px-8">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl italic mb-4">Hello,</h1>
            <p className="text-lg italic ">
              I'm Glenda
            </p>
            <p>  Feel free to look around here and explore the captivating moments
              captured through Glenda's lens. If you have any questions about
              the services offered or the photography process, don't hesitate to
              check out the FAQ section for helpful answers and insights</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
