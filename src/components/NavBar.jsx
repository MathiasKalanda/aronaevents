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
    <div className=" m-5">
      <div className="flex flex-row justify-between items-center ">
        <div className="ml-5">Arona Events</div>
        <div className="navbar">
          <ul className="md:flex flex-row justify-between items-center gap-10 hidden">
            <li className="ul">Home</li>
            <li className="ul">About</li>
            <li className="ul">Service</li>
            <li className="ul">Products</li>
            <li className="ul">Decor</li>
          </ul>
        </div>
        <div className="hidden md:flex flex-row justify-between items-center gap-5">
          <button>Contact Us</button>
          <button>Hire A Product </button>
        </div>
        <div className="md:hidden flex flex-row justify-between items-center gap-5 mr-5">
          <div>
            <FaPhoneAlt
              size={18}
              className="text-blue-600 hover:text-blue-400"
            />
          </div>
          <div>
            <FaWhatsapp
              size={18}
              className="text-green-400 hover:text-green-300"
            />
          </div>
          <button onClick={handleMenu}>
            {isOpen ? (
              <IoMdClose
                size={18}
                className="text-black/80 hover:text-black/60"
              />
            ) : (
              <RxHamburgerMenu
                size={18}
                className="text-black/80 hover:text-black/60"
              />
            )}
          </button>
          <div
            className={`lg:flex lg:space-x-6 absolute lg:static bg-white bottom-0 left-0 w-full lg:w-auto transition-transform duration-300 ease-in-out transform ${
              isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
          >
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
