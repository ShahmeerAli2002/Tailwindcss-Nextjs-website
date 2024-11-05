"use client";
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from 'react';
import CountdownBanner from './countdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className="bg-[#1a1a1a] text-white w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
              <img src="/image/logo.png" alt="Geco" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold">Geco</span>
          </Link>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-8">
            <Link href="/" className="text-xs lg:text-base hover:text-yellow-500 transition-colors whitespace-nowrap">HOME</Link>
            <Link href="/Pages1" className="text-xs lg:text-base hover:text-yellow-500 transition-colors whitespace-nowrap">PAGES</Link>
            <Link href="/about" className="text-xs lg:text-base hover:text-yellow-500 transition-colors whitespace-nowrap">About</Link>
            <Link href="/community" className="text-xs lg:text-base hover:text-yellow-500 transition-colors whitespace-nowrap">COMMUNITY</Link>
            <Link href="/events1" className="text-xs lg:text-base hover:text-yellow-500 transition-colors whitespace-nowrap">Events</Link>
            <Link href="/contact" className="text-xs lg:text-base hover:text-yellow-500 transition-colors whitespace-nowrap">CONTACT</Link>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="hover:text-yellow-500 transition-colors p-1 sm:p-2"
            >
              <FaSearch size={isMobile ? 16 : 18} />
            </button>
            <Link href="/cart" className="relative p-1 sm:p-2">
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">0</span>
            </Link>
            <button className="hidden sm:block bg-yellow-500 text-black px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded hover:bg-yellow-600 transition-colors whitespace-nowrap">
              LOGIN
            </button>
            <button className="md:hidden p-1 sm:p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <GiHamburgerMenu size={isMobile ? 20 : 24} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed top-[3.5rem] sm:top-16 left-0 w-full h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] bg-[#1a1a1a] border-t border-gray-800 overflow-y-auto z-50">
            <div className="flex flex-col px-4 py-2">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-800 hover:text-yellow-500 transition-colors text-sm sm:text-base">HOME</Link>
              <Link href="/Pages1" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-800 hover:text-yellow-500 transition-colors text-sm sm:text-base">PAGES</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-800 hover:text-yellow-500 transition-colors text-sm sm:text-base">About</Link>
              <Link href="/community" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-800 hover:text-yellow-500 transition-colors text-sm sm:text-base">COMMUNITY</Link>
              <Link href="/events1" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-800 hover:text-yellow-500 transition-colors text-sm sm:text-base">Events</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-800 hover:text-yellow-500 transition-colors text-sm sm:text-base">CONTACT</Link>
              <button onClick={() => setIsMenuOpen(false)} className="sm:hidden bg-yellow-500 text-black px-4 py-2 my-3 rounded hover:bg-yellow-600 transition-colors text-sm">
                LOGIN
              </button>
            </div>
          </div>
        )}        <CountdownBanner />
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-start sm:items-center p-4 z-50">
          <div className="bg-[#1a1a1a] p-3 sm:p-4 rounded-lg flex items-center w-full sm:w-4/5 md:w-1/2 lg:w-1/3 mt-16 sm:mt-0">
            <input
              type="text"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none text-white placeholder-gray-500 outline-none text-sm sm:text-base"
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button 
              onClick={handleSearch} 
              className="text-yellow-500 ml-2 hover:text-yellow-600 transition-colors"
            >
              <FaSearch size={isMobile ? 16 : 20} />
            </button>
            <button 
              onClick={() => setIsSearchOpen(false)} 
              className="text-gray-500 hover:text-gray-300 ml-4 text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
