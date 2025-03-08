import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import skewer from "../assets/skewer.jpg";
import taco from "../assets/taco.jpg";
import panacota from "../assets/panacota.jpg";

export default function SampleMenu() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-green-900 text-white py-12 px-6 md:px-16 min-h-screen flex flex-col justify-center items-center">
      <h2
        className="text-center text-3xl md:text-4xl font-bold inline-block mb-8 mx-auto pb-2 relative"
        data-aos="fade-up"
      >
        SAMPLE MENU
        <span className="absolute md:left-70 left-55 top-1/2 transform -translate-y-1/2 w-1/4 md:w-1/3 h-1 bg-yellow-500"></span>
        <span className="absolute md:right-70 right-55 top-1/2 transform -translate-y-1/2 w-1/4 md:w-1/3 h-1 bg-yellow-500"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full max-w-4xl">
        {/* Starter Section */}
        <div data-aos="fade-up">
          <img
            src={skewer}
            alt="Skewer"
            className="w-40 h-40 rounded-lg mx-auto"
          />
          <h3 className="text-xl md:text-2xl font-bold text-[#EFCFA0] mt-8">
            STARTER
          </h3>
          <p className="text-white text-xl font-bold mt-4">
            Miso-Glazed Chicken Skewers
          </p>
          <p className="text-md text-gray-200 mt-3">
            Charred yakitori-style chicken skewers <br />
            brushed with a caramelized miso glaze, <br />
            topped with sesame seeds and fresh scallions. <br />
            Served with a yuzu chilli dipping sauce.
          </p>
        </div>

        {/* Main Course Section */}
        <div data-aos="fade-up" data-aos-delay="200">
          <img
            src={taco}
            alt="Taco"
            className="w-40 h-40 rounded-lg mx-auto"
          />
          <h3 className="text-xl md:text-2xl font-bold text-[#EFCFA0] mt-8">
            MAIN COURSE
          </h3>
          <p className="text-white text-xl font-bold mt-4">
            Jerk Chicken Mini Tacos
          </p>
          <p className="text-md text-gray-200 mt-3">
            Smoky, slow-marinated jerk chicken <br />
            served in soft, grilled mini tortillas, <br />
            topped with pineapple-mango salsa, <br />
            Scotch bonnet crema, <br />
            and crispy plantain shavings.
          </p>
        </div>

        {/* Dessert Section */}
        <div data-aos="fade-up" data-aos-delay="400">
          <img
            src={panacota}
            alt="Panna Cotta"
            className="w-50 h-40 rounded-lg mx-auto"
          />
          <h3 className="text-xl md:text-2xl font-bold text-[#EFCFA0] mt-8">
            DESSERTS
          </h3>
          <p className="text-white text-xl font-bold mt-4">
            Spiced Rum & Coconut Panna Cotta
          </p>
          <p className="text-md text-gray-200 mt-3">
            A silky coconut panna cotta <br />
            infused with aged spiced rum, <br />
            topped with caramelized banana compote <br />
            and a toasted coconut crisp.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="600">
        <button className="bg-[#3D251E] hover:bg-yellow-700 text-white font-bold py-2 px-8 rounded-full shadow-lg text-md">
          BOOK A TASTING
        </button>
      </div>
    </div>
  );
}
