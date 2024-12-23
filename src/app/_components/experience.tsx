import React, { useState, useEffect } from 'react';
import Company from './company';
import './experience.css';

const Experience: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition < windowHeight / 2) {
      setActiveSlide(0);
    } else {
      setActiveSlide(1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="carousel-container relative h-screen">
      {/* First Slider */}
      <div
        className={`transition-transform duration-500 ease-in-out h-screen flex flex-col justify-center ${
          activeSlide === 0 ? 'block' : 'hidden'
        }`}
      >
        <div className="first-slide text-white p-6 rounded-lg shadow-md max-w-xl mx-auto mt-10 text-center">
          <h1 className="text-2xl font-bold mb-4">Curious about my experience?</h1>
          <p>
            I have worked on full-stack applications, solved 300+ problems on GeeksforGeeks, and gained hands-on experience with REST APIs, React.js, Next.js, and Django. Explore more to discover my expertise!
          </p>
        </div>
      </div>

      {/* Second Slider */}
      <div
        className={`transition-transform duration-500 ease-in-out h-screen flex flex-col justify-center ${
          activeSlide === 1 ? 'block' : 'hidden'
        }`}
      >
        <div className="second-slide">
          <Company />
        </div>
      </div>

      {/* Selection Buttons */}
      <div className="carousel-buttons absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4">
        <button
          onClick={() => setActiveSlide(0)}
          className={`btn ${activeSlide === 0 ? 'bg-blue-500' : 'bg-gray-300'} p-2 rounded-full`}
        />
        <button
          onClick={() => setActiveSlide(1)}
          className={`btn ${activeSlide === 1 ? 'bg-blue-500' : 'bg-gray-300'} p-2 rounded-full`}
        />
      </div>
    </div>
  );
};

export default Experience;
