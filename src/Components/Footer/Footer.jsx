import React from "react";
import Logo from '../../assets/Logo.svg';
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-[#E9CFA7]">
      <div className="bg-[#432918] py-5 max-w-9xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 mt-3 flex-col items-center md:items-start">
          <ul className="text-lg font-semibold text-center md:text-left ml-9">
            <li>HOME</li>
            <li>MENU</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
          <img
            src={Logo}
            alt="Mitch Kitchen Logo"
            className="mt-2 w-24 h-auto ml-8 md:ml-2"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-4 md:mt-">
          <h3 className="text-xl font-bold mb-3">LET'S CONNECT</h3>
          <div className="flex space-x-3">
            <a href="#" className="bg-[#E9CFA7] text-gray-900 p-2 rounded-full">
              <FaTiktok className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#E9CFA7] text-gray-900 p-2 rounded-full">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-[#E9CFA7] text-gray-900 p-2 rounded-full">
              <FaFacebookF className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-4 text-md font-semibold">PRIVACY POLICY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
