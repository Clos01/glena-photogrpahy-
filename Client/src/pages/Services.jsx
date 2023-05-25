import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   pricing
  const slides = [
    {
      title: "Portrait: Outdoor",
      content: [
        { image: "10-15", price: "$150" },
        { image: "20-25", price: "$200" },
        { image: "30-35", price: "$250" },
        { image: "40-55", price: "$300" },
        { image: "50-55", price: "$350" },
      ],
    },
    {
      title: 'Portrait: "In studio"',
      content: [
        { image: "10-15", price: "$225" },
        { image: "20-25", price: "$275" },
        { image: "30-35", price: "$325" },
        { image: "40-45", price: "$375" },
        { image: "50-55", price: "$425" },
      ],
    },
    {
      title: "Baby Shower/Gender Reveal,",
      subtitle: "Bautizo, Confirmation, First Communion, Etc",
      content: [
        { image: "10-15", price: "$150" },
        { image: "20-25", price: "$200" },
        { image: "30-35", price: "$250" },
        { image: "40-55", price: "$300" },
        { image: "50-55", price: "$350" },
      ],
    },
    {
      title: "Prom",
      content: [
        { image: "10", price: "$125" },
        { image: "15", price: "$150" },
        { image: "20", price: "$175" },
        { image: "25", price: "$200" },
        { image: "30", price: "$225" },
      ],
    },
    {
      title: "Quince",
      content: [
        { image: "15", price: "$175" },
        { image: "20", price: "$200" },
        { image: "25", price: "$225" },
        { image: "30", price: "$250" },
        { image: "35", price: "$275" },
        { image: "40", price: "$300" },
        { image: "45", price: "$325" },
        { image: "50", price: "$350" },
        { image: "55", price: "$375" },
        { image: "60", price: "$400" },
      ],
    },
    {
      title: "Wedding",
      content: [
        { image: "30", price: "$275" },
        { image: "35", price: "$300" },
        { image: "40", price: "$325" },
        { image: "45", price: "$350" },
        { image: "50", price: "$375" },
        { image: "55", price: "$400" },
        { image: "60", price: "$425" },
        { image: "65", price: "$450" },
        { image: "70", price: "$475" },
        { image: "75", price: "$500" },
        { image: "80", price: "$525" },
        { image: "85", price: "$550" },
        { image: "90", price: "$575" },
        { image: "95", price: "$600" },
        { image: "100", price: "$625" },
      ],
    },
    {
      title: "Extra Images",
      content: [
        { image: "1", price: "$10" },
        { image: "2", price: "$20" },
        { image: "3", price: "$30" },
        { image: "4", price: "$40" },
        { image: "5", price: "$50" },
      ],
    },
    {
      title: "Travel Fees",
      content: [
        { description: "30/30+ min", price: "$10" },
        { description: "1/1+ hour", price: "$25" },
        { description: "2/2+ hours", price: "$50" },
        { description: "3/3+ hours", price: "$75" },
      ],
    },
    {
      title: "Rushed Edit Fees",
      content: [
        {
          description: "If images are needed before 7 business days",
          price: "$25",
        },
      ],
    },
  ];

  // handle slide changing
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
    <div className="container mx-auto mt-16" style={{ maxWidth: "90%" }}>
      <div className="relative">
        <div className="card p-4">
          <div className="carousel w-full flex justify-center">
            <div className="slide active">
              <div className="bg-white rounded-lg shadow-md px-8 py-12">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-[#0f3649] mb-6">
                    {slides[currentSlide].title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {slides[currentSlide].content.map((item, index) => (
                    <div
                      key={index}
                      className={`card-item flex items-center justify-center bg-[#498054c0] p-4 rounded-lg ${
                        slides[currentSlide].content.length === 1
                          ? "mx-auto"
                          : ""
                      }`}
                    >
                      <div className="card-content">
                        <div className="flex items-center">
                          {item.image && (
                            <div className="mr-4">
                              <h4 className="text-lg font-medium text-[#0f3649] mt-2 mb-2">
                                {`${item.image} Images`}
                              </h4>
                            </div>
                          )}
                          <div className="flex items-center">
                            <h4 className="text-lg font-medium text-[#0f3649] mt-2 mb-2">
                              {item.description && (
                                <span className="mr-2">{item.description}</span>
                              )}
                              <span className="text-2xl font-semibold text-[#0f3649]">
                                {item.price}
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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

          {/* carousel arrows */}
          <div className="arrows-container flex justify-between ">
            <button
              className="prev absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-0 sm:inline-block"
              onClick={goToPreviousSlide}
            >
              <FaChevronLeft className="h-8 w-8 text-gray-500" />
            </button>
            <button
              className="next absolute top-1/2 right-0 transform -translate-y-1/3 translate-x-0 sm:inline-block"
              onClick={goToNextSlide}
            >
              <FaChevronRight className="h-8 w-8 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
