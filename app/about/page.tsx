import Image from 'next/image'
import Link from 'next/link'
import Cursor from '../Cursor'


export default function Home() {
  return (
    <body className='no-scroll overflow-hidden overscroll-none select-none'>
      <main className='w-full h-screen bg-bgColor z-0 no-scroll overflow-hidden overscroll-none'>
        <Cursor />
        <ul className='ontop w-full h-16 p0 overflow-hidden overscroll-none'>
          <li className='ontop float-left h-fit ml-5'>
            <button className='ontop h-fit mb-1 z-50'>
              <Link href="/">
                <img className='ontop my-2 ml-2 h-14' src='blank-light.png'></img>
              </Link>
            </button>
          </li>
          <li className='ontop'>
            <button className='ontop my-6 mr-7 z-50'>
              <Link className='ontop text-lColor text-xl font-regFont hover:text-lrColor hover:drop-shadow-outGlow' href="/contact">
                Contact
              </Link>
            </button>
          </li>
          <li className='ontop'>
            <button className='my-6 mr-7 z-50'>
              <Link href="/about">
                <svg className='fill-lrColor w-6 h-6 drop-shadow-outGlow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
              </Link>
            </button>
          </li>
          <li className='ontop'>
            <button className='ontop my-6 mr-7 z-50'>
              <Link href="/">
                <svg className='fill-lrColor w-5 h-5 hover:fill-lrColor hover:drop-shadow-outGlow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                  <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                </svg>
              </Link>
            </button>
          </li>
        </ul>
        <div className='w-calc50 minus-20 h-calc100 minus-50 inset-x-bgXInset inset-y-bgYInsetB rounded-lg fixed z-10 bg-urlImg bg-cover bg-top overflow-hidden overscroll-none'>
          <Cursor />
          <p className='ontop font-titleFont text-lrColor text-center text-3xl pt-11'>
            Hi, I'm mono-cromo
          </p>
          <p className='ontop font-regFont text-lrColor text-center text-xl pt-2'>
            You can call me Alvin/Nam Anh as well!
          </p>
          <p className='ontop font-regFont text-lColor text-left start-96 top-36 text-md pt-2'>
            I’m a <b className='text-lrColor'>soon-to-be</b> graduate from the University of Calgary with a major in <b className='text-lrColor'>Computer Science.</b> <br />
            I’m obsessed with <b className='text-lrColor'>game development,</b> have 2 years of <b className='text-lrColor'>front-end web dev</b> experience, <br />
            and dabble in <b className='text-lrColor'>photography</b> and <b className='text-lrColor'>design.</b> <br />
            Oh, and if you want a <b className='text-lrColor'>cappuccino with a cat on top?</b> Sure, let me make it for you!<br/ >
            Ready to join me on this wild ride of <b className='text-lrColor'>creativity, code,</b>and <b className='text-lrColor'>caffeine?</b> <br />
            Let’s make some <b className='text-lrColor'>magic</b> together!
          </p>
          <div className='theAva absolute w-72 h-72 bg-avaImg bg-bottom bg-cover left-12 top-52'></div>
          <div className='theImage select-none'>
            <div className='absolute ontop doodlearrow w-40 h-40 bg-arrowImg bg-contain bg-no-repeat top-32 left-72'></div>
            <p className='ontop font-regFont text-lColor text-left start-thatsRight bottom-20 text-md'>
              That's right, I'm mesmerized by cartoon characters' hairstyles
            </p>
          </div>
          <div className='flex absolute inline w-1/2 left-96 bottom-36 h-fit'>
            <p className='ontop font-navFont text-lrColor text-left text-md start 96'>
              Connect with me via~ &nbsp;&nbsp;&nbsp;
            </p>
            <p>&nbsp;</p>
            <Link href='https://www.instagram.com/monocromo.exe/' target='_blank'>
              <div className='ontop w-8 h-8 bg-igImg bg-cover'></div>
            </Link><p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <Link href='https://www.facebook.com/anhvn0811/' target='_blank'>
              <div className='ontop w-8 h-8 bg-fbImg bg-cover'></div>
            </Link><p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <Link href='https://github.com/banhducnonggg' target='_blank'>
              <div className='ontop w-8 h-8 bg-gitImg bg-cover'></div>
            </Link><p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <Link href='https://www.flickr.com/people/186035845@N03/' target='_blank'>
              <div className='ontop w-8 h-8 bg-flickrImg bg-cover'></div>
            </Link><p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <Link href='https://www.linkedin.com/in/banhducnong/' target='_blank'>
              <div className='ontop w-8 h-8 bg-linkedinImg bg-cover'></div>
            </Link><p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <Link href='mailto: monocromo0811@gmail.com' target='_blank'>
              <div className='ontop w-8 h-8 bg-gmImg bg-cover'></div>
            </Link>
          </div>
        </div>
      </main>
    </body>
  )
}
