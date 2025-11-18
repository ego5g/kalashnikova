'use client';

import { useState } from 'react';

const NavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
  <a href={href} className="block py-3 text-center text-gray-400 hover:text-white transition-colors text-2xl" onClick={onClick}>
    {children}
  </a>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Daria Kalashnikova</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programs</a>
            <a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-10 bg-black bg-opacity-95 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col space-y-8">
              <NavLink href="#about" onClick={closeMenu}>About</NavLink>
              <NavLink href="#programs" onClick={closeMenu}>Programs</NavLink>
              <NavLink href="#reviews" onClick={closeMenu}>Reviews</NavLink>
              <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}
