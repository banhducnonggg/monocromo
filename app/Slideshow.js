import { useState } from 'react';
import Link from 'next/link';

const slides = [
  { id: 1, label: 'Information Technology' },
  { id: 2, label: 'Photography' },
  { id: 3, label: 'Design' },
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
        <div className="popup fixed inset-0 flex items-center justify-center z-9999">
          <div className='backdrop-blur-xl backdrop-brightness-75 w-10/12 h-3/6 bg-transparent rounded-xl'>

            <h2>{slides[currentSlide].label}Pop-up Content</h2>
            {/* Add your pop-up content here */}
            
            {/*if (condition) {                      {/* IT */}
              
            {/*}} else if (condition) {               {/* Photography */}
              
            {/*}} else {                              {/* Design */}

            {/* */}
            <button onClick={togglePopup}>Close</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
