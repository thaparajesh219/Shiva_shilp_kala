import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const navLinks: { page: Page; label: string }[] = [
  { page: 'home', label: 'Home' },
  { page: 'about', label: 'About' },
  { page: 'gallery', label: 'Gallery' },
  { page: 'custom', label: 'Custom Order' },
  { page: 'contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink: React.FC<{ page: Page; label: string }> = ({ page, label }) => (
    <li>
      <button
        onClick={() => {
          setCurrentPage(page);
          setIsOpen(false);
        }}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
          currentPage === page
            ? 'text-amber-500'
            : 'text-stone-300 hover:text-amber-400'
        }`}
      >
        {label}
      </button>
    </li>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-900/95 shadow-lg' : 'bg-transparent md:bg-stone-900/70'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentPage('home')} 
            className="text-2xl font-bold text-white cursor-pointer hover:text-amber-400 transition-colors text-left"
          >
            Shiva Shilp Kala
          </button>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <NavLink key={link.page} {...link} />
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 bg-stone-900/95 backdrop-blur-md rounded-lg shadow-lg">
            <ul className="flex flex-col items-center py-2">
              {navLinks.map((link) => (
                <NavLink key={link.page} {...link} />
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;