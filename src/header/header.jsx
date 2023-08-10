import React, { useState, useEffect } from 'react';
import Logo from './logo';
import MobileMenu from '../screens/mobile-menu';

export default function Header() {
  const [top, setTop] = useState(true);

  // detect whether the user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-gradient-to-r from-teal-500 to-blue-400 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-r from-teal-500 to-teal-400 backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Mobile menu */}
          <nav className="md:hidden">
            <MobileMenu />
          </nav>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li style={{width:'12%'}}>
                <a href="https://app.offerghosting.com" className="btn-sm rounded-full text-gray-200 border justify-center  ml-3 md:ml-6 flex items-center p-2">
                  Sign in
                </a>
              </li>
              <li className="flex items-center">
                <a href="https://app.offerghosting.com/register" className="btn-sm rounded-full text-gray-200 bg-gray-900 ml-3 md:ml-6 flex items-center p-2">
                  <span className="mr-1">Sign up</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
