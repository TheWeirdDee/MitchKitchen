import React from "react";
import GetinImage from "../assets/Getin.png"; // <-- renamed here
import { Link } from "react-router-dom";

export default function Getin() {
  return (
    <div className="flex flex-col items-center justify-center md:px-10 px-0 md:mt-15 mt-15">
      <div
        className="w-full mr-7 max-w-6xl h-[220px] sm:h-[300px] sm:ml-5 md:h-[500px] lg:h-[550px] bg-contain bg-no-repeat bg-center rounded-xl"
        style={{ backgroundImage: `url(${GetinImage})` }} // <-- updated here
      ></div>

      <Link to="/contact">
        <button className="px-12 py-2 bg-[#CE1126] tracking-widest chloe text-white mb-8 mt-8 md:mt-10 text-xl rounded-3xl hover:bg-yellow-700">
          CONTACT USS
        </button>
      </Link>
    </div>
  );
}
