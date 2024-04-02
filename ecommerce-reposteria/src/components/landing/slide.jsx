"use client";
import React, { useState } from "react";

// svg icons
import { MaterialSymbolsArrowBackIosRounded } from "../svg/arrow-left";
import { MaterialSymbolsArrowForwardIosRounded } from "../svg/arrow-right";
import { PhDotOutlineFill } from "../svg/dot";

const Slide = () => {
  const slides = [
    {
      url: " https://img.freepik.com/free-photo/high-angle-baker-with-dough-ingredients_23-2148302949.jpg?t=st=1712035261~exp=1712038861~hmac=38b19c5c949a560f8f2e990679e26fb832b60705f2f7f446d5d695f31e3aa312&w=740",
    },
    {
      url: "https://img.freepik.com/free-photo/medium-shot-woman-preparing-dessert_23-2148972040.jpg?t=st=1712035330~exp=1712038930~hmac=d2b7a5088eaff3b4a103d1e7035731432777a5b2316175efa1292bfa7a49f224&w=740",
    },
    {
      url: "   https://img.freepik.com/free-photo/assortment-pieces-cake_114579-28210.jpg?t=st=1712035349~exp=1712038949~hmac=8b28fc80db6dbe55712878c566ed8d44948be923b70676947b26cea83c7814d2&w=740",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <MaterialSymbolsArrowBackIosRounded onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <MaterialSymbolsArrowForwardIosRounded onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <PhDotOutlineFill
              size={30}
              color={currentIndex === slideIndex ? "#F3B3CB" : "#F3B3CR"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
