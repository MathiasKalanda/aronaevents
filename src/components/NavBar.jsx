import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-100 ">
      <div className="flex flex-row justify-between items-center p-5">
        <div className="ml-5 font-bold text-lg text-red-600">Arona Events</div>

        <div className="navbar hidden md:flex flex-row justify-between items-center gap-10">
          <ul className="flex flex-row justify-between items-center gap-10">
            <li className="ul">Home</li>
            <li className="ul">About</li>
            <li className="ul">Service</li>
            <li className="ul">Products</li>
            <li className="ul">Decor</li>
          </ul>
        </div>

        <div className="hidden md:flex flex-row justify-between items-center gap-5">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Contact Us
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Hire A Product
          </button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex flex-row justify-between items-center gap-5 mr-5">
          <FaPhoneAlt size={18} className="text-blue-600 hover:text-blue-400" />
          <FaWhatsapp
            size={18}
            className="text-green-400 hover:text-green-300"
          />
          <button onClick={handleMenu}>
            {isOpen ? (
              <IoMdClose
                size={24}
                className="text-black/80 hover:text-black/60"
              />
            ) : (
              <RxHamburgerMenu
                size={24}
                className="text-black/80 hover:text-black/60"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="fixed top-17 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out"
            onClick={handleMenu}
          >
            <MobileMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
