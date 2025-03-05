import React from "react";
import headerImage from "../../assets/headerImage.png";
import SampleMenu from '../../Components/SampleMenu';

const Home = () => {
  return (
     <div>
      <div className="relative w-full h-screen bg-green-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Image Container */}
      <div className="relative md:bottom-0 bottom-15 md:bottom-0 flex justify-center">
        <img
          src={headerImage}
          alt="Gourmet Food"
          className="max-w-full md:max-h-[90vh] max-h-[70vh] object-contain"
        />
        
        <h1 className="absolute md:top-50 top-40 text-white text-7xl md:text-7xl font-bold drop-shadow-lg text-center">
          GOURMET <br /> ON WHEELS
        </h1>
      </div>

       
      <button className="mb-10 px-6 py-2 bg-[#3D251E]
      text-yellow-400 text-lg font-semibold rounded-lg shadow-md hover:bg-opacity-90">
        OUR STORY
      </button>
    </div>
    <SampleMenu />
     </div>
  );
};

export default Home;
