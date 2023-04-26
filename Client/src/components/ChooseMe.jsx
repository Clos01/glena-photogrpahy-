import React from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

function ChooseMe() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-wrap justify-center">
          {/* CARD 1 */}
          <div className="w-full md:w-1/3 p-3">
            <div className="bg-white rounded-lg overflow-hidden relative">
              <img
                src={icon1}
                alt="High Quality Images"
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 object-contain z-10"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mt-4 text-center">High Quality Images</h2>
                <p className="text-gray-700 mt-2 text-center">
                  Card 1 content goes here.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-full md:w-1/3 p-3">
            <div className="bg-white rounded-lg overflow-hidden relative">
              <img
                src={icon2}
                alt="Abundant Experience"
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 object-contain z-10"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mt-4 text-center">Abundant Experience</h2>
                <p className="text-gray-700 mt-2 text-center">
                  Card 2 content goes here.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="w-full md:w-1/3 p-3">
            <div className="bg-white rounded-lg overflow-hidden relative">
              <img
                src={icon3}
                alt="Modern Equipment"
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 object-contain z-10"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mt-4 text-center">Modern Equipment</h2>
                <p className="text-gray-700 mt-2 text-center">
                  Card 3 content goes here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseMe;

