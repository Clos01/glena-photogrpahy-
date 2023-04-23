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
      <section className="bg-gradient-to-b from-[#419F8E] to-white">
        <div className="text-center py-8">
          <h1 className="text-white text-4xl font-bold mt-[4rem]">Featured work</h1>
          <h2 className="text-white text-xl">Check out some of my work!</h2>
        </div>
        {/* Card container */}
        <div className="container mx-auto py-8">
          {/* White rounded container */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            {/* Card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="p-2"> {/* Adjust width of card container */}
                  <div className="bg-white shadow-lg rounded-md">
                    <img
                      className="w-full h-60 md:h-[25rem] object-cover rounded-t-md"
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
