import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import CustomOrderPage from './components/CustomOrderPage';
import ContactPage from './components/ContactPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleSetPage = (page: Page) => {
    if (page !== currentPage) {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setCurrentPage(page);
        setIsAnimatingOut(false);
        window.scrollTo(0, 0);
      }, 300); // Match this with animation duration
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleSetPage} />;
      case 'about':
        return <AboutPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'custom':
        return <CustomOrderPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleSetPage} />;
    }
  };
  
  // Add a key to the main content area to force re-mount on page change, which re-triggers animations
  const pageKey = currentPage;

  return (
    <div className="flex flex-col min-h-screen font-serif bg-stone-100 text-stone-700">
      <Header currentPage={currentPage} setCurrentPage={handleSetPage} />
      <main key={pageKey} className={`flex-grow transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
