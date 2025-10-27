import React, { useEffect, useState } from "react";
import "../index.css"; // adjust if needed

const HeroSection = () => {
  const images = [
    "https://avernuscorp.com/images/get-expert-advice-and-start-profiting.jpg",
    "https://avernuscorp.com/images/welcome-to-world-of-avernus.jpg",
    "https://avernuscorp.com/images/you-care-for-your-patients-we-care-for-your-practice.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // smoother, every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-text">
        <h1>Welcome to AvernusCorp</h1>
        <p>
          Empowering healthcare providers with seamless and transparent RCM
          solutions.
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
