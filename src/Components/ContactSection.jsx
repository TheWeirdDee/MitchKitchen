import React from "react";
import { FaHeart } from "react-icons/fa";
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-green-900 min-h-[30vh] px-6 py-8">
      {/* Heart Shape */}
      <div className="relative flex justify-center items-center">
        <FaHeart className="text-white heart-icon" />
         
        <h2 className="textt absolute text-white text-2xl md:text-5xl font-bold text-center">
          WE WOULD LOVE <br /> TO HEAR FROM YOU
        </h2>
      </div>

      {/* Button */}
      <button className="mt-4 bg-[#3D251E] text-white text-sm md:text-base font-semibold py-2 px-5 md:px-10 rounded-full hover:bg-[#8C5A3A] transition duration-300">
        CONTACT US
      </button>
    </div>
  );
};

export default ContactSection;
