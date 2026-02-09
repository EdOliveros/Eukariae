import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import Image from 'next/image';

const NAV_LINKS = [
  { name: 'Inicio', href: ROUTES.HOME },
  { name: 'Blog', href: ROUTES.BLOG },
  { name: 'Productos', href: ROUTES.PRODUCTS },
  { name: 'Nosotros', href: ROUTES.ABOUT },
  { name: 'Contacto', href: ROUTES.CONTACT },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    // Persisted theme preference is stored in localStorage
    applyTheme(isDark);
  }, []);

  const applyTheme = (dark) => {
    setIsDarkMode(dark);
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  const logoUrl = '/assets/logo.svg';

  return (
    <header className="sticky top-0 z-[1050] w-full bg-primary dark:bg-primary-dark text-text-base dark:text-text-base-dark shadow-md transition-colors duration-300 py-3 px-6 md:px-12">
      <nav className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href={ROUTES.HOME} aria-label="Inicio Eukariae">
          <Image
            src={logoUrl}
            alt="Eukariae logo"
            width={80}
            height={80}
            className="h-20 w-auto transition-all duration-300 dark:brightness-0 dark:invert"
            priority
          />
        </Link>

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
              <IconSun className="h-6 w-6" stroke={1.5} />
            ) : (
              <IconMoonStars className="h-6 w-6" stroke={1.5} />
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
