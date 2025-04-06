import React from "react";
import Getin from "../assets/Getin.png";

export default function SampleMenu() {
  return (
    <div className="  flex flex-col items-center justify-center md:px-10 px-0 md:mt-15 mt-10">
      <div
        className="w-full max-w-6xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] bg-contain bg-no-repeat bg-center rounded-xl"
        style={{ backgroundImage: `url(${Getin})` }}
      ></div>

      <button className="mb-10 mt-5 px-6 py-3 bg-[#d5b981] text-white font-semibold rounded-xl shadow-md hover:bg-[#c4a76e] transition-all duration-300">
        Contact Us
      </button>
    </div>
  );
}
