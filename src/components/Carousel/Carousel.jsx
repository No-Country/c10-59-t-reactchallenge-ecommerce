import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const images = [
  "../../../public/assets/Img/foto1.jpg",
  "../../../public/assets/Img/foto2.jpg",
  "../../../public/assets/Img/foto3.png",
  "../../../public/assets/Img/foto4.jpg",
];

<div className="carousel-container my-image-container">
  {images.map((image, index) => (
    <img key={index} className="my-image" src={image} alt={`foto${index + 1}`} />
  ))}
</div>

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef(null);

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
      if (currentImage === images.length - 1) {
        clearInterval(intervalRef.current);
        startInterval();
      }
    }, 3000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [currentImage]);

  return (
    <div className="carousel-container">
      <img src={images[currentImage]} alt="Foto de cerveza" />
      <div className="carousel-buttons">
        <div className="carousel-button" onClick={handlePrev}>
          &lt;
        </div>
        <div className="carousel-button" onClick={handleNext}>
          &gt;
        </div>
      </div>
    </div>
  );
};



export default Carousel;
