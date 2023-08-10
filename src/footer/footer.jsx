
import { hover } from '@testing-library/user-event/dist/hover';
import Logo from '../header/logo';
import React, { useState } from 'react';

export default function Footer() {

  // ... (rest of the code)
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
        console.log(requestBody);
        const response = await fetch(`https://api.offerghosting.com/auth/newsletters`, {
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
    <footer className="bg-gradient-to-r from-teal-500 to-blue-400 backdrop-blur-sm shadow-lg text-white p-4">
    <div className="max-w-6xl mx-auto sm:px-6 pb-4">
      
    </div>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2" style={{ textAlign: 'start' }}>
          <h6 className="text-gray-800 font-medium mb-2">Heading</h6>
            <div className="text-sm text-gray-600">
               <a href="/termsService" target='__blank'
              className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">
                Terms of Service</a> 
            </div>
            <div className="text-sm text-gray-600">
               <a href="/privacyPolicy"  target='__blank'
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">
                   Privacy Policy</a>
            </div>
            <div className="text-sm text-gray-600">
             <a href="/cookies" target='__blank'
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">
                  Cookie Policy</a>
            </div>
            <div className="text-sm text-gray-600">
             <a href="/apiPolicy" target='__blank'
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">
                  API Agreement</a>
            </div>
             <div className="text-sm text-gray-600">
             <a href="/userAgreement" target='__blank'
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">
                  End User Agreement</a>
            </div>
          </div>

          {/* 2nd block */}
          {/* Commented out as an example. */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            {/* ... (rest of the code) */}
          {/* </div> */}

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2" style={{ textAlign: 'start',justifyContent:'center' }}>
          <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="text-sm text-gray-600">
                <a href="/" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Documentation</a>
              </li>
              <li className="text-sm text-gray-600">
                {/* <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorials & Guides</a> */}
              </li>
              <li className="text-sm text-gray-600">
                <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Blog</a>
              </li>
              <li className="mb-2">
                <a href="https://sumerudigital.com/contact/" target='__blank' style={{cursor:'pointer'}} className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Support Center</a>
              </li>
              <li className="mb-2">
                {/* <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Partners</a> */}
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2" style={{ textAlign: 'start' }}>
          <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="text-sm text-gray-600">
                <a href="#0" target='__blank' className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Home</a>
              </li>
              <li className="text-sm text-gray-600">
                <a href="https://sumerudigital.com/company/" target='__blank' style={{cursor:'pointer'}} className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">About us</a>
              </li>
             
              {/* <li>
                <Link href="/cookie-policy" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li> */}
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3" style={{ textAlign: 'start' }}>
          <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" 
                    className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" 
                    placeholder="Your email" required 
                    value={email}
                      onChange={handleChange}
                    />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe" onClick={subscribe}>
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  {isvalid && <p className="text-sm text-orange-400">{errMessage}</p>}
                  {isSubscribe && <p className="text-sm text-black">{errMessage}</p>}
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
          <div  style={{width:'100px',marginLeft:'80px',height:'54px'}} className='hover:scale-105'>
        <Logo />
      </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

{/* Social as */}
<ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
  <li>
    <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900  hover:bg-white bg-gray-200 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
      </svg>
    </a>
  </li>
  <li className="ml-4">
    <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-white rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
      </svg>
    </a>
  </li>
  <li className="ml-4">
    <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-gray-200 hover:bg-white rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
      </svg>
    </a>
  </li>
</ul>

{/* Copyrights note */}
<div className="text-sm text-gray-600 mr-4">&copy; Sumeru Digital Solution. All rights reserved.</div>

</div>
      </div>
    </footer>
  );
}
