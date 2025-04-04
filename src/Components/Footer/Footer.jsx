import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from '../../assets/FooterLogo.jpg';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative text-[#ce1126]">
      <div className="bg-[#d3af37] py-5 max-w-9xl mx-auto flex items-stretch justify-between text-center min-h-[150px]">
        
        {/* Left Section */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <ul className="text-lg Bona mt-2 font-extrabold flex flex-col gap-2">
            <Link to="/"><li>HOME</li></Link>
            <Link to="/gallery"><li>MENU</li></Link>
            <Link to="/about"><li>ABOUT US</li></Link>
            <Link to="/contact"><li>CONTACT US</li></Link>
          </ul>
          <img
            src={FooterLogo}
            alt="Mitch Kitchen Logo"
            className="mt-2 w-24 h-20"
          />
        </div>

        {/* Demarcation Line (Now Stretches Full Height) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#013220]"></div>

        {/* Right Section */}
        <div className="playfair mb-20 w-1/2 flex flex-col items-center justify-center">
          <h3 className="text-xl font-extrabold mb-3">LET'S CONNECT</h3>
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
