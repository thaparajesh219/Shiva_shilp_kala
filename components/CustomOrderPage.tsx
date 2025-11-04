import React from 'react';
import { CONTACT_WHATSAPP_NUMBER, CUSTOM_ORDER_IMAGE_URL } from '../constants';

const CustomOrderPage: React.FC = () => {
  const whatsappMessage = encodeURIComponent("Namaste! I'm interested in ordering a custom stone sculpture from Shiva Shilp Kala.");
  const whatsappLink = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-stone-800 mb-2 fade-in">Create a Timeless Memory</h2>
        <p className="text-lg text-stone-600 fade-in" style={{ animationDelay: '0.3s' }}>Your Vision, Hand-Carved in Stone</p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 fade-in" style={{ animationDelay: '0.6s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 w-full fade-in" style={{ animationDelay: '0.9s' }}>
          <img src={CUSTOM_ORDER_IMAGE_URL} alt="Tools and an unfinished stone sculpture" className="rounded-lg shadow-xl w-full"/>
        </div>
        <div className="md:w-1/2 w-full space-y-4 fade-in" style={{ animationDelay: '1.2s' }}>
          <h3 className="text-2xl font-bold text-stone-800">How It Works</h3>
          <p className="text-lg text-stone-700 leading-relaxed">
            We specialize in bringing your personal stories and visions to life. Whether you want to immortalize a loved one from a photograph or have a specific design in mind for a divine murti, our artist will work with you to create a masterpiece.
          </p>
          <ul className="list-disc list-inside space-y-2 text-stone-700">
            <li>Send us your photo, sketch, or idea.</li>
            <li>We will discuss the stone type, size, and details.</li>
            <li>Our artist will hand-carve your vision with precision and care.</li>
            <li>We'll share progress and ensure it meets your heart's desire.</li>
          </ul>
          <div className="mt-8 text-center md:text-left">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.846 6.069l-1.259 4.605 4.74-1.241z" /></svg>
              <span>Send via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrderPage;