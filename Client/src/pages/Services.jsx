import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Portrait Outdoor",
      content: [
        { images: "10-15", price: "$150" },
        { images: "20-25", price: "$200" },
        { images: "30-35", price: "$250" }
      ]
    },
    {
      title: "Portrait: In studio",
      content: [
        { images: "10-15", price: "$225" },
        { images: "20-25", price: "$275" },
        { images: "30-35", price: "$325" }
      ]
    },
    // Add more slides here if needed
  ];

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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Pricing</h2>
        <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>

      <div className="relative">
        <div className="carousel w-full flex justify-center">
          <div className="slide active">
            <div className="p-4 bg-white">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <h3 className="text-xl font-bold">{slides[currentSlide].title}</h3>
                </div>
              </div>
              <hr className="my-2" /> {/* Add a horizontal line */}
              {slides[currentSlide].content.map((line, index) => (
                <div key={index} className="flex justify-between">
                  <div className="flex items-center">
                    <p className="text-gray-500 mt-2 mr-2">{line.images} images</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mt-2">{line.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dots absolute bottom-0 left-0 right-0 flex justify-center">
          {slides.map((slide, index) => (
            <button key={index} className={`dot ${currentSlide === index ? "active" : ""}`} onClick={() => handleSlideChange(index)}></button>
          ))}
        </div>

        <button className="prev absolute top-1/2 left-0 transform -translate-y-1/2" onClick={goToPreviousSlide}>
          <FaChevronLeft />
        </button>
        <button className="next absolute top-1/2 right-0 transform -translate-y-1/2" onClick={goToNextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Services;



