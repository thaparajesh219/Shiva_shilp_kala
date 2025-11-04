import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-6 mt-16">
      <div className="container mx-auto px-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Shiva Shilp Kala | Handcrafted Stone Art & Memorial Sculptures from Nepal.</p>
      </div>
    </footer>
  );
};

export default Footer;
