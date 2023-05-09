import React from "react";
import Glenda from "../images/Glenda.png";

function Featured() {
  const projects = [
    {
      image: Glenda,
      title: "Project 1",
      description: "A brief description of Project 1",
    },
    {
      image: Glenda,
      title: "Project 2",
      description: "A brief description of Project 2",
    },
    {
      image: Glenda,
      title: "Project 2",
      description: "A brief description of Project 2",
    },
    {
      image: Glenda,
      title: "Project 2",
      description: "A brief description of Project 2",
    },
    {
      image: Glenda,
      title: "Project 2",
      description: "A brief description of Project 2",
    },
    {
      image: Glenda,
      title: "Project 2",
      description: "A brief description of Project 2",
    },
   
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-[#5aa06ab1] to-white ">
        <div className="text-center py-8">
          <h1 className="txt-height-lg text-white font-bold mt-[4rem]">
            Featured Work
          </h1>
          <h2 className="text-[#0f3649] text-xl">
            Explore a selection of my portfolio.
          </h2>
        </div>
        {/* Card container */}
        <div className="container mx-auto py-8">
          {/* White rounded container */}
          <div className="bg-white shadow-lg rounded-lg p-4 pb-20 pt-20 space-x-8">
            {/* Card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="p-4">
                  <div className="image-shadow bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 text-center">
                    <img
                      className="w-full h-60 md:h-[25rem] object-cover "
                      src={project.image}
                      alt="Card"
                    />
               
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
