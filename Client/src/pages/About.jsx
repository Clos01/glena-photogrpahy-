import React from "react";
import Glenda from "../images/Glenda.png";
function About() {
  return (
    <>
      <section className="bg-[#386747d2] text-white py-12 md:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <img
                className="w-full h-full lg:h-[38rem] rounded-xl shadow-lg object-cover"
                src={Glenda}
                alt="Glenda"
              />
            </div>

            <div className="space-y-6">
              <h2
                className="text-4xl md:text-5xl font-semibold text-theme-title uppercase"
                alt=""
              >
                What do I do?
              </h2>

              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing
              </p>

              <div className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                officiis, adipisci, quisquam distinctio accusamus nostrum eveniet
                maxime, id vitae quibusdam aliquam reprehenderit tenetur
                recusandae impedit ipsa minus facere commodi magni!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
