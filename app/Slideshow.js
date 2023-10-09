import { useState } from 'react';
import Link from 'next/link';

const slides = [
  { id: 1, label: 'Information Technology', link: 'https://github.com/banhducnonggg' },
  { id: 2, label: 'Photography', link: 'https://www.flickr.com/people/186035845@N03/' },
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
    <div className="slider-container select-none">
      <div>
        {slides.map((slide, index) => (
          <div
            className="flex items-center justify-center h-24 pageRedirect transition-opacity duration-20000"
            key={slide.id}
          >
            <button
              className="ontop text-5xl font-titleFont text-lrColor"
              onClick={togglePopup} // Add click event to open the popup
            >
              {isPopupOpen ? null : slides[currentSlide].label}
            </button>
          </div>
        ))}
      </div>
      <div className="flex dot-container">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`ontop dot h-3 w-3 rounded-full ${
              index === currentSlide ? 'bg-lrColor drop-shadow-outGlow' : 'bg-lColor'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="flex mt-4">
        {isPopupOpen ? null : (
          <>
            <button
              className="prev ontop text-lColor font-navFont hover:text-lrColor"
              onClick={prevSlide}
            >
              PREV
            </button>
            <button
              className="next ontop text-lColor font-navFont hover:text-lrColor"
              onClick={nextSlide}
            >
              NEXT
            </button>
          </>
        )}
      </div>

      {/* Render the pop-up conditionally */}
      {isPopupOpen && (
        <div className="popup fixed inset-0 flex items-center justify-center">
          <div className='backdrop-blur-xl backdrop-brightness-75 w-10/12 h-3/6 bg-transparent rounded-xl'>

            <p className='absolute text-lrColor top-4 w-full text-center text-2xl font-titleFont z-50'>My favourite project(s) in {slides[currentSlide].label}</p>
            {/* Add your pop-up content here */}



            <p className='absolute text-lrColor bottom-4 w-1/2 text-left text-xl font-titleFont left-8'>
              <Link href={slides[currentSlide].link} target='_blank'>
              See more of mine..
              </Link>
            </p>
            <button className='absolute text-lrColor bottom-4 w-1/2 text-right text-xl font-titleFont right-8' onClick={togglePopup}>Close</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
