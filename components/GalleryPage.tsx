
import React, { useState, useMemo } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { GalleryCategory, GalleryItem } from '../types';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<GalleryCategory>('all');
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  const filteredImages = useMemo(() => {
    if (filter === 'all') {
      return GALLERY_IMAGES;
    }
    return GALLERY_IMAGES.filter(image => image.category === filter);
  }, [filter]);

  const FilterButton: React.FC<{ category: GalleryCategory; label: string }> = ({ category, label }) => (
    <button
      onClick={() => setFilter(category)}
      className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
        filter === category
          ? 'bg-amber-600 text-white shadow-md'
          : 'bg-white text-stone-600 hover:bg-stone-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-stone-800 mb-2 fade-in" style={{ fontFamily: "'Noto Serif', serif" }}>Gallery</h2>
        <p className="text-lg text-stone-600 fade-in" style={{ animationDelay: '0.3s' }}>Our Divine & Memorial Creations</p>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 fade-in" style={{ animationDelay: '0.6s' }}></div>
      </div>

      <div className="flex justify-center space-x-2 md:space-x-4 mb-10 fade-in" style={{ animationDelay: '0.9s' }}>
        <FilterButton category="all" label="All" />
        <FilterButton category="deity" label="God Murtis" />
        <FilterButton category="memorial" label="Memorials" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer fade-in"
            style={{ animationDelay: `${1 + index * 0.1}s` }}
            onClick={() => setSelectedImg(image)}
          >
            <img src={image.src} alt={image.alt} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-white text-lg font-bold">{image.title}</h3>
              <p className="text-amber-300 text-sm capitalize">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-2xl max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg.src.replace('800/600', '1200/800')} alt={selectedImg.alt} className="w-full h-auto rounded-md object-contain max-h-[80vh]" />
            <h3 className="text-xl font-bold mt-4 text-stone-800">{selectedImg.title}</h3>
            <p className="text-stone-600">{selectedImg.alt}</p>
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg text-stone-700 hover:text-red-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
