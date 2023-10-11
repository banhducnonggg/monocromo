"use client"

import Image from 'next/image'
import Link from 'next/link'
import Cursor from '../Cursor'
import { useState } from 'react';

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [showCon, setShowCon] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleCon = () => {
    setShowCon(!showCon);
  };


  return (
    <body className='no-scroll overflow-hidden overscroll-none select-none nocursor'>
      <main className='w-full h-screen bg-bgColor z-0 no-scroll overflow-hidden overscroll-none'>
        <Cursor />
        <ul className='ontop w-full h-16 p0 overflow-hidden overscroll-none'>
          <li className={`ontop float-left h-fit ml-5 ${showNav ? 'hide' : 'show'}`}>
            <button className={`ontop h-fit mb-1 z-50 nocursor btn ${showNav ? 'hide' : 'show'}`}>
              <Link className='nocursor btn' href="/">
                <img className='ontop my-2 ml-2 h-14' src='blank-light.png'></img>
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
                <svg className='fill-lrColor w-6 h-6 drop-shadow-outGlow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
              </Link>
            </button>
          </li>
          <li className={`ontop ${showNav ? 'show' : 'hide'}`}>
            <button className='ontop my-6 mr-7 z-50 nocursor btn'>
              <Link className='nocursor btn' href="/">
                <svg className='fill-lColor w-6 h-6 hover:fill-lrColor hover:drop-shadow-outGlow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                  <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                </svg>
              </Link>
            </button>
          </li>
        </ul>
        <div className='mainpart w-calc50 minus-20 h-calc100 minus-50 inset-x-bgXInset inset-y-bgYInsetB rounded-lg fixed z-10 bg-urlImg bg-cover bg-top overflow-hidden overscroll-none nocursor'>
          <Cursor />
          <p className='ontop font-titleFont text-drColor text-center text-3xl pt-11'>
            Hi, I'm mono-cromo
          </p>
          <p className='ontop font-regFont text-drColor text-center text-xl pt-2'>
            You can call me Alvin/Nam Anh as well!
          </p>
          <div className='introTab absolute flex items-center justify-center p-4 h-1/2 w-full top-1/4'>
            <div className='shrink-0 theAva w-72 h-72 bg-avaImg bg-bottom bg-cover p-4'></div>
            <p className='ontop font-regFont text-lColor text-left text-md pt-2 p-4'>
              I’m a <b className='text-lrColor'>soon-to-be</b> graduate from the University of Calgary with a degree in <b className='text-lrColor'>Computer Science.</b> <br />
              I’m obsessed with <b className='text-lrColor'>game development,</b> having 2 years of <b className='text-lrColor'>front-end web dev</b> experience, <br />
              and dabbling in <b className='text-lrColor'>photography</b> and <b className='text-lrColor'>design.</b> <br />
              Oh, and if you want a <b className='text-lrColor'>cappuccino with a cat on top?</b> Sure, let me make it for you!<br/ >
              Ready to join me on this wild ride of <b className='text-lrColor'>creativity, codes,</b> and <b className='text-lrColor'>caffeine?</b> <br />
              Let’s make some <b className='text-lrColor'>magic</b> together!
            </p>
          </div>

          <div className='introBox flex absolute inline w-full right-4 bottom-4 h-fit nocursor'>
            <p className='conIntro ontop font-navFont text-lrColor text-left text-md nocursor'>
              Connect with me via~ &nbsp;&nbsp;&nbsp;
            </p>
            <p className='conIntro nocursor'>&nbsp;</p>
            <div className='conContainer'>
              <Link className={`nocursor btn ${showCon ? 'show' : 'hide'}`} href='https://www.instagram.com/monocromo.exe/' target='_blank'>
                <div className='ontop w-8 h-8 bg-igImg bg-cover hover:drop-shadow-outGlow'></div>
              </Link><p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <Link className={`nocursor btn ${showCon ? 'show' : 'hide'}`} href='https://www.facebook.com/anhvn0811/' target='_blank'>
                <div className='ontop w-8 h-8 bg-fbImg bg-cover hover:drop-shadow-outGlow'></div>
              </Link><p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <Link className={`nocursor btn ${showCon ? 'show' : 'hide'}`} href='https://github.com/banhducnonggg' target='_blank'>
                <div className='ontop w-8 h-8 bg-gitImg bg-cover hover:drop-shadow-outGlow'></div>
              </Link><p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <Link className={`nocursor btn ${showCon ? 'show' : 'hide'}`} href='https://www.flickr.com/people/banhducnong/' target='_blank'>
                <div className='ontop w-8 h-8 bg-flickrImg bg-cover hover:drop-shadow-outGlow'></div>
              </Link><p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <Link className={`nocursor btn ${showCon ? 'show' : 'hide'}`} href='https://www.linkedin.com/in/banhducnong/' target='_blank'>
                <div className='ontop w-8 h-8 bg-linkedinImg bg-cover hover:drop-shadow-outGlow'></div>
              </Link><p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <Link className={`nocursor btn ${showCon ? 'show' : 'hide'}`} href='mailto: monocromo0811@gmail.com' target='_blank'>
                <div className='ontop w-8 h-8 bg-gmImg bg-cover hover:drop-shadow-outGlow'></div>
              </Link>
            </div>
            <button className='conBtn ontop' onClick={toggleCon}>
              <svg className='fill-lrColor w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path d="M 24 3 A 3 3 0 0 0 21 6 A 3 3 0 0 0 21.375 7.4472656 L 15.550781 14 L 8.8261719 14 A 3 3 0 0 0 6 12 A 3 3 0 0 0 3 15 A 3 3 0 0 0 6 18 A 3 3 0 0 0 8.8242188 16 L 15.550781 16 L 21.373047 22.550781 A 3 3 0 0 0 21 24 A 3 3 0 0 0 24 27 A 3 3 0 0 0 27 24 A 3 3 0 0 0 24 21 A 3 3 0 0 0 22.869141 21.222656 L 17.337891 15 L 22.869141 8.7773438 A 3 3 0 0 0 24 9 A 3 3 0 0 0 27 6 A 3 3 0 0 0 24 3 z"></path>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </body>
  )
}
