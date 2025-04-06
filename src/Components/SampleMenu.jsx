import React from "react";
import Samplemenu from "../assets/Samplemenu.png";

export default function SampleMenu() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-6">
      <div
        className="w-full max-w-6xl bg-no-repeat bg-cover bg-center h-[520px] md:h-[550px] lg:h-[500px] relative flex items-center justify-center"
        style={{ backgroundImage: `url(${Samplemenu})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-12 text-black font-serif text-center">
          <h1 className="text-3xl sm:text-4xl md:text-8xl frunchy text-red-600 tracking-widest mb-6">
            SAMPLE MENU
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base sm:text-lg">
            <div>
              <h2 className="font-bold text-xl mb-2">STARTER</h2>
              <p>
                Beef / Chicken Soup <br />
                with a choice of <br />
                Chicken / Beef / <br />
                Vegetable Patty
              </p>
            </div>
            <div className="md:border-x-2 border-dotted border-[#d5b981] px-4">
              <h2 className="font-bold text-xl mb-2">MAIN</h2>
              <p>Irish Meat Platter</p>
              <p>with a choice of</p>
              <p>Main Rice / Rice &amp;</p>
              <p>Peas / Salad</p>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-2">DESSERTS</h2>
              <p>Guinness Punch Ice</p>
              <p>Cream</p>
              <p>with Chocolate</p>
              <p>Cake</p>
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
