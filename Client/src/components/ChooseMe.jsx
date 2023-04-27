import React from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

const cardsData = [
  {
    title: "High Quality Images",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique est, vitae laoreet libero venenatis eu. Mauris ut velit sollicitudin, ultricies nisl eu, bibendum elit. Donec maximus semper enim ut mollis. Nulla vel scelerisque nisi. Aenean blandit purus a arcu luctus, ac laoreet arcu mollis.",
    icon: icon1,
  },
  {
    title: "Abundant Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique est, vitae laoreet libero venenatis eu. Mauris ut velit sollicitudin, ultricies nisl eu, bibendum elit. Donec maximus semper enim ut mollis. Nulla vel scelerisque nisi. Aenean blandit purus a arcu luctus, ac laoreet arcu mollis.",
    icon: icon2,
  },
  {
    title: "Modern Equipments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique est, vitae laoreet libero venenatis eu. Mauris ut velit sollicitudin, ultricies nisl eu, bibendum elit. Donec maximus semper enim ut mollis. Nulla vel scelerisque nisi. Aenean blandit purus a arcu luctus, ac laoreet arcu mollis.",
    icon: icon3,
  },
];

function Card({ title, description, icon }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8 h-96" style={{width: '90%', margin: '0 auto'}}>
      <div className="flex items-center justify-center mb-4 md:mb-8 -mt-12 md:-mt-16">
        <div className="bg-gray-100 rounded-full p-4 border-2 border-gray-800">
          <img src={icon} alt="icon" className="h-8 md:h-12 w-8 md:w-12" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2 md:mb-4 text-center">{title}</h2>
      <p className="text-gray-600 text-center mb-4">{description}</p>
    </div>
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

