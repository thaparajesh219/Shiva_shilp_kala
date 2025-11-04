import React from 'react';
import { Page } from '../types';
import { HERO_IMAGE_URL } from '../constants';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-[85vh] min-h-[500px] w-full flex items-center justify-center text-white -mt-20">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
      ></div>
      <div className="relative z-20 text-center px-4">
        <h1 
          className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl fade-in"
        >
          A Legacy Carved in Stone
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg fade-in" style={{ animationDelay: '0.5s' }}>
          Handcrafted Murtis & Memorials from the Heart of Nepal
        </p>
        <button
          onClick={() => onNavigate('custom')}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out fade-in"
          style={{ animationDelay: '1s' }}
        >
          Order Your Custom Sculpture
        </button>
      </div>
    </div>
  );
};

export default HomePage;
