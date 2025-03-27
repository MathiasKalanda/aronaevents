import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Tent = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center rounded-xl">
        <div className="bg-black mt-5 rounded-xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9f31uwxDWjT5ym45oyCJbvEXg2cbyGker-PiaVdgbxPZ_1Q-"
            alt=""
            className="w-56 h-48 rounded-xl"
          />
        </div>
        <div className="uppercase font-bold text-xl m-2">Tents of Sizes</div>
        <div className="font-bold text-md mt-1 text-center">
          We Have Varient of Tents sizes and design
        </div>
        <div className="m-5 text-md text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          praesentium saepe possimus minima repellendus alias accusamus id
          pariatur nam doloremque non.
        </div>
        <div className="my-5">
          <button className="bg-blue-700 py-3 px-5 flex flex-row justify-center items-center gap-3 rounded-xl">
            {" "}
            See More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tent;
