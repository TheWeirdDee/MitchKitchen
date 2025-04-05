import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css"

export default function SampleMenu() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-[#013220] text-[#ce1126] py-12 px-6 md:px-16  flex flex-col justify-center items-center">
      <h2
        className="text-center text-[50px] 
perandory md:text-[75px] font-bold inline-block mb-8 mx-auto pb-2 relative"
        data-aos="fade-up"
      >
        SAMPLE MENU
        <span className="absolute md:left-90 left-60 top-1/3 transform -translate-y-1/2 w-1/4 md:w-1/3 h-1 bg-yellow-500 [@media(max-width:499px)]:left-70"></span>
        <span className="absolute md:right-90 right-60 top-1/3 transform -translate-y-1/2 w-1/3 md:w-1/2 h-1 bg-yellow-500"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full max-w-4xl">
        {/* Starter Section */}
        <div data-aos="fade-up">
           
          <h3 className="playfair text-3xl md:text-3xl font-bold text-[#d3af37] mt-5">
            STARTER
          </h3>
          
          <p className="text-xl chloe tracking-widest leading-7 text-white mt-3">
           Beef / Chicken Soup <br /> with a choice of chicken / <br /> beef / Vegetable patty.
          </p>
        </div>

        {/* Main Course Section */}
        <div data-aos="fade-up" data-aos-delay="200">
           
          <h3 className="playfair text-3xl md:text-3xl font-bold text-[#d3af37] mt-8">
            MAIN
          </h3>
          
          <p className="text-xl chloe tracking-widest leading-7 text-white mt-3">
            Jerk Meat Platter <br /> with a choice of plain rice / rice & peas / salad.
          </p>
        </div>

        {/* Dessert Section */}
        <div data-aos="fade-up" data-aos-delay="400">
           
          <h3 className="playfair text-3xl md:text-3xl font-bold text-[#d3af37] mt-8">
            DESSERTS
          </h3>
           
          <p className="text-xl chloe tracking-widest leading-7 text-white mt-3">
             Guinness Punch Ice Cream <br /> with chocolate cake
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="600">
      <Link to="/contact">
  <button className="bg-[#ce1126] hover:bg-yellow-700 text-white font-bold py-2 px-8 rounded-full shadow-lg text-xl chloe chloe tracking-widest leading-7">
    CONTACT US
  </button>
</Link>
      </div>
    </div>
  );
}
