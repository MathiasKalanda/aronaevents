import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const EventsShow = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const images = [
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgSdLODK74_bgYQoPWTxxFCAXUY0LKRbhazgyXTS41RLh9NB9c",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTWbJJWAkYQH1Z8IaY6Zaz40gAoxIYZizQpksyl34F8aY0hofu",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9f31uwxDWjT5ym45oyCJbvEXg2cbyGker-PiaVdgbxPZ_1Q-",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTWbJJWAkYQH1Z8IaY6Zaz40gAoxIYZizQpksyl34F8aY0hofu",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9f31uwxDWjT5ym45oyCJbvEXg2cbyGker-PiaVdgbxPZ_1Q-",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTWbJJWAkYQH1Z8IaY6Zaz40gAoxIYZizQpksyl34F8aY0hofu",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9f31uwxDWjT5ym45oyCJbvEXg2cbyGker-PiaVdgbxPZ_1Q-",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jCqc_OlLicKexv8GaZZM3FzxGhvJY3_VCQ&s",
  ];

  useEffect(() => {
    if (isPaused) return;

    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += direction;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          setDirection(-1); // Change direction to left
        } else if (scrollRef.current.scrollLeft <= 0) {
          setDirection(1); // Change direction to right
        }
      }
    };

    const interval = setInterval(scroll, 30); // Speed of scroll
    return () => clearInterval(interval);
  }, [direction, isPaused]);

  return (
    <div className="relative w-full bg-[#0b1114]">
      <div className="flex flex-row justify-evenly items-center ">
        <div className="mx-6 my-10  text-xl text-[#f8f9f5]  md:text-3xl w-1/2">
          Our expertise spans a wide range of occasions, from intimate
          gatherings to grand celebrations.
        </div>
        <div className="flex flex-row gap-5 justify-center items-center mt-15">
          {/* Left Scroll Button */}
          <button
            onClick={() => setDirection(-1)}
            className=" left-2 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800/60 hover:bg-gray-900/80 rounded-full text-white z-10 border border-blue-800"
          >
            <FaArrowLeft size={24} />
          </button>
          {/* Right Scroll Button */}
          <button
            onClick={() => setDirection(1)}
            className=" right-2 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800/60 hover:bg-gray-900/80 rounded-full text-white z-10 border border-blue-800"
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll whitespace-nowrap scrollbar scroll-smooth gap-5 px-10 py-4"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="w-56 h-80 flex-shrink-0 rounded-lg overflow-hidden  bg-[#0b1114] shadow-lg shadow-blue-800"
          >
            <img
              src={imgSrc}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsShow;
