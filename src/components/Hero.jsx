import React from 'react';
import Sidenews from './Sidenews';

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-start px-16 py-8 gap-8 w-screen'>
      <div className="mainhero w-full flex flex-col sm:w-3/4">
        <img className='h-80 w-full object-cover mb-6' src="src/assets/images/image-web-3-desktop.jpg" alt="Hero" />
        
        <div className="topic flex flex-col sm:flex-row justify-between gap-8">
          <h1 className='text-5xl font-bold text-black leading-tight w-full sm:w-3/5'>
            The Bright Future of Web 3.0?
          </h1>
          
          <div className="buttons flex flex-col justify-between w-full sm:w-2/5">
            <p className='text-gray-600 mb-6'>
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
            </p>
            <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white uppercase tracking-wider py-2 px-4 rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-500 ease-in-out transform hover:scale-105'>
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="side w-full sm:w-1/4">
        <Sidenews />
      </div>
    </div>
  );
}

export default Hero;
