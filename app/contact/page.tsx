"use client";

import Image from 'next/image'
import Link from 'next/link'
import Cursor from '../Cursor'
import SubmissionForm from './SubmissionForm'


export default function Home() {
  return (
    <body className='no-scroll overflow-hidden overscroll-none select-none'>
      <main className='w-full h-screen bg-bgColor z-0 no-scroll overflow-hidden overscroll-none'>
        <Cursor />
        <ul className='ontop w-full h-10 p0 overflow-hidden overscroll-none'>
          <li className='ontop float-left h-fit ml-5'>
            <button className='ontop h-fit mb-1 z-50'>
              <Link href="/">
                <img className='ontop h-9' src='blank-light.png'></img>
              </Link>
            </button>
          </li>
          <li className='ontop'>
            <button className='ontop my-2 mr-5 z-50'>
              <Link className='ontop text-lrColor text-md font-regFont drop-shadow-outGlow' href="/contact">
                Contact
              </Link>
            </button>
          </li>
          <li className='ontop'>
            <button className='my-2.5 mr-5 z-50'>
              <Link href="/about">
                <svg className='fill-lColor w-5 h-5 hover:fill-lrColor hover:drop-shadow-outGlow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
              </Link>
            </button>
          </li>
          <li className='ontop'>
            <button className='ontop my-2.5 mr-5 z-50'>
              <Link href="/">
                <svg className='fill-lColor w-5 h-5 hover:fill-lrColor hover:drop-shadow-outGlow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                  <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                </svg>
              </Link>
            </button>
          </li>
        </ul>
        <div className='w-calc20 minus-20 h-calc50 minus-50 inset-x-bgXInset inset-y-bgYInsetB rounded-lg fixed z-10 bg-urlImg bg-cover bg-top overflow-hidden overscroll-none'>
          <Cursor />
          <p className='ontop font-titleFont text-lrColor text-center text-3xl pt-11'>
            Hey,
          </p>
          <p className='ontop font-regFont text-lrColor text-center text-xl pt-2'>
            Feel free to contact me if this website impresses you and you want us to do more!
          </p>
          <SubmissionForm />
        </div>
      </main>
    </body>
  )
}
