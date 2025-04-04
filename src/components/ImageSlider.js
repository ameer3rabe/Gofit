import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      // Move to next image, loop back to first image when reaching the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    // Clear the interval when component unmounts
    return () => clearInterval(timer);
  }, [images.length, interval]);
  
  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slider-image ${index === currentIndex ? 'active' : ''}`}
          style={{ 
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;