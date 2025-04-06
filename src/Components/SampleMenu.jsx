import React, { useEffect } from "react";
import Samplemenu from "../assets/Samplemenu.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SampleMenu() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center [@media(max-width:1060px)]:px-0 px-10 md-mr-0 ml-0 space-y-6">
      <div
        className="w-full max-w-6xl bg-no-repeat mt-8 bg-cover bg-center h-[850px] md:h-[550px] lg:h-[550px] relative flex items-center justify-center"
        style={{ backgroundImage: `url(${Samplemenu})` }}
        data-aos="fade-in"
      >
        <div className="relative inset-0 flex flex-col items-center justify-center px-4 md:px-12 text-black perandory text-center md:translate-y-[-40px] lg:translate-y-[-60px]">
          <h1
            className="text-7xl md:mt-10 lg:mt-30 sm:text-8xl [@media(max-width:799px, min-width:599px)]:mb-30   md:text-[100px] lg:text-[150px] font-bold frunchy text-red-600 tracking-widest [@media(max-width:699px, min:width:498)]:mb-30 [@media(max-width:499px)]:text-5xl [@media(max-width:499px)]:mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            SAMPLE MENU
          </h1>

          <div
            className="lg:translate-y-[-30px] lg:mt-20 border-2 grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:mt-10  md:grid-cols-3 gap-6 text-base sm:text-lg w-full max-w-4xl "
          >
            {/* STARTER */}
            <div
              className="flex flex-col items-center sm:items-start"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2 className="font-bold text-3xl mb-6">STARTER</h2>
              <p
                className="text-left sm:text-left text-xl tracking-widest"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Beef / Chicken Soup
                <br />
                with a choice of
                <br />
                Chicken / Beef / Vegetable Patty
              </p>
            </div>

            {/* MAIN */}
            <div
              className="md:border-x-2 border-dotted border-[#d5b981] px-4 flex flex-col items-center sm:items-start"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h2 className="font-bold text-3xl mb-6">MAIN</h2>
              <p
                className="text-left sm:text-left text-xl tracking-widest"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Irish Meat Platter
                <br />
                with a choice of
                <br />
                Main Rice / Rice &amp; Peas / Salad
              </p>
            </div>

            {/* DESSERTS */}
            <div
              className="sm:col-span-2 sm:mx-auto md:col-span-1 flex flex-col items-center sm:items-start"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <h2 className="font-bold text-3xl mb-6 [@media(max-width:699px)]:mt-5">DESSERTS</h2>
             <p
                className="text-left sm:text-left text-xl tracking-widest [@media(max-width:699px)]:mr-22"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Guinness Punch Ice / 
                 <br />
                  Cream
                  <br />  
                  with Chocolate Cake
                
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <Link to="/contact" data-aos="fade-up" data-aos-delay="900">
        <button className="px-12 py-2 bg-[#CE1126] tracking-widest chloe text-white mb-8 mt-8 md:mt-10 text-xl rounded-3xl hover:bg-yellow-700">
          CONTACT US
        </button>
      </Link>
    </div>
  );
}
