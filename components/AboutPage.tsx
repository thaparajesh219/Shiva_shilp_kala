import React from 'react';
import { ABOUT_IMAGE_URL } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-stone-800 mb-2 fade-in">Our Story</h2>
        <p className="text-lg text-stone-600 fade-in" style={{ animationDelay: '0.3s' }}>A Legacy Carved in Stone</p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 fade-in" style={{ animationDelay: '0.6s' }}></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 w-full fade-in" style={{ animationDelay: '0.9s' }}>
          <img 
            src={ABOUT_IMAGE_URL} 
            alt="Nepali artisan carving stone" 
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2 w-full space-y-6 text-lg text-stone-700 leading-relaxed fade-in" style={{ animationDelay: '1.2s' }}>
          <p>
            Welcome to Shiva Shilp Kala, where stone is given a soul. My journey with stone began in the hills of Nepal, a childhood fascination that grew into a lifelong devotion. For over 25 years, I have dedicated my life to the ancient art of stone carving, a skill passed down through generations.
          </p>
          <p>
            Each strike of the hammer and chisel is a meditation. Whether I am shaping the serene face of Lord Buddha or the powerful form of Lord Shiva, I pour my heart and spirit into the stone. My work is not just about creating a statue; it's about breathing life into a piece of the earth.
          </p>
          <p>
            Beyond the divine, I find profound meaning in crafting memorial sculptures. To capture the essence of a loved one—a parent, a partner, an ancestor—in timeless stone is an honor. These sculptures become a touchstone for memory, a physical embodiment of love that endures forever. Each piece carries a story, a memory, and a piece of my soul.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;