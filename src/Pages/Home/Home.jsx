import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import headerImage from "../../assets/headerImage.png";
import SampleMenu from "../../Components/SampleMenu";
import EventCard from "../../Components/EventCard";
import ContactSection from "../../Components/ContactSection";
import CustomerReview from "../../Components/CustomerReview";
import sectionOne from "../../assets/sectionOne.jpg";
import foodtray from "../../assets/foodtray.jpg";
import menuimg from "../../assets/menuimg.jpg";
import Soup from "../../assets/Soup.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full   bg-green-900 flex flex-col items-center justify-center overflow-hidden">
        <div className="relative md:bottom-0 bottom-5 flex justify-center">
        <img
  src={headerImage}
  alt="Gourmet Food"
  className="max-w-full md:max-h-[90vh] max-h-[70vh] object-contain"
  style={{ opacity: 0.6 }}
  data-aos="fade-up"
/>

          <h1
            className="absolute md:top-50 top-37 text-white text-6xl md:text-7xl font-bold drop-shadow-lg text-center"
          >
            GOURMET <br /> ON WHEELS
          </h1>
          
        </div>

        <button
          className="px-6 py-2 bg-[#3D251E] text-yellow-400 mb-8 text-lg font-semibold rounded-lg hover:bg-yellow-700"
        >
          OUR STORY
        </button>
      </div>

       
      <div className="relative w-full max-h-[300px]">
        <img src={sectionOne} alt="Sample Image" className="w-full max-h-[300px] object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div>
        <SampleMenu />
      </div>

      <div className="relative w-full max-h-[300px]">
        <img src={menuimg} alt="Menu Img" className="w-full max-h-[300px] object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div>
        <CustomerReview />
      </div>

      <div className="relative w-full max-h-[300px]">
        <img src={foodtray} alt="Food Tray" className="w-full max-h-[300px] object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div>
        <EventCard />
      </div>

      <div className="relative w-full max-h-[300px]">
        <img src={Soup} alt="Soup Tray" className="w-full max-h-[300px] object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div>
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
