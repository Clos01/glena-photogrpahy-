import React from "react";
import Glenda from "../images/Glenda.png";

function About() {
  return (
    <>
      <section class="bg-gray-800 text-white flex">
        <div class=" pt-8 md:pt-12">
          <div class="grid lg:grid-cols-2">
            <div class="pt-10 lg:mr-[15rem] pb-[5rem] ">
              <figure>
                <img
                  class="w-full h-[38rem] lg:ml-[8rem] rounded-xl shadow-lg object-cover"
                  src={Glenda}
                />
              </figure>
            </div>

            <div class="flex lg:row-start-1 lg:col-start-1 pt-10">
              <div class="sm:text-center md:text-center">
                <h2
                  class="text-4xl md:text-5xl font-condensed text-theme-title font-extrabold uppercase"
                  alt=""
                >
                  What do i do?
                </h2>

                <p class="pt-9">Lorem ipsum dolor sit amet consectetur adipisicing</p>

                <div class="mt-6">
                  <div class="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                    officiis, adipisci, quisquam distinctio accusamus nostrum eveniet
                    maxime, id vitae quibusdam aliquam reprehenderit tenetur
                    recusandae impedit ipsa minus facere commodi magni!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
 