import React from "react";
import GetIn from "../assets/GetIn.png";  
import { Link } from "react-router-dom";

export default function Getin() {
  return (
    <div className="flex flex-col items-center justify-center md:px-10 px-0 md:mt-15 mt-15">
      <div
        className="[@media(max-width:499px)]:h-[170px] [@media(max-width:499px)]:mr-6
       w-full mr-5 max-w-6xl h-[220px] sm:h-[300px] sm:ml-5 md:h-[500px] lg:h-[550px] bg-contain bg-no-repeat bg-center rounded-xl"
        style={{ backgroundImage: `url(${GetIn})` }}  
      ></div>

      <Link to="/contact">
        <button className="px-12 py-2 bg-[#CE1126] tracking-widest chloe text-white mb-8 mt-8 md:mt-10 text-xl rounded-3xl hover:bg-yellow-700">
          CONTACT US
        </button>
      </Link>
    </div>
  );
}
