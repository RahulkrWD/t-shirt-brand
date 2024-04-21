import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./styles/Homepage.module.css";

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const images = [
    "/image/car2.webp",
    "/image/car3.webp",
    "/image/car4.webp",
    "/image/car5.webp",
    "/image/car6.webp",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, [images.length]);

  return (
    <Carousel
      style={{ backgroundColor: "pink", paddingTop: "30px" }}
      activeIndex={index}
      controls={false}
    >
      {images.map((imageUrl, index) => (
        <Carousel.Item key={index}>
          <img
            className={`${styles.carouselImage} d-block w-100`}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
