import React from "react";
import {
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="text-6xl text-center my-3 mb-10">
            Arona Events <hr className="my-2 font-bold" />
          </div>
          <div className="grid grid-cols-2 justify-between items-center gap-5">
            <div className="flex flex-row justify-center items-center gap-4 ">
              <FaLocationArrow />
              kampala Uganda
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <FaPhoneAlt />
              +2567890875445
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <FaWhatsapp />
              +2567890875445
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <FaTwitter />
              @Aronaevents limited
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <FaFacebook />
              @Aronaevents limited
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <FaInstagram />
              @Aronaevents limited
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <FaYoutube />
              @Aronaevents limited
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <FaLinkedin />
              @Aronaevents limited
            </div>
          </div>
          <div className="mx-10">
            <div className="grid grid-cols-2 md:grid-cols-4 py-5">
              <ul className="m-5">
                <li className="font-bold text-lg underline">About</li>

                <li className="hover:underline"> Company</li>
                <li className="hover:underline">Our Team</li>
                <li className="hover:underline">
                  {" "}
                  Partner & Affiliate Programs
                </li>
                <li className="hover:underline">Careers </li>
                <li className="hover:underline">Legal Center</li>
                <li className="hover:underline">Security</li>
                <li className="hover:underline">Recommend WildApricot</li>
                <li className="hover:underline">Personify Portfolio</li>
              </ul>
              <ul className="m-5">
                <li className="font-bold text-lg underline">Features</li>

                <li className="hover:underline"> Company</li>
                <li className="hover:underline">Our Team</li>
                <li className="hover:underline">
                  {" "}
                  Partner & Affiliate Programs
                </li>
                <li className="hover:underline">Careers </li>
                <li className="hover:underline">Legal Center</li>
                <li className="hover:underline">Security</li>
                <li className="hover:underline">Recommend WildApricot</li>
                <li className="hover:underline">Personify Portfolio</li>
              </ul>
              <ul className="m-5">
                <li className="font-bold text-lg underline">Services</li>
                <li className="hover:underline"> Company</li>
                <li className="hover:underline">Our Team</li>
                <li className="hover:underline">
                  {" "}
                  Partner & Affiliate Programs
                </li>
                <li className="hover:underline">Careers </li>
                <li className="hover:underline">Legal Center</li>
                <li className="hover:underline">Security</li>
                <li className="hover:underline">Recommend WildApricot</li>
                <li className="hover:underline">Personify Portfolio</li>
              </ul>
              <ul className="m-5">
                <li className="font-bold text-lg underline">Products</li>

                <li className="hover:underline"> Company</li>
                <li className="hover:underline">Our Team</li>
                <li className="hover:underline">
                  {" "}
                  Partner & Affiliate Programs
                </li>
                <li className="hover:underline">Careers </li>
                <li className="hover:underline">Legal Center</li>
                <li className="hover:underline">Security</li>
                <li className="hover:underline">Recommend WildApricot</li>
                <li className="hover:underline">Personify Portfolio</li>
              </ul>
            </div>
          </div>
          <div className="text-center my-5 bg-slate-100 py-5 ">
            © 2025 WildApricot Inc. All Right Reserved. |{" "}
            <span className="font-bold">Arona Events Limited</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
