import React from "react";
import Glenda from "../images/Glenda.png";

function Featured() {
  const images = [
    "Glenda.png",
    "Glenda.png",
    "Glenda.png",
    "Glenda.png",
    "Glenda.png",
    "Glenda.png",
  ];
  return (
    <>
      <section className="bg-gradient-to-b from-green-500 to-white">
        <div className="text-center py-8">
          <h1 className="text-white text-3xl font-bold">Featured work</h1>
          <h2 className="text-white text-xl">Check out some of my work!</h2>
        </div>
        {/* Card container */}
        <div className="container mx-auto py-8">
          {/* White rounded container */}
          <div className="bg-white shadow-lg rounded-md">
            {/* Card grid */}
            <div className="flex flex-wrap justify-center p-4">
              {images.map((image, index) => (
                <div key={index} className="w-1/3 p-4">
                  <div className="bg-white shadow-lg rounded-md">
                    <img
                      className="w-full h-48 object-cover rounded-lg"
                      src={Glenda}
                      alt="Card"
                    />
                    {/* Additional card content goes here */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
