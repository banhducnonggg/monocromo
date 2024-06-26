"use client";

import Image from 'next/image'
import Link from 'next/link'
import Cursor from './Cursor'
import Slideshow from './Slideshow'
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <body className='no-scroll overflow-hidden overscroll-none select-none nocursor'>
      <main className='w-full h-screen bg-bgColor z-0 no-scroll overflow-hidden overscroll-none nocursor'>
        <Cursor />
        <ul className='ontop w-full h-16 p0 overflow-hidden overscroll-none nocursor'>
          <li className={`ontop float-left h-fit ml-5 ${showNav ? 'hide' : 'show'}`}>
            <button className={`ontop h-fit mb-1 z-50 nocursor btn ${showNav ? 'hide' : 'show'}`}>
              <Link className='nocursor btn' href="/">
                <img className='ontop my-2 ml-2 h-14' src='blank-light.png' alt='logo'></img>
              </Link>
            </button>
          </li>
          <li className='ontop nocursor'>
            <button className='navbtn ontop mt-6 mr-7 z-50 nocursor btn' onClick={toggleNav}>
              <svg className='fill-lrColor w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
              </svg>
            </button>
          </li>
          <li className={`ontop nocursor ${showNav ? 'show' : 'hide'}`}>
            <button className={`ontop my-6 mr-7 z-50 nocursor btn ${showNav ? 'show' : 'hide'}`}>
              <Link className='ontop text-lColor text-xl font-regFont hover:text-lrColor hover:drop-shadow-outGlow nocursor btn' href="/contact">
                Contact
              </Link>
            </button>
          </li>
          <li className={`ontop ${showNav ? 'show' : 'hide'}`}>
            <button className='my-6 mr-7 z-50 nocursor btn'>
              <Link className='nocursor btn' href="/about">
                <svg className='fill-lColor w-6 h-6 hover:fill-lrColor hover:drop-shadow-outGlow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
              </Link>
            </button>
          </li>
          <li className={`ontop ${showNav ? 'show' : 'hide'}`}>
            <button className='ontop my-6 mr-7 z-50 nocursor btn'>
              <Link className='nocursor btn' href="/">
                <svg className='fill-lrColor w-6 h-6 drop-shadow-outGlow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                  <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                </svg>
              </Link>
            </button>
          </li>
        </ul>
        <div className='mainpart w-calc50 minus-20 h-calc100 minus-50 inset-x-bgXInset inset-y-bgYInsetB rounded-lg fixed z-10 bg-urlImg bg-cover bg-top overflow-hidden overscroll-none nocursor'>
          <Cursor />
          <p className='ontop font-titleFont text-drColor text-center text-3xl pt-11'>
            Hi there,
          </p>
          <p className='ontop font-regFont text-drColor text-center text-xl pt-2'>
            Which one would you like to discover today?
          </p>
          <Slideshow />
        </div>
      </main>
      <Analytics />
    </body>
  )
}
