import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   pricing
  const slides = [
    {
      title: "Portrait: Outdoor",
      content: [
        { images: "10-15", price: "$150" },
        { images: "20-25", price: "$200" },
        { images: "30-35", price: "$250" },
        { images: "40-55", price: "$300" },
        { images: "50-55", price: "$350" },
      ],
    },
    {
      title: 'Portrait: "In studio"',
      content: [
        { images: "10-15", price: "$225" },
        { images: "20-25", price: "$275" },
        { images: "30-35", price: "$325" },
        { images: "40-45", price: "$375" },
        { images: "50-55", price: "$425" },
      ],
    },
    {
      title: "Baby Shower/Gender Reveal,",
      subtitle: "Bautizo, Confirmation, First Communion, Etc",
      content: [
        { images: "10-15", price: "$150" },
        { images: "20-25", price: "$200" },
        { images: "30-35", price: "$250" },
        { images: "40-55", price: "$300" },
        { images: "50-55", price: "$350" },
      ],
    },
    {
      title: "Prom",
      content: [
        { images: "10", price: "$125" },
        { images: "15", price: "$150" },
        { images: "20", price: "$175" },
        { images: "25", price: "$200" },
        { images: "30", price: "$225" },
      ],
    },
    {
      title: "Quince",
      content: [
        { images: "15", price: "$175" },
        { images: "20", price: "$200" },
        { images: "25", price: "$225" },
        { images: "30", price: "$250" },
        { images: "35", price: "$275" },
        { images: "40", price: "$300" },
        { images: "45", price: "$325" },
        { images: "50", price: "$350" },
        { images: "55", price: "$375" },
        { images: "60", price: "$400" },
      ],
    },
    {
      title: "Wedding",
      content: [
        { images: "30", price: "$275" },
        { images: "35", price: "$300" },
        { images: "40", price: "$325" },
        { images: "45", price: "$350" },
        { images: "50", price: "$375" },
        { images: "55", price: "$400" },
        { images: "60", price: "$425" },
        { images: "65", price: "$450" },
        { images: "70", price: "$475" },
        { images: "75", price: "$500" },
        { images: "80", price: "$525" },
        { images: "85", price: "$550" },
        { images: "90", price: "$575" },
        { images: "95", price: "$600" },
        { images: "100", price: "$625" },
      ],
    },
    {
      title: "Extra Images",
      content: [
        { images: "1", price: "$10" },
        { images: "2", price: "$20" },
        { images: "3", price: "$30" },
        { images: "4", price: "$40" },
        { images: "5", price: "$50" },
      ],
    },
    {
      title: "Travel Fees",
      content: [
        { images: "1", price: "$10" },
        { images: "2", price: "$20" },
        { images: "3", price: "$30" },
        { images: "4", price: "$40" },
        { images: "5", price: "$50" },
      ],
    },
    // Add more slides here if needed
  ];

  //   carousel handling
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    const previousSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(previousSlide);
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="carousel w-full flex justify-center">
          <div className="slide active">
            <div className="p-4 bg-white">
              <div className="flex justify-center">
                <h3 className="text-3xl font-bold mb-10" style={{ color: "#88b17e" }}>
                  {slides[currentSlide].title}
                </h3>
              </div>
              {slides[currentSlide].content.map((line, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <p
                        className="text-gray-700 mt-2 mr-2"
                        style={{ color: "#0f3649" }}
                      >
                        {line.images} images
                      </p>
                    </div>
                    <div className="price-box ml-4">
                      <p className="text-white px-4 py-1">{line.price}</p>
                    </div>
                  </div>
                  <hr
                    className="my-4"
                    style={{
                      borderTop: "2px solid #88b17e",
                      marginLeft: "-2rem",
                      marginRight: "-2rem",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dots absolute bottom-0 left-0 right-0 flex justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </div>

        <button
          className="prev absolute top-1/2 left-0 transform -translate-y-1/2"
          onClick={goToPreviousSlide}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next absolute top-1/2 right-0 transform -translate-y-1/2"
          onClick={goToNextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Services;
