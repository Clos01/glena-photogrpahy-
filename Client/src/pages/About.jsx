import React from "react";
import Glenda from "../images/Glenda.png";
function About() {
  return (
    <>
      <section className="bg-white text-[#0f3649] py-12 md:py-16">
        <div className="container mx-auto lg:px-4 md:p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center md:flex md:justify-center sm:grid-cols-1 sm:items-center">
            <div className="relative">
              <img
                className="w-96 h-96 lg:h-[40rem] shadow-lg object-cover mx-auto max-w-md lg:max-w-none"
                src={Glenda}
                alt="Glenda"
              />
            </div>

            {/* container holds img & text */}
            <div className="space-y-6 text-center max-w-lg">
              <h2 className="text-4xl md:text-5xl font-semibold text-theme-title uppercase">
                About Me
              </h2>
              <p className="text-xl">
                As a photographer, I strive to capture the beauty and uniqueness
                of the world around me. With my camera in hand, I'm always
                seeking out new perspectives and angles, looking for the perfect
                shot that tells a story or captures a moment in time.
              </p>
              <div className="text-lg">
                I believe that photography has the power to move and inspire
                people, to bring them closer to the world and to each other.
                Through my work, I hope to share my love of photography with
                others and to encourage them to see the world in a new and
                exciting way.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
