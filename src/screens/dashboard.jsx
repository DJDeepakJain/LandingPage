import React from 'react';
import YouTubeVideo from './youtube';

export default function Dashboard() {
  return (
    <section className="relative">
      {/* Background Illustration */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          {/* ... (rest of the SVG code) ... */}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-16 pb-12 md:pt-20 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-8 md:pb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-2" data-aos="zoom-y-out">No More Candidate Ghosting.</h1>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Let's Make Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">Commitments Real Again.</span></h2>
            <div className="max-w-md mx-auto">
              <p className="text-lg text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our Platform helps transform the future of hiring by maintaining transparent and immutable applicants data forever in the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">blockchain.</span></p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <a className="btn text-white rounded-lg bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 p-3 sm:p-4" target="_blank" href="http://app.offerghosting.com/register" rel="noopener noreferrer">Start Free Trial</a>
                <a className="btn text-white rounded-lg bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 p-3 sm:p-4" target="_blank" href="http://app.offerghosting.com" rel="noopener noreferrer">Learn more about Alpha Launch</a>
              </div>
            </div>
          </div>

          {/* Hero image */}
         
        <YouTubeVideo />
        </div>

      </div>
    </section>
  )
}
