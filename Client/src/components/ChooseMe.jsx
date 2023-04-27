import React from 'react';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';

const cardsData = [
  {
    title: 'Card 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique est, vitae laoreet libero venenatis eu. Mauris ut velit sollicitudin, ultricies nisl eu, bibendum elit. Donec maximus semper enim ut mollis. Nulla vel scelerisque nisi. Aenean blandit purus a arcu luctus, ac laoreet arcu mollis.',
    icon: icon1,
  },
  {
    title: 'Card 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique est, vitae laoreet libero venenatis eu. Mauris ut velit sollicitudin, ultricies nisl eu, bibendum elit. Donec maximus semper enim ut mollis. Nulla vel scelerisque nisi. Aenean blandit purus a arcu luctus, ac laoreet arcu mollis.',
    icon: icon2,
  },
  {
    title: 'Card 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tristique est, vitae laoreet libero venenatis eu. Mauris ut velit sollicitudin, ultricies nisl eu, bibendum elit. Donec maximus semper enim ut mollis. Nulla vel scelerisque nisi. Aenean blandit purus a arcu luctus, ac laoreet arcu mollis.',
    icon: icon3,
  },
];

function Card({ title, description, icon }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-gray-100 rounded-full p-4">
          <img src={icon} alt="icon" className="h-6 w-6" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CardsSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {cardsData.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
