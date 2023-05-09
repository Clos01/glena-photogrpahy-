import React from "react";
import { useSpring, animated } from 'react-spring';
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

const cardsData = [
  {
    title: "High Quality Images",
    description:
      "Capture life's precious moments with Glenda's Photography. I'm Glenda, the lead photographer, passionate about creating beautiful memories through my lens. From weddings to special events, let's tell your unique story together. Experience the love and joy in our gallery. Book your session today! 📸",
    icon: icon1,
  },
  {
    title: "Abundant Experience",
    description:
      "As a photographer at Glenda Photography, I bring an abundance of personal experience to every session. With a genuine passion for capturing life's moments, I strive to create heartfelt and creative photographs that tell your unique story. Trust in my expertise and let's embark on a photographic journey together, creating cherished memories that will last a lifetime.🎞️",
    icon: icon2,
  },
  {
    title: "Modern Equipments",
    description:
      "At Glenda Photography, I am equipped with state-of-the-art tools and technology to ensure the highest quality results for your photos. With modern cameras, lenses, and lighting equipment, I am able to capture every detail with precision and clarity. Rest assured that your images will showcase the perfect blend of artistry and technical excellence, creating stunning visuals that exceed your expectations. Let me harness the power of modern equipment to bring your vision to life.",
    icon: icon3,
  },
];


function Card({ title, description, icon }) {
  const animation = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
  });

  return (
    <animated.div
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
    </animated.div>
  );
}


function CardsSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
