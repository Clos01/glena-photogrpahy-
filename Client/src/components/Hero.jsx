import React from 'react';
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
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Text content on the left side */}
        <div className="relative flex items-center justify-start h-full px-8">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              libero malesuada, cursus tellus in, vestibulum sapien.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
