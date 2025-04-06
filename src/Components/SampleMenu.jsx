import React from "react";
import Samplemenu from "../assets/Samplemenu.png";

export default function SampleMenu() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-6">
      <div
        className="w-full max-w-6xl bg-no-repeat mt-8 bg-cover bg-center h-[690px] md:h-[550px] lg:h-[550px] relative flex items-center justify-center"
        style={{ backgroundImage: `url(${Samplemenu})` }}
      >
        <div className="relative inset-0 flex flex-col items-center justify-center px-4 md:px-12 text-black perandory text-center md:translate-y-[-40px] lg:translate-y-[-60px]">
  <h1 className="text-7xl md:mt-10 lg:mt-20 sm:text-5xl md:text-[100px] lg:text-[150px] font-bold frunchy text-red-600 tracking-widest [@media(max-width:499px)]:text-5xl [@media(max-width:499px)]:mb-4">
    SAMPLE MENU
  </h1>

  {/* Responsive Grid */}
  <div className="lg:translate-y-[-20px] lg:mt-20 grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:mt-10  md:grid-cols-3 gap-6 text-base sm:text-lg w-full max-w-4xl">
  {/* STARTER */}
  <div className="mt-5 flex flex-col items-center sm:items-start">
    <h2 className="font-bold text-xl mb-2">STARTER</h2>
    <div className="flex flex-wrap justify-between w-full max-w-xs sm:block gap-2">
      <p className="w-1/2 text-left sm:text-left">
        Beef / Chicken Soup
      <br />
        with a choice of
      <br />
        Chicken / Beef / Vegetable Patty
      </p>
    </div>
  </div>

  {/* MAIN */}
  <div className="md:border-x-2 border-dotted border-[#d5b981] px-4 flex flex-col items-center sm:items-start">
    <h2 className="font-bold text-xl mb-2">MAIN</h2>
    <div className="flex flex-wrap justify-between w-full max-w-xs sm:block gap-2">
      <p className="w-1/2 text-left sm:text-left">
        Irish Meat Platter
      <br />
        with a choice of
          <br /> 
        Main Rice / Rice &amp; Peas / Salad
      </p>
    </div>
  </div>

  {/* DESSERTS */}
  <div className="sm:col-span-2 sm:mx-auto md:col-span-1 flex flex-col items-center">
    <h2 className="font-bold text-xl mb-2">DESSERTS</h2>
    <div className="flex flex-wrap justify-between w-full max-w-xs sm:block gap-2">
      <p className=" text-left sm:text-left">
        Guinness Punch Ice / Cream, with Chocolate Cake
      </p>
    </div>
  </div>
</div>

</div>

      </div>

      {/* Button */}
      <button className="mt-4 px-6 py-3 bg-[#d5b981] text-white font-semibold rounded-xl shadow-md hover:bg-[#c4a76e] transition-all">
        View Full Menu
      </button>
    </div>
  );
}
