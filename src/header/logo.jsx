import React from 'react';
// import { Link } from 'react-router-dom';
import Image from '../images/logo.png';

export default function Logo() {
  return (
    <div>
    <a href="/" className="block" aria-label="Cruip">
       <img
        src={Image}
        alt="Logo"
        width={100} // Set the desired width of the image
        height={50} // Set the desired height of the image
      />
     </a>
    </div>
  );
}
