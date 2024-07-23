import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/img_1.jpg",
  "/images/img_2.png",
  "/images/img_3.jpg",
  "/images/img_4.jpg",
  "/images/img_5.jpg",
  "/images/img_6.jpg",
  "/images/img_7.png",
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Muda de slide a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((src, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      <style jsx>{`
        .slideshow-container {
          position: relative;
          width: 100%;
          height: 100vh; /* Ajuste a altura conforme necessário */
          overflow: hidden;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .slide.active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Slideshow;
