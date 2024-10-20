import React from 'react';
import imageRetroPCs from '../assets/images/image-retro-pcs.jpg';
import image2 from '../assets/images/image-top-laptops.jpg'
import image3 from '../assets/images/image-gaming-growth.jpg';
const Cards = () => {
  const data = [
    {
      img: imageRetroPCs,
      number: '01',
      title: 'Reviving Retro PCs',
      text: 'What happens when the old PCs are given modern upgrades?',
    },
    {
      img: image2,
      number: '02',
      title: 'Innovating Top Laptops',
      text: 'What will be the future of gaming and workplace computers?',
    },
    {
      img: image3,
      number: '03',
      title: 'Gaming Growth and Innovation',
      text: 'What will be the impact of VR, AR, and AI on the gaming industry?',
    },
  ];

  return (
    <div className='flex flex-col sm:flex-row py-8 px-8 gap-8'>
      {data.map((item, index) => (
        <div 
          key={index} 
          className='card flex flex-row gap-4 hover:shadow-lg transition-shadow duration-500 ease-in-out p-4 rounded-xl bg-gradient-to-br from-white to-gray-100 transform hover:-translate-y-2'>
          <img 
            className='image h-40 w-32 rounded-xl object-cover shadow-md transform hover:scale-105 transition-transform duration-300' 
            src={item.img} 
            alt={item.title} 
          />
          

          <div className="part2 flex flex-col justify-between">
            <div className="number text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">{item.number}</div>
            <div className='title text-lg font-semibold text-gray-900 hover:text-pink-500 transition-colors duration-300'>
              {item.title}
            </div>
            <div className='text text-gray-600'>
              {item.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
