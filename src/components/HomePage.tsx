import React from 'react';
import { Page } from '../types';
import { HERO_IMAGE_URL } from '../constants';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-[85vh] min-h-[500px] w-full flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-transparent z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
      ></div>
      <div className="relative z-20 text-center px-4">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl fade-in"
        >
          Where Stone Breathes Life
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg fade-in" style={{ animationDelay: '0.5s' }}>
          Handcrafted Murtis & Memorials from the Heart of Nepal
        </p>
        <button
          onClick={() => onNavigate('custom')}
          className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 duration-300 ease-in-out fade-in"
          style={{ animationDelay: '1s' }}
        >
          Order Your Custom Sculpture
        </button>
      </div>
    </div>
  );
};

export default HomePage;
