import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../index.css";  
// import "./Home.css";  
import { Link } from "react-router-dom";

import headerImage from "../../assets/headerImage.png";
import SampleMenu from "../../Components/SampleMenu";
import EventCard from "../../Components/EventCard";
import ContactSection from "../../Components/ContactSection";
import CustomerReview from "../../Components/CustomerReview";
import sectionOne from "../../assets/sectionOne.jpg";
import CustomerR from "../../Components/CustomerR";
import menuimg from "../../assets/menuimg.jpg";
 
 
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div>
      {/* Hero Section  */}
      <div className="relative w-full bg-[#013220] flex flex-col items-center justify-center overflow-hidden">
  {/* Gold background wrapper */}
   
  <div className="w-[30rem] sm:w-[35rem] md:w-[40rem] lg:w-[45rem] h-auto max-h-[30rem] mb-10 p-4 rounded-4xl flex flex-col items-center bg-transparent md:bg-[#d3af379a] relative">  
 

    <div className="relative flex justify-center">
    <img
  src={headerImage}
  alt="Gourmet Food"
  className="max-w-full [max-height:60vh] md:max-h-[65vh] [@media(max-width:499px)]:max-h-[45vh] object-contain opacity-40 md:opacity-70"
/>


<h1 className="absolute md:top-45 top-42 transform -translate-y-1/3 text-[hsla(0,0%,100%,1)] md:leading-26 leading-18 text-8xl md:text-9xl drop-shadow-lg text-center frunchy whitespace-nowrap [@media(max-width:499px)]:top-35">
  GOURMET <br /> ON WHEELS
</h1>

{/* <h1 className="absolute top-1/3 transform -translate-y-1/9 mt-20 text-white text-6xl md:text-8xl font-bold drop-shadow-lg text-center TheSeason whitespace-nowrap">
  ON WHEELS
</h1> */}

    </div>

    {/* Centered Button */}
    <Link to="/about">
  <button className="px-12 py-2 bg-[#CE1126] tracking-widest chloe text-white mb-7 mt-8 md:mt-0 text-xl rounded-3xl hover:bg-yellow-700">
    OUR STORY
  </button>
</Link>
  </div>
</div>








      <div className="relative w-full max-h-[300px]">
        <img
          src={sectionOne}
          alt="Sample Image"
          className="w-full max-h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      <div>
        <SampleMenu />
      </div>

      <div className="relative w-full max-h-[300px]">
        <img
          src={menuimg}
          alt="Menu Img"
          className="w-full max-h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <div>
        <CustomerR />
      </div>
      <div>
        <CustomerReview />
      </div>

       

      <div>
        <EventCard />
      </div>

      <div>
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
