import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isvalid, setIsvalid] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();
    try {
      const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
      if (!email) {
        setIsvalid(true);
        setErrMessage('Enter your email');
      } else if (!validEmail.test(email)) {
        setIsvalid(true);
        setErrMessage('Enter a valid email');
      } else {
        const requestBody = {
          email: email,
        };
        const response = await fetch(`http://localhost:8484/auth/newsletters`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });
        if (response.status === 201) {
            setIsSubscribe(true);
            setErrMessage('Thanks for subscribing');
            setEmail('');
          } else if (response.status === 400) {
            setIsvalid(true);
            setErrMessage(`${email} is already exist in our platform`);
          }
          
      
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleChange = (e) => {
    try {
      setEmail(e.target.value);
      setIsvalid(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">
            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                {/* ... Background illustration SVG content ... */}
              </svg>
            </div>

            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>


            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
              <h3 className="text-2xl md:text-4xl font-extrabold leading-tighter text-white  mb-2">Want to get the latest features and update to the comming platform feature?</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Welcome to our{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">Alpha launch</span>,
                  we are rolling out new features almost every day, stay connected and up to date with the latest features of the platform.
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input
                      type="email"
                      className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Your email…"
                      name="email"
                      aria-label="Your email…"
                      value={email}
                      onChange={handleChange}
                    />
                    <a className="btn text-white rounded-lg  bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 p-4" href="#0" onClick={subscribe}>
                      Subscribe
                    </a>
                  </div>
                  {isvalid && <p className="text-sm text-orange-400">{errMessage}</p>}
                  {isSubscribe && <p className="text-sm text-lime-500">{errMessage}</p>}
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">No spam. You can unsubscribe at any time.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
