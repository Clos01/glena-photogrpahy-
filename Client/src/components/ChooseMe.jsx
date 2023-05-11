import React from "react";
import { a as animated, useSpring } from '@react-spring/web';
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

const cardsData = [
  {
    title: "High Quality Images",
    description:
      "Let me help you capture life's precious moments through Glenda Mendez Photography. I'm Glenda, your dedicated photographer, driven by a passion for creating beautiful memories that last a lifetime. From weddings to special events, I'm here to tell your unique story. Explore my gallery and experience the love and joy that i have captured. Book your session today and let's create something extraordinary together! 📸",
    icon: icon1,
  },
  {
    title: "Abundant Experience",
    description:
      " I approach each session with a profound awareness of life's situations, owing to a depth of personal experience. My goal is to create photography that is both sincere and imaginative, effectively communicating your unique story, and is driven by a true enthusiasm for capturing these special events. Let's start on an amazing photography memorable experience together.🎞️",
    icon: icon2,
  },
  {
    title: "Modern Equipments",
    description:
      "I use new methods and modern technology to ensure that your photographs are of the highest quality. Using cameras, lenses, and lighting equipment, I capture every detail with accuracy and clarity. You can rest easy knowing that your photographs will exceed your expectations by demonstrating an exceptional blend of creativity and technological competence. Let me to use current technology to bring your unique vision to life in breathtaking images. 🏞️ ",
    icon: icon3,
  },
];

function Card({ title, description, icon }) {
  const animation = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const AnimatedDiv = animated('div');

  return (
    <AnimatedDiv
      style={{ ...animation, width: "90%", margin: "0 auto" }}
      className="bg-white p-8 rounded-lg shadow-md mb-8 min-h-96"
    >
      <div className="flex items-center justify-center mb-4 md:mb-8 -mt-12 md:-mt-16">
        <div className="bg-gray-100 rounded-full p-4 border-2 border-gray-800">
          <img src={icon} alt="icon" className="h-8 md:h-12 w-8 md:w-12" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2 md:mb-4 text-center">{title}</h2>
      <p className="text-gray-600 text-center mb-4">{description}</p>
    </AnimatedDiv>
  );
}


function CardsSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-8">
          {cardsData.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
