import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "photos/insparetionProduct.jpg",
    text: "GET 50% OFF",
    title: "New Arrival Sport Shoes",
  },
  {
    image: "photos/insparetionProduct2.jpg",
    text: "GET 30% OFF",
    title: "Most popular handbag",
  },
  {
    image: "photos/insparetionProduct3.jpg",
    text: "GET 25% OFF",
    title: "New Arrival Sport Shoes",
  },
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Trigger text animation every time the slide changes
  useEffect(() => {
    setAnimateText(false); // reset animation
    const timeout = setTimeout(() => setAnimateText(true), 500); // small delay before animating
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
  <div className="relative w-full overflow-hidden md:h-[300px] lg:h-[350px]">
      {/* Track */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-center gap-4 p-4 md:gap-10 md:p-8 md:min-h-[300px] lg:gap-16 lg:p-12 lg:min-h-[350px] md:flex-row"
            style={{ minHeight: "250px" }}
          >
            {/* Text */}
            <div
              className={`md:text-left max-w-sm md:max-w-md lg:max-w-lg transition-transform duration-700 ease-out ${
                index === currentIndex && animateText ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="text-lg font-bold mb-2 md:text-2xl lg:text-3xl">{slide.title}</h2>
              <p className="text-sm text-gray-700 md:text-lg lg:text-xl">{slide.text}</p>
            </div>

            {/* Image */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-32 h-32 object-cover rounded-lg shadow md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute flex bottom-[60px] left-5 gap-2 md:left-10 lg:left-20 md:bottom-[30px] lg:bottom-[20px]">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-red-400" : "bg-[#4949499d]"
            } md:w-4 md:h-4 lg:w-5 lg:h-5`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
