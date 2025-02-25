"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const closeMenu = (e) => {
    if (e.target.id === "menu-overlay") {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };




  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between p-4 w-full">
        <div className="text-xl font-bold text-primary md:mx-0 md:pl-10 lg:pl-36 mr-44 ml-12">
          <Link href="/">Foody Blog</Link>
        </div>

        <div className="hidden md:flex space-x-12 mx-auto">
          <Link href="/" className="uppercase hover:text-primary">Accueil</Link>
          <Link href="/#about" className="uppercase hover:text-primary">À propos</Link>
          <Link href="/#contact" className="uppercase hover:text-primary">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          id="menu-overlay" 
          onClick={closeMenu} 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
        >
          <div className="absolute top-0 left-0 w-full bg-white p-4 shadow-lg z-50">
            <div className="text-xl font-bold text-primary text-center mb-6">
              <Link href="/">FoodyFy</Link>
            </div>

            <Link href="/" className="block py-2 text-center uppercase hover:text-primary">Accueil</Link>
            <Link href="/#about" className="block py-2 text-center uppercase hover:text-primary">À propos</Link>
            <Link href="/#contact" className="block py-2 text-center uppercase hover:text-primary">Contact</Link>
            
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-xl text-primary">
              X
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
