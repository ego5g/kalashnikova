"use client";

import { useState, useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block py-3 px-4 rounded-lg text-center text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 text-2xl font-medium"
  >
    {children}
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 bg-gray-900/70 dark:bg-black/80 backdrop-blur-lg border-b border-gray-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="min-w-0">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition-opacity"
              >
                Дарья Калашникова
              </Link>
            </div>

            <div className="flex items-center">
              <nav className="hidden md:flex items-center space-x-8">
                <Link
                  href="/about"
                  className="font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  О мне
                </Link>
                <Link
                  href="/programs"
                  className="font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Программы
                </Link>
                <Link
                  href="/reviews"
                  className="font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Отзывы
                </Link>
                <Link
                  href="/contact"
                  className="font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Контакты
                </Link>
              </nav>
              <div className="ml-4">
                <ThemeSwitcher />
              </div>
              <div className="md:hidden flex items-center ml-4">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
                  aria-expanded="false"
                >
                  <span className="sr-only">Открыть меню</span>
                  <svg
                    className={`block h-6 w-6 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-20 bg-gray-900 dark:bg-black transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0"
          onClick={closeMenu}
        ></div>
        <div className="relative flex flex-col items-center justify-center h-full p-8">
          <nav className="flex flex-col space-y-6 w-full max-w-xs">
            <NavLink href="/about" onClick={closeMenu}>
              О мне
            </NavLink>
            <NavLink href="/programs" onClick={closeMenu}>
              Программы
            </NavLink>
            <NavLink href="/reviews" onClick={closeMenu}>
              Отзывы
            </NavLink>
            <NavLink href="/contact" onClick={closeMenu}>
              Контакты
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;