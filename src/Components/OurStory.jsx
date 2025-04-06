import React from 'react';
import sectionOne from "../assets/sectionOne.jpg";
import "../index.css";
import { Link } from "react-router-dom";
const OurStory = () => {
  return (
    <div className="bg-[#012919] flex flex-col md:flex-row items-center justify-between gap-0 m-0">
      {/* Image Section */}
      <div className="relative w-full md:w-[50%] h-[350px] overflow-hidden">
        <img
          src={sectionOne}
          alt="Sample Image"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Text Section */}
           <div className="[@media(max-width:850px)]:mb-0 perandory md:mb-10 mb-0 tracking-widest leading-13 text-white w-full md:w-[50%] text-left space-y-4 px-4 md:px-6 mt-0 md:mt-0 flex flex-col justify-center">
        <p className="text-lg [@media(max-width:777px)]:top-8 relative top-7 mb-6 font-medium p-5">
          We are not just a food business, we are an experience! Bringing fine dining to you wherever you are, whether a festival or a private catering event, Mitch Kitchen gives you five star in a way you have never experienced before!
        </p>
        <p className="text-lg relative top-7  md:mb-10 mb-0 font-medium p-5">
          This is not just a bluff either, we truly create once in a lifetime experiences, with menus that never change with every event we cater, you never get the same menu twice!
        </p>
        <div className="flex justify-center">
           <Link to="/about">
  <button className="px-12 py-2 bg-[#CE1126] tracking-widest chloe text-white mb-7 mt-8 md:mt-0 text-xl rounded-3xl hover:bg-yellow-700">
    OUR STORY
  </button>
  </Link>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
