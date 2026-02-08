import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SunIcon } from '@components/Sun/sun.jsx';
import { MoonIcon } from '@components/Moon/moon.jsx';
import Image from 'next/image';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Products', href: '/productos' },
  { name: 'About', href: '/quienes-somos' },
  { name: 'Contact', href: '/contacto' },
];

const Header = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    applyTheme(isDark);
  }, []);

  const applyTheme = (dark) => {
    setIsDarkMode(dark);
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  const logoUrl = '/assets/logo.svg';

  return (
    <header className="sticky top-0 z-[1050] w-full bg-primary dark:bg-[#2c2c2c] text-text-base dark:text-[#e0e0e0] shadow-md transition-colors duration-300 py-3 px-6 md:px-12">
      <nav className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="/">
          <Image src={logoUrl} alt="Logo" width={80} height={80} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ name, href }) => (
            <Link key={name} href={href} className="group relative text-sm font-medium hover:text-accent transition-colors">
              {name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => applyTheme(!isDarkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:rotate-[15deg] hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
            <div className="relative w-6 h-5">
              <span className={`absolute block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
              <span className={`absolute block h-0.5 w-full bg-current transition-all duration-300 top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`grid transition-all duration-300 ease-in-out lg:hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden flex flex-col items-center gap-4 pb-4">
          {NAV_LINKS.map(({ name, href }) => (
            <Link key={name} href={href} onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-accent">
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export { Header };