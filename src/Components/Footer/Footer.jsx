import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from '../../assets/FooterLogo.jpg';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-[#ce1126]">
      <div className="bg-[#d3af37] py-5 max-w-9xl mx-auto flex flex-col md:flex-row items-center justify-center relative text-center">
        
        {/* Left Section */}
        <div className="w-full Bona md:w-1/2 flex flex-col items-center">
          <ul className="text-lg font-bold">
          <Link to="/">
            <li>HOME</li>
            </Link>
            <Link to="/gallery">
            <li>MENU</li>
            </Link>
            <Link to="/about">
            <li>ABOUT US</li>
            </Link>
            <Link to="/contact">
            <li>CONTACT US</li>
            </Link>
             
          </ul>
          <img
            src={FooterLogo}
            alt="Mitch Kitchen Logo"
            className="mt-2 w-24 h-20"
          />
        </div>

        {/* Demarcation Line */}
        <div className="w-full md:w-[4px] md:h-full h-[4px] bg-[#013220] my-4 md:my-0 md:absolute md:left-1/2 md:top-0"></div>

        {/* Right Section */}
        <div className="playfair w-full md:w-1/2 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-3">LET'S CONNECT</h3>
          <div className="flex space-x-3">
            <a href="#" className="text-[#ce1126]">
              <AiFillInstagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-[#ce1126]">
              <FaFacebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-[#ce1126]">
              <BiSolidPhoneCall className="w-8 h-8" />
            </a>
            <a href="#" className="text-[#ce1126]">
              <MdEmail className="w-8 h-8" />
            </a>
          </div>
          <p className="mt-4 text-md font-semibold">PRIVACY POLICY</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
