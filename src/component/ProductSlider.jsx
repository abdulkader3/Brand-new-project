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
    <div className="relative w-full overflow-hidden">
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
            className="w-full flex items-center justify-center gap-4 p-4 md:flex-row"
            style={{ minHeight: "250px" }}
          >
            {/* Text */}
            <div
              className={`md:text-left max-w-sm transition-transform duration-700 ease-out ${
                index === currentIndex && animateText ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="text-lg md:text-xl font-bold mb-2">{slide.title}</h2>
              <p className="text-sm md:text-md text-gray-700">{slide.text}</p>
            </div>

            {/* Image */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-32 h-32 object-cover rounded-lg shadow"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute flex bottom-[60px] left-5 gap-2 ">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-red-400" : "bg-[#4949499d]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
