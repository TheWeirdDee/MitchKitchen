import React from "react";
import { Link } from "react-router-dom";
// import "./ContactSection.css";
import Soup from "../assets/Soup.jpg";

const ContactSection = () => {
  return (
    <div className="relative flex  items-center justify-center min-h-[50vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${Soup})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative text-center text-white px-6 py-8">
        <h2 className="TheSeason text-5xl md:text-6xl font-bold leading-16">
          WE WOULD LOVE TO <br /> HEAR FROM YOU
        </h2>
        <Link to="/contact">
        <button className="Bona mt-10 bg-[#ce1126] text-white text-md md:text-base font-semibold py-2 px-5 md:px-10 rounded-full hover:bg-[#d3af37] transition duration-300">
          CONTACT US
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
