import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../index.css";  
// import "./Home.css";  
import { Link } from "react-router-dom";

import headerImage from "../../assets/headerImage.png";
import SampleMenu from "../../Components/SampleMenu";
// import ContactSection from "../../Components/ContactSection";
import CustomerReview from "../../Components/CustomerReview";
import OurStory from "../../Components/OurStory";
import CustomerR from "../../Components/CustomerR";
import Getin from "../../Components/Getin";
 
 
 
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

    </div>

    {/* Centered Button */}
    <Link to="/contact">
  <button className="px-12 py-2 bg-[#CE1126] tracking-widest chloe text-white mb-7 mt-8 md:mt-0 text-xl rounded-3xl hover:bg-yellow-700">
    BOOK A TASTING
  </button>
</Link>
  </div>
</div>




       <OurStory />

      <div>
        <SampleMenu />
      </div>

      <div>
        <CustomerR />
      </div>
      <div>
        <CustomerReview />
      </div>
 
<Getin />
       

    </div>
  );
};

export default Home;
