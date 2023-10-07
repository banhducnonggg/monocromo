import { useState } from 'react';
import Link from 'next/link';

const slides = [
  { id: 1, label: 'Information Technology' },
  { id: 2, label: 'Photography' },
  { id: 3, label: 'Design' },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="slider-container select-none">
      <div>
      {slides.map((slide, index) => (
        <div className="flex items-center justify-center h-24 pageRedirect transition-opacity duration-20000">
          <button className="ontop text-5xl font-titleFont text-lrColor">
            <Link href='/'>
              {slides[currentSlide].label}
            </Link>
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
      </div>
    </div>
  );
};

export default Slideshow;
