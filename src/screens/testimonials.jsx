import React from 'react';

export default function Testimonials() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-10 lg:py-16">

          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
            <h3 className="text-xl md:text-2xl leading-tighter mb-1">
              <span className="bg-clip-text font-extrabold  text-transparent bg-gradient-to-r from-purple-500 to-blue-800">
                Offer Ghosting
              </span> This refers to when candidates accept job offers but vanish without a trace.
            </h3>
            <p className="text-base" style={{color:'black'}}>
              Leaving companies in a lurch. In the US, companies spend an average of 35 working days and $3500 to hire a candidate, while in India, the costs stand at about 30,000 Rs. The impact of candidate ghosting is significant, affecting businesse's functioning, finances, and future plans.
            </p>
          </div>

          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonials content */}
            {/* You can add your testimonials content here */}
          </div>

          <div className="max-w-3xl mx-auto mt-8 md:mt-12">
            <div className="relative bg-white border border-gray-200 rounded p-4">

              <div className="text-center md:text-left">
                <svg className="w-16 h-16 fill-current text-blue-500 text-center md:absolute md:-mt-3 md:-mr-8" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" style={{top:'-8%',left:'50%'}}>
                  <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                </svg>
                <blockquote className="text-base md:text-xl font-small mb-4 md:mb-6">
                  “ Offer Ghosting aims to tackle this growing problem. Our mission is to create a transparent, accountable, and sustainable job market where 'ghosting' becomes a thing of the past.“
                </blockquote>
                <blockquote className="text-base md:text-xl font-small mb-4 md:mb-6">
                  “ The problem of job ghosting extends to more than financial factors. It's about the investment of time, resources, and efforts, and the disappointment of unfulfilled expectations.“
                </blockquote>
                <blockquote className="text-base md:text-xl font-small mb-4 md:mb-6">
                  “ We address candidate ghosting head-on. We're here to help businesses navigate the complex recruitment landscape, safeguarding them from the unexpected and disappointing reality of job abandonment.“
                </blockquote>
                <p className="block font-semibold md:font-bold text-base md:text-lg not-italic mb-1">
                  <center><span className="bg-clip-text text-center text-transparent bg-gradient-to-r from-purple-500 to-blue-800">OFFER GHOSTING PLATFORM</span></center>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
