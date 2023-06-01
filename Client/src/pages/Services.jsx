import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import manyEvents from "../images/glendaprices/events.jpg";
import extraImages from "../images/glendaprices/extraimages.jpg";
import portraitOutdoor from "../images/glendaprices/portraitoutdoor.jpg";
import portraitStudio from "../images/glendaprices/portraitinstudio.jpg";
import Prom from "../images/glendaprices/prom.jpg";
import Quince from "../images/glendaprices/quince.jpg";
import quinceCont from "../images/glendaprices/quincecon.jpg";
import rushedEdit from "../images/glendaprices/rushededitfees.jpg";
import travelFees from "../images/glendaprices/travelfees.jpg";
import wedding from "../images/glendaprices/wedding1.jpg";
import weddingCont2 from "../images/glendaprices/weddingcon2.jpg";
import weddingCont3 from "../images/glendaprices/weddingcon3.jpg";

// array holds images
function Services() {
  const slides = [
    manyEvents,
    extraImages,
    portraitOutdoor,
    portraitStudio,
    Prom,
    Quince,
    quinceCont,
    rushedEdit,
    travelFees,
    wedding,
    weddingCont2,
    weddingCont3,
  ];

  // start at slide 1
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel-container relative mt-8">
      <div className="carousel-slide flex justify-center items-center relative">
        <button
          className="carousel-arrow prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
          onClick={goToPreviousSlide}
        >
          <FaChevronLeft className="text-gray-500" />
        </button>
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide}`}
          className="carousel-image max-w-full max-h-full md:max-w-2xl md:max-h-2xl lg:max-w-3xl lg:max-h-3xl xl:max-w-4xl xl:max-h-4xl"
        />
        <button
          className="carousel-arrow next absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
          onClick={goToNextSlide}
        >
          <FaChevronRight className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}

export default Services;