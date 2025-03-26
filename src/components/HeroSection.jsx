import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-black h-110 md:h-140 m-5 rounded-3xl md:mt-10 md:mx-12 relative overflow-hidden">
        <video
          className="absolute top-0 left-1/2 w-auto min-w-full min-h-full transform -translate-x-1/2 object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/events.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col  items-start justify-end h-100 m-10 relative md:mx-16 md:my-16">
          <div className=" w-80 md:w-96">
            <div className="text-white font-bold text-3xl  px-2 md:text-5xl">
              Elegance and timeless moments
            </div>
            <div className="text-white  p-3">
              Your Premium all in one event management partner, rest assured
              that you get the best experience
            </div>
          </div>
          <div className=" text-white mx-3 my-5 py-4 px-6 bg-blue-800  hover:bg-blue-600 border-none rounded-xl shadow-none">
            <button className="flex flex-row justify-center items-center gap-3 ">
              <span className="">Hire A tent</span> <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
