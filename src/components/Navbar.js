"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);

  const closeMenu = (e) => {
    if (e.target.id === "menu-overlay") {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  useEffect(() => {
    if (!isSearchOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between p-4 w-full">
        <div className="text-xl font-bold text-primary md:mx-0 md:pl-10 lg:pl-36 mr-56 ml-12">
          <Link href="/">Foody</Link>
        </div>

        <div className="hidden md:flex space-x-12 mx-auto">
          <Link href="/" className="uppercase hover:text-primary">Accueil</Link>
          <Link href="/#about" className="uppercase hover:text-primary">À propos</Link>
          <Link href="/#contact" className="uppercase hover:text-primary">Contact</Link>
        </div>

        <div className="relative flex justify-end mr-4 lg:mr-12" ref={searchRef}>
          <button 
            onClick={toggleSearch} 
            className="text-primary focus:outline-none p-2 rounded-full hover:bg-gray-200 transition-all"
          >
            <AiOutlineSearch className="w-6 h-6" />
          </button>
          {isSearchOpen && (
            <div className="absolute top-0 right-0 flex items-center">
              <input
                type="text"
                placeholder="Recherche..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-48 md:w-64 p-2 border-b-2 border-primary focus:outline-none transition-all ease-in-out duration-300"
              />
              {searchQuery && (
                <button 
                  onClick={clearSearch} 
                  className="absolute right-2 text-primary p-1"
                >
                  <AiOutlineClose className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
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
