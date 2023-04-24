import React from "react";
import Glenda from "../images/Glenda.png";
function About() {
  return (
    <>
      <section class="bg-gray-800 text-white  flex">
        <div class="max-w-screen-xl  pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-6 md:pb-8 lg:pb-10 xl:pb-12 flex text-center ">
          <div class="grid lg:grid-cols-2  ">
            <figure class="flex text-center lg:pl-[10rem] md:mx-auto lg:mx-0">
              <img class="block w-full rounded-xl shadow-lg" src={Glenda} />
            </figure>

            <div class="flex lg:row-start-1 lg:col-start-1 pt-10  ">
              <div class="sm:text-center md:text-center ">
                <h2 class="text-4xl md:text-5xl font-condensed text-theme-title font-extrabold uppercase  ">
                  What do i do?
                </h2>

                <p class="  pt-9   ">by Alex and Cheryl Ipiotis.</p>

                <div class="mt-6">
                  <div class=" ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet officiis, adipisci, quisquam distinctio accusamus
                    nostrum eveniet maxime, id vitae quibusdam aliquam
                    reprehenderit tenetur recusandae impedit ipsa minus facere
                    commodi magni!
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
