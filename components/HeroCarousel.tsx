"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
  { imgUrl: "/assets/images/hero-2.svg", alt: "bag" },
  { imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
  { imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
  { imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
];

const HeroCarousel = () => {
  return (
    <div className="w-full max-w-lg mx-auto relative"> {/* Add relative here */}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <div key={image.alt} className="flex justify-center">
            <Image
              src={image.imgUrl}
              alt={image.alt}
              width={120} // Adjusted width
              height={120} // Adjusted height
              className="object-contain"
            />
          </div>
        ))}
      </Carousel>
      {/* Fixed the arrow path and visibility */}
      <Image
        src="/assets/icons/hand-drawn-arrow.svg" // Corrected path
        alt="arrow"
        width={175}
        height={175}
        className="hidden xl:block absolute left-4 bottom-4 z-10" // Adjusted positioning
      />
    </div>
  );
};

export default HeroCarousel;
