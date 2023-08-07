import React from 'react';
import { useState, useEffect } from 'react';
import Logo from './logo';
// import MobileMenu from './mobile-menu';

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
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-gradient-to-r from-teal-500 to-blue-400" backdrop-blur-sm shadow-lg' : 'bg-gray-400 backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

   
          <nav className="hidden md:flex md:grow">
     
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a href="https://app.offerghosting.com" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</a>
              </li>
              <li className="flex items-center">
  <a href="https://app.offerghosting.com/register" className="btn-sm rounded-md text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 flex items-center p-2">
    <span className="mr-1">Sign up</span>
    <svg className="w-3 h-3 fill-current text-gray-400" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
    </svg>
  </a>
</li>


            </ul>
          </nav>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}
