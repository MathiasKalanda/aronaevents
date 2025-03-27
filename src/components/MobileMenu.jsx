import { Link } from "@tanstack/react-router";
import React from "react";

const MobileMenu = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        {" "}
        <ul className="mx-10 flex flex-col gap-2 text-lg font-sans">
          <Link to="/" className="m-2 hover:underline">
            Home
          </Link>
          <Link to="/about" className="m-2 hover:underline">
            About
          </Link>
          <Link to="/services" className="m-2 hover:underline">
            Services
          </Link>
          <Link to="/products" className="m-2 hover:underline">
            Product Rent
          </Link>
          <Link to="/decor" className="m-2 hover:underline">
            Decor
          </Link>
        </ul>
      </div>
      <div className="flex flex-col  my-15 justify-between gap-6 text-lg">
        <button className="bg-blue-600 text-white px-4 py-3  hover:mx-5 rounded-4xl mx-10 hover:bg-blue-700 transtion-all duration-500">
          Contact Us
        </button>
        <button className="bg-green-600 text-white px-4 py-3 rounded-4xl mx-10 hover:mx-5 hover:bg-green-700 transtion-all duration-500">
          Hire A Product
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
