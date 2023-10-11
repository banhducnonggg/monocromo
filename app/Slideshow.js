import { useState } from 'react';
import Link from 'next/link';

const slides = [
  { id: 1, label: 'Information Technology', link: 'https://github.com/banhducnonggg' },
  { id: 2, label: 'Photography', link: 'https://www.flickr.com/people/banhducnong/' },
  { id: 3, label: 'Design', link: 'https://www.instagram.com/monocromo.exe/' },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="slider-container select-none nocursor">
      <div className='nocursor'>
        {slides.map((slide, index) => (
          <div
            className="flex items-center justify-center h-24 pageRedirect transition-opacity duration-20000"
            key={slide.id}
          >
            <button
              className="ontop text-5xl font-titleFont text-lColor hover:text-lrColor hover:drop-shadow-outGlow nocursor btn"
              onClick={togglePopup} // Add click event to open the popup
            >
              {isPopupOpen ? null : slides[currentSlide].label}
            </button>
          </div>
        ))}
      </div>
      <div className="flex dot-container nocursor">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`ontop dot h-3 w-3 rounded-full nocursor btn ${
              index === currentSlide ? 'bg-lrColor drop-shadow-outGlow' : 'bg-lColor hover:bg-lrColor'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="flex mt-4 nocursor discoverController">
        {isPopupOpen ? (
          <>
          <button
            className="prev left-60 ontop text-lColor font-navFont hover:text-lrColor nocursor btn"
            onClick={prevSlide}
          >
            PREV
          </button>
          <button
            className="next right-60 ontop text-lColor font-navFont hover:text-lrColor nocursor btn"
            onClick={nextSlide}
          >
            NEXT
          </button>
        </>
        ) : (
          <>
            <button
              className="prev ontop text-lColor font-navFont hover:text-lrColor nocursor btn"
              onClick={prevSlide}
            >
              PREV
            </button>
            <button
              className="next ontop text-lColor font-navFont hover:text-lrColor nocursor btn"
              onClick={nextSlide}
            >
              NEXT
            </button>
          </>
        )}
      </div>

      {/* Render the pop-up conditionally */}
      {isPopupOpen && (
        <div className="popup fixed inset-0 flex items-center justify-center nocursor">
          <div className='popupSelection backdrop-blur-xl backdrop-brightness-75 w-6/12 h-3/6 bg-transparent rounded-xl flex flex-col items-center justify-center'> {/* Added flex classes */}
            <p className='popupIntroduction absolute text-lrColor top-4 w-full text-center text-2xl font-titleFont z-50'>My favorite project in {slides[currentSlide].label}</p>
            {/* Add your pop-up content here */}
            {slides[currentSlide].id === 1 && (
              <div className='popupImgContainer w-2/6 h-3/6 flex items-center justify-center hover:text-lrColor nocursor btn'> {/* Center the content */}
                <a className='w-full h-full nocursor btn' href='http://namanh-vu.com/' target='_blank'>
                  <div className='popupImg w-full h-full bg-itImg bg-contain bg-center bg-no-repeat btn'></div>
                  <p className='text-center font-navFont text-md text-lColor hover:text-lrColor btn'>My first resume website</p>
                </a>
              </div>
            )}

            {slides[currentSlide].id === 2 && (
              <div className='popupImgContainer w-2/6 h-3/6 flex items-center justify-center hover:text-lrColor btn'> {/* Center the content */}
                <a className='w-full h-full nocursor btn' href='https://www.flickr.com/photos/banhducnong/albums/72177720311791961' target='_blank'>
                  <div className='popupImg w-full h-full bg-pImg bg-contain bg-center bg-no-repeat btn'></div>
                  <p className='text-center font-navFont text-md text-lColor hover:text-lrColor btn'>Back to Vietnam trip</p>
                </a>
              </div>
            )}

            {slides[currentSlide].id === 3 && (
              <div className='popupImgContainer w-2/6 h-3/6 flex items-center justify-center hover:text-lrColor btn'> {/* Center the content */}
                <a className='w-full h-full nocursor btn' href='https://www.facebook.com/dongphucgau.vn/posts/pfbid02pM6uWhPXNzHmFWRmCKRt58R7mvsabCqzAEdwNLAZ4YowpC8gA4daB4pe9ytqqnrUl' target='_blank'>
                  <div className='popupImg w-full h-full bg-dImg bg-contain bg-center bg-no-repeat btn'></div>
                  <p className='text-center font-navFont text-md text-lColor hover:text-lrColor btn'>Design media for an uniform brand</p>
                </a>
              </div>
            )}

            <p className='popupController absolute text-lColor hover:text-lrColor bottom-4 w-auto text-left text-xl font-regFont left-8 nocursor'>
              <Link className='nocursor btn' href={slides[currentSlide].link} target='_blank'>
                See more..
              </Link>
            </p>
            <button className='popupController absolute text-lColor hover:text-lrColor bottom-4 w-auto text-right text-xl font-regFont right-8 nocursor btn' onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
