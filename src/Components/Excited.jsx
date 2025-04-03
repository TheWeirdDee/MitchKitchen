import React from "react";
 
import sectionOne from "../assets/sectionOne.jpg";

const ContactSection = () => {
  return (
    <div className="relative flex  items-center justify-center min-h-[50vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${sectionOne})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative text-center text-white px-6 py-8">
        <h2 className="text-6xl md:text-6xl font-bold">
          HAVE WE GOT YOU <br /> EXCITED?
        </h2>
        <button className="mt-10 bg-[#ce1126] text-white text-sm md:text-base font-semibold py-2 px-5 md:px-10 rounded-full hover:bg-[#d3af37] transition duration-300">
         SEND US A MESSAGE
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
